# DUTA Connect

> Komunitas orang Indonesia di Malaysia — platform terpadu untuk informasi, pekerjaan, properti, acara, layanan, dan panduan visa/imigrasi.

DUTA Connect is a production-grade community platform built for Indonesians living in Malaysia. It consolidates forums, job listings, housing, events, a trusted services directory, and a comprehensive visa/immigration guide into a single, cohesive experience — fully in Bahasa Indonesia.

## ✨ Features

| Module | Highlights |
| --- | --- |
| **Landing page** | Conversion-focused hero, live activity feed, featured content, testimonials, stats |
| **Forum** | Category filtering, search, pinned threads, threaded replies, like/bookmark, create-thread flow |
| **Jobs** | Category + type filters, remote toggle, search, salary ranges, verified badges, apply flow, scam-safety warning |
| **Housing** | Type filters, budget slider, image cards, furnished/amenity tags, contact/tour actions |
| **Events** | Category tabs, upcoming/past toggle, capacity progress bars, one-click registration |
| **Services** | Verified directory, rating/reviews, category filters, contact actions |
| **Visa Guide** | 9 visa types with steps, documents, tips; interactive FAQ accordion; official contacts |
| **Auth** | Login & register with password strength meter, demo-mode sessions, persisted via `localStorage` |
| **Dashboard** | Personal hub showing saved jobs/housing and registered events |

### Platform-wide
- 🔐 Client-side session with persisted state (saved items, registrations, likes)
- 🔔 Toast notification system
- 📱 Fully responsive with a mobile drawer navigation
- ♿ Accessibility: skip-to-content link, ARIA labels, semantic landmarks, focus rings
- 🔍 SEO: metadata, Open Graph, dynamic sitemap, robots, custom SVG favicon
- ⚡ Optimized: static + dynamic route splitting, `next/image`, font subsetting
- 🎨 Cohesive design system (Tailwind) with brand tokens, reusable UI primitives, and consistent components

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS with a custom design-token theme
- **Fonts:** Inter + Plus Jakarta Sans (via `next/font`)
- **State:** React Context + `localStorage` persistence (no backend required)
- **Data:** Typed seed modules under `src/lib/data`

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Scripts
```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # ESLint
npm run typecheck # tsc --noEmit
```

## 📁 Project Structure

```
src/
├── app/                    # App Router pages & layouts
│   ├── (listing pages)     # forums, jobs, housing, events, services
│   ├── (detail pages)      # [slug] dynamic routes
│   ├── visa/               # Comprehensive visa guide
│   ├── login | register | dashboard
│   ├── layout.tsx          # Root layout (providers, nav, footer, fonts)
│   └── globals.css         # Design system & Tailwind layers
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Button, Badge, Avatar, Icons, Feedback (toasts)
│   └── cards/              # Job/Housing/Event/Forum/Service cards
├── lib/
│   ├── data/               # Typed seed data (authors, forums, jobs, ...)
│   ├── store.tsx           # App context (auth, saved, likes, toasts)
│   └── utils.ts            # Helpers (cn, formatters, dates)
└── types/                  # Shared domain types
```

## 📝 Notes

- This is a **demo build** with client-side state; auth and content interactions are simulated and persisted locally in the browser.
- Images are sourced from Unsplash and require network access to display in full.
- Always verify immigration information with official sources (KBRI KL & Imigresen Malaysia).

---

© DUTA Connect — built for the WNI community in Malaysia.
