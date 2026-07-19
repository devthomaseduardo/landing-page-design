"use client"

import { motion } from "framer-motion"

const lineReveal = {
  // slight overshoot room so glyphs aren't clipped by the mask
  hidden: { y: "100%", opacity: 0, filter: "blur(8px)" },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: 0.12 + i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

export function PageHero({
  kicker,
  title,
  description,
  lines,
  light = false,
  size = "default",
}: {
  kicker: string
  title?: string
  description?: React.ReactNode
  lines?: string[]
  light?: boolean
  size?: "default" | "sm"
}) {
  const titleLines =
    lines ??
    (title ? (title.includes("\n") ? title.split("\n") : [title]) : [])

  return (
    <section
      className={`relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 ${
        light ? "text-white" : "text-foreground"
      }`}
    >
      {!light && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_80%_0%,rgba(255,255,255,0.05),transparent_55%)]"
        />
      )}
      <div className="relative site-shell">
        <motion.p
          custom={0.08}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className={`label-kicker mb-3 sm:mb-4 ${light ? "text-white/50" : ""}`}
        >
          {kicker}
        </motion.p>

        <h1
          className={`font-sans font-semibold tracking-[-0.03em] ${
            light ? "text-white" : "text-foreground"
          }`}
          style={{
            fontSize:
              size === "sm"
                ? "clamp(1.55rem, 5.8vw, 3rem)"
                : "clamp(1.9rem, 7.5vw, 5rem)",
            lineHeight: 1.15,
          }}
        >
          {titleLines.map((line, i) => (
            <span key={`${line}-${i}`} className="line-mask">
              <motion.span
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineReveal}
                className={`will-change-transform ${
                  i === titleLines.length - 1 && titleLines.length > 1
                    ? light
                      ? "text-white/70"
                      : "text-white/70"
                    : ""
                }`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {description && (
          <motion.p
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`mt-3 max-w-lg text-sm font-light leading-relaxed sm:mt-4 sm:text-base ${
              light ? "text-white/55" : "text-muted-foreground"
            }`}
          >
            <span>{description}</span>
          </motion.p>
        )}
      </div>
    </section>
  )
}
