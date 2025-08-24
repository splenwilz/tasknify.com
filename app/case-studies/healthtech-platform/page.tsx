import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Shield, Users, Heart, CheckCircle, Lock, Globe } from "lucide-react"

export default function HealthTechCaseStudy() {
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
            <Badge className="mb-4 bg-green-100 text-green-800">HealthTech</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              HIPAA-Compliant Telemedicine Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Building a secure, scalable telemedicine platform that serves 500K+ patients while maintaining strict
              healthcare compliance standards.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">500K+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">EHR Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">99.8%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">8 months</div>
                <div className="text-sm text-gray-600">Development Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">The Challenge</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our client needed a comprehensive telemedicine platform that could handle the complex requirements of
              healthcare delivery while maintaining strict HIPAA compliance and integrating with existing healthcare
              systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border border-red-100 bg-red-50">
                <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Compliance Requirements
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li>• HIPAA compliance mandatory</li>
                  <li>• SOC 2 Type II certification needed</li>
                  <li>• End-to-end encryption required</li>
                  <li>• Audit trail for all patient data</li>
                  <li>• Role-based access controls</li>
                </ul>
              </Card>
              <Card className="p-6 border border-blue-100 bg-blue-50">
                <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Integration Complexity
                </h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• 15+ different EHR systems</li>
                  <li>• Real-time video consultations</li>
                  <li>• Prescription management</li>
                  <li>• Insurance verification</li>
                  <li>• Multi-state licensing compliance</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Our Solution</h2>

            <div className="space-y-8">
              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Security-First Architecture</h3>
                    <p className="text-gray-600 mb-4">
                      Built with HIPAA compliance at the core, implementing end-to-end encryption, secure data storage,
                      and comprehensive audit logging for all patient interactions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">HIPAA</Badge>
                      <Badge variant="secondary">SOC 2</Badge>
                      <Badge variant="secondary">AES-256</Badge>
                      <Badge variant="secondary">OAuth 2.0</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Comprehensive Patient Care Platform</h3>
                    <p className="text-gray-600 mb-4">
                      Developed a full-featured telemedicine platform with video consultations, prescription management,
                      appointment scheduling, and patient portal functionality.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">WebRTC</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">EHR Integration Hub</h3>
                    <p className="text-gray-600 mb-4">
                      Created a unified integration layer that connects with 15+ different EHR systems, enabling
                      seamless data exchange and reducing administrative burden.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">HL7 FHIR</Badge>
                      <Badge variant="secondary">Epic</Badge>
                      <Badge variant="secondary">Cerner</Badge>
                      <Badge variant="secondary">Allscripts</Badge>
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
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Platform Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Patients</span>
                    <span className="font-semibold text-green-600">500K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Consultations</span>
                    <span className="font-semibold text-blue-600">50K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">EHR Integrations</span>
                    <span className="font-semibold text-purple-600">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Platform Uptime</span>
                    <span className="font-semibold text-orange-600">99.8%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Compliance Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">HIPAA compliance certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">SOC 2 Type II compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Zero security incidents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Multi-state licensing support</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 border border-green-100 bg-green-50">
              <blockquote className="text-lg text-gray-700 mb-4">
                "Tasknify delivered a platform that exceeded our expectations. Their deep understanding of healthcare
                compliance and technical excellence enabled us to serve patients safely and efficiently. The EHR
                integrations alone saved us months of development time."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A]">Dr. Michael Rodriguez</div>
                  <div className="text-gray-600">Chief Medical Officer, HealthConnect</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Need a HIPAA-compliant healthcare platform?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you build secure, compliant healthcare technology.
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
