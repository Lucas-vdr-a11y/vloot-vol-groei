"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureShowcaseProps {
  title?: string;
  features: Feature[];
}

export function FeatureShowcase({ title, features }: FeatureShowcaseProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="bg-white rounded-xl border border-border p-5 card-hover h-full">
                <div className="w-9 h-9 rounded-lg bg-groep-bg text-groep flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h5 className="font-heading text-sm font-semibold text-cascade-navy mb-1">{f.title}</h5>
                <p className="text-xs text-text-muted">{f.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
