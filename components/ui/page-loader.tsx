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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
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

      <div className="flex w-full max-w-[16rem] flex-col items-center gap-8 px-6 sm:max-w-[18rem]">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-sm font-semibold lowercase tracking-[0.22em] text-white sm:text-[15px]"
        >
          devthomas
        </motion.p>

        <div className="w-full">
          <div className="h-px w-full overflow-hidden bg-white/10">
            <div
              className="h-full bg-white transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
            <span>loading</span>
            <span className="tabular-nums text-white/55">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
