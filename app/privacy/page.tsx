import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tasknify Limited collects, uses and protects personal data, including data received from Google APIs.",
}

const lastUpdated = "9 November 2026"

const sections = [
  {
    title: "Who we are",
    body: [
      "Tasknify Limited is a software development company registered in Nigeria. We build web and mobile software for clients worldwide.",
      "Questions about this policy or your data can be sent to godswill@tasknify.com.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "Details you send through our contact forms, such as your name, email address, company and the message you write to us. We use these to reply to you and to discuss your project.",
      "Basic website analytics, such as pages visited, approximate location and the device and browser used. This helps us understand how the site is used and improve it.",
    ],
  },
  {
    title: "Google API data",
    body: [
      "Our internal reporting tool uses read-only access to Google Ads data for clients who have granted us access. We use this data only to produce performance reports for that client.",
      "We do not sell this data, share it with third parties, or use it for advertising.",
      "Our use of information received from Google APIs follows the Google API Services User Data Policy, including the Limited Use requirements.",
    ],
    link: {
      href: "https://developers.google.com/terms/api-services-user-data-policy",
      label: "Google API Services User Data Policy",
    },
  },
  {
    title: "Storage and security",
    body: [
      "Data is stored securely in access-controlled accounts and kept only as long as it is needed for reporting or to respond to your enquiry.",
      "Access tokens for Google Ads accounts are revoked and deleted when a client's reporting engagement ends.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask us at any time to see the data we hold about you, to correct it, or to delete it. Email godswill@tasknify.com and we will respond within a reasonable time.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#00ffff]/20 blur-[140px]" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">Legal</span>
            <h1 className="font-display text-4xl md:text-6xl text-white mt-4 mb-6">Privacy Policy</h1>
            <p className="text-white/50 text-lg leading-relaxed">
              What we collect, why we collect it and how we look after it.
            </p>
            <p className="text-white/30 text-sm mt-4">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-3xl mx-auto space-y-6">
            {sections.map((s) => (
              <div key={s.title} className="neon-card rounded-xl p-6 sm:p-8 bg-[#0a0a0a]">
                <h2 className="text-white font-semibold text-lg mb-4">{s.title}</h2>
                <div className="space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-white/50 text-sm leading-relaxed">{p}</p>
                  ))}
                  {s.link && (
                    <p className="text-sm">
                      <a
                        href={s.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00ffff] hover:text-white transition-colors"
                      >
                        {s.link.label}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}

            <p className="text-white/30 text-sm pt-4">
              Need something else?{" "}
              <Link href="/contact" className="text-[#00ffff] hover:text-white transition-colors">Contact us</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
