import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-cascade-navy text-warm-100/60 py-16">
      <div className="container-narrow text-center">
        <Image src="/logo/cascade-links.svg" alt="Cascade" width={180} height={40} className="mx-auto mb-4" />
        <p className="text-sm">Onderzoek naar doelgroepbereik en merkversterking</p>
        <div className="mt-6 text-sm">
          <p className="text-warm-100/80">Daan Bocken &amp; Lucas van de Runstraat</p>
          <p className="text-warm-100/40 mt-1">Profielwerkstuk 2026</p>
        </div>
      </div>
    </footer>
  );
}
