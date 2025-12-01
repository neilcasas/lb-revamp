"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Resource {
  id: string;
  image: string;
  title: string;
  category: string;
  date: string;
  isFeatured: boolean;
  slug: string;
}

interface ResourceFiltersProps {
  resources: Resource[];
  categories: string[];
}

export function ResourceFilters({
  resources,
  categories,
}: ResourceFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = resources.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter((a) => a.isFeatured);
  const regularArticles = filteredArticles.filter((a) => !a.isFeatured);

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="md:max-w-xs"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="md:w-auto">
              {selectedCategory}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredArticles.slice(0, 2).map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              category={article.category}
              date={article.date}
              isFeatured={article.isFeatured}
              slug={article.slug}
            />
          ))}
        </div>
      )}

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regularArticles.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              category={article.category}
              date={article.date}
              isFeatured={article.isFeatured}
              slug={article.slug}
            />
          ))}
        </div>
      )}

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No articles found matching your criteria.
          </p>
        </div>
      )}
    </section>
  );
}
