"use client";

import { motion } from "framer-motion";

interface DeelvraagHeroProps { number: number; title: string; subtitle: string; }

export function DeelvraagHero({ number, title, subtitle }: DeelvraagHeroProps) {
  return (
    <section className="relative bg-navy-900 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
      <div className="relative z-10 container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-3 py-1 rounded-full bg-water-500/20 text-water-400 text-sm font-medium border border-water-500/30 mb-6">
            Deelvraag {number}
          </span>
        </motion.div>
        <motion.h1 className="font-heading text-3xl md:text-5xl text-white mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          {title}
        </motion.h1>
        <motion.p className="text-navy-300 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
