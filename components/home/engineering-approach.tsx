"use client"

import { ENGINEERING_APPROACH } from "@/lib/data"
import { Search, Network, Code, TestTube, Rocket, IterationCcw } from "lucide-react"
import { motion } from "framer-motion"
import { Shape6 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

const ICONS = [Search, Network, Code, TestTube, Rocket, IterationCcw]

export function EngineeringApproach() {
  const { t } = useI18n()
  return (
    <section
      id="engineering"
      className="relative overflow-hidden bg-background py-10 sm:py-16 md:py-20"
    >
      <motion.div
        className="pointer-events-none absolute right-10 top-1/4 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Shape6 />
      </motion.div>

      <div className="site-shell relative z-10">
        <div className="mb-8 max-w-3xl sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-kicker mb-2 sm:mb-3 text-white/40"
          >
            {t.engineering.kicker}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-normal text-foreground tracking-[-0.02em] text-balance"
          >
            {t.engineering.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.engineering.body}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {t.engineering.steps.map((item, i) => {
            const Icon = ICONS[i] || Code
            return (
              <div
                key={item.title}
                className="group relative flex flex-col rounded-xl border border-border/20 bg-transparent p-4 transition-colors hover:border-white/15 hover:bg-white/[0.02] sm:rounded-2xl sm:p-5 md:p-6"
              >
                <div className="mb-3 flex items-center justify-between sm:mb-4">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-secondary/50 text-foreground/80 sm:size-10 sm:rounded-xl">
                    <Icon className="size-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/35">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-base font-semibold uppercase tracking-[0.02em] text-foreground sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground sm:mt-2">
                  {item.description}
                </p>

                <div className="mt-auto pt-5">
                  <p className="border-t border-border/20 pt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50">
                    {item.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
