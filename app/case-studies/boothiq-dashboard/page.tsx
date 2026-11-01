"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "Photo Booth · Web",
  status: "In Progress",
  name: "BoothIQ Web Dashboard",
  tagline: "boothiq.com: the web dashboard, admin panel, store, template marketplace and docs for a photo booth business.",
  summary:
    "BoothIQ sells coin-operated photo booths and the software that runs them. We built the web side of the platform: a dashboard where operators watch revenue, hardware health and alerts for every booth, an admin panel for the BoothIQ team, and the public site with a store, a print-template marketplace and operator documentation. It runs on the same API as the kiosk software and the mobile app we also built.",
  metrics: [
    { value: "389", label: "Commits since Jan 2026" },
    { value: "4", label: "Surfaces: site, dashboard, admin, docs" },
    { value: "1", label: "API shared with kiosk and mobile" },
    { value: "Live", label: "boothiq.com" },
  ],
  links: [
    { label: "boothiq.com", href: "https://boothiq.com" },
    { label: "BoothIQ Mobile case study", href: "/case-studies/boothiq-mobile" },
    { label: "BoothIQ booth software case study", href: "/case-studies/boothiq-software" },
  ],
  gallery: [
    { src: "/case-studies/boothiq-dashboard/01-cover.jpg", alt: "BoothIQ web dashboard overview", caption: "Dashboard overview: revenue, transactions, upsells, payment mix, hardware status and recent alerts." },
    { src: "/case-studies/boothiq-dashboard/02-booths.jpg", alt: "BoothIQ fleet view", caption: "Fleet view: every booth with status, takings, cash box, printer and camera health." },
    { src: "/case-studies/boothiq-dashboard/03-analytics.jpg", alt: "BoothIQ analytics", caption: "Analytics by day, week, month and year, per booth or combined, in each booth's time zone." },
    { src: "/case-studies/boothiq-dashboard/04-settings.jpg", alt: "BoothIQ settings", caption: "Pricing, operating mode, business branding and templates, pushed to booths when they are online." },
    { src: "/case-studies/boothiq-dashboard/05-admin.jpg", alt: "BoothIQ admin panel", caption: "Admin panel for the BoothIQ team: users, subscriptions, licenses, sales, credits and support." },
    { src: "/case-studies/boothiq-dashboard/06-site.jpg", alt: "boothiq.com marketing site", caption: "Public site with a payback calculator, hardware and media store, template marketplace and docs." },
    { src: "/case-studies/boothiq-dashboard/07-stack.jpg", alt: "BoothIQ web technology stack", caption: "Next.js 16, React 19, Tailwind 4, MDX docs, Vitest; FastAPI behind it." },
  ],
  timeline: [
    {
      title: "Foundation: auth, dashboard, booths",
      date: "Jan to Feb 2026",
      status: "completed",
      description:
        "Set up the Next.js 16 codebase with route groups for the public site, authentication, dashboard and admin. Shipped sign-in and sign-up, the booth list and detail pages, the revenue overview and the alerts feed against the shared API.",
    },
    {
      title: "Store, templates and admin",
      date: "Apr to May 2026",
      status: "completed",
      description:
        "Added the hardware and media store, the print-template marketplace that pushes layouts to any booth, remote settings for pricing and modes, and the internal admin panel for users, subscriptions, sales and credits.",
    },
    {
      title: "Docs, backups, licensing",
      date: "Jul to Oct 2026",
      status: "in-progress",
      description:
        "Wrote operator documentation from the kiosk source, with every page citing the code it describes. Exposed backups, licensing, emergency access and booth transfer consistently on web and mobile. Ongoing feature work continues with the client.",
    },
  ],
  challenges: [
    "Three clients (kiosk, web, mobile) reading and writing the same booth data, so every number had to agree",
    "Booths are often offline; the dashboard has to show what it knows and queue what it cannot send",
    "Operators are not technical: pricing, modes and templates must be changeable without touching the kiosk",
    "The BoothIQ team needed their own tooling for subscriptions, licenses and support",
  ],
  solutions: [
    "One FastAPI backend with shared selectors on the web side, so the dashboard, mobile app and kiosk show identical figures",
    "Status models that distinguish online, offline and stale, with commands that queue until the booth reconnects",
    "Remote configuration for prices, operating mode, branding and templates, synced to the kiosk when it is online",
    "An admin route group with users, plans, sales, credits, products and tickets, protected by role",
  ],
  techStack: {
    Web: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "MDX"],
    API: ["FastAPI", "Python", "WebSockets", "Webhooks"],
    Quality: ["Vitest", "Type checks", "Supply-chain scan", "pnpm"],
    Delivery: ["GitHub pull requests", "Vercel-style previews", "Continuous deployment"],
  },
}

export default function BoothiqDashboardPage() {
  return <CaseStudyPage data={data} />
}
