import { PageHero } from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        image="/leadership.png"
        title="Services"
        description="Comprehensive solutions tailored to your needs. From strategy to execution, we deliver excellence at every step of your digital journey."
        reversed
      />
    </div>
  );
}
