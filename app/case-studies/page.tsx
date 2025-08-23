import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              <span className="font-semibold text-orange-600">Real</span> results from real projects
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              See how we've helped ambitious companies scale their technical capabilities and achieve their growth
              goals.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 lg:p-12 border border-gray-100 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Featured Case Study</Badge>
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                    FinanceFlow: From Prototype to $50M Series B
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A fintech startup needed to rebuild their MVP into an enterprise-grade platform capable of
                    processing millions of transactions daily. We architected and built a system that scaled from 1,000
                    to 2M+ users.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">99.99% uptime achieved during Series B fundraising</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">10x improvement in transaction processing speed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Zero security incidents during rapid scaling</span>
                    </div>
                  </div>
                  <Button className="bg-[#111827] hover:bg-[#0F172A] text-white rounded-full px-6">
                    Read Full Case Study
                  </Button>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-[#059669] mb-1">2M+</div>
                      <div className="text-gray-600">Active Users</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#2563EB] mb-1">$50M</div>
                      <div className="text-gray-600">Series B Raised</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#DC2626] mb-1">99.99%</div>
                      <div className="text-gray-600">Uptime</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#7C3AED] mb-1">6 months</div>
                      <div className="text-gray-600">Development Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">More Success Stories</h2>
              <p className="text-xl text-gray-600">Diverse projects across industries and company stages</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">HealthTech Platform</h3>
                    <p className="text-gray-600 text-sm">Series A Healthcare Startup</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built HIPAA-compliant telemedicine platform serving 500K+ patients. Integrated with 15+ EHR systems
                  and achieved SOC 2 Type II compliance.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-green-600">500K+</div>
                    <div className="text-sm text-gray-500">Patients Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-500">EHR Integrations</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">HIPAA</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Case Study
                </Button>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">E-commerce Optimization</h3>
                    <p className="text-gray-600 text-sm">Fortune 500 Retailer</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Optimized checkout flow and recommendation engine, resulting in 40% increase in conversion rate and
                  $50M additional annual revenue.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">40%</div>
                    <div className="text-sm text-gray-500">Conversion Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">$50M</div>
                    <div className="text-sm text-gray-500">Additional Revenue</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">ML</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Case Study
                </Button>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Real Estate Platform</h3>
                    <p className="text-gray-600 text-sm">PropTech Startup</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Developed property management platform with IoT integration, serving 10K+ properties and processing
                  $100M+ in transactions annually.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">10K+</div>
                    <div className="text-sm text-gray-500">Properties</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">$100M+</div>
                    <div className="text-sm text-gray-500">Transactions</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Case Study
                </Button>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">EdTech Learning Platform</h3>
                    <p className="text-gray-600 text-sm">Education Technology</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built adaptive learning platform with AI-powered personalization, serving 1M+ students across 50+
                  countries with 99.5% uptime.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1M+</div>
                    <div className="text-sm text-gray-500">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Case Study
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Results That Matter</h2>
              <p className="text-xl text-gray-600">Aggregate impact across all our client projects</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-[#059669] mb-2">$2B+</div>
                <div className="text-gray-600">Client Valuations</div>
                <div className="text-sm text-gray-500 mt-2">Combined portfolio value</div>
              </Card>

              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-[#2563EB] mb-2">50+</div>
                <div className="text-gray-600">Products Shipped</div>
                <div className="text-sm text-gray-500 mt-2">From MVP to enterprise</div>
              </Card>

              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-[#DC2626] mb-2">99.9%</div>
                <div className="text-gray-600">Average Uptime</div>
                <div className="text-sm text-gray-500 mt-2">Production systems</div>
              </Card>

              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-[#7C3AED] mb-2">10M+</div>
                <div className="text-gray-600">End Users</div>
                <div className="text-sm text-gray-500 mt-2">Across all platforms</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600">Deep expertise across diverse sectors</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card className="p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-700">FinTech</div>
              </Card>
              <Card className="p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-700">HealthTech</div>
              </Card>
              <Card className="p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-700">E-commerce</div>
              </Card>
              <Card className="p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-700">PropTech</div>
              </Card>
              <Card className="p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-700">EdTech</div>
              </Card>
              <Card className="p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-700">SaaS</div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Ready to become our next success story?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button className="bg-[#111827] hover:bg-[#0F172A] text-white rounded-full px-8 py-3 text-lg">
              Start Your Project
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
