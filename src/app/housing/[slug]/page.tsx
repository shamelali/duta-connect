"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { housingListings } from "@/lib/data/housing";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Breadcrumb, BackLink } from "@/components/ui/Primitives";
import { SaveButton } from "@/components/ui/Feedback";
import { IconMapPin, IconCheck, IconClock } from "@/components/ui/Icons";
import { housingTypeLabel } from "@/lib/jobUtils";
import { formatCurrency, timeAgo } from "@/lib/utils";
import { useApp } from "@/lib/store";

export default function HousingDetailPage({ params }: { params: { slug: string } }) {
  const item = housingListings.find((h) => h.slug === params.slug);
  if (!item) notFound();
  const { pushToast } = useApp();

  return (
    <div className="container py-8">
      <div className="mb-5">
        <BackLink href="/housing" label="Kembali ke Properti" />
      </div>
      <Breadcrumb items={[{ label: "Properti", href: "/housing" }, { label: item.title }]} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Image */}
          <div className="card overflow-hidden">
            <div className="relative h-72 w-full bg-ink-100 sm:h-96">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 flex gap-2">
                <Badge tone="gray" className="bg-white/90 backdrop-blur">
                  {housingTypeLabel(item.type)}
                </Badge>
                {item.furnished && (
                  <Badge tone="brand" className="bg-white/90 backdrop-blur">
                    Furnished
                  </Badge>
                )}
              </div>
              <div className="absolute right-4 top-4">
                <SaveButton category="housing" id={item.id} />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="card p-6 sm:p-8">
            <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
              {item.title}
            </h1>
            <p className="mt-2 inline-flex items-center gap-1.5 text-ink-500">
              <IconMapPin className="h-4 w-4" /> {item.location}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-4 rounded-xl bg-ink-50 p-4">
              <Spec label="Kamar Tidur" value={item.bedrooms === 0 ? "Studio" : `${item.bedrooms}`} icon="🛏️" />
              <Spec label="Kamar Mandi" value={`${item.bathrooms}`} icon="🚿" />
              <Spec label="Furnish" value={item.furnished ? "Ya" : "Tidak"} icon="🪑" />
            </div>

            <h2 className="mt-6 font-display text-lg font-bold text-ink-900">Deskripsi</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>

            <h2 className="mt-6 font-display text-lg font-bold text-ink-900">Fasilitas</h2>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {item.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-ink-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <div className="card p-5">
            <p className="text-xs text-ink-400">Harga sewa</p>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-3xl font-extrabold text-brand-700">
                {formatCurrency(item.pricePerMonth)}
              </span>
              <span className="text-sm text-ink-400">/bulan</span>
            </div>
            <p className="mt-1 text-xs text-ink-400">
              Estimasi {formatCurrency(item.pricePerMonth + 150)} termasuk utilitas
            </p>
            <Button
              className="mt-4 w-full"
              size="lg"
              onClick={() => pushToast("Permintaan kontak terkirim ke pemilik! 📨", "success")}
            >
              Hubungi Pemilik
            </Button>
            <Button
              variant="outline"
              className="mt-2 w-full"
              onClick={() => pushToast("Tour dijadwalkan! Pemilik akan konfirmasi.", "success")}
            >
              Jadwalkan Tour
            </Button>
          </div>

          <div className="card p-5">
            <h3 className="font-display text-sm font-bold text-ink-900">Diposting Oleh</h3>
            <div className="mt-3 flex items-center gap-3">
              <Avatar
                initials={item.agent.initials}
                color={item.agent.avatarColor}
                size="md"
              />
              <div>
                <p className="text-sm font-bold text-ink-800">{item.agent.name}</p>
                <p className="text-xs text-ink-400">
                  {item.agent.profession} · {item.agent.location}
                </p>
              </div>
            </div>
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-400">
              <IconClock className="h-3.5 w-3.5" /> Diposting {timeAgo(item.postedAt)}
            </p>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-ink-50 p-4 text-xs text-ink-500">
            <p className="font-semibold text-ink-700">📋 Sebelum sewa</p>
            <ul className="mt-2 space-y-1">
              <li>• Pastikan kontrak tertulis & legal</li>
              <li>• Inspeksi langsung sebelum bayar deposit</li>
              <li>• Gunakan pembayaran terlacak</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Spec({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="text-center">
      <div className="text-xl">{icon}</div>
      <p className="mt-1 font-display text-lg font-bold text-ink-900">{value}</p>
      <p className="text-[11px] text-ink-400">{label}</p>
    </div>
  );
}
