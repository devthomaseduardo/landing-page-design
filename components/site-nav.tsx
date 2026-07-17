"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/processo", label: "Processos" },
]

const WHATSAPP =
  "https://wa.me/5511977070209?text=Ol%C3%A1%20Thomas%2C%20quero%20falar%20sobre%20um%20projeto."

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (
    pathname === "/linkbio" ||
    pathname === "/r" ||
    pathname?.startsWith("/r/")
  )
    return null

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 pt-3 sm:px-6 sm:pt-4",
        )}
      >
        {/* Logo - left */}
        <div
          className={cn(
            "rounded-full transition-all duration-300",
            scrolled ? "bg-background/75 px-2.5 py-1.5 backdrop-blur-xl" : "px-1 py-1",
          )}
        >
          <Logo size={24} className="gap-2" />
        </div>

        {/* Compact centered pill nav - desktop */}
        <nav
          className={cn(
            "absolute left-1/2 top-3 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/10 px-1.5 py-1 transition-all duration-300 sm:top-4 md:flex",
            scrolled
              ? "bg-background/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "bg-black/40 backdrop-blur-md",
          )}
        >
          {LINKS.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] transition-colors",
                  active
                    ? "bg-white text-black"
                    : "text-white/55 hover:text-white",
                )}
              >
                {l.label}
              </Link>
            )
          })}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            Contato
          </a>
        </nav>

        {/* Spacer to balance logo width on desktop */}
        <div className="hidden w-[100px] md:block" aria-hidden />

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-foreground md:hidden",
            scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-black/40 backdrop-blur-md",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="pointer-events-auto mx-4 mt-2 rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-0.5">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "min-h-11 rounded-xl px-3 py-3 text-xs uppercase tracking-[0.12em]",
                  pathname === l.href
                    ? "bg-white text-black"
                    : "text-muted-foreground",
                )}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-white px-3 py-2.5 text-center text-xs font-medium uppercase tracking-[0.12em] text-black"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
