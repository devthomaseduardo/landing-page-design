"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import TextPressure from "@/components/ui/text-pressure"

/**
 * Hero estável e otimizado
 * - Mouse scrub no vídeo
 * - 3D tilt suave no frame
 * - Animações Framer Motion
 * - Sem dependências extras (sem MediaPipe)
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const video = videoRef.current
    if (!video || reduceMotion || video.seeking) return

    const duration = video.duration
    if (!Number.isFinite(duration) || duration <= 0) return

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || rect.width <= 0) return

    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const targetTime = x * duration

    if (!Number.isFinite(targetTime)) return
    if (Math.abs(targetTime - video.currentTime) < 0.1) return

    video.currentTime = targetTime
  }, [reduceMotion])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('pointermove', handlePointerMove)
    return () => container.removeEventListener('pointermove', handlePointerMove)
  }, [handlePointerMove])

  useEffect(() => {
    const v = videoRef.current
    if (!v || reduceMotion) return

    v.playbackRate = 0.6
    v.muted = true

    const startAtMiddle = () => {
      if (Number.isFinite(v.duration) && v.duration > 0) {
        v.currentTime = v.duration * 0.5
      }
    }

    if (v.readyState >= 1) {
      startAtMiddle()
    } else {
      v.addEventListener('loadedmetadata', startAtMiddle, { once: true })
    }
  }, [reduceMotion])

  return (
    <section 
      ref={containerRef}
      className="relative flex h-[100svh] min-h-[32rem] w-full items-end overflow-hidden bg-black perspective-[1400px]"
      data-hide-cursor
      data-hero-container
    >
      <motion.div 
        className="absolute inset-0 hero-frame"
        whileHover={{ scale: 1.02, rotateX: 4, rotateY: 6 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <video
          ref={videoRef}
          src="/hero.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </motion.div>

      <div className="site-shell relative z-10 w-full pb-[max(4.5rem,env(safe-area-inset-bottom)+3.25rem)] pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 text-[11px] font-light uppercase tracking-widest text-white/70"
        >
          Product Engineer · SP
        </motion.p>

        <div className="max-w-[min(100%,42rem)]">
          <TextPressure text="Thomas" textColor="#ffffff" />
          <TextPressure text="Eduardo" textColor="rgba(255,255,255,0.75)" />
        </div>
      </div>
    </section>
  )
}
