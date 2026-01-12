import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Y Combinator badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="font-bold">Backed by</span> Y Combinator
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                One team, <br />
                <span className="text-black">faster delivery</span> <br />
                for your product
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Tasknify gives you complete control over all software development with real-time progress tracking, 
                quality assurance, and delivery guarantees.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button 
                  variant="outline" 
                  className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-lg font-semibold bg-white hover:bg-gray-50 rounded-lg w-full sm:w-auto"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 text-sm text-gray-600">
              <div>No hidden fees</div>
              <div>24/7 Support</div>
              <div>GDPR / SOC2 / ISO 27001</div>
            </div>
          </div>

          {/* Right side - Product screenshot */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Mock dashboard interface */}
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Project Dashboard</h3>
                  <div className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Authentication System</div>
                      <div className="text-sm text-green-600">✓ Completed</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">100%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">API Development</div>
                      <div className="text-sm text-blue-600">• In Progress</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">75%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Frontend Components</div>
                      <div className="text-sm text-gray-500">• Pending</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">25%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Testing & QA</div>
                      <div className="text-sm text-gray-500">• Scheduled</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">0%</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Overall Progress</span>
                    <span className="text-lg font-bold text-blue-600">67%</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            Access 1,000,000+ developers, designers, and project managers across the globe!
          </p>
        </div>
      </div>
    </section>
  )
}
