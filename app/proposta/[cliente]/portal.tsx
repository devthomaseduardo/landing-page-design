"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { CheckCircle2, XCircle, ArrowRight, Clock, Calendar, MessageCircle, ChevronDown } from "lucide-react"
import type { ProposalData } from "@/lib/proposals"
import { CONTACT, CLIENTS, PROJECTS } from "@/lib/data"

const TIMELINE_STEPS = [
  { label: "Diagnóstico", desc: "Alinhamento completo do escopo, objetivos e expectativas do projeto." },
  { label: "Planejamento", desc: "Definição da arquitetura, stack técnica e estrutura de dados." },
  { label: "Design", desc: "Wireframes e protótipo da interface aprovado por você antes do código." },
  { label: "Desenvolvimento", desc: "Construção incremental com entregas parciais para acompanhamento." },
  { label: "Testes", desc: "Validação funcional, responsividade e performance em produção." },
  { label: "Publicação", desc: "Deploy final, documentação e transferência do projeto." },
]

const SCHEDULE_PHASES = [
  { phase: "Pré-início", items: ["Contrato aprovado", "Pagamento inicial confirmado", "Materiais enviados pelo cliente"] },
  { phase: "Execução", items: ["Planejamento e arquitetura", "Desenvolvimento iterativo", "Revisões e ajustes"] },
  { phase: "Entrega", items: ["Testes finais", "Deploy em produção", "Suporte pós-entrega (30 dias)"] },
]

type Section = "welcome" | "about" | "works" | "understanding" | "process" | "scope" | "transparency" | "schedule" | "investment" | "next"

const NAV_SECTIONS: { id: Section; label: string }[] = [
  { id: "welcome", label: "Início" },
  { id: "about", label: "Quem sou" },
  { id: "works", label: "Experiência" },
  { id: "understanding", label: "O projeto" },
  { id: "process", label: "Como faremos" },
  { id: "scope", label: "Escopo" },
  { id: "transparency", label: "Transparência" },
  { id: "schedule", label: "Cronograma" },
  { id: "investment", label: "Investimento" },
  { id: "next", label: "Próximos passos" },
]

