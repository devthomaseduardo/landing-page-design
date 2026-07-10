"use client"

import Image from "next/image"
import { Check, Clock, ShieldCheck, FileText, Zap, MessageCircleQuestion } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { PriceCalculator } from "@/components/price-calculator"
import { Icon } from "@iconify/react"
import { CONTACT } from "@/lib/data"
import { motion } from "framer-motion"
import { PageAnimator } from "@/components/page-animator"

const HOURLY_RATE = 20

const PACKS = [
  {
    name: "Landing / Página",
    hours: "6h",
    hoursNote: "prazo médio: 3 a 5 dias",
    price: "R$ 120",
    priceNote: `R$${HOURLY_RATE}/h × 6h`,
    highlight: false,
    features: [
      "Página única de alta conversão",
      "Responsiva + SEO técnico",
      "Animações e integração com WhatsApp",
      "Deploy na Vercel",
    ],
  },
  {
    name: "Sistema / App",
    hours: "20–40h",
    hoursNote: "prazo médio: 2 a 4 semanas",
    price: "R$ 400 – R$ 800",
    priceNote: `R$${HOURLY_RATE}/h × horas do escopo`,
    highlight: true,
    features: [
      "Dashboard e área administrativa",
      "Autenticação JWT + RBAC",
      "API REST + banco de dados",
      "Documentação e deploy",
    ],
  },
  {
    name: "Automação",
    hours: "10–20h",
    hoursNote: "prazo médio: 1 a 2 semanas",
    price: "R$ 200 – R$ 400",
    priceNote: `R$${HOURLY_RATE}/h × horas do escopo`,
    highlight: false,
    features: [
      "Integração entre sistemas e APIs",
      "Fluxos automatizados",
      "Bots e processamento de dados",
      "Redução de trabalho manual",
    ],
  },
]

const HOW = [
  {
    icon: Clock,
    title: "R$20 por hora, sem pegadinha",
    text: "É o único valor base que uso. Uma landing page de 6h fecha em R$120 — a conta é essa, sem taxa escondida.",
  },
  {
    icon: FileText,
    title: "Proposta com valor fixo",
    text: "Depois de alinhar o escopo, envio uma proposta fechada com número e prazo exatos — não fico cobrando por hora solta.",
  },
  {
    icon: ShieldCheck,
    title: "Sem surpresas",
    text: "Escopo claro antes de começar. Você aprova o valor antes de eu tocar em uma linha de código.",
  },
]

const FAQ = [
  {
    q: "Não sei quantas horas meu projeto vai levar. E agora?",
    a: "Sem problema. Você me conta o que precisa e eu volto com uma estimativa de horas e valor em até 24h — de graça, sem compromisso.",
  },
  {
    q: "O valor pode mudar no meio do projeto?",
    a: "Não. Depois que a proposta é aprovada, o valor é fixo. Se o escopo mudar durante o projeto, alinhamos antes de qualquer ajuste.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Costumo dividir em duas partes: um sinal pra iniciar e o restante na entrega. Pix ou transferência.",
  },
  {
    q: "Preciso já ter tudo definido antes de falar com você?",
    a: "Não. Boa parte do trabalho é justamente ajudar a transformar uma ideia solta num escopo claro, com valor e prazo definidos.",
  },
]

