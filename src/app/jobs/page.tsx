"use client";

import { useMemo, useState } from "react";
import { jobs, jobCategories, jobTypes } from "@/lib/data/jobs";
import { JobCard } from "@/components/cards/JobCard";
import { PageHeader, EmptyState } from "@/components/ui/Primitives";
import { ButtonLink } from "@/components/ui/Button";
import { IconSearch, IconBriefcase } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export default function JobsPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [query, setQuery] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);

  const filtered = useMemo(() => {
    return jobs
      .filter((j) => activeCat === "all" || j.category === activeCat)
      .filter((j) => activeType === "all" || j.type === activeType)
      .filter((j) => !remoteOnly || j.remote)
      .filter((j) =>
        query.trim()
          ? (j.title + j.company + j.location + j.description)
              .toLowerCase()
              .includes(query.toLowerCase())
          : true
      );
  }, [activeCat, activeType, query, remoteOnly]);

  return (
    <>
      <PageHeader
        eyebrow="Karir"
        title="Lowongan Kerja"
        subtitle="Temukan pekerjaan yang cocok untuk Anda di Malaysia. Semua lowongan diverifikasi untuk keamanan Anda."
        actions={
          <div className="rounded-xl border border-ink-200 bg-white px-4 py-2 text-right">
            <p className="text-xs text-ink-400">Lowangan aktif</p>
            <p className="font-display text-xl font-extrabold text-brand-700">
              {jobs.length}
            </p>
          </div>
        }
      />

      <div className="container py-8">
        {/* Search + remote toggle */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari posisi, perusahaan, atau lokasi..."
              className="input-field pl-11"
            />
          </div>
          <button
            onClick={() => setRemoteOnly((v) => !v)}
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-medium transition-colors",
              remoteOnly
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-ink-300 bg-white text-ink-600 hover:bg-ink-50"
            )}
          >
            <span className={cn("h-2 w-2 rounded-full", remoteOnly ? "bg-brand-500" : "bg-ink-300")} />
            Remote saja
          </button>
        </div>

        {/* Category chips */}
        <div className="mb-4 flex flex-wrap gap-2">
          <button onClick={() => setActiveCat("all")} className={cn("chip", activeCat === "all" && "chip-active")}>
            Semua
          </button>
          {jobCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={cn("chip", activeCat === c && "chip-active")}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Type chips */}
        <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-ink-200 pb-5">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-ink-400">
            Tipe:
          </span>
          <button onClick={() => setActiveType("all")} className={cn("chip", activeType === "all" && "chip-active")}>
            Semua
          </button>
          {jobTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveType(t.id)}
              className={cn("chip", activeType === t.id && "chip-active")}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="mb-4 text-sm text-ink-500">
          Menampilkan <span className="font-semibold text-ink-700">{filtered.length}</span> lowongan
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<IconBriefcase className="h-6 w-6" />}
            title="Tidak ada lowongan yang cocok"
            description="Coba ubah filter atau kata kunci pencarian Anda."
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
          </div>
        )}

        <ScamWarning />
      </div>
    </>
  );
}

function ScamWarning() {
  return (
    <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 sm:flex-row sm:items-center">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-xl">
        🛡️
      </span>
      <div>
        <p className="text-sm font-bold text-red-800">Waspada penipuan lowongan palsu</p>
        <p className="text-sm text-red-700">
          Perusahaan resmi tidak pernah meminta biaya pendaftaran, deposit, atau
          transfer ke rekening pribadi. Laporkan lowongan mencurigakan ke tim
          kami.
        </p>
      </div>
    </div>
  );
}
