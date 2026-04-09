import { FadeIn } from "@/components/ui/FadeIn";

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <FadeIn>
      <blockquote className="my-12 pl-6 border-l-4 border-water-500 bg-water-100/30 py-6 pr-6 rounded-r-lg">
        <p className="font-heading text-xl md:text-2xl text-navy-800 italic leading-relaxed">{children}</p>
        {attribution && <footer className="mt-3 text-sm text-navy-500">{attribution}</footer>}
      </blockquote>
    </FadeIn>
  );
}
