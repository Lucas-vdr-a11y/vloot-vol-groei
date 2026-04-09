"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface Arrangement {
  name: string;
  tier: "basis" | "midden" | "premium";
  description: string;
  includes: string[];
}

const tierStyles = {
  basis: { border: "border-navy-200", badge: "bg-navy-100 text-navy-600", icon: "text-navy-400" },
  midden: { border: "border-water-300", badge: "bg-water-100 text-water-600", icon: "text-water-500" },
  premium: { border: "border-gold-400", badge: "bg-gold-300/20 text-gold-600", icon: "text-gold-500" },
};

export function ArrangementCards({ arrangements }: { arrangements: Arrangement[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {arrangements.map((arr, i) => {
        const styles = tierStyles[arr.tier];
        return (
          <FadeIn key={arr.name} delay={i * 0.15}>
            <div className={`rounded-xl border-2 ${styles.border} p-6 h-full bg-white relative`}>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.badge} mb-4`}>
                {arr.tier === "basis" ? "Instap" : arr.tier === "midden" ? "Populair" : "Premium"}
              </span>
              <h5 className="font-heading text-xl font-semibold text-navy-900 mb-2">{arr.name}</h5>
              <p className="text-navy-600 text-sm mb-4">{arr.description}</p>
              <ul className="space-y-2">
                {arr.includes.map((item) => (
                  <li key={item} className="text-sm text-navy-600 flex items-start gap-2">
                    <span className={styles.icon}>&#10003;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
