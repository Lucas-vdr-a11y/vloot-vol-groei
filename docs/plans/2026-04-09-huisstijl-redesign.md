# Cascade Huisstijl Redesign

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the entire "De Vloot Vol Groei" site to match the official Cascade brand guidelines — correct colors, fonts, logo, and category-based color theming per deelvraag.

**Architecture:** Replace the generic design system with the exact Cascade huisstijl. Each deelvraag gets its own color identity mapped to a brand category (DV1=Rondvaarten/green, DV2=Events/navy, DV3=Groepsuitjes/gold). Logo SVGs are copied into public/. Fonts switch from Fraunces/Inter to Baloo Thambi 2/Poppins.

**Tech Stack:** Same (Next.js 15, Tailwind v4, Framer Motion). Only CSS/component changes.

**Brand source:** `/Users/lucasvanderunstraat/Library/CloudStorage/OneDrive-Gedeeldebibliotheken-RederijCascade/Rederij Cascade - Documenten/Rederij Cascade - Data/Logo's/Cascade 2026/`

---

## File Structure (modifications only)

```
vloot-vol-groei/
├── public/
│   └── logo/
│       ├── cascade-links.svg          # Logo with icon left
│       ├── cascade-icon.svg           # Standalone icon
│       └── cascade-tagline.svg        # Logo with "De vloot vol verrassingen"
├── src/
│   ├── app/
│   │   ├── globals.css                # REWRITE: Cascade brand colors + fonts
│   │   ├── layout.tsx                 # MODIFY: Swap fonts to Baloo Thambi 2 + Poppins
│   │   ├── page.tsx                   # MODIFY: Cascade logo in hero, brand colors, category-colored deelvraag cards
│   │   └── deelvraag/
│   │       └── [slug]/
│   │           ├── page.tsx           # MODIFY: Category-colored hero per deelvraag
│   │           └── DeelvraagInteractive.tsx  # MODIFY: Brand colors in interactive components
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # MODIFY: Cascade logo + brand nav colors
│   │   │   ├── Footer.tsx             # MODIFY: Cascade branding
│   │   │   └── TableOfContents.tsx    # MODIFY: Brand accent colors
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # REWRITE: Cascade-branded hero with logo + wave decoration
│   │   │   ├── DeelvraagHero.tsx      # MODIFY: Category-colored per deelvraag
│   │   │   ├── SectionHeading.tsx     # MODIFY: Brand colors
│   │   │   ├── PullQuote.tsx          # MODIFY: Brand accent
│   │   │   └── ConclusionBox.tsx      # MODIFY: Category color instead of generic navy
│   │   ├── interactive/
│   │   │   ├── KeyFigureRow.tsx       # MODIFY: Gold accents for numbers
│   │   │   ├── RevenueCalculation.tsx # MODIFY: Brand navy gradient
│   │   │   ├── ComparisonCards.tsx    # MODIFY: Brand highlight colors
│   │   │   ├── ThreePillars.tsx       # MODIFY: Brand accent colors
│   │   │   ├── MarketSegments.tsx     # MODIFY: Brand category colors for chart
│   │   │   ├── ArrangementCards.tsx   # MODIFY: Brand tier colors
│   │   │   └── ProcessTimeline.tsx    # MODIFY: Brand accent colors
│   │   └── ui/
│   │       ├── Badge.tsx              # MODIFY: Brand color variants
│   │       ├── Divider.tsx            # MODIFY: Wave in brand colors
│   │       └── FadeIn.tsx             # NO CHANGE
│   └── content/
│       └── metadata.ts               # MODIFY: Add category color config per deelvraag
```

---

### Task 1: Copy Logo Assets + Update Brand Metadata

**Files:**
- Create: `public/logo/cascade-links.svg`
- Create: `public/logo/cascade-icon.svg`
- Create: `public/logo/cascade-tagline.svg`
- Modify: `src/content/metadata.ts`

- [ ] **Step 1: Copy logo SVGs to public**

