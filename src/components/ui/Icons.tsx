import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function IconChat(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
export function IconBriefcase(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
export function IconHome(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}
export function IconCalendar(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
export function IconWrench(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4z" />
    </svg>
  );
}
export function IconPassport(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 2h13a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <circle cx="10.5" cy="11" r="2.5" />
      <path d="M7.5 16c.6-1.3 1.8-2 3-2s2.4.7 3 2" />
    </svg>
  );
}
export function IconHeart(p: IconProps & { filled?: boolean }) {
  const { filled, ...rest } = p;
  return (
    <svg {...base} {...rest} fill={filled ? "currentColor" : "none"}>
      <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5.5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7z" />
    </svg>
  );
}
export function IconBookmark(p: IconProps & { filled?: boolean }) {
  const { filled, ...rest } = p;
  return (
    <svg {...base} {...rest} fill={filled ? "currentColor" : "none"}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}
export function IconSearch(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
export function IconMapPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
export function IconEye(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
export function IconUsers(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1A4 4 0 0 1 16 11" />
    </svg>
  );
}
export function IconStar(p: IconProps & { filled?: boolean }) {
  const { filled, ...rest } = p;
  return (
    <svg {...base} {...rest} fill={filled ? "currentColor" : "none"}>
      <path d="m12 2 3 6.5 7 .9-5 4.8 1.3 7L12 17.8 5.4 21.2 6.7 14.2l-5-4.8 7-.9z" />
    </svg>
  );
}
export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
export function IconChevronRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
export function IconChevronDown(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
export function IconArrowLeft(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
export function IconMenu(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
export function IconX(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
export function IconArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
export function IconSparkles(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6 6 2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    </svg>
  );
}
export function IconGlobe(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}
export function IconPlus(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
export function IconLogout(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5M21 12H9" />
    </svg>
  );
}
export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
