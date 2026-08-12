"use client";

import { useMemo, useState } from "react";
import { housingListings, housingTypes } from "@/lib/data/housing";
import { HousingCard } from "@/components/cards/HousingCard";
import { PageHeader, EmptyState } from "@/components/ui/Primitives";
import { IconSearch, IconHome } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export default function HousingPage() {
  const [activeType, setActiveType] = useState("all");
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);

  const filtered = useMemo(() => {
    return housingListings
      .filter((h) => activeType === "all" || h.type === activeType)
      .filter((h) => h.pricePerMonth <= maxPrice)
      .filter((h) =>
        query.trim()
          ? (h.title + h.location + h.area + h.features.join(" "))
              .toLowerCase()
              .includes(query.toLowerCase())
          : true
      );
  }, [activeType, query, maxPrice]);

  return (
    <>
      <PageHeader
        eyebrow="Properti"
        title="Properti & Tempat Tinggal"
        subtitle="Cari kos, apartemen, atau rumah untuk WNI di Malaysia. Bandingkan harga dan temukan tempat tinggal ideal Anda."
      />

      <div className="container py-8">
        <div className="mb-5 relative">
          <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari area, lokasi, atau fitur (mis. KLCC, kolam renang)..."
            className="input-field pl-11"
          />
        </div>

        {/* Type chips */}
        <div className="mb-5 flex flex-wrap gap-2">
          <button onClick={() => setActiveType("all")} className={cn("chip", activeType === "all" && "chip-active")}>
            Semua
          </button>
          {housingTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveType(t.id)}
              className={cn("chip", activeType === t.id && "chip-active")}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Price slider */}
        <div className="mb-6 flex flex-col gap-2 rounded-xl border border-ink-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
          <label htmlFor="price" className="text-sm font-medium text-ink-600">
            Budget maks:
          </label>
          <input
            id="price"
            type="range"
            min={500}
            max={5000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-ink-200 accent-brand-600"
          />
          <span className="min-w-[90px] text-right text-sm font-bold text-brand-700">
            RM {maxPrice.toLocaleString("en-MY")}
            <span className="text-xs font-normal text-ink-400">/bln</span>
          </span>
        </div>

        <p className="mb-4 text-sm text-ink-500">
          Menampilkan <span className="font-semibold text-ink-700">{filtered.length}</span> properti
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<IconHome className="h-6 w-6" />}
            title="Tidak ada properti yang cocok"
            description="Coba naikkan budget atau ubah tipe properti yang dicari."
          />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((h) => (
              <HousingCard key={h.id} item={h} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
