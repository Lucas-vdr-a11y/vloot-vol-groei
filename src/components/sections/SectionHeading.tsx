import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  id: string;
  badge?: string;
  badgeVariant?: "navy" | "gold" | "green" | "teal";
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, badge, badgeVariant = "navy", title, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-10">
      <FadeIn>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        <h2 className="font-heading text-3xl md:text-4xl text-cascade-navy mt-3 text-balance">{title}</h2>
        {subtitle && <p className="text-text-secondary text-lg mt-3 max-w-2xl">{subtitle}</p>}
      </FadeIn>
    </div>
  );
}
