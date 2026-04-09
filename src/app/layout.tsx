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
  manifest: "/manifest.json",
  themeColor: "#092D61",
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
