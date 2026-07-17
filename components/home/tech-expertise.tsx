"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const EXPERTISE = [
  {
    category: "Frontend",
    description: "Interfaces modernas e de alta performance.",
    techs: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Framer Motion", icon: "simple-icons:framer" },
    ],
  },
  {
    category: "Backend",
    description: "APIs robustas e lógica de negócio escalável.",
    techs: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Fastify", icon: "logos:fastify-icon" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "REST API", icon: "simple-icons:openapiinitiative" },
      { name: "JWT", icon: "simple-icons:jsonwebtokens" },
    ],
  },
  {
    category: "Banco de Dados",
    description: "Modelagem com ORMs modernos.",
    techs: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
    ],
  },
  {
    category: "Infraestrutura",
    description: "Deploy e pipelines em produção.",
    techs: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Git", icon: "logos:git-icon" },
    ],
  },
]

export function TechExpertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-background py-10 sm:py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

      <div className="site-shell">
        <div className="mb-5 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-kicker mb-2 sm:mb-3"
            >
              Stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-h2 text-foreground"
            >
              <span className="sm:hidden">Stack.</span>
              <span className="hidden sm:inline">Ferramentas & tecnologias.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="copy-desktop max-w-xs text-sm font-light leading-relaxed text-muted-foreground sm:text-right"
          >
            Stack moderna, em uso em projetos reais.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3">
          {EXPERTISE.map((group, i) => (
            <div
              key={group.category}
              className="group relative overflow-hidden rounded-xl border border-border/20 bg-transparent p-4 transition-colors hover:border-white/15 hover:bg-white/[0.02] sm:rounded-2xl sm:p-5"
            >
              <div className="mb-3 sm:mb-4">
                <p className="label-kicker mb-0.5 text-muted-foreground/50 sm:mb-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.02em] text-foreground sm:text-lg">
                  {group.category}
                </h3>
                <p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-border/25 pt-3 sm:gap-2 sm:pt-4">
                {group.techs.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="flex size-8 items-center justify-center rounded-lg border border-border/30 bg-card/50 transition-colors hover:border-white/30 sm:size-9"
                  >
                    <Icon icon={tech.icon} className="size-3.5 sm:size-4" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
