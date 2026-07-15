"use client"

import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import TextPressure from "@/components/ui/text-pressure"

/**
 * Video + name only. No slogan, no buttons.
 * Left / bottom — personal brand over atmosphere.
 * Name uses React Bits TextPressure (hero only).
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const v = videoRef.current
    if (!v || reduceMotion) return
    v.playbackRate = 0.65
    void v.play().catch(() => { })
  }, [reduceMotion])

  return (
    <section className="relative flex h-[100svh] min-h-[32rem] w-full items-end overflow-hidden bg-black" data-hide-cursor>
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/hero.mp4"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-90 sm:opacity-85"
          aria-hidden
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

