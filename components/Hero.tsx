"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { ChatModal } from "./ChatModal";

export function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover scale-107"
          >
            <source src="/hero_vid.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight"
            >
              We are a Powerhouse Behind Players & Power Brokers
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              End-to-end strategic firm offering specialized expertise and
              resources for leaders with special interests.
            </motion.p>

            {/* AI Input - Opens Chat Modal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="max-w-md"
            >
              <div
                className="relative cursor-pointer group"
                onClick={() => setIsChatOpen(true)}
              >
                <Input
                  type="text"
                  placeholder="Ask us anything"
                  className="h-14 px-6 text-base bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 cursor-pointer group-hover:border-cyan-400/50 group-hover:bg-white/15 transition-all focus-visible:ring-0"
                  readOnly
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 group-hover:text-cyan-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-white/50 mt-2 ml-1">
                Click to chat with our AI assistant
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
