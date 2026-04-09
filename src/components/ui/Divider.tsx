interface DividerProps {
  variant?: "wave" | "line" | "dots";
  className?: string;
}

export function Divider({ variant = "line", className = "" }: DividerProps) {
  if (variant === "wave") {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" className="fill-warm-50" />
        </svg>
      </div>
    );
  }
  if (variant === "dots") {
    return (
      <div className={`flex justify-center gap-2 py-8 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-navy-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-navy-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-navy-300" />
      </div>
    );
  }
  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <div className="w-16 h-px bg-navy-300" />
    </div>
  );
}
