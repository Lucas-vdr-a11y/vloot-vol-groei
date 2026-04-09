"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cascade-navy overflow-hidden">
      {/* Warm gradient background with gold undertone */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cascade-navy via-cascade-navy to-events-mid" />
        {/* Animated wave shapes in brand gold */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10"
          style={{
            background: "radial-gradient(ellipse at 30% 100%, #B49253 0%, transparent 70%), radial-gradient(ellipse at 70% 100%, #A6CBA6 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* SVG wave at bottom */}
        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z" fill="#F9F7F5" fillOpacity="0.08" />
          <path d="M0 80C360 110 720 50 1080 80C1260 95 1380 85 1440 80V120H0V80Z" fill="#F9F7F5" fillOpacity="0.05" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Cascade logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <Image
            src="/logo/cascade-icon.svg"
            alt="Cascade icoon"
            width={100}
            height={100}
            className="mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cascade-gold/20 text-cascade-gold text-sm font-medium border border-cascade-gold/30 mb-8">
            Profielwerkstuk 2026
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          De Vloot Vol Groei
        </motion.h1>

        <motion.p
          className="text-warm-100/80 text-lg md:text-xl mb-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Onderzoek naar doelgroepbereik en merkversterking bij Rederij Cascade
        </motion.p>

        <motion.p
          className="text-warm-100/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Daan Bocken &amp; Lucas van de Runstraat
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-cascade-gold/50 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-cascade-gold/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
