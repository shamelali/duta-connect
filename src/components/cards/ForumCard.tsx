import Link from "next/link";
import type { ForumThread } from "@/types";
import { getCategoryById } from "@/lib/data/forums";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import {
  IconChat,
  IconEye,
  IconBookmark,
} from "@/components/ui/Icons";
import { timeAgo, formatViews } from "@/lib/utils";

export function ForumRow({ thread }: { thread: ForumThread }) {
  const category = getCategoryById(thread.categoryId);
  const lastReply = thread.replies[thread.replies.length - 1];

  return (
    <Link
      href={`/forums/${thread.slug}`}
      className="card card-hover group flex items-start gap-4 p-4 sm:p-5"
    >
      <Avatar
        initials={thread.author.initials}
        color={thread.author.avatarColor}
        size="md"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {thread.pinned && (
            <Badge tone="accent" className="gap-1">
              <IconBookmark filled className="h-3 w-3" /> Disematkan
            </Badge>
          )}
          {category && (
            <Badge tone="brand" className="gap-1">
              <span>{category.icon}</span> {category.label}
            </Badge>
          )}
        </div>
        <h3 className="mt-1.5 line-clamp-1 font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
          {thread.title}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-sm text-ink-500">{thread.body}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-400">
          <span>
            Oleh <span className="font-semibold text-ink-600">{thread.author.name}</span>
          </span>
          <span>{timeAgo(thread.createdAt)}</span>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end gap-2 sm:flex">
        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1 text-ink-500">
            <IconChat className="h-3.5 w-3.5" /> {thread.replies.length}
          </span>
          <span className="inline-flex items-center gap-1 text-ink-400">
            <IconEye className="h-3.5 w-3.5" /> {formatViews(thread.views)}
          </span>
        </div>
        {lastReply && (
          <div className="flex items-center gap-1.5">
            <Avatar
              initials={lastReply.author.initials}
              color={lastReply.author.avatarColor}
              size="xs"
            />
            <span className="text-[11px] text-ink-400">{timeAgo(lastReply.createdAt)}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

export function ForumCard({ thread }: { thread: ForumThread }) {
  const category = getCategoryById(thread.categoryId);
  return (
    <Link
      href={`/forums/${thread.slug}`}
      className="card card-hover group flex flex-col p-5"
    >
      <div className="flex items-center gap-2">
        {category && (
          <Badge tone="brand" className="gap-1">
            <span>{category.icon}</span> {category.label}
          </Badge>
        )}
      </div>
      <h3 className="mt-3 line-clamp-2 font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
        {thread.title}
      </h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-500">
        {thread.body}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
        <div className="flex items-center gap-2">
          <Avatar
            initials={thread.author.initials}
            color={thread.author.avatarColor}
            size="xs"
          />
          <span className="text-xs font-medium text-ink-600">
            {thread.author.name}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-ink-400">
          <IconChat className="h-3.5 w-3.5" /> {thread.replies.length} balasan
        </span>
      </div>
    </Link>
  );
}
