"use client";

import Image from "next/image";

interface PageHeroProps {
  image: string;
  title: string;
  description: string;
  reversed?: boolean;
}

export function PageHero({
  image,
  title,
  description,
  reversed = false,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end lg:flex-row lg:items-end lg:justify-between p-8 md:p-12 lg:p-16">
        {/* Description - Left on desktop, top on mobile (both bottom-left aligned) */}
        <div
          className={`w-full lg:w-1/3 mb-4 lg:mb-0 ${
            reversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Title - Right on desktop, below description on mobile (both bottom-left aligned) */}
        <div
          className={`w-full lg:w-auto ${
            reversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-tight lg:text-right">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
