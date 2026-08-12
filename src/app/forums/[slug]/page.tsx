"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { forumThreads, getCategoryById } from "@/lib/data/forums";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb, BackLink } from "@/components/ui/Primitives";
import { LikeButton } from "@/components/ui/Feedback";
import {
  IconEye,
  IconChat,
  IconClock,
  IconBookmark,
} from "@/components/ui/Icons";
import { formatDate, timeAgo, formatViews } from "@/lib/utils";
import { useApp } from "@/lib/store";

export default function ForumDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const thread = forumThreads.find((t) => t.slug === params.slug);
  if (!thread) notFound();
  const category = getCategoryById(thread.categoryId);
  const { user } = useApp();
  const [replies, setReplies] = useState(thread.replies);
  const [draft, setDraft] = useState("");

  const submitReply = () => {
    if (!user) {
      alert("Silakan masuk untuk membalas diskusi.");
      return;
    }
    if (!draft.trim()) return;
    const newReply = {
      id: `r-${Date.now()}`,
      author: {
        id: user.id,
        name: user.name,
        initials: user.initials,
        avatarColor: user.avatarColor,
      },
      body: draft.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
    };
    setReplies((prev) => [...prev, newReply]);
    setDraft("");
  };

  return (
    <div className="container py-8">
      <div className="mb-5">
        <BackLink href="/forums" label="Kembali ke Forum" />
      </div>
      <Breadcrumb
        items={[
          { label: "Forum", href: "/forums" },
          ...(category ? [{ label: category.label }] : []),
          { label: thread.title },
        ]}
      />

      {/* Thread */}
      <article className="card mt-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {thread.pinned && (
            <Badge tone="accent">
              <IconBookmark filled className="h-3 w-3" /> Disematkan
            </Badge>
          )}
          {category && (
            <Badge tone="brand">
              {category.icon} {category.label}
            </Badge>
          )}
          {thread.tags.map((tag) => (
            <Badge key={tag} tone="gray">
              #{tag}
            </Badge>
          ))}
        </div>

        <h1 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
          {thread.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-b border-ink-100 pb-5 text-sm text-ink-500">
          <div className="flex items-center gap-2">
            <Avatar
              initials={thread.author.initials}
              color={thread.author.avatarColor}
              size="sm"
            />
            <div>
              <p className="font-semibold text-ink-800">
                {thread.author.name}
                {thread.author.verified && (
                  <span className="ml-1 text-brand-500" title="Terverifikasi">✓</span>
                )}
              </p>
              <p className="text-xs text-ink-400">
                {thread.author.profession} · {thread.author.location}
              </p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4 text-xs text-ink-400">
            <span className="inline-flex items-center gap-1">
              <IconClock className="h-3.5 w-3.5" /> {timeAgo(thread.createdAt)}
            </span>
            <span className="inline-flex items-center gap-1">
              <IconEye className="h-3.5 w-3.5" /> {formatViews(thread.views)} dilihat
            </span>
          </div>
        </div>

        <div className="prose-id mt-5 max-w-none whitespace-pre-line text-ink-700">
          {thread.body}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <LikeButton id={thread.id} count={thread.likes} />
          <Button variant="ghost" size="sm">
            <IconChat className="h-4 w-4" /> Balas
          </Button>
        </div>
      </article>

      {/* Replies */}
      <section className="mt-8">
        <h2 className="mb-4 font-display text-lg font-bold text-ink-900">
          {replies.length} Balasan
        </h2>
        <div className="space-y-3">
          {replies.map((r) => (
            <div key={r.id} className="card p-5">
              <div className="flex items-start gap-3">
                <Avatar
                  initials={r.author.initials}
                  color={r.author.avatarColor}
                  size="sm"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <p className="font-semibold text-ink-800">{r.author.name}</p>
                    <span className="text-xs text-ink-400">
                      {timeAgo(r.createdAt)}
                    </span>
                  </div>
                  <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-ink-700">
                    {r.body}
                  </p>
                  <div className="mt-3">
                    <LikeButton id={r.id} count={r.likes} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply box */}
        <div className="card mt-6 p-5">
          <h3 className="mb-3 font-display text-base font-bold text-ink-900">
            Tulis Balasan
          </h3>
          {user ? (
            <div className="flex gap-3">
              <Avatar
                initials={user.initials}
                color={user.avatarColor}
                size="md"
              />
              <div className="flex-1">
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  rows={4}
                  placeholder="Bagikan pemikiran atau jawaban Anda..."
                  className="input-field resize-none"
                />
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs text-ink-400">
                    Bersikap sopan dan hormat sesuai pedoman komunitas.
                  </p>
                  <Button onClick={submitReply} disabled={!draft.trim()}>
                    Kirim Balasan
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-ink-50 p-6 text-center">
              <p className="text-sm text-ink-600">
                Anda harus masuk untuk berpartisipasi dalam diskusi.
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <a href="/login" className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700">
                  Masuk
                </a>
                <a href="/register" className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-ink-300 bg-white px-4 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700">
                  Daftar Gratis
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
