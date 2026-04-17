"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface B2bArrangement {
  name: string;
  tagline: string;
  icon: LucideIcon;
  accent: "events" | "groep" | "varen" | "seizoen" | "gold";
  includes: string[];
  audience: string;
  priceMin: number;
  priceMax: number;
}

const accentStyles: Record<B2bArrangement["accent"], { border: string; badge: string; icon: string; fill: string }> = {
  events: {
    border: "border-events-mid",
    badge: "bg-events-bg text-events",
    icon: "text-events",
    fill: "bg-events",
  },
  groep: {
    border: "border-cascade-gold",
    badge: "bg-groep-bg text-groep",
    icon: "text-cascade-gold",
    fill: "bg-cascade-gold",
  },
  varen: {
    border: "border-varen",
    badge: "bg-varen-bg text-varen",
    icon: "text-varen",
    fill: "bg-varen",
  },
  seizoen: {
    border: "border-seizoen-mid",
    badge: "bg-seizoen-bg text-seizoen",
    icon: "text-seizoen",
    fill: "bg-seizoen",
  },
  gold: {
    border: "border-cascade-gold",
    badge: "bg-groep-bg text-cascade-gold-dark",
    icon: "text-cascade-gold",
    fill: "bg-cascade-gold",
  },
};

function PriceRange({ min, max, expanded }: { min: number; max: number; expanded: boolean }) {
  return (
    <div className="flex items-baseline gap-2">
      <motion.span
        className="font-heading text-3xl font-bold text-cascade-navy"
        animate={expanded ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.4 }}
      >
        € {min}
      </motion.span>
      <span className="text-sm text-text-muted">–</span>
      <motion.span
        className="font-heading text-2xl text-text-secondary"
        animate={expanded ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.4, delay: 0.08 }}
      >
        € {max}
      </motion.span>
      <span className="text-xs text-text-muted ml-1">p.p.</span>
    </div>
  );
}

export function B2bArrangementCards({
  title,
  arrangements,
}: {
  title?: string;
  arrangements: B2bArrangement[];
}) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="my-12">
      {title && (
        <FadeIn>
          <h4 className="font-heading text-2xl text-cascade-navy mb-6">{title}</h4>
        </FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {arrangements.map((arr, i) => {
          const styles = accentStyles[arr.accent];
          const isOpen = expanded === i;
          const Icon = arr.icon;

          return (
            <FadeIn key={arr.name} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`group w-full text-left rounded-xl border-2 ${styles.border} bg-white p-6 card-hover transition-all ${
                  isOpen ? "ring-2 ring-offset-2 ring-cascade-gold/40" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-full ${styles.badge} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-5 h-5 ${styles.icon}`} />
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded ${styles.badge}`}
                  >
                    Arrangement
                  </span>
                </div>

                <h5 className="font-heading text-xl font-semibold text-cascade-navy mb-1 leading-tight">
                  {arr.name}
                </h5>
                <p className="text-sm text-text-secondary mb-4 italic">{arr.tagline}</p>

                <div className="flex items-center gap-2 mb-4 text-sm text-text-muted">
                  <Users className="w-4 h-4 shrink-0" />
                  <span>{arr.audience}</span>
                </div>

                <div className="pt-4 border-t border-border">
                  <PriceRange min={arr.priceMin} max={arr.priceMax} expanded={isOpen} />
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-border">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                          Inhoud
                        </p>
                        <ul className="space-y-2">
                          {arr.includes.map((item, j) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.04 }}
                              className="flex items-start gap-2 text-sm text-text-secondary"
                            >
                              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${styles.icon}`} />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 text-xs text-text-muted flex items-center justify-end">
                  <span className="group-hover:text-cascade-gold transition-colors">
                    {isOpen ? "Verbergen −" : "Inhoud tonen +"}
                  </span>
                </div>
              </button>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
