"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

// Disciplinas com ícones reais de cada tecnologia
const EXPERTISE = [
  {
    category: "Frontend",
    description: "Interfaces modernas, responsivas e de alta performance.",
    techs: [
      { name: "React",         icon: "logos:react" },
      { name: "Next.js",       icon: "logos:nextjs-icon" },
      { name: "TypeScript",    icon: "logos:typescript-icon" },
      { name: "Tailwind",      icon: "logos:tailwindcss-icon" },
      { name: "Framer Motion", icon: "simple-icons:framer" },
    ],
  },
  {
    category: "Backend",
    description: "APIs robustas, autenticação segura e lógica de negócio escalável.",
    techs: [
      { name: "Node.js",  icon: "logos:nodejs-icon" },
      { name: "Fastify",  icon: "logos:fastify-icon" },
      { name: "Express",  icon: "simple-icons:express" },
      { name: "REST API", icon: "simple-icons:openapiinitiative" },
      { name: "JWT",      icon: "simple-icons:jsonwebtokens" },
    ],
  },
  {
    category: "Banco de Dados",
    description: "Modelagem relacional e não-relacional com ORMs modernos.",
    techs: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Prisma",     icon: "simple-icons:prisma" },
      { name: "MongoDB",    icon: "logos:mongodb-icon" },
    ],
  },
  {
    category: "Infraestrutura",
    description: "Deploy, containerização e pipelines automatizados em produção.",
    techs: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS",    icon: "logos:aws" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Linux",  icon: "logos:linux-tux" },
      { name: "Git",    icon: "logos:git-icon" },
    ],
  },
]

export function TechExpertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      
      {/* Linha separadora top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
            >
              Expertise Técnica
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Ferramentas &<br />Tecnologias.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-sm text-base text-muted-foreground leading-relaxed lg:text-right"
          >
            Stack moderna, testada em produção — escolhida por escalabilidade,
            experiência do desenvolvedor e manutenibilidade a longo prazo.
          </motion.p>
        </div>

        {/* Bento Grid de categorias */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-[2rem] border border-border/40 bg-card/30 p-7 transition-all hover:border-foreground/20 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]"
            >
              {/* Número decorativo de fundo */}
              <span className="pointer-events-none absolute right-4 top-2 font-display text-[5rem] font-bold leading-none text-foreground/[0.03] select-none">
                {String(i + 1).padStart(2, "00")}
              </span>

              {/* Cabeçalho da categoria */}
              <div className="mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {group.category}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>

              {/* Grade de ícones */}
              <div className="flex flex-wrap gap-3 border-t border-border/30 pt-5">
                {group.techs.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="group/icon flex flex-col items-center gap-1.5"
                  >
                    <div className="flex size-11 items-center justify-center rounded-[0.75rem] border border-border/40 bg-card/60 backdrop-blur-sm transition-all hover:scale-110 hover:border-border/80 hover:bg-card">
                      <Icon icon={tech.icon} className="size-5" />
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wide text-muted-foreground/50 max-w-[44px] text-center leading-tight">
                      {tech.name.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Linha inferior — contagem total */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-between border-t border-border/30 pt-8"
        >
          <p className="font-mono text-xs text-muted-foreground/50">
            {EXPERTISE.reduce((acc, g) => acc + g.techs.length, 0)} tecnologias no total
          </p>
          <p className="font-mono text-xs text-muted-foreground/50">
            Todas em uso ativo em projetos reais
          </p>
        </motion.div>

      </div>
    </section>
  )
}
