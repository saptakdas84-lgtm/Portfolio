"use client";

import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Sparkles,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>Available for Senior & Lead Roles • SF & Remote</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Engineering Resilience &{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                  Automation Velocity
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                Hi, I&apos;m Alex Morgan
              </p>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I specialize in full-stack web applications, distributed event architectures, and bulletproof CI/CD testing frameworks that turn fragile releases into autonomous, predictable deployments.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>Resume & PDF</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
              >
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Email Alex Morgan"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Automation Terminal */}
          <div className="lg:col-span-5 w-full">
            <InteractiveTerminal />
          </div>
        </div>

        {/* Live Metrics Highlight Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-card">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
