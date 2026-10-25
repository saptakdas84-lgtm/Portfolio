import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, Project } from "@/data/portfolioData";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Calendar,
  Share2,
} from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Alex Morgan`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-cyan-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Main Container */}
      <article className="space-y-10">
        {/* Header Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Completed in {project.completionDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/25 transition-all"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-500 dark:text-cyan-400">
                {m.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Description */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-500" />
            System Architecture & Context
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            {project.description}
          </p>
        </section>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              The Architectural Challenge
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 space-y-3">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              The Implemented Solution
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Architectural Decisions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            Key Technical Implementations
          </h2>
          <div className="space-y-3">
            {project.architecturePoints.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Applied */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
