"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const categories = [
  { id: "all", name: "All" },
  { id: "general", name: "General" },
  { id: "pricing", name: "Pricing" },
  { id: "process", name: "Process" },
  { id: "technical", name: "Technical" },
  { id: "team", name: "Team" },
  { id: "security", name: "Security" },
]

const faqs = [
  { category: "general", question: "What does Tasknify build?", answer: "Custom web and mobile software: SaaS products and web apps in React and Next.js, iOS and Android apps in React Native and Expo, internal tools, client portals and dashboards, APIs in Django, FastAPI and Node.js, and AI features such as RAG search and document Q&A that run in production. Recent work includes a photo booth platform, a peptide dose tracker on the App Store, an elevator asset-management platform and a lab platform for food scientists." },
  { category: "general", question: "Who do you work with?", answer: "Founders and operators at startups and growing businesses, usually in the US, UK, Canada and Australia, and marketing agencies that need a development team behind their designs. Most clients have outgrown spreadsheets or an off-the-shelf tool and need something built properly." },
  { category: "general", question: "What makes Tasknify different from other agencies?", answer: "Every project gets a dedicated team and a named technical lead who owns it from the first call to launch. There is no account manager in between, and the people you meet are the people who build it. Every build gets tests, code review and a staging environment, and you get a written plan before work starts and a written update every week. The track record is public: 47 projects delivered, apps live on the App Store, and case studies you can read on this site." },
  { category: "general", question: "How quickly can you start?", answer: "Usually within one to two weeks of signing. Small fixes and audits can often start within a few days. The discovery call tells you the real start date before you commit." },
  { category: "pricing", question: "What is your minimum project size?", answer: "Fixed-scope builds start at about $1,000. Most app and platform builds land between $5,000 and $30,000 depending on scope. Hourly work is available for ongoing development, maintenance and smaller tasks." },
  { category: "pricing", question: "Do you offer fixed-price or hourly billing?", answer: "Both. Well-defined projects are quoted as a fixed price split into milestones, so you know the total before work starts. Ongoing development and evolving requirements are billed hourly with a weekly summary of hours. Each milestone is invoiced on delivery and paid by bank transfer or card; the first milestone is paid up front to start." },
  { category: "pricing", question: "Do you work with startup budgets?", answer: "Yes. The usual approach is to cut scope to the smallest version that proves the idea, ship that, and add the rest once it earns its place. We do not take equity in place of payment." },
  { category: "pricing", question: "What is included in the price?", answer: "A written scope, the build itself with automated tests and code review, a staging environment for review, deployment, documentation and a handover session. Fixed-price projects include 30 days of bug fixes after launch. Third-party costs such as hosting, app store accounts and email or SMS services are paid directly by you." },
  { category: "process", question: "What is your development process?", answer: "Discovery and a written spec first, then design and a clickable prototype where the product needs it, then the build in weekly increments you can review on staging, then launch and handover. The Process page walks through each phase." },
  { category: "process", question: "How do you handle communication?", answer: "A short written update every week with what shipped, what is next and anything needed from you, plus a call whenever a decision needs one. Messages are answered within one business day, and calls are scheduled in your working hours." },
  { category: "process", question: "How do you handle scope changes?", answer: "Anything outside the written scope is estimated in writing before work begins, so you decide whether it goes in now, later, or not at all. The original price and timeline stay fixed unless you approve a change." },
  { category: "process", question: "Do you provide support after launch?", answer: "Yes. Fixed-price projects include 30 days of bug fixes. After that, support and new features run on a monthly retainer or hourly, whichever suits the pace of change. Several clients have stayed on for a year or more." },
  { category: "technical", question: "What technologies do you use?", answer: "React, Next.js and TypeScript on the web. React Native and Expo on mobile. Django, FastAPI and Node.js on the back end with PostgreSQL or MongoDB. AWS, Render and Vercel for hosting. LangChain and the OpenAI API for AI features. WordPress when a marketing site needs it. The stack is chosen for the problem, not the other way round." },
  { category: "technical", question: "Can you work with our existing codebase?", answer: "Yes. Most engagements start with a codebase someone else wrote. The first step is a short review of the code, tests and deployment so the plan is based on what is actually there, not on guesses." },
  { category: "technical", question: "Do you handle deployment and infrastructure?", answer: "Yes. Staging and production environments, CI pipelines, monitoring, backups and app store submissions are part of the build. You own every account; we set them up and document them." },
  { category: "team", question: "Who will work on my project?", answer: "A dedicated team, led by a named project lead who owns your project from the written plan through launch and support. Depending on the product, the team covers engineering, design, QA and DevOps, and you know who is on it from the start." },
  { category: "team", question: "Is Tasknify a registered company?", answer: "Yes. Tasknify Limited is a registered software development agency. We work remotely, with clients worldwide. Contracts, invoices and NDAs are issued by the company." },
  { category: "team", question: "Can we meet the team before signing?", answer: "Yes. The proposal call is with the project lead who will run your project, so you can judge the fit before anything is signed." },
  { category: "security", question: "How do you handle data security and compliance?", answer: "Secure coding practices, secrets kept out of source control, role-based access and audit logs where the product needs them, and GDPR or data-residency requirements built in when they apply. We can work inside your security review process." },
  { category: "security", question: "Do you sign NDAs?", answer: "Yes. We sign an NDA before seeing anything sensitive, keep client code and data in access-controlled accounts, and delete credentials when an engagement ends." },
]

export default function FAQPage() {
  const [category, setCategory] = useState("all")
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState<number | null>(0)

  const shown = faqs.filter((f) => {
    const q = query.trim().toLowerCase()
    return (category === "all" || f.category === category) && (q === "" || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
  })

  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#00ffff]/20 blur-[140px]" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">FAQ</span>
              <h1 className="font-display text-4xl md:text-6xl text-white mt-4 mb-6">Questions, answered plainly</h1>
              <p className="text-white/50 text-lg leading-relaxed">
                How we work, what it costs and who you deal with. If your question is not here,{" "}
                <Link href="/contact" className="text-[#00ffff] hover:text-white transition-colors">ask us directly</Link>.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-3xl mx-auto">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions"
              className="w-full rounded-lg bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00ffff]/60 mb-6"
            />
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                    category === c.id ? "bg-[#00ffff] text-[#050505] border-[#00ffff]" : "border-white/10 text-white/60 hover:text-[#050505] hover:border-white/30"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {shown.length === 0 ? (
              <p className="text-white/40 text-center py-12">No questions match that search.</p>
            ) : (
              <div className="space-y-3">
                {shown.map((f, i) => {
                  const isOpen = open === i
                  return (
                    <div key={f.question} className="neon-card rounded-xl bg-[#0a0a0a] overflow-hidden">
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-white font-medium">{f.question}</span>
                        <span className={`text-[#00ffff] text-xl leading-none transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                      </button>
                      {isOpen && <p className="px-6 pb-6 text-white/60 leading-relaxed">{f.answer}</p>}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Still have a question?</h2>
              <p className="text-white/50 mb-8">Tell us what you are working on. We reply within one business day.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-6 py-3 rounded-full bg-[#00ffff] text-[#050505] font-medium hover:bg-[#00ffff] hover:text-[#050505] transition-colors">Contact us</Link>
                <Link href="/process" className="px-6 py-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors">See our process</Link>
                <Link href="/case-studies" className="px-6 py-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors">Case studies</Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
