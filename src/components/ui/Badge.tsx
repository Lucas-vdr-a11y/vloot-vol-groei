interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "gold" | "navy";
}

const variants = {
  blue: "bg-water-100 text-water-600 border-water-200",
  gold: "bg-gold-300/20 text-gold-600 border-gold-300/40",
  navy: "bg-navy-100 text-navy-600 border-navy-200",
};

export function Badge({ children, variant = "blue" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
}
