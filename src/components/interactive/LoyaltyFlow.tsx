"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface LoyaltyStep {
  icon: LucideIcon;
  label: string;
  description: string;
  reward?: string;
}

export function LoyaltyFlow({ title, steps }: { title?: string; steps: LoyaltyStep[] }) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn>
          <h4 className="font-heading text-2xl text-cascade-navy mb-6">{title}</h4>
        </FadeIn>
      )}

      <div className="relative bg-gradient-to-br from-warm-50 to-events-bg/30 rounded-2xl border border-border-dark p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 items-stretch">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <div key={step.label} className="contents">
                <FadeIn delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center bg-white rounded-xl border border-border p-5 h-full card-hover">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-cascade-gold/10 flex items-center justify-center mb-3 border-2 border-cascade-gold"
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-5 h-5 text-cascade-gold" />
                    </motion.div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-cascade-gold mb-1">
                      Stap {i + 1}
                    </div>
                    <h5 className="font-heading text-sm font-semibold text-cascade-navy mb-2 leading-tight">
                      {step.label}
                    </h5>
                    <p className="text-xs text-text-secondary leading-relaxed">{step.description}</p>
                    {step.reward && (
                      <div className="mt-3 pt-3 border-t border-border w-full">
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                          Beloning
                        </div>
                        <div className="text-xs font-semibold text-cascade-navy">{step.reward}</div>
                      </div>
                    )}
                  </div>
                </FadeIn>

                {!isLast && (
                  <div className="hidden md:flex items-center justify-center text-cascade-gold/60">
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
