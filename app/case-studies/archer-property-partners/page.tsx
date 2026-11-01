"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "Real estate · WordPress",
  status: "Completed",
  name: "Archer Property Partners",
  tagline: "A WordPress site for a medical real-estate investment firm, delivered through a marketing agency in four weeks.",
  summary:
    "Archer Property Partners acquires, develops and manages medical office buildings in the Western United States. OneBite Marketing designed the site and hired us to build it: audience journeys for investors, healthcare providers and property owners, a property portfolio, press and articles, and a link to the investor portal. Built in WordPress from the agency's design and live at archerpropertypartners.com.",
  metrics: [
    { value: "4 wks", label: "Kickoff to launch" },
    { value: "3", label: "Audience journeys" },
    { value: "WordPress", label: "Client-editable" },
    { value: "Live", label: "archerpropertypartners.com" },
  ],
  links: [{ label: "archerpropertypartners.com", href: "https://archerpropertypartners.com/" }],
  gallery: [
    { src: "/case-studies/archer-property-partners/01-cover.jpg", alt: "Archer Property Partners home page", caption: "Home page: hero, end-to-end services and the three audiences." },
    { src: "/case-studies/archer-property-partners/02-portfolio.jpg", alt: "Portfolio page", caption: "Portfolio: properties with state, square footage and status, plus a market map." },
    { src: "/case-studies/archer-property-partners/03-providers.jpg", alt: "Providers page", caption: "Audience pages for investors, providers and owners, each ending in a strategy-call request." },
    { src: "/case-studies/archer-property-partners/04-stack.jpg", alt: "Technology stack", caption: "WordPress, custom theme, responsive layouts, SEO sitemap, investor portal link." },
  ],
  timeline: [
    {
      title: "Build from the agency's design",
      date: "December 2025",
      status: "completed",
      description:
        "Set up WordPress, built the custom theme and page templates from OneBite Marketing's design: home, investors, providers, property management, portfolio, press, about and contact, with a mobile menu and compliance disclaimer.",
    },
    {
      title: "Content, SEO and launch",
      date: "January 2026",
      status: "completed",
      description:
        "Loaded the portfolio and press content, added the SEO sitemap and metadata, linked the investor portal, tested across devices and launched on the client's domain.",
    },
  ],
  challenges: [
    "A white-label build: the agency owns the client relationship and the design, so the build had to match the mockups exactly",
    "Three audiences with different calls to action on one site",
    "The client's team needed to add properties and press without a developer",
    "A short, fixed window before the client's launch date",
  ],
  solutions: [
    "Pixel-level implementation of the agency's design with weekly check-ins through the agency",
    "Distinct journeys for investors, providers and owners, all ending in a strategy-call request",
    "Editable portfolio and press sections in WordPress with clear fields",
    "Delivered in four weeks of hourly work, then handed over with notes",
  ],
  techStack: {
    Platform: ["WordPress", "PHP", "Custom theme"],
    "Front end": ["Responsive layouts", "Mobile menu", "HTML/CSS/JS"],
    SEO: ["XML sitemap", "Metadata", "Semantic headings"],
    Engagement: ["Via OneBite Marketing", "Hourly", "Dec 2025 to Jan 2026"],
  },
}

export default function ArcherPropertyPartnersPage() {
  return <CaseStudyPage data={data} />
}
