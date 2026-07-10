import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Mail, MessageCircle, Globe } from "lucide-react"

import Script from "next/script"

import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { CONTACT } from "@/lib/data"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mockup-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "mockup-id"?: string;
        "aspect-ratio"?: string;
        trigger?: string;
        "trigger-target"?: string;
        "cursor-affect-page"?: string;
        "cursor-range"?: string;
        "camera-zoom"?: string;
        "hide-watermark"?: string;
      };
    }
  }
}

export const metadata: Metadata = {
  title: `Links | ${CONTACT.name}`,
  description: "Meus links e redes sociais.",
  alternates: { canonical: "/linkbio" },
}

const LINKS = [
  {
    title: "Portfólio Oficial",
    description: "Conheça meus projetos e serviços",
    url: "https://thomaseduardo.online",
    icon: Globe,
    image: "/logo-mark.png", // Example thumbnail
    primary: true,
  },
  {
    title: "Falar no WhatsApp",
    description: "Vamos conversar sobre o seu projeto",
    url: CONTACT.whatsapp,
    icon: MessageCircle,
  },
  {
    title: "LinkedIn",
    description: "Minha trajetória profissional",
    url: CONTACT.linkedin,
    icon: LinkedinIcon,
  },
  {
    title: "GitHub",
    description: "Meus repositórios de código",
    url: CONTACT.github,
    icon: GithubIcon,
  },
  {
    title: "E-mail",
    description: "devthomaseduardo@gmail.com",
    url: `mailto:${CONTACT.email}`,
    icon: Mail,
  },
]

export default function LinkBioPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20 px-5">
      <Script src="https://embed.mckp.live/embed.js" strategy="lazyOnload" />
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-background" />
      <div className="absolute inset-0 z-0 opacity-40">
        {/* @ts-expect-error Custom Web Component */}
        <mockup-player
          mockup-id="985e7a9b-14a7-47ff-b5c7-daa4fdaa66df"
          aspect-ratio="16 / 9"
          trigger="hover"
          trigger-target="object"
          cursor-range="1-50-7-50"
          camera-zoom="36"
          hide-watermark="true"
        />
      </div>
      <div className="absolute inset-0 z-0 opacity-30 blur-3xl">
        <Image src="/logo-mark.png" alt="Background" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 z-0 bg-background/60" /> {/* Overlay escuro/claro para leitura */}

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-primary/20 bg-muted p-1">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-secondary/50">
              <Image src="/portrait.png" alt={CONTACT.name} fill className="object-cover" priority />
            </div>
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">{CONTACT.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{CONTACT.role}</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-4 overflow-hidden rounded-3xl border p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)] ${link.primary
                ? "border-blue-500/50 bg-gradient-to-r from-blue-950/40 to-black hover:border-blue-500 hover:from-blue-900/50 hover:to-black"
                : "border-border/40 bg-card/40 hover:border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-950/20 hover:to-transparent"
                }`}
            >
              {link.image ? (
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border">
                  <Image src={link.image} alt={link.title} fill className="object-cover transition-transform group-hover:scale-110" />
                </div>
              ) : (
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] transition-colors ${link.primary
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    : "bg-secondary/40 text-muted-foreground group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    }`}
                >
                  <link.icon className="size-5" />
                </div>
              )}

              <div className="flex-1">
                <h2 className="font-semibold text-foreground">{link.title}</h2>
                <p className="text-xs text-muted-foreground">{link.description}</p>
              </div>

              <ArrowUpRight
                className={`size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${link.primary ? "text-primary" : "text-muted-foreground"
                  }`}
              />
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Thomas Eduardo
          </p>
        </div>
      </div>
    </main>
  )
}
