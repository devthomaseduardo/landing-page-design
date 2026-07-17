"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

function subscribeNoop() {
  return () => {}
}

function getCursorCapability() {
  const fine = window.matchMedia("(pointer: fine)").matches
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0
  return fine && !touch && !reduce
}

/**
 * Light cursor - soft luminous glow that follows the pointer.
 * Expands on interactive hover. Disabled on touch / reduced motion.
 */
export function CustomCursor() {
  const capable = useSyncExternalStore(subscribeNoop, getCursorCapability, () => false)
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)
  const [hidden, setHidden] = useState(false)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  // Smooth lag for the light body
  const spring = { damping: 32, stiffness: 220, mass: 0.4 }
  const lightX = useSpring(x, spring)
  const lightY = useSpring(y, spring)

  // Core follows a bit snappier
  const coreX = useSpring(x, { damping: 40, stiffness: 500, mass: 0.2 })
  const coreY = useSpring(y, { damping: 40, stiffness: 500, mass: 0.2 })

  useEffect(() => {
    if (!capable) return

    document.documentElement.classList.add("custom-cursor-active")

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onDown = () => setClick(true)
    const onUp = () => setClick(false)
    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null
      if (!el) return

      if (el.closest("[data-hide-cursor]")) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      const interactive = el.closest(
        "a, button, [role='button'], input, textarea, select, label, .btn-cta, .btn-solid-pill, .btn-outline-pill, .clickable, [data-cursor]",
      )
      setHover(!!interactive)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("mouseover", onOver)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      document.documentElement.classList.remove("custom-cursor-active")
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [capable, x, y])

  if (!capable) return null

  const halo = hover ? (click ? 28 : 36) : click ? 20 : 24
  const core = hover ? (click ? 6 : 8) : click ? 4 : 5

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      aria-hidden
      style={{
        opacity: hidden ? 0 : 1,
        transition: "opacity 0.25s ease",
      }}
    >
      {/* Soft halo */}
      <motion.div
        className="absolute top-0 left-0 rounded-full"
        style={{
          x: lightX,
          y: lightY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 45%, transparent 70%)",
        }}
        animate={{
          width: halo,
          height: halo,
          opacity: hover ? 0.95 : 0.7,
          scale: click ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 360, damping: 24 }}
      />

      {/* Bright core */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-white shadow-[0_0_14px_6px_rgba(255,255,255,0.28)]"
        style={{
          x: coreX,
          y: coreY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: core,
          height: core,
          boxShadow: hover
            ? "0 0 18px 8px rgba(255,255,255,0.35)"
            : "0 0 12px 5px rgba(255,255,255,0.25)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  )
}
