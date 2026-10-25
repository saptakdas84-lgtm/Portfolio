"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { personalInfo } from "@/data/portfolioData";
import { useToast } from "@/hooks/useToast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Sparkles,
  RefreshCw,
} from "lucide-react";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const { toast } = useToast();

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    projectType: "Full-Stack Development",
    timeline: "1-3 Months",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    values: FormValues;
    ticketId: string;
    timestamp: string;
  } | null>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Live San Francisco PST clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formValues.name.trim()) {
      errs.name = "Full name is required.";
    } else if (formValues.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!formValues.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formValues.subject.trim()) {
      errs.subject = "Subject line is required.";
    } else if (formValues.subject.trim().length < 3) {
      errs.subject = "Subject must be at least 3 characters.";
    }

    if (!formValues.message.trim()) {
      errs.message = "Message content is required.";
    } else if (formValues.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast("Please fix the highlighted validation errors.", "error");
      return;
    }

    setIsSubmitting(true);

    // Simulate webhook dispatch
    setTimeout(() => {
      setIsSubmitting(false);

      const ticket = `AM-${Math.floor(1000 + Math.random() * 9000)}`;
      const timeStamp = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      setSubmittedData({
        values: { ...formValues },
        ticketId: ticket,
        timestamp: timeStamp,
      });

      toast("Message dispatched successfully! Ticket #" + ticket, "success");

      // Celebrate with confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#6366f1", "#10b981", "#8b5cf6"],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 1200);
  };

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      toast("Email copied to clipboard!", "success");
      setTimeout(() => setCopiedEmail(false), 3000);
    } else {
      setCopiedPhone(true);
      toast("Phone number copied to clipboard!", "success");
      setTimeout(() => setCopiedPhone(false), 3000);
    }
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormValues({
      name: "",
      email: "",
      subject: "",
      projectType: "Full-Stack Development",
      timeline: "1-3 Months",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s Build Resilient Systems Together
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Whether you&apos;re looking for a Senior / Lead Software & Automation Engineer, want to eliminate CI flakiness, or need full-stack architecture guidance—reach out below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form (Left) */}
        <div className="lg:col-span-7">
          {submittedData ? (
            /* Success confirmation card */
            <div className="p-8 rounded-3xl glass-card border border-emerald-500/30 shadow-xl space-y-6 animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    Dispatched via Simulated CI/CD Webhook • Ticket: {submittedData.ticketId}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="text-slate-500">Sender:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {submittedData.values.name} ({submittedData.values.email})
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="text-slate-500">Topic:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {submittedData.values.subject}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    {submittedData.values.projectType}
                  </span>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-slate-500">Message Snippet:</span>
                  <p className="text-slate-700 dark:text-slate-300 italic bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    &ldquo;{submittedData.values.message}&rdquo;
                  </p>
                </div>
                <div className="text-[11px] text-slate-400 pt-1 font-mono">
                  Timestamp: {submittedData.timestamp}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Send Another Message</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Contact Form */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formValues.name}
                    onChange={(e) =>
                      setFormValues({ ...formValues, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border ${
                      errors.name
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-slate-200 dark:border-slate-800 focus:border-cyan-500"
                    } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                    placeholder="sarah@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border ${
                      errors.email
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-slate-200 dark:border-slate-800 focus:border-cyan-500"
                    } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Category */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Primary Topic / Role
                  </label>
                  <select
                    value={formValues.projectType}
                    onChange={(e) =>
                      setFormValues({ ...formValues, projectType: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Full-Stack Development">Full-Stack Development</option>
                    <option value="Automation & CI/CD Architecture">Automation & CI/CD Architecture</option>
                    <option value="Senior / Lead Full-Time Role">Senior / Lead Full-Time Role</option>
                    <option value="DevOps & Cloud Migration">DevOps & Cloud Migration</option>
                    <option value="Advisory & Technical Consulting">Advisory & Technical Consulting</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Target Timeline
                  </label>
                  <select
                    value={formValues.timeline}
                    onChange={(e) =>
                      setFormValues({ ...formValues, timeline: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Immediate / Urgent">Immediate / Within 2 Weeks</option>
                    <option value="1-3 Months">1 – 3 Months</option>
                    <option value="3-6 Months">3 – 6 Months</option>
                    <option value="Exploring Options">Just Exploring / Future</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Subject Line <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formValues.subject}
                  onChange={(e) =>
                    setFormValues({ ...formValues, subject: e.target.value })
                  }
                  placeholder="e.g. Senior Automation Engineer opportunity at CloudTech"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border ${
                    errors.subject
                      ? "border-rose-500 focus:border-rose-500"
                      : "border-slate-200 dark:border-slate-800 focus:border-cyan-500"
                  } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-colors`}
                />
                {errors.subject && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Project Details / Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formValues.message}
                  onChange={(e) =>
                    setFormValues({ ...formValues, message: e.target.value })
                  }
                  placeholder="Tell me about your tech stack, system goals, or role details..."
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900 border ${
                    errors.message
                      ? "border-rose-500 focus:border-rose-500"
                      : "border-slate-200 dark:border-slate-800 focus:border-cyan-500"
                  } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-colors resize-y`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info & Direct Links (Right) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Details Card */}
          <div className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-6">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white">
              Direct Contact
            </h3>

            <div className="space-y-4 text-sm">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-semibold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-semibold text-slate-900 dark:text-white hover:text-indigo-500 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Timezone Clock */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      San Francisco, California
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                    SF Local Time (PST):
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">
                    {currentTime || "10:14:22 AM"}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Professional Networks
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-500 transition-all text-xs font-medium text-slate-700 dark:text-slate-300 gap-1.5"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-500 transition-all text-xs font-medium text-slate-700 dark:text-slate-300 gap-1.5"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-500 transition-all text-xs font-medium text-slate-700 dark:text-slate-300 gap-1.5"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter / X</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Schedule Call Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
              <Calendar className="w-4 h-4" />
              <span>Schedule a 15-Minute Intro Call</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Prefer an introductory video conversation? Feel free to propose a time or reach out via email for an intro meeting.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${personalInfo.email}?subject=Introductory%20Call%20Request`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <span>Request Calendar Invite</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
