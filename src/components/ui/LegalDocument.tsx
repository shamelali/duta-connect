import Link from "next/link";
import { IconArrowLeft } from "@/components/ui/Icons";

export function LegalDocument({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <header className="border-b border-ink-200 bg-ink-50">
        <div className="container py-12 sm:py-16">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
            <IconArrowLeft className="h-4 w-4" /> Kembali ke beranda
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600">{description}</p>
          <p className="mt-5 text-sm font-medium text-ink-500">Terakhir diperbarui: 15 Agustus 2026</p>
        </div>
      </header>
      <div className="container-tight py-12 sm:py-16">
        <article className="space-y-10 text-[15px] leading-7 text-ink-700 [&_a]:font-semibold [&_a]:text-brand-700 [&_a:hover]:text-brand-800 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-ink-900 [&_li]:pl-1 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </article>
      </div>
    </div>
  );
}
