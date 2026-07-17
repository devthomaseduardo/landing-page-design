// Ícones reais das tecnologias usando Iconify (Simple Icons / Devicons)

import { Icon } from "@iconify/react"

type TechIconProps = {
  name: string
  className?: string
  showLabel?: boolean
}

const TECH_ICON_MAP: Record<string, { icon: string; color: string }> = {
  React: { icon: "logos:react", color: "#61DAFB" },
  "Next.js": { icon: "simple-icons:nextdotjs", color: "#FFFFFF" },
  TypeScript: { icon: "logos:typescript-icon", color: "#3178C6" },
  "Node.js": { icon: "logos:nodejs-icon", color: "#339933" },
  Fastify: { icon: "simple-icons:fastify", color: "#FFFFFF" },
  Express: { icon: "simple-icons:express", color: "#FFFFFF" },
  PostgreSQL: { icon: "logos:postgresql", color: "#4169E1" },
  Prisma: { icon: "simple-icons:prisma", color: "#FFFFFF" },
  Docker: { icon: "logos:docker-icon", color: "#2496ED" },
  Linux: { icon: "logos:linux-tux", color: "#FCC624" },
  AWS: { icon: "logos:aws", color: "#FF9900" },
  Vercel: { icon: "simple-icons:vercel", color: "#FFFFFF" },
  JWT: { icon: "simple-icons:jsonwebtokens", color: "#D63AFF" },
  "Tailwind CSS": { icon: "logos:tailwindcss-icon", color: "#06B6D4" },
  Python: { icon: "logos:python", color: "#3776AB" },
  MongoDB: { icon: "logos:mongodb-icon", color: "#47A248" },
  "Shell Script": { icon: "simple-icons:gnubash", color: "#4EAA25" },
  "VS Code API": { icon: "logos:visual-studio-code", color: "#007ACC" },
  Git: { icon: "logos:git-icon", color: "#F05032" },
  Figma: { icon: "logos:figma", color: "#F24E1E" },
}

export function TechIcon({
  name,
  className = "size-5",
  showLabel = false,
}: TechIconProps) {
  const tech = TECH_ICON_MAP[name]

  if (!tech) {
    return (
      <span className="rounded-md border border-white/15 bg-white/10 px-2 py-1 font-mono text-[11px] text-white/80">
        {name}
      </span>
    )
  }

  if (showLabel) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-xl border border-white/15 bg-[#1a1a1a] shadow-sm transition-all hover:scale-105 hover:border-white/30">
          <Icon icon={tech.icon} className={className} style={{ color: tech.color }} />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-wider text-white/55">
          {name}
        </span>
      </div>
    )
  }

  return (
    <div
      className="group/icon flex size-9 items-center justify-center rounded-lg border border-white/15 bg-[#1c1c1c] shadow-sm transition-all hover:scale-110 hover:border-white/30 sm:size-10"
      title={name}
    >
      <Icon
        icon={tech.icon}
        className={className}
        style={{ color: tech.color }}
      />
    </div>
  )
}

export function TechIconRow({ stack, max = 6 }: { stack: string[]; max?: number }) {
  const visible = stack.slice(0, max)
  const rest = stack.length - max

  return (
    <div className="flex flex-wrap items-center gap-2">
      {visible.map((tech) => (
        <TechIcon key={tech} name={tech} className="size-5" />
      ))}
      {rest > 0 && (
        <div className="flex size-9 items-center justify-center rounded-lg border border-white/15 bg-[#1c1c1c] font-mono text-[10px] text-white/70 sm:size-10">
          +{rest}
        </div>
      )}
    </div>
  )
}

export function TechGrid({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {stack.map((tech) => (
        <TechIcon key={tech} name={tech} className="size-5" showLabel />
      ))}
    </div>
  )
}
