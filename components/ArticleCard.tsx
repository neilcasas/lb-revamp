"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface ArticleCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  isFeatured?: boolean;
  slug?: string;
}

export function ArticleCard({
  image,
  title,
  category,
  date,
  isFeatured = false,
  slug = "#",
}: ArticleCardProps) {
  return (
    <article className="group cursor-pointer">
      <Link href={slug}>
        <div className="space-y-4">
          {/* Image */}
          <div
            className={`relative overflow-hidden rounded-2xl ${
              isFeatured ? "aspect-[16/9]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
          </div>

          {/* Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              {isFeatured && (
                <span className="px-2 py-1 text-xs font-medium bg-foreground text-background rounded">
                  Featured
                </span>
              )}
              <span className="font-medium">{category}</span>
              <span>•</span>
              <time dateTime={date}>{date}</time>
            </div>
            <h3
              className={`font-normal text-foreground leading-snug transition-colors group-hover:text-muted-foreground ${
                isFeatured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
              }`}
            >
              {title}
            </h3>
          </div>
        </div>
      </Link>
    </article>
  );
}
