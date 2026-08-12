"use client";

import { notFound } from "next/navigation";
import { events } from "@/lib/data/events";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Breadcrumb, BackLink } from "@/components/ui/Primitives";
import {
  IconMapPin,
  IconClock,
  IconUsers,
  IconCheck,
  IconCalendar,
} from "@/components/ui/Icons";
import { eventCategoryLabel } from "@/lib/jobUtils";
import { formatDate, formatPrice, capacityPercent } from "@/lib/utils";
import { useApp } from "@/lib/store";

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) notFound();
  const { isRegistered, toggleEventRegister } = useApp();
  const registered = isRegistered(event.id);
  const pct = capacityPercent(event.registered, event.capacity);

  return (
    <div className="container py-8">
      <div className="mb-5">
        <BackLink href="/events" label="Kembali ke Acara" />
      </div>
      <Breadcrumb items={[{ label: "Acara", href: "/events" }, { label: event.title }]} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Header */}
          <div className="card overflow-hidden">
            <div className="brand-gradient px-6 py-10 text-white sm:px-8 sm:py-14">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  {eventCategoryLabel(event.category)}
                </Badge>
                {event.price === 0 ? (
                  <Badge className="bg-white/20 text-white border-white/30">Gratis</Badge>
                ) : (
                  <Badge className="bg-white/20 text-white border-white/30">{formatPrice(event.price)}</Badge>
                )}
              </div>
              <h1 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-4xl">
                {event.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <IconCalendar className="h-4 w-4" /> {formatDate(event.date, { full: true })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <IconClock className="h-4 w-4" /> {event.time}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <IconMapPin className="h-4 w-4" /> {event.venue}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-ink-900">Tentang Acara</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{event.description}</p>

            <h2 className="mt-7 font-display text-lg font-bold text-ink-900">Sorotan Acara</h2>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {event.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 rounded-xl bg-brand-50/50 px-3.5 py-3 text-sm text-ink-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <div className="card p-5">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-1.5 font-medium text-ink-600">
                <IconUsers className="h-4 w-4" /> {event.registered}/{event.capacity} terdaftar
              </span>
              <span className="text-xs text-ink-400">{100 - pct} tersisa</span>
            </div>
            <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-ink-100">
              <div className="h-full rounded-full brand-gradient" style={{ width: `${pct}%` }} />
            </div>

            {registered ? (
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <IconCheck className="h-7 w-7" />
                </div>
                <p className="font-display text-base font-bold text-ink-900">Anda Terdaftar!</p>
                <p className="mt-1 text-sm text-ink-500">
                  Tambahkan ke kalender Anda. Sampai jumpa di acara!
                </p>
                <Button variant="outline" className="mt-4 w-full" onClick={() => toggleEventRegister(event.id)}>
                  Batalkan Pendaftaran
                </Button>
              </div>
            ) : (
              <Button className="w-full" size="lg" onClick={() => toggleEventRegister(event.id)}>
                {event.price === 0 ? "Daftar Gratis" : `Daftar · ${formatPrice(event.price)}`}
              </Button>
            )}
          </div>

          <div className="card p-5">
            <h3 className="font-display text-sm font-bold text-ink-900">Detail</h3>
            <dl className="mt-3 space-y-2.5 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-ink-500">Tanggal</dt>
                <dd className="text-right font-medium text-ink-800">{formatDate(event.date)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-500">Waktu</dt>
                <dd className="text-right font-medium text-ink-800">{event.time}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-500">Lokasi</dt>
                <dd className="text-right font-medium text-ink-800">{event.location}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-500">Kapasitas</dt>
                <dd className="text-right font-medium text-ink-800">{event.capacity} orang</dd>
              </div>
            </dl>
          </div>

          <div className="card p-5">
            <h3 className="font-display text-sm font-bold text-ink-900">Penyelenggara</h3>
            <div className="mt-3 flex items-center gap-3">
              <Avatar
                initials={event.organizer.initials}
                color={event.organizer.avatarColor}
                size="md"
              />
              <div>
                <p className="text-sm font-bold text-ink-800">{event.organizer.name}</p>
                <p className="text-xs text-ink-400">{event.organizer.profession}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
