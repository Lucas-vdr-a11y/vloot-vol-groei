# De Vloot Vol Groei - Interactief Profielwerkstuk

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the "De Vloot Vol Groei" research paper into a premium, interactive scrollytelling website where all original text is presented with animated data visualizations, interactive comparisons, and scroll-driven transitions.

**Architecture:** Multi-page Next.js app with a cinematic landing page and three dedicated deelvraag pages. Each deelvraag page is a scrollytelling experience with sticky sidebar navigation, scroll-triggered animations, and interactive data visualizations embedded between the research text. Content is structured in TypeScript data files to ensure completeness; reusable section renderers handle the presentation.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion 11, Google Fonts (Fraunces + Inter), Lucide React icons, Vercel deployment.

**Content source:** The full research paper text (provided in the spec) must be included verbatim. All ~15,000 words of Dutch text appear on the site.

---

## File Structure

```
vloot-vol-groei/
├── public/
│   └── fonts/                          # Local font files if needed
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout with fonts + metadata
│   │   ├── page.tsx                    # Landing page (Hero + Inleiding + cards)
│   │   ├── globals.css                 # Tailwind directives + custom CSS
│   │   └── deelvraag/
│   │       ├── layout.tsx              # Shared deelvraag layout with sidebar TOC
│   │       ├── [slug]/
│   │       │   └── page.tsx            # Dynamic deelvraag page renderer
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Top navigation bar
│   │   │   ├── TableOfContents.tsx     # Sticky sidebar TOC with scroll progress
│   │   │   └── Footer.tsx              # Site footer with authors
│   │   ├── sections/
│   │   │   ├── Hero.tsx                # Full-screen hero with animated title
│   │   │   ├── DeelvraagHero.tsx       # Deelvraag page hero (smaller)
│   │   │   ├── TextBlock.tsx           # Paragraph renderer with fade-in
│   │   │   ├── SectionHeading.tsx      # Animated section headings
│   │   │   ├── PullQuote.tsx           # Highlighted quote blocks
│   │   │   ├── ConclusionBox.tsx       # Styled conclusion sections
│   │   │   └── ContentRenderer.tsx     # Routes content blocks to components
│   │   ├── interactive/
│   │   │   ├── AnimatedCounter.tsx     # Scroll-triggered number animation
│   │   │   ├── KeyFigureRow.tsx        # Row of key figures with counters
│   │   │   ├── RevenueCalculation.tsx  # Step-by-step calculation reveal
│   │   │   ├── ComparisonCards.tsx     # Side-by-side competitor cards
│   │   │   ├── ThreePillars.tsx        # Three-column strategy visualization
│   │   │   ├── MarketSegments.tsx      # Donut/pie chart for market segments
│   │   │   ├── ArrangementCards.tsx    # Three arrangement tiers
│   │   │   ├── ProcessTimeline.tsx     # Vertical timeline with steps
│   │   │   └── CustomerJourney.tsx     # Horizontal journey visualization
│   │   └── ui/
│   │       ├── FadeIn.tsx              # Intersection Observer fade-in wrapper
│   │       ├── ScrollProgress.tsx      # Top-of-page reading progress bar
│   │       ├── ParallaxSection.tsx     # Parallax background section
│   │       ├── Divider.tsx             # Decorative wave/line divider
│   │       └── Badge.tsx               # Small label/badge component
│   ├── content/
│   │   ├── types.ts                    # Content type definitions
│   │   ├── inleiding.ts               # Introduction content
│   │   ├── deelvraag1.ts              # Deelvraag 1 full content
│   │   ├── deelvraag2.ts              # Deelvraag 2 full content
│   │   ├── deelvraag3.ts              # Deelvraag 3 full content
│   │   └── metadata.ts               # Deelvraag titles, colors, icons
│   └── lib/
│       ├── hooks.ts                    # useInView, useScrollProgress, useCounter
│       └── utils.ts                    # cn() helper, formatNumber
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── CLAUDE.md
└── .gitignore
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `.gitignore`, `CLAUDE.md`

- [ ] **Step 1: Create Next.js project**

```bash
cd ~/Projecten/Keicode/vloot-vol-groei
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --turbopack
```

When prompted, accept defaults. This creates the base Next.js 15 project with App Router, TypeScript, Tailwind CSS, and ESLint.

- [ ] **Step 2: Install dependencies**

```bash
cd ~/Projecten/Keicode/vloot-vol-groei
npm install framer-motion lucide-react
```

- [ ] **Step 3: Create CLAUDE.md**

```bash
cat > ~/Projecten/Keicode/vloot-vol-groei/CLAUDE.md << 'CLAUDEEOF'
# Vloot Vol Groei - Interactief Profielwerkstuk

## VERPLICHT: Git commit & push na elke grote verandering

Na elke afgeronde feature, refactor, bugfix of meerdere gewijzigde bestanden: `git add` + `git commit` + `git push`. Push tussendoor, niet pas aan het einde. Werk dat niet gepusht is gaat verloren tussen sessies.

## Project

Interactieve website-versie van het profielwerkstuk "De Vloot Vol Groei" over Rederij Cascade.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion 11
- Google Fonts: Fraunces (headings), Inter (body)
- Deployment: Vercel

## Structure

- `src/content/` — All research paper text as structured TypeScript
- `src/components/interactive/` — Data visualizations and interactive elements
- `src/components/ui/` — Reusable animation/layout primitives
- `src/components/sections/` — Content rendering components
- `src/components/layout/` — Navigation, TOC, footer

## Content

ALL text from the original research paper must be present on the website. Content files in `src/content/` are the source of truth.

## Dev

```bash
npm run dev    # Start dev server on localhost:3000
npm run build  # Production build
```
CLAUDEEOF
```

- [ ] **Step 4: Initialize git repo and push**

```bash
cd ~/Projecten/Keicode/vloot-vol-groei
git init
git add .
git commit -m "chore: scaffold Next.js 15 project for Vloot Vol Groei"
```

Create a GitHub repo and push:

```bash
gh repo create Lucas-vdr-a11y/vloot-vol-groei --public --source=. --push
```

- [ ] **Step 5: Verify dev server starts**

```bash
cd ~/Projecten/Keicode/vloot-vol-groei
npm run dev
```

Expected: Server starts on `localhost:3000` without errors.

- [ ] **Step 6: Commit**

```bash
cd ~/Projecten/Keicode/vloot-vol-groei
git add CLAUDE.md
git commit -m "docs: add CLAUDE.md with project conventions"
git push
```

---

### Task 2: Design System & Global Styles

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Create: `src/lib/utils.ts`
- Modify: `tailwind.config.ts` (if v4 uses CSS-based config, adjust accordingly)

- [ ] **Step 1: Set up global CSS with Tailwind v4 custom theme**

Write `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Colors - Premium nautical palette */
  --color-navy-950: #0B1120;
  --color-navy-900: #0F172A;
  --color-navy-800: #1E293B;
  --color-navy-700: #334155;
  --color-navy-600: #475569;
  --color-navy-500: #64748B;
  --color-navy-400: #94A3B8;
  --color-navy-300: #CBD5E1;
  --color-navy-200: #E2E8F0;
  --color-navy-100: #F1F5F9;
  --color-navy-50: #F8FAFC;

  --color-water-600: #2563EB;
  --color-water-500: #3B82F6;
  --color-water-400: #60A5FA;
  --color-water-300: #93C5FD;
  --color-water-200: #BFDBFE;
  --color-water-100: #DBEAFE;

  --color-gold-600: #D97706;
  --color-gold-500: #F59E0B;
  --color-gold-400: #FBBF24;
  --color-gold-300: #FDE68A;

  --color-warm-50: #FAFAF8;
  --color-warm-100: #F5F5F0;

  /* Fonts */
  --font-heading: "Fraunces", serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Spacing for sections */
  --section-padding: 6rem;

  /* Animations */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Base styles */
@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-body);
    color: var(--color-navy-900);
    background-color: var(--color-warm-50);
    line-height: 1.75;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  ::selection {
    background-color: var(--color-water-200);
    color: var(--color-navy-900);
  }
}

/* Custom utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .container-narrow {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .container-wide {
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Wave divider SVG background */
.wave-divider {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%23FAFAF8' d='M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,100 L0,100 Z'/%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
}

/* Gradient text utility */
.gradient-text {
  background: linear-gradient(135deg, var(--color-water-400), var(--color-water-600));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Number font */
.font-number {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}
```

- [ ] **Step 2: Set up root layout with fonts**

Write `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De Vloot Vol Groei — Profielwerkstuk",
  description:
    "Onderzoek naar doelgroepbereik en merkversterking bij Rederij Cascade. Door Daan Bocken & Lucas van de Runstraat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Create utility helpers**

Write `src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("nl-NL").format(n);
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}
```

Note: We use a simple `cn` without `clsx` dependency — just string join. If you want `clsx`, install it (`npm install clsx`), otherwise keep the simple version:

```ts
export function cn(...inputs: (string | undefined | false | null)[]) {
  return inputs.filter(Boolean).join(" ");
}
```

- [ ] **Step 4: Verify the design renders**

Replace `src/app/page.tsx` temporarily:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-warm-50">
      <div className="bg-navy-900 text-white py-32 text-center">
        <h1 className="font-heading text-5xl mb-4">De Vloot Vol Groei</h1>
        <p className="text-navy-300 text-lg">Design system test</p>
      </div>
      <div className="container-narrow py-16">
        <h2 className="font-heading text-3xl text-navy-900 mb-4">Heading Test</h2>
        <p className="text-navy-600">Body text in Inter. Lorem ipsum dolor sit amet.</p>
        <p className="font-number text-water-600 text-2xl mt-4">€ 66.000</p>
      </div>
    </main>
  );
}
```

Run: `npm run dev` and verify in browser:
- Fraunces heading font loads
- Inter body font loads  
- Navy and water colors apply correctly
- `container-narrow` centers content

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: design system with nautical color palette and typography"
git push
```

---

### Task 3: Animation Hooks & UI Primitives

**Files:**
- Create: `src/lib/hooks.ts`
- Create: `src/components/ui/FadeIn.tsx`
- Create: `src/components/ui/ScrollProgress.tsx`
- Create: `src/components/ui/Divider.tsx`
- Create: `src/components/ui/Badge.tsx`

- [ ] **Step 1: Create custom hooks**

Write `src/lib/hooks.ts`:

```ts
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Returns true when the element enters the viewport.
 * Once triggered, stays true (no re-triggering on scroll back).
 */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.15, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

/**
 * Returns a 0-1 scroll progress value for the entire page.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

/**
 * Animates a number from 0 to `target` when triggered.
 * Returns the current animated value.
 */
export function useCounter(target: number, duration = 2000, trigger = false) {
  const [value, setValue] = useState(0);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;

    function animate(timestamp: number) {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    }

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [trigger, target, duration]);

  return value;
}

/**
 * Returns the IDs of sections currently visible in the viewport.
 * Used for the sidebar table of contents active state.
 */
export function useActiveSections(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
}
```

- [ ] **Step 2: Create FadeIn component**

Write `src/components/ui/FadeIn.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

const directionOffset = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
  none: {},
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  duration = 0.6,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create ScrollProgress bar**

Write `src/components/ui/ScrollProgress.tsx`:

```tsx
"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-water-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
```

- [ ] **Step 4: Create Divider component**

Write `src/components/ui/Divider.tsx`:

```tsx
interface DividerProps {
  variant?: "wave" | "line" | "dots";
  className?: string;
}

export function Divider({ variant = "line", className = "" }: DividerProps) {
  if (variant === "wave") {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z"
            className="fill-warm-50"
          />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`flex justify-center gap-2 py-8 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-navy-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-navy-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-navy-300" />
      </div>
    );
  }

  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <div className="w-16 h-px bg-navy-300" />
    </div>
  );
}
```

- [ ] **Step 5: Create Badge component**

Write `src/components/ui/Badge.tsx`:

```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "gold" | "navy";
}

const variants = {
  blue: "bg-water-100 text-water-600 border-water-200",
  gold: "bg-gold-300/20 text-gold-600 border-gold-300/40",
  navy: "bg-navy-100 text-navy-600 border-navy-200",
};

export function Badge({ children, variant = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 6: Verify animations work**

Update `src/app/page.tsx` temporarily:

```tsx
import { FadeIn } from "@/components/ui/FadeIn";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Divider } from "@/components/ui/Divider";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <div className="bg-navy-900 text-white py-32 text-center">
        <FadeIn>
          <Badge variant="gold">Profielwerkstuk</Badge>
          <h1 className="font-heading text-5xl mt-4">De Vloot Vol Groei</h1>
        </FadeIn>
      </div>
      <div className="container-narrow py-16 space-y-8">
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl">Fade In Test</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-navy-600">This paragraph fades in on scroll.</p>
        </FadeIn>
        <Divider variant="dots" />
        <FadeIn delay={0.3}>
          <p className="text-navy-600">Another section below the divider.</p>
        </FadeIn>
      </div>
      {/* Add enough height to test scroll */}
      <div className="h-screen" />
    </main>
  );
}
```

Run: `npm run dev`
Expected: Elements fade in as you scroll, progress bar fills at top.

- [ ] **Step 7: Commit**

```bash
git add src/lib/hooks.ts src/components/ui/
git commit -m "feat: animation hooks and UI primitives (FadeIn, ScrollProgress, Divider, Badge)"
git push
```

---

### Task 4: Reusable Section Components

**Files:**
- Create: `src/components/sections/SectionHeading.tsx`
- Create: `src/components/sections/TextBlock.tsx`
- Create: `src/components/sections/PullQuote.tsx`
- Create: `src/components/sections/ConclusionBox.tsx`

- [ ] **Step 1: Create SectionHeading**

Write `src/components/sections/SectionHeading.tsx`:

```tsx
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-10">
      <FadeIn>
        {badge && (
          <Badge variant="blue">{badge}</Badge>
        )}
        <h2 className="font-heading text-3xl md:text-4xl text-navy-900 mt-3 text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-navy-500 text-lg mt-3 max-w-2xl">{subtitle}</p>
        )}
      </FadeIn>
    </div>
  );
}
```

- [ ] **Step 2: Create TextBlock**

Write `src/components/sections/TextBlock.tsx`:

```tsx
import { FadeIn } from "@/components/ui/FadeIn";

interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function TextBlock({ children, className = "" }: TextBlockProps) {
  return (
    <FadeIn>
      <div className={`prose prose-lg max-w-none text-navy-700 leading-relaxed ${className}`}>
        {children}
      </div>
    </FadeIn>
  );
}
```

Note: We're using Tailwind's `prose` class for nice typography. If `@tailwindcss/typography` isn't installed:

```bash
npm install @tailwindcss/typography
```

Then in `globals.css`, add the plugin import if needed (Tailwind v4 auto-detects installed plugins).

- [ ] **Step 3: Create PullQuote**

Write `src/components/sections/PullQuote.tsx`:

```tsx
import { FadeIn } from "@/components/ui/FadeIn";

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <FadeIn>
      <blockquote className="my-12 pl-6 border-l-4 border-water-500 bg-water-100/30 py-6 pr-6 rounded-r-lg">
        <p className="font-heading text-xl md:text-2xl text-navy-800 italic leading-relaxed">
          {children}
        </p>
        {attribution && (
          <footer className="mt-3 text-sm text-navy-500">{attribution}</footer>
        )}
      </blockquote>
    </FadeIn>
  );
}
```

- [ ] **Step 4: Create ConclusionBox**

Write `src/components/sections/ConclusionBox.tsx`:

```tsx
import { FadeIn } from "@/components/ui/FadeIn";

interface ConclusionBoxProps {
  title: string;
  children: React.ReactNode;
}

