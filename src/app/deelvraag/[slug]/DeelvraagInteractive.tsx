"use client";

import { Handshake, Eye, Globe, Focus, HeartHandshake, Sparkles } from "lucide-react";

import { KeyFigureRow } from "@/components/interactive/KeyFigureRow";
import { RevenueCalculation } from "@/components/interactive/RevenueCalculation";
import { ComparisonCards } from "@/components/interactive/ComparisonCards";
import { ThreePillars } from "@/components/interactive/ThreePillars";
import { MarketSegments } from "@/components/interactive/MarketSegments";
import { ArrangementCards } from "@/components/interactive/ArrangementCards";
import { ProcessTimeline } from "@/components/interactive/ProcessTimeline";
import { PullQuote } from "@/components/sections/PullQuote";

// ─── Deelvraag 1 ────────────────────────────────────────────────────────────

export function Dv1Probleem() {
  return (
    <>
      <KeyFigureRow
        figures={[
          {
            value: 672000,
            format: "number",
            label: "Gasten per jaar",
            description: "Verblijfsrecreanten in Midden-Limburg (2023, VVV Hart van Limburg)",
          },
          {
            value: 1440,
            format: "number",
            label: "Max. capaciteit",
            description: "Parc Maasresidence Thorn bij volledige bezetting",
          },
          {
            value: 66000,
            prefix: "€",
            format: "number",
            label: "Extra omzet",
            description: "Bij slechts 1,5% conversie van de parkgasten",
          },
        ]}
      />
      <RevenueCalculation
        title="Omzetberekening: 1,5% conversie"
        steps={[
          { label: "dagen", value: 150, format: "number" },
          { label: "extra gasten/dag", value: 20, format: "number" },
          { label: "prijs/ticket", value: 22, prefix: "€", format: "number" },
        ]}
        result={{ label: "extra omzet per jaar", value: 66000 }}
        description="Slechts 1,5% van de maximale capaciteit van Parc Maasresidence Thorn. Marginale kosten zijn laag omdat de boot toch vaart."
      />
    </>
  );
}

export function Dv1Concurrentie() {
  return (
    <ComparisonCards
      title="Wat doen vergelijkbare bedrijven?"
      items={[
        {
          name: "Rondvaartbedrijven Giethoorn",
          description:
            "Een van de meest bezochte toeristische bestemmingen van Nederland, volledig ingericht op het bereiken van toeristen.",
          strengths: [
            "Meertalige informatie (NL, EN, DE, ZH)",
            "Intensieve samenwerking met accommodaties",
            "Honderden reviews op TripAdvisor en Google Maps",
          ],
        },
        {
          name: "Fluisterboten Weerribben-Wieden",
          description:
            "Specifieke arrangementen gericht op toeristen als compleet uitje, actief gepromoot via toeristenbureaus.",
          strengths: [
            "Arrangementen als compleet uitje gepresenteerd",
            "Kortingsacties bij vakantieparken",
            "Prominente vermelding via VVV-platforms",
          ],
        },
        {
          name: "Rederij Cascade",
          description:
            "Sterke online basis, maar nog geen gerichte strategie voor verblijfsrecreanten als specifieke doelgroep.",
          highlight: true,
          strengths: [
            "Professionele website met arrangementen",
            "Aanwezig op TripAdvisor, Google Maps en VVV",
            "Uniek culinair aanbod (brunch, high tea, diner)",
          ],
          weaknesses: [
            "Geen structurele samenwerkingen met vakantieparken",
            "Geen gerichte online advertenties",
            "Weinig reviews ten opzichte van concurrentie",
          ],
        },
      ]}
    />
  );
}