```bash
mkdir -p /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei/public/logo
cp "/Users/lucasvanderunstraat/Library/CloudStorage/OneDrive-Gedeeldebibliotheken-RederijCascade/Rederij Cascade - Documenten/Rederij Cascade - Data/Logo's/Cascade 2026/Logo svg/CAS - links.svg" /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei/public/logo/cascade-links.svg
cp "/Users/lucasvanderunstraat/Library/CloudStorage/OneDrive-Gedeeldebibliotheken-RederijCascade/Rederij Cascade - Documenten/Rederij Cascade - Data/Logo's/Cascade 2026/Logo svg/CAS - icon links.svg" /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei/public/logo/cascade-icon.svg
cp "/Users/lucasvanderunstraat/Library/CloudStorage/OneDrive-Gedeeldebibliotheken-RederijCascade/Rederij Cascade - Documenten/Rederij Cascade - Data/Logo's/Cascade 2026/Logo svg/CAS - vol verassingen.svg" /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei/public/logo/cascade-tagline.svg
```

- [ ] **Step 2: Update metadata with category colors**

Write `src/content/metadata.ts`:

```ts
export const siteMetadata = {
  title: "De Vloot Vol Groei",
  subtitle: "Onderzoek naar doelgroepbereik en merkversterking bij Rederij Cascade",
  authors: ["Daan Bocken", "Lucas van de Runstraat"],
  year: 2026,
};

/**
 * Each deelvraag maps to a Cascade brand category:
 * DV1 (Verblijfsrecreanten) → Rondvaarten (green)
 * DV2 (B2B Markt) → Events (navy)
 * DV3 (Personeel) → Groepsuitjes (gold)
 */
export const deelvraagMeta = [
  {
    slug: "1",
    number: 1,
    shortTitle: "Verblijfsrecreanten",
    category: "rondvaarten",
    colors: {
      primary: "#586C56",
      secondary: "#889876",
      bg: "#DBE4DA",
      text: "#586C56",
    },
  },
  {
    slug: "2",
    number: 2,
    shortTitle: "B2B Markt",
    category: "events",
    colors: {
      primary: "#092D61",
      secondary: "#49648A",
      bg: "#DAE0E8",
      text: "#092D61",
    },
  },
  {
    slug: "3",
    number: 3,
    shortTitle: "Personeel",
    category: "groepsuitjes",
    colors: {
      primary: "#8E7649",
      secondary: "#9A8F79",
      bg: "#E8E1D6",
      text: "#8E7649",
    },
  },
];
```

- [ ] **Step 3: Commit**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
git add public/logo/ src/content/metadata.ts
git commit -m "feat: add Cascade logo assets and category color metadata"
git push
```

---

### Task 2: Replace Design System (Colors + Fonts)

**Files:**
- Modify: `src/app/globals.css` (full rewrite of @theme)
- Modify: `src/app/layout.tsx` (swap fonts)

- [ ] **Step 1: Rewrite globals.css with Cascade brand**

Replace the entire `@theme` block and base styles in `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  /* ── Cascade Brand Colors ── */

  /* Primary brand */
  --color-cascade-navy: #092D61;
  --color-cascade-gold: #B49253;
  --color-cascade-gold-dark: #8E7649;

  /* Events category (navy) */
  --color-events: #092D61;
  --color-events-mid: #49648A;
  --color-events-bg: #DAE0E8;

  /* Groepsuitjes category (gold) */
  --color-groep: #8E7649;
  --color-groep-mid: #9A8F79;
  --color-groep-bg: #E8E1D6;

  /* Rondvaarten category (green) */
  --color-varen: #586C56;
  --color-varen-mid: #889876;
  --color-varen-bg: #DBE4DA;

  /* Seizoensspecials category (teal) */
  --color-seizoen: #1D5577;
  --color-seizoen-mid: #58819A;
  --color-seizoen-bg: #ABC9D4;

  /* Neutral backgrounds */
  --color-warm-50: #F9F7F5;
  --color-warm-100: #EDECEA;

  /* CTA */
  --color-cta: #A6CBA6;
  --color-cta-border: #092D61;

  /* Text hierarchy */
  --color-text: #092D61;
  --color-text-secondary: #49648A;
  --color-text-muted: #9A8F79;
  --color-text-light: #F9F7F5;

  /* Borders */
  --color-border: #EDECEA;
  --color-border-dark: #DAE0E8;

  /* Fonts — Cascade huisstijl */
  --font-heading: "Baloo Thambi 2", cursive;
  --font-body: "Poppins", sans-serif;
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: var(--font-body);
    color: var(--color-text);
    background-color: var(--color-warm-50);
    line-height: 1.75;
    font-weight: 400;
  }
  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.2;
  }
  ::selection {
    background-color: var(--color-events-bg);
    color: var(--color-cascade-navy);
  }
}

