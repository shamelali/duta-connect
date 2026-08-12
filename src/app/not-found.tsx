import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Avatar";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <LogoMark className="h-12 w-12" />
      <p className="mt-8 font-display text-7xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-2 font-display text-2xl font-extrabold text-ink-900">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 max-w-md text-sm text-ink-500">
        Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. Coba kembali
        ke beranda atau jelajahi komunitas kami.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Kembali ke Beranda</ButtonLink>
        <ButtonLink href="/forums" variant="outline">
          Jelajahi Forum
        </ButtonLink>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {[
          { href: "/jobs", label: "Lowongan" },
          { href: "/housing", label: "Properti" },
          { href: "/events", label: "Acara" },
          { href: "/visa", label: "Visa" },
          { href: "/services", label: "Layanan" },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full border border-ink-200 bg-white px-4 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
