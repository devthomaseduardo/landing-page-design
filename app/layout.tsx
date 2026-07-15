import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Syne, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { PageLoader } from "@/components/ui/page-loader"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

// nik.co vibe: Suisse Int'l → Inter (body), Heathergreen → Syne (display)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
})
// Display: Syne (statement type, closest free feel to Heathergreen energy)
const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
})

const signature = localFont({
  src: "../public/fonts/ShadowHand.ttf",
  variable: "--font-signature",
  display: "swap",
})

const SITE_URL = "https://thomaseduardo.com.br"

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
  themeColor: "#000000",
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
      className={`dark ${inter.variable} ${mono.variable} ${display.variable} ${signature.variable} bg-background`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('loader-boot','loader-active')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans font-light antialiased overflow-x-hidden" suppressHydrationWarning={true}>
        <SmoothScroll>
          <PageLoader />
          <CustomCursor />
          <SiteNav />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <FloatingWhatsApp />
          <SiteFooter />
          <Analytics />
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  )
}
