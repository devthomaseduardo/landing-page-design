import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })

const signature = localFont({
  src: "../public/fonts/ShadowHand.ttf",
  variable: "--font-signature",
  display: "swap",
})

const SITE_URL = "https://thomaseduardo.online"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thomas Eduardo — Desenvolvedor Full Stack",
    template: "%s — Thomas Eduardo",
  },
  description:
    "Thomas Eduardo, desenvolvedor Full Stack em São Paulo. Aplicações web, portais, dashboards, APIs e landing pages.",
  openGraph: {
    title: "Thomas Eduardo — Desenvolvedor Full Stack",
    description:
      "Construo sistemas web que organizam processos reais. React, Next.js, Node.js, TypeScript e PostgreSQL.",
    url: SITE_URL,
    siteName: "Thomas Eduardo",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
}

// JSON-LD estruturado
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thomas Eduardo R. Nascimento",
  url: SITE_URL,
  jobTitle: "Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack em São Paulo focado em aplicações web, portais, dashboards, APIs e landing pages.",
  sameAs: [
    "https://github.com/devthomaseduardo",
    "https://linkedin.com/in/devthomaseduardo",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${geist.variable} ${geistMono.variable} ${display.variable} ${signature.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <SmoothScroll>
          <SiteNav />
          <main>{children}</main>
          <FloatingWhatsApp />
          <SiteFooter />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </SmoothScroll>
      </body>
    </html>
  )
}
