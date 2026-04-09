"use client";

import { useActiveSections } from "@/lib/hooks";

interface TocItem { id: string; label: string; }

export function TableOfContents({ items }: { items: TocItem[] }) {
  const activeId = useActiveSections(items.map((i) => i.id));

  return (
    <nav className="hidden lg:block sticky top-20 w-56 shrink-0 self-start">
      <div className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-3">Inhoud</div>
      <ul className="space-y-1 border-l border-navy-200">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a href={`#${item.id}`}
                className={`block pl-4 py-1 text-sm border-l-2 -ml-px transition-colors ${
                  isActive
                    ? "border-water-500 text-water-600 font-medium"
                    : "border-transparent text-navy-500 hover:text-navy-700 hover:border-navy-300"
                }`}
              >{item.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
