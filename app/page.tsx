import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { About } from "@/components/home/about"
import { ProjectsStack } from "@/components/home/projects-stack"
import { EngineeringApproach } from "@/components/home/engineering-approach"
import { TechExpertise } from "@/components/home/tech-expertise"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { OliverParallax } from "@/components/home/oliver-parallax"
import { PageAnimator } from "@/components/page-animator"

export const metadata: Metadata = {
  title: "Thomas Eduardo — Software Engineer",
  description:
    "Engenheiro de Software Full Stack em São Paulo. Aplicações web, sistemas internos, APIs e produtos digitais — da arquitetura ao deploy.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <PageAnimator />
      <Hero />
      <ProjectsStack />
      <ClientsCarousel />
      <OliverParallax />
      <EngineeringApproach />
      <TechExpertise />
      <About />
    </>
  )
}

