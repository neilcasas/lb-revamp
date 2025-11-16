"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface TestimonialCardProps {
  image: string;
  name: string;
  position: string;
  review: string;
  delay?: number;
}

export function TestimonialCard({
  image,
  name,
  position,
  review,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className="bg-neutral-900/90 backdrop-blur-sm rounded-2xl p-6 max-w-sm border border-neutral-800"
    >
      <p className="text-neutral-300 text-sm leading-relaxed mb-6">
        &quot;{review}&quot;
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="text-white text-sm">{name}</h4>
          <p className="text-neutral-400 text-xs">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
