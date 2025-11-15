import { Hero } from "@/components/Hero";
import { StatisticsSection } from "@/components/StatisticsSection";
import { WhoAreWeSection } from "@/components/WhoAreWeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <WhoAreWeSection />
        <StatisticsSection />
      </div>
    </div>
  );
}
