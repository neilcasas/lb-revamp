import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { knowledgeBase } from "@/data/knowledge-base";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Rate limiting constants
const MAX_MESSAGES_PER_SESSION = 10;
const MAX_MESSAGES_PER_MINUTE = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

// In-memory rate limiting (per IP)
const rateLimitMap = new Map<
  string,
  { timestamps: number[]; sessionCount: number }
>();

const SYSTEM_PROMPT = `
You are the AI representative for ${knowledgeBase.agencyName}.
Here is your complete knowledge base about our agency, services, and team:

${JSON.stringify(knowledgeBase, null, 2)}

RULES:
1. Only answer questions using the data provided above. Make sure to keep your messaging concise and ask the user if they want to know more about the topic/company
2. If the answer isn't in the data, politely say "I'm not sure about that specific detail. Please reach out to us at ${knowledgeBase.contact.email} for more information."
3. Be professional, friendly, and concise.
4. When discussing services, mention the relevant contact person.
5. Maintain confidentiality - don't make up information about clients or projects.
6. If asked about pricing, say that pricing is customized based on project scope and to contact us for a consultation.
7. Keep responses focused and under 200 words unless more detail is specifically requested.
8. Use a warm but professional tone befitting a high-end consulting firm.
9. If asked who you are, identify yourself as the AI assistant for The Louvreblanc Consulting Group.
`;

export async function POST(req: Request) {
  try {
    const { message, history, sessionId } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Get client identifier (use sessionId or fallback)
    const clientId = sessionId || "anonymous";
    const now = Date.now();

    // Initialize or get rate limit data
    if (!rateLimitMap.has(clientId)) {
      rateLimitMap.set(clientId, { timestamps: [], sessionCount: 0 });
    }
    const rateData = rateLimitMap.get(clientId)!;

    // Clean up old timestamps (outside the 1-minute window)
    rateData.timestamps = rateData.timestamps.filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW_MS
    );

    // Check per-minute rate limit
    if (rateData.timestamps.length >= MAX_MESSAGES_PER_MINUTE) {
      const oldestTimestamp = rateData.timestamps[0];
      const waitTime = Math.ceil(
        (RATE_LIMIT_WINDOW_MS - (now - oldestTimestamp)) / 1000
      );
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          rateLimited: true,
          waitTime,
          messagesRemaining: MAX_MESSAGES_PER_SESSION - rateData.sessionCount,
          minuteMessagesRemaining: 0,
        },
        { status: 429 }
      );
    }

    // Check session limit
    if (rateData.sessionCount >= MAX_MESSAGES_PER_SESSION) {
      return NextResponse.json(
        {
          error: "Session limit reached",
          sessionLimitReached: true,
          messagesRemaining: 0,
          minuteMessagesRemaining:
            MAX_MESSAGES_PER_MINUTE - rateData.timestamps.length,
        },
        { status: 429 }
      );
    }

    // Update rate limit data
    rateData.timestamps.push(now);
    rateData.sessionCount++;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Build conversation history for context
    // Filter out messages until we find the first user message (Gemini requires history to start with user)
    const filteredHistory =
      history?.filter(
        (msg: { role: string }) =>
          msg.role === "user" || msg.role === "assistant"
      ) || [];

    // Find the index of the first user message
    const firstUserIndex = filteredHistory.findIndex(
      (msg: { role: string }) => msg.role === "user"
    );

    // Only include history starting from the first user message
    const validHistory =
      firstUserIndex >= 0 ? filteredHistory.slice(firstUserIndex) : [];

    const chatHistory = validHistory.map(
      (msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })
    );

    const chat = model.startChat({
      history: chatHistory,
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    // Get updated rate limit info
    const updatedRateData = rateLimitMap.get(clientId)!;
    const minuteMessagesRemaining =
      MAX_MESSAGES_PER_MINUTE -
      updatedRateData.timestamps.filter(
        (ts) => Date.now() - ts < RATE_LIMIT_WINDOW_MS
      ).length;

    return NextResponse.json({
      reply: response,
      messagesRemaining:
        MAX_MESSAGES_PER_SESSION - updatedRateData.sessionCount,
      minuteMessagesRemaining,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
