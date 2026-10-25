"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import {
  projects,
  skillCategories,
  testimonials,
  blogPosts,
  personalInfo,
  Project,
} from "@/data/portfolioData";
import {
  ArrowRight,
  Code2,
  Cpu,
  Cloud,
  CheckCircle2,
  Zap,
  Shield,
  Layers,
  Terminal,
  FileText,
  Mail,
  Quote,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Engineering Pillars Section */}
      <section className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              Core Engineering Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bridging Scalable Code with Autonomous Delivery
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Software shouldn&apos;t just run fast in production—it should be tested comprehensively, deployed safely without human anxiety, and maintained with zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Full-Stack Architecture
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Building responsive, performant user interfaces with Next.js, React, and TypeScript paired with event-driven backend services and reliable APIs.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                <span>Next.js</span> • <span>TypeScript</span> • <span>Node.js</span> • <span>Tailwind</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Autonomous Testing & QA
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Architecting deterministic end-to-end testing suites with Playwright and Cypress. Banishing test flakiness and automating synthetic API regression guards.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                <span>Playwright</span> • <span>Cypress</span> • <span>k6</span> • <span>Contract Testing</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Cloud CI/CD & Reliability
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Designing zero-downtime canary deployment pipelines, Kubernetes preview environments per PR, and immutable infrastructure-as-code with Terraform.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                <span>Docker</span> • <span>Kubernetes</span> • <span>GitHub Actions</span> • <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Systems & Tools
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl">
              High-impact solutions engineered for distributed scale, automated reliability, and high engineering velocity.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors group"
          >
            <span>View All Projects ({projects.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* Quick Skills Spotlight */}
      <section className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                Technical Mastery
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                A Comprehensive Toolkit for Modern Systems
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                From frontend component architecture to distributed queues and continuous integration infrastructure, my workflow is built on battle-tested standards and precision.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Deterministic, self-healing test automation</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Scalable Next.js 14 & React architectures</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Automated canary deployments & infrastructure as code</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/skills"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
                >
                  <span>Explore Interactive Skills Matrix</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Skills Snapshot Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800/80 space-y-3"
                >
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.slice(0, 4).map((s) => (
                      <span
                        key={s.name}
                        className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements / Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            Recommendations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Engineering Leaders Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Feedback from engineering leaders, architects, and teammates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between relative group hover:border-cyan-500/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-cyan-500/20 absolute top-4 right-4" />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  {t.avatarInitials}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                    {t.author}
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Blog Highlights */}
      <section className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                Technical Writing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Engineering Insights & Guides
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl">
                Real-world learnings on test flakiness, multi-region CI/CD pipelines, and high-velocity platform engineering.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Hire Me CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Currently Available for New Roles</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Accelerate Your Engineering Velocity?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need to scale your full-stack web applications, automate end-to-end testing, or modernize your cloud delivery pipelines, let&apos;s build something great together.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-400/25 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Start a Conversation</span>
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all hover:scale-105 active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
