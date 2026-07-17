"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"

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
      className="relative overflow-hidden border-t border-border/10 bg-background py-16 sm:py-24 md:py-32"
    >
      <div className="site-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          
          {/* Left Column - Sticky Heading */}
          <div className="flex flex-col items-start lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-4 sm:mb-12"
            >
              <span className="label-kicker text-muted-foreground/60">Perfil</span>
              <div className="h-px w-12 bg-border/40" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.04em] text-foreground"
            >
              Produto.<br />
              Engenharia.<br />
              <span className="text-white/30">Confiança.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10 hidden lg:block"
            >
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external>
                Falar comigo
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
              <p>
                Engenheiro de software na intersecção entre backend robusto e interfaces que funcionam de verdade. Sistemas que escalam com elegância e falham de forma previsível.
              </p>
              <p>
                Abordagem pragmática: menos complexidade, lógica de domínio clara e frontend como extensão de uma boa arquitetura.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {PILLARS.map((p, index) => (
                <motion.div
                  key={p.number}
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
                      {p.number}
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
                Falar comigo
              </CtaLink>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
