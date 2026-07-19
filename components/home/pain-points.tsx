"use client"

import { motion } from "framer-motion"
import { AlertCircle, Clock, TrendingDown, ShieldAlert } from "lucide-react"

const PAIN_POINTS = [
  {
    icon: TrendingDown,
    number: "01",
    headline: "Sistemas legados que não escalam",
    copy: "Seu produto digital está travado em tecnologias antigas, impedindo o crescimento e a inovação? Sistemas legados consomem recursos e limitam seu potencial de mercado.",
  },
  {
    icon: Clock,
    number: "02",
    headline: "Projetos que atrasam e estouram o orçamento",
    copy: "Cansado de projetos que prometem muito e entregam pouco, com prazos estourados e custos imprevisíveis? A falta de uma engenharia sólida custa caro.",
  },
  {
    icon: AlertCircle,
    number: "03",
    headline: "Ideias que não viram produto",
    copy: "Tem uma visão clara para um novo produto, mas a execução técnica parece um labirinto? A ponte entre a ideia e um software de sucesso exige mais do que código: exige engenharia de produto.",
  },
  {
    icon: ShieldAlert,
    number: "04",
    headline: "Falta de confiança na entrega",
    copy: "Seu time está sobrecarregado com bugs e manutenções constantes? Sistemas sem arquitetura clara geram dívida técnica e instabilidade, minando a confiança do usuário.",
  },
]

export function PainPoints() {
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

      <div className="site-shell relative z-10">
        {/* Section header */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-kicker mb-3 text-muted-foreground/60"
          >
            Reconhece isso?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2 font-normal text-foreground tracking-[-0.02em]"
          >
            Você está perdendo tempo e dinheiro com...
          </motion.h2>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {PAIN_POINTS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.number}
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
                {/* number + icon row */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.04]">
                    <Icon className="size-4 text-white/60" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                    {item.number}
                  </span>
                </div>

                <h3 className="mb-3 font-display text-base font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-lg">
                  {item.headline}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground/70 sm:text-sm">
                  {item.copy}
                </p>

                {/* subtle hover glow */}
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