export default function ValoresPage() {
  return (
    <>
      <PageAnimator />
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 bg-background">
        {/* Decorative image corner */}
        <div className="pointer-events-none absolute right-0 top-0 h-[80%] w-[40%] overflow-hidden opacity-15 hidden lg:block">
          <Image
            src="/projects/homma-section.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            / Valores
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl max-w-2xl leading-[1.05]"
          >
            Preço <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">transparente,</span><br />sem enrolação.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-xl text-muted-foreground"
          >
            Trabalho com um único valor base por hora — R${HOURLY_RATE} — e fecho cada projeto 
            com proposta de valor fixo e prazo definido. Simples assim.
          </motion.p>
        </div>
      </section>

      {/* ── VALOR BASE ── */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-[2.5rem] border border-blue-900/30 bg-gradient-to-r from-blue-950/30 to-black/40 px-6 sm:px-10 py-10 sm:py-12 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-blue-400">Valor base</p>
              <p className="mt-2 font-display text-5xl sm:text-6xl font-bold text-foreground">
                R${HOURLY_RATE}
                <span className="text-2xl font-normal text-muted-foreground">/hora</span>
              </p>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Todo orçamento que você vê nessa página nasce dessa conta: horas estimadas × R${HOURLY_RATE}. 
              Sem variação por cliente, sem &quot;depende&quot;.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="gsap-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOW.map((h, i) => {
            const Icon = h.icon
            return (
              <Reveal key={h.title} delay={i * 80}>
                <div className="card-animate group rounded-[2rem] border border-border/40 bg-card/30 p-8 transition-all hover:border-border/60 hover:bg-card/60">
                  <span className="inline-flex size-12 items-center justify-center rounded-[0.75rem] bg-gradient-to-br from-blue-950 to-black border border-blue-900/40 text-blue-400">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ── SIMULATOR ── */}
      <section className="border-y border-border/30 bg-card/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Simulador</p>
              <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
                Calcule uma estimativa<br/>em segundos.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Ajuste as horas e veja o valor na hora, sempre com base nos R${HOURLY_RATE}/hora. 
                É só uma referência inicial — o valor final é fechado com o escopo.
              </p>
            </Reveal>
            {/* Visual decoration */}
            <Reveal delay={100} className="mt-8 hidden lg:block">
              <div className="relative overflow-hidden rounded-[2rem] h-52">
                <Image
                  src="/projects/homma-projetos.webp"
                  alt="Projeto"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-mono text-xs text-white/70">Homma Design — 2026</span>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <PriceCalculator />
          </Reveal>
        </div>
      </section>

      {/* ── PACKS ── */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 text-center">Pacotes</p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-foreground text-center mb-12 sm:mb-16">
            Formatos mais comuns de projeto.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {PACKS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`flex flex-col rounded-[2.5rem] border p-8 h-full transition-all ${
                  p.highlight
                    ? "border-blue-500/50 bg-gradient-to-b from-blue-950/40 to-black/60 shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]"
                    : "border-border/40 bg-card/30 hover:border-blue-500/30"
                }`}
              >
                {p.highlight && (
                  <span className="mb-4 w-fit rounded-full border border-blue-500/50 bg-blue-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-blue-400">
                    Mais procurado
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {p.hours} · {p.hoursNote}
                </p>

                <p className="mt-6 font-display text-4xl font-bold leading-none text-foreground">{p.price}</p>
                <p className="mt-1.5 font-mono text-xs text-muted-foreground">{p.priceNote}</p>

                <ul className="mt-8 space-y-3 border-t border-border/30 pt-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-blue-400" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-animate mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border/40 bg-foreground px-6 py-3 text-sm font-medium text-background"
                >
                  <Icon icon="mdi:whatsapp" className="size-4" />
                  Pedir orçamento
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-[2rem] border border-border/30 bg-card/10 p-7 text-center text-sm text-muted-foreground">
          Prefere conversar antes? Me chame no WhatsApp{" "}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            {CONTACT.phone}
          </a>{" "}
          e descreva o projeto — respondo com uma estimativa de horas e valor rapidinho.
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border/30 bg-card/10">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 text-center">FAQ</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-center mb-12">
              Antes de você me chamar.
            </h2>
          </Reveal>

          <div className="flex flex-col gap-px overflow-hidden rounded-[2rem] border border-border/40">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 70}>
                <div className="group bg-card/30 p-7 hover:bg-card/60 transition-colors">
                  <div className="flex items-start gap-3">
                    <MessageCircleQuestion className="mt-0.5 size-4 shrink-0 text-blue-400" />
                    <h3 className="font-display text-base font-semibold text-foreground">{item.q}</h3>
                  </div>
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={FAQ.length * 70} className="mt-10 text-center">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animate inline-flex items-center justify-center gap-2 rounded-full border border-border/40 bg-foreground px-8 py-4 text-sm font-medium text-background"
            >
              <Icon icon="mdi:whatsapp" className="size-5" />
              Falar agora no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}