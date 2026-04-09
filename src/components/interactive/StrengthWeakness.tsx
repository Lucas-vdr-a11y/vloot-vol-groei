"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Check, AlertTriangle } from "lucide-react";

interface StrengthWeaknessProps {
  title?: string;
  strengths: string[];
  weaknesses: string[];
}

export function StrengthWeakness({ title, strengths, weaknesses }: StrengthWeaknessProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FadeIn delay={0}>
          <div className="bg-varen-bg/40 rounded-xl border border-varen/20 p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Check size={18} className="text-varen" />
              <h5 className="font-heading text-lg font-semibold text-varen">Sterktes</h5>
            </div>
            <ul className="space-y-2">
              {strengths.map((s) => (
                <li key={s} className="text-sm text-cascade-navy flex items-start gap-2">
                  <span className="text-varen mt-0.5 shrink-0">+</span>{s}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="bg-red-50 rounded-xl border border-red-200/50 p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-red-500" />
              <h5 className="font-heading text-lg font-semibold text-red-700">Verbeterpunten</h5>
            </div>
            <ul className="space-y-2">
              {weaknesses.map((w) => (
                <li key={w} className="text-sm text-cascade-navy flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">-</span>{w}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
