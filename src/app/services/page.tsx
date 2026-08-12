"use client";

import { useMemo, useState } from "react";
import { services, serviceCategories } from "@/lib/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PageHeader, EmptyState } from "@/components/ui/Primitives";
import { IconSearch, IconWrench } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filtered = useMemo(() => {
    return services
      .filter((s) => activeCat === "all" || s.category === activeCat)
      .filter((s) => !verifiedOnly || s.verified)
      .filter((s) =>
        query.trim()
          ? (s.name + s.provider + s.description + s.tags.join(" "))
              .toLowerCase()
              .includes(query.toLowerCase())
          : true
      )
      .sort((a, b) => b.rating - a.rating);
  }, [activeCat, query, verifiedOnly]);

  return (
    <>
      <PageHeader
        eyebrow="Direktori"
        title="Direktori Layanan"
        subtitle="Temukan layanan terpercaya untuk WNI di Malaysia. Semua provider terverifikasi untuk keamanan Anda."
      />

      <div className="container py-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari layanan, provider, atau kategori..."
              className="input-field pl-11"
            />
          </div>
          <button
            onClick={() => setVerifiedOnly((v) => !v)}
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-medium transition-colors",
              verifiedOnly
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-ink-300 bg-white text-ink-600 hover:bg-ink-50"
            )}
          >
            ✓ Terverifikasi saja
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {serviceCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={cn("chip", activeCat === c.id && "chip-active")}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        <p className="mb-4 text-sm text-ink-500">
          Menampilkan <span className="font-semibold text-ink-700">{filtered.length}</span> layanan
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<IconWrench className="h-6 w-6" />}
            title="Tidak ada layanan yang cocok"
            description="Coba ubah filter atau kata kunci pencarian Anda."
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
