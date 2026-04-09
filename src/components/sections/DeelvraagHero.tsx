"use client";

import { motion } from "framer-motion";

interface DeelvraagHeroProps {
  number: number;
  title: string;
  subtitle: string;
  categoryColor?: string;  // hex color from deelvraagMeta
  categoryBg?: string;     // hex bg color
}

export function DeelvraagHero({ number, title, subtitle, categoryColor = "#092D61", categoryBg }: DeelvraagHeroProps) {
  return (
    <section className="relative bg-cascade-navy pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cascade-navy to-events-mid" />
      {/* Decorative wave */}
      <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
        <path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="#F9F7F5" />
      </svg>
      <div className="relative z-10 container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium border mb-6"
            style={{
              backgroundColor: `${categoryColor}20`,
              color: categoryBg || "#F9F7F5",
              borderColor: `${categoryColor}40`,
            }}
          >
            Deelvraag {number}
          </span>
        </motion.div>
        <motion.h1
          className="font-heading text-3xl md:text-5xl text-white mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-warm-100/70 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
