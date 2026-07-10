"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface SienaParallaxProps {
  imageSrc: string
  title: string
  subtitle: string
  eyebrow: string
}

export function SienaParallax({ imageSrc, title, subtitle, eyebrow }: SienaParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transforma o scroll progress em escala e opacidade da máscara
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.85, 1.1])
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.85])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const maskRadius = useTransform(scrollYProgress, [0, 0.7], ["30%", "100%"])
  
  // Transformar progresso em string de clipPath para animação fluida
  const clipPathString = useTransform(maskRadius, (r) => `circle(${r} at 50% 50%)`)

  return (
    <div ref={containerRef} className="relative h-[180vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Imagem de Fundo com Máscara Radial Animada */}
        <motion.div 
          className="absolute inset-0 z-0 select-none pointer-events-none"
          style={{ clipPath: clipPathString }}
        >
          <motion.div className="relative w-full h-full" style={{ scale }}>
            <Image
              src={imageSrc}
              alt={title}
              fill
              priority
              className="object-cover brightness-[0.4] contrast-[1.05]"
              sizes="100vw"
            />
            {/* Vinheta escura */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          </motion.div>
        </motion.div>

        {/* Textos Centralizados */}
        <motion.div 
          style={{ scale: textScale, opacity: textOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400/80 mb-4 block">
            {eyebrow}
          </span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Indicador de Rolar */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">Rolar para explorar</span>
            <div className="h-10 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent animate-pulse" />
          </div>
        </motion.div>

      </div>
    </div>
  )
}
