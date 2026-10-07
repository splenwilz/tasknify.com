"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "Health & Fitness",
  status: "Completed",
  name: "Pepmax",
  tagline: "Peptides, tracked properly. A native iOS dose tracker, live on the App Store.",
  summary:
    "Pepmax replaces the notes-app-and-calculator routine that peptide users rely on. It handles reconstitution math, two-tap dose logging with site rotation, vial inventory, cycle tracking and a daily check-in. We built the React Native app, the tRPC API, the marketing site and the App Store release, and carried it through a demanding review in a sensitive health category.",
  metrics: [
    { value: "Live", label: "On the App Store" },
    { value: "10 wks", label: "Kickoff to launch" },
    { value: "57", label: "Test files, app + API" },
    { value: "3", label: "Workspaces: app, API, web" },
  ],
  links: [
    { label: "View on the App Store", href: "https://apps.apple.com/us/app/pepmax-peptide-dose-tracker/id6782624392" },
    { label: "getpepmax.com", href: "https://getpepmax.com" },
  ],
  gallery: [
    { src: "/case-studies/pepmax/01-cover.jpg", alt: "Pepmax cover with two iPhones showing the reconstitution calculator and Today screen", caption: "Reconstitution calculator and the Today screen with the next dose due." },
    { src: "/case-studies/pepmax/02-math.jpg", alt: "Pepmax reconstitution calculator screen", caption: "Vial, water and target dose in, syringe units out. Shared, unit-tested math." },
    { src: "/case-studies/pepmax/03-log.jpg", alt: "Pepmax dose logging screens", caption: "Two-tap logging, pre-filled from the protocol, with a fresh site suggested from history." },
    { src: "/case-studies/pepmax/04-vials.jpg", alt: "Pepmax vial inventory screen", caption: "Sealed, active and expired vials with doses left and what needs reconstituting next." },
    { src: "/case-studies/pepmax/05-cycle.jpg", alt: "Pepmax schedule and cycle screens", caption: "Late and skipped doses with reasons, 30-day adherence and a daily check-in." },
    { src: "/case-studies/pepmax/06-stack.jpg", alt: "Pepmax architecture and technology stack", caption: "React Native + Expo Router, Express + tRPC + MongoDB, Clerk, RevenueCat, PostHog, EAS, Render." },
    { src: "/case-studies/pepmax/07-closer.jpg", alt: "Pepmax journal and Today screens", caption: "Live on the App Store as Pepmax: Peptide Dose Tracker." },
  ],
  timeline: [
    {
      title: "Core build",
      date: "June 2026",
      status: "completed",
      description:
        "Set up the TypeScript monorepo (Expo app, Express + tRPC API, shared types) and built the product core: protocol onboarding, reconstitution and schedule math as a pure shared package with unit tests, dose logging, vial inventory, cycles and the journal. Wired Clerk auth, RevenueCat subscriptions with live pricing, and push notifications.",
    },
    {
      title: "V2 design and marketing site",
      date: "July 2026",
      status: "completed",
      description:
        "Redesigned the app around a calmer editorial look, rebuilt the key screens, and shipped the Next.js marketing site at getpepmax.com with legal pages and store badges. Produced the first App Store screenshot set from real captures through a scripted render pipeline.",
    },
    {
      title: "App Review and launch",
      date: "August 2026",
      status: "completed",
      description:
        "Worked through several App Review rounds for a sensitive health category: tightened copy and screenshots to tracking-only language, fixed localised paywall pricing, and resubmitted with a documented remediation kit. Pepmax: Peptide Dose Tracker went live on the App Store.",
    },
  ],
  challenges: [
    "Users were running protocols out of a notes app and a calculator, with no record of concentration, doses left or cycle progress",
    "Reconstitution math has to be exact and identical everywhere it appears: onboarding, logging, and the web",
    "Peptide apps face heavy App Review scrutiny; copy, screenshots and paywall all had to pass",
    "Subscriptions needed localised pricing and a free trial without blocking the core experience",
  ],
  solutions: [
    "A reconstitution calculator, two-tap dose log with site rotation, vial inventory, cycle tracking and daily check-in in one private app",
    "One shared, unit-tested math package imported by the app, the API and the web",
    "Tracking-only language across the listing, screenshots rendered from real captures, and a resubmission kit that got the app approved",
    "RevenueCat paywall with localised StoreKit prices, a 3-day trial and an exit offer",
  ],
  techStack: {
    "Mobile app": ["React Native", "Expo Router", "TypeScript", "React Query", "gluestack-ui"],
    Backend: ["Node.js", "Express", "tRPC", "MongoDB", "Zod"],
    Services: ["Clerk", "RevenueCat", "Expo push", "PostHog", "Bunny CDN"],
    Delivery: ["EAS Build", "Render", "Next.js", "Jest"],
  },
}

export default function PepmaxPage() {
  return <CaseStudyPage data={data} />
}