export function Dv1Plan() {
  return (
    <>
      <ThreePillars
        title="De drie onderdelen van het plan"
        pillars={[
          {
            icon: Handshake,
            title: "Samenwerkingen",
            description:
              "Actieve samenwerking met vakantieparken in de omgeving voor maximaal bereik.",
            items: [
              "Flyers en brochures bij recepties",
              "Receptiemedewerkers informeren",
              "Commissieregeling voor doorverwijzingen",
              "Advertenties op digitale informatieschermen",
            ],
          },
          {
            icon: Sparkles,
            title: "Arrangementen",
            description:
              "Herkenbare toeristische arrangementen die verblijfsrecreanten direct aanspreken.",
            items: [
              "Ontdek-arrangement (instap)",
              "Genieter-arrangement (populair)",
              "Verwenner-arrangement (premium)",
            ],
          },
          {
            icon: Globe,
            title: "Online zichtbaarheid",
            description:
              "Vergroot de online vindbaarheid via platforms die toeristen raadplegen.",
            items: [
              "Google Bedrijfsprofiel optimaliseren",
              "Reviews stimuleren op Google en TripAdvisor",
              "Aanmelden bij VVV Hart van Limburg",
              "Google Ads in het hoogseizoen",
            ],
          },
        ]}
      />
      <ArrangementCards
        arrangements={[
          {
            name: "Het Ontdek-arrangement",
            tier: "basis",
            description:
              "Een rondvaart in combinatie met koffie en gebak. Geschikt voor een ochtend of middag.",
            includes: ["Rondvaart", "Koffie & gebak", "Laagdrempelig instapmodel"],
          },
          {
            name: "Het Genieter-arrangement",
            tier: "midden",
            description:
              "Een rondvaart met een uitgebreide brunch of lunch, gericht op gezinnen en stellen.",
            includes: ["Rondvaart", "Uitgebreide brunch of lunch", "Halve dag programma"],
          },
          {
            name: "Het Verwenner-arrangement",
            tier: "premium",
            description:
              "Een rondvaart met high tea, het premium arrangement voor speciale momenten.",
            includes: ["Rondvaart", "High tea", "Premium beleving op het water"],
          },
        ]}
      />
    </>
  );
}

// ─── Deelvraag 2 ────────────────────────────────────────────────────────────

export function Dv2Markt() {
  return (
    <>
      <KeyFigureRow
        figures={[
          {
            value: 2730,
            prefix: "€",
            suffix: "M",
            format: "number",
            label: "Landelijke markt",
            description: "Omzet congressen & vergaderingen in Nederland (2019)",
          },
          {
            value: 109,
            prefix: "€",
            suffix: "M",
            format: "number",
            label: "Limburgse markt",
            description: "4% van de nationale markt, eigen karakter",
          },
          {
            value: 360000,
            prefix: "€",
            format: "number",
            label: "Potentiële omzet",
            description: "Bij 32 zakelijke evenementen à 75 personen à €150",
          },
        ]}
      />
      <RevenueCalculation
        title="Potentiële B2B omzet berekening"
        steps={[
          { label: "evenementen/jaar", value: 32, format: "number" },
          { label: "personen/event", value: 75, format: "number" },
          { label: "prijs/persoon", value: 150, prefix: "€", format: "number" },
        ]}
        result={{ label: "extra potentiële omzet", value: 360000 }}
        description="Bij een bezettingsgraad van 20% over 160 beschikbare dagen. Zakelijke klanten geven gemiddeld €70-€150 per persoon per dag uit."
      />
    </>
  );
}

