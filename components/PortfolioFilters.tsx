"use client";

import { useState, useMemo } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { Input } from "./ui/input";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  client?: string;
  category?: string;
  slug: string;
  link?: string;
}

interface PortfolioFiltersProps {
  projects: Project[];
}

const SERVICE_CATEGORIES = [
  "Writing & Influence",
  "Design & Creativity",
  "Project Management & Execution",
  "Research & Analysis",
];

const ITEMS_PER_PAGE = 20;

export function PortfolioFilters({ projects }: PortfolioFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects based on search and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.client?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null ||
        project.category
          ?.toLowerCase()
          .includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, selectedCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col gap-6">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-12 bg-transparent border border-neutral-700 rounded-lg h-12 focus-visible:ring-0 focus-visible:border-white transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === null
                ? "bg-cyan-400 text-black"
                : "border border-neutral-700 text-neutral-400 hover:border-neutral-500"
            }`}
          >
            All Projects
          </button>
          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-cyan-400 text-black"
                  : "border border-neutral-700 text-neutral-400 hover:border-neutral-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {paginatedProjects.length} of {filteredProjects.length} projects
        {selectedCategory && ` in "${selectedCategory}"`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Projects Grid */}
      {paginatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {paginatedProjects.map((project) => (
            <PortfolioCard
              key={project._id}
              title={project.title}
              description={project.description}
              image={project.image}
              client={project.client}
              category={project.category}
              slug={project.slug}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No projects found matching your criteria.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-neutral-700 text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-neutral-500"
          >
            Previous
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage =
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1;

              // Show ellipsis
              const showEllipsisBefore =
                page === currentPage - 2 && currentPage > 3;
              const showEllipsisAfter =
                page === currentPage + 2 && currentPage < totalPages - 2;

              if (showEllipsisBefore || showEllipsisAfter) {
                return (
                  <span
                    key={page}
                    className="px-3 py-2 text-neutral-500 text-sm"
                  >
                    ...
                  </span>
                );
              }

              if (!showPage) return null;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === page
                      ? "bg-cyan-400 text-black"
                      : "border border-neutral-700 text-neutral-400 hover:border-neutral-500"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-neutral-700 text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-neutral-500"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
