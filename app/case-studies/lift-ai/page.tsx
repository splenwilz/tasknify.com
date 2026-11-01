"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "PropTech · Elevator industry",
  status: "Completed",
  name: "Lift AI",
  tagline: "Contracts, KPIs and compliance for elevator portfolios, built into a live asset-management platform.",
  summary:
    "Lift AI makes software and IoT products for the elevator industry. For seven months we worked as a full-stack engineer on their asset-management platform: a Django REST API and a React web app used by building owners, property managers, service companies and consultants. Our work covered service-contract management, KPI targets and callback rates, compliance tracking, insight reports, invoices and tickets, delivered through the client's ticket-and-review process.",
  metrics: [
    { value: "7 mo", label: "Nov 2024 to Jun 2025" },
    { value: "40 h/wk", label: "Embedded in the team" },
    { value: "217", label: "Commits, API and web" },
    { value: "4.2 → 5.1", label: "Django upgrade shipped" },
  ],
  gallery: [
    { src: "/case-studies/lift-ai/01-cover.jpg", alt: "Lift AI case study cover", caption: "Seven months on Lift AI's asset-management platform: Django REST API and React web app." },
    { src: "/case-studies/lift-ai/02-contracts.jpg", alt: "Contract management features", caption: "Rate sets, review rules, contract upload, automatic elevator linking and overlap validation." },
    { src: "/case-studies/lift-ai/03-kpis.jpg", alt: "KPI and insight features", caption: "On-time response and callback KPIs, insight templates and reports, invoice review insights." },
    { src: "/case-studies/lift-ai/04-compliance.jpg", alt: "Compliance and ticket features", caption: "Certificate and violation monitoring, CAT-1 and CAT-5 test dates, inspection reports, ticket exports." },
    { src: "/case-studies/lift-ai/05-stack.jpg", alt: "Lift AI technology stack", caption: "Django 5.1, DRF, PostgreSQL, React, TypeScript, Sentry, Docker dev containers, Linear and PR review." },
  ],
  timeline: [
    {
      title: "Compliance, tickets and invoices",
      date: "Nov to Dec 2024",
      status: "completed",
      description:
        "Joined the team and shipped the compliance API for certificate and violation monitoring, soft delete for properties and related entities, ticket exports with time-on-site and travel-time columns, invoice numbers on stamped pages, an elevator detail panel and invoice review insights.",
    },
    {
      title: "Contract management",
      date: "Jan to Mar 2025",
      status: "completed",
      description:
        "Built contract rate sets and rate modification, review rules at contract creation, contract upload with attachments, automatic car linking with overlap validation, and the matching forms in the web app. Upgraded the API from Django 4.2 to 5.1 and replaced deprecated code along the way.",
    },
    {
      title: "KPI targets and insight reports",
      date: "Apr to Jun 2025",
      status: "completed",
      description:
        "Added per-car callback rates and KPI targets, on-time response and emergency callback metrics across car, property and portfolio views, CAT-1 and CAT-5 test tracking, and insight templates with report sharing. Closed out with tests for KPI and contract operations and a clean handover.",
    },
  ],
  challenges: [
    "A large existing codebase (3,000+ commits on the API alone) with strict review standards and a multi-developer team",
    "Service contracts with rates, review rules, attachments and elevator links that had to validate against each other",
    "KPIs that must agree whether you look at one elevator, one property or a whole portfolio",
    "Compliance data (certificates, violations, inspections) coming from several sources with different rules",
  ],
  solutions: [
    "Worked ticket by ticket in Linear with pull-request review from the client's engineering lead, matching their conventions",
    "A contract serializer and viewset that validate rate sets, review rules, car associations and date overlaps in one place",
    "Callback-rate and KPI-target models with shared calculations exposed through the API and reused by every web view",
    "A compliance API with AHJ IDs, attachments, date-range filters and inspection reports, plus forms with server-side error display",
  ],
  techStack: {
    Backend: ["Django 5.1", "Django REST Framework", "PostgreSQL", "Docker"],
    "Web app": ["React", "TypeScript", "Yarn workspaces", "Sentry"],
    Process: ["Linear", "GitHub pull requests", "Automated tests", "Code review"],
    Engagement: ["Hourly, 40 h/week", "Two consecutive contracts"],
  },
}

export default function LiftAiPage() {
  return <CaseStudyPage data={data} />
}
