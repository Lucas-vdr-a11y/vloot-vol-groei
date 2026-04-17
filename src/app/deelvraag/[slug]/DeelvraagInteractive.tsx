"use client";

import Image from "next/image";
import { Handshake, Eye, Globe, Focus, HeartHandshake, Sparkles, Briefcase, UserCheck, Building2, User, UserCog, Clock, GraduationCap, Heart, List, BookOpen, DollarSign, Users2, Settings, FileText, LayoutDashboard, FormInput, Gift, Palette, Mail, Send, Languages, ShoppingCart, CreditCard, UserPlus, BarChart3, Lightbulb, Network, Megaphone, ClipboardList, Award, MessageSquare, Star } from "lucide-react";

import { KeyFigureRow } from "@/components/interactive/KeyFigureRow";
import { RevenueCalculation } from "@/components/interactive/RevenueCalculation";
import { ComparisonCards } from "@/components/interactive/ComparisonCards";
import { ThreePillars } from "@/components/interactive/ThreePillars";
import { MarketSegments } from "@/components/interactive/MarketSegments";
import { ArrangementCards } from "@/components/interactive/ArrangementCards";
import { ProcessTimeline } from "@/components/interactive/ProcessTimeline";
import { PullQuote } from "@/components/sections/PullQuote";
import { PlatformGrid } from "@/components/interactive/PlatformGrid";
import { ChecklistCard } from "@/components/interactive/ChecklistCard";
import { StrengthWeakness } from "@/components/interactive/StrengthWeakness";
import { SeasonalChart } from "@/components/interactive/SeasonalChart";
import { PersonaCards } from "@/components/interactive/PersonaCards";
import { CTABanner } from "@/components/interactive/CTABanner";
import { FeatureShowcase } from "@/components/interactive/FeatureShowcase";
import { B2bArrangementCards } from "@/components/interactive/B2bArrangementCards";
import { ContactChannels } from "@/components/interactive/ContactChannels";
import { LoyaltyFlow } from "@/components/interactive/LoyaltyFlow";
import { PriorityMatrix } from "@/components/interactive/PriorityMatrix";
import { FadeIn } from "@/components/ui/FadeIn";

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
    </>
  );
}

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
    <>
      <ChecklistCard
        title="Concrete uitvoering"
        items={[
          { label: "Flyer ontworpen", done: true, detail: "Met arrangementen, prijzen en QR-code voor vakantieparken" },
          { label: "Drie toeristische arrangementen uitgewerkt", done: true, detail: "Verkenner, Genieter en Verwenner — klaar voor website" },
          { label: "Conceptmail aan parkmanagers opgesteld", done: true, detail: "Voor Parc Maasresidence Thorn, EuroParcs en Boschmolenplas" },
        ]}
      />

      {/* ── Uitvoering 1: De flyer ── */}
      <FadeIn>
        <div className="my-12 border-l-4 border-seizoen pl-6">
          <h4 className="font-heading text-2xl text-cascade-navy mb-2">De flyer voor vakantieparken</h4>
          <p className="text-text-secondary text-sm">Ontworpen voor bij de receptie — met arrangementen, prijzen en QR-code</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="my-8 flex justify-center">
          <Image
            src="/images/flyer-vakantieparken.png"
            alt="Flyer vakantieparken met drie arrangementen"
            width={500}
            height={707}
            className="rounded-xl border border-border shadow-sm"
          />
        </div>
      </FadeIn>

      {/* ── Uitvoering 2: De arrangementen ── */}
      <FadeIn>
        <div className="my-12 border-l-4 border-cascade-gold pl-6">
          <h4 className="font-heading text-2xl text-cascade-navy mb-2">De drie toeristische arrangementen</h4>
          <p className="text-text-secondary text-sm">Uitgewerkt met naam, omschrijving en inhoud — klaar om in te zetten</p>
        </div>
      </FadeIn>
      <ArrangementCards
        arrangements={[
          {
            name: "Het Verkenner-arrangement",
            tier: "basis",
            description:
              "Maasparel Tocht met Limburgse vlaai inclusief koffie of thee. Geschikt voor een ochtend of middag.",
            includes: ["Maasparel Tocht", "Limburgse vlaai", "Koffie of thee"],
            image: "/images/arrangement-ontdek.png",
          },
          {
            name: "Het Genieter-arrangement",
            tier: "midden",
            description:
              "Maasparel Tocht met lunchdeal, gericht op gezinnen en stellen.",
            includes: ["Maasparel Tocht", "Uitgebreide lunchdeal"],
            image: "/images/arrangement-genieter.png",
          },
          {
            name: "Het Verwenner-arrangement",
            tier: "premium",
            description:
              "High Tea op het water, het premium arrangement voor speciale momenten.",
            includes: ["Rondvaart", "Volledige High Tea"],
            image: "/images/arrangement-verwenner.png",
          },
        ]}
      />

      {/* ── Uitvoering 2: De conceptmail ── */}
      <FadeIn>
        <div className="my-12 border-l-4 border-varen pl-6">
          <h4 className="font-heading text-2xl text-cascade-navy mb-2">Conceptmail aan parkmanagers</h4>
          <p className="text-text-secondary text-sm">E-mail naar Parc Maasresidence Thorn, EuroParcs Limburg en Villapark Boschmolenplas met samenwerkingsvoorstel</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="my-8 relative w-full rounded-xl overflow-hidden border border-border shadow-sm bg-white" style={{ height: "700px" }}>
          <iframe
            src="/email-parkmanagers.html"
            title="Conceptmail parkmanagers"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      </FadeIn>
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

