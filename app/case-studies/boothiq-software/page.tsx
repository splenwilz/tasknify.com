"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "Photo Booth · Desktop & hardware",
  status: "In Progress",
  name: "BoothIQ Booth Software",
  tagline: "The Windows application inside a coin-operated photo booth: payments, capture, printing, licensing and cloud sync.",
  summary:
    "BoothIQ needed software for a coin-operated photo booth that accepts cash through an Arduino-driven acceptor and cards through a reader, shoots with a webcam or tethered DSLR, prints on dye-sub printers in about twelve seconds, and keeps selling when the venue's internet drops. We built the kiosk application and the cloud services it talks to, then the web dashboard and mobile app on top. The contract started in May 2025 and is still running.",
  metrics: [
    { value: "~12 s", label: "Capture to print" },
    { value: "Offline", label: "Sells with no internet" },
    { value: "1 scan", label: "QR activation and licensing" },
    { value: "Nightly", label: "Encrypted backups, 7 kept" },
  ],
  links: [
    { label: "boothiq.com", href: "https://boothiq.com" },
    { label: "Web dashboard case study", href: "/case-studies/boothiq-dashboard" },
    { label: "Mobile app case study", href: "/case-studies/boothiq-mobile" },
  ],
  gallery: [
    { src: "/case-studies/boothiq-software/01-cover.jpg", alt: "BoothIQ booth software cover", caption: "A Windows kiosk application that takes cash and cards, shoots, prints and keeps selling offline." },
    { src: "/case-studies/boothiq-software/02-offline.jpg", alt: "Offline-first design", caption: "The whole customer session runs on the kiosk; a heartbeat and a WebSocket channel sync with the cloud." },
    { src: "/case-studies/boothiq-software/03-activation.jpg", alt: "Activation, licensing and recovery", caption: "QR activation, signed licenses validated offline, nightly encrypted backups, emergency codes." },
    { src: "/case-studies/boothiq-software/04-hardware.jpg", alt: "Hardware the software drives", caption: "Bill acceptors, card readers, DNP printers and touchscreens, sold alongside the software." },
    { src: "/case-studies/boothiq-software/05-stack.jpg", alt: "BoothIQ booth software stack", caption: "C# and WPF on Windows, Arduino payments, DSLR and webcam capture, FastAPI cloud." },
  ],
  timeline: [
    {
      title: "Kiosk core and payments",
      date: "2025",
      status: "completed",
      description:
        "Built the customer session from welcome screen to print: camera capture, template rendering, dye-sub printing, coin and bill acceptance through Arduino, card reader support, credits and cash collection with local sales records. Coin-operated and free-play modes.",
    },
    {
      title: "Cloud identity, sync and licensing",
      date: "Late 2025 to early 2026",
      status: "completed",
      description:
        "Added the FastAPI cloud: QR activation that links a kiosk's hardware fingerprint to a booth record, signed licenses validated on the kiosk, heartbeat and WebSocket channels, queued remote commands, and template delivery from the marketplace.",
    },
    {
      title: "Backups, recovery, admin and docs",
      date: "2026, ongoing",
      status: "in-progress",
      description:
        "Nightly encrypted database backups kept locally and uploaded, emergency one-time access codes and an offline master code, an admin area with staff roles and PIN recovery, USB exports, and operator documentation written from the source.",
    },
  ],
  challenges: [
    "Venues have unreliable internet; a booth that stops selling when Wi-Fi drops loses money",
    "Cash hardware (coin and bill acceptors) speaks serial through Arduino and must never double-count",
    "Operators lose passwords; a locked kiosk on a Saturday night is an emergency",
    "A kiosk must be licensed and tied to an owner without anyone typing keys into it",
  ],
  solutions: [
    "Offline-first design: the session, credits, sales records and templates live on the kiosk; the cloud layer syncs when it can",
    "A payments layer that treats acceptor events as transactions with local persistence and reconciliation",
    "Two kinds of one-time emergency code, rate-limited and logged, plus PIN recovery for admin accounts",
    "One QR scan from the owner's app installs identity and license together, rolled back if either fails",
  ],
  techStack: {
    Kiosk: ["C#", "WPF", "Windows", "Encrypted local database"],
    Hardware: ["Arduino", "Coin and bill acceptors", "Card readers", "DNP, HiTi, Mitsubishi printers", "DSLR tethering"],
    Cloud: ["FastAPI", "Python", "WebSockets", "Heartbeat sync"],
    Companions: ["Next.js dashboard", "React Native app", "Template marketplace"],
  },
}

export default function BoothiqSoftwarePage() {
  return <CaseStudyPage data={data} />
}
