"use client"

import { CaseStudyPage } from "@/components/case-study-page"
import type { CaseStudyData } from "@/components/case-study-page"

const data: CaseStudyData = {
  badge: "Publishing · Web & mobile",
  status: "Completed",
  name: "The Bible Says",
  tagline: "Thirteen months on Navigo's online Bible commentary platform: WordPress backend, React web, React Native apps.",
  summary:
    "The Bible Says publishes verse-by-verse commentary on every book of the Bible, plus articles, maps, timelines and native apps. Navigo, Inc hired us as the WordPress and React developer on the team for two consecutive contracts from July 2023 to July 2024, working on the content backend, the web front end and the iOS and Android apps.",
  metrics: [
    { value: "13 mo", label: "Jul 2023 to Jul 2024" },
    { value: "50 h/wk", label: "At peak" },
    { value: "2", label: "Consecutive contracts" },
    { value: "iOS + Android", label: "Apps in both stores" },
  ],
  links: [{ label: "thebiblesays.com", href: "https://thebiblesays.com" }],
  gallery: [
    { src: "/case-studies/thebiblesays/01-cover.jpg", alt: "The Bible Says case study cover", caption: "Verse-by-verse commentary, articles, maps, timelines and apps. We joined as the WordPress and React developer." },
    { src: "/case-studies/thebiblesays/02-work.jpg", alt: "What the engagement covered", caption: "WordPress theme and plugin work, React web front end, React Native apps, integrations and support." },
    { src: "/case-studies/thebiblesays/03-engagement.jpg", alt: "Engagement summary", caption: "Two hourly contracts with a US product team, up to 50 hours a week." },
  ],
  timeline: [
    {
      title: "Onboarding and backend work",
      date: "Jul to Dec 2023",
      status: "completed",
      description:
        "Joined the Navigo team, picked up the WordPress codebase that holds thousands of commentary pages, and worked on custom theme and plugin features exposed through the REST API to the front ends.",
    },
    {
      title: "Web and mobile front ends",
      date: "Jan to Apr 2024",
      status: "completed",
      description:
        "React web work and React Native app work for iOS and Android: UI components, state management, routing and API integration, with cross-browser and cross-device fixes.",
    },
    {
      title: "Support and handover",
      date: "May to Jul 2024",
      status: "completed",
      description:
        "Reduced hours as the project stabilised: bug fixes, performance and security passes, documentation and technical support for the in-house team.",
    },
  ],
  challenges: [
    "A content site with thousands of pages where the backend, the web app and the mobile apps all read the same data",
    "Joining an existing remote team mid-project and matching their conventions from day one",
    "The same features had to work on the web and inside React Native apps for two platforms",
    "Long-running engagement: priorities changed month to month",
  ],
  solutions: [
    "WordPress as a headless content backend with REST endpoints consumed by React and React Native",
    "Worked in the team's GitHub flow with reviews, documenting code as we went",
    "Shared API client and component patterns between web and mobile where the platforms allowed",
    "Hourly engagement that scaled from 50 hours a week down to 10 as the work moved to maintenance",
  ],
  techStack: {
    Backend: ["WordPress", "PHP", "REST API", "WP Engine / Cloudways hosting"],
    Web: ["React", "JavaScript (ES6+)", "React Router", "Axios"],
    Mobile: ["React Native", "iOS", "Android"],
    Process: ["GitHub", "Remote US team", "Hourly"],
  },
}

export default function TheBibleSaysPage() {
  return <CaseStudyPage data={data} />
}
