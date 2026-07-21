"use client"

import { motion } from "framer-motion"
import { AlertCircle, Clock, TrendingDown, ShieldAlert } from "lucide-react"
import { Shape3 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

const ICONS = [TrendingDown, Clock, AlertCircle, ShieldAlert]

export function PainPoints() {
  const { t } = useI18n()
  return (
    <section
      id="problemas"
      className="relative overflow-hidden border-t border-border/10 bg-background py-16 sm:py-24 md:py-32"
    >
      {/* subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]"
      />

      <motion.div
        className="pointer-events-none absolute right-10 bottom-20 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <Shape3 />
      </motion.div>

      <div className="site-shell relative z-10">
        {/* Section header */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-kicker mb-3 text-muted-foreground/60"
          >
            {t.painPoints.kicker}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2 font-normal text-foreground tracking-[-0.02em]"
          >
            {t.painPoints.heading}
          </motion.h2>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {t.painPoints.items.map((item, index) => {
            const Icon = ICONS[index]
            const num = String(index + 1).padStart(2, "0")
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="size-6 text-white/70" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                    {num}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-base font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-lg">
                  {item.headline}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground/70 sm:text-sm">
                  {item.copy}
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,255,255,0.04), transparent)",
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
