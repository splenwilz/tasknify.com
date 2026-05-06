"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Neon green top line */}
      <div className="w-full h-[5px] bg-gradient-to-r from-[#8cdbff00] via-[#00ff73] to-[#8cdbff00]" />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
            : "bg-[#050505]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-xl tracking-wider text-white hover:text-[#00ffff] transition-colors"
            >
              TASKNIFY
            </Link>

            {/* Desktop Nav - Centered */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal tracking-[-0.02em] leading-[1.6] text-white bg-[#050505] border border-white/[0.08] transition-all hover:border-[#00ffff]/30"
                style={{
                  boxShadow:
                    "inset 0.6px 0.6px 0.84px -0.75px rgba(0,255,255,0.18), inset 1.6px 1.6px 2.28px -1.5px rgba(0,255,255,0.18), inset 3.5px 3.5px 5px -2.25px rgba(0,255,255,0.17), inset 7.9px 7.9px 11.1px -3px rgba(0,255,255,0.14), inset 20px 20px 28.3px -3.75px rgba(0,255,255,0.06), inset -0.6px -0.6px 0.84px -0.75px rgba(0,255,255,0.18), inset -1.6px -1.6px 2.28px -1.5px rgba(0,255,255,0.18), inset -3.5px -3.5px 5px -2.25px rgba(0,255,255,0.17), inset -7.9px -7.9px 11.1px -3px rgba(0,255,255,0.14), inset -20px -20px 28.3px -3.75px rgba(0,255,255,0.06)",
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#d9e0ff]" />
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#d9e0ff]" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#d9e0ff]" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#d9e0ff]" />
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {isMobileOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-white/5 pt-4">
              <Link
                href="/"
                className="block py-2 text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
                onClick={() => setIsMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
                onClick={() => setIsMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block py-2 text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
                onClick={() => setIsMobileOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="block py-2 text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
                onClick={() => setIsMobileOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-white hover:text-[#00ffff] transition-colors text-base font-light tracking-[-0.02em] leading-[1.6]"
                onClick={() => setIsMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center mt-2 px-6 py-2 text-base font-normal tracking-[-0.02em] text-white bg-[#050505] border border-white/[0.08]"
                style={{
                  boxShadow:
                    "inset 0.6px 0.6px 0.84px -0.75px rgba(0,255,255,0.18), inset 1.6px 1.6px 2.28px -1.5px rgba(0,255,255,0.18), inset 3.5px 3.5px 5px -2.25px rgba(0,255,255,0.17), inset 7.9px 7.9px 11.1px -3px rgba(0,255,255,0.14), inset 20px 20px 28.3px -3.75px rgba(0,255,255,0.06), inset -0.6px -0.6px 0.84px -0.75px rgba(0,255,255,0.18), inset -1.6px -1.6px 2.28px -1.5px rgba(0,255,255,0.18), inset -3.5px -3.5px 5px -2.25px rgba(0,255,255,0.17), inset -7.9px -7.9px 11.1px -3px rgba(0,255,255,0.14), inset -20px -20px 28.3px -3.75px rgba(0,255,255,0.06)",
                }}
                onClick={() => setIsMobileOpen(false)}
              >
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#d9e0ff]" />
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#d9e0ff]" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#d9e0ff]" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#d9e0ff]" />
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
