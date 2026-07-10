"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { ArrowRight } from "lucide-react"

const PILLARS = [
  {
    number: "01",
    title: "Produto",
    text: "Cada decisão técnica considera o impacto no usuário e o objetivo do negócio. Código a serviço do produto.",
  },
  {
    number: "02",
    title: "Engenharia",
    text: "Arquiteturas limpas, APIs bem definidas, código organizado para crescer sem reescrita.",
  },
  {
    number: "03",
    title: "Confiabilidade",
    text: "Sistemas que falham de forma previsível, com observabilidade, testes e deploys seguros.",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden border-y border-border/20 bg-background">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* — Linha editorial topo — */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Perfil</span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
        </div>

        {/* — Grid principal — */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] items-start">

          {/* Lado esquerdo — título grande */}
          <div className="lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.05]"
            >
              Produto.<br />
              <span className="text-muted-foreground">Engenharia.</span><br />
              <span className="text-muted-foreground/40">Confiança.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-10"
            >
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
              >
                Falar comigo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Lado direito — texto + pilares */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-5 text-lg sm:text-xl leading-relaxed text-muted-foreground font-light mb-14"
            >
              <p>
                Sou um engenheiro de software focado na interseção entre arquitetura backend robusta
                e interfaces que funcionam de verdade. Construo sistemas que escalam com elegância
                e falham de forma previsível.
              </p>
              <p>
                Minha abordagem é pragmática: minimizar complexidade, escrever lógica de domínio
                clara e tratar o frontend como extensão de um sistema bem projetado — não uma
                reflexão tardia.
              </p>
            </motion.div>

            {/* Três pilares */}
            <div className="grid gap-px rounded-[2rem] overflow-hidden border border-border/40">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-start gap-6 bg-card/30 px-7 py-6 transition-colors hover:bg-card/60"
                >
                  <span className="mt-0.5 font-mono text-xs font-bold text-muted-foreground/40 transition-colors group-hover:text-foreground/60">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
