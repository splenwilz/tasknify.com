export function PartnerSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <span className="text-white/40 text-sm tracking-wider">Partner</span>

        <div className="grid md:grid-cols-2 gap-12 mt-8 items-center">
          {/* Left - Photo placeholder */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] bg-gradient-to-br from-[#111111] to-[#050505]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#00ffff]/20 to-[#00ff73]/20 rounded-full mx-auto mb-4" />
                <div className="w-3 h-3 bg-[#00ffff] rounded-full mx-auto" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              We Build Software{" "}
              <span className="cyan-underline">That Works.</span>
            </h2>

            <p className="text-white/50 leading-relaxed">
              And we help companies preserve their values while shaping their
              future with pragmatic software solutions.
            </p>

            <p className="text-white/50 leading-relaxed">
              Instead of one-size-fits-all templates, we craft individual solutions that
              have been proven to work and lead to the desired results —
              maintainable, scalable, and sustainably effective.
            </p>

            <p className="text-white font-semibold">
              All of this makes Tasknify the most down-to-earth partner for
              software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
