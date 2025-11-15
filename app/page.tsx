import { StatisticsSection } from "@/components/StatisticsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold">Landing Page</h1>
      </div>

      <StatisticsSection />
    </div>
  );
}
