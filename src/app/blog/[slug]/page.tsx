import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/portfolioData";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Terminal,
  User,
  ArrowRight,
} from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Alex Morgan`,
    description: post.summary,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-cyan-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Published {post.publishedAt}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
          {post.summary}
        </p>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pt-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              Alex Morgan
            </div>
            <div className="text-xs text-slate-500">
              Software Developer & Automation Engineer
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="space-y-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="leading-8">
            {paragraph}
          </p>
        ))}

        {/* Tags */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Article Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Author Callout */}
      <div className="my-12 p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-lg">
          <Terminal className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            Written by Alex Morgan
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Alex is a Software Developer & Automation Engineer based in San Francisco, CA. He builds resilient web applications and eliminates engineering friction through automated delivery frameworks.
          </p>
          <div className="pt-1">
            <Link
              href="/contact"
              className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Have thoughts or questions on this article? Let&apos;s discuss →
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Continue Reading
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherPosts.map((other) => (
            <Link
              key={other.slug}
              href={`/blog/${other.slug}`}
              className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2"
            >
              <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                {other.category}
              </span>
              <h4 className="font-bold text-base text-slate-900 dark:text-white line-clamp-2">
                {other.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                {other.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
