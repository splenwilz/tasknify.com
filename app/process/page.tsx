import { CheckCircle, Clock, Users, Zap, Shield, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Development Process - Tasknify",
  description: "Learn about Tasknify's proven 6-step development process. From discovery to deployment, we deliver high-quality software on time and within budget.",
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
            Our <span className="text-emerald-600 font-semibold">proven</span> development process
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            From concept to deployment, we follow a battle-tested methodology that ensures your project is delivered on
            time, within budget, and exceeds expectations.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm font-medium text-blue-600 mb-2">STEP 1</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Discovery & Planning</h3>
              <p className="text-gray-600 mb-6">
                We dive deep into your business requirements, technical constraints, and success metrics to create a
                comprehensive project roadmap.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Requirements gathering
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Technical architecture design
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Project timeline & milestones
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-sm font-medium text-purple-600 mb-2">STEP 2</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Rapid Prototyping</h3>
              <p className="text-gray-600 mb-6">
                We build interactive prototypes and wireframes to validate concepts early, ensuring alignment before
                development begins.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Interactive mockups
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  User experience validation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Stakeholder feedback integration
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-sm font-medium text-emerald-600 mb-2">STEP 3</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Agile Development</h3>
              <p className="text-gray-600 mb-6">
                Using 2-week sprints, we deliver working software incrementally with regular demos and feedback sessions
                to keep you involved.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  2-week sprint cycles
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Regular demo sessions
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Continuous integration
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-sm font-medium text-orange-600 mb-2">STEP 4</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Quality Assurance</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive testing across devices, browsers, and user scenarios ensures your application works
                flawlessly for every user.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Automated testing suite
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Cross-browser compatibility
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Performance optimization
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-sm font-medium text-red-600 mb-2">STEP 5</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Deployment & Launch</h3>
              <p className="text-gray-600 mb-6">
                We handle the entire deployment process, from server setup to domain configuration, ensuring a smooth
                launch with zero downtime.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Production deployment
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  SSL & security setup
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Monitoring & analytics
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-sm font-medium text-indigo-600 mb-2">STEP 6</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Ongoing Support</h3>
              <p className="text-gray-600 mb-6">
                Post-launch support includes bug fixes, feature updates, and performance monitoring to keep your
                application running smoothly.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  30-day warranty period
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Maintenance packages
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Feature enhancement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Typical Project Timeline</h2>
            <p className="text-gray-600">
              Most projects follow this general timeline, though we adapt to your specific needs
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-24 text-sm font-medium text-gray-500">Week 1-2</div>
              <div className="flex-1 bg-blue-200 h-2 rounded-full mx-4">
                <div className="bg-blue-600 h-2 rounded-full w-full"></div>
              </div>
              <div className="text-sm font-medium text-[#0F172A]">Discovery & Planning</div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-sm font-medium text-gray-500">Week 3-4</div>
              <div className="flex-1 bg-purple-200 h-2 rounded-full mx-4">
                <div className="bg-purple-600 h-2 rounded-full w-full"></div>
              </div>
              <div className="text-sm font-medium text-[#0F172A]">Prototyping & Design</div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-sm font-medium text-gray-500">Week 5-10</div>
              <div className="flex-1 bg-emerald-200 h-2 rounded-full mx-4">
                <div className="bg-emerald-600 h-2 rounded-full w-full"></div>
              </div>
              <div className="text-sm font-medium text-[#0F172A]">Development Sprints</div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-sm font-medium text-gray-500">Week 11-12</div>
              <div className="flex-1 bg-orange-200 h-2 rounded-full mx-4">
                <div className="bg-orange-600 h-2 rounded-full w-full"></div>
              </div>
              <div className="text-sm font-medium text-[#0F172A]">Testing & QA</div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-sm font-medium text-gray-500">Week 13</div>
              <div className="flex-1 bg-red-200 h-2 rounded-full mx-4">
                <div className="bg-red-600 h-2 rounded-full w-full"></div>
              </div>
              <div className="text-sm font-medium text-[#0F172A]">Deployment & Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's discuss your requirements and create a custom development plan that fits your timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-[#0F172A] hover:bg-gray-100 rounded-full px-8 py-3">
                Start Your Project
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0F172A] rounded-full px-8 py-3 bg-transparent"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
