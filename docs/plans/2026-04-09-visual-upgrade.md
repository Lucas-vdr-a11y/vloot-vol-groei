# Visual Content Upgrade + Werkenbijcascade Link

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert text walls into visual/interactive elements across all deelvragen — platform grid, seasonal revenue chart, buyer persona cards, strength/weakness matrix, audit checklists, werkenbijcascade.nl feature showcase with CTA link.

**Architecture:** Create 6 new reusable components, then wire them into DeelvraagInteractive.tsx for the specific sections that currently have no visuals. Add a CTA banner component that links DV3 to werkenbijcascade.nl.

**Tech Stack:** Same (Next.js 15, Tailwind v4, Framer Motion). SVG for charts. No new dependencies.

---

## New Components

```
src/components/interactive/
├── PlatformGrid.tsx       # Grid of platform presence cards with status
├── SeasonalChart.tsx      # Animated bar chart showing Q1-Q4 revenue pattern
├── PersonaCards.tsx       # Buyer persona cards with icon, behavior, needs
├── ChecklistCard.tsx      # Visual checklist (done/missing) for audits
├── StrengthWeakness.tsx   # Two-column strength vs weakness display
├── CTABanner.tsx          # Full-width CTA banner with link + description
└── FeatureShowcase.tsx    # Feature grid for werkenbijcascade.nl showcase
```

---

### Task 1: New Components — PlatformGrid, SeasonalChart, ChecklistCard

**Files:**
- Create: `src/components/interactive/PlatformGrid.tsx`
- Create: `src/components/interactive/SeasonalChart.tsx`
- Create: `src/components/interactive/ChecklistCard.tsx`

- [ ] **Step 1: Create PlatformGrid**

Write `src/components/interactive/PlatformGrid.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface Platform {
  name: string;
  status: "actief" | "beperkt" | "ontbreekt";
  detail?: string;
}

interface PlatformGridProps {
  title?: string;
  platforms: Platform[];
}

const statusStyles = {
  actief: { dot: "bg-green-500", bg: "bg-white", text: "text-green-700", label: "Actief" },
  beperkt: { dot: "bg-cascade-gold", bg: "bg-white", text: "text-cascade-gold", label: "Beperkt" },
  ontbreekt: { dot: "bg-red-400", bg: "bg-white", text: "text-red-500", label: "Ontbreekt" },
};

export function PlatformGrid({ title, platforms }: PlatformGridProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {platforms.map((p, i) => {
          const style = statusStyles[p.status];
          return (
            <FadeIn key={p.name} delay={i * 0.05}>
              <div className={`${style.bg} rounded-lg border border-border p-4 card-hover`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                  <span className={`text-xs font-medium ${style.text}`}>{style.label}</span>
                </div>
                <div className="font-heading text-sm font-semibold text-cascade-navy">{p.name}</div>
                {p.detail && <div className="text-xs text-text-muted mt-1">{p.detail}</div>}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create SeasonalChart**

Write `src/components/interactive/SeasonalChart.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

interface SeasonalBar {
  label: string;
  percentage: number;
  color: string;
  sublabel?: string;
}

interface SeasonalChartProps {
  title?: string;
  bars: SeasonalBar[];
  description?: string;
}

export function SeasonalChart({ title, bars, description }: SeasonalChartProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="my-12 bg-white rounded-xl border border-border p-6 md:p-8">
      {title && <h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4>}
      <div className="flex items-end gap-3 h-48">
        {bars.map((bar, i) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <motion.div
              className="w-full rounded-t-md relative"
              style={{ backgroundColor: bar.color }}
              initial={{ height: 0 }}
              animate={isInView ? { height: `${bar.percentage}%` } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-number font-semibold text-cascade-navy whitespace-nowrap">
                {bar.percentage}%
              </span>
            </motion.div>
            <div className="text-center">
              <div className="text-xs font-semibold text-cascade-navy">{bar.label}</div>
              {bar.sublabel && <div className="text-[10px] text-text-muted">{bar.sublabel}</div>}
            </div>
          </div>
        ))}
      </div>
      {description && <p className="text-sm text-text-muted mt-4 text-center">{description}</p>}
    </div>
  );
}
```

- [ ] **Step 3: Create ChecklistCard**

Write `src/components/interactive/ChecklistCard.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Check, X } from "lucide-react";

