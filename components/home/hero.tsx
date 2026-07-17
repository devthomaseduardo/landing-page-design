"use client"

import { useEffect, useRef, useCallback } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import TextPressure from "@/components/ui/text-pressure"

/**
 * Hero - video scrub + 3D tilt + floating light + entrance motion
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const springX = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.4 })
  const springY = useSpring(my, { stiffness: 120, damping: 22, mass: 0.4 })

  const rotateY = useTransform(springX, [0, 1], [8, -8])
  const rotateX = useTransform(springY, [0, 1], [-6, 6])
  const glareX = useTransform(springX, (v) => `${v * 100}%`)
  const glareY = useTransform(springY, (v) => `${v * 100}%`)
  const lightX = useTransform(springX, [0, 1], ["18%", "82%"])
  const lightY = useTransform(springY, [0, 1], ["12%", "72%"])
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22) 0%, transparent 55%)`

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      const container = containerRef.current
      const video = videoRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      if (rect.width <= 0 || rect.height <= 0) return

      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))

      if (!reduceMotion) {
        mx.set(x)
        my.set(y)
      }

      if (!video || reduceMotion || video.seeking) return
      const duration = video.duration
      if (!Number.isFinite(duration) || duration <= 0) return

      const targetTime = x * duration
      if (!Number.isFinite(targetTime)) return
      if (Math.abs(targetTime - video.currentTime) < 0.1) return

      try {
        video.currentTime = targetTime
      } catch {
        // ignore seek races
      }
    },
    [reduceMotion, mx, my],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("pointermove", handlePointerMove, { passive: true })
    return () => container.removeEventListener("pointermove", handlePointerMove)
  }, [handlePointerMove])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    v.muted = true
    v.playsInline = true
    v.preload = "auto"

    const startAtMiddle = () => {
      if (Number.isFinite(v.duration) && v.duration > 0) {
        try {
          v.currentTime = v.duration * 0.5
        } catch {
          // ignore
        }
      }
    }

    v.load()

    if (v.readyState >= 1) {
      startAtMiddle()
    } else {
      v.addEventListener("loadedmetadata", startAtMiddle, { once: true })
      v.addEventListener("loadeddata", startAtMiddle, { once: true })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex h-[100svh] min-h-[32rem] w-full items-end overflow-hidden bg-black [perspective:1400px]"
      data-hero-container
    >
      {/* Ambient orb that follows pointer */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-[1] hidden h-[42vmin] w-[42vmin] rounded-full blur-3xl md:block"
          style={{
            left: lightX,
            top: lightY,
            x: "-50%",
            y: "-50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
          }}
        />
      )}

      {/* 3D video frame */}
      <motion.div
        className="absolute inset-3 z-0 overflow-hidden rounded-[1.25rem] border border-white/10 sm:inset-4 sm:rounded-[1.75rem] md:inset-6"
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }
        }
        initial={reduceMotion ? false : { opacity: 0, scale: 1.06, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          ref={videoRef}
          src="/hero.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          aria-hidden
        />

        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{ background: glareBg }}
          />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),inset_0_-40px_80px_rgba(0,0,0,0.45)]"
        />
      </motion.div>

      <div className="site-shell relative z-10 w-full pb-[max(4.5rem,env(safe-area-inset-bottom)+3.25rem)] pt-24">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 text-[11px] font-light uppercase tracking-widest text-white/70"
        >
          Product Engineer · SP
        </motion.p>

        <h1 className="sr-only">Thomas Eduardo - Full Stack Software Engineer</h1>

        <motion.div
          className="max-w-[min(100%,42rem)]"
          initial={reduceMotion ? false : { opacity: 0, y: 28, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 800, transformStyle: "preserve-3d" }}
        >
          <TextPressure text="Thomas" textColor="#ffffff" />
          <TextPressure text="Eduardo" textColor="rgba(255,255,255,0.75)" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-5 max-w-sm text-sm leading-relaxed text-white/55"
        >
          Aplicações web, sistemas internos e produtos digitais - da arquitetura ao deploy.
        </motion.p>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
          scroll
        </span>
        <motion.span
          className="h-8 w-px origin-top bg-gradient-to-b from-white/50 to-transparent"
          animate={
            reduceMotion
              ? undefined
              : { scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.8, 0.3] }
          }
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
