"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CONTACT } from "@/lib/data"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6 // Deixa o vídeo mais lento
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Efeito Parallax e Revelação (Siena Parallax)
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.15])
  const yVideo = useTransform(scrollYProgress, [0, 1], [0, 100])
  const maskRadius = useTransform(scrollYProgress, [0, 0.7], ["30%", "100%"])
  const clipPathString = useTransform(maskRadius, (r) => `circle(${r} at 50% 50%)`)

  // O texto começa invisível (opacity 0) e surge somente quando a máscara expande (entre 25% e 55% de scroll)
  // Depois, desvanece suavemente ao continuar rolando (entre 75% e 100%)
  const opacityText = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.75, 1], [0, 0, 1, 1, 0])
  const yText = useTransform(scrollYProgress, [0.25, 0.55], [40, 0])

  // Animação do card portrait - também surge após a expansão do vídeo
  const opacityPortrait = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.8], [0, 0, 1, 0])
  const scalePortrait = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.8, 0.8, 1])

  return (
    <div ref={containerRef} className="relative h-[180vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Vídeo de fundo com máscara radial dinâmica (Siena Parallax) */}
        <motion.div
          style={{ clipPath: clipPathString }}
          className="absolute inset-0 z-0 select-none pointer-events-none"
        >
          <motion.div
            style={{ y: yVideo, scale }}
            className="relative h-full w-full bg-black"
          >
            <video
              ref={videoRef}
              src="/mais_lento_e_o_fundo_negro.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover brightness-[0.5] contrast-[1.05]"
            />
            {/* Vinheta escura */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/45" />
          </motion.div>
        </motion.div>

        {/* Floating portrait card — bottom right */}
        <motion.div
          style={{ opacity: opacityPortrait, scale: scalePortrait }}
          className="absolute bottom-10 right-6 z-20 hidden lg:block"
        >
          <div className="relative h-48 w-36 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
            <Image
              src="/portrait.png"
              alt={CONTACT.name}
              fill
              className="object-cover object-top"
              sizes="144px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/70">São Paulo, BR</p>
            </div>
          </div>
        </motion.div>

        {/* Textos Centralizados no Hero (surgem depois da máscara circular abrir) */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 flex flex-col items-start justify-center h-full text-left"
        >
          {/* Headline */}
          <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
            Criando produtos digitais <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">com precisão.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
            Arquitetura escalável, performance excepcional e foco em resultados de negócios reais.
          </p>
        </motion.div>

        {/* Scroll indicator (visível inicialmente para convidar o scroll) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
            pointerEvents: "none"
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Rolar para revelar</span>
            <ArrowDown className="size-4 animate-bounce text-white/30" />
          </div>
        </motion.div>

      </div>
    </div>
  )
}