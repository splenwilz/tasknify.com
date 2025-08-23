import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              Services built for <span className="font-semibold text-blue-600">scale</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From MVP to IPO-ready systems, we provide the technical expertise to build software that grows with your
              business.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Core Services</h2>
              <p className="text-xl text-gray-600">End-to-end development services for ambitious companies</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">Full-Stack Development</h3>
                    <p className="text-gray-600">Complete web applications built with modern frameworks</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">React, Next.js, TypeScript frontends</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Node.js, Python, Rust backends</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">PostgreSQL, Redis, MongoDB databases</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">RESTful APIs and GraphQL</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">Cloud Architecture</h3>
                    <p className="text-gray-600">Scalable infrastructure that grows with your business</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">AWS, GCP, Azure deployment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Kubernetes orchestration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Auto-scaling and load balancing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Monitoring and observability</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                </div>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">API Development</h3>
                    <p className="text-gray-600">High-performance APIs built for scale and reliability</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">RESTful and GraphQL APIs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Authentication and authorization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Rate limiting and caching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Comprehensive documentation</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">REST</Badge>
                  <Badge variant="secondary">OAuth</Badge>
                  <Badge variant="secondary">OpenAPI</Badge>
                </div>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">Performance Optimization</h3>
                    <p className="text-gray-600">Make your existing systems faster and more efficient</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Database query optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Caching strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Code profiling and optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Infrastructure scaling</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">CDN</Badge>
                  <Badge variant="secondary">Profiling</Badge>
                  <Badge variant="secondary">Optimization</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Specialized Services</h2>
              <p className="text-xl text-gray-600">Advanced solutions for complex technical challenges</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">System Architecture Review</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of your existing systems with actionable recommendations for improvement.
                </p>
                <div className="text-sm text-gray-500">Starting at $5,000</div>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Technical Due Diligence</h3>
                <p className="text-gray-600 mb-4">
                  Expert evaluation of technical assets for M&A, funding rounds, or strategic partnerships.
                </p>
                <div className="text-sm text-gray-500">Starting at $10,000</div>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Emergency Response</h3>
                <p className="text-gray-600 mb-4">
                  24/7 support for critical system failures, security incidents, and performance emergencies.
                </p>
                <div className="text-sm text-gray-500">$500/hour</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">How we deliver exceptional results, every time</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  Deep dive into your business goals, technical requirements, and success metrics.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Architecture</h3>
                <p className="text-gray-600 text-sm">
                  Design scalable systems architecture with detailed technical specifications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Development</h3>
                <p className="text-gray-600 text-sm">Agile development with weekly demos and continuous integration.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Launch</h3>
                <p className="text-gray-600 text-sm">
                  Deployment, monitoring setup, and knowledge transfer to your team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Ready to scale your technical capabilities?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss which services align with your current needs and growth goals.
            </p>
            <Button className="bg-[#111827] hover:bg-[#0F172A] text-white rounded-full px-8 py-3 text-lg">
              Schedule a Technical Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
