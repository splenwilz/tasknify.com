"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const completedProjects = [
  {
    badge: "Health & Fitness",
    name: "Pepmax",
    description:
      "Native iOS peptide dose tracker with a reconstitution calculator, dose log, vial inventory and cycle tracking. Live on the App Store.",
    metrics: [
      { value: "Live", label: "On the App Store" },
      { value: "10 wks", label: "Kickoff to launch" },
    ],
    tech: ["React Native", "Expo", "tRPC", "MongoDB"],
    href: "/case-studies/pepmax",
  },
  {
    badge: "Photo Booth · Mobile",
    name: "BoothIQ Mobile",
    description:
      "Companion app to the BoothIQ photo booth software we built: live revenue, hardware alerts, remote control and a template store.",
    metrics: [
      { value: "Live", label: "On the App Store" },
      { value: "130", label: "Test files, TDD" },
    ],
    tech: ["React Native", "Expo", "StoreKit", "Push"],
    href: "/case-studies/boothiq-mobile",
  },
  {
    badge: "PropTech · Elevator industry",
    name: "Lift AI",
    description:
      "Seven months embedded in Lift AI's asset-management platform: service contracts, KPI targets, compliance tracking and insight reports on a Django API and React web app.",
    metrics: [
      { value: "7 mo", label: "Full time, 2024 to 2025" },
      { value: "217", label: "Commits shipped" },
    ],
    tech: ["Django", "DRF", "React", "TypeScript"],
    href: "/case-studies/lift-ai",
  },
  {
    badge: "Photo Booth · Desktop",
    name: "BoothIQ Booth Software",
    description:
      "The Windows application inside a coin-operated photo booth: Arduino payments, capture, dye-sub printing, offline-first sync, QR licensing and encrypted backups.",
    metrics: [
      { value: "~12 s", label: "Capture to print" },
      { value: "Offline", label: "Sells without internet" },
    ],
    tech: ["C#", "WPF", "Arduino", "FastAPI"],
    href: "/case-studies/boothiq-software",
  },
  {
    badge: "Photo Booth · Web",
    name: "BoothIQ Web Dashboard",
    description:
      "boothiq.com: the operator dashboard, admin panel, store, template marketplace and operator docs, on the same API as the kiosk and the mobile app.",
    metrics: [
      { value: "389", label: "Commits since Jan 2026" },
      { value: "4", label: "Surfaces in one codebase" },
    ],
    tech: ["Next.js 16", "React 19", "Tailwind 4", "FastAPI"],
    href: "/case-studies/boothiq-dashboard",
  },
  {
    badge: "Publishing · Web & mobile",
    name: "The Bible Says",
    description:
      "Thirteen months as the WordPress and React developer on Navigo's online Bible commentary platform, across the content backend, the web front end and the iOS and Android apps.",
    metrics: [
      { value: "13 mo", label: "Jul 2023 to Jul 2024" },
      { value: "iOS + Android", label: "Apps in both stores" },
    ],
    tech: ["WordPress", "React", "React Native", "REST"],
    href: "/case-studies/thebiblesays",
  },
  {
    badge: "Email · Newsletters",
    name: "Email Development",
    description:
      "Customer.io and Iterable templates, a monthly publisher newsletter, and nine issues of Biofarm's newsletter: table-based HTML that renders in every client.",
    metrics: [
      { value: "4", label: "Clients, 2024 to 2026" },
      { value: "11 mo", label: "Longest engagement" },
    ],
    tech: ["HTML email", "Customer.io", "Iterable", "MSO"],
    href: "/case-studies/email-development",
  },
  {
    badge: "Real estate · WordPress",
    name: "Archer Property Partners",
    description:
      "A WordPress site for a medical real-estate investment firm, built from a marketing agency's design and launched in four weeks.",
    metrics: [
      { value: "4 wks", label: "Kickoff to launch" },
      { value: "3", label: "Audience journeys" },
    ],
    tech: ["WordPress", "PHP", "SEO"],
    href: "/case-studies/archer-property-partners",
  },
  {
    badge: "Food science · DevOps",
    name: "Shelf Life Testing Platform",
    description:
      "A FastAPI and SQLite lab platform deployed to Render with a persistent disk and GitHub auto-deploy, then documented and handed over.",
    metrics: [
      { value: "3", label: "Milestones delivered" },
      { value: "Auto", label: "Deploy on merge" },
    ],
    tech: ["FastAPI", "SQLite", "Render"],
    href: "/case-studies/shelf-life-platform",
  },
]

