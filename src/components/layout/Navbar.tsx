"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-40 bg-navy-900/95 backdrop-blur-md border-b border-navy-800">
      <div className="container-wide flex items-center justify-between h-14">
        <Link href="/" className="font-heading text-white text-lg">
          De Vloot Vol Groei
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive ? "bg-water-500/20 text-water-400" : "text-navy-300 hover:text-white hover:bg-navy-800"
                }`}
              >{link.label}</Link>
            );
          })}
        </div>
        <button className="md:hidden text-navy-300 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-navy-800 px-4 pb-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm ${isActive ? "text-water-400" : "text-navy-300"}`}
              >{link.label}</Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
