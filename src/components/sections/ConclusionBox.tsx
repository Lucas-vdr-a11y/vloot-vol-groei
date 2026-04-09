import { FadeIn } from "@/components/ui/FadeIn";

interface ConclusionBoxProps {
  title: string;
  children: React.ReactNode;
}

export function ConclusionBox({ title, children }: ConclusionBoxProps) {
  return (
    <FadeIn>
      <div className="my-16 bg-cascade-navy text-white rounded-2xl p-8 md:p-12">
        <h3 className="font-heading text-2xl md:text-3xl mb-6">{title}</h3>
        <div className="text-warm-100 leading-relaxed space-y-4 text-lg">{children}</div>
      </div>
    </FadeIn>
  );
}
