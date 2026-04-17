"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import type { LucideIcon } from "lucide-react";

export interface ContactChannel {
  icon: LucideIcon;
  label: string;
  description: string;
  cost?: string;
}

export function ContactChannels({
  title,
  description,
  channels,
}: {
  title?: string;
  description?: string;
  channels: ContactChannel[];
}) {
  return (
    <div className="my-12">
      {(title || description) && (
        <FadeIn>
          <div className="mb-6">
            {title && <h4 className="font-heading text-2xl text-cascade-navy mb-2">{title}</h4>}
            {description && <p className="text-text-secondary text-sm max-w-2xl">{description}</p>}
          </div>
        </FadeIn>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {channels.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <FadeIn key={channel.label} delay={i * 0.06}>
              <div className="group bg-white rounded-lg border border-border hover:border-events-mid p-5 h-full card-hover">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-events-bg flex items-center justify-center shrink-0 group-hover:bg-events group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-events group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-heading text-base font-semibold text-cascade-navy mb-1">
                      {channel.label}
                    </h5>
                    <p className="text-xs text-text-secondary leading-relaxed">{channel.description}</p>
                    {channel.cost && (
                      <p className="mt-2 text-[11px] text-text-muted uppercase tracking-wider font-semibold">
                        {channel.cost}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
