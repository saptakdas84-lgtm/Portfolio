"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/portfolioData";
import { ExternalLink, Github, ArrowUpRight, Cpu, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl glass-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-500">
            {project.completionDate}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Primary Metric Pill */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 p-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between text-xs font-medium">
            <span className="text-slate-500 dark:text-slate-400">Key Outcome:</span>
            <span className="font-bold text-cyan-600 dark:text-cyan-400 font-mono">
              {project.metrics[0].value} ({project.metrics[0].label})
            </span>
          </div>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-200/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-300/40 dark:border-slate-700/40"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-1.5 py-0.5 text-[11px] text-slate-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3">
        {onSelect ? (
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            <span>Architecture & Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            <span>View Architecture</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
