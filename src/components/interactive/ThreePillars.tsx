"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { type LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
}

interface ThreePillarsProps {
  title?: string;
  pillars: Pillar[];
}

export function ThreePillars({ title, pillars }: ThreePillarsProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-8 text-center">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <FadeIn key={pillar.title} delay={i * 0.15}>
              <div className="text-center p-6 rounded-xl bg-white border border-border shadow-sm h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-events-bg text-cascade-navy mb-4">
                  <Icon size={28} />
                </div>
                <h5 className="font-heading text-lg font-semibold text-cascade-navy mb-2">{pillar.title}</h5>
                <p className="text-text-secondary text-sm">{pillar.description}</p>
                {pillar.items && (
                  <ul className="mt-4 text-left space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-cascade-gold mt-1 shrink-0">&#x2022;</span>{item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
