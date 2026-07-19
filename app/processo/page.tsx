"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, MessageCircleQuestion } from "lucide-react"
import { CONTACT, SERVICES } from "@/lib/data"
import { motion } from "framer-motion"
import { PageAnimator } from "@/components/page-animator"
import { Icon } from "@iconify/react"
import { CtaLink } from "@/components/ui/cta"
import { PageHero } from "@/components/page-hero"

const STEPS = [
  { step: "01", title: "Conversa", text: "Você explica a ideia e o objetivo.", image: "/images/process/process_conversa.png" },
  { step: "02", title: "Análise", text: "Desafios e melhor solução técnica.", image: "/images/process/process_analise.png" },
  { step: "03", title: "Proposta", text: "Escopo, cronograma e investimento.", image: "/images/process/process_proposta.png" },
  { step: "04", title: "Aprovação", text: "Início após alinhamento e sinal.", image: "/images/process/process_aprovacao.png" },
  { step: "05", title: "Desenvolvimento", text: "Acompanhamento passo a passo.", image: "/images/process/process_desenvolvimento.png" },
  { step: "06", title: "Entrega", text: "Deploy, validação e suporte inicial.", image: "/images/process/process_entrega.png" },
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
  { id: "01", title: "Proposta Comercial", text: "Documento detalhado com o escopo técnico, valores e visão do projeto." },
  { id: "02", title: "Cronograma", text: "Previsão clara de todas as etapas, validações e entregas." },
  { id: "03", title: "Contrato", text: "Garantia jurídica e transparência total de direitos para ambos." },
  { id: "04", title: "Canal Direto", text: "Comunicação ágil e sem ruídos via WhatsApp ou Slack." },
  { id: "05", title: "Deploy e Suporte", text: "Publicação do projeto no ar e acompanhamento nos primeiros dias." },
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
  const [activeStep, setActiveStep] = useState(0)
  const [activeDeliverable, setActiveDeliverable] = useState(0)

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

      {/* Steps */}
      <section id="processo" className="border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02] py-16 sm:py-24">
        <div className="site-shell">
          <div className="mb-10 sm:mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4">
              <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Etapas</p>
            </div>
            <h2 className="text-h2 text-white">Como trabalhamos.</h2>
          </div>

          {/* Interactive Accordion (All screens) */}
          <div className="flex h-[380px] sm:h-[450px] w-full gap-1.5 sm:gap-3">
            {STEPS.map((item, i) => {
              const isActive = activeStep === i
              return (
                <motion.div
                  key={item.step}
                  onHoverStart={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  animate={{ 
                    width: isActive ? "50%" : "10%",
                  }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border cursor-pointer ${
                    isActive ? "border-white/20 bg-white/[0.04] shadow-2xl" : "border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Background Glow & Image */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <Image src={item.image} alt={item.title} fill className="object-cover opacity-70 mix-blend-screen transition-transform duration-[2s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 sm:via-black/20 to-transparent" />
                  </div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end z-10">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className={`flex size-8 sm:size-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border font-mono text-sm sm:text-base font-semibold transition-all duration-500 ${
                        isActive ? "border-white/20 bg-white/10 text-white" : "border-white/10 bg-white/5 text-white/40"
                      }`}>
                        {item.step}
                      </span>
                      
                      <motion.h3 
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                        transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
                        className="text-xl sm:text-3xl font-sans font-semibold tracking-tight text-white whitespace-nowrap"
                      >
                        {item.title}
                      </motion.h3>
                    </div>

                    <motion.div 
                      animate={{ 
                        opacity: isActive ? 1 : 0, 
                        height: isActive ? "auto" : 0,
                        marginTop: isActive ? "0.5rem" : "0"
                      }}
                      transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[13px] sm:text-[15px] font-light leading-relaxed text-white/80 sm:text-white/70 max-w-sm pl-11 sm:pl-16">
                        {item.text}
                      </p>
                    </motion.div>
                  </div>

                  {/* Vertical Title (when inactive) */}
                  <motion.div
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <span className="font-display text-xs sm:text-xl font-semibold tracking-widest text-white/30 uppercase -rotate-90 whitespace-nowrap">
                      {item.title}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade opacity-30 pointer-events-none" />
        <div className="site-shell relative z-10">
          <div className="mb-10 text-center sm:mb-16">
            <p className="label-kicker mb-3">Incluso no escopo</p>
            <h2 className="text-h2 text-white">Tudo que você precisa.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {INCLUDED.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ delay: i * 0.03 }}
                className="card-animate flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm transition-colors hover:bg-white/[0.05]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 shadow-inner">
                  <Icon icon={item.icon} className="size-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 sm:py-24">
        <div className="site-shell">
          <div className="hero-frame animate-frame-glow overflow-hidden bg-[#0A0A0A] border border-white/10">
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              <div className="p-8 sm:p-12 lg:p-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <p className="label-kicker mb-3">Garantia</p>
                  <h2 className="text-h2 text-white">Transparência total.</h2>
                  <ul className="mt-8 space-y-4">
                    {[
                      "Escopo definido antes do início.",
                      "Valor fechado antes do desenvolvimento.",
                      "Mudanças discutidas previamente.",
                      "Sem surpresas financeiras.",
                      "Comunicação constante.",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-4 text-[15px] font-light text-white/80">
                        <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5">
                          <Check className="size-3 text-white" />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 sm:p-12 lg:p-16 bg-white/[0.02] relative">
                <div className="relative z-10">
                  <p className="label-kicker mb-3">Investimento</p>
                  <h2 className="text-h2 text-white">Como é calculado.</h2>
                  <p className="mt-6 text-[15px] leading-relaxed font-light text-white/70 text-pretty">
                    Cada projeto é estimado conforme complexidade, prazo e integrações. Depois da análise, você recebe uma proposta personalizada e definitiva - sem custos extras surpresas.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {["Complexidade", "Prazo", "Integrações", "Escopo"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-black/50 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Types of Projects */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="site-shell">
          <div className="mb-16 sm:mb-24 max-w-2xl">
            <p className="label-kicker mb-3">O que fazemos</p>
            <h2 className="text-h2 text-white">Tipos de projetos.</h2>
          </div>
          
          <div className="flex flex-col border-t border-white/10">
            {SERVICES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group flex flex-col md:flex-row md:items-start border-b border-white/10 py-8 sm:py-10 transition-colors hover:bg-white/[0.02]"
              >
                {/* Number */}
                <div className="mb-4 md:mb-0 md:w-1/6">
                  <span className="font-mono text-xs font-medium text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-4 md:mb-0 md:w-2/6">
                  <h3 className="font-display text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors max-w-[200px]">
                    {item.title}
                  </h3>
                </div>

                {/* Description & Features */}
                <div className="md:w-3/6">
                  <p className="text-[15px] font-light leading-relaxed text-white/50 group-hover:text-white/70 transition-colors max-w-lg mb-6">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {item.features.map((f) => (
                      <li key={f} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/50 transition-colors group-hover:bg-white/10 group-hover:text-white/70">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4">Dúvidas?</p>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-white">Perguntas frequentes.</h2>
          </div>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {FAQ.map((item, i) => (
              <motion.div
                key={item.q}
                {...fadeUp}
                transition={{ delay: i * 0.04 }}
                className="py-6 sm:py-8 group"
              >
                <h3 className="text-lg font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {item.q}
                </h3>
                <p className="mt-3 text-[15px] font-light leading-relaxed text-white/60 max-w-2xl text-pretty">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 mb-16 px-4">
        <div className="site-shell mx-auto max-w-4xl text-center">
          <div className="hero-frame animate-frame-glow overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-black p-12 sm:p-20 shadow-2xl relative rounded-3xl">
            <div className="absolute inset-0 bg-grid-fade opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-sans font-semibold tracking-tight text-white mb-6">
                Vamos conversar
                <br />
                <span className="text-white/40">sobre o seu projeto?</span>
              </h2>
              <p className="mx-auto max-w-md text-base font-light leading-relaxed text-white/60 mb-10">
                Após nosso papo inicial, você recebe uma proposta completa com escopo, cronograma e investimento.
              </p>
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="md" className="px-10 py-5 text-sm uppercase tracking-widest shadow-xl" external>
                Solicitar proposta
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
