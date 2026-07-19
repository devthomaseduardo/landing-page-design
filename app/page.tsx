import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Hero } from "@/components/home/hero"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { PainPoints } from "@/components/home/pain-points"
import { Benefits } from "@/components/home/benefits"
import { ProjectsStack } from "@/components/home/projects-stack"
import { Testimonials } from "@/components/home/testimonials"
import { About } from "@/components/home/about"
import { PageAnimator } from "@/components/page-animator"
import { HomeCta } from "@/components/home/home-cta"

const TechExpertise = dynamic(
  () =>
    import("@/components/home/tech-expertise").then((mod) => ({
      default: mod.TechExpertise,
    })),
  { loading: () => <div className="h-80 bg-background" /> },
)

const EngineeringApproach = dynamic(
  () =>
    import("@/components/home/engineering-approach").then((mod) => ({
      default: mod.EngineeringApproach,
    })),
  { loading: () => <div className="h-[500px] bg-background" /> },
)

const OliverParallax = dynamic(
  () =>
    import("@/components/home/oliver-parallax").then((mod) => ({
      default: mod.OliverParallax,
    })),
  { loading: () => <div className="h-[400px] bg-background" /> },
)

export const metadata: Metadata = {
  title: "Thomas Eduardo | Engenheiro de Produto | Sistemas que Geram Resultado",
  description:
    "Thomas Eduardo — Engenheiro de Produto e Software Full Stack em São Paulo. Transformo desafios de produto e engenharia em sistemas que geram valor real para o seu negócio, com previsibilidade e confiança. Next.js, TypeScript, React e soluções digitais modernas e escaláveis.",
  alternates: { canonical: "/" },
}

/**
 * Estrutura de funil de vendas:
 * 1. Hero           - Atenção + proposta de valor + CTA primário
 * 2. ClientsCarousel - Prova social imediata (logos de clientes)
 * 3. PainPoints     - Agitação da dor do público-alvo
 * 4. Benefits       - Solução: o que minha engenharia entrega
 * 5. ProjectsStack  - Portfólio: prova de capacidade
 * 6. About          - Humanização + perfil
 * 7. TechExpertise  - Stack técnica
 * 8. EngineeringApproach - Processo: transparência e confiança
 * 9. OliverParallax - Galeria visual dos projetos
 * 10. HomeCta       - CTA final de conversão
 */
export default function HomePage() {
  return (
    <>
      <PageAnimator />

      {/* 1. Hero: Atenção e proposta de valor */}
      <Hero />

      {/* 2. Prova social imediata */}
      <ClientsCarousel />

      {/* 3. Agitação da dor */}
      <PainPoints />

      {/* 4. Solução e benefícios */}
      <Benefits />

      {/* 5. Portfólio / Projetos */}
      <ProjectsStack />

      {/* 6. Depoimentos / Prova Social */}
      <Testimonials />

      {/* 7. Sobre / Humanização */}
      <About />

      {/* 7. Stack técnica */}
      <TechExpertise />

      {/* 8. Processo de trabalho */}
      <EngineeringApproach />

      {/* 9. Galeria visual */}
      <OliverParallax />

      {/* 10. CTA Final */}
      <HomeCta />
    </>
  )
}
