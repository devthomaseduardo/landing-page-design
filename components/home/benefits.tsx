"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Layers, ShieldCheck } from "lucide-react"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"

const BENEFITS = [
  {
    icon: TrendingUp,
    number: "01",
    headline: "Crescimento Acelerado e Inovação Contínua",
    copy: "Desenvolvo sistemas modernos e escaláveis que permitem ao seu negócio crescer sem limites, adaptando-se rapidamente às demandas do mercado e superando a concorrência.",
    accent: "Crescimento sem teto",
  },
  {
    icon: Target,
    number: "02",
    headline: "Previsibilidade e Controle de Projetos",
    copy: "Com uma abordagem pragmática e processos claros, garanto entregas dentro do prazo e do orçamento, transformando a complexidade técnica em resultados de negócio concretos.",
    accent: "Prazos respeitados",
  },
  {
    icon: Layers,
    number: "03",
    headline: "Produtos Digitais que Geram Valor",
    copy: "Transformo suas ideias em aplicações web, sistemas internos e produtos SaaS intuitivos e eficientes, que resolvem problemas reais e encantam seus usuários.",
    accent: "Da ideia ao produto",
  },
  {
    icon: ShieldCheck,
    number: "04",
    headline: "Confiança e Estabilidade Operacional",
    copy: "Construo softwares robustos, testados e observáveis, minimizando falhas e garantindo a estabilidade que seu negócio precisa para operar com tranquilidade.",
    accent: "Zero surpresas",
  },
]

export function Benefits() {
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
              A solução
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-h2 max-w-lg font-normal tracking-[-0.02em] text-foreground"
            >
              Minha Engenharia de Produto entrega:
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" external>
              Falar comigo
            </CtaLink>
          </motion.div>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.number}
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
                {/* icon + number */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.06]">
                    <Icon className="size-4 text-white/70" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                    {item.number}
                  </span>
                </div>

                {/* accent tag */}
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  {item.accent}
                </p>

                <h3 className="mb-3 font-sans text-base font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-lg">
                  {item.headline}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground/75 sm:text-sm">
                  {item.copy}
                </p>

                {/* hover glow */}
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
            Falar comigo
          </CtaLink>
        </motion.div>
      </div>
    </section>
  )
}
