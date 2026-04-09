"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  variant?: "navy" | "gold" | "green";
}

const variantStyles = {
  navy: "bg-cascade-navy",
  gold: "bg-groep",
  green: "bg-varen",
};

export function CTABanner({ title, description, buttonText, href, variant = "navy" }: CTABannerProps) {
  return (
    <FadeIn>
      <div className={`my-12 ${variantStyles[variant]} rounded-2xl p-8 md:p-10 text-white text-center`}>
        <h4 className="font-heading text-2xl md:text-3xl mb-3">{title}</h4>
        <p className="text-warm-100/70 text-sm md:text-base max-w-xl mx-auto mb-6">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-cascade-navy font-semibold rounded-lg hover:bg-cta/80 transition-colors text-sm card-hover"
        >
          {buttonText}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </FadeIn>
  );
}
