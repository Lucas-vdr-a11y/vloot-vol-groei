import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const deelvragen = [
  { slug: "1", title: "Verblijfsrecreanten" },
  { slug: "2", title: "B2B Markt" },
  { slug: "3", title: "Personeel" },
];

export function DeelvraagNav({ currentSlug }: { currentSlug: string }) {
  const currentIndex = deelvragen.findIndex((d) => d.slug === currentSlug);
  const prev = currentIndex > 0 ? deelvragen[currentIndex - 1] : null;
  const next = currentIndex < deelvragen.length - 1 ? deelvragen[currentIndex + 1] : null;

  return (
    <div className="container-wide py-12 flex justify-between gap-4">
      {prev ? (
        <Link href={`/deelvraag/${prev.slug}`} className="flex items-center gap-2 text-text-secondary hover:text-cascade-gold transition-colors">
          <ArrowLeft size={18} />
          <div className="text-left">
            <div className="text-xs text-text-muted">Vorige</div>
            <div className="text-sm font-medium">{prev.title}</div>
          </div>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={`/deelvraag/${next.slug}`} className="flex items-center gap-2 text-text-secondary hover:text-cascade-gold transition-colors text-right">
          <div>
            <div className="text-xs text-text-muted">Volgende</div>
            <div className="text-sm font-medium">{next.title}</div>
          </div>
          <ArrowRight size={18} />
        </Link>
      ) : (
        <Link href="/" className="flex items-center gap-2 text-text-secondary hover:text-cascade-gold transition-colors">
          <div className="text-right">
            <div className="text-xs text-text-muted">Terug naar</div>
            <div className="text-sm font-medium">Overzicht</div>
          </div>
          <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}
