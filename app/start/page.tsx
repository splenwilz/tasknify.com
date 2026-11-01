import type { Metadata } from "next"
import { StartLanding } from "./start-landing"

export const metadata: Metadata = {
  title: "Start a Project - Tasknify",
  description: "Tell us what you need built. Our team replies within one business day with a plan and a price.",
  robots: { index: false, follow: true },
}

export default function StartPage() {
  return <StartLanding />
}
