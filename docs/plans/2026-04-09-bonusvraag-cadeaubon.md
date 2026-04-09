# Bonusvraag: Cadeaubon-systeem

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Bonusvraag" page to the site that showcases the cadeaukaart.varenbijcascade.com platform as a concrete technological uitvoering — connecting it to DV1's kortingsactie-idee bij vakantieparken.

**Architecture:** Add a 4th deelvraag page (slug "bonus") with content data, interactive components (FeatureShowcase, CTABanner, ChecklistCard), and a distinct "bonus" styling. Update the landing page to show this as a special 4th card. Update navbar.

**Tech Stack:** Same. Only new content + wiring.

---

### Task 1: Create Bonus Content Data

**Files:**
- Create: `src/content/bonus.ts`
- Modify: `src/content/metadata.ts`
- Modify: `src/content/types.ts`

- [ ] **Step 1: Create bonus.ts**

Write `src/content/bonus.ts`:

```ts
import type { DeelvraagContent } from "./types";

export const bonus: DeelvraagContent = {
  slug: "bonus",
  number: 4,
  title: "Het cadeaubon-systeem",
  subtitle: "Een digitaal platform voor cadeaukaarten, boekingen en automatische kortingen",
  question: "Hoe kan een digitaal cadeaubon-systeem bijdragen aan de groei van Rederij Cascade en de uitvoering van de marketingstrategieën uit dit onderzoek?",
  sections: [
    {
      id: "bonus-aanleiding",
      title: "Aanleiding",
      paragraphs: [
        "Tijdens het werken aan dit profielwerkstuk merkten wij dat er een concrete technologische oplossing nodig was om een aantal van onze voorgestelde marketingstrategieën daadwerkelijk uit te voeren. Omdat we tijd over hadden, hebben we besloten om naast het onderzoek ook een werkend product te bouwen.",
        "In deelvraag 1 stelden wij voor om kortingsacties aan te bieden in samenwerking met vakantieparken: gasten die hun accommodatiebewijs tonen, krijgen korting op een rondvaart of arrangement. Dit idee klonk goed op papier, maar in de praktijk was er geen systeem dat dit automatisch kon afhandelen. Kortingscodes moesten handmatig worden aangemaakt en er was geen manier om de korting digitaal te koppelen aan een boeking.",
        "Daarnaast ontbrak er een manier om cadeaukaarten digitaal te verkopen. Cadeaukaarten zijn een krachtig marketinginstrument: ze brengen nieuwe klanten binnen via het netwerk van bestaande klanten, genereren directe omzet en verhogen de kans op herhalingsbezoek. Toch kon je bij Rederij Cascade geen cadeaukaart online kopen.",
        "Om deze twee problemen op te lossen hebben wij een volledig cadeaubon- en boekingsplatform ontwikkeld, te vinden op cadeaukaart.varenbijcascade.com.",
      ],
    },
    {
      id: "bonus-platform",
      title: "Het platform",
      paragraphs: [
        "Het cadeaubon-systeem is een volledige webapplicatie die wij zelf hebben ontworpen en gebouwd. Het platform stelt klanten in staat om cadeaukaarten te kopen, te personaliseren en te verzenden — zowel digitaal als fysiek per post. Ontvangers kunnen hun cadeaukaart inwisselen voor een rondvaart of arrangement naar keuze.",
        "Klanten kunnen kiezen uit drie typen cadeaukaarten: een waardebon (vrij te besteden bedrag), een open arrangement (arrangement naar keuze op een zelf te kiezen datum) of een vast arrangement (specifiek arrangement op een vaste datum). Bij elk type kan de koper extra's toevoegen zoals eten, drinken of excursies.",
        "De cadeaukaarten kunnen gepersonaliseerd worden met een eigen foto, een persoonlijk bericht en een keuze uit verschillende templates voor gelegenheden zoals verjaardagen, jubilea en feestdagen. Digitale kaarten worden direct per e-mail verzonden als PDF, fysieke kaarten worden als ansichtkaart geprint en per post bezorgd.",
        "Het platform is beschikbaar in vier talen: Nederlands, Engels, Duits en Frans. Dit sluit aan bij onze aanbeveling in deelvraag 1 om meertalige informatie beschikbaar te maken, zoals de rondvaartbedrijven in Giethoorn dat ook doen.",
      ],
    },
    {
      id: "bonus-kortingen",
      title: "Het kortingssysteem",
      paragraphs: [
        "Een van de belangrijkste functies van het platform is het ingebouwde promotie- en kortingssysteem. Dit systeem maakt het mogelijk om de kortingsacties die wij in deelvraag 1 hebben voorgesteld daadwerkelijk uit te voeren.",
        "Via het admin dashboard kunnen kortingsacties worden aangemaakt met de volgende opties: een percentagekorting of een vast bedrag, een optionele kortingscode (of automatisch toepassen zonder code), een minimaal bestelbedrag, een maximale korting, een geldigheidsperiode en een maximaal aantal keer dat de korting gebruikt mag worden.",
        "Kortingen kunnen worden ingesteld voor alle producten, alleen voor arrangementen of alleen voor waardebonnen. Ook is het mogelijk om een korting te koppelen aan specifieke arrangementen. Hierdoor kan Rederij Cascade bijvoorbeeld een korting van 15% aanbieden op het Ontdek-arrangement voor gasten van Parc Maasresidence Thorn, met een unieke code die op de flyers bij de receptie staat.",
        "Het systeem houdt automatisch bij hoe vaak een korting is gebruikt, zodat de effectiviteit van elke campagne gemeten kan worden. Dit is precies de data die nodig is om te bepalen welke samenwerkingen met vakantieparken het meeste opleveren.",
      ],
    },
    {
      id: "bonus-voordelen",
      title: "Bijkomende voordelen",
      paragraphs: [
        "Naast het kortingssysteem biedt het platform een aantal bijkomende voordelen die direct bijdragen aan de groei van Rederij Cascade.",
        "Ten eerste genereert het platform directe omzet. Cadeaukaarten worden vooraf betaald via Mollie (iDEAL, creditcard, Bancontact), waardoor Rederij Cascade de inkomsten ontvangt voordat de dienst wordt geleverd. Dit verbetert de cashflow, vooral in het laagseizoen wanneer cadeaukaarten voor de feestdagen worden verkocht.",
        "Ten tweede vergroot het platform het klantenbestand. Elke cadeaukaart die wordt gekocht, brengt potentieel een nieuwe klant binnen — iemand die anders misschien niet van Rederij Cascade had gehoord. De ontvanger bezoekt de website, kiest een arrangement en maakt kennis met het bedrijf.",
        "Ten derde levert het platform waardevolle klantdata op. Het systeem registreert wie er koopt, voor welke gelegenheid, welke arrangementen populair zijn en wanneer cadeaukaarten worden ingewisseld. Deze informatie kan worden gebruikt om de marketingstrategie te verfijnen.",
        "Ten vierde biedt het platform een Cascade Card functie voor medewerkers van samenwerkingspartners. Medewerkers van vakantieparken of andere partners kunnen met hun Cascade Card 10% korting krijgen op arrangementen en extra's. Dit stimuleert niet alleen de samenwerking, maar zorgt er ook voor dat de medewerkers van de vakantieparken zelf ervaren hoe het is om met Rederij Cascade te varen — waardoor zij het aanbod beter kunnen aanbevelen aan hun gasten.",
        "Tot slot is het platform volledig geïntegreerd met het bestaande boekingssysteem van Rederij Cascade (Smart Event Manager). Wanneer een cadeaukaart wordt ingewisseld, wordt automatisch een reservering aangemaakt in het boekingssysteem. Dit betekent dat de hele stroom — van verkoop tot boeking — volledig geautomatiseerd is.",
      ],
    },
    {
      id: "bonus-techniek",
      title: "Technische realisatie",
      paragraphs: [
        "Het platform is gebouwd met dezelfde moderne technologieën als de vacaturewebsite werkenbijcascade.nl: Next.js voor de webapplicatie, een PostgreSQL database voor de opslag van cadeaukaarten, klanten en bestellingen, en Tailwind CSS voor het ontwerp.",
        "Daarnaast zijn er integraties met externe diensten: Mollie voor het afhandelen van betalingen, Resend voor het verzenden van e-mails met de digitale cadeaukaarten, PrintOne voor het drukken en verzenden van fysieke ansichtkaarten en de Smart Event Manager API voor het synchroniseren van arrangementen, vertrektijden en het aanmaken van reserveringen.",
        "Het admin dashboard stelt Rederij Cascade in staat om alle cadeaukaarten te beheren, kortingsacties aan te maken, verkoopcijfers te bekijken en de inhoud van de website aan te passen via een ingebouwd CMS.",
      ],
    },
    {
      id: "bonus-conclusie",
      title: "Conclusie",
      paragraphs: [
        "Het cadeaubon-systeem op cadeaukaart.varenbijcascade.com is een concrete technologische uitvoering van de marketingideeën uit dit profielwerkstuk. Het platform maakt het mogelijk om kortingsacties met vakantieparken automatisch af te handelen, cadeaukaarten digitaal en fysiek te verkopen, klantdata te verzamelen en de hele stroom van verkoop tot boeking te automatiseren.",
        "Door dit platform te bouwen laten wij zien dat de aanbevelingen uit ons onderzoek niet alleen theoretisch zijn, maar ook praktisch uitvoerbaar. Het systeem is live, functioneel en klaar om ingezet te worden door Rederij Cascade.",
      ],
    },
  ],
};
```

