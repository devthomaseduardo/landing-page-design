"use client"

import { useRef } from "react"
import Link from "next/link"
import { PROJECTS } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ArrowDown, ArrowRight } from "lucide-react"

export function ProjectsStack({
  projects = PROJECTS.slice(0, 6),
  hideHeader = false,
}: {
  projects?: (typeof PROJECTS)[0][]
  hideHeader?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  // Extra end slot (arrow) needs a bit more horizontal travel
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88%"])

  const scrollToNextSection = () => {
    const section = containerRef.current
    if (!section) return
    const next = section.nextElementSibling as HTMLElement | null
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })
  }

  return (
    <section ref={containerRef} id="projects" className="relative h-[450vh] w-full sm:h-[300vh]">
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center overflow-hidden bg-background">
        {!hideHeader && (
          <div className="site-shell pointer-events-none absolute left-0 right-0 top-24 z-10 sm:top-32">
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
                  className="text-h2 font-normal tracking-[-0.02em] text-foreground"
                >
                  Projetos selecionados.
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pointer-events-auto hidden sm:block"
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
          </div>
        )}

        <div className="mt-16 flex w-full items-center pl-[max(env(safe-area-inset-left),6vw)] sm:mt-0 sm:pl-[max(env(safe-area-inset-left),4vw)]">
          <motion.div style={{ x }} className="flex items-center gap-6 pr-[10vw] sm:gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="w-[85vw] flex-shrink-0 sm:w-[600px] lg:w-[800px]"
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}

            {/* End cue: large modern animated arrow pointing down */}
            <div className="flex w-[min(72vw,22rem)] flex-shrink-0 items-center justify-center sm:w-[320px] lg:w-[380px]">
              <button
                type="button"
                onClick={scrollToNextSection}
                aria-label="Continuar para a próxima seção"
                className="group relative flex flex-col items-center gap-5 outline-none"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40 transition-colors group-hover:text-white/70">
                  Continuar
                </span>

                <span className="relative flex size-28 items-center justify-center sm:size-36 lg:size-40">
                  {/* Soft pulse rings */}
                  <motion.span
                    className="absolute inset-0 rounded-full border border-white/10"
                    animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute inset-3 rounded-full border border-white/15 sm:inset-4"
                    animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.05, 0.45] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.35 }}
                  />

                  <motion.span
                    className="relative flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white shadow-[0_0_48px_rgba(255,255,255,0.08)] backdrop-blur-md transition-colors group-hover:border-white/35 group-hover:bg-white/[0.1] sm:size-24 lg:size-28"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowDown
                      className="size-10 sm:size-12 lg:size-14"
                      strokeWidth={1.25}
                    />
                  </motion.span>
                </span>

                <motion.span
                  className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent sm:h-12"
                  animate={{ scaleY: [0.55, 1, 0.55], opacity: [0.35, 0.85, 0.35] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ originY: 0 }}
                />
              </button>
            </div>
          </motion.div>
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
      </div>
    </section>
  )
}
