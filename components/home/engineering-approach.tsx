"use client"

import { ENGINEERING_APPROACH } from "@/lib/data"
import { Search, Network, Code, TestTube, Rocket, IterationCcw } from "lucide-react"
import { motion } from "framer-motion"

const ICONS = [Search, Network, Code, TestTube, Rocket, IterationCcw]

export function EngineeringApproach() {
  return (
    <section
      id="engineering"
      className="relative overflow-hidden bg-background py-10 sm:py-16 md:py-20"
    >
      <div className="site-shell">
        <div className="mb-5 max-w-2xl sm:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-kicker mb-2 sm:mb-3"
          >
            Processo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-normal text-foreground tracking-[-0.02em]"
          >
            Filosofia de engenharia.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="copy-desktop mt-3 text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
          >
            Entender o problema, projetar com clareza e entregar com confiabilidade.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3">
          {ENGINEERING_APPROACH.map((item, i) => {
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
