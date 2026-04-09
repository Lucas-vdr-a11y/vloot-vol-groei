"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface Platform {
  name: string;
  status: "actief" | "beperkt" | "ontbreekt";
  detail?: string;
}

interface PlatformGridProps {
  title?: string;
  platforms: Platform[];
}

const statusStyles = {
  actief: { dot: "bg-green-500", bg: "bg-white", text: "text-green-700", label: "Actief" },
  beperkt: { dot: "bg-cascade-gold", bg: "bg-white", text: "text-cascade-gold", label: "Beperkt" },
  ontbreekt: { dot: "bg-red-400", bg: "bg-white", text: "text-red-500", label: "Ontbreekt" },
};

export function PlatformGrid({ title, platforms }: PlatformGridProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {platforms.map((p, i) => {
          const style = statusStyles[p.status];
          return (
            <FadeIn key={p.name} delay={i * 0.05}>
              <div className={`${style.bg} rounded-lg border border-border p-4 card-hover`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                  <span className={`text-xs font-medium ${style.text}`}>{style.label}</span>
                </div>
                <div className="font-heading text-sm font-semibold text-cascade-navy">{p.name}</div>
                {p.detail && <div className="text-xs text-text-muted mt-1">{p.detail}</div>}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
