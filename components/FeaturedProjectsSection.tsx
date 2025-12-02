import { client, urlFor } from "@/lib/sanity";
import { FeaturedProject } from "./FeaturedProject";

interface Project {
  _id: string;
  projectTitle: string;
  slug: { current: string };
  projectImage: unknown;
  projectCategory?: string;
  projectDescription?: string;
  isFeatured: boolean;
}

async function getFeaturedProjects(): Promise<Project[]> {
  const query = `*[_type == "project" && isFeatured == true] | order(_createdAt desc)[0...5] {
    _id,
    projectTitle,
    slug,
    projectImage,
    projectCategory,
    projectDescription,
    isFeatured
  }`;

  return client.fetch(query);
}

export async function FeaturedProjectsSection() {
  const projects = await getFeaturedProjects();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Featured <span className="italic">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we deliver excellence across every
            industry. Our diverse portfolio showcases the breadth of our
            expertise and commitment to results.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <FeaturedProject
              key={project._id}
              title={project.projectTitle}
              subtitle={project.projectDescription}
              image={
                project.projectImage
                  ? urlFor(project.projectImage).width(1920).url()
                  : "/leadership.png"
              }
              category={project.projectCategory}
              slug={project.slug.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
