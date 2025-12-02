import { PageHero } from "@/components/PageHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { client, urlFor } from "@/lib/sanity";

interface Project {
  _id: string;
  projectTitle: string;
  slug: { current: string };
  projectImage: unknown;
  projectClient?: string;
  projectCategory?: string;
  projectDescription?: string;
  projectLink?: string;
}

async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    projectTitle,
    slug,
    projectImage,
    projectClient,
    projectCategory,
    projectDescription,
    projectLink
  }`;

  return client.fetch(query);
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        image="/leadership.png"
        title="Portfolio"
        description="Explore our carefully curated collection of successful projects. Each represents our commitment to excellence in design, development, and strategic thinking."
      />

      <section className="container mx-auto px-4 py-16 md:py-24">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <PortfolioCard
                key={project._id}
                title={project.projectTitle}
                description={project.projectDescription || ""}
                image={
                  project.projectImage
                    ? urlFor(project.projectImage).width(1200).url()
                    : "/leadership.png"
                }
                client={project.projectClient}
                category={project.projectCategory}
                slug={project.slug.current}
                link={project.projectLink}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects available yet. Check back soon!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
