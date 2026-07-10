import type { Metadata } from "next"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { PrintButton } from "@/components/print-button"
import { CONTACT } from "@/lib/data"

export const metadata: Metadata = {
  title: "Proposta Comercial",
  description: "Proposta comercial de desenvolvimento — página privada.",
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
    <div className="mx-auto max-w-3xl px-5 py-28 sm:py-32 print:py-8">
      {/* Header */}
      <Reveal className="flex items-center justify-between gap-4 border-b border-border pb-8">
        <div className="flex items-center gap-3">
          <Image src="/logo-mark.png" alt="Logo Thomas" width={44} height={44} className="rounded-lg" />
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">{CONTACT.name}</p>
            <p className="text-sm text-muted-foreground">{CONTACT.role}</p>
          </div>
        </div>
        <PrintButton />
      </Reveal>

      <Reveal className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Documento privado</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Proposta Comercial</h1>
        <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
          Olá, tudo bem? Sou desenvolvedor Full Stack e trabalho na criação de sistemas web, automações e interfaces
          digitais com foco em performance, clareza e resultado prático — da concepção da solução ao desenvolvimento
          completo (frontend, backend e integrações).
        </p>
      </Reveal>

      <div className="mt-14 space-y-12">
        <Section n="01" title="Entendimento do projeto">
          <p className="leading-relaxed text-muted-foreground">
            Com base no que conversamos, o objetivo principal é estruturar uma solução digital que:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Resolva o problema descrito",
              "Reduza processos manuais ou a complexidade atual",
              "Melhore organização, controle ou conversão",
              "Funcione de forma escalável",
            ].map((i) => (
              <ListItem key={i}>{i}</ListItem>
            ))}
          </ul>
        </Section>

        <Section n="02" title="Solução proposta">
          <p className="leading-relaxed text-muted-foreground">
            A solução será desenvolvida como uma aplicação web sob medida, contendo:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SOLUTION.map((i) => (
              <ListItem key={i}>{i}</ListItem>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A arquitetura será pensada para permitir evolução futura, sem necessidade de reescrita.
          </p>
        </Section>

        <Section n="03" title="Tecnologias">
          <div className="grid gap-3 sm:grid-cols-2">
            {STACK.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
                <p className="mt-1.5 font-display text-base font-semibold">{s.value}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section n="04" title="Prazo e investimento">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Prazo</p>
                <p className="mt-2 leading-relaxed text-sm text-muted-foreground">
                  Definido após a validação final do escopo. Projetos desse tipo variam conforme a complexidade.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Investimento</p>
                <p className="mt-2 leading-relaxed text-sm text-muted-foreground">
                  Valor base de <span className="font-mono text-foreground">R$ 20/hora</span>. Após alinharmos os
                  detalhes, envio uma proposta fechada com valor fixo e prazo definido.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section n="05" title="Próximos passos">
          <ol className="space-y-3">
            {STEPS.map((s, i) => (
              <li key={s} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="font-display text-xl font-bold text-muted-foreground/50">{i + 1}</span>
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <Reveal className="mt-14 rounded-2xl border border-border bg-card p-8 text-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Vamos seguir?</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Se estiver de acordo, alinhamos os detalhes finais e eu te envio a proposta fechada com prazo e valor.
        </p>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-blue-900/40 bg-gradient-to-r from-blue-950 to-black px-7 py-3.5 text-sm font-medium text-blue-200 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] print:hidden"
        >
          Iniciar conversa
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          {CONTACT.email} · {CONTACT.phone} · CNPJ {CONTACT.cnpj}
        </p>
      </Reveal>
    </div>
  )
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-muted-foreground">{n}</span>
        <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </Reveal>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-foreground/85">
      <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
      {children}
    </li>
  )
}
