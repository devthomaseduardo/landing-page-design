"use client"

import Link from "next/link"
import { PROJECTS } from "@/lib/data"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"
import { MobileCarousel } from "@/components/ui/mobile-carousel"

export function ProjectsStack({
  projects = PROJECTS.slice(0, 6),
  hideHeader = false,
}: {
  projects?: (typeof PROJECTS)[0][]
  hideHeader?: boolean
}) {
  return (
    <section id="projects" className="relative w-full py-10 sm:py-16 md:py-20">
      {!hideHeader && (
        <div className="site-shell mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-kicker mb-2 sm:mb-3"
            >
              Trabalhos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-h2 font-normal text-foreground tracking-[-0.02em]"
            >
              Projetos selecionados.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Link
              href="/projetos"
              className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/50 transition-colors hover:text-white"
            >
              Ver todos
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      )}

      <div className="site-shell">
        <div className="sm:hidden">
          <MobileCarousel
            itemClassName="w-[min(88vw,22rem)]"
            desktopClassName=""
            dots
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </MobileCarousel>
        </div>

        <div className="hidden flex-col gap-5 sm:flex sm:gap-8 md:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      {!hideHeader && (
        <div className="site-shell mt-8 flex justify-center sm:hidden">
          <Link
            href="/projetos"
            className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-white"
          >
            Ver todos os projetos
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </section>
  )
}
