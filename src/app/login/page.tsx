"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Avatar";
import { IconCheck } from "@/components/ui/Icons";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const name = email.split("@")[0] || "Pengguna";
    setTimeout(() => {
      login({
        id: `u-${Date.now()}`,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email,
        location: "Kuala Lumpur",
        profession: "Anggota Komunitas",
        initials: "",
        avatarColor: "",
      });
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="container grid min-h-[calc(100vh-12rem)] items-center py-12 lg:grid-cols-2 lg:gap-12">
      {/* Form */}
      <div className="mx-auto w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
            DUTA<span className="text-brand-600"> Connect</span>
          </span>
        </Link>

        <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
          Masuk ke Akun
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          Selamat datang kembali! Masuk untuk melanjutkan ke komunitas.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="label-field">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="input-field"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="label-field">Password</label>
              <Link href="#" className="mb-1.5 text-xs font-medium text-brand-600 hover:text-brand-700">
                Lupa password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPw ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-field pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-ink-400 hover:text-ink-600"
              >
                {showPw ? "Sembunyikan" : "Lihat"}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-ink-600">
            <input type="checkbox" className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
            Ingat saya
          </label>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Memproses..." : "Masuk"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-500">
          Belum punya akun?{" "}
          <Link href="/register" className="font-semibold text-brand-600 hover:text-brand-700">
            Daftar gratis
          </Link>
        </p>

        <div className="mt-8 rounded-xl border border-ink-200 bg-ink-50 p-4 text-xs text-ink-500">
          <p className="font-semibold text-ink-700">🔒 Demo mode</p>
          <p className="mt-1">
            Ini adalah demo. Masukkan email & password apa pun untuk menjelajahi
            pengalaman pengguna yang terautentikasi.
          </p>
        </div>
      </div>

      {/* Visual side */}
      <div className="relative hidden overflow-hidden rounded-3xl brand-gradient lg:block">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative flex h-full min-h-[500px] flex-col justify-center p-12 text-white">
          <h2 className="font-display text-3xl font-extrabold leading-tight">
            Bergabung dengan 12,000+ WNI di Malaysia
          </h2>
          <p className="mt-4 text-brand-50">
            Satu akun untuk semua — forum, lowongan kerja, properti, acara, dan
            layanan terpercaya.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Akses penuh ke forum & diskusi komunitas",
              "Simpan lowongan & properti favorit",
              "Daftar acara komunitas dengan satu klik",
              "Notifikasi info penting & peluang baru",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
