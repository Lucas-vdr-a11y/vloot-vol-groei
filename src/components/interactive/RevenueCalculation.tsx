"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";
import { AnimatedCounter } from "./AnimatedCounter";

interface CalculationStep {
  label: string;
  value: number;
  format?: "number" | "currency";
  prefix?: string;
  suffix?: string;
}

interface RevenueCalculationProps {
  title: string;
  steps: CalculationStep[];
  result: { label: string; value: number };
  description?: string;
}

export function RevenueCalculation({ title, steps, result, description }: RevenueCalculationProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="my-12 bg-gradient-to-br from-cascade-navy to-events-mid rounded-2xl p-8 md:p-10 text-white">
      <h4 className="font-heading text-xl md:text-2xl mb-6">{title}</h4>
      <div className="flex flex-wrap items-center justify-center gap-3 text-2xl md:text-3xl font-number">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.3, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {i > 0 && <span className="text-events-mid">&times;</span>}
            <div className="text-center">
              <div className="text-warm-100">
                <AnimatedCounter target={step.value} prefix={step.prefix} suffix={step.suffix} format={step.format} duration={1500} />
              </div>
              <div className="text-xs text-warm-100/70 mt-1">{step.label}</div>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: steps.length * 0.3, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="text-events-mid">=</span>
          <div className="text-center">
            <div className="text-cascade-gold text-3xl md:text-4xl font-bold">
              <AnimatedCounter target={result.value} format="currency" duration={2000} />
            </div>
            <div className="text-xs text-warm-100/70 mt-1">{result.label}</div>
          </div>
        </motion.div>
      </div>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: (steps.length + 1) * 0.3 }}
          className="text-warm-100/70 text-sm mt-6 text-center max-w-xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
