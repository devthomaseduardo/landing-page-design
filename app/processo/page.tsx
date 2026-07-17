"use client"

import { Check, MessageCircleQuestion } from "lucide-react"
import { CONTACT } from "@/lib/data"
import { motion } from "framer-motion"
import { PageAnimator } from "@/components/page-animator"
import { Icon } from "@iconify/react"
import { CtaLink } from "@/components/ui/cta"
import { PageHero } from "@/components/page-hero"
import { MobileCarousel } from "@/components/ui/mobile-carousel"

const STEPS = [
  { step: "01", title: "Conversa", text: "Você explica a ideia e o objetivo." },
  { step: "02", title: "Análise", text: "Desafios e melhor solução técnica." },
  { step: "03", title: "Proposta", text: "Escopo, cronograma e investimento." },
  { step: "04", title: "Aprovação", text: "Início após alinhamento e sinal." },
  { step: "05", title: "Desenvolvimento", text: "Acompanhamento passo a passo." },
  { step: "06", title: "Entrega", text: "Deploy, validação e suporte inicial." },
]

const INCLUDED = [
  { label: "Planejamento", icon: "ph:strategy-bold" },
  { label: "Desenvolvimento", icon: "ph:code-bold" },
  { label: "Responsividade", icon: "ph:devices-bold" },
  { label: "SEO técnico", icon: "ph:magnifying-glass-bold" },
  { label: "Integrações", icon: "ph:plugs-connected-bold" },
  { label: "Deploy", icon: "ph:rocket-launch-bold" },
  { label: "Documentação", icon: "ph:file-text-bold" },
  { label: "Suporte inicial", icon: "ph:headset-bold" },
]

const DELIVERABLES = [
  "Proposta",
  "Cronograma",
  "Escopo",
  "Contrato",
  "Canal direto",
  "Deploy",
  "Suporte",
]

const FAQ = [
  {
    q: "Como funciona o pagamento?",
    a: "Geralmente em duas partes: sinal para iniciar e saldo na entrega. Tudo em contrato.",
  },
  {
    q: "Quando o projeto começa?",
    a: "Após aprovação da proposta/cronograma e confirmação do sinal.",
  },
  {
    q: "Posso solicitar alterações?",
    a: "Sim, com etapas de validação e respeito ao escopo aprovado.",
  },
  {
    q: "Como acompanho o desenvolvimento?",
    a: "Canal direto, updates frequentes e previews para testar.",
  },
  {
    q: "Ainda não sei exatamente o que preciso?",
    a: "A conversa inicial e a análise transformam a ideia em escopo sólido.",
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageAnimator />

      <PageHero
        kicker="Processo"
        lines={["Como funciona", "um projeto."]}
        description="Cada projeto é diferente, mas todos seguem um processo claro do início ao fim."
      />

      <div className="site-shell -mt-2 mb-8 flex flex-col gap-2.5 min-[420px]:flex-row sm:mb-10">
        <CtaLink href={CONTACT.whatsapp} variant="solid" size="sm" external>
          Iniciar um projeto
        </CtaLink>
        <CtaLink href="#processo" variant="soft" size="sm">
          Ver etapas
        </CtaLink>
      </div>

      {/* Steps — compact grid, not huge alternating blocks */}
      <section id="processo" className="border-t border-border/20 py-10 sm:py-14">
        <div className="site-shell">
          <div className="mb-6 sm:mb-8">
            <p className="label-kicker mb-2">Etapas</p>
            <h2 className="text-h2 text-foreground">Como trabalhamos.</h2>
          </div>

          <MobileCarousel
            itemClassName="w-[min(80vw,18rem)]"
            desktopClassName="sm:grid sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-3"
          >
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="h-full rounded-xl border border-border/30 bg-card/25 p-4 sm:p-5"
              >
                <p className="font-mono text-[10px] tracking-widest text-white/35">
                  {item.step}
                </p>
                <h3 className="mt-2 text-sm font-medium tracking-[0.01em] text-foreground sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* Included */}
      <section className="border-t border-border/20 bg-card/5 py-10 sm:py-14">
        <div className="site-shell">
          <div className="mb-6 text-center sm:mb-8">
            <p className="label-kicker mb-2">Incluso</p>
            <h2 className="text-h2 text-foreground">Tudo que você precisa.</h2>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {INCLUDED.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ delay: i * 0.03 }}
                className="flex flex-col items-center gap-2 rounded-xl border border-border/30 bg-card/20 p-3 text-center sm:p-4"
              >
                <div className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80">
                  <Icon icon={item.icon} className="size-4" />
                </div>
                <span className="text-[10px] font-medium tracking-[0.02em] text-white/80 sm:text-xs">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="border-t border-border/20 py-10 sm:py-14">
        <div className="site-shell grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div>
            <p className="label-kicker mb-2">Garantia</p>
            <h2 className="text-h2 text-foreground">Transparência total.</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Escopo definido antes do início.",
                "Valor fechado antes do desenvolvimento.",
                "Mudanças discutidas previamente.",
                "Sem surpresas financeiras.",
                "Comunicação constante.",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2.5 text-sm font-light text-white/70"
                >
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-white/20">
                    <Check className="size-2.5 text-white/80" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-kicker mb-2">Investimento</p>
            <h2 className="text-h2 text-foreground">
              Como é calculado.
            </h2>
            <p className="mt-3 text-sm font-light text-muted-foreground">
              Cada projeto é estimado conforme complexidade, prazo e integrações.
              Depois da análise, uma proposta personalizada — sem surpresas.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Complexidade", "Prazo", "Integrações", "Escopo"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/40 bg-card/30 px-3 py-1 text-[10px] uppercase tracking-wider text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-border/20 bg-card/5 py-10 sm:py-14">
        <div className="site-shell text-center">
          <p className="label-kicker mb-2">Entregáveis</p>
          <h2 className="text-h2 text-foreground">O que você recebe.</h2>
          <div className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-2">
            {DELIVERABLES.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/30 bg-card/25 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/80 sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/20 py-10 sm:py-14">
        <div className="site-shell max-w-3xl">
          <div className="mb-6 text-center sm:mb-8">
            <p className="label-kicker mb-2">FAQ</p>
            <h2 className="text-h2 text-foreground">Perguntas frequentes.</h2>
          </div>
          <div className="space-y-2.5">
            {FAQ.map((item, i) => (
              <motion.div
                key={item.q}
                {...fadeUp}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-border/30 bg-card/20 p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70">
                    <MessageCircleQuestion className="size-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium tracking-[0.01em] text-white">
                      {item.q}
                    </h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-white/55">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/15 bg-black py-12 sm:py-16">
        <div className="site-shell text-center">
          <h2 className="text-h2 text-white">
            Vamos conversar
            <br />
            <span className="text-white/40">sobre o seu projeto?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-light text-white/50">
            Proposta com escopo, cronograma e investimento.
          </p>
          <div className="mt-6">
            <CtaLink href={CONTACT.whatsapp} variant="solid" size="sm" external>
              Solicitar proposta
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  )
}
