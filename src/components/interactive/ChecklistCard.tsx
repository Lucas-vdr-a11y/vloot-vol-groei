"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Check, X } from "lucide-react";

interface ChecklistItem {
  label: string;
  done: boolean;
  detail?: string;
}

interface ChecklistCardProps {
  title?: string;
  items: ChecklistItem[];
}

export function ChecklistCard({ title, items }: ChecklistCardProps) {
  const doneCount = items.filter((i) => i.done).length;

  return (
    <div className="my-12 bg-white rounded-xl border border-border p-6 md:p-8">
      {title && (
        <FadeIn>
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-heading text-xl text-cascade-navy">{title}</h4>
            <span className="text-sm font-number text-text-muted">
              {doneCount}/{items.length}
            </span>
          </div>
        </FadeIn>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.05}>
            <div className={`flex items-start gap-3 p-3 rounded-lg ${item.done ? "bg-varen-bg/50" : "bg-red-50"}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                item.done ? "bg-varen text-white" : "bg-red-400 text-white"
              }`}>
                {item.done ? <Check size={12} /> : <X size={12} />}
              </div>
              <div>
                <div className={`text-sm font-medium ${item.done ? "text-cascade-navy" : "text-red-700"}`}>
                  {item.label}
                </div>
                {item.detail && <div className="text-xs text-text-muted mt-0.5">{item.detail}</div>}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
