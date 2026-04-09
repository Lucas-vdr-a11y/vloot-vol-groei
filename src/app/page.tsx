import Link from "next/link";
import { Ship, Briefcase, Users, ArrowRight } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FadeIn } from "@/components/ui/FadeIn";
import { Divider } from "@/components/ui/Divider";
import { Badge } from "@/components/ui/Badge";
import { inleiding } from "@/content/inleiding";

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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />

        {/* Inleiding section */}
        <section className="bg-warm-50 py-24">
          <div className="container-narrow">
            <FadeIn>
              <Badge variant="navy">Aanleiding</Badge>
              <h2 className="font-heading text-3xl md:text-4xl text-cascade-navy mt-4 mb-10 text-balance">
                {inleiding.title}
              </h2>
            </FadeIn>
            <div className="space-y-6">
              {inleiding.paragraphs.map((paragraph, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <p className="text-text-secondary text-lg leading-relaxed">{paragraph}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Divider variant="dots" />

        {/* Deelvraag cards section */}
        <section className="bg-warm-50 pb-24">
          <div className="container-wide">
            <FadeIn>
              <h2 className="font-heading text-2xl md:text-3xl text-cascade-navy mb-10 text-center">
                De drie deelvragen
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deelvraagCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <FadeIn key={card.slug} delay={i * 0.1}>
                    <Link
                      href={`/deelvraag/${card.slug}`}
                      className="group flex flex-col h-full bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-cascade-gold/50 transition-all duration-300 p-8"
                    >
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: card.bgColor, color: card.color }}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Deelvraag {card.number}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-cascade-navy mb-4">
                        {card.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed flex-1">
                        {card.question}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-cascade-gold text-sm font-medium group-hover:gap-3 transition-all">
                        Lees meer <ArrowRight size={16} />
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
