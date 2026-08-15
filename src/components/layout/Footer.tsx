import Link from "next/link";
import { LogoMark } from "@/components/ui/Avatar";
import { IconGlobe, IconShield } from "@/components/ui/Icons";

const footerLinks = [
  {
    title: "Komunitas",
    links: [
      { label: "Forum Diskusi", href: "/forums" },
      { label: "Acara & Event", href: "/events" },
      { label: "Direktori Layanan", href: "/services" },
      { label: "Daftar Akun", href: "/register" },
    ],
  },
  {
    title: "Informasi",
    links: [
      { label: "Panduan Visa", href: "/visa" },
      { label: "Lowongan Kerja", href: "/jobs" },
      { label: "Properti & Kos", href: "/housing" },
      { label: "FAQ Imigrasi", href: "/visa#faq" },
    ],
  },
  {
    title: "Bantuan Darurat",
    links: [
      { label: "KBRI KL: +603-2116 4000", href: "tel:+60321164000" },
      { label: "Hotline 24 Jam: +6012-348 7927", href: "tel:+60123487927" },
      { label: "Imigresen Malaysia", href: "https://www.imi.gov.my" },
      { label: "Portal ESD", href: "https://esd.imi.gov.my" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
                DUTA<span className="text-brand-600"> Connect</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Platform komunitas terpadu untuk orang Indonesia di Malaysia.
              Temukan informasi, pekerjaan, properti, dan teman baru — semua di
              satu tempat.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                <IconShield className="h-3.5 w-3.5" /> Ruang saling bantu
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-600">
                <IconGlobe className="h-3.5 w-3.5" /> Konteks Malaysia
              </span>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-ink-900">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} DUTA Connect. Dibuat untuk komunitas WNI
            di Malaysia. Selalu verifikasi info resmi dengan KBRI & Imigresen.
          </p>
          <div className="flex items-center gap-4 text-xs text-ink-400">
            <Link href="/privacy" className="hover:text-ink-600">
              Privasi
            </Link>
            <Link href="/terms" className="hover:text-ink-600">
              Ketentuan
            </Link>
            <span className="inline-flex items-center gap-1">
              <IconGlobe className="h-3.5 w-3.5" /> Bahasa Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
