import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoRow } from "@/components/logo-row"
import { WithWithout } from "@/components/with-without"
import { ModernFeatures } from "@/components/modern-features"
import { FraudSection } from "@/components/fraud-section"
import { AIFeatures } from "@/components/ai-features"
import { TeamsSection } from "@/components/teams-section"
import { WhatsNext } from "@/components/whats-next"
import { FinalCTARally } from "@/components/final-cta-rally"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LogoRow />
        <WithWithout />
        <ModernFeatures />
        <FraudSection />
        <AIFeatures />
        <TeamsSection />
        <WhatsNext />
        <FinalCTARally />
      </main>
      <Footer />
    </div>
  )
}
