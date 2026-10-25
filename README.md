# Alex Morgan — Software Developer & Automation Engineer Portfolio

A modern, high-performance, fully responsive, and interactive developer portfolio website engineered with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

Featuring a sleek dark/light theme system, live automation terminal emulator, categorized project showcase with deep architectural breakdowns, interactive skills matrix, ATS-formatted resume with working PDF download, technical engineering blog, and a validated contact form.

---

## 🌟 Key Features

- **Demo Identity**: Built for **Alex Morgan — Software Developer & Automation Engineer** (6+ years experience in full-stack web systems, test automation architecture, and cloud delivery pipelines).
- **Modern Dark & Light Mode**: Persistent theme switcher with zero flash of unstyled content, glowing accents, and glassmorphism styling.
- **Interactive Automation Terminal**: A live interactive simulation on the hero section allowing visitors to execute simulated test suites, auto-heal flaky tests, and canary deploy to production with real-time log streaming.
- **Projects Showcase & Dynamic Routes**: Filterable by category (*Automation & CI/CD*, *Full Stack*, *Cloud & DevOps*, *AI & Tools*), search query, outcome metrics, and interactive modal deep dives as well as dedicated dynamic permalinks (`/projects/[slug]`).
- **Interactive Skills Matrix**: Granular proficiency levels, years of experience, and an end-to-end DevOps continuous delivery pipeline diagram.
- **ATS Resume with Working PDF Download**: ATS-compliant resume layout with a downloadable, pre-generated `/public/Alex_Morgan_Resume.pdf`, native browser print mode, and one-click plain-text ATS copy.
- **Validated Contact Form**: Client-side validation with real-time feedback, simulated webhook transmission, celebratory confetti feedback (`canvas-confetti`), interactive ticket generation (`#AM-xxxx`), and a live San Francisco (PST) timezone clock.
- **Technical Engineering Blog**: Multi-tag search and full article reader with clean typography and related post recommendations.
- **SEO & Performance Optimized**: Semantic HTML5 tags, comprehensive OpenGraph and Twitter cards metadata, and a custom 404 page.

---

## 📁 Clean Folder Structure

```
Portfolio_Website/
├── public/
│   └── Alex_Morgan_Resume.pdf     # Real ATS resume PDF
├── scripts/
│   └── generate-resume-pdf.mjs    # Automation script to generate resume PDF
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout with Providers & SEO
│   │   ├── globals.css            # Tailored design system tokens & glassmorphism
│   │   ├── page.tsx               # Home page
│   │   ├── about/page.tsx         # About & engineering principles
│   │   ├── projects/page.tsx      # Projects filter & showcase
│   │   ├── projects/[slug]/page.tsx # Project architecture deep dive
│   │   ├── skills/page.tsx        # Skills & technology matrix
│   │   ├── experience/page.tsx    # Chronological career timeline
│   │   ├── resume/page.tsx        # Resume page with PDF download & ATS copy
│   │   ├── blog/page.tsx          # Engineering blog index
│   │   ├── blog/[slug]/page.tsx   # Technical article reader
│   │   ├── contact/page.tsx       # Validated contact form & SF clock
│   │   └── not-found.tsx          # Custom 404 error page
│   ├── components/                # Reusable UI components
│   │   ├── Navbar.tsx             # Responsive header with theme toggle & mobile drawer
│   │   ├── Footer.tsx             # Global footer with operational status badge
│   │   ├── Hero.tsx               # Hero banner with value proposition & CTAs
│   │   ├── InteractiveTerminal.tsx # Live CI/CD emulator widget
│   │   ├── ProjectCard.tsx        # Outcome-driven project card
│   │   ├── ProjectModal.tsx       # Architectural deep dive modal
│   │   ├── ThemeProvider.tsx      # Dark/light theme context provider
│   │   └── ToastProvider.tsx      # Global notification toast context
│   ├── data/
│   │   └── portfolioData.ts       # Centralized demo data (projects, skills, jobs, bio)
│   ├── hooks/
│   │   ├── useTheme.ts            # Hook for switching dark/light theme
│   │   └── useToast.ts            # Hook for triggering toast notifications
│   └── lib/
│       └── utils.ts               # Class merging (cn) and formatting helpers
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🚀 How to Run Locally

### Prerequisites
Make sure **Node.js** (v18+ or v20+) and **npm** are available in your environment.
*(Note: If installed via the user path, ensure `export PATH="$HOME/.local/bin:$PATH"` is loaded).*

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

The application will start at:
👉 **[http://localhost:3000](http://localhost:3000)**

### 3. Build for Production
```bash
npm run build
```

### 4. Run the Production Server
```bash
npm run start
```

---

## ✏️ How to Customize Demo Information

All personal data, projects, work history, skills, and blog posts are centralized in one file:

📁 **`src/data/portfolioData.ts`**

Simply update the exported constants:
- `personalInfo`: Change name, email, phone, location, social links, and tagline.
- `projects`: Add, edit, or remove project cards, GitHub links, and demo URLs.
- `skillCategories`: Modify skills, proficiency levels, and category groupings.
- `experiences`: Update your employment history, bullet points, and impact metrics.
- `educations` & `certifications`: Update university, degrees, and cloud badges.
- `blogPosts`: Write new technical articles or tutorials.

To regenerate the PDF with any updated information, run:
```bash
node scripts/generate-resume-pdf.mjs
```

---

## 🛠️ Tech Stack Breakdown

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)
- **Micro-Animations**: [canvas-confetti](https://github.com/catdad/canvas-confetti)
