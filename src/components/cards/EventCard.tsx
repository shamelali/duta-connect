"use client";

import Link from "next/link";
import type { CommunityEvent } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/lib/store";
import { IconMapPin, IconClock, IconUsers, IconCheck } from "@/components/ui/Icons";
import { eventCategoryLabel } from "@/lib/jobUtils";
import { formatDayMonth, formatPrice, capacityPercent } from "@/lib/utils";

export function EventCard({ event }: { event: CommunityEvent }) {
  const { isRegistered, toggleEventRegister } = useApp();
  const registered = isRegistered(event.id);
  const dm = formatDayMonth(event.date);
  const pct = capacityPercent(event.registered, event.capacity);

  return (
    <div className="card card-hover group flex flex-col overflow-hidden">
      <div className="flex gap-4 p-5">
        <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-brand-600 px-3 py-2 text-white shadow-sm">
          <span className="text-2xl font-extrabold leading-none">{dm.day}</span>
          <span className="text-[10px] font-semibold uppercase tracking-wide">
            {dm.month}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Badge tone="brand">{eventCategoryLabel(event.category)}</Badge>
            {event.price === 0 ? (
              <Badge tone="green">Gratis</Badge>
            ) : (
              <Badge tone="accent">{formatPrice(event.price)}</Badge>
            )}
          </div>
          <h3 className="line-clamp-2 font-display text-base font-bold text-ink-900">
            <Link href={`/events/${event.slug}`} className="group-hover:text-brand-700">
              {event.title}
            </Link>
          </h3>
          <div className="mt-2 space-y-1 text-xs text-ink-500">
            <p className="inline-flex items-center gap-1.5">
              <IconClock className="h-3.5 w-3.5" /> {event.time}
            </p>
            <p className="flex items-center gap-1.5">
              <IconMapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{event.venue}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-ink-100 px-5 py-3">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1 font-medium text-ink-500">
            <IconUsers className="h-3.5 w-3.5" /> {event.registered}/{event.capacity}{" "}
            peserta
          </span>
          {pct >= 80 && <span className="font-semibold text-accent-600">Hampir penuh!</span>}
        </div>
        <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
          <div
            className="h-full rounded-full brand-gradient"
            style={{ width: `${pct}%` }}
          />
        </div>
        <Button
          variant={registered ? "outline" : "primary"}
          size="sm"
          className="w-full"
          onClick={() => toggleEventRegister(event.id)}
        >
          {registered ? (
            <>
              <IconCheck className="h-4 w-4" /> Terdaftar
            </>
          ) : (
            "Ikut Acara"
          )}
        </Button>
      </div>
    </div>
  );
}
