"use client";

import { useActiveSections } from "@/lib/hooks";

interface TocItem { id: string; label: string; }

export function TableOfContents({ items }: { items: TocItem[] }) {
  const activeId = useActiveSections(items.map((i) => i.id));

  return (
    <nav className="hidden lg:block sticky top-20 w-56 shrink-0 self-start">
      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Inhoud</div>
      <ul className="space-y-1 border-l border-border">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a href={`#${item.id}`}
                className={`block pl-4 py-1 text-sm border-l-2 -ml-px transition-all duration-300 ${
                  isActive
                    ? "border-cascade-gold text-cascade-navy font-medium"
                    : "border-transparent text-text-muted hover:text-cascade-navy hover:border-cascade-gold/50"
                }`}
              >{item.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
