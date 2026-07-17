"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MousePointerClick, RotateCcw } from "lucide-react"
import { TechIconRow } from "@/components/tech-icon"
import { PROJECTS } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0]
  index: number
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={
        flipped
          ? `Fechar detalhes de ${project.title}`
          : `Ver detalhes de ${project.title}`
      }
      className="relative h-[400px] w-full cursor-pointer [perspective:1200px] sm:h-[480px] lg:h-[550px]"
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setFlipped((v) => !v)
        }
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* FRONT */}
        <div className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-[#121212] [backface-visibility:hidden] sm:rounded-2xl">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.05]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/15 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85 backdrop-blur-md">
              {String(index + 1).padStart(2, "0")} · {project.tag}
            </span>
          </div>

          {/* Click-to-flip indicator */}
          <div className="absolute right-4 top-4 flex items-center gap-2">
            <span className="hidden rounded-full border border-white/15 bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/75 backdrop-blur-md sm:inline">
              Clique
            </span>
            <motion.div
              className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white shadow-[0_0_24px_rgba(255,255,255,0.12)] backdrop-blur-md sm:size-11"
              animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <MousePointerClick className="size-4 sm:size-5" strokeWidth={1.75} />
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h3 className="font-display text-2xl font-semibold text-white drop-shadow-md sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-light text-white/80 drop-shadow-md">
                {project.subtitle}
              </p>
            </div>
            {project.year && (
              <span className="shrink-0 rounded-full border border-white/15 bg-black/70 px-2.5 py-1 font-mono text-[11px] text-white/70 backdrop-blur-md">
                {project.year}
              </span>
            )}
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-6 [backface-visibility:hidden] sm:rounded-2xl sm:p-8">
          <div>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="label-kicker mb-1 text-white/45">
                  {String(index + 1).padStart(2, "0")} · {project.tag}
                </p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                  {project.title}
                </h3>
              </div>
              <motion.div
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
                animate={{ rotate: [0, -20, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <RotateCcw className="size-4" strokeWidth={1.75} />
              </motion.div>
            </div>

            <p className="text-sm leading-relaxed text-white/75 sm:text-[15px]">
              {project.description}
            </p>

            <div className="mt-5">
              <p className="label-kicker mb-1.5 text-white/45">Resultado</p>
              <p className="text-sm leading-relaxed text-white/80">{project.result}</p>
            </div>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
            <p className="label-kicker mb-2.5 text-white/45">Tecnologias</p>
            <TechIconRow stack={project.stack} max={7} />

            {project.href && (
              <div
                className="mt-6"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <CtaLink href={project.href} variant="soft" size="sm" external>
                  Ver projeto
                </CtaLink>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
