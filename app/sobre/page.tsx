"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Award } from "lucide-react"
import { motion } from "framer-motion"
import { CONTACT, DIFERENCIAIS, STACK } from "@/lib/data"
import { TechGrid } from "@/components/tech-icon"
import { CurvedDivider } from "@/components/ui/curved-divider"
import { PageAnimator } from "@/components/page-animator"
import { SobreAnimator } from "@/components/sobre-animator"

const TIMELINE = [
  {
    period: "08/2023 — Atual",
    role: "Software Engineer — Freelancer",
    detail:
      "Aplicações web completas, APIs REST, dashboards e sistemas de autenticação para clientes reais. Deploy em Vercel, AWS e Linux.",
    icon: Calendar,
  },
  {
    period: "2024",
    role: "AWS re/Start + Certificações",
    detail:
      "AWS re/Start, API REST & JWT (Ada Tech), UX Essentials (FIAP) e IT Essentials — Hardware (Cisco).",
    icon: Award,
    certs: [
      "/certificados/aws-logo.png",
      "/certificados/ada-logo.png",
      "/certificados/fiap-logo.png",
      "/certificados/cisco-logo.png"
    ]
  },
  {
    period: "Em andamento",
    role: "Engenharia de Software — Anhanguera",
    detail:
      "Graduação com foco em arquitetura de software, cloud computing e sistemas distribuídos.",
    icon: Award,
  },
]

const STATS = [
  { value: "3+", label: "anos de experiência" },
  { value: "10+", label: "projetos entregues" },
  { value: "100%", label: "full stack" },
  { value: "4", label: "certificações" },
]