- [ ] **Step 2: Update metadata.ts**

Add the bonus deelvraag to `deelvraagMeta` array in `src/content/metadata.ts`:

```ts
  {
    slug: "bonus",
    number: 4,
    shortTitle: "Cadeaubon-systeem",
    category: "seizoensspecials",
    badgeVariant: "teal" as const,
    colors: {
      primary: "#1D5577",
      secondary: "#58819A",
      bg: "#ABC9D4",
    },
  },
```

- [ ] **Step 3: Commit**

```bash
cd /Users/lucasvanderunstraat/Projecten/Keicode/vloot-vol-groei
git add src/content/bonus.ts src/content/metadata.ts
git commit -m "feat: bonusvraag content — cadeaubon-systeem koppeling met DV1 kortingsacties"
git push
```

---

### Task 2: Wire Bonus Page into Deelvraag Renderer

**Files:**
- Modify: `src/app/deelvraag/[slug]/page.tsx`
- Modify: `src/app/deelvraag/[slug]/DeelvraagInteractive.tsx`

- [ ] **Step 1: Add bonus to page.tsx**

Read `src/app/deelvraag/[slug]/page.tsx`. 

Add import:
```tsx
import { bonus } from "@/content/bonus";
```

Add to `contentMap`:
```tsx
const contentMap: Record<string, DeelvraagContent> = {
  "1": deelvraag1,
  "2": deelvraag2,
  "3": deelvraag3,
  "bonus": bonus,
};
```

