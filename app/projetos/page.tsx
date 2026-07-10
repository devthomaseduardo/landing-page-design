"use client"

import Image from "next/image"
import { PROJECTS } from "@/lib/data"
import { motion } from "framer-motion"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { ProjectsStack } from "@/components/home/projects-stack"
import { PageAnimator } from "@/components/page-animator"

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageAnimator />

      {/* ── HERO ORIGINAL ── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[45%] overflow-hidden opacity-15 hidden lg:block">
          <Image src="/projects/homma-projetos.webp" alt="" fill className="object-cover object-left" sizes="45vw" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4"
          >
            / Trabalhos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Projetos Selecionados.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Produtos e sistemas que arquitetei e entreguei —
            com foco em escalabilidade, performance e resultado real.
          </motion.p>
        </div>
      </section>

      {/* ── CLIENTS CAROUSEL ── */}
      <div className="mb-20">
        <ClientsCarousel
          title="Clientes e projetos reais."
          titleClassName="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/50"
        />
      </div>

      {/* ── PROJECTS STACK ANIMATED ── */}
      <div className="mt-[-80px] sm:mt-[-120px]">
        <ProjectsStack projects={PROJECTS} hideHeader={true} />
      </div>

    </main>
  )
}
