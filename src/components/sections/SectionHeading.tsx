import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-10">
      <FadeIn>
        {badge && <Badge variant="blue">{badge}</Badge>}
        <h2 className="font-heading text-3xl md:text-4xl text-navy-900 mt-3 text-balance">{title}</h2>
        {subtitle && <p className="text-navy-500 text-lg mt-3 max-w-2xl">{subtitle}</p>}
      </FadeIn>
    </div>
  );
}