@layer utilities {
  .text-balance { text-wrap: balance; }
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

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
```

- [ ] **Step 2: Update layout.tsx with brand fonts**

Replace font imports in `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Poppins, Baloo_Thambi_2 } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const balooThambi = Baloo_Thambi_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
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
    <html lang="nl" className={`${poppins.variable} ${balooThambi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify fonts load**

Run: `npm run dev`
Expected: Headings render in Baloo Thambi 2 (rounded, friendly), body in Poppins (clean sans-serif).

- [ ] **Step 4: Commit**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: replace design system with Cascade brand colors and fonts (Baloo Thambi 2 + Poppins)"
git push
```

---

### Task 3: Update All UI Components for Brand Colors

**Files:**
- Modify: `src/components/ui/Badge.tsx`
- Modify: `src/components/ui/Divider.tsx`
- Modify: `src/components/ui/ScrollProgress.tsx`
- Modify: `src/components/sections/SectionHeading.tsx`
- Modify: `src/components/sections/TextBlock.tsx`
- Modify: `src/components/sections/PullQuote.tsx`
- Modify: `src/components/sections/ConclusionBox.tsx`

- [ ] **Step 1: Update Badge.tsx**

Read the current file, then replace the variants object:

```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "gold" | "green" | "teal";
}

const variants = {
  navy: "bg-events-bg text-events border-events-bg",
  gold: "bg-groep-bg text-groep border-groep-bg",
  green: "bg-varen-bg text-varen border-varen-bg",
  teal: "bg-seizoen-bg text-seizoen border-seizoen-bg",
};

export function Badge({ children, variant = "navy" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Update Divider.tsx**

In the `wave` variant SVG, change `className="fill-warm-50"` to `className="fill-warm-50"` (this stays the same since warm-50 is now the Cascade #F9F7F5).

In the `dots` variant, change `bg-navy-300` to `bg-cascade-gold/40`:

```tsx
if (variant === "dots") {
  return (
    <div className={`flex justify-center gap-2 py-8 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-cascade-gold/40" />
      <span className="w-1.5 h-1.5 rounded-full bg-cascade-gold/40" />
      <span className="w-1.5 h-1.5 rounded-full bg-cascade-gold/40" />
    </div>
  );
}
```

In the `line` variant, change `bg-navy-300` to `bg-cascade-gold/30`.

- [ ] **Step 3: Update ScrollProgress.tsx**

Change `bg-water-500` to `bg-cascade-gold`:

```tsx
<motion.div
  className="fixed top-0 left-0 right-0 h-1 bg-cascade-gold origin-left z-50"
  style={{ scaleX: scrollYProgress }}
/>
```

- [ ] **Step 4: Update SectionHeading.tsx**

Change color classes:
- `text-navy-900` → `text-cascade-navy`
- `text-navy-500` → `text-text-secondary`

```tsx
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  id: string;
  badge?: string;
  badgeVariant?: "navy" | "gold" | "green" | "teal";
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, badge, badgeVariant = "navy", title, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-10">
      <FadeIn>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        <h2 className="font-heading text-3xl md:text-4xl text-cascade-navy mt-3 text-balance">{title}</h2>
        {subtitle && <p className="text-text-secondary text-lg mt-3 max-w-2xl">{subtitle}</p>}
      </FadeIn>
    </div>
  );
}
```

- [ ] **Step 5: Update TextBlock.tsx**

Change `text-navy-700` to `text-text-secondary`:

```tsx
<div className={`max-w-none text-text-secondary text-lg leading-relaxed ${className}`}>
```

- [ ] **Step 6: Update PullQuote.tsx**

Change to brand gold accent:

```tsx
<blockquote className="my-12 pl-6 border-l-4 border-cascade-gold bg-groep-bg/30 py-6 pr-6 rounded-r-lg">
  <p className="font-heading text-xl md:text-2xl text-cascade-navy italic leading-relaxed">{children}</p>
  {attribution && <footer className="mt-3 text-sm text-text-muted">{attribution}</footer>}
</blockquote>
```

- [ ] **Step 7: Update ConclusionBox.tsx**

Change to brand navy:

```tsx
<div className="my-16 bg-cascade-navy text-white rounded-2xl p-8 md:p-12">
  <h3 className="font-heading text-2xl md:text-3xl mb-6">{title}</h3>
  <div className="text-warm-100 leading-relaxed space-y-4 text-lg">{children}</div>
</div>
```

- [ ] **Step 8: Commit**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
git add src/components/ui/ src/components/sections/
git commit -m "feat: update all UI and section components with Cascade brand colors"
git push
```

---

### Task 4: Update Interactive Components for Brand Colors

**Files:**
- Modify: `src/components/interactive/AnimatedCounter.tsx`
- Modify: `src/components/interactive/KeyFigureRow.tsx`
- Modify: `src/components/interactive/RevenueCalculation.tsx`
- Modify: `src/components/interactive/ComparisonCards.tsx`
- Modify: `src/components/interactive/ThreePillars.tsx`
- Modify: `src/components/interactive/ArrangementCards.tsx`
- Modify: `src/components/interactive/ProcessTimeline.tsx`
- Modify: `src/components/interactive/MarketSegments.tsx`

- [ ] **Step 1: Update KeyFigureRow.tsx**

Change card and counter colors:
- Card border: `border-navy-200` → `border-border`
- Counter color: `text-water-600` → `text-cascade-gold`
- Label color: `text-navy-900` → `text-cascade-navy`
- Description color: `text-navy-500` → `text-text-muted`

```tsx
<div className="bg-white rounded-xl p-6 border border-border shadow-sm text-center">
  <div className="text-3xl md:text-4xl font-bold text-cascade-gold mb-2">
    <AnimatedCounter ... />
  </div>
  <div className="font-heading text-cascade-navy font-semibold">{figure.label}</div>
  {figure.description && (
    <div className="text-sm text-text-muted mt-1">{figure.description}</div>
  )}
</div>
```

- [ ] **Step 2: Update RevenueCalculation.tsx**

Change gradient and accent colors:
- Background: `from-navy-900 to-navy-800` → `from-cascade-navy to-events-mid`
- Step values: `text-water-400` → `text-warm-100`
- Multiplier sign: `text-navy-400` → `text-events-mid`
- Result: `text-gold-400` → `text-cascade-gold`
- Description: `text-navy-300` → `text-warm-100/70`

- [ ] **Step 3: Update ComparisonCards.tsx**

Change highlight and card colors:
- Normal card: `bg-white border-navy-200` → `bg-white border-border`
- Highlight card: `bg-water-100/50 border-water-300 ring-2 ring-water-200` → `bg-cta/10 border-cta ring-2 ring-cta/30`
- Title: `text-navy-900` → `text-cascade-navy`
- Description: `text-navy-600` → `text-text-secondary`
- Strengths label: keep green (`text-green-600`)
- Weaknesses label: keep red (`text-red-500`)

- [ ] **Step 4: Update ThreePillars.tsx**

Change icon container and text colors:
- Icon circle: `bg-water-100 text-water-600` → `bg-events-bg text-cascade-navy`
- Title: `text-navy-900` → `text-cascade-navy`
- Description: `text-navy-600` → `text-text-secondary`
- Bullet: `text-water-500` → `text-cascade-gold`

- [ ] **Step 5: Update ArrangementCards.tsx**

Map tiers to brand categories:
```tsx
const tierStyles = {
  basis: { border: "border-varen", badge: "bg-varen-bg text-varen", icon: "text-varen" },
  midden: { border: "border-events-mid", badge: "bg-events-bg text-events", icon: "text-events" },
  premium: { border: "border-cascade-gold", badge: "bg-groep-bg text-groep", icon: "text-cascade-gold" },
};
```

- [ ] **Step 6: Update ProcessTimeline.tsx**

Change timeline colors:
- Line: `bg-navy-200` → `bg-border`
- Dot: `bg-water-500` → `bg-cascade-navy`
- Title: `text-navy-900` → `text-cascade-navy`
- Description: `text-navy-600` → `text-text-secondary`

- [ ] **Step 7: Update MarketSegments.tsx — already uses inline colors, no change needed**

The `MarketSegments` component receives colors as props (hex strings passed in from `DeelvraagInteractive.tsx`). Update the passed colors in DeelvraagInteractive.tsx (Task 6) to match brand colors:
- Functioneel: `#9A8F79` (groep-mid, warm grey)
- Inspirerend: `#49648A` (events-mid, medium blue)
- Exclusief: `#B49253` (cascade-gold)

- [ ] **Step 8: Commit**

```bash
cd /Users/lucasvanderunstraat/Projektcen/Keicode/vloot-vol-groei
git add src/components/interactive/
git commit -m "feat: update all interactive components with Cascade brand colors"
git push
```

---

### Task 5: Redesign Hero + Navbar + Footer with Cascade Logo

**Files:**
- Modify: `src/components/sections/Hero.tsx` (full rewrite)
- Modify: `src/components/sections/DeelvraagHero.tsx`
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/TableOfContents.tsx`

- [ ] **Step 1: Rewrite Hero.tsx with Cascade branding**

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cascade-navy overflow-hidden">
      {/* Warm gradient background with gold undertone */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cascade-navy via-cascade-navy to-events-mid" />
        {/* Animated wave shapes in brand gold */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10"
          style={{
            background: "radial-gradient(ellipse at 30% 100%, #B49253 0%, transparent 70%), radial-gradient(ellipse at 70% 100%, #A6CBA6 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* SVG wave at bottom */}
        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z" fill="#F9F7F5" fillOpacity="0.08" />
          <path d="M0 80C360 110 720 50 1080 80C1260 95 1380 85 1440 80V120H0V80Z" fill="#F9F7F5" fillOpacity="0.05" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Cascade logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <Image
            src="/logo/cascade-icon.svg"
            alt="Cascade icoon"
            width={100}
            height={100}
            className="mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cascade-gold/20 text-cascade-gold text-sm font-medium border border-cascade-gold/30 mb-8">
            Profielwerkstuk 2026
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          De Vloot Vol Groei
        </motion.h1>

        <motion.p
          className="text-warm-100/80 text-lg md:text-xl mb-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Onderzoek naar doelgroepbereik en merkversterking bij Rederij Cascade
        </motion.p>

        <motion.p
          className="text-warm-100/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Daan Bocken &amp; Lucas van de Runstraat
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-cascade-gold/50 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-cascade-gold/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update DeelvraagHero.tsx with category colors**

Add a `categoryColor` prop and use inline styles for the accent:

```tsx
"use client";

import { motion } from "framer-motion";

interface DeelvraagHeroProps {
  number: number;
  title: string;
  subtitle: string;
  categoryColor?: string;  // hex color from deelvraagMeta
  categoryBg?: string;     // hex bg color
}

export function DeelvraagHero({ number, title, subtitle, categoryColor = "#092D61", categoryBg }: DeelvraagHeroProps) {
  return (
    <section className="relative bg-cascade-navy pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cascade-navy to-events-mid" />
      {/* Decorative wave */}
      <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
        <path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="#F9F7F5" />
      </svg>
      <div className="relative z-10 container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium border mb-6"
            style={{
              backgroundColor: `${categoryColor}20`,
              color: categoryBg || "#F9F7F5",
              borderColor: `${categoryColor}40`,
            }}
          >
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
          className="text-warm-100/70 text-lg max-w-2xl"
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

- [ ] **Step 3: Update Navbar.tsx with Cascade logo**

Replace the text logo with the actual Cascade SVG logo:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cascade-navy/95 backdrop-blur-md border-b border-cascade-navy">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/cascade-icon.svg" alt="Cascade" width={32} height={32} />
          <span className="font-heading text-white text-lg hidden sm:inline">De Vloot Vol Groei</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive ? "bg-cascade-gold/20 text-cascade-gold" : "text-warm-100/70 hover:text-white hover:bg-white/5"
                }`}
              >{link.label}</Link>
            );
          })}
        </div>
        <button className="md:hidden text-warm-100/70 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cascade-navy border-t border-events-mid/30 px-4 pb-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm ${isActive ? "text-cascade-gold" : "text-warm-100/70"}`}
              >{link.label}</Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 4: Update Footer.tsx**

```tsx
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-cascade-navy text-warm-100/60 py-16">
      <div className="container-narrow text-center">
        <Image src="/logo/cascade-links.svg" alt="Cascade" width={180} height={40} className="mx-auto mb-4 brightness-0 invert" />
        <p className="text-sm">Onderzoek naar doelgroepbereik en merkversterking</p>
        <div className="mt-6 text-sm">
          <p className="text-warm-100/80">Daan Bocken &amp; Lucas van de Runstraat</p>
          <p className="text-warm-100/40 mt-1">Profielwerkstuk 2026</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 5: Update TableOfContents.tsx**

Change accent colors:
- Active border: `border-water-500` → `border-cascade-gold`
- Active text: `text-water-600` → `text-cascade-navy`
- Inactive: `text-navy-500` → `text-text-muted`
- Hover: `hover:text-navy-700 hover:border-navy-300` → `hover:text-cascade-navy hover:border-cascade-gold/50`
- Label: `text-navy-400` → `text-text-muted`

- [ ] **Step 6: Commit**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
git add src/components/
git commit -m "feat: Cascade-branded Hero with logo, Navbar with icon, brand-colored Footer and TOC"
git push
```

---

### Task 6: Update Landing Page + Deelvraag Pages with Category Colors

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/deelvraag/[slug]/page.tsx`
- Modify: `src/app/deelvraag/[slug]/DeelvraagInteractive.tsx`
- Modify: `src/components/layout/DeelvraagNav.tsx`

- [ ] **Step 1: Update landing page deelvraag cards with category colors**

In `src/app/page.tsx`, update the card data to include category colors and style each card differently:

```tsx
const deelvraagCards = [
  {
    number: 1,
    slug: "1",
    icon: Ship,
    title: "Verblijfsrecreanten bereiken",
    question: inleiding.questions[0].question,
    color: "#586C56",       // varen
    bgColor: "#DBE4DA",     // varen-bg
  },
  {
    number: 2,
    slug: "2",
    icon: Briefcase,
    title: "De B2B-markt bereiken",
    question: inleiding.questions[1].question,
    color: "#092D61",       // events
    bgColor: "#DAE0E8",     // events-bg
  },
  {
    number: 3,
    slug: "3",
    icon: Users,
    title: "Personeel aantrekken en behouden",
    question: inleiding.questions[2].question,
    color: "#8E7649",       // groep
    bgColor: "#E8E1D6",     // groep-bg
  },
];
```

Update the card rendering to use inline category colors for the icon container:

```tsx
<div
  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 transition-transform group-hover:scale-110"
  style={{ backgroundColor: card.bgColor, color: card.color }}
>
  <Icon size={24} />
</div>
```

Change "Lees meer" arrow color from `text-water-600` to `text-cascade-gold`.

Update all remaining navy-* and water-* class references in page.tsx:
- `text-navy-900` → `text-cascade-navy`
- `text-navy-700` → `text-text-secondary`
- `text-navy-600` → `text-text-secondary`
- `text-navy-400` → `text-text-muted`
- `border-navy-200` → `border-border`
- `hover:border-water-300` → `hover:border-cascade-gold/50`

- [ ] **Step 2: Update deelvraag page to pass category colors**

In `src/app/deelvraag/[slug]/page.tsx`:

Import `deelvraagMeta` from metadata and use it to pass category colors to `DeelvraagHero`:

```tsx
import { deelvraagMeta } from "@/content/metadata";

// Inside the component, after getting content:
const meta = deelvraagMeta.find((m) => m.slug === slug);

// Pass to DeelvraagHero:
<DeelvraagHero
  number={content.number}
  title={content.title}
  subtitle={content.question}
  categoryColor={meta?.colors.primary}
  categoryBg={meta?.colors.bg}
/>
```

Update SectionHeading badge variant per deelvraag:
```tsx
const badgeVariant = slug === "1" ? "green" : slug === "2" ? "navy" : "gold";

// In the SectionHeading:
<SectionHeading
  id={section.id}
  title={section.title}
  badge={`Deelvraag ${content.number}`}
  badgeVariant={badgeVariant}
/>
```

Update all remaining navy-* and water-* classes:
- `bg-warm-50` stays (now mapped to #F9F7F5)
- `text-navy-*` → equivalent brand color classes

- [ ] **Step 3: Update DeelvraagInteractive.tsx MarketSegments colors**

In the `Dv2Concurrentie` function, update the segment colors to brand colors:

```tsx
<MarketSegments
  title="Segmentatie vergadermarkt Limburg"
  segments={[
    { label: "Functionele vergaderlocaties", percentage: 40, color: "#9A8F79", description: "..." },
    { label: "Inspirerende locaties", percentage: 50, color: "#49648A", description: "..." },
    { label: "Exclusieve high-end locaties", percentage: 10, color: "#B49253", description: "..." },
  ]}
/>
```

- [ ] **Step 4: Update DeelvraagNav.tsx**

Change color classes:
- `text-navy-500` → `text-text-secondary`
- `hover:text-water-600` → `hover:text-cascade-gold`
- `text-navy-400` → `text-text-muted`

- [ ] **Step 5: Build and verify**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
npm run build
```

Expected: 0 errors, all 5 routes compile.

- [ ] **Step 6: Commit**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
git add src/app/ src/components/layout/DeelvraagNav.tsx
git commit -m "feat: category-colored deelvraag cards, pages, and interactive components"
git push
```
