"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export interface HoverItem {
  title: string
  subtitle: string
  image: string
  href?: string
  tag?: string
}

interface HoverImageRevealProps {
  items: HoverItem[]
  title?: string
  eyebrow?: string
}

export function HoverImageReveal({ items, title = "Outros trabalhos.", eyebrow = "Histórico de Clientes" }: HoverImageRevealProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Coordenadas do mouse
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Suavização do movimento (efeito mola)
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 }
  const revealX = useSpring(mouseX, springConfig)
  const revealY = useSpring(mouseY, springConfig)

  // Rotação sutil baseada no movimento do cursor
  const rotateX = useSpring(useMotionValue(0), springConfig)
  const rotateY = useSpring(useMotionValue(0), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    // Coordenadas relativas ao container
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    mouseX.set(x - 140) // centraliza o card de imagem (largura/2)
    mouseY.set(y - 100) // centraliza o card de imagem (altura/2)
    
    // Rotação dinâmica dependendo de quão rápido move o mouse
    const rotateDegreeX = ((e.clientY - rect.top) / rect.height - 0.5) * 15
    const rotateDegreeY = ((e.clientX - rect.left) / rect.width - 0.5) * -15
    rotateX.set(rotateDegreeX)
    rotateY.set(rotateDegreeY)
  }

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 overflow-hidden"
    >
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      </div>

      {/* Lista de itens */}
      <div className="relative border-t border-border/30">
        {items.map((item, idx) => {
          const isHovered = hoveredIndex === idx
          
          return (
            <Link
              key={item.title}
              href={item.href || "#"}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="group relative flex flex-col justify-between py-8 border-b border-border/30 sm:flex-row sm:items-center transition-colors hover:bg-card/10 px-4 -mx-4 rounded-xl"
            >
              {/* Esquerda: Título principal e subtítulo */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <span className="font-mono text-xs text-muted-foreground/40 sm:w-8">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/80 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="text-sm text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300">
                  {item.subtitle}
                </span>
              </div>

              {/* Direita: Tag do projeto + ícone */}
              <div className="mt-4 flex items-center gap-4 sm:mt-0">
                {item.tag && (
                  <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover:border-foreground/20 group-hover:text-foreground">
                    {item.tag}
                  </span>
                )}
                <ExternalLink className="size-4 text-muted-foreground/40 group-hover:text-white transition-colors" />
              </div>
            </Link>
          )
        })}
      </div>

      {/* Card Flutuante que acompanha o mouse */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: "absolute",
              left: revealX,
              top: revealY,
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
              pointerEvents: "none",
            }}
            className="z-50 hidden md:block w-72 h-44 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
          >
            <div className="relative w-full h-full">
              <Image
                src={items[hoveredIndex].image}
                alt={items[hoveredIndex].title}
                fill
                className="object-cover object-center filter brightness-[0.8] contrast-[1.05]"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
