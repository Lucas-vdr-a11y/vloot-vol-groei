"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

interface SeasonalBar {
  label: string;
  percentage: number;
  color: string;
  sublabel?: string;
}

interface SeasonalChartProps {
  title?: string;
  bars: SeasonalBar[];
  description?: string;
}

export function SeasonalChart({ title, bars, description }: SeasonalChartProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="my-12 bg-white rounded-xl border border-border p-6 md:p-8">
      {title && <h4 className="font-heading text-xl text-cascade-navy mb-6">{title}</h4>}
      <div className="flex items-end gap-3 h-48">
        {bars.map((bar, i) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <motion.div
              className="w-full rounded-t-md relative"
              style={{ backgroundColor: bar.color }}
              initial={{ height: 0 }}
              animate={isInView ? { height: `${bar.percentage}%` } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-number font-semibold text-cascade-navy whitespace-nowrap">
                {bar.percentage}%
              </span>
            </motion.div>
            <div className="text-center">
              <div className="text-xs font-semibold text-cascade-navy">{bar.label}</div>
              {bar.sublabel && <div className="text-[10px] text-text-muted">{bar.sublabel}</div>}
            </div>
          </div>
        ))}
      </div>
      {description && <p className="text-sm text-text-muted mt-4 text-center">{description}</p>}
    </div>
  );
}
