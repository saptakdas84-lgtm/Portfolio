"use client";

import React, { useState } from "react";
import { personalInfo, experiences, educations, certifications, skillCategories } from "@/data/portfolioData";
import { useToast } from "@/hooks/useToast";
import {
  Download,
  Printer,
  Copy,
  Check,
  FileText,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";

export default function ResumePage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainText = `
ALEX MORGAN
Software Developer & Automation Engineer
San Francisco, CA | ${personalInfo.email} | ${personalInfo.phone}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

SUMMARY:
${personalInfo.bio}

CORE SKILLS:
- Languages: TypeScript, JavaScript, Go, Python, SQL, HTML5, CSS3
- Frontend: React, Next.js 14, Tailwind CSS, State Management
- Automation & QA: Playwright, Cypress, Vitest, Jest, k6, Contract Testing, CI/CD Flakiness Elimination
- Cloud & DevOps: Docker, Kubernetes, AWS, Terraform, GitHub Actions, Prometheus, Grafana
- Databases: PostgreSQL, Redis, Apache Kafka, MongoDB, ClickHouse

WORK EXPERIENCE:
${experiences
  .map(
    (e) => `
${e.role.toUpperCase()}
${e.company} | ${e.startDate} - ${e.endDate} | ${e.location}
${e.achievements.map((a) => `• ${a}`).join("\n")}
Tech: ${e.techStack.join(", ")}
`
  )
  .join("\n")}

EDUCATION:
${educations.map((ed) => `${ed.degree} in ${ed.field} - ${ed.institution} (${ed.year})`).join("\n")}

CERTIFICATIONS:
${certifications.map((c) => `• ${c.name} - ${c.issuer} (${c.issueDate})`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    toast("Resume copied to clipboard in plain-text ATS format", "success");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadPdf = () => {
    setDownloading(true);
    toast("Downloading Alex Morgan's Resume PDF...", "info");

    // Create an anchor and trigger download
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl;
    link.download = "Alex_Morgan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      toast("Download complete!", "success");
    }, 1200);
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header and Download Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 print:hidden">
        <div>
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Professional Resume
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            ATS-friendly formatted resume • Updated for 2026 roles
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/25 transition-all active:scale-95 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? "Preparing PDF..." : "Download PDF"}</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-sm transition-colors"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Print</span>
          </button>

          <button
            onClick={handleCopyPlainText}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-sm transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4 text-slate-500" />
            )}
            <span>{copied ? "Copied ATS" : "Copy Plain Text"}</span>
          </button>
        </div>
      </div>

      {/* Printable / Visual Paper Container */}
      <div className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl space-y-10 print:border-none print:shadow-none print:p-0 print:bg-transparent">
        {/* Paper Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                {personalInfo.role}
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-cyan-500 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                {personalInfo.email}
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-500" />
                {personalInfo.phone}
              </span>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors"
                >
                  github.com/alexmorgan-dev
                </a>
                <span>•</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors"
                >
                  linkedin.com/in/alexmorgan-automation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b border-slate-200/80 dark:border-slate-800/80 pb-1.5">
            Professional Summary
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {personalInfo.bio}
          </p>
        </section>

        {/* Technical Competencies Matrix */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b border-slate-200/80 dark:border-slate-800/80 pb-1.5">
            Technical Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">
                Automation & QA:
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                Playwright, Cypress, Vitest, Jest, k6 Performance Testing, Contract Testing (Pact), Flaky Test Quarantine, Parallel Sharding
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">
                Software & Web Development:
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                TypeScript, React, Next.js 14, Node.js, Express, Go, Python, FastAPI, Tailwind CSS, REST APIs, GraphQL
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">
                DevOps & Cloud Infrastructure:
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                Docker, Kubernetes, AWS (ECS, Lambda, S3, RDS), Terraform, GitHub Actions, ArgoCD, Helm, Prometheus, Grafana
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">
                Databases & Telemetry:
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                PostgreSQL, Redis (caching & queues), Apache Kafka, MongoDB, ClickHouse, Prisma ORM, OpenTelemetry
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b border-slate-200/80 dark:border-slate-800/80 pb-1.5">
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {exp.startDate} – {exp.endDate}
                  </div>
                </div>

                <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="marker:text-cyan-500">
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs font-mono text-slate-500 pt-1">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Tech:</span>{" "}
                  {exp.techStack.join(" • ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b border-slate-200/80 dark:border-slate-800/80 pb-1.5">
            Education & Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            {/* Education */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                Education
              </h4>
              {educations.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-500">
                    {edu.degree} in {edu.field} ({edu.year})
                  </div>
                  {edu.honors && (
                    <div className="text-xs text-emerald-600 dark:text-emerald-400">
                      {edu.honors}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                Certifications
              </h4>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>
                      <strong>{cert.name}</strong> ({cert.issuer})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
