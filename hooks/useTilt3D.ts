"use client"

import { useCallback, useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

export type Tilt3DOptions = {
  /** Max rotation in degrees (default 10) */
  max?: number
  /** Perspective in px (default 900) */
  perspective?: number
  /** Scale on hover (default 1.02) */
  scale?: number
  /** Extra glare follow (default true) */
  glare?: boolean
  /** Disable on touch / coarse pointers */
  disableOnTouch?: boolean
}

/**
 * Pointer-driven 3D tilt for a single element.
 * Uses CSS variables for smooth GPU-friendly transforms.
 */
export function useTilt3D<T extends HTMLElement = HTMLDivElement>(
  options: Tilt3DOptions = {},
) {
  const {
    max = 10,
    perspective = 900,
    scale = 1.02,
    glare = true,
    disableOnTouch = true,
  } = options

  const ref = useRef<T | null>(null)
  const frame = useRef<number | null>(null)
  const reduceMotion = useReducedMotion()

  const reset = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--tilt-rx", "0deg")
    el.style.setProperty("--tilt-ry", "0deg")
    el.style.setProperty("--tilt-scale", "1")
    el.style.setProperty("--glare-x", "50%")
    el.style.setProperty("--glare-y", "50%")
    el.style.setProperty("--glare-o", "0")
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || reduceMotion) return

    if (disableOnTouch) {
      const coarse = window.matchMedia("(pointer: coarse)").matches
      if (coarse) return
    }

    el.style.setProperty("--tilt-perspective", `${perspective}px`)
    el.style.transformStyle = "preserve-3d"
    el.style.willChange = "transform"
    reset()

    const onMove = (e: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        if (rect.width <= 0 || rect.height <= 0) return

        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        const ry = (px - 0.5) * max * 2
        const rx = (0.5 - py) * max * 2

        el.style.setProperty("--tilt-rx", `${rx.toFixed(2)}deg`)
        el.style.setProperty("--tilt-ry", `${ry.toFixed(2)}deg`)
        el.style.setProperty("--tilt-scale", String(scale))

        if (glare) {
          el.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`)
          el.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`)
          el.style.setProperty("--glare-o", "1")
        }
      })
    }

    const onLeave = () => {
      if (frame.current) cancelAnimationFrame(frame.current)
      reset()
    }

    el.addEventListener("pointermove", onMove, { passive: true })
    el.addEventListener("pointerleave", onLeave)
    el.addEventListener("pointercancel", onLeave)

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      el.removeEventListener("pointercancel", onLeave)
      reset()
    }
  }, [max, perspective, scale, glare, disableOnTouch, reduceMotion, reset])

  return ref
}
