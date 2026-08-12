"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useApp } from "@/lib/store";
import { Avatar, LogoMark } from "@/components/ui/Avatar";
import { ButtonLink } from "@/components/ui/Button";
import {
  IconMenu,
  IconX,
  IconChat,
  IconBriefcase,
  IconHome,
  IconCalendar,
  IconWrench,
  IconPassport,
  IconLogout,
} from "@/components/ui/Icons";

const navItems = [
  { href: "/forums", label: "Forum", icon: IconChat },
  { href: "/jobs", label: "Lowongan", icon: IconBriefcase },
  { href: "/housing", label: "Properti", icon: IconHome },
  { href: "/events", label: "Acara", icon: IconCalendar },
  { href: "/services", label: "Layanan", icon: IconWrench },
  { href: "/visa", label: "Visa", icon: IconPassport },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "border-b border-ink-200/80 bg-white/85 backdrop-blur-lg"
          : "border-b border-transparent bg-white/60 backdrop-blur"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="DUTA Connect — Beranda"
        >
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-extrabold tracking-tight text-ink-900">
              DUTA<span className="text-brand-600"> Connect</span>
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-ink-400 sm:block">
              Komunitas WNI di Malaysia
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-600 hover:bg-ink-100 hover:text-ink-900"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-full border border-ink-200 py-1 pl-1 pr-3 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <Avatar
                  initials={user.initials}
                  color={user.avatarColor}
                  size="sm"
                />
                <span className="max-w-[120px] truncate text-sm font-semibold text-ink-800">
                  {user.name.split(" ")[0]}
                </span>
              </Link>
              <button
                onClick={logout}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-800"
                aria-label="Keluar"
              >
                <IconLogout className="h-4.5 w-4.5" />
              </button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <ButtonLink href="/login" variant="ghost" size="sm">
                Masuk
              </ButtonLink>
              <ButtonLink href="/register" size="sm">
                Daftar Gratis
              </ButtonLink>
            </div>
          )}

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-16 z-40 bg-ink-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="animate-fade-up border-t border-ink-200 bg-white px-4 pb-6 pt-3 shadow-card-hover">
            <ul className="grid gap-1">
              {navItems.map((item) => {
                const active = pathname.startsWith(item.href);
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors",
                        active
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink-700 hover:bg-ink-100"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-ink-200 pt-4">
              {user ? (
                <>
                  <ButtonLink href="/dashboard" variant="outline" size="sm">
                    Dashboard
                  </ButtonLink>
                  <button
                    onClick={() => logout()}
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-xl px-3.5 text-sm font-semibold text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
                  >
                    Keluar
                  </button>
                </>
              ) : (
                <>
                  <ButtonLink href="/login" variant="outline" size="sm">
                    Masuk
                  </ButtonLink>
                  <ButtonLink href="/register" size="sm">
                    Daftar Gratis
                  </ButtonLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