Add to `generateStaticParams`:
```tsx
export function generateStaticParams() {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }, { slug: "bonus" }];
}
```

- [ ] **Step 2: Add bonus interactive components to DeelvraagInteractive.tsx**

Read the file. Add these imports if not already present:
```tsx
import { FeatureShowcase } from "@/components/interactive/FeatureShowcase";
import { CTABanner } from "@/components/interactive/CTABanner";
import { ChecklistCard } from "@/components/interactive/ChecklistCard";
```

Add new section at the end (after DV3 components):

```tsx
// ─── Bonusvraag ─────────────────────────────────────────────────────────────

export function BonusKortingen() {
  return (
    <ChecklistCard
      title="Mogelijkheden van het kortingssysteem"
      items={[
        { label: "Percentagekorting of vast bedrag", done: true },
        { label: "Optionele kortingscode of automatisch toepassen", done: true },
        { label: "Minimaal bestelbedrag instellen", done: true },
        { label: "Maximale korting per bestelling", done: true },
        { label: "Geldigheidsperiode instellen", done: true },
        { label: "Maximaal aantal keer gebruiken", done: true },
        { label: "Koppelen aan specifieke arrangementen", done: true },
        { label: "Automatische tracking van gebruik", done: true },
      ]}
    />
  );
}

export function BonusPlatform() {
  return (
    <FeatureShowcase
      title="Functies van het platform"
      features={[
        { icon: Gift, title: "Drie kaarttypen", description: "Waardebon, open arrangement of vast arrangement" },
        { icon: Palette, title: "Personalisatie", description: "Eigen foto, persoonlijk bericht en templates per gelegenheid" },
        { icon: Mail, title: "Digitale levering", description: "Direct per e-mail als PDF met unieke code" },
        { icon: Send, title: "Fysieke levering", description: "Geprint als ansichtkaart en per post bezorgd" },
        { icon: Languages, title: "Vier talen", description: "Nederlands, Engels, Duits en Frans" },
        { icon: ShoppingCart, title: "Extra's toevoegen", description: "Eten, drinken en excursies bij elk arrangement" },
      ]}
    />
  );
}

export function BonusVoordelen() {
  return (
    <ThreePillars
      title="Drie belangrijkste voordelen"
      pillars={[
        {
          icon: CreditCard,
          title: "Directe omzet",
          description: "Cadeaukaarten worden vooraf betaald. Dit verbetert de cashflow, vooral in het laagseizoen.",
        },
        {
          icon: UserPlus,
          title: "Nieuwe klanten",
          description: "Elke cadeaukaart brengt potentieel een nieuwe klant binnen via het netwerk van bestaande klanten.",
        },
        {
          icon: BarChart3,
          title: "Klantdata",
          description: "Het systeem registreert koopgedrag, populaire arrangementen en inwissel-patronen.",
        },
      ]}
    />
  );
}

export function BonusCTA() {
  return (
    <CTABanner
      title="Bekijk het cadeaubon-platform"
      description="Het volledige cadeaubon-systeem is live en functioneel. Bekijk de webshop, personaliseer een cadeaukaart en ervaar de volledige gebruikerservaring."
      buttonText="Bezoek cadeaukaart.varenbijcascade.com"
      href="https://cadeaukaart.varenbijcascade.com"
      variant="navy"
    />
  );
}
```

