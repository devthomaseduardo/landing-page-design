"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { MobileCarousel } from "@/components/ui/mobile-carousel"

const PILLARS = [
  {
    number: "01",
    title: "Produto",
    text: "Decisões técnicas guiadas pelo impacto no usuário e no negócio.",
  },
  {
    number: "02",
    title: "Engenharia",
    text: "Código limpo, arquiteturas escaláveis e sistemas que crescem bem.",
  },
  {
    number: "03",
    title: "Confiança",
    text: "Sistemas previsíveis, observáveis e com deploys seguros.",
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border/20 bg-background py-12 sm:py-16 md:py-20"
    >
      <div className="site-shell">
        <div className="mb-8 flex items-center gap-4 sm:mb-12">
          <span className="label-kicker">Perfil</span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-h1 leading-[0.95] tracking-[-0.02em]"
            >
              Produto.<br />
              Engenharia.<br />
              <span className="text-white/70">Confiança.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8"
            >
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external>
                Falar comigo
              </CtaLink>
            </motion.div>
          </div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[42ch] text-[15px] leading-relaxed text-muted-foreground sm:text-base"
            >
              <p>
                Engenheiro de software na intersecção entre backend robusto e interfaces que funcionam de verdade. Sistemas que escalam com elegância e falham de forma previsível.
              </p>
              <p className="mt-4">
                Abordagem pragmática: menos complexidade, lógica de domínio clara e frontend como extensão de uma boa arquitetura.
              </p>
            </motion.div>

            {/* Mobile - Carousel com menos texto */}
            <div className="sm:hidden">
              <MobileCarousel itemClassName="w-[min(85vw,19rem)]">
                {PILLARS.map((p) => (
                  <div
                    key={p.number}
                    className="flex h-full flex-col rounded-2xl border border-border/30 bg-card/30 p-5"
                  >
                    <div className="font-mono text-[10px] font-medium tracking-[0.08em] text-muted-foreground/50">
                      {p.number}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.01em]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                ))}
              </MobileCarousel>
            </div>

            {/* Desktop */}
            <div className="hidden sm:block space-y-px">
              {PILLARS.map((p, index) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex gap-6 rounded-2xl border border-border/20 bg-transparent px-6 py-5 transition-all hover:border-border/40 hover:bg-white/[0.015]"
                >
                  <div className="mt-1 w-8 shrink-0 font-mono text-sm font-medium text-muted-foreground/40">
                    {p.number}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-[-0.01em]">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
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
