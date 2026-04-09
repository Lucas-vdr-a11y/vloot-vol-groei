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
    badgeVariant: "green" as const,
    colors: {
      primary: "#586C56",
      secondary: "#889876",
      bg: "#DBE4DA",
    },
  },
  {
    slug: "2",
    number: 2,
    shortTitle: "B2B Markt",
    category: "events",
    badgeVariant: "navy" as const,
    colors: {
      primary: "#092D61",
      secondary: "#49648A",
      bg: "#DAE0E8",
    },
  },
  {
    slug: "3",
    number: 3,
    shortTitle: "Personeel",
    category: "groepsuitjes",
    badgeVariant: "gold" as const,
    colors: {
      primary: "#8E7649",
      secondary: "#9A8F79",
      bg: "#E8E1D6",
    },
  },
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
];
