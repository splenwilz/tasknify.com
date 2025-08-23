export function SocialProof() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0F172A] rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">We've scaled fintech & edtech to 1M+ users.</h2>
              <p className="text-gray-300">Backend in Rust / Node, frontends in React/Next; infra on AWS/GCP.</p>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-medium">Sarah Chen</p>
                  <p className="text-sm text-gray-300">Senior Backend Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-medium">Marcus Rodriguez</p>
                  <p className="text-sm text-gray-300">DevOps Lead</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">Performance-first engineering. Clean code. Measurable outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