export function ConclusionBox({ title, children }: ConclusionBoxProps) {
  return (
    <FadeIn>
      <div className="my-16 bg-navy-900 text-white rounded-2xl p-8 md:p-12">
        <h3 className="font-heading text-2xl md:text-3xl mb-6">{title}</h3>
        <div className="text-navy-200 leading-relaxed space-y-4 text-lg">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/
git commit -m "feat: reusable section components (SectionHeading, TextBlock, PullQuote, ConclusionBox)"
git push
```

---

### Task 5: Interactive Components — Counters & Calculations

**Files:**
- Create: `src/components/interactive/AnimatedCounter.tsx`
- Create: `src/components/interactive/KeyFigureRow.tsx`
- Create: `src/components/interactive/RevenueCalculation.tsx`

- [ ] **Step 1: Create AnimatedCounter**

Write `src/components/interactive/AnimatedCounter.tsx`:

```tsx
"use client";

import { useInView, useCounter } from "@/lib/hooks";
import { formatNumber, formatCurrency } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  format?: "number" | "currency";
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  format = "number",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView();
  const value = useCounter(target, duration, isInView);

  const formatted = format === "currency" ? formatCurrency(value) : formatNumber(value);

  return (
    <span ref={ref} className={`font-number ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Create KeyFigureRow**

Write `src/components/interactive/KeyFigureRow.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "./AnimatedCounter";

interface KeyFigure {
  value: number;
  prefix?: string;
  suffix?: string;
  format?: "number" | "currency";
  label: string;
  description?: string;
}

interface KeyFigureRowProps {
  figures: KeyFigure[];
}

export function KeyFigureRow({ figures }: KeyFigureRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {figures.map((figure, i) => (
        <FadeIn key={figure.label} delay={i * 0.15}>
          <div className="bg-white rounded-xl p-6 border border-navy-200 shadow-sm text-center">
            <div className="text-3xl md:text-4xl font-bold text-water-600 mb-2">
              <AnimatedCounter
                target={figure.value}
                prefix={figure.prefix}
                suffix={figure.suffix}
                format={figure.format}
              />
            </div>
            <div className="font-heading text-navy-900 font-semibold">
              {figure.label}
            </div>
            {figure.description && (
              <div className="text-sm text-navy-500 mt-1">
                {figure.description}
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create RevenueCalculation**

This is the step-by-step animated calculation (e.g., 150 dagen x 20 personen x €22 = €66.000).

Write `src/components/interactive/RevenueCalculation.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";
import { AnimatedCounter } from "./AnimatedCounter";

interface CalculationStep {
  label: string;
  value: number;
  format?: "number" | "currency";
  prefix?: string;
  suffix?: string;
}

interface RevenueCalculationProps {
  title: string;
  steps: CalculationStep[];
  result: {
    label: string;
    value: number;
  };
  description?: string;
}

export function RevenueCalculation({
  title,
  steps,
  result,
  description,
}: RevenueCalculationProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="my-12 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 md:p-10 text-white">
      <h4 className="font-heading text-xl md:text-2xl mb-6">{title}</h4>

      <div className="flex flex-wrap items-center justify-center gap-3 text-2xl md:text-3xl font-number">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.3, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {i > 0 && <span className="text-navy-400">&times;</span>}
            <div className="text-center">
              <div className="text-water-400">
                <AnimatedCounter
                  target={step.value}
                  prefix={step.prefix}
                  suffix={step.suffix}
                  format={step.format}
                  duration={1500}
                />
              </div>
              <div className="text-xs text-navy-400 mt-1">{step.label}</div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: steps.length * 0.3, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="text-navy-400">=</span>
          <div className="text-center">
            <div className="text-gold-400 text-3xl md:text-4xl font-bold">
              <AnimatedCounter target={result.value} format="currency" duration={2000} />
            </div>
            <div className="text-xs text-navy-400 mt-1">{result.label}</div>
          </div>
        </motion.div>
      </div>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: (steps.length + 1) * 0.3 }}
          className="text-navy-300 text-sm mt-6 text-center max-w-xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Verify interactive components**

Add a quick test in `page.tsx`:

```tsx
import { KeyFigureRow } from "@/components/interactive/KeyFigureRow";
import { RevenueCalculation } from "@/components/interactive/RevenueCalculation";

// inside the page component, add:
<KeyFigureRow
  figures={[
    { value: 672000, label: "Gasten per jaar", description: "In Midden-Limburg" },
    { value: 1440, label: "Max. capaciteit", description: "Parc Maasresidence Thorn" },
    { value: 66000, label: "Extra omzet potentieel", format: "currency" },
  ]}
/>
<RevenueCalculation
  title="Omzetberekening verblijfsrecreanten"
  steps={[
    { label: "dagen", value: 150 },
    { label: "extra gasten", value: 20 },
    { label: "per persoon", value: 22, prefix: "€" },
  ]}
  result={{ label: "extra omzet", value: 66000 }}
  description="Slechts 1,5% van de maximale capaciteit van het park"
/>
```

Run: `npm run dev`
Expected: Numbers animate from 0 to target when scrolled into view. Calculation appears step-by-step.

- [ ] **Step 5: Commit**

```bash
git add src/components/interactive/AnimatedCounter.tsx src/components/interactive/KeyFigureRow.tsx src/components/interactive/RevenueCalculation.tsx
git commit -m "feat: interactive counters and step-by-step revenue calculation animation"
git push
```

---

### Task 6: Interactive Components — Comparisons, Pillars, Market Chart

**Files:**
- Create: `src/components/interactive/ComparisonCards.tsx`
- Create: `src/components/interactive/ThreePillars.tsx`
- Create: `src/components/interactive/MarketSegments.tsx`
- Create: `src/components/interactive/ArrangementCards.tsx`
- Create: `src/components/interactive/ProcessTimeline.tsx`

- [ ] **Step 1: Create ComparisonCards**

Write `src/components/interactive/ComparisonCards.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface ComparisonItem {
  name: string;
  description: string;
  strengths?: string[];
  weaknesses?: string[];
  highlight?: boolean;
}

interface ComparisonCardsProps {
  title?: string;
  items: ComparisonItem[];
}

export function ComparisonCards({ title, items }: ComparisonCardsProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn>
          <h4 className="font-heading text-xl text-navy-900 mb-6">{title}</h4>
        </FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <FadeIn key={item.name} delay={i * 0.1}>
            <div
              className={`rounded-xl p-6 border h-full ${
                item.highlight
                  ? "bg-water-100/50 border-water-300 ring-2 ring-water-200"
                  : "bg-white border-navy-200"
              }`}
            >
              <h5 className="font-heading text-lg font-semibold text-navy-900 mb-2">
                {item.name}
              </h5>
              <p className="text-navy-600 text-sm mb-4">{item.description}</p>
              {item.strengths && item.strengths.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                    Sterktes
                  </span>
                  <ul className="mt-1 space-y-1">
                    {item.strengths.map((s) => (
                      <li key={s} className="text-sm text-navy-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {item.weaknesses && item.weaknesses.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                    Zwaktes
                  </span>
                  <ul className="mt-1 space-y-1">
                    {item.weaknesses.map((w) => (
                      <li key={w} className="text-sm text-navy-600 flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">-</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create ThreePillars**

Write `src/components/interactive/ThreePillars.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { type LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
}

interface ThreePillarsProps {
  title?: string;
  pillars: Pillar[];
}

export function ThreePillars({ title, pillars }: ThreePillarsProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn>
          <h4 className="font-heading text-xl text-navy-900 mb-8 text-center">{title}</h4>
        </FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <FadeIn key={pillar.title} delay={i * 0.15}>
              <div className="text-center p-6 rounded-xl bg-white border border-navy-200 shadow-sm h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-water-100 text-water-600 mb-4">
                  <Icon size={28} />
                </div>
                <h5 className="font-heading text-lg font-semibold text-navy-900 mb-2">
                  {pillar.title}
                </h5>
                <p className="text-navy-600 text-sm">{pillar.description}</p>
                {pillar.items && (
                  <ul className="mt-4 text-left space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="text-sm text-navy-600 flex items-start gap-2">
                        <span className="text-water-500 mt-1 shrink-0">&#x2022;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create MarketSegments chart**

Write `src/components/interactive/MarketSegments.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

interface Segment {
  label: string;
  percentage: number;
  color: string;
  description?: string;
}

interface MarketSegmentsProps {
  title?: string;
  segments: Segment[];
}

export function MarketSegments({ title, segments }: MarketSegmentsProps) {
  const { ref, isInView } = useInView();

  // Calculate SVG donut segments
  const total = segments.reduce((sum, s) => sum + s.percentage, 0);
  let cumulativePercent = 0;

  const paths = segments.map((segment) => {
    const startPercent = cumulativePercent;
    cumulativePercent += segment.percentage;

    const startAngle = (startPercent / total) * 360 - 90;
    const endAngle = (cumulativePercent / total) * 360 - 90;
    const largeArc = segment.percentage / total > 0.5 ? 1 : 0;

    const startX = 50 + 35 * Math.cos((startAngle * Math.PI) / 180);
    const startY = 50 + 35 * Math.sin((startAngle * Math.PI) / 180);
    const endX = 50 + 35 * Math.cos((endAngle * Math.PI) / 180);
    const endY = 50 + 35 * Math.sin((endAngle * Math.PI) / 180);

    return {
      ...segment,
      d: `M 50 50 L ${startX} ${startY} A 35 35 0 ${largeArc} 1 ${endX} ${endY} Z`,
    };
  });

  return (
    <div ref={ref} className="my-12">
      {title && (
        <h4 className="font-heading text-xl text-navy-900 mb-6 text-center">{title}</h4>
      )}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Donut chart */}
        <div className="w-48 h-48 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {paths.map((path, i) => (
              <motion.path
                key={path.label}
                d={path.d}
                fill={path.color}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                style={{ transformOrigin: "50px 50px" }}
              />
            ))}
            {/* Center circle for donut effect */}
            <circle cx="50" cy="50" r="20" className="fill-warm-50" />
          </svg>
        </div>

        {/* Legend */}
        <div className="space-y-3 flex-1">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.label}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span
                className="w-4 h-4 rounded-sm shrink-0 mt-0.5"
                style={{ backgroundColor: segment.color }}
              />
              <div>
                <div className="font-semibold text-navy-900">
                  {segment.label}{" "}
                  <span className="font-number text-navy-500">({segment.percentage}%)</span>
                </div>
                {segment.description && (
                  <div className="text-sm text-navy-500">{segment.description}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create ArrangementCards**

Write `src/components/interactive/ArrangementCards.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface Arrangement {
  name: string;
  tier: "basis" | "midden" | "premium";
  description: string;
  includes: string[];
}

const tierStyles = {
  basis: {
    border: "border-navy-200",
    badge: "bg-navy-100 text-navy-600",
    icon: "text-navy-400",
  },
  midden: {
    border: "border-water-300",
    badge: "bg-water-100 text-water-600",
    icon: "text-water-500",
  },
  premium: {
    border: "border-gold-400",
    badge: "bg-gold-300/20 text-gold-600",
    icon: "text-gold-500",
  },
};

export function ArrangementCards({ arrangements }: { arrangements: Arrangement[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {arrangements.map((arr, i) => {
        const styles = tierStyles[arr.tier];
        return (
          <FadeIn key={arr.name} delay={i * 0.15}>
            <div className={`rounded-xl border-2 ${styles.border} p-6 h-full bg-white relative`}>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.badge} mb-4`}>
                {arr.tier === "basis" ? "Instap" : arr.tier === "midden" ? "Populair" : "Premium"}
              </span>
              <h5 className="font-heading text-xl font-semibold text-navy-900 mb-2">
                {arr.name}
              </h5>
              <p className="text-navy-600 text-sm mb-4">{arr.description}</p>
              <ul className="space-y-2">
                {arr.includes.map((item) => (
                  <li key={item} className="text-sm text-navy-600 flex items-start gap-2">
                    <span className={styles.icon}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 5: Create ProcessTimeline**

Write `src/components/interactive/ProcessTimeline.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface TimelineStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title?: string;
  steps: TimelineStep[];
}

export function ProcessTimeline({ title, steps }: ProcessTimelineProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn>
          <h4 className="font-heading text-xl text-navy-900 mb-8">{title}</h4>
        </FadeIn>
      )}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-navy-200" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="flex gap-6 items-start">
                {/* Dot */}
                <div className="relative z-10 w-8 h-8 shrink-0 rounded-full bg-water-500 text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                {/* Content */}
                <div className="pb-2">
                  <h5 className="font-heading text-lg font-semibold text-navy-900">
                    {step.title}
                  </h5>
                  <p className="text-navy-600 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/interactive/
git commit -m "feat: interactive components (ComparisonCards, ThreePillars, MarketSegments, ArrangementCards, ProcessTimeline)"
git push
```

---

### Task 7: Layout Components

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/TableOfContents.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/DeelvraagHero.tsx`

- [ ] **Step 1: Create Navbar**

Write `src/components/layout/Navbar.tsx`:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/deelvraag/1", label: "Verblijfsrecreanten" },
  { href: "/deelvraag/2", label: "B2B Markt" },
  { href: "/deelvraag/3", label: "Personeel" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-navy-900/95 backdrop-blur-md border-b border-navy-800">
      <div className="container-wide flex items-center justify-between h-14">
        <Link href="/" className="font-heading text-white text-lg">
          De Vloot Vol Groei
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-water-500/20 text-water-400"
                    : "text-navy-300 hover:text-white hover:bg-navy-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Create TableOfContents sidebar**

Write `src/components/layout/TableOfContents.tsx`:

```tsx
"use client";

import { useActiveSections } from "@/lib/hooks";

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const activeId = useActiveSections(items.map((i) => i.id));

  return (
    <nav className="hidden lg:block sticky top-20 w-56 shrink-0 self-start">
      <div className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-3">
        Inhoud
      </div>
      <ul className="space-y-1 border-l border-navy-200">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block pl-4 py-1 text-sm border-l-2 -ml-px transition-colors ${
                  isActive
                    ? "border-water-500 text-water-600 font-medium"
                    : "border-transparent text-navy-500 hover:text-navy-700 hover:border-navy-300"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```

- [ ] **Step 3: Create Footer**

Write `src/components/layout/Footer.tsx`:

```tsx
export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-400 py-16">
      <div className="container-narrow text-center">
        <h3 className="font-heading text-white text-xl mb-2">De Vloot Vol Groei</h3>
        <p className="text-sm">
          Onderzoek naar doelgroepbereik en merkversterking bij Rederij Cascade
        </p>
        <div className="mt-6 text-sm">
          <p>Daan Bocken &amp; Lucas van de Runstraat</p>
          <p className="text-navy-500 mt-1">Profielwerkstuk 2026</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Create Hero component**

Write `src/components/sections/Hero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800" />
        {/* Subtle animated water-like shapes */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 30% 100%, #3B82F6 0%, transparent 70%), radial-gradient(ellipse at 70% 100%, #60A5FA 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-water-500/20 text-water-400 text-sm font-medium border border-water-500/30 mb-8">
            Profielwerkstuk 2026
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          De Vloot Vol Groei
        </motion.h1>

        <motion.p
          className="text-navy-300 text-lg md:text-xl mb-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Onderzoek naar doelgroepbereik en merkversterking bij Rederij Cascade
        </motion.p>

        <motion.p
          className="text-navy-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Daan Bocken &amp; Lucas van de Runstraat
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-navy-500 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-navy-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create DeelvraagHero**

Write `src/components/sections/DeelvraagHero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

interface DeelvraagHeroProps {
  number: number;
  title: string;
  subtitle: string;
}

export function DeelvraagHero({ number, title, subtitle }: DeelvraagHeroProps) {
  return (
    <section className="relative bg-navy-900 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />

      <div className="relative z-10 container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-water-500/20 text-water-400 text-sm font-medium border border-water-500/30 mb-6">
            Deelvraag {number}
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-3xl md:text-5xl text-white mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-navy-300 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create deelvraag shared layout**

Write `src/app/deelvraag/layout.tsx`:

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function DeelvraagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      {children}
      <Footer />
    </>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add src/components/layout/ src/components/sections/Hero.tsx src/components/sections/DeelvraagHero.tsx src/app/deelvraag/layout.tsx
git commit -m "feat: layout components (Navbar, TableOfContents, Footer, Hero, DeelvraagHero)"
git push
```

---

### Task 8: Content Data Files

**Files:**
- Create: `src/content/types.ts`
- Create: `src/content/metadata.ts`
- Create: `src/content/inleiding.ts`
- Create: `src/content/deelvraag1.ts`
- Create: `src/content/deelvraag2.ts`
- Create: `src/content/deelvraag3.ts`

This is the largest task. ALL research paper text goes into structured TypeScript files.

- [ ] **Step 1: Create content type definitions**

Write `src/content/types.ts`:

```ts
export interface ContentSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface DeelvraagContent {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  question: string;
  sections: ContentSection[];
}
```

- [ ] **Step 2: Create metadata**

Write `src/content/metadata.ts`:

```ts
export const siteMetadata = {
  title: "De Vloot Vol Groei",
  subtitle: "Onderzoek naar doelgroepbereik en merkversterking bij Rederij Cascade",
  authors: ["Daan Bocken", "Lucas van de Runstraat"],
  year: 2026,
};

export const deelvraagMeta = [
  {
    slug: "1",
    number: 1,
    shortTitle: "Verblijfsrecreanten",
    color: "water",
  },
  {
    slug: "2",
    number: 2,
    shortTitle: "B2B Markt",
    color: "gold",
  },
  {
    slug: "3",
    number: 3,
    shortTitle: "Personeel",
    color: "navy",
  },
];
```

- [ ] **Step 3: Create inleiding content**

Write `src/content/inleiding.ts`:

```ts
export const inleiding = {
  title: "Aanleiding van het onderzoek",
  paragraphs: [
    "Voor ons profielwerkstuk hebben wij gekozen om onderzoek te doen naar het bedrijf van Lucas' ouders: Rederij Cascade. Dit rondvaart- en evenementenbedrijf heeft de afgelopen jaren een sterke groei doorgemaakt. Daardoor komen er steeds meer marketingvragen waar het bedrijf tegenaan loopt.",
    "Ten eerste merken zij dat verblijfsrecreanten, mensen die een aantal dagen in Midden-Limburg verblijven en niet altijd weten dat er rondvaarten in de omgeving zijn. De toeristen die wel van de rondvaarten weten, zijn er vaak niet van op de hoogte dat er ook brunches, lunches of zelfs high teas bij te boeken zijn. Op dit gebied kan het bedrijf dan ook veel winst behalen.",
    "Ook zien we dat het bedrijf groeipotentieel heeft in de B2B-markt. Buiten het hoogseizoen is er tijdens de doordeweekse dagen nog veel ruimte voor groei, bijvoorbeeld door bedrijfsactiviteiten. We zouden hier bijvoorbeeld voor kunnen zorgen door gebruik te maken van gerichte advertentie en een aangepast aanbod voor bedrijven.",
    "Natuurlijk is er ook veel personeel nodig om al deze activiteiten goed te laten verlopen. Een belangrijk personeelslid tijdens een rondvaart is natuurlijk de kapitein, de persoon die ervoor zorgt dat het schip veilig vertrekt en uiteindelijk ook weer terugkomt. Minstens net zo belangrijk zijn de mensen die de drank verzorgen, maar ook het keukenpersoneel is onmisbaar. Zij zorgen ervoor dat de gasten kunnen genieten van een hapje, waarna de afwassers er weer voor zorgen dat alles weer schoon en netjes wordt. Al dit personeel vinden is erg lastig in de huidige arbeidsmarkt.",
  ],
  questions: [
    {
      number: 1,
      question: "Hoe kan Rederij Cascade verblijfsrecreanten in Midden-Limburg beter informeren over het bestaan van rondvaarten en de mogelijkheid om extra arrangementen zoals brunches, lunches en high teas bij te boeken?",
    },
    {
      number: 2,
      question: "Op welke manier kan Rederij Cascade de B2B-markt beter bereiken en benutten, met name doordeweeks en buiten het hoogseizoen?",
    },
    {
      number: 3,
      question: "Hoe kan Rederij Cascade in de huidige arbeidsmarkt voldoende en geschikt personeel aantrekken en behouden voor functies zoals kapiteins, bedienend personeel, keukenpersoneel en afwassers?",
    },
  ],
};
```

- [ ] **Step 4: Create deelvraag 1 content**

Write `src/content/deelvraag1.ts`. This file contains ALL text from the first research question. Every paragraph from the original document must be present.

```ts
import type { DeelvraagContent } from "./types";

export const deelvraag1: DeelvraagContent = {
  slug: "1",
  number: 1,
  title: "Verblijfsrecreanten bereiken",
  subtitle: "Hoe toeristen in Midden-Limburg informeren over rondvaarten en arrangementen",
  question: "Hoe kan Rederij Cascade verblijfsrecreanten in Midden-Limburg beter informeren over het bestaan van rondvaarten en de mogelijkheid om extra arrangementen zoals brunches, lunches en high teas bij te boeken?",
  sections: [
    {
      id: "dv1-probleem",
      title: "Inleiding van het probleem",
      paragraphs: [
        "In Midden-Limburg verblijven jaarlijks veel toeristen die mogelijk geïnteresseerd zouden kunnen zijn in de rondvaarten van Rederij Cascade. Deze toeristen verblijven bijvoorbeeld op vakantieparken zoals Parc Maasresidence Thorn, EuroParcs Limburg en Villapark Boschmolenplas. Al deze accommodaties zorgen in 2023 volgens VVV Hart van Limburg ongeveer 672.000 gasten verspreid over het jaar.",
        "Vooral Parc Maasresidence Thorn is erg aantrekkelijk voor het bedrijf. Dit resort ligt op loopafstand van het steiger in Thorn en ongeveer 10 minuten rijden van de Cruise Terminal in Maasbracht. Dit resort is in 2022 geopend en zal de komende jaren alleen maar meer mensen verwelkomen. Uiteindelijk is het de bedoeling dat het park ongeveer 300 recreatiewoningen en 60 recreatieappartementen zal krijgen. Wanneer we uitgaan van volledige bezetting en een gemiddeld aantal bedden van 4 per verblijf dan zijn dit maar liefst 1440 gasten.",
        "Toch zien we sinds de opening van het park geen grote toename in opstappers vanuit Thorn ten opzichte van Maasbracht. Dit wil dus zeggen dat er geen enorme bezoekersstroom van het park afkomt, terwijl je dit wel zou verwachten, vooral vanwege het feit dat de doelgroep van het vakantiepark in grote lijnen overeenkomt met dat van de rederij.",
        "Als we ervoor zouden kunnen zorgen dat deze verblijfsrecreanten bij ons komen varen, dan zou dit een flinke winststijging kunnen veroorzaken. Als we ervoor kunnen zorgen dat er 150 dagen 20 mensen extra meevaren, wat slechts 1,5% is van de maximale capaciteit van het park, dan zou de omzet stijgen met 150*20*22= € 66.000,- door enkel onze afzet te verhogen. Hierbij laten we de consumpties tijdens de rondvaart buiten beschouwing. Het voordeel hieraan is dat deze extra omzet voor een groot deel winst is, er komen tenslotte weinig extra variabele kosten bij kijken aangezien de boot toch vaart op deze dagen. De marginale kosten zijn dus laag. Door de bezettingsgraad te verhogen kunnen we de constante kosten dus meer spreiden en een hogere winst behalen.",
        "Wij kunnen deze verblijfsrecreanten niet alleen blij maken met ons hoofdproduct (een rondvaart), maar ook met een van onze nevenproducten zoals bijvoorbeeld een gezellige high tea op het water of een uitgebreide brunch. Op een aantal dagen bieden wij zelfs culinaire 5-gangendiners aan. Aangezien de meeste mensen die op vakantie zijn geen zin hebben om elke dag te koken en vaak uitjes gaan doen, is dit misschien wel de perfecte combinatie. Zo ontdekken ze de natuur en de omgeving vanuit een ander perspectief terwijl ze genieten van heerlijk eten. Hierdoor kunnen wij de omzet verhogen doordat de gemiddelde besteding per gast stijgt. Onze klantwaarde zal hierdoor dus groter worden.",
        "Hoewel de horeca het tegenwoordig lastig heeft in verband met de hoge inkoopprijzen van voedsel en personeelskosten die zorgen voor relatief hoge variabele kosten, hebben wij hier minder last van omdat wij een unieke combinatie hebben van producten en dus een hoge klantwaardepropositie. Hierdoor daalt de prijselasticiteit en zal de afzet relatief minder dalen dan de prijs waardoor wij een hogere prijs kunnen vragen. Deze hogere prijs zorgt voor meer marge waardoor de netto winst hoger is dan gebruikelijk is in deze sector.",
      ],
    },
    {
      id: "dv1-analyse",
      title: "Analyse van huidige situatie en concurrentie",
      paragraphs: [
        "Om te begrijpen waarom verblijfsrecreanten op dit moment nog onvoldoende worden bereikt, kijken we eerst naar de huidige situatie bij Rederij Cascade. Vervolgens analyseren we hoe vergelijkbare bedrijven in de toeristische sector dit aanpakken.",
      ],
    },
    {
      id: "dv1-huidige-situatie",
      title: "Huidige situatie bij Rederij Cascade",
      paragraphs: [
        "Rederij Cascade heeft op dit moment al een aanzienlijke online aanwezigheid opgebouwd. Het bedrijf beschikt over een professionele website (rederijcascade.nl) met informatie in zowel het Nederlands als het Engels. Op de website worden diverse arrangementen aangeboden, waaronder High Tea specials, de Captain's Brunch, dinnercruises en seizoensgebonden vaartochten zoals de Asperge Cruise en Paasspecials. Ook is er een sectie voor groepsaanvragen en bedrijfsuitjes. Daarnaast is Rederij Cascade zichtbaar op diverse toeristenplatforms. Op TripAdvisor heeft het bedrijf een vermelding met 25 reviews en een gemiddelde beoordeling van 4,3 uit 5 sterren. Bezoekers prijzen met name het vriendelijke personeel, de informatieve kapiteins en de combinatie van natuur en culinair genieten. Ook is het bedrijf vermeld op de website van VVV Hart van Limburg met een volledig profiel inclusief contactgegevens, aanbod en foto's. Verder is Rederij Cascade te vinden op platforms als DagjeWeg.nl, Tripper.nl, DagjeWegTickets.nl, UitTipsLimburg.nl en zelfs het Belgische Groeps-Idee.be en het internationale Trip.com. Op Google Maps is het bedrijf eveneens vindbaar met vermelding en reviews.",
        "Er is dus al een stevige basis aanwezig. Toch zijn er een aantal gebieden waarop de huidige aanpak nog tekortschiet als het gaat om het specifiek bereiken van verblijfsrecreanten.",
        "Ten eerste ontbreken er structurele samenwerkingen met de vakantieparken in de directe omgeving. Hoewel er incidenteel contact is — zo wordt Rederij Cascade genoemd in verband met wintercruises bij Parc Maasresidence Thorn — is er geen doorlopende samenwerking waarbij de rederij actief wordt gepromoot bij parkgasten. Er liggen geen flyers bij de recepties, er staan geen advertenties op de informatieschermen en receptiemedewerkers zijn niet geïnformeerd over het aanbod. Dit betekent dat de honderdduizenden gasten die jaarlijks op deze parken verblijven, grotendeels niet in aanraking komen met Rederij Cascade.",
        "Tot slot wordt er geen gebruikgemaakt van gerichte online advertenties. Google Ads of social media campagnes die specifiek gericht zijn op mensen die zich in de omgeving bevinden of die zoeken naar activiteiten in Midden-Limburg, worden op dit moment niet ingezet.",
        "Samenvattend heeft Rederij Cascade een sterke online basis met aanwezigheid op diverse platforms en een professionele website met arrangementen. Wat ontbreekt is een gerichte strategie om verblijfsrecreanten als specifieke doelgroep te benaderen: structurele samenwerkingen met vakantieparken, toeristgerichte presentatie van het aanbod en gerichte online advertenties.",
      ],
    },
    {
      id: "dv1-concurrentie",
      title: "Aanpak van vergelijkbare bedrijven",
      paragraphs: [
        "Om te kijken hoe wij verblijfsrecreanten beter kunnen bereiken, analyseren wij hoe vergelijkbare bedrijven in toeristische gebieden dit aanpakken.",
        "Giethoorn is een van de meest bezochte toeristische bestemmingen van Nederland en de rondvaartbedrijven daar zijn volledig ingericht op het bereiken van toeristen. Op de websites van deze bedrijven valt op dat er meertalige informatie beschikbaar is, vaak in het Nederlands, Engels, Duits en soms zelfs Chinees. Daarnaast werken zij intensief samen met accommodatieverstrekkers: in veel hotels en vakantieparken in de omgeving liggen flyers en worden rondvaarten actief aanbevolen door de receptie.",
        "Ook zijn de rondvaartbedrijven in Giethoorn zeer goed zichtbaar op platforms als TripAdvisor en Google Maps, met honderden reviews en gedetailleerde informatie over prijzen, vertrektijden en arrangementen. Dit zorgt ervoor dat toeristen die zoeken naar activiteiten in de omgeving vrijwel altijd uitkomen bij een rondvaartbedrijf.",
        "Voor Rederij Cascade laat dit zien dat de bestaande online aanwezigheid een goed uitgangspunt is, maar dat het actief opbouwen van samenwerkingen met accommodaties en het vergroten van het aantal reviews de volgende stap is om meer toeristen te bereiken.",
        "Een ander goed voorbeeld is het concept van de fluisterboten in Nationaal Park Weerribben-Wieden. Zij bieden niet alleen rondvaarten aan, maar werken ook met specifieke arrangementen gericht op toeristen: bijvoorbeeld een vaartocht in combinatie met een lunch of een natuurexcursie. Door deze arrangementen als compleet uitje te presenteren, spreken zij toeristen aan die op zoek zijn naar een dagbesteding zonder zelf alles te hoeven regelen.",
        "Wat opvalt is dat deze arrangementen prominent op de homepage staan en ook actief worden gepromoot via de toeristenbureaus in de regio. Daarnaast bieden zij kortingsacties aan in samenwerking met vakantieparken: gasten die hun accommodatiebewijs tonen, krijgen korting op een vaartocht.",
        "Dit concept is direct toepasbaar voor Rederij Cascade. Door arrangementen (rondvaart + brunch/high tea) als compleet uitje aan te bieden en dit te combineren met kortingsacties bij lokale vakantieparken, kan de drempel voor verblijfsrecreanten aanzienlijk worden verlaagd.",
        "Uit de analyse van vergelijkbare bedrijven blijkt dat succesvolle rondvaartbedrijven in toeristische regio's actief investeren in drie pijlers: samenwerking met accommodaties, aantrekkelijke arrangementen voor toeristen en sterke online zichtbaarheid. Rederij Cascade heeft op het gebied van online zichtbaarheid al een goede basis gelegd met vermeldingen op diverse platforms en een professionele website. Waar het echter aan ontbreekt zijn structurele samenwerkingen met accommodaties en het gericht presenteren van arrangementen als toeristische uitjes. Door deze twee pijlers te versterken en te combineren met gerichte online advertenties, kan de rederij verblijfsrecreanten in Midden-Limburg effectiever bereiken.",
      ],
    },
    {
      id: "dv1-plan",
      title: "Plan van aanpak",
      paragraphs: [
        "Op basis van de analyse stellen wij een plan van aanpak op dat zich richt op drie pijlers: samenwerkingen met vakantieparken, het ontwikkelen van toeristische arrangementen en het vergroten van de online zichtbaarheid.",
        "De meest directe manier om verblijfsrecreanten te bereiken is door samenwerkingen aan te gaan met de vakantieparken in de omgeving. Dit begint bij de drie grootste parken: Parc Maasresidence Thorn, EuroParcs Limburg en Villapark Boschmolenplas. Het doel is om Rederij Cascade zichtbaar te maken op het moment dat toeristen op zoek zijn naar activiteiten.",
        "Concreet willen wij flyers en brochures plaatsen bij de recepties van deze parken. Deze flyers moeten aantrekkelijk zijn en direct de arrangementen tonen, inclusief prijzen en een QR-code waarmee gasten eenvoudig online kunnen boeken. Daarnaast willen wij de receptiemedewerkers van de parken informeren over ons aanbod, zodat zij gasten actief kunnen doorverwijzen. Dit kan door een korte presentatie te geven aan het receptieteam aan het begin van het seizoen.",
        "Een stap verder is het aanbieden van een commissieregeling: voor elke boeking die via het vakantiepark binnenkomt, ontvangt het park een klein percentage. Dit geeft hen een financiële prikkel om onze rondvaarten aan te bevelen. Deze aanpak is gebruikelijk in de toeristische sector en levert voor ons geen kosten op tenzij er daadwerkelijk boekingen zijn.",
        "Tot slot willen wij aanwezig zijn op de digitale informatieschermen die in steeds meer vakantieparken hangen. Een korte, visueel aantrekkelijke advertentie op zo'n scherm kan duizenden gasten per seizoen bereiken.",
        "Zoals we in de inleiding al bespraken, biedt Rederij Cascade naast rondvaarten ook brunches, lunches, high teas en zelfs culinaire diners aan. Deze combinatie is bijzonder aantrekkelijk voor toeristen, maar wordt op dit moment niet als zodanig gepresenteerd.",
        "Wij stellen voor om drie vaste toeristische arrangementen te ontwikkelen die speciaal gericht zijn op verblijfsrecreanten: Het Ontdek-arrangement (een rondvaart in combinatie met koffie en gebak, geschikt voor een ochtend of middag, het instapmodel met een lage prijs), het Genieter-arrangement (een rondvaart met een uitgebreide brunch of lunch, gericht op gezinnen en stellen die een halve dag willen vullen) en het Verwenner-arrangement (een rondvaart met high tea of een 3-gangendiner, het premium arrangement voor gasten die iets bijzonders zoeken).",
        "Door deze arrangementen een herkenbare naam te geven en ze als compleet uitje te presenteren, verlagen we de drempel voor toeristen. Zij hoeven niet zelf na te denken over wat ze willen combineren, maar kiezen simpelweg het arrangement dat bij hen past. Deze arrangementen worden prominent geplaatst op de website, in de flyers bij vakantieparken en op onze social media.",
        "De derde pijler is het vergroten van de online vindbaarheid, zodat toeristen die zelf op zoek gaan naar activiteiten in Midden-Limburg bij Rederij Cascade uitkomen.",
        "Als eerste zorgen wij ervoor dat het Google Bedrijfsprofiel volledig is ingevuld met actuele foto's, openingstijden, prijzen en een link naar de arrangementen. Daarnaast moedigen wij tevreden gasten aan om een review achter te laten op Google en TripAdvisor. Reviews zijn voor toeristen een van de belangrijkste factoren bij het kiezen van een activiteit.",
        "Vervolgens willen wij Rederij Cascade aanmelden bij de VVV Hart van Limburg en andere regionale toerismeplatforms. Veel toeristen raadplegen deze websites bij het plannen van hun verblijf. Door hier aanwezig te zijn met een aantrekkelijk profiel en een directe boekingslink, vergroten wij ons bereik aanzienlijk.",
        "Tot slot stellen wij voor om in het hoogseizoen een beperkt budget in te zetten voor Google Ads. Door advertenties te tonen aan mensen die zoeken op termen als \"activiteiten Midden-Limburg\", \"rondvaart Limburg\" of \"uitjes Thorn\", bereiken wij precies de doelgroep die wij zoeken. Het voordeel van Google Ads is dat je alleen betaalt wanneer iemand daadwerkelijk op de advertentie klikt, waardoor het budget efficiënt wordt ingezet.",
        "Met dit plan van aanpak richten wij ons op de drie pijlers die uit de analyse naar voren kwamen: samenwerkingen met vakantieparken, aantrekkelijke toeristische arrangementen en een grotere online zichtbaarheid. Door deze maatregelen te combineren, creëren wij meerdere contactmomenten met verblijfsrecreanten: zowel fysiek (via flyers en recepties) als digitaal (via Google, TripAdvisor en VVV). De kosten van deze maatregelen zijn relatief laag, terwijl de potentiële opbrengst, zoals berekend in de inleiding, aanzienlijk is.",
      ],
    },
    {
      id: "dv1-uitvoering",
      title: "Uitvoering",
      paragraphs: [
        "Binnen het kader van dit profielwerkstuk hebben wij een aantal van bovengenoemde maatregelen concreet uitgewerkt.",
        "Als eerste hebben wij een flyer ontworpen die geplaatst kan worden bij de recepties van vakantieparken in de omgeving. Deze flyer toont de drie toeristische arrangementen met een korte omschrijving, prijs en een QR-code die direct naar de boekingspagina leidt.",
        "Daarnaast hebben wij de drie toeristische arrangementen uitgewerkt met een naam, omschrijving, prijs en inhoud. Deze zijn klaar om op de website geplaatst te worden zodra het seizoen begint.",
        "Tot slot hebben wij een conceptmail opgesteld voor de parkmanagers van Parc Maasresidence Thorn, EuroParcs Limburg en Villapark Boschmolenplas. In deze mail stellen wij een samenwerking voor, inclusief het aanbod van een commissieregeling en het leveren van promotiemateriaal.",
      ],
    },
    {
      id: "dv1-conclusie",
      title: "Conclusie",
      paragraphs: [
        "Op basis van ons onderzoek kunnen wij de onderzoeksvraag als volgt beantwoorden: Rederij Cascade kan verblijfsrecreanten in Midden-Limburg beter informeren door actief samenwerkingen aan te gaan met vakantieparken in de directe omgeving, door het aanbod te verpakken in herkenbare toeristische arrangementen en door de online zichtbaarheid te vergroten via platforms die toeristen raadplegen.",
        "De analyse laat zien dat er op dit moment geen actief beleid is om deze doelgroep te bereiken, terwijl het potentieel aanzienlijk is: al bij een conversie van slechts 1,5% van de gasten van Parc Maasresidence Thorn zou de omzet met ruim € 66.000 kunnen stijgen. De voorgestelde maatregelen zijn relatief goedkoop en eenvoudig te implementeren, terwijl ze meerdere contactmomenten creëren met de verblijfsrecreant — zowel fysiek als digitaal.",
        "Door deze aanpak kan Rederij Cascade een tot nu toe onbenutte doelgroep aanboren en de bezettingsgraad verhogen, met name op dagen waarop de boten al varen. Dit draagt direct bij aan de winstgevendheid van het bedrijf.",
      ],
    },
  ],
};
```

- [ ] **Step 5: Create deelvraag 2 content**

Write `src/content/deelvraag2.ts`. This file contains ALL text from the B2B market research question. The structure follows the same pattern as deelvraag1.

```ts
import type { DeelvraagContent } from "./types";

export const deelvraag2: DeelvraagContent = {
  slug: "2",
  number: 2,
  title: "De B2B-markt bereiken",
  subtitle: "Hoe de zakelijke markt beter bereiken en benutten, doordeweeks en buiten het hoogseizoen",
  question: "Op welke manier kan Rederij Cascade de B2B-markt beter bereiken en benutten, met name doordeweeks en buiten het hoogseizoen?",
  sections: [
    {
      id: "dv2-probleem",
      title: "Inleiding van het probleem",
      paragraphs: [
        "De omzet van Rederij Cascade is niet goed verdeeld over het jaar heen. De inkomsten zijn afhankelijk van het seizoen. Na de kerstperiode vallen de inkomsten nagenoeg stil omdat de boten grotendeels niet meer varen. Terwijl de vaste lasten gewoon doorlopen. Denk hier aan de loonkosten van het vaste personeel, leningen en belastingen.",
        "In de huidige situatie blijven de boten voor de eerste 4 maanden van het jaar grotendeels stil aan de kade liggen. Er blijft nu een kans liggen, bij de B2B markt, want bedrijven zoeken in het begin van het jaar juist een plek voor bijvoorbeeld een nieuwjaarsborrel of strategische sessies. En omdat bedrijven vaak met grotere groepen zijn die ook catering nodig hebben, kan je een grotere omzet per groep verwachten.",
        "De zakelijke doelgroep van de B2B markt is een goede aanvulling op de huidige activiteiten, vanwege een aantal redenen: Bedrijven plannen hun vergaderingen, teamuitjes, trainingen, klantendagen etc. meestal door de week en juist niet in de zomer. Dit sluit goed aan bij de doelgroep toeristen die juist in het weekend en de zomerperiode een rondvaart boeken. B2B activiteiten hebben vaak een hoger budget per persoon dan recreanten. Bedrijven geven meer geld uit voor catering, techniek en extra services. Bedrijven die tevreden zijn keren regelmatig terug, terwijl een recreant maar een keer een rondvaart zal doen.",
      ],
    },
    {
      id: "dv2-situatie",
      title: "Huidige situatie",
      paragraphs: [
        "Op dit moment richt rederij Cascade zich niet specifiek op de B2B markt. De nadruk ligt op dit moment bij de B2C markt. Dit zorgt voor een hoogseizoen in de warmere maanden en een dip in de koudere maanden.",
        "Om dit probleem aan te pakken moet de basis op orde zijn, en dit is het geval: De infrastructuur is aanwezig, de boten liggen klaar, de juiste vergunningen zijn aanwezig, er is voldoende personeel en het personeel heeft voldoende expertise. Alle boten zijn voorzien van audiovisuele apparatuur, zowel schermen als een geluidsinstallatie. Het bedrijf is in de zomer succesvol genoeg om de winter door te komen. In de winter is er een overschot aan capaciteit: Bedrijfsevenementen hoeven in de winter niet te concurreren met de ticketverkoop.",
        "Er zijn ook verbeterpunten: Er mist een gerichte strategie om de zakelijke markt te bereiken en te overtuigen, momenteel ligt de nadruk nog te veel op de toeristische attractie. Er wordt te weinig genetwerkt en marketing gedaan richting bijvoorbeeld event managers, HR-afdelingen of partyplanners. Zij zijn juist in de eerste paar maanden van het jaar op zoek naar unieke locaties voor hun vergaderingen.",
      ],
    },
    {
      id: "dv2-markt",
      title: "Markt voor zakelijk vergaderen in Limburg",
      paragraphs: [
        "De markt voor congressen en vergaderingen is aanzienlijk. Landelijk lag dit in 2019 op een omzet van € 2.730 miljoen. In de Congres en Vergader Monitor 2024 staat de provinciale spreiding van deelnemende locaties; Limburg is daarin 4%. Dat betekent dat de markt van congressen en vergaderen in Limburg in 2019 € 109 miljoen is.",
        "Het rapport beschrijft dat de markt voor vergaderen en congressen in Limburg kleiner is dan in de Randstad, maar een duidelijk eigen karakter heeft. Limburg richt zich niet op grote aantallen, maar vooral op kwaliteit, rust en inspiratie. De meeste bijeenkomsten bestaan uit vergaderingen, workshops, trainingen en strategische sessies voor kleine en middelgrote groepen (ongeveer 30 tot 150 personen). Grote congressen komen voor, maar zijn niet de belangrijkste markt. Limburg is vooral sterk in meerdaagse bijeenkomsten, waarin inhoud wordt gecombineerd met teambuilding, natuur, water en goed eten.",
        "Veel Limburgse locaties worden gekozen omdat ze anders en inspirerend zijn. Er is nog ruimte voor groei, vooral door betere zichtbaarheid online en door het aanbieden van aantrekkelijke totaal arrangementen.",
        "De Congres- en Vergader Monitor 2024 maakt duidelijk dat het voor Rederij Cascade een grote kans is om zich te gaan richten op de B2B markt. Het goed opzetten van online zichtbaarheid en aanbieden van totaal arrangementen vergroot de kans op succes.",
        "De monitor maakt duidelijk dat bezettingsgraden per locatie sterk verschillen en dat capaciteit een belangrijke factor is. Ook wordt genoemd dat Utrecht met ca. 27% gemiddeld hoger scoort dan andere provincies. Vanuit de monitor lijkt een bezettingsgraad van 20% haalbaar. Uitgaande van 160 beschikbare dagen voor zakelijke evenementen en een bezettingsgraad van 20%, betekent dit 32 zakelijke evenementen per jaar.",
        "Uit de Congres- en Vergader Monitor halen we ook dat zakelijke klanten gemiddeld € 70 tot € 150 per persoon per dag uitgeven voor vergaderingen en workshops. Voor strategische sessies, trainingen & teambijeenkomsten wordt € 150 tot € 250 per persoon per dag uitgegeven.",
        "Een voorzichtige berekening van 32 dagen met zakelijke evenementen voor 75 personen met een gemiddelde uitgave van € 150 per persoon, betekent een extra potentiële omzet voor Rederij Cascade van € 360.000,-.",
      ],
    },
    {
      id: "dv2-concurrentie",
      title: "Concurrentie in Limburg",
      paragraphs: [
        "Rederij Cascade heeft vanuit twee kanten concurrentie in de B2B markt. Aan de ene kant van de markt zijn dat andere rederijen in Limburg, aan de andere kant zijn dat vergaderlocaties op het land. Daar komt de echte concurrentie vandaan.",
        "Andere rederijen zijn: Rederij Stiphout (vaart vanuit Zuid-Limburg en is vooral gericht op toerisme en groepsuitjes, weinig focus op vergaderen en congressen in de B2B markt), Rederij de Corporaal (vaart vanuit Roermond en heeft een sterke focus op rondvaarten, 1 boot voor 54 personen en weinig zakelijke faciliteiten), Maashopper (richt zich op bedrijfs- en familiefeesten en kan tot 200 passagiers vervoeren) en Dutch Cruise Line (vooral gespecialiseerd in meerdaagse riviercruises, noemen de zakelijke markt wel op hun website maar doen weinig op dat gebied).",
        "De echte concurrentie komt niet vanuit het water, maar vanuit vaste vergaderlocaties aan land. Deze locaties zijn speciaal ingericht voor zakelijke bijeenkomsten en sluiten daardoor beter aan op wat bedrijven nodig hebben.",
        "In Limburg zijn er ongeveer 60 tot 100 vergaderlocaties. Deze zijn onder te verdelen in drie segmenten: Functionele vergaderlocaties (~40%), zoals business hotels in Venlo, Heerlen, Maastricht en Roermond — efficiënt, goede AV, goede parkeermogelijkheden, goed bereikbaar, maar weinig beleving. Inspirerende vergaderlocaties met gemiddeld prijsniveau (~50%), zoals beachclubs en kasteelhoeven — bijzondere omgeving, prettige informele sfeer. Exclusieve, high-end vergaderlocaties (~10%), zoals kastelen, musea en retreats — alles draait om beleving en unieke ervaringen.",
        "Rederij Cascade behoort tot de categorie inspirerende vergaderlocaties. Om succesvol te worden in de B2B vergadermarkt is het belangrijk dat Rederij Cascade zich duidelijk onderscheidt van de andere locaties in dit segment.",
      ],
    },
    {
      id: "dv2-zoekgedrag",
      title: "Hoe zoeken klanten naar zakelijke locaties?",
      paragraphs: [
        "Zakelijke opdrachtgevers beginnen hun zoektocht bijna altijd online. Ze oriënteren zich via gespecialiseerde locatieplatforms (zoals Locaties.nl en inspirerendelocaties.nl), zoekmachines (Google), en steeds vaker via AI. Social media speelt in deze fase nauwelijks een rol bij het daadwerkelijk vinden van een locatie. De eerste stap is vooral: \"Welke locaties zijn er die globaal passen bij mijn vraag?\"",
        "In de oriëntatiefase zoeken klanten vooral op functionele randvoorwaarden zoals capaciteit (aantal personen), ligging en reistijd, bereikbaarheid en parkeergelegenheid en type bijeenkomst (vergadering, heisessie, congres, relatie-event). Pas als een locatie aan deze basisvoorwaarden voldoet, wordt zij serieus bekeken.",
        "Wanneer meerdere locaties aan de basiscriteria voldoen, verschuift de aandacht naar beleving: uitstraling van de locatie, omgeving (water, natuur, historisch pand), originaliteit en onderscheidend vermogen. De locatie moet passen bij het doel van de bijeenkomst en het verhaal dat de organisatie wil vertellen. In deze fase winnen inspirerende locaties terrein ten opzichte van standaard vergaderruimtes.",
        "Het onderzoek laat zien dat klanten sterk sturen op duidelijkheid vooraf op het gebied van heldere prijsinformatie, wat wel en niet mogelijk is, beschikbaarheid en duidelijke arrangementen. Gebrek aan transparantie zorgt voor onzekerheid en het afhaken van opdrachtgevers, terwijl openheid juist vertrouwen en meer aanvragen oplevert. Klanten willen snel weten waar ze aan toe zijn.",
        "Beoordelingen, ervaringen van andere klanten en aanbevelingen spelen een belangrijke rol in de definitieve keuze. Social proof verlaagt het gevoel van risico: \"Als andere organisaties hier tevreden waren, zal het voor ons ook goed zijn.\" Locaties met zichtbare reviews en referenties worden sneller gekozen.",
        "Persoonlijk contact blijft belangrijk bij het zoeken naar een locatie. Hoewel de oriëntatie digitaal is, wordt in de selectiefase vaak persoonlijk contact opgenomen, een offerte aangevraagd of een locatiebezoek gepland. Opdrachtgevers hechten veel waarde aan flexibiliteit, meedenken en het nakomen van afspraken. Deze zachte factoren wegen zwaarder dan alleen de prijs.",
        "Binnen dit zoekgedrag heeft Rederij Cascade een sterke uitgangspositie als zij: duidelijk vindbaar is binnen de juiste filters (capaciteit, regio, type event), de beleving van vergaderen op het water helder communiceert, transparant is over mogelijkheden en prijsindicaties, en social proof actief inzet.",
      ],
    },
    {
      id: "dv2-doelgroep",
      title: "Wie boekt een zakelijke locatie?",
      paragraphs: [
        "Uit locatie onderzoek van HighProfile komen de volgende doelgroepen, die zich bezighouden met het boeken van vergaderlocaties: Directie secretaresses, management assistenten (met een ondersteunende rol), Corporate event managers / event manager (werkzaam in het bedrijf), Bureaus / evenementenorganisaties (professionele organisator), ZZP-er (zelfstandige organisator) en overige medewerker bedrijf (bv. eigenaar, HR-medewerker).",
        "Directie secretaresses en managementassistenten zoeken een locatie vooral via Google en hebben minder behoefte aan het verhaal achter de locatie. Corporate event managers vertrouwen vaker op eigen ervaring, besteden het grootste deel van hun werk aan events en nemen meer tijd om locaties te vergelijken en te bezoeken. Medewerkers van evenementenorganisaties zijn het meest grondig: zij starten het vroegst met zoeken, bezoeken de meeste locaties en hechten sterk aan het verhaal achter de locatie. Zzp'ers vormen een aparte groep en gebruiken relatief vaak Facebook, terwijl andere doelgroepen dit kanaal juist minder inzetten.",
        "Secretaresses / assistentes willen snel beslissen en zoeken duidelijk informatie, snelle offertes en zekerheid. (Corporate) event managers zoeken het verhaal achter de locatie en zoeken cases, beoordelingen en een duidelijke propositie. Evenementenbureaus moeten een locatie 'verkopen' aan hun klanten en zoeken pitch-materiaal, namelijk mooie afbeeldingen, unieke kenmerken, transparantie, en het verhaal achter de locatie.",
      ],
    },
    {
      id: "dv2-positionering",
      title: "Positionering Rederij Cascade op B2B markt",
      paragraphs: [
        "Om de B2B markt succesvol op te gaan, moet de Rederij zich duidelijk positioneren. Gezien alle uitgangspunten, de markt, concurrentie en doelgroep stellen we de volgende positionering voor: \"Rederij Cascade is dé vergader- en eventlocatie op het water voor organisaties die focus, verbinding en beleving willen combineren.\"",
        "Rederij Cascade staat voor: Rust en focus (geen afleiding, ideaal voor besluitvorming), Ontzorging (één aanspreekpunt, alles op één locatie, maatwerk) en Beleving met zakelijke impact (geen \"leuk uitje\", maar functionele beleving, ondersteunt zakelijke doelstellingen). Deze 3 pijlers moeten gebruikt worden in alle communicatie, zoals op de website.",
        "De kernbelofte: \"Bij Rederij Cascade vergadert u zonder afleiding, op één plek, met ruimte voor betere gesprekken.\"",
        "De positionering en kernbelofte bepalen onze communicatie. In plaats van termen als 'boottocht met lunch' of 'origineel uitje' spreken we over 'een strategiedag op het water' of 'vergaderen zonder afleiding'. Je bent letterlijk weg van kantoor. Je kunt 'niet ontsnappen'. Dit onderscheidt Rederij Cascade van vergaderlocaties op land. De omgeving op de boot versterkt samenwerking.",
      ],
    },
    {
      id: "dv2-ideeen",
      title: "Ideeën om B2B markt te benutten",
      paragraphs: [
        "De B2B doelgroep is wezenlijk anders dan de markt die Rederij Cascade nu benadert met haar marketing activiteiten. Daarom is het belangrijk om een marketingplan op te stellen voor deze nieuwe doelgroep. In dit plan moeten ook doelstellingen opgenomen worden voor de komende jaren.",
        "Op de website van Rederij Cascade moeten de toeristische activiteiten een even grote plek innemen als de zakelijke bijeenkomsten. Nu zijn de toeristische mogelijkheden prominent aanwezig, en de zakelijke mogelijkheden zijn benoemd als \"ook mogelijk\". De beelden op de website zijn vooral van rondvaarten, diners en feesten. Er is minder aandacht voor zakelijke beelden, zoals vergaderen. Zakelijke beslissers hebben behoefte aan snel overzicht en structuur.",
        "Advies: Maak op de homepage en in het menu een duidelijke aparte propositie voor de zakelijke events. Positioneer zakelijke events niet als \"ook mogelijk\" maar als volwaardige specialisatie. Gebruik hiervoor beelden van zakelijke evenementen. Zorg voor een duidelijke pagina met alle praktische informatie die belangrijk is voor de B2B markt: geschikt voor (vergadering, presentatie, training, relatiedag), capaciteit per schip, faciliteiten aan boord (AV, wifi, break-outs), bereikbaarheid & parkeren. Zorg voor reviews van zakelijke contacten.",
        "Potentiële zakelijke klanten oriënteren zich vaak online voordat zij een locatie boeken. SEO en GEO zorgen ervoor dat Rederij Cascade gevonden wordt. SEO (Search Engine Optimization) zorgt ervoor dat Rederij Cascade hoog in Google verschijnt op zoektermen als vergaderen op het water, zakelijk event Limburg of relatiedag op unieke locatie. GEO (Generative Engine Optimization) richt zich op zichtbaarheid in AI-zoekomgevingen zoals Copilot en ChatGPT.",
        "Secretaresses en managementassistenten spelen vaak een sleutelrol bij de organisatie en locatiekeuze van zakelijke bijeenkomsten. Om hen kennis te laten maken met Rederij Cascade en alle mogelijkheden voor zakelijke events, stellen we voor een kennismakingsmiddag te organiseren.",
      ],
    },
  ],
};
```

- [ ] **Step 6: Create deelvraag 3 content**

Write `src/content/deelvraag3.ts`. This file contains ALL text from the personnel recruitment research question.

```ts
import type { DeelvraagContent } from "./types";

export const deelvraag3: DeelvraagContent = {
  slug: "3",
  number: 3,
  title: "Personeel aantrekken en behouden",
  subtitle: "Hoe voldoende en geschikt personeel vinden in de huidige arbeidsmarkt",
  question: "Hoe kan Rederij Cascade in de huidige arbeidsmarkt voldoende en geschikt personeel aantrekken en behouden voor functies zoals kapiteins, bedienend personeel, keukenpersoneel en afwassers?",
  sections: [
    {
      id: "dv3-probleem",
      title: "Inleiding van het probleem",
      paragraphs: [
        "Met de sterke groei van het bedrijf komt natuurlijk ook een hogere vraag naar arbeid. Zonder personeel kan onze onderneming immers niet draaien en zullen we niet in staat zijn om de gasten de ervaring te bieden die wij graag zouden willen geven.",
        "Doordat de huidige markt zeer krap is kan het moeilijk zijn om geschikt personeel te vinden, vooral voor een onderneming die zeer arbeidsintensief is en dus weinig loonruimte heeft. Als wij torenhoge lonen moeten betalen aan onze werknemers, dan zijn wij genoodzaakt deze gestegen arbeidskosten door te berekenen aan de klant. Dit zal resulteren in een flinke daling in vraag omdat onze sector, horeca/ dagrecreatie, zeer prijselastisch is.",
        "Buiten de situatie van de arbeidsmarkt is het voor de horecabranche erg lastig om personeel te vinden. Doordat de vraag naar ons product erg fluctueert van de zomer tot de winter, kunnen wij onze medewerkers niet jaarrond een bepaald aantal uren aanbieden. Het merendeel van de werknemers zal dus arbeid verrichten op basis van een oproepcontract. Het nadeel van arbeid op basis van een oproepcontract voor de werkgever is dat de werknemer veel rechten heeft op het gebied van flexibiliteit en beschikbaarheid. Het is dus altijd maar de vraag of je genoeg personeel beschikbaar hebt op de piekdagen.",
        "Een ander nadeel is dat de volwassenen, die vaak meer ervaring hebben, geen genoegen nemen met een oproepcontract. Zij moeten tenslotte jaar rond hun woning en boodschappen kunnen betalen, niet alleen in de zomer. Omdat wij vanwege de seizoensafhankelijke vraag niet altijd evenveel vraag hebben, kunnen wij niet iedereen een vast contract aanbieden. Hoewel we op dit moment al werken met een plus-min systeem voor de vaste werknemers, zijn er in de winter alsnog niet genoeg uren om grote aantallen vaste medewerkers uren te geven. Daarom zijn wij vaak op jongeren en gepensioneerden aangewezen om ons vaste team aan te vullen tijdens de piekmomenten.",
        "Jongeren hebben bijvoorbeeld vrij van school in de weekenden en vakanties en dit zijn nu juist de piekmomenten in de horeca. Daarom zal een groot deel van ons onderzoek ook gaan naar de vraag: \"Hoe kunnen wij jonger personeel werven?\"",
        "Ook gepensioneerden staan vaak open voor een oproepcontract omdat zij hun vaste lasten kunnen betalen door hun pensioen. Ze doen het werk dus vooral omdat zij dit leuk vinden en om iets extra's bij te verdienen. Daarnaast is het zowel voor de gast als voor de andere collega's leuk om te zien dat er een gevarieerd team is.",
        "Ook is het voor ons een mogelijkheid om studenten van een BBL horeca opleiding op te leiden. Zij zijn vaak beschikbaar en nemen vaak genoegen met een lager loon dan andere volwassenen omdat zij vaak nog thuis wonen en nog aan het studeren zijn. Het inkomen door het werk is dus vaak een gunstige bijkomstigheid. Een bijkomend voordeel voor ons is dat zij vaak meer kennis en ervaring hebben dan de gemiddelde student omdat zij over de horeca leren op school.",
        "Buiten het werven van nieuwe medewerkers, is het ook belangrijk om ervoor te zorgen dat onze huidige werknemers niet weggaan en een andere baan nemen. Toch is dit vaak onvermijdelijk omdat de meeste jongeren niet voor eeuwig in de horeca willen werken. Wel willen wij onze werknemers natuurlijk zo veel mogelijk behouden en zullen we dus ook hiernaar onderzoek doen.",
      ],
    },
    {
      id: "dv3-huidige-situatie",
      title: "Huidige situatie bij Rederij Cascade",
      paragraphs: [
        "De eerste manier waarop wij op dit moment personeel werven is door middel van onze website. De website die op onze website te vinden is, is erg beknopt. Het uurloon voor jongeren staat bijvoorbeeld nergens vermeld, terwijl zij dit vaak wel belangrijk vinden. Daarnaast is de drempel om te solliciteren erg hoog. Je moet namelijk een mail sturen om te solliciteren, wat voor veel jongeren lastig is en een obstakel kan zijn om daadwerkelijk te solliciteren.",
        "Daarnaast is er een onderverdeling gemaakt in horeca doordeweeks en horeca weekend, hoewel een scheiding hierin goed is, is deze onderverdeling niet uitgebreid genoeg en onlogisch. Mensen die doordeweeks beschikbaar zijn zouden namelijk ook in het weekend beschikbaar kunnen zijn. Daarnaast staat er niet meteen duidelijk aangegeven of het om een bijbaan of een vaste baan gaat. Dit zou er wellicht al voor kunnen zorgen dat mensen afhaken omdat ze denken dat ze niet geschikt zijn. Ook missen er een aantal functies; buiten horeca hebben we ook functies als kapitein, afwasser, keuken en entertainment.",
        "Buiten de eerste manier van personeelswerving kunnen er ook mogelijke sollicitanten doorverwezen worden door collega's, echter wordt dit nog niet actief door ons gepromoot en wordt deze manier dus weinig gebruikt.",
        "Op dit moment wordt er nog geen gebruikgemaakt van social media marketing. Ondanks het feit dat dit misschien niet de plek is waar mensen meteen op zoek zijn naar werk, zou het mensen wel kunnen informeren over ons bedrijf en kan het de drempel om te solliciteren voor jongeren verlagen omdat dit wat informeler is.",
        "Uit de informatie hierboven valt te concluderen dat er op dit moment nog niet veel gedaan wordt aan het werven van personeel en dat hier nog veel winst te behalen valt.",
      ],
    },
    {
      id: "dv3-concurrentie",
      title: "Aanpak van de concurrentie",
      paragraphs: [
        "Vaak kan het handig zijn om te kijken naar de concurrentie om te kijken welke mogelijkheden er zijn en wat voor ons het beste zou kunnen werken. Omdat er in de buurt weinig rederijen zijn, zullen we iets breder kijken naar andere bedrijven binnen de recreatie.",
        "De Zilvermeeuw is een rondvaartbedrijf dat rondvaarten uitvoert rondom en door het Biesbosch. Het bedrijf is vergelijkbaar met dat van ons, maar de schaal van hun bedrijf is wel een stuk groter. Op dit moment hebben zij namelijk 7 schepen in de vaart waarbij ze een maximale capaciteit van 978 personen hebben. Om dit te realiseren hebben ze dan ook ongeveer 130 werknemers in dienst. Wij varen op dit moment met 2 schepen waarmee we een maximale capaciteit van 400 personen kunnen behalen. Wij werken hier met ongeveer 40 medewerkers.",
        "Wanneer je op de hoofdpagina van de Zilvermeeuw komt, zie je bovenaan de website meteen een kopje \"Werken bij Zilvermeeuw\". Als je hierop doorklikt zie je meteen een verdeling in 3 categorieën: Horeca medewerker, medewerker keuken en Meeloop-stage receptie en ontvangst. Als je verder klikt op 1 van deze categorieën, dan zie je dat de gegeven informatie vrij beperkt is en dat solliciteren niet eenvoudig is, ook zij werken met een e-mail. Verder maken ze op social media geen reclame om bij hen te komen werken.",
        "Hoewel de informatie bij de Zilvermeeuw ook niet perfect weergegeven is, zijn er toch een aantal dingen die we van hen kunnen leren. Zo is de pagina van \"Werken bij\" duidelijk zichtbaar op de hele website. Ook geven ze de mogelijkheid om te bellen.",
        "Na de Zilvermeeuw gaan we kijken naar het beleid van Toverland. Zij liggen namelijk niet ver van Rederij Cascade en hebben ook last van veel pieken en dalen in bezoekersaantallen. Daarnaast hebben grote bedrijven vaak speciale mensen die verantwoordelijk zijn voor recruitment.",
        "Als je op de homepage van Toverland kijkt, dan zie je meteen rechtsboven een kopje \"vacatures\". Eenmaal aangekomen op de vacaturepagina zie je dat je bent doorgelinkt naar een aparte website. Deze website heeft een aantal hoofdkoppen: vacatures, wie zijn wij, alles over je bijbaan en bbl-opleiding. Op deze pagina's wordt uitgelegd dat er drukke en rustige periodes zijn, medewerkers met ervaringen uit Toverland aan het woord, zie je welke banen er bij Toverland allemaal zijn en zie je waaraan jij moet voldoen om bij Toverland te werken. Ook staan de basisuurlonen duidelijk vermeld.",
        "Ook heeft Toverland de categorie \"Bbl-opleiding\". Ze bieden zelfs een eigen opleiding aan in samenwerking met andere bedrijven in de buurt. Ondanks dat een eigen opleiding voor ons onhaalbaar is, zou het toch handig kunnen zijn om iets over bbl-leerlingen op de website te zetten.",
        "Per baan staat er een uitgebreide, maar duidelijke tekst met wat je werkzaamheden kunnen zijn en wat je kan verwachten. Mocht je overgehaald zijn om te solliciteren, dan kom je op een nieuwe pagina op dezelfde website waar je jouw gegevens, capaciteiten en motivatie kan invullen. Ook kan je je aanmelden voor een informatieavond en zie je de beschikbaarheid richtlijnen. Dit maakt het sollicitatieproces zeer eenvoudig.",
        "Buiten de website doet Toverland ook veel met advertenties op social media en in het park. Zo zijn er door het park heen posters te vinden met reclame om te werken bij Toverland. Het mooie hieraan is dat deze promotie verder geen kosten oplevert. Het posterconcept zouden we wel eenvoudig kunnen uitvoeren, bijvoorbeeld op de wc of op de gang.",
        "Tenslotte gaan wij kijken naar het beleid van de Jumbo in Maasbracht. Zij liggen in onze directe omgeving en concurreren dus direct met ons op de arbeidsmarkt. Als je de vacatures voor de Jumbo in Maasbracht bekijkt, zie je dat ze 4 functies hebben: versmedewerker, bakker, kassa en vakkenvuller. Bij elke specifieke vacature vind je de bijbehorende minimale leeftijd en vereiste kwaliteiten. Ook staat het loon duidelijk vermeld, maar dit is een stuk lager dan bij ons.",
        "Een opvallend ding in het formulier is \"Wie vertelde je over deze bijbaan?\". Dit zou kunnen betekenen dat medewerkers die nieuwe collega's meebrengen een extra bonus krijgen. Hier zouden wij ook mee kunnen werken, vooral omdat je hierbij alleen kosten maakt als er daadwerkelijk een nieuwe medewerker in dienst treedt.",
        "Door het analyseren van het beleid van de Jumbo weten wij onze sterke punten ten opzichte van de Jumbo beter: een hoger loon, een unieke werklocatie, een kleiner team waardoor je een betere band hebt met je collega's en flexibele beschikbaarheid. Je kan bij ons zelf tot maximaal 3 weken van tevoren aangeven of je beschikbaar bent of niet.",
        "Toch kleven er een aantal nadelen aan werken bij Rederij Cascade. De werkdruk zal tijdens piekmomenten namelijk hoger zijn dan bij een supermarkt of krantenwijk. Daarnaast verwachten we een serieuze inzet en kan het werk soms uitdagend zijn. Een ander nadeel is dat we niet jaarrond evenveel uren kunnen aanbieden.",
        "Ook is het belangrijk dat we ons personeel ook behouden. Op dit moment krijgen medewerkers die langer bij ons werken een toeslag per uur. Doordat ze meer verdienen, zullen ze minder snel een andere baan zoeken. Ook krijgt ons personeel de kans om zich te ontwikkelen en hun functies uit te breiden. Er gaan dan ook weinig werknemers bij ons weg.",
      ],
    },
    {
      id: "dv3-conclusie-analyse",
      title: "Conclusie analyse",
      paragraphs: [
        "Op basis van de huidige situatie bij Rederij Cascade en de vergelijking met de aanpak van andere bedrijven binnen de recreatiebranche kunnen wij concluderen dat het personeel wervingsbeleid op dit moment nog beperkt is ingericht en daardoor niet optimaal wordt benut. Met name de website vormt een belangrijke zwakke plek: belangrijke informatie over functies, type dienstverband en loon ontbreekt, waardoor potentiële sollicitanten, vooral jongeren, sneller afhaken. Daarnaast ligt de drempel om te solliciteren hoog doordat dit alleen via e-mail kan en er geen gebruik wordt gemaakt van een laagdrempelig sollicitatieformulier.",
        "Uit de analyse van de concurrentie blijkt dat andere bedrijven hier verder in zijn. De Zilvermeeuw laat zien hoe belangrijk het is dat de pagina \"werken bij\" duidelijk zichtbaar is op de website en dat er meerdere manieren zijn om contact op te nemen. Toverland gaat hierin nog een stap verder door uitgebreide informatie te geven over werken binnen het bedrijf, duidelijke arbeidsvoorwaarden te communiceren en het sollicitatieproces zo eenvoudig mogelijk te maken. Jumbo Maasbracht laat zien dat het duidelijk benoemen van loon en het inzetten van bestaande medewerkers bij het aandragen van nieuwe collega's effectief kan zijn.",
        "Voor Rederij Cascade betekent dit dat er veel ruimte is voor verbetering. Door de website overzichtelijker en informatiever te maken, alle functies duidelijk te presenteren en het sollicitatieproces te vereenvoudigen, kan de drempel om te solliciteren aanzienlijk worden verlaagd. Daarnaast bieden social media, interne promotie en het actiever inzetten van medewerkers als doorverwijzers kansen om zonder grote kosten meer potentiële sollicitanten te bereiken.",
        "Tot slot blijkt uit de vergelijking dat Rederij Cascade sterke punten heeft ten opzichte van de concurrentie, zoals een hoger loon dan bijvoorbeeld de Jumbo, een unieke werklocatie en een klein, hecht team met flexibele beschikbaarheid. Door deze voordelen beter te benadrukken en het wervingsbeleid te professionaliseren, kan Rederij Cascade zich sterker positioneren op de arbeidsmarkt.",
      ],
    },
    {
      id: "dv3-plan",
      title: "Plan van aanpak",
      paragraphs: [
        "Nu we weten wat onze huidige zwakke en sterke punten zijn en op de hoogte zijn van wat andere bedrijven doen om voldoende personeel te werven, kunnen we een plan van aanpak maken zodat we een goed personeelsbeleid kunnen opstellen.",
        "Wij zorgen ervoor dat sollicitanten zich makkelijk kunnen aanmelden via een eigen vacaturewebsite. Geïnspireerd door de aanpak van Toverland, die een aparte \"Werken bij\" website heeft, hebben wij besloten om zelf ook een professionele vacaturesite te bouwen. Deze website bevat niet alleen een overzichtelijke lijst met alle beschikbare vacatures, maar ook een laagdrempelig sollicitatieformulier waarin de sollicitant zijn of haar gegevens, functievoorkeur, ervaring, talenkennis en beschikbaarheid kan invullen. Daarnaast bevat de site pagina's zoals \"Jouw bijbaan\" en \"Over ons\", waar potentiële sollicitanten meer kunnen lezen over hoe het is om bij Rederij Cascade te werken. Ook worden de loontabellen per leeftijd en functie duidelijk weergegeven. Aan de achterkant beschikt de website over een admin dashboard waarmee wij binnengekomen sollicitaties kunnen beheren, vacatures kunnen aanmaken en bewerken, en paginateksten via een CMS kunnen aanpassen. De website is te vinden op werkenbijcascade.nl.",
        "Daarnaast zullen wij een pdf maken met een mooie, overzichtelijke presentatie van de beschikbaarheidseisen. Dit doen wij zodat wij op de piekmomenten genoeg personeel hebben en zodat het personeel duidelijk weet wat er van hen verwacht wordt met betrekking tot beschikbaarheid.",
        "Verder zullen we de tekst op de website herschrijven en zo nodig extra informatie toevoegen zodat het voor de sollicitant duidelijker is wat er van hem of haar verwacht wordt. Ook delen we het op in 6 categorieën: bediening/bar, keuken, afwas, kapitein en matroos. Daarbij vermelden we ook dat er een neventaak mogelijk is in ons entertainment team.",
        "Wij willen onze medewerkers eenmalig een bepaald bedrag geven als zij iemand doorverwijzen die bij ons in dienst komt en voldoet aan een aantal voorwaarden. Dit kan jongeren aansporen om hun vrienden te activeren om ook bij ons te komen werken. Wel is het belangrijk dat ze minimaal 3 maanden in dienst blijven en zich houden aan de beschikbaarheid richtlijnen.",
        "Het is belangrijk om niet alleen te kijken naar het verbeteren van de instroom, maar ook naar het behoud van werknemers. Op dit moment zijn er weinig werknemers die bij ons uit dienst gaan. We zullen ons huidige beleid dus doorzetten. Zo zorgen we voor bonussen, genoeg doorgroeimogelijkheden en werken we zoveel mogelijk mee met de wensen van het personeel.",
        "Op onze schepen lopen veel gasten waarvan sommige wellicht ook bij ons zouden willen werken. Als we een poster ophangen, bijvoorbeeld op de wc of in de gang, dan zou dit mensen kunnen aanzetten tot sollicitatie. Het is belangrijk om hierbij aan te geven dat je zelf je beschikbaarheid kan bepalen en dat het voor jong en oud is.",
      ],
    },
    {
      id: "dv3-uitvoering",
      title: "Uitvoering",
      paragraphs: [
        "Als uitvoering van het plan van aanpak hebben wij een volledige vacaturewebsite gebouwd, te vinden op werkenbijcascade.nl. Deze website is speciaal ontwikkeld voor Rederij Cascade en bevat alles wat nodig is om het sollicitatieproces professioneel en laagdrempelig te maken.",
        "De website bevat de volgende onderdelen: Een publieke vacaturelijst met alle beschikbare functies, onderverdeeld in categorieën zoals bediening/bar, keuken, afwas, kapitein en matroos. Een sollicitatieformulier waarin sollicitanten hun persoonlijke gegevens, functievoorkeur, ervaring, talenkennis en beschikbaarheid kunnen invullen. Een pagina \"Jouw bijbaan\" met informatie over werken bij Rederij Cascade. Een pagina over BBL-opleidingen, zodat leerlingen die een horeca-opleiding volgen weten dat ze bij ons terechtkunnen. Loontabellen per leeftijd en functie, zodat sollicitanten direct kunnen zien wat ze verdienen. Een \"Over ons\" pagina die de sfeer en het team van Rederij Cascade laat zien.",
        "Achter de schermen beschikt de website over een admin dashboard. Hiermee kunnen wij binnengekomen sollicitaties inzien en beheren, vacatures aanmaken en bewerken, loontabellen bijwerken en paginateksten aanpassen via een ingebouwd CMS.",
      ],
    },
    {
      id: "dv3-conclusie",
      title: "Conclusie",
      paragraphs: [
        "Op basis van ons onderzoek kunnen wij de onderzoeksvraag als volgt beantwoorden: Rederij Cascade kan in de huidige arbeidsmarkt voldoende en geschikt personeel aantrekken door het wervingsbeleid te professionaliseren en de drempel om te solliciteren te verlagen.",
        "Uit de analyse van de huidige situatie bleek dat de personeelswerving bij Rederij Cascade nog beperkt was ingericht. De vacatures op de website waren onvolledig, het sollicitatieproces verliep uitsluitend via e-mail en belangrijke informatie zoals loon, type dienstverband en functieomschrijvingen ontbrak. Door dit te vergelijken met de aanpak van de Zilvermeeuw, Toverland en de Jumbo Maasbracht konden wij concrete verbeterpunten identificeren.",
        "Het plan van aanpak richtte zich op vier onderdelen: een professionele presentatie van vacatures via een eigen vacaturewebsite, interne promotie via een doorverwijzingsbonus, behoud van medewerkers door het huidige beleid voort te zetten en fysieke promotie op de schepen. De kern van de uitvoering is de vacaturewebsite werkenbijcascade.nl, die wij zelf hebben gebouwd. Deze website combineert de best practices van de geanalyseerde bedrijven: een laagdrempelig sollicitatieformulier zoals bij Toverland, duidelijke loontabellen zoals bij de Jumbo en een overzichtelijke vacaturelijst met alle functies.",
        "Door deze aanpak is Rederij Cascade beter voorbereid om in de krappe arbeidsmarkt voldoende personeel aan te trekken, zonder de flexibiliteit en persoonlijke sfeer van het bedrijf te verliezen.",
      ],
    },
  ],
};
```

- [ ] **Step 7: Commit**

```bash
git add src/content/
git commit -m "feat: complete research paper content structured in TypeScript data files"
git push
```

---

### Task 9: Landing Page

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx` (add Navbar to root)

- [ ] **Step 1: Build the landing page**

Write `src/app/page.tsx`:

```tsx
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Divider } from "@/components/ui/Divider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Badge } from "@/components/ui/Badge";
import { inleiding } from "@/content/inleiding";
import { Ship, Briefcase, Users, ArrowRight } from "lucide-react";

const deelvragen = [
  {
    number: 1,
    slug: "1",
    icon: Ship,
    title: "Verblijfsrecreanten bereiken",
    question: inleiding.questions[0].question,
    color: "water",
    gradient: "from-water-500 to-water-600",
  },
  {
    number: 2,
    slug: "2",
    icon: Briefcase,
    title: "De B2B-markt bereiken",
    question: inleiding.questions[1].question,
    color: "gold",
    gradient: "from-gold-500 to-gold-600",
  },
  {
    number: 3,
    slug: "3",
    icon: Users,
    title: "Personeel aantrekken",
    question: inleiding.questions[2].question,
    color: "navy",
    gradient: "from-navy-600 to-navy-700",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />

      <Hero />

      {/* Inleiding section */}
      <section className="py-24">
        <div className="container-narrow">
          <FadeIn>
            <Badge>Inleiding</Badge>
            <h2 className="font-heading text-3xl md:text-4xl text-navy-900 mt-3 mb-8">
              Aanleiding van het onderzoek
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {inleiding.paragraphs.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-navy-600 text-lg leading-relaxed">{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="dots" />

      {/* Deelvragen cards */}
      <section className="py-24">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge>Onderzoek</Badge>
              <h2 className="font-heading text-3xl md:text-4xl text-navy-900 mt-3">
                Drie deelvragen
              </h2>
              <p className="text-navy-500 text-lg mt-3 max-w-2xl mx-auto">
                Elk onderwerp is uitgewerkt met analyse, plan van aanpak en concrete uitvoering.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deelvragen.map((dv, i) => {
              const Icon = dv.icon;
              return (
                <FadeIn key={dv.slug} delay={i * 0.15}>
                  <Link
                    href={`/deelvraag/${dv.slug}`}
                    className="group block h-full"
                  >
                    <div className="bg-white rounded-2xl border border-navy-200 p-8 h-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${dv.gradient} text-white mb-5`}>
                        <Icon size={24} />
                      </div>

                      <div className="text-sm font-medium text-navy-400 mb-2">
                        Deelvraag {dv.number}
                      </div>

                      <h3 className="font-heading text-xl text-navy-900 mb-3">
                        {dv.title}
                      </h3>

                      <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-3">
                        {dv.question}
                      </p>

                      <div className="flex items-center gap-1 text-water-600 text-sm font-medium group-hover:gap-2 transition-all">
                        Lees meer <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify landing page**

Run: `npm run dev`
Expected:
- Full-screen hero with animated title "De Vloot Vol Groei"
- Introduction text with fade-in animations
- Three deelvraag cards that link to `/deelvraag/1`, `/deelvraag/2`, `/deelvraag/3`
- Navbar and footer render correctly
- Scroll progress bar fills

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: landing page with hero, introduction, and deelvraag navigation cards"
git push
```

---

### Task 10: Deelvraag Dynamic Page Renderer

**Files:**
- Create: `src/app/deelvraag/[slug]/page.tsx`

This creates the dynamic page that renders any deelvraag based on the slug (1, 2, or 3). It combines the content data with the interactive components.

- [ ] **Step 1: Create the deelvraag page**

Write `src/app/deelvraag/[slug]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import { deelvraag1 } from "@/content/deelvraag1";
import { deelvraag2 } from "@/content/deelvraag2";
import { deelvraag3 } from "@/content/deelvraag3";
import { DeelvraagHero } from "@/components/sections/DeelvraagHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TextBlock } from "@/components/sections/TextBlock";
import { PullQuote } from "@/components/sections/PullQuote";
import { ConclusionBox } from "@/components/sections/ConclusionBox";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { KeyFigureRow } from "@/components/interactive/KeyFigureRow";
import { RevenueCalculation } from "@/components/interactive/RevenueCalculation";
import { ComparisonCards } from "@/components/interactive/ComparisonCards";
import { ThreePillars } from "@/components/interactive/ThreePillars";
import { MarketSegments } from "@/components/interactive/MarketSegments";
import { ArrangementCards } from "@/components/interactive/ArrangementCards";
import { ProcessTimeline } from "@/components/interactive/ProcessTimeline";
import { Divider } from "@/components/ui/Divider";
import { FadeIn } from "@/components/ui/FadeIn";
import { Handshake, Eye, Globe, Focus, HeartHandshake, Sparkles } from "lucide-react";
import type { DeelvraagContent } from "@/content/types";

const contentMap: Record<string, DeelvraagContent> = {
  "1": deelvraag1,
  "2": deelvraag2,
  "3": deelvraag3,
};

/**
 * Renders a section's paragraphs as TextBlock.
 */
function SectionParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <TextBlock key={i}>
          <p>{p}</p>
        </TextBlock>
      ))}
    </div>
  );
}

/**
 * Interactive elements specific to deelvraag 1.
 */
function Deelvraag1Interactives({ sectionId }: { sectionId: string }) {
  if (sectionId === "dv1-probleem") {
    return (
      <>
        <KeyFigureRow
          figures={[
            { value: 672000, label: "Gasten per jaar", description: "Vakantieparken Midden-Limburg" },
            { value: 1440, label: "Max. gasten", description: "Parc Maasresidence Thorn" },
            { value: 66000, label: "Extra omzet potentieel", format: "currency" },
          ]}
        />
        <RevenueCalculation
          title="Omzetberekening extra verblijfsrecreanten"
          steps={[
            { label: "vaardagen", value: 150 },
            { label: "extra gasten/dag", value: 20 },
            { label: "per persoon", value: 22, prefix: "\u20AC " },
          ]}
          result={{ label: "extra jaaromzet", value: 66000 }}
          description="Slechts 1,5% van de maximale capaciteit van het park — exclusief consumpties"
        />
      </>
    );
  }

  if (sectionId === "dv1-concurrentie") {
    return (
      <ComparisonCards
        title="Vergelijking concurrentie"
        items={[
          {
            name: "Rondvaartbedrijf Giethoorn",
            description: "Volledig ingericht op het bereiken van toeristen met meertalige websites en intensieve samenwerking met accommodaties.",
            strengths: ["Meertalige websites (NL, EN, DE, CN)", "Samenwerking met hotels en vakantieparken", "Honderden reviews op TripAdvisor"],
          },
          {
            name: "Fluisterboot Weerribben-Wieden",
            description: "Arrangementen als compleet uitje gepresenteerd, in samenwerking met vakantieparken.",
            strengths: ["Arrangementen op homepage", "Promotie via toeristenbureaus", "Kortingsacties met vakantieparken"],
          },
          {
            name: "Rederij Cascade",
            description: "Sterke online basis, maar ontbreekt gerichte strategie voor verblijfsrecreanten.",
            strengths: ["Professionele website", "Aanwezig op diverse platforms", "Divers aanbod arrangementen"],
            weaknesses: ["Geen structurele samenwerkingen met parken", "Geen gerichte online advertenties"],
            highlight: true,
          },
        ]}
      />
    );
  }

  if (sectionId === "dv1-plan") {
    return (
      <>
        <ThreePillars
          title="Drie pijlers van het plan"
          pillars={[
            {
              icon: Handshake,
              title: "Samenwerkingen",
              description: "Actieve partnerships met vakantieparken voor fysieke zichtbaarheid.",
              items: ["Flyers bij recepties", "Commissieregeling per boeking", "Presentatie aan receptieteam", "Digitale informatieschermen"],
            },
            {
              icon: Sparkles,
              title: "Arrangementen",
              description: "Herkenbare toeristische pakketten als compleet uitje.",
              items: ["Ontdek-arrangement", "Genieter-arrangement", "Verwenner-arrangement"],
            },
            {
              icon: Globe,
              title: "Online zichtbaarheid",
              description: "Digitaal gevonden worden door actieve toeristen.",
              items: ["Google Bedrijfsprofiel", "Meer reviews", "VVV-vermelding", "Google Ads in hoogseizoen"],
            },
          ]}
        />
        <ArrangementCards
          arrangements={[
            {
              name: "Het Ontdek-arrangement",
              tier: "basis",
              description: "Een rondvaart in combinatie met koffie en gebak, geschikt voor een ochtend of middag.",
              includes: ["Rondvaart", "Koffie of thee", "Gebak"],
            },
            {
              name: "Het Genieter-arrangement",
              tier: "midden",
              description: "Een rondvaart met een uitgebreide brunch of lunch voor gezinnen en stellen.",
              includes: ["Rondvaart", "Uitgebreide brunch of lunch", "Koffie/thee en sap"],
            },
            {
              name: "Het Verwenner-arrangement",
              tier: "premium",
              description: "Een rondvaart met high tea of een 3-gangendiner voor gasten die iets bijzonders zoeken.",
              includes: ["Rondvaart", "High tea of 3-gangendiner", "Welkomstdrankje", "Koffie/thee"],
            },
          ]}
        />
      </>
    );
  }

  return null;
}

/**
 * Interactive elements specific to deelvraag 2.
 */
function Deelvraag2Interactives({ sectionId }: { sectionId: string }) {
  if (sectionId === "dv2-markt") {
    return (
      <>
        <KeyFigureRow
          figures={[
            { value: 2730, label: "Markt NL (mln)", prefix: "\u20AC ", description: "Congressen & vergaderingen" },
            { value: 109, label: "Markt Limburg (mln)", prefix: "\u20AC ", description: "4% van landelijk" },
            { value: 360000, label: "Omzetpotentieel", format: "currency", description: "32 events x 75 pers. x \u20AC150" },
          ]}
        />
        <RevenueCalculation
          title="Omzetberekening B2B-markt"
          steps={[
            { label: "events/jaar", value: 32 },
            { label: "personen/event", value: 75 },
            { label: "per persoon", value: 150, prefix: "\u20AC " },
          ]}
          result={{ label: "extra jaaromzet", value: 360000 }}
          description="Voorzichtige berekening op basis van 20% bezettingsgraad"
        />
      </>
    );
  }

  if (sectionId === "dv2-concurrentie") {
    return (
      <>
        <ComparisonCards
          title="Concurrerende rederijen"
          items={[
            { name: "Rederij Stiphout", description: "Vaart vanuit Zuid-Limburg, gericht op toerisme en groepsuitjes.", weaknesses: ["Weinig B2B focus"] },
            { name: "Rederij de Corporaal", description: "Vaart vanuit Roermond, 1 boot voor 54 personen.", weaknesses: ["Beperkte capaciteit", "Weinig zakelijke faciliteiten"] },
            { name: "Maashopper", description: "Richt zich op bedrijfs- en familiefeesten, tot 200 passagiers.", strengths: ["Groepscapaciteit"] },
            { name: "Dutch Cruise Line", description: "Gespecialiseerd in meerdaagse riviercruises.", weaknesses: ["Weinig actief op B2B gebied"] },
          ]}
        />
        <MarketSegments
          title="Vergaderlocaties in Limburg"
          segments={[
            { label: "Functioneel", percentage: 40, color: "#94A3B8", description: "Business hotels, ketens — praktisch, weinig beleving" },
            { label: "Inspirerend", percentage: 50, color: "#3B82F6", description: "Beachclubs, kasteelhoeven — bijzondere omgeving, informele sfeer" },
            { label: "Exclusief", percentage: 10, color: "#F59E0B", description: "Kastelen, musea, retreats — top van de markt" },
          ]}
        />
      </>
    );
  }

  if (sectionId === "dv2-positionering") {
    return (
      <>
        <PullQuote>
          Rederij Cascade is d&#233; vergader- en eventlocatie op het water voor organisaties die focus, verbinding en beleving willen combineren.
        </PullQuote>
        <ThreePillars
          title="Drie pijlers van de positionering"
          pillars={[
            { icon: Focus, title: "Rust en focus", description: "Geen afleiding, ideaal voor besluitvorming. Je bent letterlijk weg van kantoor." },
            { icon: HeartHandshake, title: "Ontzorging", description: "E\u00E9n aanspreekpunt, alles op \u00E9\u00E9n locatie, volledig maatwerk." },
            { icon: Sparkles, title: "Beleving met impact", description: "Geen \"leuk uitje\" maar functionele beleving die zakelijke doelstellingen ondersteunt." },
          ]}
        />
        <FadeIn>
          <div className="bg-navy-800 text-white rounded-xl p-6 my-8 text-center">
            <p className="font-heading text-xl italic">
              &ldquo;Bij Rederij Cascade vergadert u zonder afleiding, op \u00E9\u00E9n plek, met ruimte voor betere gesprekken.&rdquo;
            </p>
            <p className="text-navy-300 text-sm mt-2">Kernbelofte</p>
          </div>
        </FadeIn>
      </>
    );
  }

  if (sectionId === "dv2-zoekgedrag") {
    return (
      <ProcessTimeline
        title="Zoekproces zakelijke opdrachtgevers"
        steps={[
          { title: "Ori\u00EBntatie", description: "Online zoeken via Google, Locaties.nl, AI. Filteren op capaciteit, ligging, type bijeenkomst." },
          { title: "Vergelijking", description: "Aandacht verschuift naar beleving: uitstraling, omgeving, originaliteit. Inspirerende locaties winnen terrein." },
          { title: "Selectie", description: "Reviews en social proof worden doorslaggevend. Transparantie over mogelijkheden en prijzen is essentieel." },
          { title: "Contact", description: "Persoonlijk contact, offerte aanvraag of locatiebezoek. Flexibiliteit en meedenken wegen zwaarder dan prijs." },
        ]}
      />
    );
  }

  return null;
}

/**
 * Interactive elements specific to deelvraag 3.
 */
function Deelvraag3Interactives({ sectionId }: { sectionId: string }) {
  if (sectionId === "dv3-concurrentie") {
    return (
      <ComparisonCards
        title="Vergelijking wervingsbeleid"
        items={[
          {
            name: "Zilvermeeuw",
            description: "Rondvaartbedrijf Biesbosch, 7 schepen, ~130 medewerkers.",
            strengths: ["\"Werken bij\" prominent op website", "Mogelijkheid om te bellen"],
            weaknesses: ["Beperkte vacature-informatie", "Solliciteren via e-mail"],
          },
          {
            name: "Toverland",
            description: "Attractiepark in de buurt, ervaring met pieken en dalen.",
            strengths: ["Aparte werken-bij website", "Uitgebreide informatie", "Eenvoudig sollicitatieformulier", "Duidelijke loontabellen", "BBL-opleiding mogelijkheid", "Posters in het park"],
          },
          {
            name: "Jumbo Maasbracht",
            description: "Directe concurrent op lokale arbeidsmarkt.",
            strengths: ["Duidelijke functieverdeling", "Loon vermeld", "Doorverwijzingsbonus"],
            weaknesses: ["Lager loon dan Cascade"],
          },
          {
            name: "Rederij Cascade",
            description: "Huidige situatie v\u00F3\u00F3r verbeteringen.",
            strengths: ["Hoger loon dan concurrentie", "Unieke werklocatie", "Hecht team", "Flexibele beschikbaarheid"],
            weaknesses: ["Beknopte vacature-informatie", "Alleen solliciteren via e-mail", "Niet alle functies vermeld"],
            highlight: true,
          },
        ]}
      />
    );
  }

  if (sectionId === "dv3-plan") {
    return (
      <ProcessTimeline
        title="Plan van aanpak personeel"
        steps={[
          { title: "Vacaturewebsite bouwen", description: "Professionele site op werkenbijcascade.nl met sollicitatieformulier, vacaturelijst, loontabellen en informatiepagina's." },
          { title: "Beschikbaarheidsrichtlijnen", description: "Overzichtelijke PDF met verwachtingen per seizoen — richtlijnen, geen harde eisen." },
          { title: "Interne doorverwijzing", description: "Beloning voor medewerkers die nieuwe collega's aandragen die minimaal 3 maanden blijven." },
          { title: "Promotie op schepen", description: "Posters op de wc en in de gang — bereikt zowel jongeren als gepensioneerden onder onze gasten." },
          { title: "Behoud bestaand beleid", description: "Toeslagen voor ervaring, doorgroeimogelijkheden en flexibiliteit blijven behouden." },
        ]}
      />
    );
  }

  return null;
}

function getInteractives(deelvraagNumber: number, sectionId: string) {
  switch (deelvraagNumber) {
    case 1: return <Deelvraag1Interactives sectionId={sectionId} />;
    case 2: return <Deelvraag2Interactives sectionId={sectionId} />;
    case 3: return <Deelvraag3Interactives sectionId={sectionId} />;
    default: return null;
  }
}

export default async function DeelvraagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = contentMap[slug];

  if (!content) {
    notFound();
  }

  const tocItems = content.sections.map((s) => ({
    id: s.id,
    label: s.title,
  }));

  const isLastSection = (i: number) => i === content.sections.length - 1;

  return (
    <>
      <DeelvraagHero
        number={content.number}
        title={content.question}
        subtitle={content.subtitle}
      />

      <div className="container-wide py-16 flex gap-12">
        <TableOfContents items={tocItems} />

        <article className="flex-1 min-w-0">
          {content.sections.map((section, i) => (
            <div key={section.id} className="mb-16">
              <SectionHeading
                id={section.id}
                badge={`${content.number}.${i + 1}`}
                title={section.title}
              />

              <SectionParagraphs paragraphs={section.paragraphs} />

              {/* Render interactive components after the text */}
              {getInteractives(content.number, section.id)}

              {/* Conclusion sections get special treatment */}
              {isLastSection(i) && (
                <ConclusionBox title={`Conclusie — Deelvraag ${content.number}`}>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </ConclusionBox>
              )}

              {!isLastSection(i) && <Divider variant="dots" className="mt-12" />}
            </div>
          ))}
        </article>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }];
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const content = contentMap[params.slug];
  if (!content) return {};
  return {
    title: `${content.title} — De Vloot Vol Groei`,
    description: content.question,
  };
}
```

- [ ] **Step 2: Verify all three deelvraag pages render**

Run: `npm run dev`

Visit:
- `localhost:3000/deelvraag/1` — Should show all DV1 text + counters + revenue calc + comparison cards + three pillars + arrangement cards
- `localhost:3000/deelvraag/2` — Should show all DV2 text + market figures + revenue calc + competitor cards + donut chart + positioning pillars + timeline
- `localhost:3000/deelvraag/3` — Should show all DV3 text + competitor comparison + plan timeline

Check that:
- All text from the research paper is visible
- Interactive elements render and animate on scroll
- Sidebar TOC highlights active section
- Section headings have proper anchor IDs
- Navbar links work between pages

- [ ] **Step 3: Commit**

```bash
git add src/app/deelvraag/
git commit -m "feat: deelvraag dynamic pages with all content and interactive visualizations"
git push
```

---

### Task 11: Responsive Design & Polish

**Files:**
- Modify: Various component files for responsive adjustments
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add mobile navigation menu**

The current Navbar hides links on mobile (`hidden md:flex`). Add a mobile hamburger menu.

Modify `src/components/layout/Navbar.tsx` — add a `useState` for mobile menu toggle:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/deelvraag/1", label: "Verblijfsrecreanten" },
  { href: "/deelvraag/2", label: "B2B Markt" },
  { href: "/deelvraag/3", label: "Personeel" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-navy-900/95 backdrop-blur-md border-b border-navy-800">
      <div className="container-wide flex items-center justify-between h-14">
        <Link href="/" className="font-heading text-white text-lg">
          De Vloot Vol Groei
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-water-500/20 text-water-400"
                    : "text-navy-300 hover:text-white hover:bg-navy-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-navy-800 px-4 pb-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm ${
                  isActive ? "text-water-400" : "text-navy-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Ensure content renders well on mobile**

Check the following responsive classes are in place (they should be from earlier tasks):

- `container-narrow` and `container-wide` have proper `px-6`
- Grid layouts use `grid-cols-1 md:grid-cols-3`
- Font sizes use responsive classes like `text-3xl md:text-5xl`
- `RevenueCalculation` wraps properly with `flex-wrap`
- `MarketSegments` stacks vertically with `flex-col md:flex-row`

If any component doesn't wrap correctly on small screens, adjust the responsive classes accordingly.

- [ ] **Step 3: Add smooth page transition**

Add a simple fade transition to the deelvraag layout. Modify `src/app/deelvraag/layout.tsx`:

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function DeelvraagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main className="animate-fade-in">
        {children}
      </main>
      <Footer />
    </>
  );
}
```

Add the animation to `globals.css`:

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
```

- [ ] **Step 4: Test on multiple screen sizes**

Run: `npm run dev`

Test at these viewport widths:
- **375px** (iPhone SE): All content stacks vertically, mobile menu works
- **768px** (iPad): Two-column grids, desktop nav appears
- **1024px+** (Desktop): Sidebar TOC visible, full-width layouts
- **1440px** (Large desktop): Content stays centered, max-widths respected

- [ ] **Step 5: Run production build**

```bash
cd ~/Projecten/Keicode/vloot-vol-groei
npm run build
```

Expected: Build completes without errors. All pages are statically generated.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: responsive mobile navigation, page transitions, and mobile polish"
git push
```

---

### Task 12: Deelvraag Navigation (Previous/Next)

**Files:**
- Create: `src/components/layout/DeelvraagNav.tsx`
- Modify: `src/app/deelvraag/[slug]/page.tsx`

- [ ] **Step 1: Create previous/next navigation**

Write `src/components/layout/DeelvraagNav.tsx`:

```tsx
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const deelvragen = [
  { slug: "1", title: "Verblijfsrecreanten" },
  { slug: "2", title: "B2B Markt" },
  { slug: "3", title: "Personeel" },
];

export function DeelvraagNav({ currentSlug }: { currentSlug: string }) {
  const currentIndex = deelvragen.findIndex((d) => d.slug === currentSlug);
  const prev = currentIndex > 0 ? deelvragen[currentIndex - 1] : null;
  const next = currentIndex < deelvragen.length - 1 ? deelvragen[currentIndex + 1] : null;

  return (
    <div className="container-wide py-12 flex justify-between gap-4">
      {prev ? (
        <Link
          href={`/deelvraag/${prev.slug}`}
          className="flex items-center gap-2 text-navy-500 hover:text-water-600 transition-colors"
        >
          <ArrowLeft size={18} />
          <div className="text-left">
            <div className="text-xs text-navy-400">Vorige</div>
            <div className="text-sm font-medium">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/deelvraag/${next.slug}`}
          className="flex items-center gap-2 text-navy-500 hover:text-water-600 transition-colors text-right"
        >
          <div>
            <div className="text-xs text-navy-400">Volgende</div>
            <div className="text-sm font-medium">{next.title}</div>
          </div>
          <ArrowRight size={18} />
        </Link>
      ) : (
        <Link
          href="/"
          className="flex items-center gap-2 text-navy-500 hover:text-water-600 transition-colors"
        >
          <div className="text-right">
            <div className="text-xs text-navy-400">Terug naar</div>
            <div className="text-sm font-medium">Overzicht</div>
          </div>
          <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Add to deelvraag pages**

In `src/app/deelvraag/[slug]/page.tsx`, import and add `<DeelvraagNav currentSlug={slug} />` just before the closing `</>` of the page's return, after the article section and before the parent fragment closes.

```tsx
import { DeelvraagNav } from "@/components/layout/DeelvraagNav";

// ... in the return, after the article wrapper div:
      <DeelvraagNav currentSlug={slug} />
    </>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/DeelvraagNav.tsx src/app/deelvraag/
git commit -m "feat: previous/next navigation between deelvraag pages"
git push
```

---

### Task 13: Deploy to Vercel

**Files:**
- No new files

- [ ] **Step 1: Ensure production build passes**

```bash
cd ~/Projecten/Keicode/vloot-vol-groei
npm run build
```

Expected: Successful build with all pages statically generated.

- [ ] **Step 2: Deploy to Vercel**

```bash
cd ~/Projecten/Keicode/vloot-vol-groei
npx vercel --prod
```

Follow the prompts:
- Link to existing project or create new one
- Project name: `vloot-vol-groei`
- Framework: Next.js (auto-detected)

Alternatively, if the GitHub repo is connected to Vercel, the push from the previous task would have triggered an automatic deployment.

- [ ] **Step 3: Verify deployment**

Visit the deployed URL and check:
- Landing page loads with hero animation
- All three deelvraag pages render correctly
- Interactive components animate on scroll
- Mobile navigation works
- All text from the research paper is present

- [ ] **Step 4: Commit any deployment config**

```bash
git add -A
git commit -m "chore: deployment configuration"
git push
```
