"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "./AnimatedCounter";

interface KeyFigure {
  value: number;
  prefix?: string;
  suffix?: string;
  format?: "number" | "currency";
  label: string;
  description?: string;
}

interface KeyFigureRowProps {
  figures: KeyFigure[];
}

export function KeyFigureRow({ figures }: KeyFigureRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {figures.map((figure, i) => (
        <FadeIn key={figure.label} delay={i * 0.15}>
          <div className="bg-white rounded-xl p-6 border border-border shadow-sm text-center card-hover">
            <div className="text-3xl md:text-4xl font-bold text-cascade-gold mb-2">
              <AnimatedCounter
                target={figure.value}
                prefix={figure.prefix}
                suffix={figure.suffix}
                format={figure.format}
              />
            </div>
            <div className="font-heading text-cascade-navy font-semibold">{figure.label}</div>
            {figure.description && (
              <div className="text-sm text-text-muted mt-1">{figure.description}</div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
