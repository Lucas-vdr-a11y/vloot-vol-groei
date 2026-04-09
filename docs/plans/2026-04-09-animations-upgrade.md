# Animations & Micro-interactions Upgrade

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the site from "clean with basic fade-ins" to "premium interactive document" with hover effects, card elevation, icon animations, smooth transitions, timeline drawing, and micro-interactions — while respecting `prefers-reduced-motion`.

**Architecture:** Add a shared CSS transition layer in globals.css, then upgrade each component category. No new dependencies — Framer Motion + CSS transitions cover everything.

**Tech Stack:** Same stack. Framer Motion for scroll-triggered + entrance animations, CSS for hover states + transitions.

---

## Task 1: Global Animation Layer + Reduced Motion

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add animation utilities and reduced motion to globals.css**

Append the following AFTER the existing content in `src/app/globals.css`:

```css
/* ── Animation Utilities ── */

@layer utilities {
  /* Card hover lift — add to any card for premium hover */
  .card-hover {
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1),
                box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px -8px rgba(9, 45, 97, 0.12),
                0 4px 12px -4px rgba(9, 45, 97, 0.08);
  }

  /* Icon hover — subtle scale + rotate */
  .icon-hover {
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .icon-hover:hover, .group:hover .group-icon-hover {
    transform: scale(1.15) rotate(6deg);
  }

  /* Link underline expand */
  .link-underline {
    position: relative;
  }
  .link-underline::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-cascade-gold);
    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .link-underline:hover::after {
    width: 100%;
  }
}

/* ── Custom Keyframes ── */

@keyframes draw-line {
  from { height: 0; }
  to { height: 100%; }
}

@keyframes pulse-gold {
  0%, 100% { box-shadow: 0 0 0 0 rgba(180, 146, 83, 0); }
  50% { box-shadow: 0 0 0 8px rgba(180, 146, 83, 0.15); }
}

@keyframes slide-down {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes count-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

/* ── Reduced Motion ── */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .card-hover:hover {
    transform: none;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: global animation utilities, keyframes, and prefers-reduced-motion"
git push
```

---

## Task 2: Card Hover Effects (All Card Components)

**Files:**
- Modify: `src/components/interactive/ComparisonCards.tsx`
- Modify: `src/components/interactive/ThreePillars.tsx`
- Modify: `src/components/interactive/ArrangementCards.tsx`
- Modify: `src/components/interactive/KeyFigureRow.tsx`

Add `card-hover` class to every card element and icon hover to icon containers.

- [ ] **Step 1: Update ComparisonCards.tsx**

Read the file. Find the card `<div>` inside the `.map()`. Add `card-hover` to its className.

Change the card div from:
```tsx
<div className={`rounded-xl p-6 border h-full ${...}`}>
```
to:
```tsx
<div className={`rounded-xl p-6 border h-full card-hover ${...}`}>
```

- [ ] **Step 2: Update ThreePillars.tsx**

Read the file. Add `card-hover` to the card div and `icon-hover` to the icon container.

Card div — add `card-hover`:
```tsx
<div className="text-center p-6 rounded-xl bg-white border border-border shadow-sm h-full card-hover">
```

Icon container — add `icon-hover`:
```tsx
<div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-events-bg text-cascade-navy mb-4 icon-hover">
```

- [ ] **Step 3: Update ArrangementCards.tsx**

Read the file. Add `card-hover` to the card div.

```tsx
<div className={`rounded-xl border-2 ${styles.border} p-6 h-full bg-white relative card-hover`}>
```

- [ ] **Step 4: Update KeyFigureRow.tsx**

Read the file. Add `card-hover` to the stat card div.

```tsx
<div className="bg-white rounded-xl p-6 border border-border shadow-sm text-center card-hover">
```

- [ ] **Step 5: Verify hover effects work**

Run dev server, hover over cards on any deelvraag page. Cards should lift 4px with a soft shadow on hover.

- [ ] **Step 6: Commit**

```bash
git add src/components/interactive/
git commit -m "feat: card hover lift effects on all card components"
git push
```

---

## Task 3: Timeline Line-Draw Animation

**Files:**
- Modify: `src/components/interactive/ProcessTimeline.tsx`

Replace the static vertical line with an animated one that "draws" on scroll.

- [ ] **Step 1: Rewrite ProcessTimeline.tsx with animated line**

