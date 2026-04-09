"use client";

import { useRef } from "react";
import { useCounter } from "@/lib/hooks";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { useEffect, useState } from "react";

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
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const value = useCounter(target, duration, isInView);
  const formatted = format === "currency" ? formatCurrency(value) : formatNumber(value);

  return (
    <span ref={ref} className={`font-number ${className}`}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
