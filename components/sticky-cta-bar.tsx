import Link from "next/link"

export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a] border-t border-[#00ffff]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-4">
        <Link
          href="/services"
          className="border border-white/20 text-white hover:bg-white/5 rounded-full px-6 py-2 text-sm font-medium transition-colors"
        >
          Our Services
        </Link>
        <Link
          href="/contact"
          className="bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] rounded-full px-6 py-2 text-sm font-semibold transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
