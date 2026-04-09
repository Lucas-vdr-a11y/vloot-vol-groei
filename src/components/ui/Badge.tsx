interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "gold" | "green" | "teal";
}

const variants = {
  navy: "bg-events-bg text-events border-events-bg",
  gold: "bg-groep-bg text-groep border-groep-bg",
  green: "bg-varen-bg text-varen border-varen-bg",
  teal: "bg-seizoen-bg text-seizoen border-seizoen-bg",
};

export function Badge({ children, variant = "navy" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
}
