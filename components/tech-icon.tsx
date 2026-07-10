// Ícones reais das tecnologias usando Iconify (Simple Icons / Devicons)
// Cada ícone usa a marca real da tecnologia

import { Icon } from "@iconify/react"

type TechIconProps = {
  name: string
  className?: string
  showLabel?: boolean
}

// Mapeamento nome → ícone Iconify
const TECH_ICON_MAP: Record<string, { icon: string; color: string }> = {
  "React":        { icon: "logos:react",               color: "#61DAFB" },
  "Next.js":      { icon: "logos:nextjs-icon",          color: "#ffffff" },
  "TypeScript":   { icon: "logos:typescript-icon",      color: "#3178C6" },
  "Node.js":      { icon: "logos:nodejs-icon",          color: "#339933" },
  "Fastify":      { icon: "logos:fastify-icon",         color: "#ffffff" },
  "Express":      { icon: "simple-icons:express",       color: "#aaaaaa" },
  "PostgreSQL":   { icon: "logos:postgresql",           color: "#336791" },
  "Prisma":       { icon: "simple-icons:prisma",        color: "#2D3748" },
  "Docker":       { icon: "logos:docker-icon",          color: "#2496ED" },
  "Linux":        { icon: "logos:linux-tux",            color: "#FCC624" },
  "AWS":          { icon: "logos:aws",                  color: "#FF9900" },
  "Vercel":       { icon: "logos:vercel-icon",          color: "#ffffff" },
  "JWT":          { icon: "simple-icons:jsonwebtokens", color: "#d63aff" },
  "Tailwind CSS": { icon: "logos:tailwindcss-icon",     color: "#06B6D4" },
  "Python":       { icon: "logos:python",               color: "#3776AB" },
  "MongoDB":      { icon: "logos:mongodb-icon",         color: "#47A248" },
  "Shell Script": { icon: "simple-icons:gnubash",       color: "#4EAA25" },
  "VS Code API":  { icon: "logos:visual-studio-code",   color: "#007ACC" },
  "Git":          { icon: "logos:git-icon",             color: "#F05032" },
  "Figma":        { icon: "logos:figma",                color: "#F24E1E" },
}

export function TechIcon({ name, className = "size-6", showLabel = false }: TechIconProps) {
  const tech = TECH_ICON_MAP[name]

  if (!tech) {
    // Fallback: texto puro
    return (
      <span className="font-mono text-[11px] text-muted-foreground">{name}</span>
    )
  }

  if (showLabel) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-[0.875rem] border border-border/40 bg-card/60 backdrop-blur-sm transition-all hover:scale-110 hover:border-border/80">
          <Icon icon={tech.icon} className={className} />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">{name}</span>
      </div>
    )
  }

  return (
    <div className="group/icon flex size-10 items-center justify-center rounded-[0.75rem] border border-border/40 bg-card/60 backdrop-blur-sm transition-all hover:scale-110 hover:border-border/70" title={name}>
      <Icon icon={tech.icon} className={className} />
    </div>
  )
}

export function TechIconRow({ stack, max = 6 }: { stack: string[]; max?: number }) {
  const visible = stack.slice(0, max)
  const rest = stack.length - max

  return (
    <div className="flex items-center flex-wrap gap-2">
      {visible.map((tech) => (
        <TechIcon key={tech} name={tech} className="size-5" />
      ))}
      {rest > 0 && (
        <div className="flex size-10 items-center justify-center rounded-[0.75rem] border border-border/40 bg-card/60 font-mono text-[10px] text-muted-foreground">
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
