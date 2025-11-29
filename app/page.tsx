import { AboutSection } from "@/components/AboutSection";
import { CompaniesShowcase } from "@/components/CompaniesShowcase";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <CompaniesShowcase />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
