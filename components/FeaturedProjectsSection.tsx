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
    <section className="w-full">
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
    </section>
  );
}