const engagements = [
  { client: "BoothIQ", work: "Coin-operated photo booth software, web dashboard and mobile app", period: "May 2025 to date", type: "Hourly" },
  { client: "Foresight Food", work: "FastAPI platform deployment to Render with persistent SQLite and auto-deploy", period: "Jun 2026", type: "Fixed price" },
  { client: "Publisher (monthly)", work: "HTML newsletter coding, one issue a month", period: "Jan 2026 to date", type: "Hourly" },
  { client: "Biofarm (UK)", work: "Monthly newsletters, brand assets, web and roller-banner prototypes", period: "Jan 2026 to date", type: "Monthly" },
  { client: "OneBite Marketing", work: "Archer Property Partners WordPress site", period: "Dec 2025 to Jan 2026", type: "Hourly" },
  { client: "Viral Ventures", work: "Pepmax: iOS peptide dose tracker, API, marketing site, App Store release", period: "Jun to Aug 2026", type: "Project" },
  { client: "Sagetap", work: "Customer.io campaign templates from Figma", period: "Nov 2024 to Oct 2025", type: "Hourly" },
  { client: "Lift AI", work: "Full-stack React and Django engineer on an elevator asset-management platform", period: "Nov 2024 to Jun 2025", type: "Hourly, 40 h/wk" },
  { client: "Shrimal Dharmik", work: "Farm management Flask app: stock mobs, paddocks, pasture totals", period: "Oct to Nov 2024", type: "Fixed price" },
  { client: "ParentData", work: "Iterable newsletter template", period: "Aug 2024", type: "Hourly" },
  { client: "Media AI", work: "MVP web application build", period: "Jul to Nov 2024", type: "Hourly, 40 h/wk" },
  { client: "Navigo, Inc", work: "WordPress and React developer on thebiblesays.com and its apps", period: "Jul 2023 to Jul 2024", type: "Hourly" },
  { client: "The Project Studio, West", work: "ChatGPT article generator with cited sources; React app synced with a Unity game via PlayFab", period: "Mar 2023 to Feb 2024", type: "Fixed price" },
  { client: "New Cos", work: "Django, jQuery and Bootstrap CRUD application", period: "Mar to Aug 2023", type: "Fixed price" },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Video background */}
          <div className="absolute inset-0">
            <video
              src="/media/pZJZvYHsVTZ3A35vIhN4WUN8O8.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            />
            <div className="absolute inset-0 bg-[#050505]/70" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <RevealOnScroll>
              <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">
                Case Studies
              </span>
              <h1 className="font-display text-4xl md:text-6xl text-white mt-4 mb-6">
                Real Results, Full Transparency
              </h1>
              <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                Every project gets a timeline. Every milestone is tracked. See exactly
                how we deliver — from kickoff to launch and beyond.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Completed Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-[#00ffff]" />
                <span className="text-[#00ffff] text-sm font-medium tracking-wide uppercase">
                  Delivered
                </span>
              </div>
            </RevealOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project) => (
                <RevealOnScroll key={project.name}>
                  <Link href={project.href} className="block group">
                    <div className="neon-card rounded-xl p-8 bg-[#0a0a0a] h-full">
                      <span className="inline-flex text-xs bg-[#00ffff]/5 border border-[#00ffff]/20 text-[#00ffff] rounded-full px-3 py-1 mb-5">
                        {project.badge}
                      </span>

                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#00ffff] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-2xl font-bold text-[#00ffff]">{m.value}</div>
                            <div className="text-xs text-white/30">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs text-white/50 px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm text-[#00ffff]/60 group-hover:text-[#00ffff] transition-colors">
                        View Timeline
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement history */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#00ffff]" />
                <span className="text-[#00ffff] text-sm font-medium tracking-wide uppercase">
                  Engagement History
                </span>
              </div>
              <p className="text-sm text-white/40 mb-10 max-w-2xl">
                Client work since 2023, most recent first. References available on request.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="neon-card rounded-xl bg-[#0a0a0a] overflow-hidden">
                <div className="hidden md:grid grid-cols-[1.2fr_2.4fr_1.1fr_0.9fr] gap-4 px-6 py-3 text-[11px] uppercase tracking-wider text-white/30 border-b border-white/5">
                  <span>Client</span>
                  <span>Work</span>
                  <span>Period</span>
                  <span>Engagement</span>
                </div>
                {engagements.map((e) => (
                  <div
                    key={`${e.client}-${e.period}`}
                    className="grid md:grid-cols-[1.2fr_2.4fr_1.1fr_0.9fr] gap-1 md:gap-4 px-6 py-4 border-b border-white/5 last:border-b-0 text-sm"
                  >
                    <span className="text-white font-medium">{e.client}</span>
                    <span className="text-white/50">{e.work}</span>
                    <span className="text-white/40">{e.period}</span>
                    <span className="text-white/30">{e.type}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-white/40 text-base mb-10 leading-relaxed">
                Let&apos;s discuss how we can help you achieve similar results
                for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] font-semibold rounded-lg px-8 py-3.5 text-sm transition-colors"
              >
                Start Your Project
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
