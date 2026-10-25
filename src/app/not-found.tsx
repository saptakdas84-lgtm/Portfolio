import React from "react";
import Link from "next/link";
import { Terminal, Home, ArrowLeft, Search, FileText } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Alex Morgan",
  description: "The requested route does not exist or has been relocated.",
};

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      {/* 404 Terminal Icon */}
      <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/10">
        <Terminal className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-rose-500/10 text-rose-500 border border-rose-500/20">
          STATUS 404 // HTTP_ROUTE_NOT_FOUND
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Endpoint Not Resolved
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          The route you are attempting to access does not exist in this deployment cluster, or may have been refactored.
        </p>
      </div>

      {/* Mock Terminal Output */}
      <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-950 text-left font-mono text-xs text-slate-400 border border-slate-800 space-y-1.5 shadow-xl">
        <div className="text-cyan-400">$ curl -I https://alexmorgan.dev/target-path</div>
        <div className="text-rose-400">HTTP/2 404 Not Found</div>
        <div className="text-slate-500">x-cluster-ingress: edge-us-west-1</div>
        <div className="text-emerald-400">tip: fallback to static index route &apos;/&apos;</div>
      </div>

      {/* Suggested Routes */}
      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <Search className="w-4 h-4 text-cyan-500" />
          <span>Explore Projects</span>
        </Link>

        <Link
          href="/resume"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <FileText className="w-4 h-4 text-indigo-500" />
          <span>View Resume</span>
        </Link>
      </div>
    </div>
  );
}
