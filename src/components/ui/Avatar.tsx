import { cn } from "@/lib/utils";

export function Avatar({
  initials,
  color = "#0d9488",
  size = "md",
  ring = false,
  className,
}: {
  initials: string;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg";
  ring?: boolean;
  className?: string;
}) {
  const sizes = {
    xs: "h-7 w-7 text-[10px]",
    sm: "h-9 w-9 text-xs",
    md: "h-11 w-11 text-sm",
    lg: "h-14 w-14 text-base",
  };
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white",
        sizes[size],
        ring && "ring-2 ring-white",
        className
      )}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl brand-gradient text-white shadow-sm",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </span>
  );
}
