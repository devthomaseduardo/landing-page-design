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
  { href: "/valores", label: "Valores" },
]

const WHATSAPP = "https://wa.me/5511977070209?text=Ol%C3%A1%20Thomas%2C%20quero%20falar%20sobre%20um%20projeto."

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [shouldHideInitially, setShouldHideInitially] = useState(false)

  useEffect(() => {
    // Oculta o nav no topo em páginas com efeito de portal parallax hero (Home e Projetos)
    const hidePages = ["/", "/projetos"]
    setShouldHideInitially(hidePages.includes(pathname))
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      const threshold = shouldHideInitially ? 100 : 12
      setScrolled(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [shouldHideInitially])

  if (pathname === "/linkbio") return null

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        shouldHideInitially && !scrolled
          ? "opacity-0 pointer-events-none -translate-y-4"
          : "opacity-100 pointer-events-auto translate-y-0",
        scrolled
          ? "bg-background/80 shadow-[0_1px_0_0_oklch(1_0_0/5%)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">

        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-blue-900/40 bg-gradient-to-r from-blue-950 to-black px-5 py-2.5 text-sm font-medium text-blue-200 backdrop-blur transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Falar comigo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="bg-background/95 shadow-[0_18px_50px_oklch(0_0_0/45%)] backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-base",
                  pathname === l.href
                    ? "bg-secondary text-foreground"
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
              className="mt-3 inline-flex items-center justify-center rounded-full border border-blue-900/40 bg-gradient-to-r from-blue-950 to-black px-5 py-3 text-sm font-medium text-blue-200 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            >
              Falar comigo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
