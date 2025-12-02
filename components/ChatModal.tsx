"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_MESSAGES_PER_SESSION = 10;

// Generate a unique session ID
const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

export function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the AI assistant for The Louvreblanc Consulting Group. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messagesRemaining, setMessagesRemaining] = useState(
    MAX_MESSAGES_PER_SESSION
  );
  const [rateLimitedUntil, setRateLimitedUntil] = useState<number | null>(null);
  const [sessionId] = useState(generateSessionId);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSessionLimitReached = messagesRemaining <= 0;
  const isRateLimited =
    rateLimitedUntil !== null && Date.now() < rateLimitedUntil;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isSessionLimitReached || isRateLimited)
      return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
          sessionId,
        }),
      });

      const data = await response.json();

      if (data.rateLimited) {
        setRateLimitedUntil(Date.now() + data.waitTime * 1000);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `You're sending messages too quickly. Please wait ${data.waitTime} seconds before trying again.`,
          },
        ]);
      } else if (data.sessionLimitReached) {
        setMessagesRemaining(0);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "You've reached the message limit for this session. Please email us at inquire@thelouvreblanc.com for further assistance.",
          },
        ]);
      } else if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I apologize, but I encountered an error. Please try again.",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
        if (data.messagesRemaining !== undefined) {
          setMessagesRemaining(data.messagesRemaining);
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:h-[600px] bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Ask Louvreblanc
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    AI-powered assistant
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-cyan-400 text-black"
                        : "bg-white/10 text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-white/10"
            >
              <div className="flex gap-3">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder={
                    isSessionLimitReached
                      ? "Message limit reached"
                      : isRateLimited
                        ? "Please wait..."
                        : "Ask about our services, team, or how we can help..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading || isSessionLimitReached || isRateLimited}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl h-12 px-4 focus-visible:ring-0 focus-visible:border-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <Button
                  type="submit"
                  disabled={
                    isLoading ||
                    !input.trim() ||
                    isSessionLimitReached ||
                    isRateLimited
                  }
                  className="h-12 px-6 bg-cyan-400 hover:bg-cyan-300 text-black font-medium rounded-xl disabled:opacity-50 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </Button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-muted-foreground">
                  Powered by AI • Responses based on Louvreblanc knowledge base
                </p>
                <p
                  className={`text-xs ${messagesRemaining <= 3 ? "text-amber-400" : "text-muted-foreground"}`}
                >
                  {messagesRemaining} message
                  {messagesRemaining !== 1 ? "s" : ""} remaining
                </p>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
