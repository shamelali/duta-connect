import Link from "next/link";
import type { Service } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { IconStar, IconMapPin, IconCheck, IconPhone } from "@/components/ui/Icons";
import { formatPrice } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card card-hover group flex flex-col p-5"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl">
          {service.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-1 font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
            {service.name}
          </h3>
          <p className="truncate text-sm text-ink-500">{service.provider}</p>
        </div>
        {service.verified && (
          <Badge tone="green">
            <IconCheck className="h-3 w-3" /> Terverifikasi
          </Badge>
        )}
      </div>

      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-500">
        {service.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} tone="gray">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3 text-xs text-ink-500">
        <span className="inline-flex items-center gap-1">
          <IconStar filled className="h-3.5 w-3.5 text-amber-400" />
          <span className="font-semibold text-ink-700">{service.rating}</span>
          <span className="text-ink-400">({service.reviewCount})</span>
        </span>
        <span className="inline-flex items-center gap-1">
          <IconMapPin className="h-3.5 w-3.5" /> {service.location}
        </span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm font-bold text-brand-700">
          {formatPrice(service.priceFrom)}
          {service.priceFrom > 0 && (
            <span className="text-[11px] font-normal text-ink-400"> mulai dari</span>
          )}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-400">
          <IconPhone className="h-3.5 w-3.5" /> {service.contact}
        </span>
      </div>
    </Link>
  );
}
