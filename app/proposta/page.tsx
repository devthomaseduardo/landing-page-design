import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { PrintButton } from "@/components/print-button"
import { CONTACT } from "@/lib/data"

export const metadata: Metadata = {
  title: "Proposta Comercial",
  description: "Proposta comercial de desenvolvimento - página privada.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: "/proposta" },
  openGraph: {
    title: "Proposta Comercial | Thomas Eduardo",
    description: "Página privada de proposta comercial.",
  },
}

const SOLUTION = [
  "Interface moderna e responsiva",
  "Painel de controle (quando necessário)",
  "Sistema com autenticação (se aplicável)",
  "Integração com APIs externas (se necessário)",
  "Banco de dados estruturado",
  "Foco em performance e usabilidade",
]

const STACK = [
  { label: "Frontend", value: "React / Next.js" },
  { label: "Backend", value: "Node.js / Fastify" },
  { label: "Linguagem", value: "TypeScript" },
  { label: "Banco de dados", value: "PostgreSQL / Prisma" },
]

const STEPS = [
  "Alinhamos os detalhes finais do projeto",
  "Fecho o escopo técnico",
  "Envio a proposta final com prazo e valor",
  "Início do desenvolvimento",
]

export default function PropostaPage() {
  return (
    <main className="min-h-screen bg-background py-16 sm:py-24 print:py-8 flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 sm:px-6">
        <div className="hero-frame animate-frame-glow bg-card/40 backdrop-blur-3xl border border-white/10 relative overflow-hidden">
          {/* Subtle gradient background inside frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
          
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20">
            {/* Header */}
            <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-10">
              <div className="flex items-center gap-4">
                <div className="relative size-12 overflow-hidden rounded-xl border border-white/20">
                  <Image src="/thomas-about.png" alt="Thomas Eduardo" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold tracking-wide text-foreground">{CONTACT.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{CONTACT.role}</p>
                </div>
              </div>
              <PrintButton />
            </Reveal>

            <Reveal className="mt-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-5">
                <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Documento Privado</span>
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Proposta Comercial
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground font-light text-pretty">
                Olá, tudo bem? Sou desenvolvedor Full Stack e trabalho na criação de sistemas web, automações e interfaces digitais com foco em performance, clareza e resultado prático - da concepção da solução ao desenvolvimento completo.
              </p>
            </Reveal>

            <div className="mt-16 space-y-16">
              <Section n="01" title="Entendimento do projeto">
                <p className="leading-relaxed text-muted-foreground font-light mb-5">
                  Com base no que conversamos, o objetivo principal é estruturar uma solução digital que:
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Resolva o problema descrito",
                    "Reduza processos manuais",
                    "Melhore o controle e a conversão",
                    "Funcione de forma escalável",
                  ].map((i) => (
                    <div key={i} className="card-animate rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-white/80" />
                      <span className="text-sm font-light text-white/90">{i}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section n="02" title="Solução proposta">
                <p className="leading-relaxed text-muted-foreground font-light mb-5">
                  A solução será desenvolvida como uma aplicação web sob medida, contendo:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {SOLUTION.map((i) => (
                    <div key={i} className="card-animate rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-white/80" />
                      <span className="text-sm font-light text-white/90">{i}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section n="03" title="Stack Técnica">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {STACK.map((s) => (
                    <div key={s.label} className="card-animate rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">{s.label}</p>
                      <p className="mt-2 font-display text-sm font-semibold tracking-wide text-white">{s.value}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section n="04" title="Prazo e investimento">
                <div className="card-animate overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                    <div className="p-6 sm:p-8">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">Prazo Estimado</p>
                      <p className="mt-3 leading-relaxed text-sm text-white/80 font-light">
                        Definido após a validação final do escopo. Projetos variam conforme a complexidade técnica e requisitos.
                      </p>
                    </div>
                    <div className="p-6 sm:p-8">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">Investimento Base</p>
                      <p className="mt-3 leading-relaxed text-sm text-white/80 font-light">
                        Valor base de <span className="font-mono text-white bg-white/10 px-1.5 py-0.5 rounded ml-1">R$ 20/h</span>. Após alinhamento dos detalhes, envio a proposta com escopo fechado.
                      </p>
                    </div>
                  </div>
                </div>
              </Section>

              <Section n="05" title="Próximos passos">
                <div className="space-y-3">
                  {STEPS.map((s, i) => (
                    <div key={s} className="card-animate flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-display text-sm font-bold text-white/70">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="text-sm font-light text-white/90">{s}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <Reveal className="mt-20 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-transparent p-8 sm:p-12 text-center shadow-2xl relative">
              <div className="absolute inset-0 bg-grid-fade opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Vamos seguir juntos?</h2>
                <p className="mt-4 max-w-lg mx-auto text-sm leading-relaxed text-white/70 font-light">
                  Se estiver de acordo com esta visão inicial, alinhamos os detalhes finais e eu envio a proposta comercial definitiva.
                </p>
                <Link
                  href="/r/wa"
                  className="btn-animate group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black print:hidden"
                >
                  Iniciar Conversa
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  <span>{CONTACT.email}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>{CONTACT.phone}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>CNPJ {CONTACT.cnpj}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  )
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section">
      <div className="flex items-center gap-4 mb-6">
        <span className="flex size-8 items-center justify-center rounded-full bg-white/10 font-mono text-xs text-white">{n}</span>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white">{title}</h2>
      </div>
      <div>{children}</div>
    </Reveal>
  )
}
