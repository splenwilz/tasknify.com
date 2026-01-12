import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            [07] CTA
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to modernize your development?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of businesses that trust Tasknify to deliver fast, scalable software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - CTA */}
          <div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button className="bg-white text-[#0F172A] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 text-lg font-semibold rounded-full bg-transparent transition-all duration-200"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Tasknify helps you build software with real-time progress tracking, quality assurance, and delivery guarantees.
            </p>

            {/* Trust indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No hidden fees or scope creep</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Fixed-price delivery guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 technical support</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact info */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">General Inquiries</h4>
                <a 
                  href="mailto:hello@tasknify.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  hello@tasknify.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Project Partnerships</h4>
                <a 
                  href="mailto:partners@tasknify.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  partners@tasknify.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Emergency Support</h4>
                <a 
                  href="mailto:emergency@tasknify.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  emergency@tasknify.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Average response time: <span className="text-white font-semibold">2 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
