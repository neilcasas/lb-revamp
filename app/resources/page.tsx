import { PageHero } from "@/components/PageHero";
import { client, urlFor } from "@/lib/sanity";
import { ResourceFilters } from "@/components/ResourceFilters";

interface Resource {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  category: string;
  image: unknown;
  publishedAt: string;
  isFeatured: boolean;
}

async function getResources(): Promise<Resource[]> {
  const query = `*[_type == "resource"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    category,
    image,
    publishedAt,
    isFeatured
  }`;

  return client.fetch(query);
}

async function getCategories(): Promise<string[]> {
  const query = `*[_type == "resource"].category`;
  const categories = await client.fetch<string[]>(query);
  return ["All", ...Array.from(new Set(categories))];
}

export default async function ResourcesPage() {
  const [resources, categories] = await Promise.all([
    getResources(),
    getCategories(),
  ]);

  const formattedResources = resources.map((resource) => ({
    id: resource._id,
    image: resource.image
      ? urlFor(resource.image).width(800).url()
      : "/leadership.png",
    title: resource.title,
    category: resource.category,
    date: new Date(resource.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    isFeatured: resource.isFeatured ?? false,
    slug: `/resources/${resource.slug.current}`,
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        title="Resources"
        description="Access insights, guides, and tools designed to empower your decision-making. Knowledge that drives results."
      />

      <ResourceFilters resources={formattedResources} categories={categories} />
    </div>
  );
}
