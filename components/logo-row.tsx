export function LogoRow() {
  const logos = [
    "Microsoft",
    "Shopify",
    "Stripe",
    "GitHub",
    "Vercel",
    "AWS",
    "Google",
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-[#00ffff]/40 mb-8 tracking-wider uppercase">
          Trusted by Leading Companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-white/30 font-medium text-lg tracking-wide"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
