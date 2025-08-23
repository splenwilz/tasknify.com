import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoRow } from "@/components/logo-row"
import { HowItWorks } from "@/components/how-it-works"
import { SocialProof } from "@/components/social-proof"
import { CaseStudy } from "@/components/case-study"
import { Performance } from "@/components/performance"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        <Hero />
        <LogoRow />
        <HowItWorks />
        <SocialProof />
        <CaseStudy />
        <Performance />
        <Services />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
