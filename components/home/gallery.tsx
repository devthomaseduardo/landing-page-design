"use client"

import { motion, useReducedMotion } from "framer-motion"
import { PROJECTS } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { Tilt3D } from "@/components/ui/tilt-3d"

export function Gallery() {
  const galleryProjects = PROJECTS.slice(0, 8)
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="gallery"
      className="relative border-y border-border/40 py-10 sm:py-16 md:py-20"
    >
      <div className="site-shell">
        <div className="mb-8 flex justify-end sm:mb-10">
          <Link
            href="/projetos"
            className="text-xs font-medium uppercase tracking-[0.12em] text-white/50 transition-colors hover:text-white"
          >
            Ver todos os projetos →
          </Link>
        </div>

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: "1200px" }}
        >
          {galleryProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 36, rotateX: 14, scale: 0.94 }
              }
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.05,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Tilt3D
                max={12}
                scale={1.03}
                className="h-full"
                contentClassName="aspect-[16/10] overflow-hidden rounded-2xl border border-border/30 bg-card"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/tilt:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85" />

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] opacity-70">
                        {project.tag}
                      </p>
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    {project.year && (
                      <span className="shrink-0 rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 font-mono text-[10px]">
                        {project.year}
                      </span>
                    )}
                  </div>
                </div>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`Ver projeto ${project.title}`}
                  />
                )}
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
