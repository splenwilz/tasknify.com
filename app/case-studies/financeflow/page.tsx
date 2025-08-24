import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Users, TrendingUp, Shield, Zap, CheckCircle } from "lucide-react"

export default function FinanceFlowCaseStudy() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
        </section>

        {/* Hero */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800">FinTech</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              FinanceFlow: From Prototype to $50M Series B
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              How we helped a fintech startup scale from 1,000 to 2M+ users while maintaining 99.99% uptime during their
              Series B fundraising.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">2M+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">$50M</div>
                <div className="text-sm text-gray-600">Series B Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">99.99%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">6 months</div>
                <div className="text-sm text-gray-600">Development Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">The Challenge</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                FinanceFlow came to us with a working MVP that was struggling under the weight of rapid user growth.
                Their Ruby on Rails monolith was experiencing frequent downtime, slow response times, and couldn't
                handle the transaction volume needed for their Series B fundraising goals.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <Card className="p-6 border border-red-100 bg-red-50">
                  <h3 className="font-semibold text-red-800 mb-4">Problems We Inherited</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• 85% uptime during peak hours</li>
                    <li>• 15-second average response times</li>
                    <li>• Manual deployment process</li>
                    <li>• No monitoring or alerting</li>
                    <li>• Single point of failure database</li>
                  </ul>
                </Card>
                <Card className="p-6 border border-green-100 bg-green-50">
                  <h3 className="font-semibold text-green-800 mb-4">Goals for Series B</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• 99.9%+ uptime requirement</li>
                    <li>• Sub-second response times</li>
                    <li>• Handle 10x transaction volume</li>
                    <li>• SOC 2 compliance readiness</li>
                    <li>• Automated scaling capabilities</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Our Solution</h2>
            <p className="text-xl text-gray-600 mb-8">
              We architected a complete platform rebuild using microservices, implemented robust monitoring, and
              established DevOps practices that could scale with their growth.
            </p>

            <div className="space-y-8">
              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Microservices Architecture</h3>
                    <p className="text-gray-600 mb-4">
                      Broke down the monolith into 12 focused microservices, each handling specific business domains
                      like payments, user management, and transaction processing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">Kubernetes</Badge>
                      <Badge variant="secondary">API Gateway</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">High Availability Infrastructure</h3>
                    <p className="text-gray-600 mb-4">
                      Implemented multi-region deployment with automatic failover, load balancing, and database
                      replication to ensure 99.99% uptime.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">RDS Multi-AZ</Badge>
                      <Badge variant="secondary">ElastiCache</Badge>
                      <Badge variant="secondary">CloudFront</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Performance Optimization</h3>
                    <p className="text-gray-600 mb-4">
                      Implemented caching strategies, database optimization, and CDN integration to achieve sub-second
                      response times even under heavy load.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Redis</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">Elasticsearch</Badge>
                      <Badge variant="secondary">New Relic</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Results & Impact</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Performance Improvements</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Uptime</span>
                    <span className="font-semibold text-green-600">85% → 99.99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold text-blue-600">15s → 0.3s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Transaction Capacity</span>
                    <span className="font-semibold text-purple-600">10x increase</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Deployment Time</span>
                    <span className="font-semibold text-orange-600">2h → 5min</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Successfully raised $50M Series B</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Scaled from 1K to 2M+ users</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Zero security incidents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">SOC 2 Type II compliant</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 border border-blue-100 bg-blue-50">
              <blockquote className="text-lg text-gray-700 mb-4">
                "Tasknify didn't just rebuild our platform – they transformed our entire approach to technology. The
                system they built handled our 20x user growth during Series B without a single outage. Their expertise
                was crucial to our fundraising success."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A]">Sarah Chen</div>
                  <div className="text-gray-600">CTO, FinanceFlow</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-[#0F172A] mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </Card>
              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-[#0F172A] mb-4">Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                  <Badge variant="secondary">CloudFront</Badge>
                  <Badge variant="secondary">RDS</Badge>
                </div>
              </Card>
              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-[#0F172A] mb-4">Monitoring</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">New Relic</Badge>
                  <Badge variant="secondary">DataDog</Badge>
                  <Badge variant="secondary">PagerDuty</Badge>
                  <Badge variant="secondary">Elasticsearch</Badge>
                  <Badge variant="secondary">Kibana</Badge>
                  <Badge variant="secondary">Prometheus</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Ready to scale your fintech platform?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#111827] hover:bg-[#0F172A] text-white rounded-full px-8">
                Start Your Project
              </Button>
              <Button variant="outline" className="rounded-full px-8 bg-transparent">
                View More Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
