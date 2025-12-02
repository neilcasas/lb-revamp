"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  client?: string;
  category?: string;
  slug: string;
  link?: string;
}

export function PortfolioCard({
  title,
  description,
  image,
  client,
  category,
  slug,
  link,
}: PortfolioCardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Glassmorphic Card Overlay */}
      <div className="absolute bottom-0 right-0 w-full md:w-2/3 p-6 md:p-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          {/* Category Badge */}
          {category && (
            <span className="inline-block text-xs text-muted-foreground mb-3">
              {category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {description}
          </p>

          {/* Access Button */}
          <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400/10 transition-colors">
            Access
          </button>
        </div>
      </div>

      {/* Client label - top left */}
      {client && (
        <div className="absolute top-4 left-4">
          <span className="text-xs text-white/70 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            {client}
          </span>
        </div>
      )}
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return <Link href={`/portfolio/${slug}`}>{cardContent}</Link>;
}
