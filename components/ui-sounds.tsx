"use client"

import { useEffect, useCallback, useRef } from "react"

let hoverAudio: HTMLAudioElement | null = null
let clickAudio: HTMLAudioElement | null = null
let userHasInteracted = false

function playHoverSound() {
  if (!userHasInteracted || !hoverAudio) return
  hoverAudio.currentTime = 0
  hoverAudio.play().catch(() => {})
}

function playClickSound() {
  if (!userHasInteracted || !clickAudio) return
  clickAudio.currentTime = 0
  clickAudio.play().catch(() => {})
}

function unlockAudio() {
  if (userHasInteracted) return
  userHasInteracted = true
  // Preload after first interaction
  if (!hoverAudio) {
    hoverAudio = new Audio("/media/hover.m4a")
    hoverAudio.volume = 0.3
  }
  if (!clickAudio) {
    clickAudio = new Audio("/media/soundreality-mouse.mp3")
    clickAudio.volume = 0.3
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
