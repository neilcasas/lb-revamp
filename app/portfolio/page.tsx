import { PageHero } from "@/components/PageHero";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        image="/leadership.png"
        title="Portfolio"
        description="Explore our carefully curated collection of successful projects. Each represents our commitment to excellence in design, development, and strategic thinking."
      />
    </div>
  );
}
