"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

/**
 * Intro loader - monochrome, brand mark + progress.
 * Full-page wipe on exit. Respects prefers-reduced-motion.
 * Skipped on utility routes (/r redirects, linkbio, curriculo).
 */
export function PageLoader() {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  const skip =
    pathname === "/linkbio" ||
    pathname === "/curriculo" ||
    pathname === "/r" ||
    pathname?.startsWith("/r/") ||
    pathname?.startsWith("/proposta")

  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading")

  // Skip routes: only clean up boot classes (render already returns null)
  useEffect(() => {
    if (!skip) return
    document.documentElement.classList.remove("loader-boot", "loader-active")
  }, [skip])

  useEffect(() => {
    if (skip) return

    // CSS ::before cover can drop once React paints the real loader
    document.documentElement.classList.remove("loader-boot")
    document.documentElement.classList.add("loader-active")

    if (reduceMotion) {
      const t = setTimeout(() => {
        setProgress(100)
        setPhase("done")
        document.documentElement.classList.remove("loader-active")
      }, 80)
      return () => clearTimeout(t)
    }

    let raf = 0
    let start: number | null = null
    const duration = 1400

    const tick = (now: number) => {
      if (start == null) start = now
      const t = Math.min(1, (now - start) / duration)
      // ease-out cubic
      const eased = 1 - (1 - t) ** 3
      setProgress(Math.round(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setPhase("exit")
      }
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove("loader-active", "loader-boot")
    }
  }, [reduceMotion, skip])

  useEffect(() => {
    if (phase !== "exit") return
    const t = setTimeout(() => {
      setPhase("done")
      document.documentElement.classList.remove("loader-active", "loader-boot")
    }, 720)
    return () => clearTimeout(t)
  }, [phase])

  if (skip || phase === "done") return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ y: 0 }}
      animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
      aria-busy={phase === "loading"}
      aria-live="polite"
      role="status"
    >
      <span className="sr-only">Carregando</span>

      <div className="flex w-full flex-col items-center gap-8 px-6">
        <div className="spinner"></div>
      </div>
    </motion.div>
  )
}
