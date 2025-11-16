import { AboutSection } from "@/components/AboutSection";
import { CompaniesScroll } from "@/components/CompaniesScroll";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <CompaniesScroll />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
}
