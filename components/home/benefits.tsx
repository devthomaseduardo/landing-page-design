"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Layers, ShieldCheck } from "lucide-react"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { Shape1 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

const ICONS = [TrendingUp, Target, Layers, ShieldCheck]

export function Benefits() {
  const { t } = useI18n()
  return (
    <section
      id="solucao"
      className="relative overflow-hidden border-t border-border/10 bg-background py-16 sm:py-24 md:py-32"
    >
      {/* subtle radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_50%_100%,rgba(255,255,255,0.04),transparent_70%)]"
      />

      {/* Abstract shape decoration */}
      <motion.div
        className="pointer-events-none absolute -left-10 top-20 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Shape1 />
      </motion.div>

      <div className="site-shell relative z-10">
        {/* Section header */}
        <div className="mb-12 grid items-end gap-6 sm:mb-16 sm:grid-cols-[1fr_auto]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-kicker mb-3 text-muted-foreground/60"
            >
              {t.benefits.kicker}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-h2 max-w-lg font-normal tracking-[-0.02em] text-foreground"
            >
              {t.benefits.heading}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external>
              {t.benefits.cta}
            </CtaLink>
          </motion.div>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {t.benefits.items.map((item, index) => {
            const Icon = ICONS[index]
            const num = String(index + 1).padStart(2, "0")
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/12 hover:bg-white/[0.05] sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.06]">
                    <Icon className="size-4 text-white/70" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                    {num}
                  </span>
                </div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  {item.accent}
                </p>
                <h3 className="mb-3 font-sans text-base font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-lg">
                  {item.headline}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground/75 sm:text-sm">
                  {item.copy}
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,255,255,0.05), transparent)",
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center sm:hidden"
        >
          <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external>
            {t.benefits.cta}
          </CtaLink>
        </motion.div>
      </div>
    </section>
  )
}
