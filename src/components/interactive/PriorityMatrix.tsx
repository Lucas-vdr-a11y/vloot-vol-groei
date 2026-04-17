"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";

export type Priority = "hoog" | "medium" | "laag";

export interface PriorityItem {
  title: string;
  consideration: string;
  impact: string;
  advice: string;
  priority: Priority;
}

const priorityConfig: Record<Priority, { label: string; dot: string; bg: string; ring: string; text: string }> = {
  hoog: {
    label: "Hoge prioriteit",
    dot: "bg-varen",
    bg: "bg-varen-bg",
    ring: "ring-varen",
    text: "text-varen",
  },
  medium: {
    label: "Medium prioriteit",
    dot: "bg-cascade-gold",
    bg: "bg-groep-bg",
    ring: "ring-cascade-gold",
    text: "text-cascade-gold-dark",
  },
  laag: {
    label: "Lage prioriteit",
    dot: "bg-events-mid",
    bg: "bg-events-bg",
    ring: "ring-events-mid",
    text: "text-events",
  },
};

const filterOrder: (Priority | "all")[] = ["all", "hoog", "medium", "laag"];

export function PriorityMatrix({
  title,
  description,
  items,
}: {
  title?: string;
  description?: string;
  items: PriorityItem[];
}) {
  const [filter, setFilter] = useState<Priority | "all">("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const counts = useMemo(() => {
    const c = { hoog: 0, medium: 0, laag: 0 };
    items.forEach((item) => {
      c[item.priority] += 1;
    });
    return c;
  }, [items]);

  const filtered = items
    .map((item, originalIdx) => ({ ...item, originalIdx }))
    .filter((item) => filter === "all" || item.priority === filter);

  const priorityRank: Record<Priority, number> = { hoog: 0, medium: 1, laag: 2 };
  const sorted = [...filtered].sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]);

  return (
    <div className="my-12">
      {(title || description) && (
        <FadeIn>
          <div className="mb-6">
            {title && <h4 className="font-heading text-2xl text-cascade-navy mb-2">{title}</h4>}
            {description && <p className="text-text-secondary text-sm max-w-2xl">{description}</p>}
          </div>
        </FadeIn>
      )}

      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-6">
          {filterOrder.map((f) => {
            const active = f === filter;
            const label =
              f === "all"
                ? `Alles (${items.length})`
                : `${priorityConfig[f].label} (${counts[f]})`;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                  active
                    ? "bg-cascade-navy text-white shadow-sm"
                    : "bg-white border border-border text-text-secondary hover:border-cascade-navy/50 hover:text-cascade-navy"
                }`}
              >
                {f !== "all" && (
                  <span
                    className={`inline-block w-2 h-2 rounded-full mr-2 ${priorityConfig[f].dot}`}
                  />
                )}
                {label}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {sorted.map((item, i) => {
            const cfg = priorityConfig[item.priority];
            const isOpen = openIdx === item.originalIdx;

            return (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : item.originalIdx)}
                  aria-expanded={isOpen}
                  className={`w-full text-left bg-white rounded-xl border border-border p-5 transition-all card-hover ${
                    isOpen ? `ring-2 ring-offset-1 ${cfg.ring}/50` : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full ${cfg.bg} flex items-center justify-center`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h5 className="font-heading text-base md:text-lg font-semibold text-cascade-navy leading-tight">
                          {item.title}
                        </h5>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${cfg.bg} ${cfg.text}`}
                        >
                          {cfg.label}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary line-clamp-2">
                        {item.consideration}
                      </p>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-text-muted"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                              Afweging
                            </div>
                            <p className="text-text-secondary leading-relaxed">
                              {item.consideration}
                            </p>
                          </div>
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                              Impact in tijd of geld
                            </div>
                            <p className="text-text-secondary leading-relaxed">{item.impact}</p>
                          </div>
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                              Status / advies
                            </div>
                            <p className="text-text-secondary leading-relaxed">{item.advice}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {sorted.length === 0 && (
          <div className="text-center text-text-muted py-12 text-sm">
            Geen items gevonden voor dit filter.
          </div>
        )}
      </div>
    </div>
  );
}
