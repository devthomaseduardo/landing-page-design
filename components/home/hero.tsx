"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import TextPressure from "@/components/ui/text-pressure"

interface UseVideoScrubberOptions {
  videoRef: React.RefObject<HTMLVideoElement>
  enabled?: boolean
}

function useVideoScrubber({ videoRef, enabled = true }: UseVideoScrubberOptions) {
  const [isScrubbing, setIsScrubbing] = useState(false)

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const video = videoRef.current
    if (!video || !enabled || video.seeking) return

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))

    const targetTime = x * video.duration

    // Throttle seeks
    if (Math.abs(targetTime - video.currentTime) < 0.08) return

    video.currentTime = targetTime
  }, [videoRef, enabled])

  const handlePointerDown = useCallback(() => setIsScrubbing(true), [])
  const handlePointerUp = useCallback(() => setIsScrubbing(false), [])

  useEffect(() => {
    const container = document.querySelector('[data-hero-container]') as HTMLElement | null
    if (!container || !enabled) return

    container.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerdown', handlePointerDown)
    container.addEventListener('pointerup', handlePointerUp)
    container.addEventListener('pointerleave', handlePointerUp)

    return () => {
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerdown', handlePointerDown)
      container.removeEventListener('pointerup', handlePointerUp)
      container.removeEventListener('pointerleave', handlePointerUp)
    }
  }, [handlePointerMove, handlePointerDown, handlePointerUp, enabled])

  return { isScrubbing }
}

/**
 * Technical Mouse-Follow Hero
 * - Re-encoded video with all keyframes recommended
 * - Mouse X directly controls video.currentTime
 * - Preserves original design (TextPressure, overlays, animated cursor)
 * - Fallback for reduced motion
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()
  const { isScrubbing } = useVideoScrubber({ 
    videoRef, 
    enabled: !reduceMotion 
  })

  useEffect(() => {
    const v = videoRef.current
    if (!v || reduceMotion) return

    v.playbackRate = 0.6
    v.muted = true
    v.loop = false
    v.autoplay = false

    // Start at neutral/mid frame (adjust if needed)
    const startAtNeutral = () => {
      if (v.duration) {
        v.currentTime = v.duration * 0.5
      }
    }

    if (v.readyState >= 1) {
      startAtNeutral()
    } else {
      v.addEventListener('loadedmetadata', startAtNeutral, { once: true })
    }

    // Optional: subtle idle animation when not scrubbing
    let idleInterval: NodeJS.Timeout
    const startIdle = () => {
      idleInterval = setInterval(() => {
        if (v && !isScrubbing && !v.seeking) {
          const target = v.duration * (0.45 + Math.random() * 0.1)
          v.currentTime = target
        }
      }, 4200)
    }

    // Uncomment if you want subtle idle movement when mouse is away
    // startIdle()

    return () => clearInterval(idleInterval)
  }, [reduceMotion, isScrubbing])

  return (
    <section 
      className="relative flex h-[100svh] min-h-[32rem] w-full items-end overflow-hidden bg-black" 
      data-hide-cursor
      data-hero-container
    >
      <div className="absolute inset-0">
        {/* Vídeo com scrub por mouse - versão recodificada */}
        <video
          ref={videoRef}
          src="/hero-scrub.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-90 sm:opacity-85"
          aria-hidden
          poster="/hero-poster.jpg"
        />
        <div className="absolute inset-0 bg-black/20 sm:bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </div>

      <div className="site-shell relative z-10 w-full pb-[max(4.5rem,env(safe-area-inset-bottom)+3.25rem)] pt-24 sm:pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 text-[10px] font-light uppercase tracking-[0.22em] text-white/65 sm:mb-4 sm:text-[11px]"
        >
          Product Engineer · SP
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="w-full max-w-[min(100%,42rem)]"
        >
          <h1 className="sr-only">Thomas Eduardo</h1>
          <div className="relative h-[clamp(2.75rem,11vw,6.5rem)] w-full" aria-hidden>
            <TextPressure
              text="Thomas"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              minFontSize={36}
            />
          </div>
          <div className="relative h-[clamp(2.75rem,11vw,6.5rem)] w-full" aria-hidden>
            <TextPressure
              text="Eduardo"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="rgba(255,255,255,0.72)"
              minFontSize={36}
            />
          </div>
        </motion.div>
      </div>

      {!reduceMotion && <AnimatedCursor />}
    </section>
  )
}

function AnimatedCursor() {
  return (
    <motion.div
      initial={{ x: "85vw", y: "80vh", opacity: 0 }}
      animate={{
        x: ["85vw", "60vw", "15vw", "85vw"],
        y: ["80vh", "5vh", "75vh", "80vh"],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 30.9,
        ease: "easeInOut",
        times: [0, 0.25, 0.65, 0.9, 1],
        repeat: Infinity,
        repeatDelay: 0,
      }}
      className="pointer-events-none absolute left-0 top-0 z-50 flex h-8 w-8 items-center justify-center"
    >
      {/* Soft ambient light */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 110,
          height: 110,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* Mid halo */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 32,
          height: 32,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 40%, transparent 70%)",
        }}
      />

      {/* Bright core */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_8px_rgba(255,255,255,0.3)]"
        style={{
          width: 5,
          height: 5,
        }}
      />
    </motion.div>
    )
}
