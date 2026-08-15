import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import {
  IconArrowRight,
  IconBriefcase,
  IconCalendar,
  IconChat,
  IconCheck,
  IconChevronRight,
  IconGlobe,
  IconHome,
  IconPassport,
  IconSearch,
  IconShield,
  IconSparkles,
  IconUsers,
  IconWrench,
} from "@/components/ui/Icons";
import { Avatar } from "@/components/ui/Avatar";
import { ForumCard } from "@/components/cards/ForumCard";
import { forumThreads } from "@/lib/data/forums";

const journeys = [
  {
    href: "/visa",
    label: "Urus visa & dokumen",
    desc: "Pahami pilihan dan persiapannya",
    icon: IconPassport,
    color: "bg-rose-50 text-rose-600",
  },
  {
    href: "/jobs",
    label: "Cari peluang kerja",
    desc: "Temukan karier yang relevan",
    icon: IconBriefcase,
    color: "bg-brand-50 text-brand-700",
  },
  {
    href: "/housing",
    label: "Temukan tempat tinggal",
    desc: "Kos, apartemen, atau roommate",
    icon: IconHome,
    color: "bg-violet-50 text-violet-600",
  },
  {
    href: "/forums",
    label: "Tanya komunitas",
    desc: "Dapatkan jawaban dari pengalaman nyata",
    icon: IconChat,
    color: "bg-blue-50 text-blue-600",
  },
];

const trustPoints = [
  {
    icon: IconShield,
    title: "Lebih aman untuk berbagi",
    desc: "Panduan komunitas dan fitur pelaporan membantu menjaga ruang diskusi tetap nyaman.",
  },
  {
    icon: IconGlobe,
    title: "Konteks lokal Malaysia",
    desc: "Informasi disusun untuk kebutuhan WNI—dari dokumen, karier, hingga kehidupan sehari-hari.",
  },
  {
    icon: IconUsers,
    title: "Dibangun untuk saling bantu",
    desc: "Tanyakan hal yang spesifik dan belajar dari pengalaman sesama orang Indonesia.",
  },
];

const guideLinks = [
  { label: "Employment Pass", meta: "Profesional & pekerja terampil" },
  { label: "Dependent Pass", meta: "Pasangan & keluarga" },
  { label: "Student Pass", meta: "Pelajar & mahasiswa" },
];