export function Dv2Ideeen() {
  return (
    <>
      <B2bArrangementCards
        title="Voorgestelde B2B-arrangementen"
        arrangements={[
          {
            name: "Strategie in beweging",
            tagline: "Strategiesessie",
            icon: Briefcase,
            accent: "events",
            audience: "MT, directie",
            priceMin: 100,
            priceMax: 150,
            includes: [
              "Dagdeel vergaderen",
              "Rondvaart",
              "AV en flipover",
              "Energizer",
              "Vergaderarrangement catering incl. lunch",
            ],
          },
          {
            name: "Samen op koers",
            tagline: "Heisessie",
            icon: Users2,
            accent: "gold",
            audience: "Teams, afdelingen",
            priceMin: 125,
            priceMax: 175,
            includes: [
              "Volledige dag vergaderen in 2 ruimtes",
              "Rondvaart",
              "AV, geluid en flipovers",
              "Catering incl. lunch en borrel",
              "Energizer",
              "Professionele facilitator",
            ],
          },
          {
            name: "Waardevolle ontmoetingen",
            tagline: "Relatiedag",
            icon: HeartHandshake,
            accent: "groep",
            audience: "Klantdagen, relaties",
            priceMin: 125,
            priceMax: 175,
            includes: [
              "Middagarrangement catering incl. lunch/diner en borrel",
              "Rondvaart",
              "AV en geluid",
            ],
          },
          {
            name: "After work op het water",
            tagline: "Borrel met medewerkers",
            icon: Sparkles,
            accent: "varen",
            audience: "Medewerkers",
            priceMin: 50,
            priceMax: 75,
            includes: ["Rondvaart met drankjes en hapjes"],
          },
          {
            name: "Innovatie aan boord",
            tagline: "Productpresentatie",
            icon: Lightbulb,
            accent: "seizoen",
            audience: "Lancering, klanten",
            priceMin: 125,
            priceMax: 175,
            includes: [
              "Dagdeel in 2 ruimtes",
              "Rondvaart",
              "Presentatieopstelling",
              "AV en geluid",
              "Cateringarrangement incl. lunch en borrel",
            ],
          },
        ]}
      />

      <ContactChannels
        title="Kanalen voor CRM-opbouw"
        description="Contactgegevens van zakelijke klanten zijn via verschillende kanalen te verzamelen. Een eenvoudig CRM-systeem houdt alles overzichtelijk bij."
        channels={[
          {
            icon: FormInput,
            label: "Contactformulier",
            description: "Leads die via de website binnenkomen worden automatisch in het CRM geregistreerd.",
            cost: "Geen kosten",
          },
          {
            icon: Network,
            label: "LinkedIn",
            description: "Actief zoeken op functies als management assistent en event manager binnen relevante bedrijven.",
            cost: "Tijdsinvestering",
          },
          {
            icon: Megaphone,
            label: "LinkedIn & Google Ads",
            description: "Gerichte campagnes voor zichtbaarheid bij de B2B doelgroep, met directe leadgeneratie.",
            cost: "€ 2.000 – € 5.000 / jaar",
          },
          {
            icon: Globe,
            label: "Locatieplatforms",
            description: "Aanwezigheid op Locaties.nl en inspirerendelocaties.nl levert gekwalificeerde aanvragen.",
            cost: "Abonnement",
          },
          {
            icon: Building2,
            label: "Kamer van Koophandel",
            description: "Bedrijfsadressen en e-mails aankopen voor gerichte acquisitie binnen de regio.",
            cost: "Eenmalige aankoop",
          },
          {
            icon: Mail,
            label: "Nieuwsbrief",
            description: "Periodieke updates over arrangementen en cases houden bestaande relaties warm.",
            cost: "Lage kosten",
          },
        ]}
      />

      <LoyaltyFlow
        title="Van eerste bezoek naar loyale klant"
        steps={[
          {
            icon: Handshake,
            label: "1e bezoek",
            description: "Zakelijk event geboekt en uitgevoerd, contactmomenten in het CRM vastgelegd.",
          },
          {
            icon: ClipboardList,
            label: "Tevredenheidsenquête",
            description: "Kort na het bezoek vragen we feedback en een review of quote.",
            reward: "Review / quote",
          },
          {
            icon: Gift,
            label: "2e boeking",
            description: "Terugkerende klant ontvangt een korting of een upgrade binnen het arrangement.",
            reward: "Korting / upgrade",
          },
          {
            icon: Award,
            label: "3e boeking",
            description: "Bij een derde boeking een extra voordeel — de relatie is nu structureel.",
            reward: "Premium upgrade",
          },
          {
            icon: UserPlus,
            label: "Referentie",
            description: "Klanten die Cascade aanbevelen bij andere organisaties worden beloond.",
            reward: "Cadeau / korting",
          },
        ]}
      />
    </>
  );
}

