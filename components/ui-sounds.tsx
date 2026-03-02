"use client"

import { useEffect, useCallback, useRef } from "react"

let hoverAudio: HTMLAudioElement | null = null
let userHasInteracted = false

function playHoverSound() {
  if (!userHasInteracted || !hoverAudio) return
  hoverAudio.currentTime = 0
  hoverAudio.play().catch(() => {})
}

function playClickSound() {
  if (!userHasInteracted) return
  try {
    const ctx = new AudioContext()
    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()

    oscillator.connect(gain)
    gain.connect(ctx.destination)

    oscillator.type = "sine"
    oscillator.frequency.setValueAtTime(2400, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.06)

    gain.gain.setValueAtTime(0.06, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.08)
  } catch {
    // Silent fail
  }
}

function unlockAudio() {
  if (userHasInteracted) return
  userHasInteracted = true
  // Preload after first interaction
  if (!hoverAudio) {
    hoverAudio = new Audio("/media/hover.m4a")
    hoverAudio.volume = 0.3
  }
}

export function UISounds() {
  const initialized = useRef(false)

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest("a, button")) {
      playHoverSound()
    }
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    unlockAudio()
    const target = e.target as HTMLElement
    if (target.closest("a, button")) {
      playClickSound()
    }
  }, [])

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    document.addEventListener("pointerdown", unlockAudio, { once: true })
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("pointerdown", unlockAudio)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("click", handleClick)
    }
  }, [handleMouseEnter, handleClick])

  return null
}
