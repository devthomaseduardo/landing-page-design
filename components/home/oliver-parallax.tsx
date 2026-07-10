"use client"

import { useEffect, useRef, useState } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Image from "next/image"

const IMAGES = [
  "/projects/homma-projetos.webp",
  "/projects/homma-section.webp",
  "/projects/paper-contratos.svg",
  "/projects/sleep-house-campinas.svg",
  "/projects/academia-spinmove.svg",
  "/projects/yagizi-swissparck.svg",
  "/projects/intituto-kell.svg",
  "/projects/hazap-workstation.svg",
  "/hero.png",
  "/portrait.png",
  "/projects/homma-projetos.webp",
  "/projects/homma-section.webp",
]

export function OliverParallax() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  })

  const { height } = dimension

  // Parallax Y translations for each of the 4 columns
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener("resize", resize)
    resize()
    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <section className="relative bg-background py-20 overflow-hidden border-t border-border/10">
      {/* Seção Header decorativo do portfólio */}
      <div className="mx-auto max-w-7xl px-6 mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 block mb-3">
          / Galeria Visual
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl leading-[1.1]">
          Interface, código e arquitetura em profundidade.
        </h2>
      </div>

      {/* Grid Parallax Wrapper */}
      <div 
        ref={galleryRef} 
        className="relative h-[175vh] w-full overflow-hidden flex gap-[2vw] p-[2vw] justify-center bg-black/20"
      >
        <Column images={[IMAGES[0], IMAGES[1], IMAGES[2]]} y={y} topClass="-top-[15%]" />
        <Column images={[IMAGES[3], IMAGES[4], IMAGES[5]]} y={y2} topClass="-top-[30%]" />
        <Column images={[IMAGES[6], IMAGES[7], IMAGES[8]]} y={y3} topClass="-top-[10%]" />
        <Column images={[IMAGES[9], IMAGES[10], IMAGES[11]]} y={y4} topClass="-top-[25%]" />
      </div>
    </section>
  )
}

interface ColumnProps {
  images: string[]
  y: any
  topClass?: string
}

function Column({ images, y, topClass = "top-0" }: ColumnProps) {
  return (
    <motion.div 
      style={{ y }}
      className={`relative w-1/4 h-full flex flex-col gap-[2vw] min-w-[120px] sm:min-w-[240px] ${topClass}`}
    >
      {images.map((src, idx) => (
        <div 
          key={src + idx} 
          className="relative w-full h-[33%] rounded-[1rem] sm:rounded-[2rem] overflow-hidden border border-white/5 bg-card shadow-2xl"
        >
          <Image 
            src={src} 
            alt="Showcase item" 
            fill 
            className="object-cover filter contrast-[1.03] brightness-[0.8] hover:brightness-100 transition-all duration-500"
            sizes="(max-width: 768px) 120px, 240px"
          />
        </div>
      ))}
    </motion.div>
  )
}
