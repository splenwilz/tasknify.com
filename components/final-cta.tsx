import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FAFAFA] rounded-2xl p-16 text-center border border-gray-100">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="w-24 h-16 bg-gray-200 rounded-lg mx-auto mb-8"></div>

            <h2 className="text-4xl font-bold text-[#0F172A]">Your product deserves senior-level engineering.</h2>

            <p className="text-xl text-gray-600">Let's build it right—from day one.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-[#111827] cursor-pointer hover:bg-[#0F172A] text-white rounded-full px-8 py-3 w-full sm:w-auto">
                  Schedule a Call
                </Button>
              </Link>
              <a href="mailto:hello@tasknify.com?subject=Project Inquiry">
                <Button variant="ghost" className="rounded-full cursor-pointer px-8 py-3 border border-gray-300 w-full sm:w-auto">
                  Email us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
