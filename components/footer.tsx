"use client"

import Link from "next/link"
import { useState } from "react"
import { RevealOnScroll } from "./reveal-on-scroll"

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* Get in Touch section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RevealOnScroll>
          <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-white/40 text-sm mb-12 max-w-xl">
            Whether you need a development partner, want to discuss your project,
            or request a consultation, our team is ready to help.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <p className="text-white text-sm font-medium mb-2">
              General communication
            </p>
            <p className="text-white/30 text-sm mb-3">
              Connect with our team for project estimates, technical consultations, or partnership opportunities.
            </p>
            <p className="text-[#00ffff] text-sm">hello@tasknify.com</p>
          </div>
          <div>
            <p className="text-white text-sm font-medium mb-2">
              Help &amp; support
            </p>
            <p className="text-white/30 text-sm mb-3">
              Ask technical questions, report issues, or share feedback — we are here to help.
            </p>
            <p className="text-[#00ffff] text-sm">support@tasknify.com</p>
          </div>
          <div>
            <p className="text-white text-sm font-medium mb-2">
              Direct Line
            </p>
            <p className="text-white/30 text-sm mb-3">
              Reach us instantly for quick consultations and project discussions, anytime you need.
            </p>
            <p className="text-[#00ffff] text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Newsletter + Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12">
          {/* Newsletter */}
          <div>
            <p className="text-white text-sm font-medium mb-2">
              Join our newsletter
            </p>
            <p className="text-white/30 text-sm mb-4">
              Sign up to our mailing list below and be the first to know about
              new updates. Don&apos;t worry, we hate spam too.
            </p>
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00ffff]/30"
              />
              <button className="bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] rounded-lg px-4 py-2 text-sm font-semibold transition-colors">
                Submit
              </button>
            </div>
          </div>

          {/* Sections links */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
              Sections
            </p>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-white/50 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href="#features" className="text-white/50 hover:text-white text-sm transition-colors">
                Features
              </Link>
              <Link href="/services" className="text-white/50 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <Link href="#pricing" className="text-white/50 hover:text-white text-sm transition-colors">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Social + Info links */}
          <div className="flex gap-12">
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
                Social Media
              </p>
              <nav className="flex flex-col gap-2">
                <span className="text-white/50 text-sm">Instagram</span>
                <span className="text-white/50 text-sm">X/Twitter</span>
                <span className="text-white/50 text-sm">Linkedin</span>
              </nav>
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-4">
                Information
              </p>
              <nav className="flex flex-col gap-2">
                <Link href="/contact" className="text-white/50 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Large brand text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h3 className="font-display text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-white leading-none tracking-tight">
          TASKNIFY
        </h3>
      </div>
    </footer>
  )
}
