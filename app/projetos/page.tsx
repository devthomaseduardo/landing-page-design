"use client"

import Image from "next/image"
import { PROJECTS, CONTACT } from "@/lib/data"
import { motion } from "framer-motion"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { PageAnimator } from "@/components/page-animator"
import { PageHero } from "@/components/page-hero"
import { TechIconRow } from "@/components/tech-icon"
import { CtaLink } from "@/components/ui/cta"
import { ExternalLink } from "lucide-react"

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
      <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="relative aspect-[16/10] bg-black lg:aspect-auto lg:min-h-[260px]">
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

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="label-kicker text-white/45 mb-1">Galeria</p>
              <h3 className="text-sm font-medium tracking-tight text-white mb-3">
                Interface e arquitetura em profundidade.
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {project.gallery.map((img, idx) => (
                  <div key={img} className="group/gallery relative aspect-video rounded-md overflow-hidden border border-white/5 bg-white/5">
                    <Image
                      src={img}
                      alt={`${project.title} - Galeria ${idx + 1}`}
                      fill
                      className="object-cover opacity-80 transition-all duration-500 group-hover/gallery:scale-105 group-hover/gallery:opacity-100"
                      sizes="(max-width: 640px) 33vw, 15vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4">
            <TechIconRow stack={project.stack} max={6} />
            <div className="flex flex-wrap items-center gap-2">
              {project.href ? (
                <CtaLink href={project.href} variant="soft" size="sm" external className="w-fit">
                  Ver projeto
                </CtaLink>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/40">
                  <ExternalLink className="size-3" /> Em breve
                </span>
              )}
              {project.github && (
                <CtaLink href={project.github} variant="outline" size="sm" external className="w-fit">
                  GitHub
                </CtaLink>
              )}
            </div>
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
        <div className="flex flex-col gap-4 sm:gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectItem key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 overflow-hidden rounded-xl border border-white/12 bg-[#121212] sm:rounded-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8 md:p-10 items-center">
            <div className="relative z-10">
              <p className="label-kicker text-white/45 mb-2">Open Source</p>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight mb-3">
                Quer ver mais projetos?
              </h3>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md text-sm sm:text-base">
                Confira meu GitHub para explorar mais códigos, contribuições e a arquitetura detalhada de outros experimentos técnicos.
              </p>
              <CtaLink href={CONTACT.github} variant="solid" size="md" external>
                Acessar meu GitHub
              </CtaLink>
            </div>
            <div className="relative z-10 aspect-[16/10] sm:aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-white/5 flex items-center justify-center">
              <p className="text-white/30 text-xs absolute z-0">Salve a imagem em public/images/github-profile.png</p>
              <Image
                src="/images/github-profile.png"
                alt="Thomas Eduardo GitHub Profile"
                fill
                className="object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-500 z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
