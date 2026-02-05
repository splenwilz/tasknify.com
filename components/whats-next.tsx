import { FileText, Link2, Zap } from "lucide-react"

export function WhatsNext() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            [05] WHAT'S NEXT FOR TASKNIFY?
          </div>
          <div className="text-right mb-8">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              GET STARTED
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Text */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              We're just getting started. Tasknify is evolving beyond software development to become the all-in-one technical platform for businesses.
            </h2>
          </div>

          {/* Right side - Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Automated Invoice & Billing Management
                </h3>
                <p className="text-gray-600">
                  No more manual invoicing—Tasknify will auto-generate invoices, categorize expenses, and sync seamlessly with accounting tools.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Link2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Accounting Integrations
                </h3>
                <p className="text-gray-600">
                  Connect Tasknify directly to Xero, QuickBooks, Sage, and more for effortless reconciliation and expense tracking.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Performance Integrations
                </h3>
                <p className="text-gray-600">
                  Connect Tasknify with your monitoring tools to enhance security, track system performance, and improve protection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
            Scalable, secure, and sustainable
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Built to grow with your business, protect your code, and support a modern development workflow.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Scalability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Scalability</h3>
              <p className="text-gray-600 mb-6">
                Whether you manage a small team or scale across regions, Tasknify adapts with seamless development control.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium">
                Get Started
              </button>
            </div>

            {/* Security */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Security</h3>
              <p className="text-gray-600 mb-6">
                All of your code and data stays protected, encrypted, and never shared with third parties or vendors.
              </p>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium">
                Ask us anything
              </button>
            </div>

            {/* Sustainability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Link2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Sustainability</h3>
              <p className="text-gray-600 mb-6">
                Support efficient development with automated testing, clean code practices, and optimized workflows.
              </p>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

