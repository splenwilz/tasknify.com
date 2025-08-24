"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-[#0F172A] hover:text-gray-700 transition-colors">
            Tasknify
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-[#0F172A] transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-[#0F172A] transition-colors">
              Case Studies
            </Link>
            <Link href="/process" className="text-gray-600 hover:text-[#0F172A] transition-colors">
              Process
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-[#0F172A] transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#0F172A] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#0F172A] transition-colors">
              Contact
            </Link>
          </nav>

          <Link href="/contact">
            <Button className="bg-[#111827] cursor-pointer hover:bg-[#0F172A] text-white rounded-full px-6">Book a Consultation</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
