"use client";

import { useEffect, useRef, useState } from "react";
import { formatNumber, formatCurrency } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  format?: "number" | "currency";
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  format = "number",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number>(0);

  // Intersection observer
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animation
  useEffect(() => {
    if (!triggered) return;
    function animate(timestamp: number) {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        setDone(true);
      }
    }
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [triggered, target, duration]);

  const formatted = format === "currency" ? formatCurrency(value) : formatNumber(value);

  return (
    <span
      ref={ref}
      className={`font-number inline-block ${className}`}
      style={done ? { animation: "count-pulse 0.4s ease-out" } : undefined}
    >
      {prefix}{formatted}{suffix}
    </span>
  );
}
