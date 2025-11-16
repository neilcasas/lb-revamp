"use client";

import Image from "next/image";
import { TestimonialCard } from "./TestimonialCard";
import { Badge } from "./ui/badge";

export function TestimonialsSection() {
  const testimonials = [
    {
      image: "/placeholder-avatar.jpeg",
      name: "Sarah Coleman",
      position: "CEO at NovaTech",
      review:
        "Their design instincts and speed were exactly what we needed to launch on time — and with style.",
      positionClass: "top-[8%] left-[6%]",
      delay: 0.1,
    },
    {
      image: "/placeholder-avatar.jpeg",
      name: "Daniel Reyes",
      position: "Product Manager at Clarity CRM",
      review:
        "From the first call to the final handoff, everything was seamless. The UI/UX work was some of the best we've seen.",
      positionClass: "bottom-[65%] right-[10%]",
      delay: 0.2,
    },
    {
      image: "/placeholder-avatar.jpeg",
      name: "Rachel Lin",
      position: "Co-Founder at Driftly",
      review:
        "We came to Agenciy with a rough idea, and they turned it into a beautiful, functional MVP in weeks. Highly recommended.",
      positionClass: "bottom-[28%] left-[5%]",
      delay: 0.3,
    },
    {
      image: "/placeholder-avatar.jpeg",
      name: "Jason Ford",
      position: "Marketing Lead at BrightChain",
      review:
        "Their process is clear, communication is fast, and the results speak for themselves. We saw a 40% boost in engagement post-launch.",
      positionClass: "bottom-[12%] right-[16%]",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative w-full bg-background py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/testimonials_bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Desktop Layout */}
      <div className="relative hidden lg:block min-h-[900px] z-10">
        {/* Center Heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <div className="mb-6">
            <Badge
              variant="outline"
              className="text-sm px-4 py-2 rounded-full border-neutral-800 text-foreground bg-black/40 backdrop-blur"
            >
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Our Testimonials
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight max-w-4xl">
            <span className="italic">Hear from the Clients</span>
            <br />
            We&apos;ve Partnered With
          </h2>
        </div>

        {/* Scattered cards */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute ${testimonial.positionClass} z-10`}
            style={{ width: "min(360px, 26vw)" }}
          >
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              position={testimonial.position}
              review={testimonial.review}
              delay={testimonial.delay}
            />
          </div>
        ))}
      </div>

      {/* Mobile / Tablet Layout */}
      <div className="lg:hidden relative z-10 flex flex-col px-4">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Badge
              variant="outline"
              className="text-sm px-4 py-2 rounded-full border-neutral-800 text-foreground bg-black/40 backdrop-blur"
            >
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Our Testimonials
            </Badge>
          </div>
          <h2 className="text-4xl font-normal text-white leading-tight">
            <span className="italic">Hear from the Clients</span>
            <br />
            We&apos;ve Partnered With
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              position={testimonial.position}
              review={testimonial.review}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
