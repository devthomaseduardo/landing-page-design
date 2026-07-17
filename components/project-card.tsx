"use client"

import { useRef } from "react"
import Image from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { TechIconRow } from "@/components/tech-icon"
import { PROJECTS } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { Tilt3D } from "@/components/ui/tilt-3d"

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.45, 1])
  const y = useTransform(scrollYProgress, [0, 1], [48, 0])
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0])

  return (
    <motion.div
      ref={cardRef}
      style={
        reduceMotion
          ? undefined
          : {
              scale,
              opacity,
              y,
              rotateX,
              transformPerspective: 1200,
              transformOrigin: "center top",
            }
      }
      className="w-full"
    >
      <Tilt3D
        max={7}
        scale={1.015}
        className="overflow-hidden rounded-xl border border-border/20 bg-card/40 sm:rounded-2xl"
        contentClassName="overflow-hidden rounded-[inherit]"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative order-1 h-44 overflow-hidden sm:h-56 lg:h-auto lg:min-h-[300px]">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover/tilt:scale-[1.06]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100" />

            <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
              <span className="rounded-full border border-white/10 bg-black/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/75 backdrop-blur-md sm:px-3 sm:text-[10px]">
                {String(index + 1).padStart(2, "0")}
                <span className="hidden sm:inline"> · {project.tag}</span>
              </span>
            </div>

            {project.year && (
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                <span className="rounded-full border border-white/10 bg-black/55 px-2 py-0.5 font-mono text-[10px] text-white/55 backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[11px]">
                  {project.year}
                </span>
              </div>
            )}
          </div>

          <div className="order-2 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10">
            <div>
              <h3 className="font-display text-xl font-semibold uppercase tracking-[0.02em] text-foreground transition-transform duration-500 group-hover/tilt:translate-z-2 sm:text-2xl md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-light text-muted-foreground sm:mt-1.5 sm:text-sm md:text-base">
                {project.subtitle}
              </p>

              <p className="copy-desktop mt-4 text-sm leading-relaxed text-foreground/70 sm:text-[15px]">
                {project.description}
              </p>

              <div className="copy-desktop mt-5">
                <p className="label-kicker mb-1.5">Resultado</p>
                <p className="text-sm leading-relaxed text-foreground/75">
                  {project.result}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <p className="label-kicker mb-2 hidden sm:block">Tecnologias</p>
              <div className="hidden sm:block">
                <TechIconRow stack={project.stack} max={7} />
              </div>

              {project.href && (
                <div className="mt-3 sm:mt-6">
                  <CtaLink href={project.href} variant="soft" size="sm" external>
                    Ver projeto
                  </CtaLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </Tilt3D>
    </motion.div>
  )
}
