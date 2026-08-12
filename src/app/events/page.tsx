"use client";

import { useMemo, useState } from "react";
import { events, eventCategories } from "@/lib/data/events";
import { EventCard } from "@/components/cards/EventCard";
import { PageHeader, EmptyState } from "@/components/ui/Primitives";
import { IconCalendar } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export default function EventsPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [showPast, setShowPast] = useState(false);

  const filtered = useMemo(() => {
    const now = Date.now();
    return events
      .filter((e) => activeCat === "all" || e.category === activeCat)
      .filter((e) =>
        showPast ? new Date(e.date).getTime() < now : new Date(e.date).getTime() >= now
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [activeCat, showPast]);

  return (
    <>
      <PageHeader
        eyebrow="Komunitas"
        title="Acara & Event"
        subtitle="Ikuti acara seru dan perluas jaringan komunitas WNI di Malaysia. Dari workshop, seminar, hingga gathering sosial."
      />

      <div className="container py-8">
        <div className="mb-5 flex flex-wrap gap-2">
          <button onClick={() => setActiveCat("all")} className={cn("chip", activeCat === "all" && "chip-active")}>
            📌 Semua
          </button>
          {eventCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={cn("chip", activeCat === c.id && "chip-active")}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between border-b border-ink-200 pb-4">
          <button
            onClick={() => setShowPast((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-brand-600"
          >
            <span className={cn("h-2 w-2 rounded-full", showPast ? "bg-ink-300" : "bg-brand-500")} />
            {showPast ? "Tampilkan acara mendatang" : "Lihat acara lampau"}
          </button>
          <p className="text-sm text-ink-500">
            {filtered.length} acara
          </p>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<IconCalendar className="h-6 w-6" />}
            title="Belum ada acara"
            description="Belum ada acara dalam kategori ini. Kembali nanti atau coba kategori lain."
          />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
