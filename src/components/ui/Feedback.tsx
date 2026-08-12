"use client";

import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";
import { IconBookmark } from "./Icons";

export function ToastViewport() {
  const { toasts, dismissToast } = useApp();
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-2 px-4 sm:top-6">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className={cn(
            "pointer-events-auto flex w-full max-w-sm animate-fade-up items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-card-hover",
            t.type === "success" && "border-brand-200",
            t.type === "info" && "border-ink-200",
            t.type === "error" && "border-red-200"
          )}
        >
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white",
              t.type === "success" && "bg-brand-500",
              t.type === "info" && "bg-ink-400",
              t.type === "error" && "bg-red-500"
            )}
          >
            {t.type === "success" ? "✓" : t.type === "error" ? "!" : "i"}
          </span>
          <p className="flex-1 text-sm font-medium text-ink-800">{t.message}</p>
          <button
            onClick={() => dismissToast(t.id)}
            className="text-ink-400 transition-colors hover:text-ink-600"
            aria-label="Tutup notifikasi"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export function SaveButton({
  category,
  id,
  className,
}: {
  category: string;
  id: string;
  className?: string;
}) {
  const { isSaved, toggleSave } = useApp();
  const saved = isSaved(category, id);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSave(category, id);
      }}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
        saved
          ? "border-brand-500 bg-brand-50 text-brand-600"
          : "border-ink-200 bg-white/90 text-ink-400 hover:border-brand-300 hover:text-brand-500",
        className
      )}
      aria-label={saved ? "Hapus dari tersimpan" : "Simpan ke favorit"}
      aria-pressed={saved}
    >
      <IconBookmark filled={saved} className="h-4.5 w-4.5" />
    </button>
  );
}

export function LikeButton({
  id,
  count,
  className,
}: {
  id: string;
  count: number;
  className?: string;
}) {
  const { likes, toggleLike } = useApp();
  const liked = !!likes[id];
  return (
    <button
      onClick={() => toggleLike(id)}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm font-medium transition-colors",
        liked
          ? "text-rose-600"
          : "text-ink-500 hover:bg-ink-100 hover:text-rose-500",
        className
      )}
      aria-pressed={liked}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H7m8-16.12L11 2 7 5.12V10" />
      </svg>
      <span>{count + (liked ? 1 : 0)}</span>
    </button>
  );
}
