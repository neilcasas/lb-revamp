"use client";

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="w-full pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Title - Left column */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight">
              {title}
            </h1>
          </div>

          {/* Description - Right column */}
          <div className="lg:pt-4">
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
