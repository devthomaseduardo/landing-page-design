import { CONTACT, PROJECTS } from "@/lib/data"

export type RedirectEntry = {
  slug: string
  label: string
  description?: string
  url: string
  /** Track event name in Vercel Analytics */
  event: string
}

/**
 * Short branded redirects: /r/[slug]
 * Use in IG bio, proposals, QR codes — all traffic is trackable.
 */
export const REDIRECTS: Record<string, RedirectEntry> = {
  wa: {
    slug: "wa",
    label: "WhatsApp",
    description: "Falar sobre um projeto",
    url: CONTACT.whatsapp,
    event: "redirect_whatsapp",
  },
  whatsapp: {
    slug: "whatsapp",
    label: "WhatsApp",
    description: "Falar sobre um projeto",
    url: CONTACT.whatsapp,
    event: "redirect_whatsapp",
  },
  github: {
    slug: "github",
    label: "GitHub",
    description: "Código e repositórios",
    url: CONTACT.github,
    event: "redirect_github",
  },
  linkedin: {
    slug: "linkedin",
    label: "LinkedIn",
    description: "Trajetória profissional",
    url: CONTACT.linkedin,
    event: "redirect_linkedin",
  },
  email: {
    slug: "email",
    label: "E-mail",
    description: CONTACT.email,
    url: `mailto:${CONTACT.email}`,
    event: "redirect_email",
  },
  portfolio: {
    slug: "portfolio",
    label: "Portfólio",
    description: "Site principal",
    url: "https://thomaseduardo.com.br",
    event: "redirect_portfolio",
  },
  site: {
    slug: "site",
    label: "Portfólio",
    description: "Site principal",
    url: "https://thomaseduardo.com.br",
    event: "redirect_portfolio",
  },
  linkbio: {
    slug: "linkbio",
    label: "Links",
    description: "Todos os links",
    url: "https://thomaseduardo.com.br/linkbio",
    event: "redirect_linkbio",
  },
  curriculo: {
    slug: "curriculo",
    label: "Currículo",
    description: "CV completo",
    url: "https://thomaseduardo.com.br/curriculo",
    event: "redirect_curriculo",
  },
  // Project deep links
  homma: {
    slug: "homma",
    label: "Homma Design",
    description: PROJECTS.find((p) => p.title.includes("Homma"))?.subtitle,
    url:
      PROJECTS.find((p) => p.title.includes("Homma"))?.href ??
      "https://thomaseduardo.com.br/projetos",
    event: "redirect_project_homma",
  },
  teron: {
    slug: "teron",
    label: "TERON OS",
    description: PROJECTS.find((p) => p.title.includes("TERON"))?.subtitle,
    url:
      PROJECTS.find((p) => p.title.includes("TERON"))?.href ??
      "https://thomaseduardo.com.br/projetos",
    event: "redirect_project_teron",
  },
}

export function getRedirect(slug: string): RedirectEntry | null {
  const key = slug.toLowerCase().trim()
  return REDIRECTS[key] ?? null
}

export function listRedirects(): RedirectEntry[] {
  // unique by event+url
  const seen = new Set<string>()
  return Object.values(REDIRECTS).filter((r) => {
    const k = `${r.event}:${r.url}`
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}
