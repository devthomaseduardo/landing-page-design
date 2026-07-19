"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { CONTACT } from "@/lib/data"

export function SiteFooter() {
  const pathname = usePathname()

  if (
    pathname === "/linkbio" ||
    pathname === "/r" ||
    pathname?.startsWith("/r/")
  )
    return null

  return (
    <footer className="relative z-40 mt-auto border-t border-white/5 bg-background pt-10 pb-28 sm:pb-10">
      <div className="site-shell">
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="label-kicker text-white/55">Disponível para projetos</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm font-light text-white/90 transition-colors hover:text-white sm:text-base"
            >
              {CONTACT.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {[
              { href: "/", label: "Início" },
              { href: "/sobre", label: "Sobre" },
              { href: "/projetos", label: "Projetos" },
              { href: "/valores", label: "Valores" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[10px] uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 text-white/45 transition-colors hover:text-white"
              aria-label="GitHub de Thomas Eduardo"
              title="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 text-white/45 transition-colors hover:text-white"
              aria-label="LinkedIn de Thomas Eduardo"
              title="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row">
          <p className="font-display text-sm font-semibold lowercase tracking-[0.12em] text-white/50">
            devthomas
          </p>
          <div className="flex flex-col items-center gap-1 font-mono text-[10px] text-white/30 sm:flex-row sm:gap-4 sm:text-[11px]">
            <p>© {new Date().getFullYear()} Thomas Eduardo</p>
            <p className="hidden text-white/15 sm:inline">·</p>
            <p>São Paulo, BR</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
