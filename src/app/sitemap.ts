import type { MetadataRoute } from "next";
import { forumThreads } from "@/lib/data/forums";
import { jobs } from "@/lib/data/jobs";
import { housingListings } from "@/lib/data/housing";
import { events } from "@/lib/data/events";
import { services } from "@/lib/data/services";

const BASE = "https://duta-connect.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/forums",
    "/forums/new",
    "/jobs",
    "/housing",
    "/events",
    "/services",
    "/visa",
    "/login",
    "/register",
    "/privacy",
    "/terms",
    "/dashboard",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamic = [
    ...forumThreads.map((t) => `/forums/${t.slug}`),
    ...jobs.map((j) => `/jobs/${j.slug}`),
    ...housingListings.map((h) => `/housing/${h.slug}`),
    ...events.map((e) => `/events/${e.slug}`),
    ...services.map((s) => `/services/${s.slug}`),
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamic];
}
