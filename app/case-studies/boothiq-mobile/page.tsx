"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "Photo Booth · Mobile",
  status: "In Review",
  name: "BoothIQ Mobile",
  tagline: "Every booth. One app. The mobile companion to the BoothIQ photo booth software we built.",
  summary:
    "BoothIQ is a photo booth platform we built: software that runs each booth, a web dashboard, and this mobile companion app. BoothIQ Mobile is the operator's remote control for the fleet: live revenue and hardware health per booth, severity-filtered push alerts, analytics in each booth's time zone, QR pairing with remote restart and credits, and a template store with StoreKit purchases. Built with React Native and Expo for iOS and Android.",
  metrics: [
    { value: "iOS + Android", label: "One codebase" },
    { value: "130", label: "Test files, built with TDD" },
    { value: "3", label: "BoothIQ apps on one API" },
    { value: "9 mo", label: "Dec 2025 to Sep 2026" },
  ],
  links: [{ label: "boothiq.com", href: "https://boothiq.com" }],
  gallery: [
    { src: "/case-studies/boothiq-mobile/01-cover.jpg", alt: "BoothIQ Mobile cover with two iPhones showing the booths list and dashboard", caption: "Companion to the BoothIQ photo booth software. React Native, iOS and Android." },
    { src: "/case-studies/boothiq-mobile/02-dashboard.jpg", alt: "BoothIQ live dashboard screen", caption: "Fleet or per-booth revenue, transactions and upsells, plus printer, camera and payment health." },
    { src: "/case-studies/boothiq-mobile/03-booths.jpg", alt: "BoothIQ fleet list and booth detail screens", caption: "Status and takings per unit, then cash box, hardware status and events for one booth." },
    { src: "/case-studies/boothiq-mobile/04-alerts.jpg", alt: "BoothIQ alerts screen", caption: "Push alerts for printer errors, low paper, offline booths and payment devices, filtered by severity." },
    { src: "/case-studies/boothiq-mobile/05-analytics.jpg", alt: "BoothIQ analytics screen", caption: "Today to year revenue with trends and daily charts, per booth or combined, in each booth's time zone." },
    { src: "/case-studies/boothiq-mobile/06-store.jpg", alt: "BoothIQ template store and template detail screens", caption: "Browse, buy and sync print templates to any booth. StoreKit purchases, ratings and reviews." },
    { src: "/case-studies/boothiq-mobile/07-pairing.jpg", alt: "BoothIQ add-booth form and QR scanner screens", caption: "Create a booth, scan the QR code the booth software shows. Remote restart, credits and payments follow." },
    { src: "/case-studies/boothiq-mobile/08-stack.jpg", alt: "BoothIQ Mobile architecture and technology stack", caption: "One of three BoothIQ apps on one REST API. React Native 0.86, Expo 57, QR, APNs/FCM push, StoreKit." },
    { src: "/case-studies/boothiq-mobile/09-closer.jpg", alt: "BoothIQ analytics and booths screens", caption: "BoothIQ Mobile for iOS and Android." },
  ],
  timeline: [
    {
      title: "Foundation and live dashboard",
      date: "December 2025 to January 2026",
      status: "completed",
      description:
        "Stood up the Expo app with Expo Router, React Query and secure token storage against the BoothIQ REST API. Built the live dashboard: revenue by period, transactions, upsale breakdown and hardware health for the whole fleet or a single booth.",
    },
    {
      title: "Fleet, alerts and analytics",
      date: "February to April 2026",
      status: "completed",
      description:
        "Added the booth list with per-booth detail, cash box and critical events, severity-filtered alerts with booth-specific notifications, analytics with daily charts, the template store with StoreKit purchases, QR pairing, support tickets and credits. Test-driven throughout, with Jest and Testing Library.",
    },
    {
      title: "Polish and store assets",
      date: "June to August 2026",
      status: "completed",
      description:
        "Operator-timezone aggregation for analytics, alert banner persistence, UI fixes across light and dark themes, and a scripted App Store screenshot pipeline rendered from real captures. Wrote the App Store and Google Play listings.",
    },
    {
      title: "Compliance and store release",
      date: "September 2026",
      status: "in-progress",
      description:
        "Hardened licensing activation and error states, corroborated the StoreKit storefront before enabling purchases, aligned the Android build with Google Play's payments policy, and wired FCM push with a minimal permission set. Store review in progress.",
    },
  ],
  challenges: [
    "Operators running several booths could not see revenue, hardware health or problems without visiting each machine",
    "Booths run offline during events, so the app has to tolerate stale data and sync when they reconnect",
    "Paid templates must follow Apple's StoreKit rules on iOS and Google Play's payments policy on Android",
    "Pairing a physical booth to an account needs to take seconds, not a support call",
  ],
  solutions: [
    "A live dashboard, per-booth detail, severity-filtered push alerts and analytics in each booth's own time zone",
    "React Query caching with focus and timezone-aware refetching, and clear banners when a booth is offline",
    "StoreKit purchases with storefront corroboration on iOS; a browse-and-sync template experience on Android",
    "Camera QR pairing that links a booth to the account, followed by remote restart, credits and payment settings",
  ],
  techStack: {
    "Mobile app": ["React Native 0.86", "Expo SDK 57", "Expo Router", "TypeScript", "TanStack Query", "Zustand"],
    "Native features": ["Camera QR pairing", "APNs + FCM push", "StoreKit purchases", "OTA updates", "Deep links"],
    "BoothIQ platform": ["Booth software", "Web dashboard", "One REST API", "JWT auth with refresh", "S3 assets"],
    Quality: ["TDD", "Jest + Testing Library", "Playwright", "EAS Build", "Husky"],
  },
}

export default function BoothIQMobilePage() {
  return <CaseStudyPage data={data} />
}
