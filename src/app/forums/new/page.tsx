"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { forumCategories } from "@/lib/data/forums";
import { Button, ButtonLink } from "@/components/ui/Button";
import { PageHeader, BackLink } from "@/components/ui/Primitives";
import { useApp } from "@/lib/store";

export default function NewThreadPage() {
  const router = useRouter();
  const { user, pushToast } = useApp();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(forumCategories[0].id);
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      router.push("/login");
      return;
    }
    if (!title.trim() || !body.trim()) return;
    pushToast("Diskusi berhasil dipublikasikan! 🎉", "success");
    setTimeout(() => router.push("/forums"), 600);
  };

  return (
    <>
      <PageHeader
        eyebrow="Forum"
        title="Mulai Diskusi Baru"
        subtitle="Bagikan pertanyaan, pengalaman, atau tips Anda dengan komunitas WNI di Malaysia."
      />
      <div className="container py-8">
        <div className="mb-5">
          <BackLink href="/forums" label="Kembali ke Forum" />
        </div>

        {!user && (
          <div className="card mb-6 flex flex-col items-start gap-3 border-brand-200 bg-brand-50/50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-ink-900">Anda belum masuk</p>
              <p className="text-sm text-ink-500">
                Masuk atau daftar untuk memulai diskusi di forum komunitas.
              </p>
            </div>
            <div className="flex gap-2">
              <ButtonLink href="/login" size="sm">
                Masuk
              </ButtonLink>
              <ButtonLink href="/register" variant="outline" size="sm">
                Daftar
              </ButtonLink>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card max-w-3xl space-y-5 p-6 sm:p-8">
          <div>
            <label htmlFor="title" className="label-field">
              Judul Diskusi
            </label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Rekomendasi klinik gigi di area KL..."
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="category" className="label-field">
              Kategori
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-field"
            >
              {forumCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="body" className="label-field">
              Isi Diskusi
            </label>
            <textarea
              id="body"
              required
              rows={8}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Tuliskan pertanyaan atau cerita Anda secara detail agar mudah dibantu komunitas..."
              className="input-field resize-y"
            />
          </div>

          <div>
            <label htmlFor="tags" className="label-field">
              Tag <span className="font-normal text-ink-400">(pisahkan dengan koma)</span>
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="visa, kl, renew"
              className="input-field"
            />
          </div>

          <div className="flex items-center justify-between border-t border-ink-100 pt-5">
            <p className="text-xs text-ink-400">
              Dengan memposting, Anda menyetujui pedoman komunitas kami.
            </p>
            <Button type="submit" disabled={!title.trim() || !body.trim()}>
              Publikasikan
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
