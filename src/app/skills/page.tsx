"use client";

import React, { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/portfolioData";
import {
  Cpu,
  Code2,
  Cloud,
  Database,
  CheckCircle2,
  Layers,
  Terminal,
  Zap,
  Filter,
} from "lucide-react";

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Automation & QA Engineering":
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      case "Software & Web Development":
        return <Code2 className="w-5 h-5 text-indigo-500" />;
      case "Cloud, DevOps & Infrastructure":
        return <Cloud className="w-5 h-5 text-emerald-500" />;
      case "Databases & Messaging":
        return <Database className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
          Technical Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Skills & Technology Matrix
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          A granular breakdown of languages, testing frameworks, cloud infrastructure, and architectural methodologies utilized across 6+ years of production engineering.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20 font-semibold"
                : "glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Categories Display */}
      <div className="space-y-12">
        {displayedCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 space-y-6"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                {getCategoryIcon(cat.title)}
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h2>
                <p className="text-xs text-slate-500">
                  {cat.skills.length} core competencies
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      {skill.experience}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-slate-500">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DevOps Pipeline Diagram Section */}
      <section className="mt-16 p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 space-y-6">
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Pipeline Architecture
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            End-to-End Automation Lifecycle
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            How these technologies integrate into a seamless, automated continuous delivery loop:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs font-bold text-cyan-500 font-mono">01. CODE & LINT</div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">TypeScript & Git</h4>
            <p className="text-xs text-slate-500">ESLint, Prettier, husky pre-commit checks, type checking.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs font-bold text-indigo-500 font-mono">02. AUTO TEST</div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Playwright & Vitest</h4>
            <p className="text-xs text-slate-500">Fast parallel suites, contract testing, and visual regressions.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs font-bold text-emerald-500 font-mono">03. CONTAINERIZE</div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Docker & Trivy</h4>
            <p className="text-xs text-slate-500">Multi-stage builds, vulnerability scans, slim production images.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs font-bold text-amber-500 font-mono">04. DEPLOY</div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Kubernetes & ArgoCD</h4>
            <p className="text-xs text-slate-500">Canary progressive rollouts with automated health rollback.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs font-bold text-rose-500 font-mono">05. OBSERVE</div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Prometheus & Grafana</h4>
            <p className="text-xs text-slate-500">OpenTelemetry tracing, p99 latency alerts, SLA tracking.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
