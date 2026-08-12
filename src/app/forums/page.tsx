"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { forumThreads, forumCategories } from "@/lib/data/forums";
import { ForumRow } from "@/components/cards/ForumCard";
import { PageHeader, EmptyState } from "@/components/ui/Primitives";
import { ButtonLink } from "@/components/ui/Button";
import { IconSearch, IconChat, IconPlus } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export default function ForumsPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return forumThreads
      .filter((t) => activeCat === "all" || t.categoryId === activeCat)
      .filter((t) =>
        query.trim()
          ? (t.title + t.body + t.tags.join(" "))
              .toLowerCase()
              .includes(query.toLowerCase())
          : true
      )
      .sort((a, b) => Number(b.pinned ?? false) - Number(a.pinned ?? false));
  }, [activeCat, query]);

  return (
    <>
      <PageHeader
        eyebrow="Komunitas"
        title="Forum Diskusi"
        subtitle="Tanya jawab dan berdiskusi dengan sesama WNI di Malaysia. Bagikan pengalaman, minta rekomendasi, dan bantu sesama."
        actions={
          <ButtonLink href="/forums/new">
            <IconPlus className="h-4 w-4" /> Diskusi Baru
          </ButtonLink>
        }
      />

      <div className="container py-8">
        {/* Search */}
        <div className="relative mb-5">
          <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari diskusi, topik, atau kata kunci..."
            className="input-field pl-11"
          />
        </div>

        {/* Category chips */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCat("all")}
            className={cn("chip", activeCat === "all" && "chip-active")}
          >
            📌 Semua Diskusi
          </button>
          {forumCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={cn("chip", activeCat === c.id && "chip-active")}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mb-4 text-sm text-ink-500">
          Menampilkan <span className="font-semibold text-ink-700">{filtered.length}</span> diskusi
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<IconChat className="h-6 w-6" />}
            title="Belum ada diskusi"
            description="Coba kata kunci lain, atau jadilah yang pertama memulai diskusi baru di kategori ini."
            action={
              <ButtonLink href="/forums/new">
                <IconPlus className="h-4 w-4" /> Mulai Diskusi
              </ButtonLink>
            }
          />
        ) : (
          <div className="space-y-3">
            {filtered.map((t) => (
              <ForumRow key={t.id} thread={t} />
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-center rounded-2xl border border-dashed border-ink-300 bg-ink-50 p-6 text-center">
          <div>
            <p className="text-sm font-medium text-ink-600">
              Punya pertanyaan yang belum terjawab?
            </p>
            <Link
              href="/forums/new"
              className="mt-1 text-sm font-bold text-brand-600 hover:text-brand-700"
            >
              Buat diskusi baru →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
