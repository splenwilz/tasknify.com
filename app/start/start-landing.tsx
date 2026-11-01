"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Loader2 } from "lucide-react"
import { trackEvent } from "@/lib/gtm"

const starts = [
  "An app idea that has been sitting in a notes file for a year",
  "A business running on spreadsheets, WhatsApp and re-typing",
  "A half-finished product the last developer walked away from",
  "An AI demo that impressed the board but falls over with real users",
]

const work = [
  { name: "Pepmax", text: "iOS dose tracker, kickoff to the App Store in ten weeks.", href: "/case-studies/pepmax", img: "/case-studies/pepmax/01-cover.jpg" },
  { name: "BoothIQ", text: "Photo booth platform: booth software, dashboard and mobile app on one API.", href: "/case-studies/boothiq-mobile", img: "/case-studies/boothiq-mobile/01-cover.jpg" },
  { name: "Lift AI", text: "Asset-management platform for the elevator industry, seven months embedded.", href: "/case-studies/lift-ai", img: "/case-studies/lift-ai/01-cover.jpg" },
]

const steps = [
  ["1. Tell us what you need", "A few lines in the form. We reply within one business day with questions or a time to talk."],
  ["2. Call with your project lead", "Thirty minutes with the technical lead who would run your project, not a salesperson. You leave with a rough scope and a price range."],
  ["3. Written plan and fixed price", "Scope, milestones, timeline and price in writing. Nothing is built until you have signed it off."],
]

const budgets = ["Under $2,000", "$2,000 to $5,000", "$5,000 to $15,000", "$15,000 to $40,000", "$40,000+", "Not sure yet"]

export function StartLanding() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", budget: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, projectType: "Landing page enquiry" }),
      })
      if (!res.ok) throw new Error("failed")
      setDone(true)
      trackEvent({ event: "contact_form_submit", form_location: "start_landing" })
    } catch {
      setError("Something went wrong. Email info@tasknify.com and we will pick it up.")
    } finally {
      setSubmitting(false)
    }
  }

  const input = "w-full rounded-lg bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00ffff]/60"

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Tasknify home">
            <Image src="/brand/logo-horizontal-on-dark.svg" alt="tasknify" width={150} height={38} priority />
          </Link>
          <a href="#form" className="text-sm text-white/70 hover:text-white">Get a quote</a>
        </div>
      </header>

      <main>
        <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-1/3 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#00ffff]/25 blur-[150px]" />
          </div>
          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">Custom web &amp; mobile software</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mt-4 mb-6">Software Built To Last</h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">
                Web apps, iOS and Android apps, internal tools and production AI features. A dedicated team builds it, and a named project lead owns it from the first call to launch, with tests, code review and staging on every build.
              </p>
              <div className="max-w-xl">
                <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4">Where projects usually start</p>
                <ul className="space-y-3">
                  {starts.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-white/70">
                      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#00ffff] shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/40 text-sm mt-5">If one of those is you, the form is the next step. If none are, tell us what is.</p>
              </div>
            </div>

            <div id="form" className="neon-card rounded-2xl bg-[#0a0a0a] p-6 sm:p-8 scroll-mt-8">
              {done ? (
                <div className="py-10 text-center">
                  <div className="font-display text-2xl mb-3">Got it. Thank you.</div>
                  <p className="text-white/60">We reply within one business day, usually sooner. If it is urgent, call +234 913 551 5251.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <h2 className="font-display text-2xl">Tell us what you need built</h2>
                    <p className="text-white/50 text-sm mt-1">A reply from our team within one business day.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input className={input} name="firstName" placeholder="First name" required value={form.firstName} onChange={change} />
                    <input className={input} name="lastName" placeholder="Last name" required value={form.lastName} onChange={change} />
                  </div>
                  <input className={input} type="email" name="email" placeholder="Work email" required value={form.email} onChange={change} />
                  <input className={input} name="company" placeholder="Company (optional)" value={form.company} onChange={change} />
                  <select className={`${input} ${form.budget ? "" : "text-white/30"}`} name="budget" value={form.budget} onChange={change}>
                    <option value="">Budget range (optional)</option>
                    {budgets.map((b) => <option key={b} value={b} className="text-black">{b}</option>)}
                  </select>
                  <textarea className={`${input} min-h-[120px]`} name="message" placeholder="What are you building, and what is it for?" required value={form.message} onChange={change} />
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button type="submit" disabled={submitting} className="w-full rounded-full bg-[#00ffff] text-[#050505] hover:bg-[#00ffff]/80 transition-colors py-3 font-semibold flex items-center justify-center gap-2 disabled:opacity-60">
                    {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                    {submitting ? "Sending" : "Send and get a reply"}
                  </button>
                  <p className="text-xs text-white/30 text-center">No newsletter, no sales sequence. A project lead reads this and replies.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">What happens next</span>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {steps.map(([t, d]) => (
                <div key={t} className="neon-card rounded-xl bg-[#0a0a0a] p-6">
                  <h3 className="font-semibold mb-2">{t}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">Recent work</span>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {work.map((w) => (
                <Link key={w.name} href={w.href} className="neon-card rounded-xl bg-[#0a0a0a] overflow-hidden block group">
                  <Image src={w.img} alt={w.name} width={800} height={600} className="w-full aspect-[4/3] object-cover" />
                  <div className="p-5">
                    <h3 className="font-semibold group-hover:text-[#00ffff] transition-colors">{w.name}</h3>
                    <p className="text-white/50 text-sm mt-1">{w.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8 text-sm">
            <div><h3 className="font-semibold mb-2">What does it cost?</h3><p className="text-white/50 leading-relaxed">Fixed-scope builds start around $1,000. Most app and platform builds land between $5,000 and $30,000. You get a written price before any work starts.</p></div>
            <div><h3 className="font-semibold mb-2">How long does it take?</h3><p className="text-white/50 leading-relaxed">Most builds take six to twelve weeks from kickoff to launch, in weekly increments you can review on a staging environment.</p></div>
            <div><h3 className="font-semibold mb-2">Who does the work?</h3><p className="text-white/50 leading-relaxed">Our in-house team, start to finish. The project lead you meet on the first call stays with your project through launch and support.</p></div>
            <div><h3 className="font-semibold mb-2">What if we already have code?</h3><p className="text-white/50 leading-relaxed">Most projects start that way. A short review of the code, tests and deployment comes first, so the plan is based on what is actually there.</p></div>
          </div>
        </section>
      </main>

      <footer className="px-4 sm:px-6 lg:px-8 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <span>Tasknify Limited · Remote · Clients worldwide</span>
          <span className="flex gap-4">
            <a href="mailto:info@tasknify.com" className="hover:text-white">info@tasknify.com</a>
            <a href="tel:+2349135515251" className="hover:text-white">+234 913 551 5251</a>
            <Link href="/case-studies" className="hover:text-white">Case studies</Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