export function Dv2Concurrentie() {
  return (
    <>
      <ComparisonCards
        title="Concurrenten in de B2B markt"
        items={[
          {
            name: "Rederij Stiphout",
            description: "Vaart vanuit Zuid-Limburg, gericht op toerisme en groepsuitjes.",
            weaknesses: ["Weinig focus op vergaderen en congressen"],
          },
          {
            name: "Rederij de Corporaal",
            description: "Vaart vanuit Roermond, sterke focus op rondvaarten.",
            weaknesses: ["1 boot voor 54 personen", "Weinig zakelijke faciliteiten"],
          },
          {
            name: "Maashopper",
            description: "Richt zich op bedrijfs- en familiefeesten.",
            strengths: ["Tot 200 passagiers"],
            weaknesses: ["Minder focus op vergaderen"],
          },
          {
            name: "Rederij Cascade",
            description: "Inspirerende locatie op het water met sterke culinaire propositie.",
            highlight: true,
            strengths: [
              "Unieke locatie op het water",
              "Audiovisuele faciliteiten aan boord",
              "Sterk culinair aanbod",
            ],
            weaknesses: [
              "Nog geen gerichte B2B marketing",
              "Zakelijke propositie onderbelicht",
            ],
          },
        ]}
      />
      <MarketSegments
        title="Segmentatie vergadermarkt Limburg"
        segments={[
          {
            label: "Functionele vergaderlocaties",
            percentage: 40,
            color: "#9A8F79",
            description: "Business hotels — efficiënt, weinig beleving",
          },
          {
            label: "Inspirerende locaties",
            percentage: 50,
            color: "#49648A",
            description: "Beachclubs, kasteelhoeven — bijzondere sfeer",
          },
          {
            label: "Exclusieve high-end locaties",
            percentage: 10,
            color: "#B49253",
            description: "Kastelen, musea — alles draait om beleving",
          },
        ]}
      />
    </>
  );
}

export function Dv2Zoekgedrag() {
  return (
    <ProcessTimeline
      title="Hoe zoeken zakelijke klanten?"
      steps={[
        {
          title: "Oriëntatie",
          description:
            "Online zoeken via locatieplatforms (Locaties.nl, inspirerendelocaties.nl), zoekmachines en AI. Social media speelt nauwelijks een rol.",
        },
        {
          title: "Vergelijking op basisvoorwaarden",
          description:
            "Capaciteit, ligging, bereikbaarheid, parkeergelegenheid en type bijeenkomst worden vergeleken. Alleen locaties die hieraan voldoen worden serieus bekeken.",
        },
        {
          title: "Selectie op beleving",
          description:
            "Als meerdere locaties aan de basiscriteria voldoen, verschuift de aandacht naar uitstraling, omgeving en onderscheidend vermogen.",
        },
        {
          title: "Contact & offerte",
          description:
            "Opdrachtgevers hechten veel waarde aan transparante prijsinformatie, heldere arrangementen en snel persoonlijk contact.",
        },
      ]}
    />
  );
}

export function Dv2Positionering() {
  return (
    <>
      <PullQuote>
        &ldquo;Bij Rederij Cascade vergadert u zonder afleiding, op één plek, met ruimte voor betere
        gesprekken.&rdquo;
      </PullQuote>
      <ThreePillars
        title="De drie onderdelen van de B2B positionering"
        pillars={[
          {
            icon: Focus,
            title: "Rust & focus",
            description:
              "Geen afleiding, letterlijk weg van kantoor. Ideaal voor besluitvorming en strategische sessies.",
          },
          {
            icon: HeartHandshake,
            title: "Ontzorging",
            description:
              "Één aanspreekpunt, alles op één locatie, volledig maatwerk. De klant hoeft nergens aan te denken.",
          },
          {
            icon: Eye,
            title: "Beleving met zakelijke impact",
            description:
              "Geen 'leuk uitje', maar functionele beleving. De unieke omgeving versterkt samenwerking en verbinding.",
          },
        ]}
      />
      <div className="my-12 bg-events-bg/50 border border-border-dark rounded-xl p-8">
        <p className="text-xs font-semibold text-cascade-gold uppercase tracking-wider mb-3">
          Kernbelofte
        </p>
        <p className="font-heading text-xl md:text-2xl text-cascade-navy leading-relaxed">
          &ldquo;Rederij Cascade is dé vergader- en eventlocatie op het water voor organisaties die
          focus, verbinding en beleving willen combineren.&rdquo;
        </p>
        <p className="text-text-secondary text-sm mt-4">
          In communicatie spreken we over{" "}
          <em>&lsquo;een strategiedag op het water&rsquo;</em> of{" "}
          <em>&lsquo;vergaderen zonder afleiding&rsquo;</em> — niet over &lsquo;boottocht met
          lunch&rsquo; of &lsquo;origineel uitje&rsquo;.
        </p>
      </div>
    </>
  );
}