Read the current file. Replace it with this version that adds:
- Animated line that draws from top to bottom on scroll
- Step circles that pulse briefly when entering view
- Staggered entrance delays per step

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";
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
  const { ref, isInView } = useInView();

  return (
    <div className="my-12" ref={ref}>
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-8">{title}</h4></FadeIn>
      )}
      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          className="absolute left-4 top-0 w-px bg-cascade-gold/40 origin-top"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          style={{ height: "100%" }}
        />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {/* Animated dot */}
              <motion.div
                className="relative z-10 w-8 h-8 shrink-0 rounded-full bg-cascade-navy text-white flex items-center justify-center text-sm font-bold"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + i * 0.15,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                {i + 1}
              </motion.div>
              {/* Content */}
              <div className="pb-2">
                <h5 className="font-heading text-lg font-semibold text-cascade-navy">{step.title}</h5>
                <p className="text-text-secondary text-sm mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/interactive/ProcessTimeline.tsx
git commit -m "feat: animated timeline with line-draw, staggered step entrance, and circle scale"
git push
```

---

## Task 4: Mobile Menu Slide Animation + Navbar Polish

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Add animated mobile menu**

Read the current Navbar. Replace the mobile menu section with Framer Motion `AnimatePresence` + `motion.div` for smooth slide-down:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
                className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 link-underline ${
                  isActive ? "bg-cascade-gold/20 text-cascade-gold" : "text-warm-100/70 hover:text-white hover:bg-white/5"
                }`}
              >{link.label}</Link>
            );
          })}
        </div>
        <button
          className="md:hidden text-warm-100/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden bg-cascade-navy border-t border-events-mid/30 overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link href={link.href} onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive ? "text-cascade-gold" : "text-warm-100/70 hover:text-white"
                      }`}
                    >{link.label}</Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: animated mobile menu slide-down with staggered links"
git push
```

---

## Task 5: Landing Page Card Interactions + CTA Polish

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/layout/DeelvraagNav.tsx`

- [ ] **Step 1: Update deelvraag cards on landing page**

Read `src/app/page.tsx`. Update the card Link elements:

Add `card-hover` to the card link's className. Add `icon-hover` to the icon container. These are already CSS utility classes from Task 1.

The card Link should have:
```tsx
className="group flex flex-col h-full bg-white rounded-2xl border border-border shadow-sm card-hover transition-all duration-300 p-8"
```

The icon container should have `icon-hover` added:
```tsx
<div
  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 icon-hover"
  style={{ backgroundColor: card.bgColor, color: card.color }}
>
```

The "Lees meer" arrow: add `transition-transform group-hover:translate-x-1` to the ArrowRight icon:
```tsx
<div className="mt-6 flex items-center gap-2 text-cascade-gold text-sm font-medium">
  Lees meer <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
</div>
```

- [ ] **Step 2: Update DeelvraagNav with arrow animation**

Read `src/components/layout/DeelvraagNav.tsx`. Add arrow hover animation:

For the previous link's ArrowLeft:
```tsx
<ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
```
Wrap the Link in a group: add `group` to the Link className.

For the next link's ArrowRight:
```tsx
<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
```
Add `group` to the Link className.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx src/components/layout/DeelvraagNav.tsx
git commit -m "feat: card hover lift, icon animations, and arrow micro-interactions on landing page"
git push
```

---

## Task 6: Counter Pulse + TOC Smooth Indicator

**Files:**
- Modify: `src/components/interactive/AnimatedCounter.tsx`
- Modify: `src/components/layout/TableOfContents.tsx`

- [ ] **Step 1: Add pulse effect to AnimatedCounter when count completes**

Read `src/components/interactive/AnimatedCounter.tsx`. The counter should add a brief scale pulse when it reaches its target value. 

Modify the component to track when counting is complete and apply a CSS animation:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number>(0);

  // Intersection observer
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animation
  useEffect(() => {
    if (!triggered) return;
    function animate(timestamp: number) {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        setDone(true);
      }
    }
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [triggered, target, duration]);

  const formatted = format === "currency" ? formatCurrency(value) : formatNumber(value);

  return (
    <span
      ref={ref}
      className={`font-number inline-block ${className}`}
      style={done ? { animation: "count-pulse 0.4s ease-out" } : undefined}
    >
      {prefix}{formatted}{suffix}
    </span>
  );
}
```

- [ ] **Step 2: Smooth TOC active indicator**

Read `src/components/layout/TableOfContents.tsx`. Add smooth transition to the active border:

The link element should have `transition-all duration-300` added to its className:

```tsx
<a
  href={`#${item.id}`}
  className={`block pl-4 py-1 text-sm border-l-2 -ml-px transition-all duration-300 ${
    isActive
      ? "border-cascade-gold text-cascade-navy font-medium"
      : "border-transparent text-text-muted hover:text-cascade-navy hover:border-cascade-gold/50"
  }`}
>
```

- [ ] **Step 3: Build and verify**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
npm run build
```

Expected: 0 errors, all routes compile.

- [ ] **Step 4: Commit**

```bash
git add src/components/interactive/AnimatedCounter.tsx src/components/layout/TableOfContents.tsx
git commit -m "feat: counter pulse on completion, smooth TOC active indicator transition"
git push
```
