import React from "react";
import Link from "next/link";
import { experiences } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Experience — Alex Morgan | Software Developer & Automation Engineer",
  description:
    "Professional work history and engineering career achievements of Alex Morgan across CloudScale, FinStream, DataPulse, and Vanguard.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
          Career Journey
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Work Experience & Leadership
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          6+ years of driving engineering velocity, building production full-stack web applications, and establishing autonomous test frameworks at scale.
        </p>

        <div className="pt-2">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>View Full Resume & PDF</span>
          </Link>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2.5 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 rounded-full border-4 border-slate-50 dark:border-[#090d16] bg-cyan-500 group-hover:scale-125 transition-transform shadow-md shadow-cyan-500/30" />

            {/* Experience Card */}
            <div className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 space-y-6 hover:border-cyan-500/40 transition-colors">
              {/* Header info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                    <span className="font-bold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="text-slate-500 font-normal">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{exp.highlightMetric}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Bullet Achievements */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Production Impacts
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
