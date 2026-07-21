"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type SpringOptions,
} from "framer-motion"
import TextPressure from "@/components/ui/text-pressure"
import { AnimeGridBackground } from "@/components/ui/anime-grid-background"
import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

// Springs nomeadas por "peso" — evita repetir { stiffness, damping, mass } em cada motion value
const TILT_SPRING: SpringOptions = { stiffness: 120, damping: 22, mass: 0.4 }
const TRAIL_SPRINGS: SpringOptions[] = [
  { stiffness: 120, damping: 20, mass: 0.6 },
  { stiffness: 90, damping: 25, mass: 0.7 },
  { stiffness: 60, damping: 30, mass: 0.8 },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

/**
 * Hero - tilt 3D + cursor customizado com trilha + entrada animada
 */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [isPointerActive, setIsPointerActive] = useState(false)
  const { t } = useI18n()

  // Posição normalizada (0-1) do ponteiro dentro do container — dirige o tilt e a luz ambiente
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const springX = useSpring(mx, TILT_SPRING)
  const springY = useSpring(my, TILT_SPRING)

  // Posição em pixels relativa ao container — dirige a trilha do cursor e o ponto
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const trail1X = useSpring(mouseX, TRAIL_SPRINGS[0])
  const trail1Y = useSpring(mouseY, TRAIL_SPRINGS[0])
  const trail2X = useSpring(mouseX, TRAIL_SPRINGS[1])
  const trail2Y = useSpring(mouseY, TRAIL_SPRINGS[1])
  const trail3X = useSpring(mouseX, TRAIL_SPRINGS[2])
  const trail3Y = useSpring(mouseY, TRAIL_SPRINGS[2])

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
      if (!container || reduceMotion) return

      const rect = container.getBoundingClientRect()
      if (rect.width <= 0 || rect.height <= 0) return

      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))

      mx.set(x)
      my.set(y)
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [reduceMotion, mx, my, mouseX, mouseY],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container || reduceMotion) return

    const handleEnter = () => setIsPointerActive(true)
    const handleLeave = () => setIsPointerActive(false)

    container.addEventListener("pointermove", handlePointerMove, { passive: true })
    container.addEventListener("pointerenter", handleEnter)
    container.addEventListener("pointerleave", handleLeave)
    return () => {
      container.removeEventListener("pointermove", handlePointerMove)
      container.removeEventListener("pointerenter", handleEnter)
      container.removeEventListener("pointerleave", handleLeave)
    }
  }, [handlePointerMove, reduceMotion])

  const showCursorFx = !reduceMotion && isPointerActive

  return (
    <section
      ref={containerRef}
      className="relative flex h-[100svh] min-h-[32rem] w-full items-end overflow-hidden bg-background [perspective:1400px]"
      data-hero-container
    >
      {/* Cursor customizado + trilha */}
      {!reduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[57] hidden h-10 w-10 rounded-full border border-white/5 bg-white/5 blur-[2px] sm:block"
            style={{ x: trail3X, y: trail3Y, translateX: "-50%", translateY: "-50%" }}
            animate={{ opacity: showCursorFx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[58] hidden h-8 w-8 rounded-full border border-white/10 bg-white/10 blur-[1px] sm:block"
            style={{ x: trail2X, y: trail2Y, translateX: "-50%", translateY: "-50%" }}
            animate={{ opacity: showCursorFx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[59] hidden h-6 w-6 rounded-full border border-white/20 bg-white/10 sm:block"
            style={{ x: trail1X, y: trail1Y, translateX: "-50%", translateY: "-50%" }}
            animate={{ opacity: showCursorFx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />



          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[60] hidden h-2 w-2 rounded-full bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] sm:block"
            style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
            animate={{ opacity: showCursorFx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </>
      )}

      {/* Luz ambiente que segue o ponteiro */}
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
          animate={{ opacity: showCursorFx ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
        />
      )}

      {/* Frame 3D de fundo */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
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
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        <Image
          src="/herofundo.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <AnimeGridBackground />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/35 to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/40 via-transparent to-transparent" />

        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>

      <div className="site-shell relative z-10 w-full pb-[max(4.5rem,env(safe-area-inset-bottom)+3.25rem)] pt-24">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.25, duration: 0.7, ease: EASE_OUT }}
          className="mb-3 text-[11px] font-light uppercase tracking-widest text-white/70"
        >
          {t.hero.tagline}
        </motion.p>

        <h1 className="sr-only">{t.hero.title}</h1>

        <motion.div
          className="max-w-[min(100%,42rem)]"
          initial={reduceMotion ? false : { opacity: 0, y: 28, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: EASE_OUT }}
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
          {t.hero.description}
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
          {t.hero.scroll}
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