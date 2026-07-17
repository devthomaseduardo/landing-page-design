"use client"

import Image from "next/image"
import { CtaLink } from "@/components/ui/cta"
import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { TechGrid } from "@/components/tech-icon"
import { PageAnimator } from "@/components/page-animator"
import { PageHero } from "@/components/page-hero"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const METRICS = [
  { value: "3+", label: "Anos", detail: "Produto e sistemas" },
  { value: "10+", label: "Projetos", detail: "Sites, APIs, plataformas" },
  { value: "98+", label: "Lighthouse", detail: "Performance real" },
  { value: "100%", label: "Full Stack", detail: "Do UI ao deploy" },
]

const PILLARS = [
  {
    n: "01",
    title: "Produto",
    text: "Decisão técnica com impacto no usuário e no negócio.",
  },
  {
    n: "02",
    title: "Engenharia",
    text: "Arquitetura limpa e código que escala sem reescrita.",
  },
  {
    n: "03",
    title: "Confiabilidade",
    text: "Sistemas previsíveis, observáveis e deploys seguros.",
  },
]

const TIMELINE = [
  {
    date: "08/2023 — Atual",
    title: "Software Engineer — Freelancer",
    text: "Aplicações web, APIs, dashboards e autenticação. Deploy em Vercel, AWS e Linux.",
  },
  {
    date: "2024",
    title: "AWS re/Start + Certificações",
    text: "AWS re/Start, API REST & JWT (Ada), UX (FIAP) e IT Essentials (Cisco).",
    certs: true,
  },
  {
    date: "Em andamento",
    title: "Engenharia de Software — Anhanguera",
    text: "Arquitetura de software, cloud e sistemas distribuídos.",
    badge: "Cursando",
  },
]

const STACK_ICONS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Vercel",
  "Prisma",
  "Tailwind CSS",
]

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
}

