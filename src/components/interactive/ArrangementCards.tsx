"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

interface Arrangement {
  name: string;
  tier: "basis" | "midden" | "premium";
  description: string;
  includes: string[];
  image?: string;
}

const tierStyles = {
  basis: { border: "border-varen", badge: "bg-varen-bg text-varen", icon: "text-varen" },
  midden: { border: "border-events-mid", badge: "bg-events-bg text-events", icon: "text-events" },
  premium: { border: "border-cascade-gold", badge: "bg-groep-bg text-groep", icon: "text-cascade-gold" },
};

export function ArrangementCards({ arrangements }: { arrangements: Arrangement[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {arrangements.map((arr, i) => {
        const styles = tierStyles[arr.tier];
        return (
          <FadeIn key={arr.name} delay={i * 0.15}>
            <div className={`rounded-xl border-2 ${styles.border} overflow-hidden h-full bg-white relative card-hover`}>
              {arr.image && (
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={arr.image}
                    alt={arr.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.badge} mb-4`}>
                  {arr.tier === "basis" ? "Instap" : arr.tier === "midden" ? "Populair" : "Premium"}
                </span>
                <h5 className="font-heading text-xl font-semibold text-cascade-navy mb-2">{arr.name}</h5>
                <p className="text-text-secondary text-sm mb-4">{arr.description}</p>
                <ul className="space-y-2">
                  {arr.includes.map((item) => (
                    <li key={item} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className={styles.icon}>&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
