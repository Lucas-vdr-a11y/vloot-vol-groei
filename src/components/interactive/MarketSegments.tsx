"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

interface Segment {
  label: string;
  percentage: number;
  color: string;
  description?: string;
}

interface MarketSegmentsProps {
  title?: string;
  segments: Segment[];
}

export function MarketSegments({ title, segments }: MarketSegmentsProps) {
  const { ref, isInView } = useInView();
  const total = segments.reduce((sum, s) => sum + s.percentage, 0);
  let cumulativePercent = 0;

  const paths = segments.map((segment) => {
    const startPercent = cumulativePercent;
    cumulativePercent += segment.percentage;
    const startAngle = (startPercent / total) * 360 - 90;
    const endAngle = (cumulativePercent / total) * 360 - 90;
    const largeArc = segment.percentage / total > 0.5 ? 1 : 0;
    const startX = 50 + 35 * Math.cos((startAngle * Math.PI) / 180);
    const startY = 50 + 35 * Math.sin((startAngle * Math.PI) / 180);
    const endX = 50 + 35 * Math.cos((endAngle * Math.PI) / 180);
    const endY = 50 + 35 * Math.sin((endAngle * Math.PI) / 180);
    return {
      ...segment,
      d: `M 50 50 L ${startX} ${startY} A 35 35 0 ${largeArc} 1 ${endX} ${endY} Z`,
    };
  });

  return (
    <div ref={ref} className="my-12">
      {title && <h4 className="font-heading text-xl text-navy-900 mb-6 text-center">{title}</h4>}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {paths.map((path, i) => (
              <motion.path
                key={path.label}
                d={path.d}
                fill={path.color}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                style={{ transformOrigin: "50px 50px" }}
              />
            ))}
            <circle cx="50" cy="50" r="20" className="fill-warm-50" />
          </svg>
        </div>
        <div className="space-y-3 flex-1">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.label}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="w-4 h-4 rounded-sm shrink-0 mt-0.5" style={{ backgroundColor: segment.color }} />
              <div>
                <div className="font-semibold text-navy-900">
                  {segment.label} <span className="font-number text-navy-500">({segment.percentage}%)</span>
                </div>
                {segment.description && <div className="text-sm text-navy-500">{segment.description}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
