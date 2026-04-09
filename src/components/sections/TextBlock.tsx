import { FadeIn } from "@/components/ui/FadeIn";

interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function TextBlock({ children, className = "" }: TextBlockProps) {
  return (
    <FadeIn>
      <div className={`max-w-none text-navy-700 text-lg leading-relaxed ${className}`}>
        {children}
      </div>
    </FadeIn>
  );
}
