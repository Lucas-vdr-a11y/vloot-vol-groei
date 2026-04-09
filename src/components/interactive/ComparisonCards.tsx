"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface ComparisonItem {
  name: string;
  description: string;
  strengths?: string[];
  weaknesses?: string[];
  highlight?: boolean;
}

interface ComparisonCardsProps {
  title?: string;
  items: ComparisonItem[];
}

export function ComparisonCards({ title, items }: ComparisonCardsProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-navy-900 mb-6">{title}</h4></FadeIn>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <FadeIn key={item.name} delay={i * 0.1}>
            <div className={`rounded-xl p-6 border h-full ${
              item.highlight
                ? "bg-water-100/50 border-water-300 ring-2 ring-water-200"
                : "bg-white border-navy-200"
            }`}>
              <h5 className="font-heading text-lg font-semibold text-navy-900 mb-2">{item.name}</h5>
              <p className="text-navy-600 text-sm mb-4">{item.description}</p>
              {item.strengths && item.strengths.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Sterktes</span>
                  <ul className="mt-1 space-y-1">
                    {item.strengths.map((s) => (
                      <li key={s} className="text-sm text-navy-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">+</span>{s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {item.weaknesses && item.weaknesses.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Zwaktes</span>
                  <ul className="mt-1 space-y-1">
                    {item.weaknesses.map((w) => (
                      <li key={w} className="text-sm text-navy-600 flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">-</span>{w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
