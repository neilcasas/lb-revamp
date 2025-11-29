"use client";

import Image from "next/image";

interface CompaniesShowcaseProps {
  logos?: string[];
  title?: string;
}

export function CompaniesShowcase({
  logos = [
    "/coca-cola-logo.png",
    "/coca-cola-logo.png",
    "/coca-cola-logo.png",
    "/coca-cola-logo.png",
  ],
  title = "Trusted by many.",
}: CompaniesShowcaseProps) {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl text-muted-foreground mb-12">
          {title}
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
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
        </div>
      </div>
    </section>
  );
}
