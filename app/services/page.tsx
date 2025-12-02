import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Feather, Palette, FolderKanban, Search } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Writing",
    description:
      "The Louvreblanc Consulting has been engaged in a range of writing projects, including co-authoring policy proposals at the legislative level. We have also partnered with early stage startups to develop their operational and compliance manuals, and produced magazines and newsletters for key international fraternal organizations.",
    icon: Feather,
  },
  {
    title: "Design",
    description:
      "We've worked with companies on brand and product design, creating advertising and publicity materials. We've also partnered with interior design and architecture firms to help visualize their structural projects.",
    icon: Palette,
  },
  {
    title: "Project Management",
    description:
      "The Louvreblanc also offers project management for high-stakes, high-touch, and high-impact initiatives—ranging from electoral campaigns and early-stage company investor launches to the planning and execution of conferences and expos.",
    icon: FolderKanban,
  },
  {
    title: "Research",
    description:
      "We've also supported organizations in conducting academic and policy research. Our work has included developing case studies, performing market and industry analyses, leading quantitative and statistical research, and conducting advanced data analytics.",
    icon: Search,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        title="Our Services"
        description="Comprehensive solutions tailored to your needs. From strategy to execution, we deliver excellence at every step of your journey."
      />

      {/* Services List */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
          {/* Bottom border for last item */}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* Combined Services CTA */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10">
            {/* Left - Image */}
            <div className="relative min-h-[300px] lg:min-h-[400px]">
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <h3 className="text-3xl md:text-4xl font-normal text-white text-center leading-tight">
                  Need one of
                  <br />
                  <span className="italic">everything?</span>
                </h3>
              </div>
            </div>

            {/* Right - Text */}
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 lg:p-16 flex items-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We also combine these services as needed. We will handle
                everything required to move your project forward, so you
                don&apos;t have to. You bring the vision; we bring the
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
