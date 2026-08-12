import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  IconChat,
  IconBriefcase,
  IconHome,
  IconCalendar,
  IconWrench,
  IconPassport,
  IconArrowRight,
  IconSparkles,
  IconShield,
  IconStar,
  IconMapPin,
  IconClock,
  IconUsers,
  IconCheck,
} from "@/components/ui/Icons";
import { ForumCard } from "@/components/cards/ForumCard";
import { JobCard } from "@/components/cards/JobCard";
import { EventCard } from "@/components/cards/EventCard";
import { Avatar } from "@/components/ui/Avatar";
import { forumThreads } from "@/lib/data/forums";
import { jobs } from "@/lib/data/jobs";
import { events } from "@/lib/data/events";

const featureCards = [
  {
    href: "/forums",
    label: "Forum",
    desc: "Tanya jawab & diskusi",
    icon: IconChat,
    color: "bg-blue-50 text-blue-600",
  },
  {
    href: "/jobs",
    label: "Lowongan Kerja",
    desc: "Karir di Malaysia",
    icon: IconBriefcase,
    color: "bg-brand-50 text-brand-600",
  },
  {
    href: "/housing",
    label: "Properti",
    desc: "Kos, apartemen, rumah",
    icon: IconHome,
    color: "bg-purple-50 text-purple-600",
  },
  {
    href: "/events",
    label: "Acara",
    desc: "Meetup komunitas",
    icon: IconCalendar,
    color: "bg-accent-50 text-accent-600",
  },
  {
    href: "/services",
    label: "Layanan",
    desc: "Direktori terpercaya",
    icon: IconWrench,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    href: "/visa",
    label: "Panduan Visa",
    desc: "Imigrasi & dokumen",
    icon: IconPassport,
    color: "bg-rose-50 text-rose-600",
  },
];

const stats = [
  { value: "12,000+", label: "Anggota aktif" },
  { value: "1,200+", label: "Lowongan terdaftar" },
  { value: "350+", label: "Acara komunitas" },
  { value: "98%", label: "Kepuasan anggota" },
];

const testimonials = [
  {
    quote:
      "Berkat forum DUTA Connect, proses renew Employment Pass saya jadi jauh lebih mudah. Komunitasnya sangat responsif dan helpful!",
    name: "Budi Santoso",
    role: "Software Engineer · Kuala Lumpur",
    color: "#0d9488",
    initials: "BS",
  },
  {
    quote:
      "Saya pindah ke KL untuk kerja dan bingung cari tempat tinggal. Disini ketemu kos yang pas di budget dan banyak teman WNI baru.",
    name: "Siti Rahmawati",
    role: "Marketing Specialist · Petaling Jaya",
    color: "#db2777",
    initials: "SR",
  },
  {
    quote:
      "Panduan visanya lengkap banget. Dari EP sampai konversi SIM semua ada step-by-step. Menghemat waktu dan uang konsultan.",
    name: "Hendra Wijaya",
    role: "Civil Engineer · Bangsar",
    color: "#16a34a",
    initials: "HW",
  },
];