export default function SobrePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <PageAnimator />

      <PageHero
        kicker="Sobre · São Paulo"
        lines={["Thomas", "Eduardo."]}
        description="Product Engineer · Full Stack. Produtos digitais do zero à produção."
      />

      {/* Bento intro */}
      <section className="border-t border-border/20 py-10 sm:py-14">
        <div className="site-shell">
          <div className="grid gap-3 lg:grid-cols-12 lg:gap-4">
            {/* Bio card */}
            <motion.div
              {...fade}
              className="relative overflow-hidden rounded-2xl border border-border/30 bg-white/[0.02] p-6 sm:p-8 lg:col-span-7 lg:rounded-3xl lg:p-10"
            >
              <p className="label-kicker mb-4">Perfil</p>
              <h2 className="text-h2 font-normal tracking-[-0.02em] text-foreground">
                Produtos digitais
                <br />
                <span className="text-muted-foreground">do zero à produção.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-white/70 sm:text-base">
                Full Stack com 3+ anos de freela. Transformo processos manuais em
                plataformas simples e escaláveis — APIs, dashboards e integrações.
              </p>
              <p className="mt-3 hidden max-w-lg text-sm font-light leading-relaxed text-white/60 sm:block sm:text-base">
                Pilares: clareza de produto, performance técnica e estrutura que
                cresce sem reescrita.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <CtaLink href="/r/wa" variant="solid" size="sm">
                  Falar comigo
                </CtaLink>
                <CtaLink href="/processo" variant="soft" size="sm">
                  Como trabalho
                </CtaLink>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              {...fade}
              transition={{ delay: 0.06 }}
              className="relative min-h-[280px] overflow-hidden rounded-2xl border border-border/30 lg:col-span-5 lg:min-h-full lg:rounded-3xl"
            >
              <Image
                src="/thomas-about.png"
                alt="Thomas Eduardo"
                fill
                className="object-cover object-top"
                sizes="(max-width:1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-sm font-medium tracking-tight text-white">
                  Engenharia de Software
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                  São Paulo, BR · Disponível
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics — only on About */}
      <section id="metricas" className="border-y border-border/25">
        <div className="site-shell">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                {...fade}
                transition={{ delay: i * 0.04 }}
                className={`px-4 py-8 sm:px-6 sm:py-10 ${i % 2 === 0 ? "border-r border-border/25" : ""
                  } ${i < 2 ? "border-b border-border/25 lg:border-b-0" : ""} ${i < 3 ? "lg:border-r lg:border-border/25" : "lg:border-r-0"
                  }`}
              >
                <p className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
                  {m.value}
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white/80">
                  {m.label}
                </p>
                <p className="mt-1 text-xs font-light text-white/55 sm:text-sm">
                  {m.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars — modern strip */}
      <section className="py-10 sm:py-14">
        <div className="site-shell">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div>
              <p className="label-kicker mb-2">Abordagem</p>
              <h2 className="text-h2 text-foreground">Como penso o trabalho.</h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.n}
                {...fade}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border/25 bg-white/[0.02] p-5 transition-colors hover:border-white/15 hover:bg-white/[0.04] sm:p-6"
              >
                <span className="font-mono text-[10px] tracking-widest text-white/40">
                  {p.n}
                </span>
                <h3 className="mt-3 text-lg font-medium tracking-[0.01em] text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/65">
                  {p.text}
                </p>
                <div className="pointer-events-none absolute -right-4 -top-4 size-20 rounded-full bg-white/[0.03] transition-transform group-hover:scale-125" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — vertical modern */}
      <section className="border-t border-border/20 py-10 sm:py-14">
        <div className="site-shell">
          <div className="mb-8 sm:mb-10">
            <p className="label-kicker mb-2">Trajetória</p>
            <h2 className="text-h2 text-foreground">Experiência e formação.</h2>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute bottom-2 left-[0.55rem] top-2 w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent sm:left-[0.7rem]"
            />

            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fade}
                  transition={{ delay: i * 0.06 }}
                  className="relative grid gap-3 pb-10 pl-8 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pl-10 sm:pb-12"
                >
                  <div className="absolute left-0 top-1.5 flex size-3 items-center justify-center rounded-full border border-white/30 bg-black sm:top-2 sm:size-3.5">
                    <span className="size-1 rounded-full bg-white" />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                      {item.date}
                    </p>
                    {item.badge && (
                      <span className="mt-2 inline-flex rounded-full border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/70">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-medium tracking-[0.01em] text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm font-light leading-relaxed text-white/65">
                      {item.text}
                    </p>
                    {item.certs && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          "/certificados/aws-logo.png",
                          "/certificados/ada-logo.png",
                          "/certificados/fiap-logo.png",
                          "/certificados/cisco-logo.png",
                        ].map((cert) => (
                          <div
                            key={cert}
                            className="relative size-11 overflow-hidden rounded-xl border border-border/30 bg-black/50 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                          >
                            <Image
                              src={cert}
                              alt="Certificado"
                              fill
                              className="object-cover"
                              sizes="44px"
                            />
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

      {/* Stack */}
      <section className="border-t border-border/20 bg-white/[0.015] py-10 sm:py-14">
        <div className="site-shell">
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-kicker mb-2">Stack</p>
              <h2 className="text-h2 text-foreground">Ferramentas do dia a dia.</h2>
            </div>
            <Link
              href="/projetos"
              className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-white"
            >
              Ver em projetos
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <TechGrid stack={STACK_ICONS} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/15 bg-black py-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(255,255,255,0.06),transparent_60%)]"
        />
        <div className="site-shell relative text-center">
          <p className="label-kicker mb-3 text-white/45">Próximo passo</p>
          <h2 className="text-h2 font-normal tracking-[-0.02em] text-foreground">
            Tem um projeto
            <br />
            <span className="text-muted-foreground">em mente?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm font-light text-white/60">
            Vamos transformar a ideia em produto real — com clareza de escopo e
            entrega.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2.5 min-[420px]:flex-row">
            <CtaLink href="/r/wa" variant="solid" size="sm">
              Iniciar conversa
            </CtaLink>
            <CtaLink href="/projetos" variant="soft" size="sm">
              Ver projetos
            </CtaLink>
            <CtaLink href="/curriculo" variant="soft" size="sm">
              Currículo
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  )
}
