"use client"

import Image from "next/image"
import { PROJECTS } from "@/lib/data"
import { motion } from "framer-motion"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { PageAnimator } from "@/components/page-animator"
import { PageHero } from "@/components/page-hero"
import { TechIconRow } from "@/components/tech-icon"
import { CtaLink } from "@/components/ui/cta"
import { ExternalLink } from "lucide-react"
import { MobileCarousel } from "@/components/ui/mobile-carousel"

function ProjectItem({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
      className="group overflow-hidden rounded-xl border border-white/12 bg-[#121212] sm:rounded-2xl"
    >
      <div className="grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="relative aspect-[16/10] bg-black sm:aspect-auto sm:min-h-[220px] md:min-h-[260px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/85 backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            {project.year && (
              <span className="rounded-full border border-white/15 bg-black/70 px-2.5 py-1 font-mono text-[9px] text-white/70 backdrop-blur-sm">
                {project.year}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between bg-[#121212] p-4 sm:p-5 md:p-6">
          <div>
            <p className="label-kicker text-white/45">{project.tag}</p>
            <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">
              {project.title}
            </h2>
            <p className="mt-1.5 text-sm font-normal text-white/65 sm:text-[15px]">
              {project.subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {project.description}
            </p>
            <div className="mt-3">
              <p className="label-kicker mb-1.5 text-white/45">Resultado</p>
              <p className="text-sm leading-relaxed text-white/80">
                {project.result}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-3 sm:mt-5">
            <TechIconRow stack={project.stack} max={6} />
            {project.href ? (
              <CtaLink href={project.href} variant="soft" size="sm" external className="w-fit">
                Ver projeto
              </CtaLink>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/40">
                <ExternalLink className="size-3" /> Em breve
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageAnimator />

      <PageHero
        kicker="Trabalhos"
        lines={["Projetos selecionados."]}
        description="Sistemas e produtos com foco em escalabilidade, performance e resultado real."
      />

      <div className="mb-8 sm:mb-10">
        <ClientsCarousel
          title="Clientes e projetos reais"
          titleClassName="label-kicker text-muted-foreground/50"
        />
      </div>

      <section className="site-shell pb-14 sm:pb-20">
        <div className="sm:hidden">
          <MobileCarousel
            itemClassName="w-[min(90vw,22rem)]"
            desktopClassName=""
          >
            {PROJECTS.map((project, i) => (
              <ProjectItem key={project.title} project={project} index={i} />
            ))}
          </MobileCarousel>
        </div>
        <div className="hidden flex-col gap-4 sm:flex sm:gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectItem key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
