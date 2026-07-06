"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

type Project = {
  name: string
  category: string
  description: string
  stack: string[]
  image: string
  href?: string
  year?: string
}

const PROJECTS: Project[] = [
  {
    name: "Homma Design",
    category: "Landing Page",
    description:
      "Landing premium para mobiliário autoral, com estética editorial, vídeos cinematográficos e conversão via WhatsApp.",
    stack: ["Next.js", "Framer Motion", "TailwindCSS"],
    image: "/projects/landing.png",
    href: "https://hommavs.vercel.app",
    year: "2025",
  },
  {
    name: "Sleep House",
    category: "Landing Page",
    description: "Landing comercial para loja de colchões, com catálogo, prova social, FAQ e estrutura de conversão.",
    stack: ["Next.js", "TailwindCSS", "shadcn/ui"],
    image: "/projects/landing.png",
    year: "2025",
  },
  {
    name: "PropostaLink",
    category: "Micro-SaaS",
    description: "Plataforma para criação de propostas comerciais online, com templates, link público e assinatura.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    image: "/projects/gestao.png",
    year: "2025",
  },
  {
    name: "Auth JWT + RBAC",
    category: "Backend / API",
    description: "API de autenticação e permissões: cadastro, login, senha criptografada, refresh token e papéis.",
    stack: ["Node.js", "Fastify", "Prisma", "JWT", "Docker"],
    image: "/projects/automacao.png",
    year: "2024",
  },
  {
    name: "Portal do Cliente / Admin",
    category: "Sistema Interno",
    description: "Portal administrativo com clientes, propostas, contratos, financeiro, mensagens e controle operacional.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    image: "/projects/gestao.png",
    year: "2024",
  },
]

export function HighlightsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(i, PROJECTS.length - 1))
    const child = track.children[clamped] as HTMLElement | undefined
    if (child) track.scrollTo({ left: child.offsetLeft, behavior: "smooth" })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[]
      const center = track.scrollLeft
      let closest = 0
      let min = Number.POSITIVE_INFINITY
      children.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - center)
        if (d < min) {
          min = d
          closest = i
        }
      })
      setIndex(closest)
    }
    track.addEventListener("scroll", onScroll, { passive: true })
    return () => track.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading kicker="Projetos" title="O que já construí" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground/60">
              {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollTo(index - 1)}
                disabled={index === 0}
                aria-label="Anterior"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary/50 hover:bg-secondary disabled:opacity-40"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo(index + 1)}
                disabled={index === PROJECTS.length - 1}
                aria-label="Próximo"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary/50 hover:bg-secondary disabled:opacity-40"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] sm:mt-12 sm:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((p, i) => (
            <figure
              key={p.name}
              className="group relative aspect-[3/4] w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 sm:aspect-[4/5] sm:w-[46%] lg:w-[38%]"
            >
              {/* Imagem — Ken Burns sutil no hover */}
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 38vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />

              {/* Scrim — mais forte na base, garante leitura em qualquer imagem */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/95"
                aria-hidden
              />

              {/* Barra ember que preenche no topo ao hover */}
              <span
                className="absolute left-0 top-0 z-10 h-0.5 w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"
                aria-hidden
              />

              {/* Contador no canto superior */}
              <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-xs text-white/70">
                <span className="text-[var(--primary)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="uppercase tracking-widest">
                  {p.category}
                  {p.year ? ` · ${p.year}` : ""}
                </span>
              </div>

              {/* Link externo no canto superior direito */}
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${p.name}`}
                  className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/20"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              ) : null}

              {/* Texto ancorado no canto inferior esquerdo */}
              <figcaption className="absolute inset-x-5 bottom-5">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{p.name}</h3>
                <p className="mt-2 max-w-[85%] overflow-hidden text-sm leading-relaxed text-white/75 text-pretty [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {p.description}
                </p>

                {/* Hairline que desenha da esquerda pra direita no hover, separando descrição da stack */}
                <span
                  className="mt-4 block h-px w-0 bg-[var(--primary)]/50 transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden
                />

                {/* Stack — some por padrão, revela em mono no hover */}
                <p
                  className="mt-3 translate-y-1 font-mono text-[11px] uppercase tracking-widest text-white/0 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:text-[var(--primary)] group-hover:opacity-100"
                >
                  {p.stack.join("  ·  ")}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-2 flex gap-1.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Ir para o projeto ${i + 1}`}
              className={`h-1 rounded-full transition-all ${
                i === index ? "w-8 bg-[var(--primary)]" : "w-4 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
