import React from "react";
import Link from "next/link";
import { personalInfo, educations, certifications } from "@/data/portfolioData";
import {
  Code2,
  Terminal,
  Cpu,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Laptop,
  Heart,
  FileText,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "About Alex Morgan — Software Developer & Automation Engineer",
  description:
    "Learn more about Alex Morgan's background, engineering principles, experience in test automation and full-stack software development.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
          Engineering Story & Principles
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About Alex Morgan
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {personalInfo.bio}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content (Left) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Engineering Philosophy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-cyan-500" />
              Engineering Philosophy
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.aboutDetailed.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Three Core Principles */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Core Principles I Build By
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Deterministic By Default
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Flaky tests and non-reproducible bugs are unacceptable. Every pipeline, test case, and build artifact must be completely deterministic.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Velocity via Automation
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Automating repetitive testing, PR preview deploys, and container scans liberates engineers to focus purely on product innovation.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Observable & Resilient
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Systems must emit meaningful structured telemetry and fail gracefully with automated circuit breakers and canaries.
                </p>
              </div>
            </div>
          </section>

          {/* Education & Academic Rigor */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-cyan-500" />
              Education & Academic Rigor
            </h2>
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                      {edu.degree} in {edu.field}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {edu.year}
                  </div>
                </div>

                {edu.honors && (
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-md w-fit border border-emerald-500/20">
                    {edu.honors}
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Award className="w-6 h-6 text-amber-500" />
              Professional Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      {cert.name}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-500 shrink-0">
                      {cert.issueDate}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                  <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 pt-1">
                    ID: {cert.credentialId}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Info (Right) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Facts Card */}
          <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Laptop className="w-4 h-4 text-cyan-500" />
              Quick Bio Highlights
            </h3>

            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-medium text-slate-500">Location</span>
                <span className="text-slate-900 dark:text-white font-medium">
                  San Francisco, CA
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-medium text-slate-500">Timezone</span>
                <span className="text-slate-900 dark:text-white font-mono">
                  PST / UTC-7
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-medium text-slate-500">Primary Role</span>
                <span className="text-slate-900 dark:text-white font-medium">
                  Staff / Senior SWE & Automation
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-medium text-slate-500">Experience</span>
                <span className="text-slate-900 dark:text-white font-medium">
                  6+ Years Production
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-medium text-slate-500">Status</span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Hire
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/resume"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>View Full Resume</span>
              </Link>
            </div>
          </div>

          {/* Daily Stack & Tooling */}
          <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-500" />
              Daily Workspace & Tools
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span><strong>Hardware:</strong> MacBook Pro M3 Max 64GB</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span><strong>Editor:</strong> VS Code / Antigravity IDE</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span><strong>Terminal:</strong> Ghostty / iTerm2 with Zsh</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span><strong>Testing:</strong> Playwright, Vitest, k6</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span><strong>CI / CD:</strong> GitHub Actions, ArgoCD</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/30 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              Want to collaborate?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              I am open to technical leadership, full-stack development, and test automation engineering opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
