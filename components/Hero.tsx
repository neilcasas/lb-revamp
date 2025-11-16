"use client";

import { motion } from "motion/react";
import { Input } from "./ui/input";

export function Hero() {
  return (
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
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

          {/* AI Input */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-md"
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Ask us anything"
                className="h-14 px-6 text-base bg-white/95 backdrop-blur-sm border-2 border-white/20 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                readOnly
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
