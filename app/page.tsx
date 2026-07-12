import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Hero } from "@/components/home/hero"
import { About } from "@/components/home/about"
import { ProjectsStack } from "@/components/home/projects-stack"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { PageAnimator } from "@/components/page-animator"

// Lazy load heavy components for better performance
const Gallery = dynamic(() => import("@/components/home/gallery").then(mod => ({ default: mod.Gallery })), {
  loading: () => <div className="h-[400px] bg-background" />,
})

const EngineeringApproach = dynamic(() => import("@/components/home/engineering-approach").then(mod => ({ default: mod.EngineeringApproach })), {
  loading: () => <div className="h-[500px] bg-background" />,
})

const TechExpertise = dynamic(() => import("@/components/home/tech-expertise").then(mod => ({ default: mod.TechExpertise })), {
  loading: () => <div className="h-80 bg-background" />,
})

const OliverParallax = dynamic(() => import("@/components/home/oliver-parallax").then(mod => ({ default: mod.OliverParallax })), {
  loading: () => <div className="h-[400px] bg-background" />,
})

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
      <ClientsCarousel />
      <ProjectsStack />
      <Gallery />
      <EngineeringApproach />
      <OliverParallax />
      <TechExpertise />
      <About />
    </>
  )
}
