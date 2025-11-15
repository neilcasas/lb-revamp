"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function WhoAreWeSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold text-foreground"
            >
              Who are we?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="space-y-4 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                The Louvreblanc Consulting Group is{" "}
                <span className="text-foreground font-medium">
                  a powerful strategic mechanism for the powerful
                </span>
                , providing public relations, writing, design, research, and
                project management services with an unwavering commitment to
                excellence.
              </p>

              <p>
                We operate with a{" "}
                <span className="text-foreground font-medium">
                  very select client roster—only 3 to 5 clients at a time
                </span>
                —to ensure high-impact, tailored project delivery. Our
                privacy-first approach includes strict protocols and NDAs to
                safeguard sensitive client information.
              </p>

              <p>
                Every piece of work is screened for plagiarism, AI detection,
                and fact-checked through peer review to reach a{" "}
                <span className="text-foreground font-medium">
                  minimum authenticity threshold of 90%
                </span>
                . Clients retain full intellectual property ownership, with
                contracts that waive Louvreblanc&apos;s rights to produced work.
              </p>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Image
              src="/caesar.png"
              alt="Augustus of Prima Porta"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
