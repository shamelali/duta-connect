"use client";

import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb, BackLink } from "@/components/ui/Primitives";
import {
  IconStar,
  IconMapPin,
  IconCheck,
  IconPhone,
  IconShield,
} from "@/components/ui/Icons";
import { formatPrice } from "@/lib/utils";
import { useApp } from "@/lib/store";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const { pushToast } = useApp();

  return (
    <div className="container py-8">
      <div className="mb-5">
        <BackLink href="/services" label="Kembali ke Direktori" />
      </div>
      <Breadcrumb items={[{ label: "Layanan", href: "/services" }, { label: service.name }]} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {/* Header */}
          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
                {service.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {service.verified && (
                    <Badge tone="green">
                      <IconCheck className="h-3 w-3" /> Terverifikasi
                    </Badge>
                  )}
                  <Badge tone="brand">{service.category}</Badge>
                </div>
                <h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                  {service.name}
                </h1>
                <p className="mt-1 text-base text-ink-600">{service.provider}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-ink-100 pt-5">
              <div className="flex items-center gap-2">
                <IconStar filled className="h-5 w-5 text-amber-400" />
                <div>
                  <p className="font-display text-lg font-bold text-ink-900">
                    {service.rating}
                    <span className="text-sm font-normal text-ink-400"> / 5.0</span>
                  </p>
                  <p className="text-xs text-ink-400">{service.reviewCount} ulasan</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconMapPin className="h-5 w-5 text-ink-400" />
                <div>
                  <p className="text-sm font-bold text-ink-900">{service.location}</p>
                  <p className="text-xs text-ink-400">Lokasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-ink-900">Tentang Layanan</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{service.description}</p>

            <h2 className="mt-7 font-display text-lg font-bold text-ink-900">Spesialisasi</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <Badge key={t} tone="gray">{t}</Badge>
              ))}
            </div>
          </div>

          {/* Reviews preview */}
          <div className="card p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink-900">Ulasan Terbaru</h2>
              <span className="inline-flex items-center gap-1 text-sm text-ink-500">
                <IconStar filled className="h-4 w-4 text-amber-400" /> {service.rating}
              </span>
            </div>
            <div className="mt-4 space-y-4">
              {[
                { name: "Pengguna terverifikasi", text: "Pelayanan sangat profesional dan cepat. Direkomendasikan untuk WNI yang butuh bantuan di Malaysia.", color: "#2563eb", initials: "PT" },
                { name: "Pelanggan setia", text: "Sudah pakai berkali-kali, selalu memuaskan. Harga transparan dan timnya helpful.", color: "#db2777", initials: "PS" },
              ].map((r, i) => (
                <div key={i} className="rounded-xl border border-ink-100 p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: r.color }}>
                      {r.initials}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-ink-800">{r.name}</p>
                      <div className="flex gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <IconStar key={j} filled className="h-3 w-3" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-ink-600">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <div className="card p-5">
            <p className="text-xs text-ink-400">Mulai dari</p>
            <p className="font-display text-3xl font-extrabold text-brand-700">
              {formatPrice(service.priceFrom)}
            </p>
            <Button
              className="mt-4 w-full"
              size="lg"
              onClick={() => pushToast("Permintaan kontak terkirim! Provider akan menghubungi Anda. 📨", "success")}
            >
              Hubungi Provider
            </Button>
            <a
              href={service.contact.startsWith("+") ? `tel:${service.contact.replace(/\s/g, "")}` : "#"}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
            >
              <IconPhone className="h-4 w-4" /> {service.contact}
            </a>
          </div>

          {service.verified && (
            <div className="card border-brand-200 bg-brand-50/40 p-5">
              <div className="flex items-center gap-2">
                <IconShield className="h-5 w-5 text-brand-600" />
                <p className="font-display text-sm font-bold text-ink-900">Provider Terverifikasi</p>
              </div>
              <p className="mt-2 text-xs text-ink-500">
                Provider ini telah melalui proses verifikasi dokumen bisnis dan
                reputasi oleh tim DUTA Connect.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
