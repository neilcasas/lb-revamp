import { AboutSection } from "@/components/AboutSection";
import { CompaniesScroll } from "@/components/CompaniesScroll";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <CompaniesScroll />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
