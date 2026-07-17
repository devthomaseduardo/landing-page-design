"use client"

import { motion } from "framer-motion"
import { PROJECTS } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

export function Gallery() {
  // Selecionamos alguns projetos para a galeria visual
  const galleryProjects = PROJECTS.slice(0, 8)

  return (
    <section id="gallery" className="relative py-10 sm:py-16 md:py-20 border-y border-border/40">
      <div className="site-shell">
        <div className="mb-8 flex justify-end sm:mb-10">
          <Link
            href="/projetos"
            className="text-xs font-medium uppercase tracking-[0.12em] text-white/50 hover:text-white transition-colors"
          >
            Ver todos os projetos →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/30 bg-card"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] opacity-70">{project.tag}</p>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{project.title}</h3>
                  </div>
                  {project.year && (
                    <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-mono">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