export default function HomePage() {
  const featuredThreads = forumThreads.slice(0, 3);
  const featuredJobs = jobs.slice(0, 4);
  const upcomingEvents = events
    .filter((e) => new Date(e.date).getTime() >= Date.now())
    .slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
              <IconSparkles className="h-3.5 w-3.5" />
              Komunitas #1 untuk WNI di Malaysia
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-6xl">
              Selamat datang di{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                DUTA Connect
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              Komunitas orang Indonesia di Malaysia. Temukan informasi visa,
              pekerjaan, properti, dan teman baru — semua terhimpun dalam satu
              platform terpercaya.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/register" size="lg">
                Daftar Gratis
                <IconArrowRight className="h-4.5 w-4.5" />
              </ButtonLink>
              <ButtonLink href="/forums" variant="outline" size="lg">
                Jelajahi Forum
              </ButtonLink>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-extrabold text-ink-900">
                    {s.value}
                  </dt>
                  <dd className="text-xs font-medium text-ink-500">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero visual */}
          <div className="relative hidden animate-fade-in lg:block">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-200/40 to-accent-200/30 blur-2xl" />
            <div className="relative rounded-3xl border border-white/60 bg-white/70 p-5 shadow-card-hover backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar initials="RI" color="#dc2626" size="sm" />
                  <div>
                    <p className="text-xs font-bold text-ink-800">Komunitas Aktif</p>
                    <p className="text-[11px] text-ink-400">12,480 anggota online</p>
                  </div>
                </div>
                <Badge tone="green">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                </Badge>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { who: "Budi", what: "membuat thread: Tips renew EP 2025", color: "#0d9488", initials: "BS" },
                  { who: "Siti", what: "mendaftar acara Halal Bihalal", color: "#db2777", initials: "SR" },
                  { who: "Andi", what: "melamar Software Engineer di TechCorp", color: "#2563eb", initials: "AP" },
                ].map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white/80 p-3"
                  >
                    <Avatar initials={a.initials} color={a.color} size="sm" />
                    <p className="text-xs text-ink-600">
                      <span className="font-bold text-ink-900">{a.who}</span> {a.what}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {featureCards.slice(0, 3).map((f) => {
                  const Icon = f.icon;
                  return (
                    <Link
                      key={f.href}
                      href={f.href}
                      className="flex flex-col items-center gap-1.5 rounded-xl border border-ink-100 bg-white/70 p-3 text-center transition-colors hover:border-brand-300 hover:bg-brand-50"
                    >
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${f.color}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[11px] font-semibold text-ink-700">{f.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE NAV */}
      <section className="container py-14">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {featureCards.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.href}
                href={f.href}
                className="card card-hover group flex flex-col items-center gap-2 p-5 text-center"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.color} transition-transform group-hover:scale-110`}>
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-sm font-bold text-ink-900">{f.label}</span>
                <span className="text-[11px] text-ink-400">{f.desc}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FORUMS */}
      <section className="container py-10">
        <SectionHeader
          title="Diskusi Terbaru"
          subtitle="Bergabung dalam percakapan dengan ribuan WNI lainnya."
          href="/forums"
          hrefLabel="Lihat semua diskusi"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredThreads.map((t) => (
            <ForumCard key={t.id} thread={t} />
          ))}
        </div>
      </section>

      {/* JOBS */}
      <section className="bg-ink-100/60 py-14">
        <div className="container">
          <SectionHeader
            title="Lowongan Kerja Pilihan"
            subtitle="Temukan peluang karir terbaik untuk WNI di Malaysia."
            href="/jobs"
            hrefLabel="Semua lowongan"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredJobs.map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="container py-14">
        <SectionHeader
          title="Acara Mendatang"
          subtitle="Ikuti acara seru dan perluas jaringan komunitas Anda."
          href="/events"
          hrefLabel="Semua acara"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Semua yang Anda butuhkan, dalam satu platform
            </h2>
            <p className="mt-4 text-ink-300">
              Dari informasi visa hingga mencari kos dan teman baru. DUTA Connect
              dirancang khusus untuk kebutuhan orang Indonesia di Malaysia.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: IconShield, title: "Terpercaya", desc: "Info terverifikasi & layanan bersertifikat dari komunitas yang sudah teruji." },
              { icon: IconUsers, title: "Aktif", desc: "Ribuan anggota aktif siap membantu menjawab pertanyaan Anda setiap hari." },
              { icon: IconStar, title: "Lengkap", desc: "Visa, kerja, properti, acara, dan layanan — semua dalam satu tempat." },
              { icon: IconCheck, title: "Gratis", desc: "Bergabung dan akses sebagian besar fitur tanpa biaya apa pun." },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-16">
        <SectionHeader
          title="Kata Mereka"
          subtitle="Cerita nyata dari anggota komunitas DUTA Connect."
          center
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-6">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} filled className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                <Avatar initials={t.initials} color={t.color} size="sm" />
                <div>
                  <p className="text-sm font-bold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-3xl brand-gradient px-6 py-14 text-center text-white sm:px-12">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Gabung Komunitas Hari Ini
            </h2>
            <p className="mt-4 text-brand-50">
              Daftar sekarang gratis dan mulai berinteraksi dengan ribuan WNI di
              Malaysia. Temukan dukungan, informasi, dan teman baru.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink
                href="/register"
                variant="secondary"
                size="lg"
                className="bg-white text-brand-700 hover:bg-brand-50"
              >
                Daftar Gratis
                <IconArrowRight className="h-4.5 w-4.5" />
              </ButtonLink>
              <ButtonLink
                href="/visa"
                size="lg"
                className="bg-brand-700 text-white hover:bg-brand-800"
              >
                Panduan Visa
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  title,
  subtitle,
  href,
  hrefLabel,
  center,
}: {
  title: string;
  subtitle?: string;
  href?: string;
  hrefLabel?: string;
  center?: boolean;
}) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-2xl text-center"
          : "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      }
    >
      <div>
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-ink-500">{subtitle}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          {hrefLabel}
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
