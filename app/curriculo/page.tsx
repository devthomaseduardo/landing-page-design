import type { Metadata } from "next"
import { CONTACT, STACK, DIFERENCIAIS } from "@/lib/data"
import { PrintButton } from "@/components/print-button"

export const metadata: Metadata = {
  title: "Currículo",
  description: `Currículo de ${CONTACT.name} — Desenvolvedor Full Stack / Product Engineer.`,
  alternates: { canonical: "/curriculo" },
  openGraph: {
    title: `Currículo | ${CONTACT.name}`,
    description: `Desenvolvedor Full Stack / Product Engineer.`,
  },
}

const EXPERIENCE = [
  {
    period: "08/2023 — Atual",
    role: "Desenvolvedor Full Stack Freelancer",
    detail:
      "Sites, landing pages, sistemas administrativos e aplicações web para negócios locais e projetos digitais. APIs REST, autenticação JWT, dashboards administrativos e deploy em Vercel e Linux.",
  },
  {
    period: "2024",
    role: "AWS re/Start Graduate + Certificações",
    detail: "Certificação AWS re/Start, API REST & JWT (Ada), UX Essentials (FIAP), Fundamentos de Hardware (Cisco).",
  },
  {
    period: "Em andamento",
    role: "Engenharia de Software — Anhanguera",
    detail: "Graduação em andamento, com foco em arquitetura de software e cloud computing.",
  },
]

const PROJECTS = [
  {
    name: "Torcida Urbana — E-commerce Backend",
    detail:
      "Backend completo de e-commerce: autenticação JWT, Prisma + PostgreSQL, containerização com Docker, API REST estruturada para catálogo, pedidos e controle de acesso.",
  },
  {
    name: "HOMMA — Frontend de marca (Campinas, SP)",
    detail:
      "Componentes de alta fidelidade visual para marca de mobiliário de alto padrão: hero cinematográfico em vídeo, galeria de scroll editorial, seções com Framer Motion.",
  },
]

export default function CurriculoPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 print:px-0 print:py-0">
      {/* Botão de ação — some na impressão */}
      <div className="mb-10 flex justify-end print:hidden">
        <PrintButton />
      </div>

      {/* Cabeçalho */}
      <header className="border-b border-border pb-6 print:border-black/20">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] print:text-black/60">
          Currículo
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground print:text-black">
          {CONTACT.name}
        </h1>
        <p className="mt-1 text-base text-muted-foreground print:text-black/70">
          Desenvolvedor Full Stack — Product Engineer
        </p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-muted-foreground print:text-black/70">
          <span>{CONTACT.phone}</span>
          <span>São Paulo, SP — Brasil</span>
          {/* ajuste os campos abaixo conforme o shape real do seu CONTACT em lib/data */}
          {"email" in CONTACT && <span>{(CONTACT as any).email}</span>}
          {"site" in CONTACT && <span>{(CONTACT as any).site}</span>}
          {"github" in CONTACT && <span>{(CONTACT as any).github}</span>}
        </div>
      </header>

      {/* Resumo */}
      <section className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] print:text-black/60">
          Resumo
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85 print:text-black">
          Desenvolvedor Full Stack em formação em Engenharia de Software, com cerca de 3 anos de experiência
          transformando processos manuais em plataformas seguras e escaláveis — do frontend ao backend, com
          autenticação, APIs REST, dashboards administrativos e integrações. Foco em clareza de produto, performance
          e estrutura pensada para crescer.
        </p>
      </section>

      {/* Experiência */}
      <section className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] print:text-black/60">
          Experiência e formação
        </h2>
        <div className="mt-4 space-y-5">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-foreground print:text-black">{e.role}</h3>
                <span className="font-mono text-xs text-muted-foreground print:text-black/60">{e.period}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground print:text-black/80">{e.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] print:text-black/60">
          Projetos em destaque
        </h2>
        <div className="mt-4 space-y-5">
          {PROJECTS.map((p) => (
            <div key={p.name} className="break-inside-avoid">
              <h3 className="font-display text-base font-semibold text-foreground print:text-black">{p.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground print:text-black/80">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] print:text-black/60">
          Stack
        </h2>
        <div className="mt-3 flex flex-wrap gap-2 print:gap-1.5">
          {STACK.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground/85 print:border-black/20 print:bg-transparent print:text-black"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="mt-8 mb-16 print:mb-0">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] print:text-black/60">
          Diferenciais
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-4">
          {DIFERENCIAIS.map((d) => (
            <div key={d.title} className="break-inside-avoid">
              <h3 className="font-display text-sm font-semibold text-foreground print:text-black">{d.title}</h3>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground print:text-black/70">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}