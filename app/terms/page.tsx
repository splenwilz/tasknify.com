import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms on which Tasknify Limited provides software development and related services.",
}

const lastUpdated = "9 November 2026"

const sections = [
  {
    title: "Services",
    body: [
      "Tasknify Limited provides software development and related services, including web and mobile application development, consulting, deployment and support, and reporting tools for clients who have engaged us.",
      "The scope, price and timeline of each engagement are set out in a written proposal or contract agreed with the client. Where that document and these terms differ, the written proposal or contract applies.",
    ],
  },
  {
    title: "Client responsibilities",
    body: [
      "Clients agree to provide the information, content, access and feedback that an engagement needs in a timely way, and to make sure they have the right to share any material or account access they give us.",
      "Clients are responsible for the accounts, services and data they own, including any third-party accounts such as hosting, app stores or Google Ads to which they grant us access, and for paying agreed invoices on time.",
    ],
  },
  {
    title: "No warranty",
    body: [
      "Except as stated in a written contract, our services and any software or reports we deliver are provided as is, without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose or uninterrupted operation.",
      "We do not guarantee any particular business result, revenue or advertising performance from the use of our services or reports.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Tasknify Limited is not liable for any indirect, incidental, special or consequential loss, including loss of profit, revenue, data or business, arising from or connected with our services.",
      "Our total liability for any claim connected with an engagement is limited to the fees paid to us for that engagement in the twelve months before the claim arose.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute that cannot be settled by discussion will be subject to the jurisdiction of the courts of Nigeria.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these terms can be sent to godswill@tasknify.com.",
    ],
  },
]

export default function TermsPage() {
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
            <h1 className="font-display text-4xl md:text-6xl text-white mt-4 mb-6">Terms of Service</h1>
            <p className="text-white/50 text-lg leading-relaxed">
              The terms on which we work with clients. Your written proposal or contract comes first.
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
                </div>
              </div>
            ))}

            <p className="text-white/30 text-sm pt-4">
              See also our{" "}
              <Link href="/privacy" className="text-[#00ffff] hover:text-white transition-colors">Privacy Policy</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
