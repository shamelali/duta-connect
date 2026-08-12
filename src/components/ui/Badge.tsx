import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone =
  | "brand"
  | "accent"
  | "gray"
  | "blue"
  | "purple"
  | "green"
  | "red"
  | "yellow";

const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 border-brand-200",
  accent: "bg-accent-50 text-accent-700 border-accent-200",
  gray: "bg-ink-100 text-ink-600 border-ink-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  green: "bg-green-50 text-green-700 border-green-200",
  red: "bg-red-50 text-red-700 border-red-200",
  yellow: "bg-amber-50 text-amber-700 border-amber-200",
};

export function Badge({
  children,
  tone = "gray",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
