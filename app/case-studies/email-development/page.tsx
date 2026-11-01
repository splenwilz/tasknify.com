"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "Email · Newsletters & campaigns",
  status: "In Progress",
  name: "Email Development",
  tagline: "HTML email that renders everywhere: Customer.io and Iterable templates, monthly newsletters, and a UK biodiversity company's brand in the inbox.",
  summary:
    "Email is the one place where the browser rules do not apply. Over two years we have built campaign templates in Customer.io for Sagetap, an Iterable newsletter template for ParentData, a monthly newsletter coded for a publisher since January 2026, and nine issues of Biofarm's 'Stories from the ground' plus web-page and roller-banner prototypes. Table-based HTML, Outlook conditionals, mobile-first layouts and brand typography with safe fallbacks.",
  metrics: [
    { value: "4", label: "Clients, 2024 to 2026" },
    { value: "11 mo", label: "Sagetap engagement" },
    { value: "9", label: "Biofarm issues shipped" },
    { value: "Monthly", label: "Ongoing newsletter coding" },
  ],
  gallery: [
    { src: "/case-studies/email-development/01-cover.jpg", alt: "Email development cover with three Biofarm newsletters", caption: "Newsletters and campaign templates for Customer.io, Iterable and direct sends." },
    { src: "/case-studies/email-development/02-biofarm.jpg", alt: "Biofarm monthly newsletters", caption: "Biofarm's monthly 'Stories from the ground': brand fonts with fallbacks, illustrated characters, video heroes." },
    { src: "/case-studies/email-development/03-clients.jpg", alt: "Clients and platforms", caption: "Sagetap in Customer.io, ParentData in Iterable, a monthly publisher newsletter, Biofarm direct sends." },
    { src: "/case-studies/email-development/04-stack.jpg", alt: "Email technology stack", caption: "Table-based HTML, inline CSS, MSO conditionals, VML, 600px breakpoint, deliverability checks." },
  ],
  timeline: [
    {
      title: "Sagetap and ParentData",
      date: "Aug 2024 to Oct 2025",
      status: "completed",
      description:
        "Built an Iterable newsletter template for ParentData from the client's design, then campaign templates for Sagetap in the Customer.io email builder from Figma mockups, continuing as their email developer for eleven months.",
    },
    {
      title: "Monthly newsletter coding",
      date: "Jan 2026, ongoing",
      status: "in-progress",
      description:
        "A publisher's monthly newsletter, coded each issue from supplied copy and imagery, with a reusable section system so each month takes hours rather than days.",
    },
    {
      title: "Biofarm",
      date: "Jan 2026, ongoing",
      status: "in-progress",
      description:
        "Nine monthly issues for a UK biodiversity company, a deliverability guide, brand-asset handling for a 54-page brand guideline, and prototypes for web pages and roller banners.",
    },
  ],
  challenges: [
    "Outlook, Gmail and Apple Mail each render HTML differently, and a broken layout goes to thousands of inboxes at once",
    "Brand typography (display fonts, light weights) that most email clients will not load",
    "Platform editors (Customer.io, Iterable) impose their own structure on the HTML",
    "Monthly deadlines with new imagery, video and copy every issue",
  ],
  solutions: [
    "Table-based layouts with inline CSS, MSO conditionals and VML backgrounds, tested across the major clients before every send",
    "Font stacks with web-safe fallbacks chosen so the layout holds when the brand font does not load",
    "Templates built inside the platform editor, so marketers can edit copy without touching code",
    "A reusable section library per client: header, hero, story blocks, educational block, CTA, compliant footer",
  ],
  techStack: {
    Markup: ["HTML tables", "Inline CSS", "MSO conditionals", "VML"],
    Responsive: ["Mobile-first", "600px breakpoint", "Dark-mode safe colours"],
    Platforms: ["Customer.io", "Iterable", "Direct HTML sends"],
    Checks: ["Outlook, Gmail, Apple Mail", "Deliverability guide", "Alt text, plain-text parts"],
  },
}

export default function EmailDevelopmentPage() {
  return <CaseStudyPage data={data} />
}
