"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10"
          style={{
            background: "radial-gradient(ellipse at 30% 100%, #3B82F6 0%, transparent 70%), radial-gradient(ellipse at 70% 100%, #60A5FA 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-water-500/20 text-water-400 text-sm font-medium border border-water-500/30 mb-8">
            Profielwerkstuk 2026
          </span>
        </motion.div>
        <motion.h1 className="font-heading text-5xl md:text-7xl text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
          De Vloot Vol Groei
        </motion.h1>
        <motion.p className="text-navy-300 text-lg md:text-xl mb-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
          Onderzoek naar doelgroepbereik en merkversterking bij Rederij Cascade
        </motion.p>
        <motion.p className="text-navy-400 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
          Daan Bocken &amp; Lucas van de Runstraat
        </motion.p>
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 rounded-full border-2 border-navy-500 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-navy-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
