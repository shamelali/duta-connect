import Link from "next/link";
import type { Job } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { SaveButton } from "@/components/ui/Feedback";
import {
  IconMapPin,
  IconBriefcase,
  IconCheck,
} from "@/components/ui/Icons";
import { formatSalary, timeAgo } from "@/lib/utils";
import { jobTypeLabel } from "@/lib/jobUtils";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="card card-hover group flex flex-col p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
            style={{ backgroundColor: job.logoColor }}
          >
            {job.logoInitials}
          </span>
          <div className="min-w-0">
            <h3 className="line-clamp-1 font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
              {job.title}
            </h3>
            <p className="truncate text-sm text-ink-500">{job.company}</p>
          </div>
        </div>
        <SaveButton category="jobs" id={job.id} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone="brand">{jobTypeLabel(job.type)}</Badge>
        <Badge tone="gray">
          <IconBriefcase className="h-3 w-3" /> {job.category}
        </Badge>
        {job.verified && (
          <Badge tone="green">
            <IconCheck className="h-3 w-3" /> Terverifikasi
          </Badge>
        )}
        {job.remote && <Badge tone="purple">Remote</Badge>}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        <span className="inline-flex items-center gap-1 text-sm text-ink-500">
          <IconMapPin className="h-4 w-4" /> {job.location}
        </span>
        <div className="text-right">
          <p className="text-sm font-bold text-brand-700">
            {formatSalary(job.salaryMin, job.salaryMax)}
          </p>
          <p className="text-[11px] text-ink-400">per bulan</p>
        </div>
      </div>
      <p className="mt-2 text-[11px] text-ink-400">{timeAgo(job.postedAt)}</p>
    </Link>
  );
}
