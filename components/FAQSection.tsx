"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function FAQSection() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website project takes 4-8 weeks from kickoff to launch, including design, development, and revisions. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we offer flexible support and maintenance packages to ensure your project continues to perform optimally. This includes updates, bug fixes, performance monitoring, and feature enhancements as needed.",
    },
    {
      question: "What if I only need design or development, not both?",
      answer:
        "We're happy to work on design-only or development-only projects. Our team can seamlessly integrate with your existing workflows, whether you need our designers to create assets for your dev team or our developers to build from your designs.",
    },
    {
      question: "Can you work with my internal team?",
      answer:
        "Absolutely. We often embed with internal teams and adapt to your processes, tools, and communication styles. We can work as an extension of your team or lead the project independently—whatever works best for you.",
    },
    {
      question: "Do you work with startups or only established companies?",
      answer:
        "We work with both! We've helped startups launch their MVPs and established companies refresh their digital presence. Our flexible approach and pricing options accommodate businesses at different stages of growth.",
    },
  ];

  return (
    <section className="relative w-full bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <Badge
              variant="outline"
              className="text-sm px-4 py-2 rounded-full border-neutral-800 text-foreground"
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              FAQs
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight">
            FAQs
          </h2>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl border border-neutral-800 bg-linear-to-b from-neutral-900 to-black p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-neutral-800"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-normal hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
