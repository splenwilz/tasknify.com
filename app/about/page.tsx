import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              We build software that <span className="font-semibold text-emerald-600">scales</span> with your ambition
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded by engineers who've scaled systems at unicorn startups, Taxnify combines deep technical expertise
              with startup velocity to deliver software that grows with your business.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  After years of building high-scale systems at companies like Stripe, Uber, and Airbnb, we noticed a
                  pattern: most development agencies either lacked the technical depth for complex systems or moved too
                  slowly for startup timelines.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We founded Taxnify to bridge that gap—bringing enterprise-grade technical expertise with the speed and
                  agility that growing companies need.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're the technical partner for ambitious companies who refuse to compromise between quality
                  and velocity.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-[#059669]">50+</div>
                    <div className="text-gray-600">Products shipped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2563EB]">$2B+</div>
                    <div className="text-gray-600">In client valuations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#DC2626]">99.9%</div>
                    <div className="text-gray-600">Uptime achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Meet the Team</h2>
              <p className="text-xl text-gray-600">
                Senior engineers with a track record of building systems that scale
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Alex Chen</h3>
                <p className="text-gray-600 mb-3">Co-Founder & CTO</p>
                <p className="text-sm text-gray-500">
                  Former Staff Engineer at Stripe. Built payment systems processing $100B+ annually.
                </p>
              </Card>

              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Sarah Kim</h3>
                <p className="text-gray-600 mb-3">Co-Founder & CEO</p>
                <p className="text-sm text-gray-500">
                  Former Principal Engineer at Uber. Led the team that scaled ride matching to 15M+ rides/day.
                </p>
              </Card>

              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Marcus Rodriguez</h3>
                <p className="text-gray-600 mb-3">Lead Architect</p>
                <p className="text-sm text-gray-500">
                  Former Senior Engineer at Airbnb. Architected infrastructure serving 500M+ users globally.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide how we build and who we work with</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Technical Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't just write code that works—we write code that scales, performs, and stands the test of time.
                  Every line is written with production-grade standards.
                </p>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Startup Velocity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Speed matters in competitive markets. We move fast without breaking things, delivering working
                  software in weeks, not months.
                </p>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Transparent Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  No black boxes. We work as an extension of your team, sharing knowledge and ensuring you understand
                  every technical decision.
                </p>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Long-term Thinking</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build for where you're going, not just where you are. Our architectures are designed to scale from
                  thousands to millions of users.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Ready to build something ambitious?</h2>
            <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help scale your technical vision.</p>
            <Button className="bg-[#111827] hover:bg-[#0F172A] text-white rounded-full px-8 py-3 text-lg">
              Start a Conversation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
