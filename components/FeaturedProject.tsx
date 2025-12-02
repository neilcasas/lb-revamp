"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface FeaturedProjectProps {
  title: string;
  subtitle?: string;
  image: string;
  category?: string;
  categories?: string[];
  slug: string;
}

export function FeaturedProject({
  title,
  subtitle,
  image,
  category,
  categories,
  slug,
}: FeaturedProjectProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center", "end start"],
  });

  // Scale from 0.85 -> 1 -> 0.85 as element enters, centers, then exits
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  return (
    <Link href={`/portfolio/${slug}`}>
      <motion.div
        ref={containerRef}
        style={{ scale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative w-full h-screen min-h-[600px] overflow-hidden cursor-pointer rounded-3xl origin-center"
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Category badges - top left */}
        <div className="absolute top-8 left-8 flex flex-wrap gap-2">
          {categories?.map((cat, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full"
            >
              {cat}
            </span>
          ))}
          {!categories && category && (
            <span className="px-4 py-2 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full">
              {category}
            </span>
          )}
        </div>

        {/* Hover indicator - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>

        {/* Content - bottom left */}
        <div className="absolute bottom-8 left-8 right-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
            <span className="font-light">{title.split(" ")[0]}</span>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h2>
        </div>
      </motion.div>
    </Link>
  );
}
