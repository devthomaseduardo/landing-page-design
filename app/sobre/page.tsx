import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { CONTACT, DIFERENCIAIS, STACK } from "@/lib/data"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Desenvolvedor Full Stack com 3+ anos de experiência criando sistemas web, interfaces e automações. Do frontend ao backend, com visão de produto.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre | Thomas Eduardo — Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack com 3+ anos de experiência criando sistemas web, interfaces e automações.",
    images: [{ url: "/portrait.png", width: 800, height: 600, alt: "Thomas Eduardo" }],
  },
}

const TIMELINE = [
  {
    period: "08/2023 — Atual",
    role: "Desenvolvedor Full Stack Freelancer",
    detail:
      "Sites, landing pages, sistemas administrativos e aplicações web para negócios locais e projetos digitais. APIs REST, autenticação, dashboards e deploy em Vercel e Linux.",
  },
  {
    period: "2024",
    role: "AWS re/Start Graduate + Certificações",
    detail:
      "Certificação AWS re/Start, API REST & JWT (Ada), UX Essentials (FIAP) e Fundamentos de Hardware (Cisco).",
  },
  {
    period: "Em andamento",
    role: "Engenharia de Software — Anhanguera",
    detail: "Graduação em andamento, com foco em arquitetura de software e cloud computing.",
  },
]

const FOCUS = ["Full Stack", "Sistemas", "Automações", "APIs"]

/** Divisor editorial numerado — substitui as bordas genéricas entre seções */
function SectionDivider({ index, label }: { index: string; label: string }) {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-10 sm:py-14">
      <span className="font-mono text-xs tracking-widest text-[var(--primary)]">{index}</span>
      <span className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  )
}

export default function SobrePage() {
  return (
    <>
      <PageHero
        kicker="Sobre"
        title="Construo sistemas que viram produto."
        description="Não me vendo como iniciante, mas como alguém operacional: do frontend ao backend, com foco em clareza de produto, performance e estrutura escalável."
      />

      <section className="relative flex flex-col lg:flex-row lg:items-stretch">
        {/* Coluna de texto */}
        <div className="flex-1 px-5 py-20 sm:py-28 lg:flex lg:max-w-[58%] lg:items-center lg:py-0">
          <Reveal className="mx-auto w-full max-w-2xl lg:mx-0 lg:ml-auto lg:pr-12 xl:pr-16">
            <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              Perfil — 01
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              <p>
                Sou <span className="text-foreground">{CONTACT.name}</span>, desenvolvedor Full Stack em formação em
                Engenharia de Software, com cerca de 3 anos atuando como freelancer.
              </p>
              <p>
                Transformo processos manuais, planilhas e atendimentos soltos em plataformas simples, seguras,
                documentadas e publicadas — envolvendo autenticação, APIs REST, controle de acesso, dashboards
                administrativos e integrações.
              </p>
              <p>
                Trabalho com foco em três pontos: clareza de produto, performance e estrutura escalável. Código pensado
                para crescer, não só funcionar.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {FOCUS.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm transition-colors hover:border-[var(--primary)]/50"
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Coluna de imagem — full-bleed, sem card, sem borda genérica */}
        <div className="relative h-[60vh] w-full sm:h-[70vh] lg:sticky lg:top-0 lg:h-screen lg:w-[42%]">
          <Image
            src="/portrait.png"
            alt={`Retrato de ${CONTACT.name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
            className="object-cover"
          />

          {/* Scrim inferior — legibilidade da legenda, independe do tema */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden />

          {/* Fade lateral suave só no desktop, encontro com a coluna de texto */}
          <div
            className="absolute inset-0 hidden bg-gradient-to-r from-background/50 via-transparent to-transparent lg:block"
            aria-hidden
          />

          {/* Legenda estilo "status rail" no canto */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/80 lg:bottom-8 lg:left-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            São Paulo, BR
          </div>
        </div>
      </section>

      <SectionDivider index="02" label="Trajetória" />

      <section>
        <div className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
          <SectionHeading kicker="Trajetória" title="Experiência e formação" />
          <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {TIMELINE.map((t, i) => (
              <Reveal
                key={t.role}
                delay={i * 80}
                className="group relative grid gap-2 bg-card p-6 pl-8 sm:grid-cols-[220px_1fr] sm:gap-8"
              >
                <span
                  className="absolute inset-y-0 left-0 w-0.5 bg-[var(--primary)] opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <span className="font-mono text-sm text-muted-foreground">
                  <span className="mr-2 text-[var(--primary)]">{String(i + 1).padStart(2, "0")}</span>
                  {t.period}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{t.role}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider index="03" label="Stack & Diferenciais" />

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
        <SectionHeading kicker="Stack" title="Ferramentas que uso no dia a dia" />
        <div className="mt-10 flex flex-wrap gap-2.5">
          {STACK.map((s, i) => (
            <Reveal
              key={s}
              delay={i * 30}
              className="rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-foreground/85 transition-colors hover:border-[var(--primary)]/50 hover:text-foreground"
            >
              {s}
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal key={d.title} delay={i * 70} className="group relative bg-card p-6">
              <span
                className="absolute left-0 top-0 h-0.5 w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
              <h3 className="font-display text-base font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Link
            href="/valores"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Ver como cobro
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}