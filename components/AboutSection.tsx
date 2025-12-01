"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SpotlightCard from "./SpotlightCard";
import CountUp from "./CountUp";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const statistics = [
    { label: "Months Since Founded", value: 36, suffix: "+" },
    { label: "Global Clients", value: 21, suffix: "" },
    { label: "Direct Engagements", value: 190, suffix: "k" },
    { label: "In Awarded Projects", value: 1.7, suffix: "m" },
  ];

  const text =
    "The Louvreblanc Consulting Group positions itself as a discreet, high-trust strategic partner—especially for organizations or individuals needing sensitive materials handled with care. Their service blend spans content creation, design, communications, governance, and advisory support. They stand out with their privacy-first approach, quality assurance, and tailored client relationships.";

  const words = text.split(" ");

  return (
    <section className="py-24 bg-linear-to-b from-neutral-900 to-[#141416]">
      <div className="container mx-auto px-4">
        {/* Small "About Us" label */}
        <div className="mb-8">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            About Us
          </span>
        </div>

        <div className="space-y-16">
          {/* Text content with scroll reveal animation */}
          <div ref={ref}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <SpotlightCard
                  className="h-full min-h-[200px] flex flex-col justify-center"
                  spotlightColor="rgba(255, 255, 255, 0.25)"
                >
                  <div>
                    <h3 className=" text-foreground mb-4 text-xl">
                      {stat.label}
                    </h3>
                    <div className="text-5xl md:text-6xl font-bold text-foreground">
                      <CountUp
                        from={0}
                        to={stat.value}
                        duration={2}
                        separator=","
                        className="inline-block"
                      />
                      {stat.suffix && (
                        <span className="inline-block">{stat.suffix}</span>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