// ─── Deelvraag 3 ────────────────────────────────────────────────────────────

export function Dv3Concurrentie() {
  return (
    <ComparisonCards
      title="Wat doen andere bedrijven aan personeelswerving?"
      items={[
        {
          name: "De Zilvermeeuw",
          description:
            "Vergelijkbaar rondvaartbedrijf, 7 schepen, ~130 werknemers. 'Werken bij' prominent op de website.",
          strengths: ["Duidelijk zichtbare 'Werken bij' pagina", "Mogelijkheid om te bellen naast e-mail"],
          weaknesses: ["Informatie per functie beperkt", "Geen social media werving"],
        },
        {
          name: "Toverland",
          description:
            "Pretpark in de buurt, ook pieken en dalen in bezoekersaantallen. Aparte 'Werken bij' website.",
          strengths: [
            "Aparte, uitgebreide vacaturewebsite",
            "Duidelijke loontabellen per leeftijd/functie",
            "Laagdrempelig sollicitatieformulier",
            "BBL-opleiding samenwerking",
            "Posters door het park als promotie",
          ],
        },
        {
          name: "Jumbo Maasbracht",
          description:
            "Directe concurrent op de arbeidsmarkt. Loon duidelijk vermeld, doorverwijzingsbonus.",
          strengths: ["Loon duidelijk vermeld per vacature", "Verwijzing door collega's gestimuleerd"],
          weaknesses: ["Lager loon dan Rederij Cascade"],
        },
        {
          name: "Rederij Cascade",
          description: "Goede arbeidsvoorwaarden, maar werving nog beperkt ingericht.",
          highlight: true,
          strengths: [
            "Hoger loon dan concurrenten",
            "Unieke werklocatie op het water",
            "Klein, hecht team",
            "Flexibele beschikbaarheid",
          ],
          weaknesses: [
            "Vacaturepagina onvolledig",
            "Alleen solliciteren via e-mail",
            "Geen social media werving",
          ],
        },
      ]}
    />
  );
}

export function Dv3Plan() {
  return (
    <ProcessTimeline
      title="Plan van aanpak: personeel aantrekken"
      steps={[
        {
          title: "Professionele vacaturewebsite (werkenbijcascade.nl)",
          description:
            "Aparte website met alle vacatures per categorie (bediening/bar, keuken, afwas, kapitein, matroos), laagdrempelig sollicitatieformulier, loontabellen en 'Jouw bijbaan' pagina.",
        },
        {
          title: "Beschikbaarheidsrichtlijnen helder communiceren",
          description:
            "Een duidelijke PDF met beschikbaarheidseisen zodat personeel weet wat er verwacht wordt op piekmomenten.",
        },
        {
          title: "Doorverwijzingsbonus voor medewerkers",
          description:
            "Eenmalige bonus voor medewerkers die iemand doorverwijzen die minimaal 3 maanden in dienst blijft en voldoet aan de beschikbaarheidsrichtlijnen.",
        },
        {
          title: "Behoud van huidige medewerkers",
          description:
            "Huidige beleid voortzetten: loyaliteitstoeslagen, doorgroeimogelijkheden en flexibiliteit in beschikbaarheid.",
        },
        {
          title: "Fysieke promotie op de schepen",
          description:
            "Posters op de schepen (toiletten, gangen) om gasten te informeren over werken bij Rederij Cascade.",
        },
      ]}
    />
  );
}
