"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Avatar";
import { IconCheck } from "@/components/ui/Icons";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";

const visaOptions = [
  "Employment Pass",
  "Professional Visit Pass",
  "Dependent Pass",
  "Student Pass",
  "Social Visit Pass",
  "MM2H",
  "PR",
  "Lainnya",
];

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useApp();
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    visa: "",
    years: "",
    profession: "",
    bio: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const strength = passwordStrength(form.password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) {
      setError("Password dan konfirmasi tidak cocok.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      login({
        id: `u-${Date.now()}`,
        name: form.name,
        email: form.email,
        location: form.location || "Malaysia",
        profession: form.profession || "Anggota Komunitas",
        visa: form.visa,
        initials: "",
        avatarColor: "",
      });
      router.push("/dashboard");
    }, 700);
  };

  return (
    <div className="container grid min-h-[calc(100vh-12rem)] items-center py-12 lg:grid-cols-2 lg:gap-12">
      <div className="mx-auto w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
            DUTA<span className="text-brand-600"> Connect</span>
          </span>
        </Link>

        <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
          Daftar Akun Baru
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          Gratis selamanya. Bergabunglah dengan komunitas WNI di Malaysia.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Field label="Nama Lengkap" required>
            <input
              required
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Nama lengkap Anda"
              className="input-field"
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="nama@email.com"
              className="input-field"
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Lokasi">
              <input
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
                placeholder="Kuala Lumpur"
                className="input-field"
              />
            </Field>
            <Field label="Tahun di MY">
              <input
                type="number"
                min={0}
                value={form.years}
                onChange={(e) => set("years", e.target.value)}
                placeholder="2"
                className="input-field"
              />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Jenis Visa">
              <select
                value={form.visa}
                onChange={(e) => set("visa", e.target.value)}
                className="input-field"
              >
                <option value="">Pilih visa</option>
                {visaOptions.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </Field>
            <Field label="Profesi">
              <input
                value={form.profession}
                onChange={(e) => set("profession", e.target.value)}
                placeholder="Software Engineer"
                className="input-field"
              />
            </Field>
          </div>
          <Field label="Bio singkat">
            <textarea
              rows={2}
              value={form.bio}
              onChange={(e) => set("bio", e.target.value)}
              placeholder="Ceritakan sedikit tentang diri Anda..."
              className="input-field resize-none"
            />
          </Field>
          <Field label="Password" required>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => set("password", e.target.value)}
              placeholder="Min. 6 karakter"
              className="input-field"
            />
            {form.password && (
              <div className="mt-2 flex items-center gap-2">
                <div className="flex h-1.5 flex-1 gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-full flex-1 rounded-full transition-colors",
                        i < strength.score ? strength.color : "bg-ink-200"
                      )}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-ink-500">{strength.label}</span>
              </div>
            )}
          </Field>
          <Field label="Konfirmasi Password" required>
            <input
              type="password"
              required
              value={form.confirm}
              onChange={(e) => set("confirm", e.target.value)}
              placeholder="Ulangi password"
              className="input-field"
            />
          </Field>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <label className="flex items-start gap-2 text-sm text-ink-600">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
            <span>
              Saya menyetujui{" "}
              <Link href="/terms" className="font-medium text-brand-600">Ketentuan</Link> dan{" "}
              <Link href="/privacy" className="font-medium text-brand-600">Kebijakan Privasi</Link>.
            </span>
          </label>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Membuat akun..." : "Daftar Sekarang"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-500">
          Sudah punya akun?{" "}
          <Link href="/login" className="font-semibold text-brand-600 hover:text-brand-700">
            Masuk
          </Link>
        </p>
      </div>

      {/* Visual */}
      <div className="relative hidden overflow-hidden rounded-3xl bg-ink-900 lg:block">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 20%, #10b282 0, transparent 40%)" }} />
        <div className="relative flex h-full min-h-[500px] flex-col justify-center p-12 text-white">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">
            Gratis selamanya
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight">
            Mulai perjalanan Anda bersama komunitas
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              { t: "Forum aktif", d: "Ribuan diskusi & jawaban dari sesama WNI." },
              { t: "Lowongan terverifikasi", d: "Kesempatan karir di perusahaan terpercaya." },
              { t: "Acara komunitas", d: "Meetup, workshop, dan silaturahmi rutin." },
              { t: "Panduan visa lengkap", d: "Info imigrasi yang akurat dan terkini." },
            ].map((f) => (
              <li key={f.t} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                  <IconCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold">{f.t}</p>
                  <p className="text-sm text-ink-400">{f.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label-field">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function passwordStrength(pw: string) {
  let score = 0;
  if (pw.length >= 6) score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) || /[^A-Za-z0-9]/.test(pw)) score++;
  const labels = ["Lemah", "Kurang", "Cukup", "Baik", "Kuat"];
  const colors = ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-brand-500", "bg-brand-600"];
  return { score, label: labels[score], color: colors[score] };
}
