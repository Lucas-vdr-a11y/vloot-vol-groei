"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";
import { FadeIn } from "@/components/ui/FadeIn";

interface TimelineStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title?: string;
  steps: TimelineStep[];
}

export function ProcessTimeline({ title, steps }: ProcessTimelineProps) {
  const { ref, isInView } = useInView();

  return (
    <div className="my-12" ref={ref}>
      {title && (
        <FadeIn><h4 className="font-heading text-xl text-cascade-navy mb-8">{title}</h4></FadeIn>
      )}
      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          className="absolute left-4 top-0 w-px bg-cascade-gold/40 origin-top"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          style={{ height: "100%" }}
        />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {/* Animated dot */}
              <motion.div
                className="relative z-10 w-8 h-8 shrink-0 rounded-full bg-cascade-navy text-white flex items-center justify-center text-sm font-bold"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + i * 0.15,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                {i + 1}
              </motion.div>
              {/* Content */}
              <div className="pb-2">
                <h5 className="font-heading text-lg font-semibold text-cascade-navy">{step.title}</h5>
                <p className="text-text-secondary text-sm mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
