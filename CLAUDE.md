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
