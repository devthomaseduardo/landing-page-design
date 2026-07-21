"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { Shape2 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

export function About() {
  const { t } = useI18n()
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border/10 bg-background py-16 sm:py-24 md:py-32"
    >
      <motion.div
        className="pointer-events-none absolute left-10 top-32 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ rotate: 360, y: [0, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Shape2 />
      </motion.div>

      <div className="site-shell relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          
          {/* Left Column - Sticky Heading */}
          <div className="flex flex-col items-start lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-4 sm:mb-12"
            >
              <span className="label-kicker text-muted-foreground/60">{t.about.kicker}</span>
              <div className="h-px w-12 bg-border/40" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.04em] text-foreground"
            >
              {t.about.headingLine1}<br />
              {t.about.headingLine2}<br />
              <span className="text-white/30">{t.about.headingLine3}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10 hidden lg:block"
            >
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external>
                {t.about.cta}
              </CtaLink>
            </motion.div>
          </div>

          {/* Right Column - Content & Cards */}
          <div className="flex flex-col gap-12 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[45ch] space-y-6 text-[15px] leading-relaxed text-muted-foreground/80 sm:text-base md:text-[17px]"
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.about.pillars.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04] sm:p-8 ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
                    <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-xs font-medium text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-foreground sm:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-2 lg:hidden"
            >
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external>
                {t.about.ctaMobile}
              </CtaLink>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
