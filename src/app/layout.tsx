import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ToastProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alex Morgan — Software Developer & Automation Engineer",
  description:
    "Portfolio of Alex Morgan. Over 6+ years specializing in distributed systems, autonomous CI/CD pipelines, full-stack React & Next.js applications, and test automation architecture.",
  keywords: [
    "Alex Morgan",
    "Software Developer",
    "Automation Engineer",
    "CI/CD Architect",
    "DevOps",
    "Next.js",
    "React",
    "TypeScript",
    "Playwright",
    "Kubernetes",
    "Docker",
    "San Francisco Software Engineer",
  ],
  authors: [{ name: "Alex Morgan", url: "https://alexmorgan-dev.example.com" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan-dev.example.com",
    title: "Alex Morgan — Software Developer & Automation Engineer",
    description:
      "Engineering resilient distributed systems, self-healing test frameworks, and high-velocity cloud CI/CD pipelines.",
    siteName: "Alex Morgan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Software Developer & Automation Engineer",
    description:
      "Engineering resilient distributed systems, self-healing test frameworks, and high-velocity cloud CI/CD pipelines.",
    creator: "@alexmorgan_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
