import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StatsGrid } from "@/components/stats-grid"
import { CoreDefenses } from "@/components/core-defenses"
import { LeadershipQuote } from "@/components/leadership-quote"
import { ComprehensiveProtection } from "@/components/comprehensive-protection"
import { PastProjects } from "@/components/past-projects"
import { ActiveThreatsGlobe } from "@/components/active-threats-globe"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        <Hero />
        <StatsGrid />
        <CoreDefenses />
        <LeadershipQuote />
        <ComprehensiveProtection />
        <PastProjects />
        <ActiveThreatsGlobe />
        <PricingSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
