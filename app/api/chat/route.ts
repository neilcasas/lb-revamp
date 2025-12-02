import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { knowledgeBase } from "@/data/knowledge-base";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

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
    const { message, history } = await req.json();

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

    return NextResponse.json({ reply: response });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