export function Dv2Afweging() {
  return (
    <PriorityMatrix
      title="Prioritering van acties"
      description="Klik op een actie om de afweging, impact en het advies te zien. Filter op prioriteit om direct te focussen op de belangrijkste stappen."
      items={[
        {
          title: "Marketingplan B2B ontwikkelen",
          consideration:
            "Een marketingplan is cruciaal voor het slagen op de zakelijke markt en vormt de basis voor alle stappen die genomen moeten worden.",
          impact: "Alleen tijd. De basis staat al in dit verslag.",
          advice: "Marketingplan opgesteld voor het benaderen van de B2B markt (zie bijlage).",
          priority: "hoog",
        },
        {
          title: "Website aanpassen voor B2B",
          consideration:
            "Een goede website waar zakelijke klanten makkelijk vinden wat ze zoeken is heel belangrijk voor succes.",
          impact:
            "Interne marketing medewerker kan aanpassen. Professionele fotograaf eenmalig geschat op € 1.500.",
          advice: "Hoge prioriteit — direct doorvoeren.",
          priority: "hoog",
        },
        {
          title: "SEO & GEO optimalisatie",
          consideration:
            "Goede SEO en GEO zorgen voor goede vindbaarheid. Als je de website aanpast op B2B, moet deze ook vindbaar zijn.",
          impact:
            "Eenmalig professionals inhuren + marketing medewerker instrueren. Kosten € 1.500 – € 2.000.",
          advice: "Medium prioriteit — kan later ingezet worden.",
          priority: "medium",
        },
        {
          title: "Kennismakingsmiddag secretaresses",
          consideration:
            "Niets werkt zo goed als een persoonlijke kennismaking met de vloot. Vergroot vertrouwen en verlaagt de boekingsdrempel.",
          impact:
            "Alleen catering en personeelskosten + 30 uur voorbereiding.",
          advice: "Medium prioriteit — uitnodiging en programma zijn al uitgewerkt (zie bijlage).",
          priority: "medium",
        },
        {
          title: "B2B-arrangementen opstellen",
          consideration:
            "Zakelijke klanten hebben andere behoeften dan toeristen. Heldere arrangementen verlagen de drempel en versnellen de beslissing.",
          impact: "Alleen tijdsinvestering — uitwerken in de procedures van de vloot.",
          advice: "Hoge prioriteit — 5 arrangementen voorgesteld in dit plan.",
          priority: "hoog",
        },
        {
          title: "Persoonlijke benadering & CRM",
          consideration:
            "B2B-klanten hechten waarde aan persoonlijk contact en een vast aanspreekpunt.",
          impact:
            "Tijdsinvestering sales & marketing. Lage CRM-kosten. Campagnes: € 2.000 – € 5.000 per jaar.",
          advice:
            "Hoge prioriteit — goede persoonlijke benadering leidt tot meer klanten en herhaalbezoeken.",
          priority: "hoog",
        },
        {
          title: "Herhaalbezoek & loyaliteit",
          consideration:
            "Terugkerende klanten leveren hogere omzet en lagere acquisitiekosten op.",
          impact: "Beperkte kosten voor incentives + tijdsinvestering in relatiebeheer.",
          advice: "Lage prioriteit — kan als een van de laatste acties opgepakt worden.",
          priority: "laag",
        },
        {
          title: "Samenwerking event- en congresbureaus",
          consideration:
            "Samenwerking met evenementen- en congresbureaus vergroot het bereik en zorgt voor nieuwe klanten.",
          impact:
            "Vooral tijd — opbouwen kost tijd. Eventueel lage kosten voor marketingmateriaal.",
          advice:
            "Medium prioriteit — lijst en introductie-e-mail al opgesteld.",
          priority: "medium",
        },
        {
          title: "LinkedIn actief inzetten",
          consideration:
            "LinkedIn is een belangrijk communicatiekanaal voor zakelijke klanten.",
          impact:
            "Tijdsinvestering marketing. Op langere termijn mogelijk kosten voor advertentiecampagne.",
          advice: "Medium prioriteit — ondersteunend aan de website.",
          priority: "medium",
        },
        {
          title: "Extra diensten aanbieden",
          consideration:
            "Extra diensten zoals sprekers of teamactiviteiten verhogen de waarde per boeking.",
          impact: "Inkoopkosten die je doorverkoopt — geen investering nodig.",
          advice: "Lage prioriteit — kans om omzet te vergroten als de rest op orde is.",
          priority: "laag",
        },
      ]}
    />
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
          title: "Bring a Buddy programma",
          description:
            "Medewerkers verdienen tot €500 door vrienden aan te dragen. Bonus in 3 stappen: €25 na contract, €25 na 8 diensten, €50 na 6 maanden. Max 5 buddy's per medewerker.",
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
      {/* ── Uitvoering 1: De vacaturewebsite ── */}
      <FadeIn>
        <div className="my-12 border-l-4 border-cascade-gold pl-6">
          <h4 className="font-heading text-2xl text-cascade-navy mb-2">Uitvoering 1: Vacaturewebsite</h4>
          <p className="text-text-secondary text-sm">werkenbijcascade.nl — volledig zelf gebouwd</p>
        </div>
      </FadeIn>

      <FeatureShowcase
        title="Publieke pagina's"
        features={[
          { icon: List, title: "Vacaturelijst", description: "Alle functies per categorie: bediening/bar, keuken, afwas, kapitein, matroos" },
          { icon: FormInput, title: "Sollicitatieformulier", description: "Gegevens, functievoorkeur, ervaring, talen en beschikbaarheid" },
          { icon: BookOpen, title: "Jouw Bijbaan", description: "Informatie over werken bij Cascade, sfeer en het team" },
          { icon: GraduationCap, title: "BBL-opleidingen", description: "Speciaal voor horeca-studenten die een leerplek zoeken" },
          { icon: DollarSign, title: "Loontabellen", description: "Per leeftijd en functie — transparant wat je verdient" },
          { icon: Users2, title: "Over Ons", description: "De sfeer en het team van Rederij Cascade" },
        ]}
      />

      <FeatureShowcase
        title="Admin dashboard"
        features={[
          { icon: LayoutDashboard, title: "Sollicitatiebeheer", description: "Binnengekomen sollicitaties inzien, beheren en opvolgen" },
          { icon: Settings, title: "Vacature-editor", description: "Vacatures aanmaken, bewerken en aan/uit zetten" },
          { icon: FileText, title: "CMS", description: "Paginateksten, loontabellen en beschikbaarheidsrichtlijnen aanpassen" },
        ]}
      />

      <FadeIn>
        <div className="my-12">
          <h4 className="font-heading text-xl text-cascade-navy mb-4">Video: uitleg werkenbijcascade.nl</h4>
          <div className="relative w-full rounded-xl overflow-hidden border border-border shadow-sm" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/ppn2YueK2ww"
              title="Uitleg werkenbijcascade.nl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="my-12 border-l-4 border-seizoen pl-6">
          <h4 className="font-heading text-2xl text-cascade-navy mb-2">Beschikbaarheidsrichtlijnen</h4>
          <p className="text-text-secondary text-sm">Overzichtelijke PDF met verwachtingen per seizoen — richtlijnen, geen harde eisen</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="my-8 flex justify-center">
          <Image
            src="/images/beschikbaarheidsrichtlijnen.png"
            alt="Beschikbaarheidsrichtlijnen 2026"
            width={500}
            height={707}
            className="rounded-xl border border-border shadow-sm"
          />
        </div>
      </FadeIn>

      <CTABanner
        title="Bekijk de vacaturewebsite"
        description="Op werkenbijcascade.nl vindt u alle vacatures, het sollicitatieformulier, de loontabellen en de informatiepagina's."
        buttonText="Bezoek werkenbijcascade.nl"
        href="https://werkenbijcascade.nl"
        variant="gold"
      />

      {/* ── Uitvoering 2: Bring a Buddy ── */}
      <FadeIn>
        <div className="my-12 border-l-4 border-varen pl-6">
          <h4 className="font-heading text-2xl text-cascade-navy mb-2">Uitvoering 2: Bring a Buddy programma</h4>
          <p className="text-text-secondary text-sm">Doorverwijzingsprogramma met landingspagina, e-mail en tracking</p>
        </div>
      </FadeIn>

      <ProcessTimeline
        title="Bonusstructuur"
        steps={[
          {
            title: "€25 — Contract getekend + proefdag geslaagd",
            description: "De buddy heeft het contract ondertekend en is geslaagd voor de proefdag.",
          },
          {
            title: "€25 — 8 diensten in eerste 2 maanden",
            description: "De buddy heeft minimaal 8 diensten gedraaid in de eerste twee maanden.",
          },
          {
            title: "€50 — 6 maanden in dienst + beschikbaarheid",
            description: "De buddy is na zes maanden nog in dienst en voldoet aan de beschikbaarheidseisen.",
          },
        ]}
      />

      <KeyFigureRow
        figures={[
          { value: 100, prefix: "€", format: "number", label: "Per buddy", description: "€25 + €25 + €50 in drie stappen" },
          { value: 5, format: "number", label: "Max buddy's", description: "Per medewerker maximaal 5" },
          { value: 500, prefix: "€", format: "number", label: "Max bonus", description: "Totaal te verdienen per medewerker" },
        ]}
      />

      <FeatureShowcase
        title="Wat we hebben gebouwd"
        features={[
          { icon: Globe, title: "Landingspagina", description: "werkenbijcascade.nl/bring-a-buddy met uitleg, voorwaarden en deelmogelijkheden" },
          { icon: Mail, title: "HTML e-mailtemplate", description: "Responsive e-mail met dark mode support voor communicatie naar alle medewerkers" },
          { icon: Send, title: "WhatsApp deellink", description: "Persoonlijke link direct delen via WhatsApp" },
          { icon: UserPlus, title: "Doorverwijzing tracking", description: "Sollicitatieformulier registreert automatisch de doorverwijzer" },
        ]}
      />

      <FadeIn>
        <div className="my-12">
          <h4 className="font-heading text-xl text-cascade-navy mb-4">De HTML e-mail die we hebben ontworpen</h4>
          <p className="text-text-secondary text-sm mb-4">Deze responsive e-mail met dark mode support wordt naar alle medewerkers gestuurd om het Bring a Buddy programma te introduceren.</p>
          <div className="relative w-full rounded-xl overflow-hidden border border-border shadow-sm bg-white" style={{ height: "600px" }}>
            <iframe
              src="/bring-a-buddy-email.html"
              title="Bring a Buddy e-mailtemplate"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </FadeIn>

      <CTABanner
        title="Bekijk de Bring a Buddy landingspagina"
        description="Het programma heeft een eigen pagina met uitleg, voorwaarden en deelmogelijkheden via WhatsApp en een persoonlijke link."
        buttonText="Bekijk de landingspagina"
        href="https://werkenbijcascade.nl/bring-a-buddy"
        variant="green"
      />
    </>
  );
}

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
