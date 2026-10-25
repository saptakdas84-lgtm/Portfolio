"use client";

import React, { useState, useMemo } from "react";
import { projects, Project } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Search, Filter, Layers, Code, Cpu, Cloud, Terminal } from "lucide-react";

const CATEGORIES = [
  "All",
  "Automation & CI/CD",
  "Full Stack",
  "Cloud & DevOps",
  "AI & Tools",
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
          Engineering Showcase
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured Projects & Architectures
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Production systems, autonomous CI/CD pipelines, and high-performance developer tooling built for reliability and scale.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20 font-semibold"
                    : "glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm glass-card border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
          <span>Showing {filteredProjects.length} of {projects.length} systems</span>
          {selectedCategory !== "All" && <span>• Category: {selectedCategory}</span>}
          {searchQuery && <span>• Query: &ldquo;{searchQuery}&rdquo;</span>}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
          <Terminal className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No projects matched your criteria
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Try resetting your search query or selecting &quot;All&quot; categories to see all systems.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-white hover:bg-cyan-400 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
