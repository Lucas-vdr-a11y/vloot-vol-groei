import { FadeIn } from "@/components/ui/FadeIn";

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <FadeIn>
      <blockquote className="my-12 pl-6 border-l-4 border-cascade-gold bg-groep-bg/30 py-6 pr-6 rounded-r-lg">
        <p className="font-heading text-xl md:text-2xl text-cascade-navy italic leading-relaxed">{children}</p>
        {attribution && <footer className="mt-3 text-sm text-text-muted">{attribution}</footer>}
      </blockquote>
    </FadeIn>
  );
}