export default function HomePage() {
  const featuredThreads = forumThreads.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#073d35] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(78,222,176,.35), transparent 28%), radial-gradient(circle at 85% 10%, rgba(249,115,22,.22), transparent 24%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="container relative grid items-center gap-12 pb-24 pt-14 sm:pt-18 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-28 lg:pt-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-100 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Ruang bersama WNI di Malaysia
            </div>

            <h1 className="mt-6 max-w-2xl font-display text-[2.7rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4rem]">
              Jalani Malaysia dengan lebih percaya diri.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-emerald-50/80 sm:text-lg sm:leading-8">
              Temukan panduan praktis, peluang, tempat tinggal, dan jawaban dari
              sesama orang Indonesia—semuanya dalam satu ruang komunitas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/register"
                size="lg"
                className="bg-white text-[#075b4b] shadow-lg shadow-black/10 hover:bg-emerald-50"
              >
                Gabung komunitas
                <IconArrowRight className="h-4.5 w-4.5" />
              </ButtonLink>
              <ButtonLink
                href="/forums"
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                Jelajahi diskusi
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-50/75">
              <span className="inline-flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-emerald-300" /> Akses gratis
              </span>
              <span className="inline-flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-emerald-300" /> Berbahasa Indonesia
              </span>
              <span className="inline-flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-emerald-300" /> Khusus konteks Malaysia
              </span>
            </div>
          </div>

          <div className="relative animate-fade-in lg:pl-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] border border-white/15 bg-emerald-950 shadow-2xl shadow-black/25 sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src="/images/community-hero.jpg"
                alt="Sekelompok orang Indonesia berbincang di sebuah ruang komunitas di Kuala Lumpur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052e28]/70 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#052e28]/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <IconGlobe className="h-3.5 w-3.5 text-emerald-300" />
                Kuala Lumpur · Malaysia
              </div>
            </div>

            <div className="relative -mt-14 ml-5 mr-3 rounded-2xl border border-white/70 bg-white/95 p-4 text-ink-900 shadow-xl shadow-black/15 backdrop-blur-md sm:ml-auto sm:mr-6 sm:max-w-md sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2" aria-hidden="true">
                  <Avatar initials="BS" color="#0d9488" size="sm" ring />
                  <Avatar initials="SR" color="#db2777" size="sm" ring />
                  <Avatar initials="HW" color="#2563eb" size="sm" ring />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink-900">
                    Ada tempat untuk setiap pertanyaan
                  </p>
                  <p className="mt-0.5 text-xs leading-5 text-ink-500">
                    Bertanya, berbagi pengalaman, dan tumbuh bersama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task navigator */}
      <section className="relative z-10 -mt-9 px-4 sm:-mt-10 sm:px-6" aria-labelledby="journey-title">
        <div className="mx-auto max-w-7xl rounded-[1.6rem] border border-ink-200/80 bg-white p-3 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.28)] sm:p-5 lg:p-6">
          <div className="flex flex-col gap-2 px-2 pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                Mulai di sini
              </p>
              <h2 id="journey-title" className="mt-1 font-display text-xl font-extrabold tracking-tight text-ink-900 sm:text-2xl">
                Apa yang Anda butuhkan hari ini?
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
              Lihat semua layanan <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {journeys.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-[104px] items-center gap-4 rounded-2xl border border-transparent p-3.5 transition-all hover:border-ink-200 hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/20"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-sm font-bold text-ink-900 group-hover:text-brand-700">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-ink-500">
                      {item.desc}
                    </span>
                  </span>
                  <IconChevronRight className="h-4 w-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community discussions */}
      <section className="container py-20 sm:py-24" aria-labelledby="discussions-title">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              <IconChat className="h-4 w-4" /> Dari komunitas
            </span>
            <h2 id="discussions-title" className="mt-4 max-w-md font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink-900 sm:text-4xl">
              Jawaban yang lahir dari pengalaman nyata.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-ink-600">
              Tidak perlu mencari sendirian. Temukan percakapan tentang hidup,
              bekerja, dan beradaptasi di Malaysia.
            </p>
            <ButtonLink href="/forums" variant="outline" className="mt-7">
              Lihat semua diskusi
              <IconArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredThreads.map((thread, index) => (
              <div key={thread.id} className={index === 0 ? "sm:col-span-2" : ""}>
                <ForumCard thread={thread} />
              </div>
            ))}
            <Link
              href="/forums/new"
              className="group flex min-h-[188px] flex-col justify-between rounded-2xl border border-dashed border-brand-300 bg-brand-50/70 p-5 transition-colors hover:border-brand-500 hover:bg-brand-50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm">
                <IconSparkles className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-ink-900">
                  Belum menemukan jawabannya?
                </span>
                <span className="mt-1.5 block text-sm leading-6 text-ink-600">
                  Mulai diskusi baru dan tanyakan langsung kepada komunitas.
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                  Tulis pertanyaan <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Opportunity + guidance */}
      <section className="bg-[#f1f6f4] py-20 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              Langkah berikutnya
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.025em] text-ink-900 sm:text-4xl">
              Dari rencana menjadi lebih pasti.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-600">
              Jelajahi peluang dan pahami hal penting sebelum mengambil keputusan.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0b2926] p-6 text-white shadow-lg sm:p-8">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-400/15 blur-2xl" aria-hidden="true" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                  <IconBriefcase className="h-6 w-6" />
                </span>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                  Karier di Malaysia
                </p>
                <h3 className="mt-3 max-w-md font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  Temukan pekerjaan yang cocok dengan langkah Anda.
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-emerald-50/70">
                  Telusuri peluang berdasarkan bidang, lokasi, tipe kerja, dan opsi remote.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Teknologi", "Marketing", "Finance", "Hospitality", "Creative"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-emerald-50/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <ButtonLink href="/jobs" className="mt-8 bg-white text-[#075b4b] hover:bg-emerald-50">
                  Jelajahi lowongan <IconArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-ink-200 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                    Panduan dokumen
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
                    Kenali visa yang sesuai untuk Anda.
                  </h3>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 sm:flex">
                  <IconPassport className="h-6 w-6" />
                </span>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-6 text-ink-600">
                Mulai dari gambaran umum, lalu selalu konfirmasi persyaratan terbaru dengan sumber resmi.
              </p>

              <div className="mt-6 divide-y divide-ink-100 border-y border-ink-100">
                {guideLinks.map((guide) => (
                  <Link key={guide.label} href="/visa" className="group flex items-center gap-3 py-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-xs font-extrabold text-brand-700">
                      {guide.label.split(" ").map((word) => word[0]).join("")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-ink-900 group-hover:text-brand-700">{guide.label}</span>
                      <span className="mt-0.5 block text-xs text-ink-500">{guide.meta}</span>
                    </span>
                    <IconChevronRight className="h-4 w-4 text-ink-300 group-hover:text-brand-600" />
                  </Link>
                ))}
              </div>
              <Link href="/visa" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800">
                Buka semua panduan <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="container py-20 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              Dibangun dengan kepedulian
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink-900 sm:text-4xl">
              Informasi yang terasa dekat, ruang yang terasa aman.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-4 rounded-[1.75rem] border border-ink-200 bg-ink-50 p-5 sm:grid-cols-3 sm:p-7">
          {[
            { icon: IconCalendar, label: "Temukan kegiatan", desc: "Meetup, workshop, dan ruang berjejaring", href: "/events" },
            { icon: IconWrench, label: "Cari layanan", desc: "Direktori kebutuhan sehari-hari", href: "/services" },
            { icon: IconSearch, label: "Jelajahi topik", desc: "Mulai dari hal yang paling penting bagi Anda", href: "/forums" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.label} href={item.href} className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink-900 group-hover:text-brand-700">{item.label}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-ink-500">{item.desc}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0a3d35] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <IconUsers className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-[-0.025em] sm:text-4xl">
              Anda tidak harus menjalani semuanya sendiri.
            </h2>
            <p className="mt-4 text-base leading-7 text-emerald-50/75">
              Bergabung, temukan informasi yang Anda butuhkan, dan bantu sesama WNI lewat pengalaman Anda.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/register" size="lg" className="bg-white text-[#075b4b] hover:bg-emerald-50">
                Daftar gratis <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/forums" variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10 hover:text-white">
                Lihat komunitas
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
