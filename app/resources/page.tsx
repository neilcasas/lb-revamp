import { PageHero } from "@/components/PageHero";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        image="/leadership.png"
        title="Resources"
        description="Access insights, guides, and tools designed to empower your decision-making. Knowledge that drives results."
        reversed
      />
    </div>
  );
}
