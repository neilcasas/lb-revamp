"use client";

import Image from "next/image";
import { Marquee } from "./ui/marquee";

interface CompaniesScrollProps {
  logos?: string[];
  title?: string;
}

export function CompaniesScroll({
  logos = [
    "/coca-cola-logo.png",
    "/coca-cola-logo.png",
    "/coca-cola-logo.png",
    "/coca-cola-logo.png",
    "/coca-cola-logo.png",
    "/coca-cola-logo.png",
  ],
  title = "Trusted by many.",
}: CompaniesScrollProps) {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-xl md:text-2xl text-muted-foreground">
          {title}
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 md:mx-12"
              style={{ width: "150px" }}
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={150}
                height={80}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
