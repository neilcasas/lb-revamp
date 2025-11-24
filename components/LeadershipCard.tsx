"use client";
import { motion } from "motion/react";

interface LeadershipCardProps {
  name: string;
  title: string;
  bio?: string;
  delay?: number;
}

export function LeadershipCard({
  name,
  title,
  bio,
  delay = 0,
}: LeadershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="w-full rounded-2xl border border-neutral-800 bg-linear-to-b from-neutral-900 to-black p-8 md:p-10 lg:p-12"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-3xl md:text-4xl font-normal text-foreground mb-2">
            {name}
          </h3>
          <p className="text-lg md:text-xl font-light">{title}</p>
        </div>
        {bio ? (
          <>
            <div className="h-px bg-neutral-800" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {bio}
            </p>
          </>
        ) : null}
      </div>
    </motion.div>
  );
}
