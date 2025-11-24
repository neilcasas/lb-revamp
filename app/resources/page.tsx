"use client";

import { PageHero } from "@/components/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const articles = [
    {
      id: 1,
      image: "/leadership.png",
      title: "Why investing in Bitcoin might be a good idea",
      category: "Crypto",
      date: "Sep 1, 2025",
      isFeatured: true,
    },
    {
      id: 2,
      image: "/leadership.png",
      title: "What to do during a market crash",
      category: "Strategy",
      date: "Aug 29, 2025",
      isFeatured: true,
    },
    {
      id: 3,
      image: "/leadership.png",
      title:
        "How to safely store your crypto: wallets, security and best practices",
      category: "Crypto",
      date: "Sep 11, 2025",
      isFeatured: false,
    },
    {
      id: 4,
      image: "/leadership.png",
      title:
        "Dividend stocks vs. growth stocks: Which is right for your financial goals?",
      category: "Stocks",
      date: "Sep 8, 2025",
      isFeatured: false,
    },
    {
      id: 5,
      image: "/leadership.png",
      title: "ETFs or single stocks?",
      category: "Stocks",
      date: "Sep 5, 2025",
      isFeatured: false,
    },
    {
      id: 6,
      image: "/leadership.png",
      title: "Treasury bills - what are they and how to buy them",
      category: "Bonds",
      date: "Sep 3, 2025",
      isFeatured: false,
    },
  ];

  const categories = ["All", "Crypto", "Strategy", "Stocks", "Bonds"];

  const filteredArticles = articles.filter((article) => {
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
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        image="/leadership.png"
        title="Resources"
        description="Access insights, guides, and tools designed to empower your decision-making. Knowledge that drives results."
        reversed
      />

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
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