interface ChecklistItem {
  label: string;
  done: boolean;
  detail?: string;
}

interface ChecklistCardProps {
  title?: string;
  items: ChecklistItem[];
}

export function ChecklistCard({ title, items }: ChecklistCardProps) {
  const doneCount = items.filter((i) => i.done).length;

  return (
    <div className="my-12 bg-white rounded-xl border border-border p-6 md:p-8">
      {title && (
        <FadeIn>
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-heading text-xl text-cascade-navy">{title}</h4>
            <span className="text-sm font-number text-text-muted">
              {doneCount}/{items.length}
            </span>
          </div>
        </FadeIn>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.05}>
            <div className={`flex items-start gap-3 p-3 rounded-lg ${item.done ? "bg-varen-bg/50" : "bg-red-50"}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                item.done ? "bg-varen text-white" : "bg-red-400 text-white"
              }`}>
                {item.done ? <Check size={12} /> : <X size={12} />}
              </div>
              <div>
                <div className={`text-sm font-medium ${item.done ? "text-cascade-navy" : "text-red-700"}`}>
                  {item.label}
                </div>
                {item.detail && <div className="text-xs text-text-muted mt-0.5">{item.detail}</div>}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
git add src/components/interactive/PlatformGrid.tsx src/components/interactive/SeasonalChart.tsx src/components/interactive/ChecklistCard.tsx
git commit -m "feat: new components — PlatformGrid, SeasonalChart, ChecklistCard"
git push
```

---

### Task 2: New Components — PersonaCards, StrengthWeakness, CTABanner, FeatureShowcase

**Files:**
- Create: `src/components/interactive/PersonaCards.tsx`
- Create: `src/components/interactive/StrengthWeakness.tsx`
- Create: `src/components/interactive/CTABanner.tsx`
- Create: `src/components/interactive/FeatureShowcase.tsx`

- [ ] **Step 1: Create PersonaCards**

Write `src/components/interactive/PersonaCards.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { type LucideIcon } from "lucide-react";

interface Persona {
  icon: LucideIcon;
  title: string;
  description: string;
  behavior: string;
  needs: string[];
}

interface PersonaCardsProps {
  title?: string;
  personas: Persona[];
}

export function PersonaCards({ title, personas }: PersonaCardsProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personas.map((persona, i) => {
          const Icon = persona.icon;
          return (
            <FadeIn key={persona.title} delay={i * 0.1}>
              <div className="bg-white rounded-xl border border-border p-5 h-full card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-events-bg text-cascade-navy flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <h5 className="font-heading text-base font-semibold text-cascade-navy">{persona.title}</h5>
                </div>
                <p className="text-sm text-text-secondary mb-3">{persona.description}</p>
                <div className="text-xs text-text-muted mb-2 italic">{persona.behavior}</div>
                <ul className="space-y-1">
                  {persona.needs.map((need) => (
                    <li key={need} className="text-xs text-text-secondary flex items-start gap-1.5">
                      <span className="text-cascade-gold mt-0.5 shrink-0">&#x2022;</span>{need}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create StrengthWeakness**

Write `src/components/interactive/StrengthWeakness.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Check, AlertTriangle } from "lucide-react";

interface StrengthWeaknessProps {
  title?: string;
  strengths: string[];
  weaknesses: string[];
}

export function StrengthWeakness({ title, strengths, weaknesses }: StrengthWeaknessProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FadeIn delay={0}>
          <div className="bg-varen-bg/40 rounded-xl border border-varen/20 p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Check size={18} className="text-varen" />
              <h5 className="font-heading text-lg font-semibold text-varen">Sterktes</h5>
            </div>
            <ul className="space-y-2">
              {strengths.map((s) => (
                <li key={s} className="text-sm text-cascade-navy flex items-start gap-2">
                  <span className="text-varen mt-0.5 shrink-0">+</span>{s}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="bg-red-50 rounded-xl border border-red-200/50 p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-red-500" />
              <h5 className="font-heading text-lg font-semibold text-red-700">Verbeterpunten</h5>
            </div>
            <ul className="space-y-2">
              {weaknesses.map((w) => (
                <li key={w} className="text-sm text-cascade-navy flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">-</span>{w}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create CTABanner**

Write `src/components/interactive/CTABanner.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  variant?: "navy" | "gold" | "green";
}

const variantStyles = {
  navy: "bg-cascade-navy",
  gold: "bg-groep",
  green: "bg-varen",
};

export function CTABanner({ title, description, buttonText, href, variant = "navy" }: CTABannerProps) {
  return (
    <FadeIn>
      <div className={`my-12 ${variantStyles[variant]} rounded-2xl p-8 md:p-10 text-white text-center`}>
        <h4 className="font-heading text-2xl md:text-3xl mb-3">{title}</h4>
        <p className="text-warm-100/70 text-sm md:text-base max-w-xl mx-auto mb-6">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-cascade-navy font-semibold rounded-lg hover:bg-cta/80 transition-colors text-sm card-hover"
        >
          {buttonText}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </FadeIn>
  );
}
```

- [ ] **Step 4: Create FeatureShowcase**

Write `src/components/interactive/FeatureShowcase.tsx`:

```tsx
"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureShowcaseProps {
  title?: string;
  features: Feature[];
}

export function FeatureShowcase({ title, features }: FeatureShowcaseProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="bg-white rounded-xl border border-border p-5 card-hover h-full">
                <div className="w-9 h-9 rounded-lg bg-groep-bg text-groep flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h5 className="font-heading text-sm font-semibold text-cascade-navy mb-1">{f.title}</h5>
                <p className="text-xs text-text-muted">{f.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
git add src/components/interactive/PersonaCards.tsx src/components/interactive/StrengthWeakness.tsx src/components/interactive/CTABanner.tsx src/components/interactive/FeatureShowcase.tsx
git commit -m "feat: new components — PersonaCards, StrengthWeakness, CTABanner, FeatureShowcase"
git push
```

---

### Task 3: Wire Up Deelvraag 1 New Visuals

**Files:**
- Modify: `src/app/deelvraag/[slug]/DeelvraagInteractive.tsx`

Add new interactive sections for DV1 sections that currently have none.

- [ ] **Step 1: Add imports and new DV1 components**

Read `DeelvraagInteractive.tsx`. Add these imports at the top:

```tsx
import { PlatformGrid } from "@/components/interactive/PlatformGrid";
import { ChecklistCard } from "@/components/interactive/ChecklistCard";
import { StrengthWeakness } from "@/components/interactive/StrengthWeakness";
```

Add new exported functions AFTER the existing `Dv1Plan` function and BEFORE the `// ─── Deelvraag 2` comment:

```tsx
export function Dv1HuidigeSituatie() {
  return (
    <>
      <PlatformGrid
        title="Online aanwezigheid Rederij Cascade"
        platforms={[
          { name: "Google Maps", status: "actief", detail: "Vermelding met reviews" },
          { name: "TripAdvisor", status: "actief", detail: "25 reviews, 4,3/5 sterren" },
          { name: "VVV Hart van Limburg", status: "actief", detail: "Volledig profiel met foto's" },
          { name: "DagjeWeg.nl", status: "actief" },
          { name: "Tripper.nl", status: "actief" },
          { name: "DagjeWegTickets.nl", status: "actief" },
          { name: "UitTipsLimburg.nl", status: "actief" },
          { name: "Groeps-Idee.be", status: "actief", detail: "Belgisch platform" },
          { name: "Trip.com", status: "actief", detail: "Internationaal" },
          { name: "Vakantieparken", status: "ontbreekt", detail: "Geen flyers of samenwerking" },
          { name: "Google Ads", status: "ontbreekt", detail: "Geen gerichte campagnes" },
          { name: "Social media ads", status: "ontbreekt", detail: "Geen campagnes voor toeristen" },
        ]}
      />
      <StrengthWeakness
        title="Sterkte-zwakte analyse online aanwezigheid"
        strengths={[
          "Professionele website met arrangementen in NL en EN",
          "Aanwezig op 9+ toeristenplatforms",
          "Positieve reviews (4,3/5 op TripAdvisor)",
          "Breed aanbod: High Tea, Captain's Brunch, dinnercruises",
        ]}
        weaknesses={[
          "Geen structurele samenwerkingen met vakantieparken",
          "Geen flyers bij recepties of op informatieschermen",
          "Geen gerichte online advertenties (Google Ads, social media)",
          "Verblijfsrecreanten worden niet als specifieke doelgroep benaderd",
        ]}
      />
    </>
  );
}

export function Dv1Uitvoering() {
  return (
    <ChecklistCard
      title="Concrete uitvoering"
      items={[
        { label: "Flyer ontworpen", done: true, detail: "Met arrangementen, prijzen en QR-code voor vakantieparken" },
        { label: "Drie toeristische arrangementen uitgewerkt", done: true, detail: "Ontdek, Genieter en Verwenner — klaar voor website" },
        { label: "Conceptmail aan parkmanagers opgesteld", done: true, detail: "Voor Parc Maasresidence Thorn, EuroParcs en Boschmolenplas" },
      ]}
    />
  );
}
```

- [ ] **Step 2: Wire into page.tsx**

Read `src/app/deelvraag/[slug]/page.tsx`. In the imports from `./DeelvraagInteractive`, add:

```tsx
import {
  // ... existing imports ...
  Dv1HuidigeSituatie,
  Dv1Uitvoering,
} from "./DeelvraagInteractive";
```

In the section rendering, add these conditions:

```tsx
{slug === "1" && section.id === "dv1-huidige-situatie" && <Dv1HuidigeSituatie />}
{slug === "1" && section.id === "dv1-uitvoering" && <Dv1Uitvoering />}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/deelvraag/
git commit -m "feat: DV1 visual upgrade — platform grid, strength/weakness analysis, deliverables checklist"
git push
```

---

### Task 4: Wire Up Deelvraag 2 New Visuals

**Files:**
- Modify: `src/app/deelvraag/[slug]/DeelvraagInteractive.tsx`
- Modify: `src/app/deelvraag/[slug]/page.tsx`

- [ ] **Step 1: Add imports and new DV2 components**

Add to imports in DeelvraagInteractive.tsx:

```tsx
import { SeasonalChart } from "@/components/interactive/SeasonalChart";
import { PersonaCards } from "@/components/interactive/PersonaCards";
import { Briefcase, UserCheck, Building2, User, UserCog } from "lucide-react";
```

Add new exported functions AFTER `Dv2Positionering` and BEFORE the `// ─── Deelvraag 3` comment:

```tsx
export function Dv2Probleem() {
  return (
    <>
      <SeasonalChart
        title="Omzetverdeling over het jaar"
        bars={[
          { label: "Q1", sublabel: "Jan-Mrt", percentage: 10, color: "#DAE0E8" },
          { label: "Q2", sublabel: "Apr-Jun", percentage: 55, color: "#49648A" },
          { label: "Q3", sublabel: "Jul-Sep", percentage: 100, color: "#092D61" },
          { label: "Q4", sublabel: "Okt-Dec", percentage: 45, color: "#49648A" },
        ]}
        description="Na de kerstperiode vallen de inkomsten nagenoeg stil terwijl vaste lasten doorlopen. De B2B-markt kan deze winterdip opvullen."
      />
      <ComparisonCards
        title="Waarom B2B een goede aanvulling is"
        items={[
          {
            name: "B2C (huidige focus)",
            description: "Toeristen en recreanten — het huidige kernpubliek.",
            strengths: ["Hoog volume in het zomer", "Bekende doelgroep"],
            weaknesses: ["Alleen weekenden en vakanties", "Eenmalig bezoek", "Lager budget per persoon"],
          },
          {
            name: "B2B (groeikans)",
            description: "Bedrijven en organisaties — de nieuwe doelgroep.",
            highlight: true,
            strengths: ["Doordeweeks en buiten hoogseizoen", "Hoger budget per persoon", "Herhaalbezoek bij tevredenheid", "Catering en extra services"],
          },
        ]}
      />
    </>
  );
}

export function Dv2Situatie() {
  return (
    <StrengthWeakness
      title="Beoordeling huidige uitgangspositie"
      strengths={[
        "Infrastructuur aanwezig: boten, vergunningen, personeel",
        "Audiovisuele apparatuur aan boord (schermen + geluidsinstallatie)",
        "Zomer succesvol genoeg om de winter door te komen",
        "Overcapaciteit in de winter: geen concurrentie met ticketverkoop",
      ]}
      weaknesses={[
        "Geen gerichte strategie voor de zakelijke markt",
        "Te weinig netwerken richting event managers en HR-afdelingen",
        "Nadruk te veel op toeristische attractie in marketing",
      ]}
    />
  );
}

export function Dv2Doelgroep() {
  return (
    <PersonaCards
      title="Wie boekt een zakelijke locatie?"
      personas={[
        {
          icon: UserCheck,
          title: "Secretaresses & assistenten",
          description: "Zoeken snel en praktisch via Google.",
          behavior: "Minder behoefte aan het verhaal, wil snelle zekerheid.",
          needs: ["Duidelijke informatie", "Snelle offerte", "Transparante prijzen"],
        },
        {
          icon: Briefcase,
          title: "Corporate event managers",
          description: "Vertrouwen op eigen ervaring, nemen tijd voor vergelijking.",
          behavior: "Bezoeken locaties persoonlijk, zoeken het verhaal.",
          needs: ["Cases en referenties", "Beoordelingen", "Duidelijke propositie"],
        },
        {
          icon: Building2,
          title: "Evenementenbureaus",
          description: "Meest grondig, starten vroeg met zoeken.",
          behavior: "Moeten de locatie 'verkopen' aan hun klanten.",
          needs: ["Pitch-materiaal en foto's", "Unieke kenmerken", "Transparantie"],
        },
        {
          icon: User,
          title: "ZZP'ers",
          description: "Zelfstandige organisatoren, gebruiken vaker Facebook.",
          behavior: "Aparte groep met eigen zoekkanalen.",
          needs: ["Laagdrempelig contact", "Flexibele mogelijkheden"],
        },
        {
          icon: UserCog,
          title: "Overige medewerkers",
          description: "Eigenaren, HR-medewerkers die incidenteel boeken.",
          behavior: "Minder ervaring met locatie zoeken.",
          needs: ["Overzichtelijk aanbod", "Persoonlijk contact"],
        },
      ]}
    />
  );
}
```

- [ ] **Step 2: Wire into page.tsx**

Add to imports from `./DeelvraagInteractive`:

```tsx
Dv2Probleem,
Dv2Situatie,
Dv2Doelgroep,
```

Add conditions in the section rendering:

```tsx
{slug === "2" && section.id === "dv2-probleem" && <Dv2Probleem />}
{slug === "2" && section.id === "dv2-situatie" && <Dv2Situatie />}
{slug === "2" && section.id === "dv2-doelgroep" && <Dv2Doelgroep />}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/deelvraag/
git commit -m "feat: DV2 visual upgrade — seasonal chart, B2B vs B2C comparison, strength/weakness, persona cards"
git push
```

---

### Task 5: Wire Up Deelvraag 3 New Visuals + Werkenbijcascade CTA

**Files:**
- Modify: `src/app/deelvraag/[slug]/DeelvraagInteractive.tsx`
- Modify: `src/app/deelvraag/[slug]/page.tsx`

- [ ] **Step 1: Add imports and new DV3 components**

Add to imports in DeelvraagInteractive.tsx:

```tsx
import { CTABanner } from "@/components/interactive/CTABanner";
import { FeatureShowcase } from "@/components/interactive/FeatureShowcase";
import { PersonaCards } from "@/components/interactive/PersonaCards";
import { ChecklistCard } from "@/components/interactive/ChecklistCard";
import { Clock, GraduationCap, Heart, List, FormInput, BookOpen, DollarSign, Users2, Settings, FileText, LayoutDashboard } from "lucide-react";
```

NOTE: Some icons may already be imported — don't duplicate. Add only new ones.

Add new exported functions AFTER `Dv3Plan` (before the file ends):

```tsx
export function Dv3Probleem() {
  return (
    <PersonaCards
      title="Drie doelgroepen voor werving"
      personas={[
        {
          icon: Clock,
          title: "Jongeren",
          description: "Vrij in weekenden en vakanties — precies de piekmomenten.",
          behavior: "Zoeken een bijbaan, flexibiliteit is belangrijk.",
          needs: ["Duidelijk uurloon", "Flexibele beschikbaarheid", "Laagdrempelig solliciteren"],
        },
        {
          icon: Heart,
          title: "Gepensioneerden",
          description: "Vaste lasten gedekt door pensioen, werken voor plezier.",
          behavior: "Open voor oproepcontract, willen geen vaste eisen.",
          needs: ["Geen vaste verplichtingen", "Gezelligheid", "Eigen tempo"],
        },
        {
          icon: GraduationCap,
          title: "BBL-studenten",
          description: "Horeca-studenten met meer kennis en ervaring.",
          behavior: "Zoeken een leerplek, nemen genoegen met lager loon.",
          needs: ["Leermogelijkheden", "Combinatie met school", "Praktijkervaring"],
        },
      ]}
    />
  );
}

export function Dv3HuidigeSituatie() {
  return (
    <ChecklistCard
      title="Audit huidige vacaturepagina"
      items={[
        { label: "Uurloon vermeld per leeftijd", done: false, detail: "Jongeren vinden dit belangrijk — ontbreekt nu" },
        { label: "Laagdrempelig sollicitatieformulier", done: false, detail: "Alleen e-mail is hoge drempel voor jongeren" },
        { label: "Alle functies duidelijk vermeld", done: false, detail: "Kapitein, afwasser, keuken en entertainment ontbreken" },
        { label: "Type dienstverband aangegeven", done: false, detail: "Bijbaan vs. vast onduidelijk — mensen haken af" },
        { label: "Logische categorieën", done: false, detail: "Huidige verdeling (doordeweeks/weekend) is onlogisch" },
        { label: "Social media werving", done: false, detail: "Informeler kanaal dat jongeren bereikt" },
        { label: "Doorverwijzing door collega's", done: false, detail: "Niet actief gepromoot" },
      ]}
    />
  );
}

export function Dv3Uitvoering() {
  return (
    <>
      <FeatureShowcase
        title="Wat werkenbijcascade.nl biedt"
        features={[
          { icon: List, title: "Vacaturelijst", description: "Alle functies per categorie: bediening/bar, keuken, afwas, kapitein, matroos" },
          { icon: FormInput, title: "Sollicitatieformulier", description: "Gegevens, functievoorkeur, ervaring, talen en beschikbaarheid" },
          { icon: BookOpen, title: "Jouw Bijbaan", description: "Informatie over werken bij Cascade, sfeer en het team" },
          { icon: GraduationCap, title: "BBL-opleidingen", description: "Speciaal voor horeca-studenten die een leerplek zoeken" },
          { icon: DollarSign, title: "Loontabellen", description: "Per leeftijd en functie — transparant wat je verdient" },
          { icon: Users2, title: "Over Ons", description: "De sfeer en het team van Rederij Cascade" },
          { icon: LayoutDashboard, title: "Admin Dashboard", description: "Sollicitaties beheren, vacatures bewerken, CMS" },
          { icon: Settings, title: "CMS", description: "Paginateksten en loontabellen zelf aanpassen" },
          { icon: FileText, title: "Beschikbaarheid PDF", description: "Richtlijnen per seizoen, geen harde eisen" },
        ]}
      />
      <CTABanner
        title="Bekijk de vacaturewebsite"
        description="Als onderdeel van dit profielwerkstuk hebben wij werkenbijcascade.nl gebouwd — een volledige vacaturewebsite met sollicitatieformulier, loontabellen en admin dashboard."
        buttonText="Bezoek werkenbijcascade.nl"
        href="https://werkenbijcascade.nl"
        variant="gold"
      />
    </>
  );
}
```

- [ ] **Step 2: Wire into page.tsx**

Add to imports:

```tsx
Dv3Probleem,
Dv3HuidigeSituatie,
Dv3Uitvoering,
```

Add conditions:

```tsx
{slug === "3" && section.id === "dv3-probleem" && <Dv3Probleem />}
{slug === "3" && section.id === "dv3-huidige-situatie" && <Dv3HuidigeSituatie />}
{slug === "3" && section.id === "dv3-uitvoering" && <Dv3Uitvoering />}
```

- [ ] **Step 3: Build and verify**

```bash
npm run build
```

Expected: 0 errors, all routes compile.

- [ ] **Step 4: Commit**

```bash
git add src/app/deelvraag/ src/components/interactive/
git commit -m "feat: DV3 visual upgrade — worker personas, recruitment audit, werkenbijcascade.nl showcase + CTA"
git push
```

---

### Task 6: Image Prompts for Nano Banana

This task produces no code — it's a document with detailed image generation prompts.

- [ ] **Step 1: Create image prompts document**

Write `docs/image-prompts.md`:

```markdown
# Image Prompts voor Nano Banana

Hieronder staan gedetailleerde prompts voor AI-gegenereerde afbeeldingen voor de website.
Alle afbeeldingen moeten passen bij de Cascade huisstijl: warm, professioneel, natuur.

---

## 1. Hero Achtergrond — Landing Page

**Bestandsnaam:** `hero-maas.jpg` (1920x1080, landscape)

**Prompt:**
Aerial photograph of a modern white passenger cruise ship sailing on a calm wide river (the Maas river) in the Netherlands, surrounded by lush green Dutch countryside and small villages. Late afternoon golden hour light. The water reflects the warm sunlight. Flat Dutch landscape with trees and meadows on both sides. Clear blue sky with soft white clouds. Photorealistic, cinematic composition, warm color grading with golden and blue tones. No text or logos.

---

## 2. Deelvraag 1 Hero — Verblijfsrecreanten

**Bestandsnaam:** `dv1-hero-toeristen.jpg` (1920x600, landscape wide)

**Prompt:**
Happy Dutch tourist couple in their 50s standing at the railing of a modern river cruise ship, looking out over a beautiful Dutch river landscape. They are holding coffee cups and smiling. Behind them you can see the deck of the ship with tables set for high tea — elegant white tableware, tiered cake stands, flowers. Warm afternoon sunlight. The background shows green Dutch countryside along the Maas river. Photorealistic, lifestyle photography style. Warm, inviting atmosphere. No text or logos.

---

## 3. Deelvraag 2 Hero — B2B Markt

**Bestandsnaam:** `dv2-hero-zakelijk.jpg` (1920x600, landscape wide)

**Prompt:**
Professional business meeting taking place on the interior deck of a modern river cruise ship. A group of 8-10 business professionals in smart casual clothing are seated around a U-shaped conference table. A presenter is standing next to a large screen showing a presentation. Floor-to-ceiling windows show the Dutch river landscape passing by. Natural daylight fills the space. Modern interior with clean lines, wood accents, and nautical touches. Photorealistic, corporate photography style. Professional but relaxed atmosphere. No text or logos.

---

## 4. Deelvraag 3 Hero — Personeel

**Bestandsnaam:** `dv3-hero-team.jpg` (1920x600, landscape wide)

**Prompt:**
Diverse group of young Dutch hospitality crew members (ages 16-25) on the deck of a modern white river cruise ship, laughing and posing together. Mix of genders and appearances. Some wearing navy blue polo shirts. One person holds a serving tray, another wears a captain's cap. The ship deck is clean and modern. Background shows the Dutch Maas river with green landscape. Golden hour sunlight. Candid, energetic group photo style. Warm, fun atmosphere. No text or logos.

---

## 5. Arrangementen Kaarten — Drie afbeeldingen

### 5a. Ontdek-arrangement
**Bestandsnaam:** `arrangement-ontdek.jpg` (600x400)

**Prompt:**
Overhead flat lay photograph of a cozy coffee and cake setup on a white tablecloth on a boat deck. Two cups of cappuccino, two slices of Dutch apple cake (appeltaart) on white plates, a small vase with wildflowers. Through the edge of the frame you can see the wooden railing of the ship and blurred green water. Soft natural light. Food photography style, warm tones. No text.

### 5b. Genieter-arrangement
**Bestandsnaam:** `arrangement-genieter.jpg` (600x400)

**Prompt:**
Beautiful brunch spread on a long table on the deck of a river cruise ship. Bowls of fruit, fresh bread, croissants, orange juice in glass carafes, eggs benedict, smoked salmon, cheese platter. White tablecloth, elegant but casual setting. Two guests visible from the shoulders down, reaching for food. River landscape visible through windows in the background, slightly blurred. Natural daylight. Food photography style, vibrant and appetizing. No text.

### 5c. Verwenner-arrangement
**Bestandsnaam:** `arrangement-verwenner.jpg` (600x400)

**Prompt:**
Elegant high tea setup on a river cruise ship. Three-tiered silver cake stand with petit fours, scones, finger sandwiches and macarons. Fine white porcelain teacups and saucers. A glass of champagne next to the stand. Table next to a large window showing the Maas river at sunset, golden light streaming in. Luxurious but approachable atmosphere. Shallow depth of field, food photography style. Rich warm tones. No text.
```

- [ ] **Step 2: Commit**

```bash
git add docs/image-prompts.md
git commit -m "docs: Nano Banana image generation prompts for hero sections and arrangement cards"
git push
```
