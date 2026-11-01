"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "Food science · DevOps",
  status: "Completed",
  name: "Shelf Life Testing Platform",
  tagline: "A FastAPI and SQLite lab platform deployed to Render with its data kept safe, then handed over to the client's team.",
  summary:
    "Foresight Food had a browser-based shelf-life testing platform for food scientists, running on FastAPI with a SQLite database, and needed it live on Render.com with a persistent disk and GitHub auto-deploy. We set up the service and its disk, moved the database safely, wired auto-deploy from GitHub, documented how to run and extend it, and ran an orientation call for the next steps.",
  metrics: [
    { value: "3", label: "Milestones, all paid" },
    { value: "Persistent", label: "SQLite disk on Render" },
    { value: "Auto", label: "Deploy on merge" },
    { value: "June 2026", label: "Delivered" },
  ],
  gallery: [
    { src: "/case-studies/shelf-life-platform/01-cover.jpg", alt: "Shelf Life platform deployment cover", caption: "A FastAPI and SQLite lab platform for food scientists, deployed to Render with its data intact." },
    { src: "/case-studies/shelf-life-platform/02-work.jpg", alt: "What we did", caption: "Persistent disk, render.yaml, GitHub auto-deploy, documentation and an orientation call." },
  ],
  timeline: [
    {
      title: "Site live",
      date: "June 2026",
      status: "completed",
      description:
        "Created the Render web service with a persistent disk mounted for the SQLite database, environment configuration, and a documented run script. The app was reachable on its Render URL within days.",
    },
    {
      title: "Data safe and handoff complete",
      date: "June 2026",
      status: "completed",
      description:
        "Verified the database survives deploys and restarts, enabled GitHub auto-deploy so the client's team ships by merging, and wrote the handoff bundle: run instructions, architecture notes and open items.",
    },
    {
      title: "Next-steps orientation",
      date: "June 2026",
      status: "completed",
      description:
        "A paid orientation call walking the client through the deployment, the codebase layout and what to build next.",
    },
  ],
  challenges: [
    "SQLite on a platform where the filesystem is wiped on every deploy",
    "A codebase handed over from another developer with no deployment history",
    "The client needed to keep shipping without a developer on retainer",
  ],
  solutions: [
    "A Render persistent disk mounted at the database path, with the app configured through environment variables",
    "Infrastructure defined in render.yaml and a documented run script so the setup is reproducible",
    "GitHub auto-deploy plus a handoff bundle and orientation call",
  ],
  techStack: {
    App: ["FastAPI", "SQLAlchemy", "SQLite", "Vanilla ES6 front end"],
    Hosting: ["Render.com", "Persistent disk", "render.yaml"],
    Delivery: ["GitHub auto-deploy", "Environment config", "Handoff docs"],
    Engagement: ["Fixed price", "Three milestones", "June 2026"],
  },
}

export default function ShelfLifePlatformPage() {
  return <CaseStudyPage data={data} />
}