export function ProposalPortal({ proposal }: { proposal: ProposalData }) {
  const [started, setStarted] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>("welcome")

  if (!started) {
    return <WelcomeScreen proposal={proposal} onStart={() => setStarted(true)} />
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Progress nav — lateral */}
      <nav className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {NAV_SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={() => setActiveSection(s.id)}
            className="group flex items-center gap-3"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                activeSection === s.id ? "w-6 bg-foreground" : "w-1.5 bg-border/60 group-hover:w-3 group-hover:bg-foreground/50"
              }`}
            />
            <span className={`font-mono text-[10px] uppercase tracking-widest transition-opacity ${activeSection === s.id ? "opacity-70" : "opacity-0 group-hover:opacity-40"}`}>
              {s.label}
            </span>
          </a>
        ))}
      </nav>

      <div className="mx-auto max-w-3xl px-6 py-24 space-y-32">
        <AboutSection />
        <WorksSection />
        <UnderstandingSection proposal={proposal} />
        <ProcessSection />
        <ScopeSection proposal={proposal} />
        <TransparencySection proposal={proposal} />
        <ScheduleSection proposal={proposal} />
        <InvestmentSection proposal={proposal} />
        <NextStepsSection proposal={proposal} />
      </div>
    </div>
  )
}

/* ── WELCOME ── */
function WelcomeScreen({ proposal, onStart }: { proposal: ProposalData; onStart: () => void }) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-black px-6 text-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/mais_lento_e_o_fundo_negro.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl"
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-white/80">Proposta personalizada · Documento privado</span>
        </div>

        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {proposal.greeting}
        </h1>
        <p className="mt-5 text-xl text-white/70 leading-relaxed">
          Preparei uma proposta personalizada para o{" "}
          <span className="font-medium text-white">{proposal.projectTitle}</span>.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Clock className="size-4" />
            {proposal.readingTime} de leitura
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Calendar className="size-4" />
            {new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-foreground px-8 py-4 text-base font-medium text-background shadow-lg transition-shadow hover:shadow-xl"
        >
          Começar apresentação
          <ArrowRight className="size-5" />
        </motion.button>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-16 flex justify-center"
        >
          <ChevronDown className="size-5 text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ── ABOUT ── */
function AboutSection() {
  return (
    <Section id="about" label="01" title="Quem vai desenvolver seu projeto">
      <div className="grid gap-8 sm:grid-cols-[200px_1fr]">
        <div className="relative h-56 w-full sm:h-full overflow-hidden rounded-[2rem] bg-muted/20 border border-border/20">
          <video
            src="/about-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Thomas Eduardo R. Nascimento</h3>
          <p className="mt-1 font-mono text-sm text-muted-foreground">Software Engineer · Full Stack Developer</p>
          <div className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
            <p>Desenvolvo aplicações web completas desde 2023 — do banco de dados à interface — com foco em clareza de produto, performance técnica e resultado real para o negócio.</p>
            <p>Cada projeto que assumo é tratado como um produto: começo entendendo o problema antes de escrever qualquer linha de código, e termino com uma entrega documentada e publicada.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"].map((tech) => (
              <span key={tech} className="rounded-full border border-border/50 bg-card/40 px-3 py-1 font-mono text-xs text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ── UNDERSTANDING ── */
function UnderstandingSection({ proposal }: { proposal: ProposalData }) {
  const cards = [
    { label: "Objetivo", value: proposal.objective },
    { label: "Problema identificado", value: proposal.problem },
    { label: "Solução proposta", value: proposal.solution },
    { label: "Resultado esperado", value: proposal.expectedResult },
  ]
  return (
    <Section id="understanding" label="03" title="Entendimento do projeto">
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c, i) => (
          <MotionCard key={c.label} delay={i * 0.08}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-3">{c.label}</p>
            <p className="text-sm leading-relaxed text-foreground/85">{c.value}</p>
          </MotionCard>
        ))}
      </div>
    </Section>
  )
}

/* ── PROCESS ── */
function ProcessSection() {
  return (
    <Section id="process" label="04" title="Como será desenvolvido">
      <div className="relative flex flex-col gap-px">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border/40" />
        {TIMELINE_STEPS.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08 }}
            className="relative flex gap-6 pb-8 last:pb-0"
          >
            <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card font-mono text-xs font-bold text-foreground">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="pt-2">
              <h3 className="font-display text-base font-semibold text-foreground">{step.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

/* ── SCOPE ── */
function ScopeSection({ proposal }: { proposal: ProposalData }) {
  return (
    <Section id="scope" label="05" title="Escopo da entrega">
      <MotionCard>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-5">Incluído nesta proposta</p>
        <ul className="space-y-3">
          {proposal.included.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
              <span className="text-sm leading-relaxed text-foreground/85">{item}</span>
            </li>
          ))}
        </ul>
      </MotionCard>
    </Section>
  )
}

/* ── TRANSPARENCY ── */
function TransparencySection({ proposal }: { proposal: ProposalData }) {
  return (
    <Section id="transparency" label="06" title="O que não está incluso">
      <p className="text-base text-muted-foreground mb-8 max-w-xl">
        Para garantir alinhamento e evitar surpresas, listo abaixo o que <strong className="text-foreground font-medium">não faz parte</strong> desta proposta. Cada item pode ser incorporado mediante novo escopo e orçamento.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {proposal.notIncluded.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-start gap-3 rounded-2xl border border-border/30 bg-card/20 px-5 py-4"
          >
            <XCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
            <span className="text-sm text-muted-foreground">{item}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

/* ── SCHEDULE ── */
function ScheduleSection({ proposal }: { proposal: ProposalData }) {
  return (
    <Section id="schedule" label="07" title="Cronograma estimado">
      <div className="mb-10 flex items-center gap-4 rounded-2xl border border-border/40 bg-card/30 px-6 py-4">
        <Clock className="size-5 text-muted-foreground" />
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">Prazo estimado</p>
          <p className="font-display text-lg font-semibold text-foreground">{proposal.estimatedWeeks} semanas após o início</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {SCHEDULE_PHASES.map((phase, i) => (
          <MotionCard key={phase.phase} delay={i * 0.1}>
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-card border border-border/50 px-3 py-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">{phase.phase}</span>
            </div>
            <ul className="space-y-2.5">
              {phase.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-border/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </MotionCard>
        ))}
      </div>
    </Section>
  )
}

/* ── INVESTMENT ── */
function InvestmentSection({ proposal }: { proposal: ProposalData }) {
  return (
    <Section id="investment" label="08" title="Investimento">
      <div className="overflow-hidden rounded-[2.5rem] border border-border/40 bg-card/30">
        <div className="p-10 sm:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Valor total</p>
          <p className="font-display text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
            {proposal.totalValue}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/30 bg-background/40 px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1">Forma de pagamento</p>
              <p className="text-sm font-medium text-foreground">{proposal.paymentTerms}</p>
            </div>
            <div className="rounded-2xl border border-border/30 bg-background/40 px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1">Validade</p>
              <p className="text-sm font-medium text-foreground">{proposal.deadline}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/30 bg-card/20 px-10 py-6 sm:px-14">
          <p className="text-sm leading-relaxed text-muted-foreground italic">
            &ldquo;{proposal.personalNote}&rdquo;
          </p>
          <p className="mt-3 font-mono text-xs text-muted-foreground/50">— Thomas Eduardo</p>
        </div>
      </div>
    </Section>
  )
}

/* ── NEXT STEPS ── */
function NextStepsSection({ proposal }: { proposal: ProposalData }) {
  const steps = [
    "Aprovação desta proposta",
    "Formalização do contrato",
    "Início do desenvolvimento",
  ]
  return (
    <Section id="next" label="09" title="Vamos começar?">
      <div className="mb-10 space-y-3">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 rounded-2xl border border-border/30 bg-card/30 px-6 py-4"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-xs font-bold text-background">
              {i + 1}
            </span>
            <span className="text-sm font-medium text-foreground">{step}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-foreground px-8 py-4 text-base font-semibold text-background transition-transform hover:scale-105"
        >
          <MessageCircle className="size-5" />
          Aprovar proposta
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border/50 bg-card/30 px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-card/60"
        >
          Enviar e-mail
        </a>
      </div>
      <p className="mt-8 text-center font-mono text-xs text-muted-foreground/50">
        {CONTACT.email} · {CONTACT.phone} · CNPJ {CONTACT.cnpj}
      </p>
    </Section>
  )
}

/* ── UI HELPERS ── */
function Section({ id, label, title, children }: {
  id: string; label: string; title: string; children: React.ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-xs font-bold text-muted-foreground/40">{label}</span>
        <div className="h-px flex-1 bg-border/30" />
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-10">
        {title}.
      </h2>
      {children}
    </motion.section>
  )
}

function MotionCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-[1.75rem] border border-border/40 bg-card/30 p-7"
    >
      {children}
    </motion.div>
  )
}

/* ── WORKS & CLIENTS ── */
function WorksSection() {
  return (
    <Section id="works" label="02" title="Experiência e parceiros">
      <div className="space-y-16">
        {/* Clients Grid */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-5">
            Marcas que confiam no trabalho
          </p>
          <div className="flex flex-wrap gap-4">
            {CLIENTS.map((client) => (
              <div key={client.name} className="flex h-16 px-6 items-center justify-center rounded-2xl border border-border/20 bg-card/10 opacity-60 transition-all hover:opacity-100 hover:border-border/50 hover:bg-card/30">
                <span className="font-signature text-3xl whitespace-nowrap text-foreground/80 tracking-wide">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Preview */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-5">
            Entregas recentes
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-border/30 bg-card/20 p-5 transition-colors hover:bg-card/40 hover:border-border/60"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="px-2 pb-2">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 mb-2">{project.tag}</p>
                  <h4 className="font-display text-lg font-semibold text-foreground">{project.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
