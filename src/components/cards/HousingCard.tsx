import Link from "next/link";
import type { Housing } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { SaveButton } from "@/components/ui/Feedback";
import { IconMapPin } from "@/components/ui/Icons";
import { HousingArt } from "@/components/ui/HousingArt";
import { housingTypeLabel } from "@/lib/jobUtils";
import { formatCurrency } from "@/lib/utils";

export function HousingCard({ item }: { item: Housing }) {
  return (
    <Link
      href={`/housing/${item.slug}`}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <HousingArt
          type={item.type}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge tone="gray" className="bg-white/90 backdrop-blur">
            {housingTypeLabel(item.type)}
          </Badge>
        </div>
        <div className="absolute right-3 top-3">
          <SaveButton category="housing" id={item.id} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
          {item.title}
        </h3>
        <p className="mt-1 inline-flex items-center gap-1 text-sm text-ink-500">
          <IconMapPin className="h-4 w-4 shrink-0" /> {item.location}
        </p>
        <div className="mt-3 flex items-center gap-3 text-xs text-ink-500">
          <span>🛏️ {item.bedrooms === 0 ? "Studio" : `${item.bedrooms} Kamar`}</span>
          <span>🚿 {item.bathrooms} KM</span>
          {item.furnished && <span>✓ Furnished</span>}
        </div>
        <div className="mt-auto flex items-baseline gap-1 pt-4">
          <span className="text-lg font-bold text-brand-700">
            {formatCurrency(item.pricePerMonth)}
          </span>
          <span className="text-xs text-ink-400">/bulan</span>
        </div>
      </div>
    </Link>
  );
}