// Stack técnica exibida com ícones reais
const STACK_ICONS = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS", "Vercel", "Prisma", "Tailwind CSS"]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <PageAnimator />
      <SobreAnimator />

      {/* ═══════════════════════════════════════
          HERO — foto dominante + texto editorial
      ═══════════════════════════════════════ */}
      <section className="hero-section relative min-h-[100dvh] overflow-hidden">

        {/* Imagem de fundo — ocupa toda a tela */}
        <div className="absolute inset-0 hero-bg-img">
          <Image
            src="/fundo-about.png"
            alt={`Foto de ${CONTACT.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Gradiente escuro da esquerda para leitura */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          {/* Gradiente bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Conteúdo sobre a imagem */}
        <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-24 pb-32 text-center sm:px-12 lg:px-20">

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Status */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-5 py-2 backdrop-blur-md transition-colors hover:bg-black/50">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/80">Disponível para projetos</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-5 py-2 backdrop-blur-md transition-colors hover:bg-black/50">
                <MapPin className="size-3.5 text-white/60" />
                <span className="font-mono text-xs uppercase tracking-widest text-white/80">São Paulo, BR</span>
              </div>
            </div>

            <h1 className="hero-title font-display text-4xl sm:text-7xl lg:text-[7rem] font-medium tracking-tight text-white leading-[1]">
              Thomas Eduardo.
            </h1>
            <p className="hero-subtitle mt-4 font-display text-xl font-light tracking-wide text-blue-300/80 sm:text-3xl sm:mt-6">
              Software Engineer Full Stack
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 font-light sm:text-xl">
              Construo aplicações web completas — do banco de dados à interface final —
              com foco em arquitetura escalável, performance e resultado real de negócio.
            </p>
          </motion.div>

          {/* Stats Flutuantes no Rodapé do Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 w-full px-6 flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 rounded-3xl border border-white/10 bg-black/40 px-6 py-5 sm:gap-x-12 sm:gap-y-6 sm:px-10 sm:py-6 backdrop-blur-xl shadow-2xl">
              {STATS.map((s) => (
                <div key={s.label} className="stat-item text-center">
                  <p className="font-display text-3xl font-medium text-white">{s.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </section>

      {/* ═══════════════════════════════════════
          SOBRE — texto editorial profundo
      ═══════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:items-start">

          {/* Texto */}
          <div className="about-text-block">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
            >
              Quem sou
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.1] mb-6 sm:mb-8"
            >
              Transformo processos<br />em produtos digitais.
            </motion.h2>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                Sou <span className="font-medium text-foreground">{CONTACT.name}</span>, desenvolvedor Full Stack
                em formação em Engenharia de Software, com mais de 3 anos atuando como freelancer no
                desenvolvimento de sistemas reais para empresas e clientes independentes.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                Meu trabalho envolve transformar processos manuais, planilhas e atendimentos dispersos
                em plataformas simples, seguras e documentadas — com autenticação, APIs REST,
                controle de acesso, dashboards administrativos e integrações.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
                Foco em três pilares: <span className="text-foreground font-medium">clareza de produto</span>,
                {" "}<span className="text-foreground font-medium">performance técnica</span> e
                {" "}<span className="text-foreground font-medium">estrutura escalável</span>.
                Código pensado para crescer, não apenas funcionar.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <Link
                href="/valores"
                className="btn-animate group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background"
              >
                Ver como cobro
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Imagem lateral com projeto real */}
          <div className="about-image-block relative hidden lg:block"
          >
            <div className="overflow-hidden aspect-[3/4]">
              <Image
                src="/thomas-about.png"
                alt="Desenvolvimento de sistemas"
                fill
                className="object-cover"
                sizes="360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">São Paulo</p>
                <p className="font-display text-sm font-semibold text-white">Desenvolvimento de sistemas</p>
                <p className="font-mono text-xs text-white/60">Que atendem necessidades reais de clientes reais</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRAJETÓRIA — timeline vertical
      ═══════════════════════════════════════ */}
      <section className="timeline-section relative bg-card/10">
        
        <div className="absolute -top-6 inset-x-0 z-20">
          <CurvedDivider />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
          >
            Trajetória
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-12 sm:mb-16"
          >
            Experiência e formação.
          </motion.h2>

          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/40 sm:left-6 hidden sm:block" />

            <div className="space-y-0">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="timeline-item group relative sm:pl-20"
                >
                  {/* Dot na linha */}
                  <div className="absolute left-0 top-8 hidden sm:flex size-12 items-center justify-center rounded-full border border-border/50 bg-card text-muted-foreground transition-all group-hover:border-foreground/30 group-hover:text-foreground">
                    <span className="font-mono text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="border-b border-border/30 py-10 last:border-0">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 mb-2">
                      {t.period}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                      {t.role}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground max-w-2xl">
                      {t.detail}
                    </p>
                    {t.certs && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {t.certs.map(cert => (
                          <div key={cert} className="relative flex size-14 items-center justify-center overflow-hidden rounded-full border border-border/30 bg-card/40 grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100 hover:border-border/60 hover:bg-card/80 shrink-0">
                            <Image src={cert} alt="Certificado" fill className="object-cover" sizes="64px" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STACK — ícones reais + diferenciais
      ═══════════════════════════════════════ */}
      <section className="stack-section mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">

        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

          {/* Stack com ícones reais */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
            >
              Stack técnica
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-10"
            >
              Ferramentas<br />que uso no dia a dia.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <TechGrid stack={STACK_ICONS} />
            </motion.div>
          </div>

          {/* Diferenciais */}
          <div className="diferenciais-grid grid gap-4 sm:grid-cols-2">
            {DIFERENCIAIS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="diferencial-card group rounded-[2rem] border border-border/40 bg-card/30 p-7 transition-all hover:border-foreground/20 hover:bg-card/70"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-[0.75rem] border border-border/50 bg-card font-mono text-xs font-bold text-muted-foreground transition-all group-hover:border-foreground/30 group-hover:text-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground leading-tight">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA bottom — segundo projeto como visual
      ═══════════════════════════════════════ */}
      <section className="cta-section relative overflow-hidden border-t border-border/30">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/projects/homma-section.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-24 sm:py-32 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Tem um projeto<br />em mente?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base sm:text-xl text-muted-foreground"
          >
            Vamos conversar sobre como posso ajudar a transformar sua ideia em produto real.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background"
            >
              Iniciar Conversa no WhatsApp
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border/50 px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-card/60"
            >
              Ver meus projetos
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}