Add the necessary Lucide icon imports at the top (add to existing import line):
```tsx
Gift, Palette, Mail, Send, Languages, ShoppingCart, CreditCard, UserPlus, BarChart3
```

- [ ] **Step 3: Wire into page.tsx rendering**

In the section rendering block, add bonus conditions:

```tsx
{slug === "bonus" && section.id === "bonus-platform" && <BonusPlatform />}
{slug === "bonus" && section.id === "bonus-kortingen" && <BonusKortingen />}
{slug === "bonus" && section.id === "bonus-voordelen" && <BonusVoordelen />}
{slug === "bonus" && section.id === "bonus-techniek" && <BonusCTA />}
```

Also add these to the imports from `./DeelvraagInteractive`:
```tsx
BonusPlatform,
BonusKortingen,
BonusVoordelen,
BonusCTA,
```

- [ ] **Step 4: Build and verify**

```bash
npm run build
```

Expected: All routes including `/deelvraag/bonus` compile.

- [ ] **Step 5: Commit**

```bash
git add src/app/deelvraag/
git commit -m "feat: bonusvraag page with interactive components — feature showcase, checklist, CTA"
git push
```

---

### Task 3: Update Landing Page + Navbar

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/DeelvraagNav.tsx`

- [ ] **Step 1: Add bonus card to landing page**

Read `src/app/page.tsx`. Add a 4th card to the `deelvraagCards` array:

```tsx
  {
    number: 4,
    slug: "bonus",
    icon: Gift,
    title: "Cadeaubon-systeem",
    question: "Hoe kan een digitaal cadeaubon-systeem bijdragen aan de groei van Rederij Cascade en de uitvoering van de marketingstrategieën uit dit onderzoek?",
    color: "#1D5577",
    bgColor: "#ABC9D4",
  },
```

Add `Gift` to the lucide-react imports.

Change the deelvraag heading text from "De drie deelvragen" to "Het onderzoek".

Change the grid from `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-4` to fit 4 cards.

For the bonus card (number 4), change the "Deelvraag" label to "Bonusvraag":
```tsx
<span className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
  {card.number === 4 ? "Bonusvraag" : `Deelvraag ${card.number}`}
</span>
```

- [ ] **Step 2: Add bonus to Navbar**

Read `src/components/layout/Navbar.tsx`. Add to the `links` array:

```tsx
{ href: "/deelvraag/bonus", label: "Cadeaubon" },
```

- [ ] **Step 3: Update DeelvraagNav**

Read `src/components/layout/DeelvraagNav.tsx`. Add to the `deelvragen` array:

```tsx
{ slug: "bonus", title: "Cadeaubon-systeem" },
```

- [ ] **Step 4: Build and verify**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/components/layout/Navbar.tsx src/components/layout/DeelvraagNav.tsx
git commit -m "feat: bonusvraag in landing page, navbar en deelvraag-navigatie"
git push
```
