"use client";

import { useMemo, useState } from "react";
import { visaTypes, visaCategories, visaFaqs } from "@/lib/data/visa";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/ui/Primitives";
import {
  IconChevronDown,
  IconCheck,
  IconPhone,
  IconGlobe,
  IconShield,
} from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export default function VisaPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = useMemo(() => {
    return visaTypes.filter((v) => activeCat === "all" || v.category === activeCat);
  }, [activeCat]);

  return (
    <>
      <PageHeader
        eyebrow="Imigrasi"
        title="Panduan Visa & Imigrasi"
        subtitle="Informasi lengkap visa, izin tinggal, dan dokumen untuk WNI di Malaysia. Selalu verifikasi dengan sumber resmi."
      />

      {/* Warning banner */}
      <div className="border-b border-amber-200 bg-amber-50">
        <div className="container py-3 text-sm text-amber-800">
          ⚠️ <strong>Informasi Penting:</strong> Kebijakan imigrasi dapat berubah sewaktu-waktu. Selalu cek website resmi Imigresen Malaysia atau hubungi KBRI untuk info terkini.
        </div>
      </div>

      {/* Quick contact */}
      <div className="border-b border-ink-200 bg-white">
        <div className="container grid gap-3 py-4 sm:grid-cols-3">
          <ContactCard icon={<IconPhone className="h-4 w-4" />} label="KBRI KL" value="+603-2116 4000" />
          <ContactCard icon={<IconGlobe className="h-4 w-4" />} label="Imigresen Malaysia" value="imi.gov.my" />
          <ContactCard icon={<IconGlobe className="h-4 w-4" />} label="Portal ESD" value="esd.imi.gov.my" />
        </div>
      </div>

      <div className="container py-8">
        {/* Category tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {visaCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={cn("chip", activeCat === c.id && "chip-active")}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Visa type cards */}
        <div className="space-y-5">
          {filtered.map((v) => (
            <div key={v.id} className="card overflow-hidden">
              <div className="border-b border-ink-100 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
                    {v.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="brand">{v.category}</Badge>
                    </div>
                    <h2 className="mt-1.5 font-display text-xl font-extrabold tracking-tight text-ink-900">
                      {v.name}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{v.description}</p>
                  </div>
                  <div className="hidden shrink-0 gap-4 sm:flex">
                    <Metric label="Durasi" value={v.duration} />
                    <Metric label="Biaya" value={v.cost} />
                  </div>
                </div>
                {/* mobile metrics */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
                  <Metric label="Durasi" value={v.duration} />
                  <Metric label="Biaya" value={v.cost} />
                </div>
              </div>

              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-3">
                {/* Steps */}
                <div className="lg:col-span-1">
                  <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">1</span>
                    Langkah-langkah
                  </h3>
                  <ol className="relative space-y-3 border-l-2 border-ink-100 pl-5">
                    {v.steps.map((step, i) => (
                      <li key={i} className="relative text-sm text-ink-600">
                        <span className="absolute -left-[27px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-200 bg-white text-[10px] font-bold text-brand-600">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Documents */}
                <div className="lg:col-span-1">
                  <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">2</span>
                    Dokumen Diperlukan
                  </h3>
                  <ul className="space-y-2">
                    {v.documents.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-600">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                <div className="lg:col-span-1">
                  <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-xs text-white">💡</span>
                    Tips Penting
                  </h3>
                  <ul className="space-y-2.5">
                    {v.tips.map((tip, i) => (
                      <li key={i} className="rounded-lg bg-accent-50/60 px-3 py-2 text-sm text-ink-700">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-14 scroll-mt-20">
          <div className="text-center">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
              Pertanyaan Umum (FAQ)
            </h2>
            <p className="mt-2 text-sm text-ink-500">
              Jawaban atas pertanyaan paling sering tentang visa & imigrasi.
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-3xl space-y-3">
            {visaFaqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-display text-base font-bold text-ink-900">
                      {faq.question}
                    </span>
                    <IconChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-ink-400 transition-transform",
                        open && "rotate-180"
                      )}
                    />
                  </button>
                  {open && (
                    <div className="animate-fade-in border-t border-ink-100 px-5 py-4 text-sm leading-relaxed text-ink-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-ink-900 p-8 text-center text-white sm:p-12">
          <IconShield className="h-10 w-10 text-brand-400" />
          <h2 className="font-display text-2xl font-extrabold">Butuh Bantuan Imigrasi?</h2>
          <p className="max-w-md text-sm text-ink-300">
            Lihat direktori layanan kami untuk konsultan visa & imigrasi
            terverifikasi, atau tanyakan langsung di forum komunitas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/services?cat=legal" className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white hover:bg-brand-700">
              Konsultan Visa
            </a>
            <a href="/forums?cat=visa" className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10">
              Tanya di Forum
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-ink-50 px-4 py-2.5">
      <p className="text-[11px] font-medium uppercase tracking-wide text-ink-400">{label}</p>
      <p className="text-sm font-bold text-ink-800">{value}</p>
    </div>
  );
}

function ContactCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3 transition-colors hover:border-brand-300 hover:bg-brand-50"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] text-ink-400">{label}</p>
        <p className="truncate text-sm font-bold text-ink-800">{value}</p>
      </div>
    </a>
  );
}
