"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { TechIconRow } from "@/components/tech-icon"

export function ProjectsStack({ projects = PROJECTS.slice(0, 3), hideHeader = false }: { projects?: any[], hideHeader?: boolean }) {
  return (
    <section id="projects" className="relative w-full px-4 sm:px-6 py-12 sm:py-24">
      
      {/* Cabeçalho */}
      {!hideHeader && (
      <div className="mb-24 lg:mb-40 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
        >
          / Trabalhos
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          Projetos Selecionados.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-xl text-muted-foreground"
        >
          Produtos e sistemas que arquitetei e entreguei —
          com foco em escalabilidade, performance e resultado real.
        </motion.p>
        </div>
      )}

      <div className="flex flex-col items-center">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={i} 
          />
        ))}
      </div>

    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
  const top = `calc(10vh + ${index * 40}px)`

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, top }}
      className="sticky w-full max-w-7xl mx-auto mb-24 lg:mb-32 overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-card border border-border/40 shadow-2xl"
    >
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        
        {/* — Lado imagem (dominante) — */}
        <div className="relative h-[50vw] sm:h-[40vw] lg:h-full min-h-[320px] overflow-hidden order-1">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Tag no canto superior esquerdo */}
          <div className="absolute top-5 left-5">
            <span className="rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 border border-white/10">
              {String(index + 1).padStart(2, "0")} · {project.tag}
            </span>
          </div>

          {/* Ano */}
          {project.year && (
            <div className="absolute bottom-5 right-5">
              <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-xs text-white/60 border border-white/10">
                {project.year}
              </span>
            </div>
          )}
        </div>

        {/* — Lado conteúdo — */}
        <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14 order-2">
          
          <div>
            <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 text-lg text-muted-foreground">
              {project.subtitle}
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground/75">
              {project.description}
            </p>

            {/* Resultado em destaque (sem card interno conforme pedido) */}
            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">
                Resultado
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">
                {project.result}
              </p>
            </div>
          </div>

          <div className="mt-8">
            {/* Ícones reais das tecnologias */}
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">
              Tecnologias
            </p>
            <TechIconRow stack={project.stack} max={7} />

            {/* CTA */}
            {project.href && (
              <div className="mt-8">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full border border-border/50 bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-105"
                >
                  <ExternalLink className="size-4" />
                  Ver projeto online
                  <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  )
}
