"use client"

import { motion } from "framer-motion"

const STEPS = [
  {
    n: "01",
    title: "Entender",
    text: "Problema, usuário e restrições - antes do código.",
  },
  {
    n: "02",
    title: "Construir",
    text: "Arquitetura limpa, interfaces precisas, entrega iterativa.",
  },
  {
    n: "03",
    title: "Escalar",
    text: "Performance, confiabilidade e melhoria contínua.",
  },
]

export function HowIWork() {
  return (
    <section
      id="process"
      className="relative border-t border-border/20 bg-background py-12 sm:py-16 md:py-20"
    >
      <div className="site-shell">
        <div className="mb-8 max-w-xl sm:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-kicker mb-2 sm:mb-3"
          >
            Como trabalho
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 text-foreground"
          >
            Simples.
            <br />
            <span className="text-muted-foreground">Do problema à entrega.</span>
          </motion.h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border/30 bg-card/25 p-5 sm:p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                {step.n}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.04em] text-foreground sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
