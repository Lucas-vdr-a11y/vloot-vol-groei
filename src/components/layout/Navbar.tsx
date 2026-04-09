"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/deelvraag/1", label: "Verblijfsrecreanten" },
  { href: "/deelvraag/2", label: "B2B Markt" },
  { href: "/deelvraag/3", label: "Personeel" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cascade-navy/95 backdrop-blur-md border-b border-cascade-navy">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/cascade-icon.svg" alt="Cascade" width={32} height={32} />
          <span className="font-heading text-white text-lg hidden sm:inline">De Vloot Vol Groei</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive ? "bg-cascade-gold/20 text-cascade-gold" : "text-warm-100/70 hover:text-white hover:bg-white/5"
                }`}
              >{link.label}</Link>
            );
          })}
        </div>
        <button className="md:hidden text-warm-100/70 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cascade-navy border-t border-events-mid/30 px-4 pb-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm ${isActive ? "text-cascade-gold" : "text-warm-100/70"}`}
              >{link.label}</Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
