import { client, urlFor } from "@/lib/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";

interface Resource {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  category: string;
  image: unknown;
  publishedAt: string;
  isFeatured: boolean;
  excerpt?: string;
  body?: unknown[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getResource(slug: string): Promise<Resource | null> {
  const query = `*[_type == "resource" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    category,
    image,
    publishedAt,
    isFeatured,
    excerpt,
    body
  }`;

  return client.fetch(query, { slug });
}

async function getRelatedResources(
  currentSlug: string,
  category: string
): Promise<Resource[]> {
  const query = `*[_type == "resource" && slug.current != $currentSlug] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    author,
    category,
    image,
    publishedAt,
    isFeatured
  }`;

  return client.fetch(query, { currentSlug, category });
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || "Article image"}
            width={1200}
            height={675}
            className="rounded-2xl w-full"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-foreground mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-foreground/20 pl-6 my-8 italic text-xl text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-foreground underline hover:text-muted-foreground transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-lg text-muted-foreground">
        {children}
      </ol>
    ),
  },
};

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = await getResource(slug);

  if (!resource) {
    notFound();
  }

  const relatedResources = await getRelatedResources(slug, resource.category);

  const formattedDate = new Date(resource.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );

  const imageUrl = resource.image
    ? urlFor(resource.image).width(1400).url()
    : "/leadership.png";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Article Header */}
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header Section - Centered */}
          <header className="max-w-4xl mx-auto mb-12 text-center">
            {/* Category */}
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
              #{resource.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground leading-tight mb-6">
              {resource.title}
            </h1>

            {/* Author & Date */}
            <p className="text-sm text-muted-foreground">
              by{" "}
              <span className="font-medium text-foreground">
                {resource.author}
              </span>{" "}
              | {formattedDate}
            </p>
          </header>

          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src={imageUrl}
                alt={resource.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Body */}
          <div className="max-w-3xl mx-auto">
            {resource.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium">
                {resource.excerpt}
              </p>
            )}

            {resource.body && (
              <div className="prose prose-invert max-w-none">
                <PortableText
                  value={
                    resource.body as Parameters<typeof PortableText>[0]["value"]
                  }
                  components={portableTextComponents}
                />
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Read More Section */}
      {relatedResources.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">
              Read More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {relatedResources.map((related) => (
                <ArticleCard
                  key={related._id}
                  image={
                    related.image
                      ? urlFor(related.image).width(800).url()
                      : "/leadership.png"
                  }
                  title={related.title}
                  category={related.category}
                  date={new Date(related.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                  isFeatured={false}
                  slug={`/resources/${related.slug.current}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == "resource"]{ slug }`;
  const resources = await client.fetch<{ slug: { current: string } }[]>(query);

  return resources.map((resource) => ({
    slug: resource.slug.current,
  }));
}
