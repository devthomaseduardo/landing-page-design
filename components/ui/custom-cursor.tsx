"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Configuração de mola (spring) para o anel externo seguir o cursor com suavização física
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 }
  const cursorRingX = useSpring(cursorX, springConfig)
  const cursorRingY = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Detecta se é dispositivo móvel/touch (desativa cursor customizado)
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      )
    }

    if (isTouchDevice()) {
      return
    }

    setIsVisible(true)

    // Ativa ocultação do cursor original do navegador
    document.documentElement.classList.add("custom-cursor-active")

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Detecta hover em botões, links, carrosséis e cards
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // Verifica se o elemento ou seus pais são clicáveis/interativos
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".btn-animate") ||
        target.closest(".card-animate") ||
        target.closest(".diferencial-card") ||
        target.closest(".timeline-item") ||
        target.classList.contains("clickable") ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsHovered(!!isInteractive)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      document.documentElement.classList.remove("custom-cursor-active")
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Ponto central (firme, segue o mouse imediatamente) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Anel externo (suave, reage ao clique e hover) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorRingX,
          y: cursorRingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (isClicking ? 48 : 56) : (isClicking ? 20 : 32),
          height: isHovered ? (isClicking ? 48 : 56) : (isClicking ? 20 : 32),
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
          borderColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      />
    </>
  )
}
