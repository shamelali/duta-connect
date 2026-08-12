import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { alerts } from "@/lib/data/visa";
import { IconArrowLeft, IconChevronRight } from "@/components/ui/Icons";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="border-b border-ink-200 bg-white">
      <div className="container py-10 sm:py-12">
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-600">
            {eyebrow}
          </p>
        )}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                {subtitle}
              </p>
            )}
          </div>
          {actions && <div className="flex shrink-0 gap-2">{actions}</div>}
        </div>
      </div>
    </div>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-sm text-ink-500"
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.href && !last ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-brand-600"
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(last && "font-medium text-ink-800")}>
                {item.label}
              </span>
            )}
            {!last && <IconChevronRight className="h-3.5 w-3.5 text-ink-300" />}
          </span>
        );
      })}
    </nav>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-brand-600"
    >
      <IconArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}

export function EmptyState({
  title,
  description,
  icon,
  action,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="card flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-100 text-2xl text-ink-400">
        {icon ?? "🔍"}
      </div>
      <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-ink-500">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

const alertStyles = {
  red: { dot: "bg-red-500", text: "text-red-700", bg: "bg-red-50", border: "border-red-200" },
  yellow: { dot: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  green: { dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
};

export function AlertTicker() {
  return (
    <div className="border-b border-ink-200 bg-ink-900">
      <div className="flex items-stretch overflow-x-auto scrollbar-none">
        {alerts.map((alert, i) => {
          const s = alertStyles[alert.level];
          return (
            <div
              key={i}
              className={cn(
                "flex shrink-0 items-center gap-2 border-r border-white/10 px-4 py-2 text-xs",
                s.bg
              )}
            >
              <span className={cn("h-2 w-2 shrink-0 rounded-full", s.dot)} />
              <span className={cn("font-medium", s.text)}>{alert.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
