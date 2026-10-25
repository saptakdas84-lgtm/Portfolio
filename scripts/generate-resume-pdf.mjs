import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

// Create public directory if not exists
const publicDir = path.resolve("./public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const doc = new jsPDF({
  orientation: "portrait",
  unit: "pt",
  format: "letter",
});

const pageWidth = doc.internal.pageSize.getWidth();
let y = 40;

// Header
doc.setFont("helvetica", "bold");
doc.setFontSize(22);
doc.setTextColor(15, 23, 42); // slate-900
doc.text("ALEX MORGAN", 40, y);

y += 18;
doc.setFont("helvetica", "normal");
doc.setFontSize(12);
doc.setTextColor(6, 182, 212); // cyan-600
doc.text("Software Developer & Automation Engineer", 40, y);

y += 16;
doc.setFontSize(9);
doc.setTextColor(100, 116, 139); // slate-500
doc.text("San Francisco, CA  |  alex.morgan.eng@example.com  |  +1 (415) 890-3412  |  github.com/alexmorgan-dev", 40, y);

// Divider line
y += 12;
doc.setDrawColor(226, 232, 240);
doc.setLineWidth(1);
doc.line(40, y, pageWidth - 40, y);

// Section: Summary
y += 20;
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text("PROFESSIONAL SUMMARY", 40, y);

y += 14;
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
const summaryText = "Software Developer and Automation Engineer with 6+ years of experience specializing in resilient full-stack systems, automated CI/CD testing pipelines, and cloud-native infrastructure. Proven track record reducing deployment failures by 85%, cutting regression testing cycles from hours to minutes, and scaling web services to handle 15M+ daily transactions.";
const splitSummary = doc.splitTextToSize(summaryText, pageWidth - 80);
doc.text(splitSummary, 40, y);
y += splitSummary.length * 12 + 6;

// Section: Technical Skills
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text("CORE TECHNICAL COMPETENCIES", 40, y);

y += 14;
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
const skills = [
  "Languages & Frameworks: TypeScript, JavaScript, Go, Python, React, Next.js 14, Node.js, Express, FastAPI, HTML5, Tailwind CSS",
  "Automation & Testing: Playwright, Cypress, Vitest, Jest, k6 Load Profiling, Contract Testing, Selenium, CI/CD Flakiness Elimination",
  "Cloud & DevOps: Docker, Kubernetes, AWS (ECS, Lambda, S3, RDS), Terraform, Helm, GitHub Actions, Prometheus, Grafana",
  "Databases & Queues: PostgreSQL, Redis, Kafka, MongoDB, ClickHouse, Prisma ORM"
];
for (const s of skills) {
  doc.text("• " + s, 40, y);
  y += 13;
}

// Section: Experience
y += 6;
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text("PROFESSIONAL EXPERIENCE", 40, y);

const experiences = [
  {
    role: "Lead Automation & DevOps Engineer",
    company: "CloudScale Technologies — San Francisco, CA",
    date: "2022 – Present",
    bullets: [
      "Architected automated CI/CD pipelines reducing deployment failure rate by 85% and cutting regression testing time from 3.5 hrs to 28 mins.",
      "Engineered an automated ephemeral preview environment system on Kubernetes for every pull request, accelerating QA sign-off by 4x.",
      "Mentored 14 software engineers in automated testing best practices, test-driven development (TDD), and zero-downtime deployment strategies.",
      "Introduced automated performance regression guards with k6 into staging environments, catching 22 latency regressions prior to production."
    ]
  },
  {
    role: "Senior Full-Stack & Automation Engineer",
    company: "FinStream Systems — San Francisco, CA",
    date: "2020 – 2021",
    bullets: [
      "Built resilient microservices handling $40M+ in daily transaction volume with 99.99% availability.",
      "Established comprehensive automated contract and API test suites, reducing external API integration regressions by 90%.",
      "Created an internal developer CLI tool in TypeScript that automated local dev environment spin-up from 45 mins to 2 mins."
    ]
  },
  {
    role: "Software Developer (Platform & Automation)",
    company: "DataPulse Inc. — San Jose, CA",
    date: "2018 – 2020",
    bullets: [
      "Redesigned the automated testing pipeline using Jest and Cypress, doubling test coverage from 44% to 92%.",
      "Spearheaded migration of on-premises Jenkins build servers to cloud-native GitHub Actions, saving $38,000 annually in hosting costs."
    ]
  }
];

for (const exp of experiences) {
  y += 14;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(exp.role, 40, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(exp.date, pageWidth - 40 - doc.getTextWidth(exp.date), y);

  y += 12;
  doc.setFont("helvetica", "italic");
  doc.setTextColor(71, 85, 105);
  doc.text(exp.company, 40, y);

  y += 12;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  for (const b of exp.bullets) {
    const splitB = doc.splitTextToSize("• " + b, pageWidth - 80);
    doc.text(splitB, 40, y);
    y += splitB.length * 11 + 2;
  }
}

// Section: Education & Certifications
y += 6;
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text("EDUCATION & CERTIFICATIONS", 40, y);

y += 14;
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text("University of California, Berkeley", 40, y);
doc.setFont("helvetica", "normal");
doc.setTextColor(51, 65, 85);
doc.text(" — B.S. in Computer Science (Dean's Honor List, Cum Laude)", 190, y);

y += 13;
doc.text("Certifications: AWS Solutions Architect Associate (2023) | Certified Kubernetes App Developer (CKAD, 2023) | Terraform Associate", 40, y);

// Save to disk
const pdfPath = path.join(publicDir, "Alex_Morgan_Resume.pdf");
const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
fs.writeFileSync(pdfPath, pdfBuffer);
console.log("Successfully generated Alex_Morgan_Resume.pdf at:", pdfPath);
