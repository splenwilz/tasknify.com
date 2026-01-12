import { Button } from "@/components/ui/button"

export function FinalCTARally() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Ready to modernize your development?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join thousands of businesses that trust Tasknify
        </p>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-semibold">
          Get started
        </Button>

        {/* Dashboard mockup */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <span className="text-black font-semibold">Tasknify</span>
            </div>
            <div className="text-sm text-gray-500">Overview • 07 February 2025</div>
          </div>

          <div className="text-left space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-black font-medium">Current Balance</span>
              <span className="text-black font-medium">Active Developers</span>
              <span className="text-black font-medium">Estimated Delivery</span>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500">
            <p>Tasknify helps you manage your development projects with real-time data, reporting, and quality detection.</p>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div>
            <h4 className="font-semibold text-white mb-4">Tasknify</h4>
            <div className="space-y-2 text-gray-400">
              <div>Sign in</div>
              <div>Get started</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Discover</h4>
            <div className="space-y-2 text-gray-400">
              <div>Features</div>
              <div>Industries</div>
              <div>Benefits</div>
              <div>FAQ</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-2 text-gray-400">
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2 text-gray-400">
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
