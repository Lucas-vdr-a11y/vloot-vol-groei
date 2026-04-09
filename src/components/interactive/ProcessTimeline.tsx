"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface TimelineStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title?: string;
  steps: TimelineStep[];
}

export function ProcessTimeline({ title, steps }: ProcessTimelineProps) {
  return (
    <div className="my-12">
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-8">{title}</h4></FadeIn>
      )}
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-8">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="flex gap-6 items-start">
                <div className="relative z-10 w-8 h-8 shrink-0 rounded-full bg-cascade-navy text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className="pb-2">
                  <h5 className="font-heading text-lg font-semibold text-cascade-navy">{step.title}</h5>
                  <p className="text-text-secondary text-sm mt-1">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
