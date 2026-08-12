"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useApp } from "@/lib/store";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { JobCard } from "@/components/cards/JobCard";
import { HousingCard } from "@/components/cards/HousingCard";
import { EventCard } from "@/components/cards/EventCard";
import { jobs } from "@/lib/data/jobs";
import { housingListings } from "@/lib/data/housing";
import { events } from "@/lib/data/events";
import {
  IconChat,
  IconBriefcase,
  IconHome,
  IconCalendar,
  IconBookmark,
  IconArrowRight,
} from "@/components/ui/Icons";

export default function DashboardPage() {
  const { user, saved, registeredEvents } = useApp();

  const savedJobs = useMemo(
    () => jobs.filter((j) => (saved.jobs ?? []).includes(j.id)),
    [saved.jobs]
  );
  const savedHousing = useMemo(
    () => housingListings.filter((h) => (saved.housing ?? []).includes(h.id)),
    [saved.housing]
  );
  const myEvents = useMemo(
    () => events.filter((e) => registeredEvents.includes(e.id)),
    [registeredEvents]
  );

  if (!user) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <IconBookmark className="h-8 w-8" />
        </div>
        <h1 className="font-display text-2xl font-extrabold text-ink-900">
          Anda belum masuk
        </h1>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          Masuk atau daftar untuk mengakses dashboard pribadi Anda — lowongan
          tersimpan, acara terdaftar, dan aktivitas komunitas.
        </p>
        <div className="mt-6 flex gap-3">
          <ButtonLink href="/login">Masuk</ButtonLink>
          <ButtonLink href="/register" variant="outline">
            Daftar Gratis
          </ButtonLink>
        </div>
      </div>
    );
  }

  const totalSaved =
    Object.values(saved).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <div className="container py-8">
      {/* Welcome */}
      <div className="card overflow-hidden">
        <div className="brand-gradient px-6 py-8 text-white sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar
                initials={user.initials}
                color={user.avatarColor}
                size="lg"
                ring
              />
              <div>
                <p className="text-sm text-brand-50">Halo, selamat datang!</p>
                <h1 className="font-display text-2xl font-extrabold">
                  {user.name}
                </h1>
                <p className="text-sm text-brand-50">
                  {user.profession} · {user.location}
                  {user.visa && ` · ${user.visa}`}
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/15 px-5 py-3 text-center backdrop-blur">
              <p className="font-display text-2xl font-extrabold">{totalSaved}</p>
              <p className="text-xs text-brand-50">Item tersimpan</p>
            </div>
          </div>
        </div>
        {/* Quick stats */}
        <div className="grid grid-cols-2 divide-x divide-ink-100 border-t border-ink-100 sm:grid-cols-4">
          <Stat icon={<IconBriefcase className="h-5 w-5" />} label="Lowongan" value={savedJobs.length} href="/jobs" />
          <Stat icon={<IconHome className="h-5 w-5" />} label="Properti" value={savedHousing.length} href="/housing" />
          <Stat icon={<IconCalendar className="h-5 w-5" />} label="Acara" value={myEvents.length} href="/events" />
          <Stat icon={<IconChat className="h-5 w-5" />} label="Diskusi" value={0} href="/forums" />
        </div>
      </div>

      {/* Saved jobs */}
      <Section
        title="Lowongan Tersimpan"
        icon={<IconBriefcase className="h-5 w-5" />}
        empty="Belum ada lowongan tersimpan. Jelajahi lowongan kerja dan simpan yang menarik."
        emptyHref="/jobs"
        count={savedJobs.length}
      >
        {savedJobs.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {savedJobs.slice(0, 3).map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
          </div>
        )}
      </Section>

      {/* Saved housing */}
      <Section
        title="Properti Tersimpan"
        icon={<IconHome className="h-5 w-5" />}
        empty="Belum ada properti tersimpan. Cari kos atau apartemen dan simpan favorit Anda."
        emptyHref="/housing"
        count={savedHousing.length}
      >
        {savedHousing.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {savedHousing.slice(0, 3).map((h) => (
              <HousingCard key={h.id} item={h} />
            ))}
          </div>
        )}
      </Section>

      {/* Registered events */}
      <Section
        title="Acara Saya"
        icon={<IconCalendar className="h-5 w-5" />}
        empty="Anda belum terdaftar di acara mana pun. Lihat acara mendatang dan ikuti!"
        emptyHref="/events"
        count={myEvents.length}
      >
        {myEvents.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {myEvents.slice(0, 3).map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1 px-4 py-5 transition-colors hover:bg-ink-50"
    >
      <span className="text-brand-500">{icon}</span>
      <span className="font-display text-xl font-extrabold text-ink-900">{value}</span>
      <span className="text-xs text-ink-400">{label}</span>
    </Link>
  );
}

function Section({
  title,
  icon,
  count,
  empty,
  emptyHref,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  count: number;
  empty: string;
  emptyHref: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
          <span className="text-brand-500">{icon}</span>
          {title}
          <Badge tone="gray">{count}</Badge>
        </h2>
      </div>
      {count === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-300 bg-ink-50 px-6 py-12 text-center">
          <p className="max-w-sm text-sm text-ink-500">{empty}</p>
          <ButtonLink href={emptyHref} variant="outline" size="sm" className="mt-4">
            Jelajahi <IconArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      ) : (
        children
      )}
    </section>
  );
}
