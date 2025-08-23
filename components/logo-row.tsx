export function LogoRow() {
  const logos = ["Stripe", "Notion", "Shopify", "Coinbase", "GitHub", "Vercel"]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-8">As seen with</p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
          {logos.map((logo) => (
            <div key={logo} className="text-gray-400 font-medium text-lg">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
