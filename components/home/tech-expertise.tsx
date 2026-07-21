"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { Shape4 } from "@/components/ui/abstract-shapes"
import { useI18n } from "@/lib/i18n/context"

export function TechExpertise() {
  const { t } = useI18n()

  const EXPERTISE = [
    {
      category: t.techExpertise.groups[0].category,
      description: t.techExpertise.groups[0].description,
      techs: [
        { name: "React", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        { name: "Framer Motion", icon: "simple-icons:framer" },
      ],
    },
    {
      category: t.techExpertise.groups[1].category,
      description: t.techExpertise.groups[1].description,
      techs: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Fastify", icon: "logos:fastify-icon" },
        { name: "Express", icon: "simple-icons:express" },
        { name: "REST API", icon: "simple-icons:openapiinitiative" },
        { name: "JWT", icon: "simple-icons:jsonwebtokens" },
      ],
    },
    {
      category: t.techExpertise.groups[2].category,
      description: t.techExpertise.groups[2].description,
      techs: [
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "Prisma", icon: "simple-icons:prisma" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
      ],
    },
    {
      category: t.techExpertise.groups[3].category,
      description: t.techExpertise.groups[3].description,
      techs: [
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "AWS", icon: "logos:aws" },
        { name: "Vercel", icon: "logos:vercel-icon" },
        { name: "Linux", icon: "logos:linux-tux" },
        { name: "Git", icon: "logos:git-icon" },
      ],
    },
  ]
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-background py-10 sm:py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

      <motion.div
        className="pointer-events-none absolute left-10 top-1/3 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ rotate: 180, scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Shape4 />
      </motion.div>

      <div className="site-shell relative z-10">
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
              <span className="sm:hidden">{t.techExpertise.headingMobile}</span>
              <span className="hidden sm:inline">{t.techExpertise.headingDesktop}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="copy-desktop max-w-xs text-sm font-light leading-relaxed text-muted-foreground sm:text-right"
          >
            {t.techExpertise.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
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
