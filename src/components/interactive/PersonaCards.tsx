"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { type LucideIcon } from "lucide-react";

interface Persona {
  icon: LucideIcon;
  title: string;
  description: string;
  behavior: string;
  needs: string[];
}

interface PersonaCardsProps {
  title?: string;
  personas: Persona[];
}

export function PersonaCards({ title, personas }: PersonaCardsProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personas.map((persona, i) => {
          const Icon = persona.icon;
          return (
            <FadeIn key={persona.title} delay={i * 0.1}>
              <div className="bg-white rounded-xl border border-border p-5 h-full card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-events-bg text-cascade-navy flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <h5 className="font-heading text-base font-semibold text-cascade-navy">{persona.title}</h5>
                </div>
                <p className="text-sm text-text-secondary mb-3">{persona.description}</p>
                <div className="text-xs text-text-muted mb-2 italic">{persona.behavior}</div>
                <ul className="space-y-1">
                  {persona.needs.map((need) => (
                    <li key={need} className="text-xs text-text-secondary flex items-start gap-1.5">
                      <span className="text-cascade-gold mt-0.5 shrink-0">&#x2022;</span>{need}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
