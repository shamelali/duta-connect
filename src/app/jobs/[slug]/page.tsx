"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { jobs } from "@/lib/data/jobs";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Breadcrumb, BackLink } from "@/components/ui/Primitives";
import { SaveButton } from "@/components/ui/Feedback";
import {
  IconMapPin,
  IconCheck,
  IconBriefcase,
  IconClock,
  IconArrowRight,
} from "@/components/ui/Icons";
import { formatSalary, timeAgo } from "@/lib/utils";
import { jobTypeLabel } from "@/lib/jobUtils";
import { cn } from "@/lib/utils";
import { useApp } from "@/lib/store";

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) notFound();
  const { pushToast } = useApp();
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    pushToast("Lamaran terkirim! Perusahaan akan menghubungi Anda. 🎉", "success");
  };

  return (
    <div className="container py-8">
      <div className="mb-5">
        <BackLink href="/jobs" label="Kembali ke Lowongan" />
      </div>
      <Breadcrumb items={[{ label: "Lowongan", href: "/jobs" }, { label: job.title }]} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        {/* Main */}
        <div className="space-y-6">
          {/* Header card */}
          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white"
                style={{ backgroundColor: job.logoColor }}
              >
                {job.logoInitials}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {job.verified && (
                    <Badge tone="green">
                      <IconCheck className="h-3 w-3" /> Terverifikasi
                    </Badge>
                  )}
                  <Badge tone="brand">{jobTypeLabel(job.type)}</Badge>
                  {job.remote && <Badge tone="purple">Remote</Badge>}
                </div>
                <h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                  {job.title}
                </h1>
                <p className="mt-1 text-base text-ink-600">{job.company}</p>
              </div>
              <SaveButton category="jobs" id={job.id} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink-100 pt-5 sm:grid-cols-4">
              <InfoStat icon={<IconMapPin className="h-4 w-4" />} label="Lokasi" value={job.location} />
              <InfoStat icon={<IconBriefcase className="h-4 w-4" />} label="Kategori" value={job.category} />
              <InfoStat icon={<IconClock className="h-4 w-4" />} label="Diposting" value={timeAgo(job.postedAt)} />
              <InfoStat
                icon={<span className="text-sm">💰</span>}
                label="Gaji"
                value={`${formatSalary(job.salaryMin, job.salaryMax)}`}
                highlight
              />
            </div>
          </div>

          {/* Description */}
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-ink-900">Deskripsi Pekerjaan</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-600">
              {job.description}
            </p>

            <h2 className="mt-7 font-display text-lg font-bold text-ink-900">Persyaratan</h2>
            <ul className="mt-3 space-y-2.5">
              {job.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>

            <h2 className="mt-7 font-display text-lg font-bold text-ink-900">Benefit & Tunjangan</h2>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {job.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl bg-brand-50/60 px-3.5 py-2.5 text-sm text-ink-700">
                  <span className="text-brand-500">✦</span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <div className="card p-5">
            {applied ? (
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <IconCheck className="h-7 w-7" />
                </div>
                <p className="mt-3 font-display text-base font-bold text-ink-900">Lamaran Terkirim!</p>
                <p className="mt-1 text-sm text-ink-500">
                  Perusahaan akan menghubungi Anda jika profil cocok.
                </p>
                <ButtonLink href="/jobs" variant="outline" size="sm" className="mt-4 w-full">
                  Lihat lowongan lain
                </ButtonLink>
              </div>
            ) : (
              <>
                <Button onClick={handleApply} className="w-full" size="lg">
                  Lamar Sekarang <IconArrowRight className="h-4.5 w-4.5" />
                </Button>
                <ButtonLink href="#" variant="outline" className="mt-2 w-full">
                  Simpan Lowongan
                </ButtonLink>
                <div className="mt-4 border-t border-ink-100 pt-4 text-center">
                  <p className="text-xs text-ink-400">
                    {Math.floor(Math.random() * 40 + 15)} orang melihat minggu ini
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="card p-5">
            <h3 className="font-display text-sm font-bold text-ink-900">Tentang Perusahaan</h3>
            <div className="mt-3 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: job.logoColor }}
              >
                {job.logoInitials}
              </span>
              <div>
                <p className="text-sm font-bold text-ink-800">{job.company}</p>
                <p className="text-xs text-ink-400">📍 {job.location}</p>
              </div>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-500">Status</dt>
                <dd className={cn("font-medium", job.verified ? "text-brand-600" : "text-ink-700")}>
                  {job.verified ? "Terverifikasi" : "Aktif"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-500">Tipe</dt>
                <dd className="font-medium text-ink-700">{jobTypeLabel(job.type)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-500">Remote</dt>
                <dd className="font-medium text-ink-700">{job.remote ? "Ya" : "Tidak"}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-bold text-amber-800">⚠️ Tips Aman</p>
            <p className="mt-1 text-xs text-amber-700">
              Jangan bayar biaya apa pun untuk melamar. Periksa profil perusahaan
              dan waspadai penawaran terlalu bagus.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function InfoStat({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-xs text-ink-400">
        {icon} {label}
      </div>
      <p className={cn("mt-1 text-sm font-bold", highlight ? "text-brand-700" : "text-ink-800")}>
        {value}
      </p>
    </div>
  );
}
