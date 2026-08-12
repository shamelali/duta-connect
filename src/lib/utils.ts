export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[]
  | { [key: string]: boolean | undefined | null };

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
    } else if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) out.push(inner);
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) out.push(key);
      }
    }
  }
  return out.join(" ");
}

const ID_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const ID_MONTHS_FULL = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function formatDate(iso: string, opts: { full?: boolean } = {}): string {
  const d = new Date(iso);
  const months = opts.full ? ID_MONTHS_FULL : ID_MONTHS;
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatShortDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

export function formatDayMonth(iso: string): { day: string; month: string } {
  const d = new Date(iso);
  return { day: String(d.getDate()), month: ID_MONTHS[d.getMonth()].toUpperCase() };
}

export function formatTimeRange(startISO: string, timeLabel: string): string {
  return timeLabel;
}

export function timeAgo(iso: string): string {
  const now = Date.now();
  const then = new Date(iso).getTime();
  const diff = Math.max(0, now - then);
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (minutes < 60) return `${Math.max(1, minutes)} menit lalu`;
  if (hours < 24) return `${hours} jam lalu`;
  if (days < 30) return `${days} hari lalu`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} bulan lalu`;
  return `${Math.floor(days / 365)} tahun lalu`;
}

export function formatCurrency(
  amount: number,
  currency: string = "RM"
): string {
  return `${currency} ${amount.toLocaleString("en-MY")}`;
}

export function formatSalary(min: number, max: number): string {
  return `RM ${min.toLocaleString("en-MY")} - ${max.toLocaleString("en-MY")}`;
}

export function formatPrice(price: number): string {
  if (price === 0) return "Gratis";
  return `RM ${price.toLocaleString("en-MY")}`;
}

export function formatViews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}rb`;
  return String(n);
}

export function pluralize(n: number, singular: string, plural?: string): string {
  return n === 1 ? singular : plural ?? `${singular}`;
}

export function isUpcoming(iso: string): boolean {
  return new Date(iso).getTime() >= Date.now();
}

export function capacityPercent(registered: number, capacity: number): number {
  return Math.min(100, Math.round((registered / capacity) * 100));
}
