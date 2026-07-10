"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

export function SobreAnimator() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    gsap.registerPlugin(ScrollTrigger, SplitText)

    const ctx = gsap.context(() => {

      // ── 1. PARALLAX NA IMAGEM DE FUNDO DO HERO ──────────────────────────
      const heroBg = document.querySelector(".hero-bg-img")
      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        })
      }

      // ── 2. HERO H1 — SPLIT TEXT WORD BY WORD ────────────────────────────
      const h1 = document.querySelector<HTMLElement>(".hero-title")
      if (h1) {
        const split = new SplitText(h1, { type: "words,chars" })
        gsap.from(split.chars, {
          opacity: 0,
          y: 60,
          rotateX: -60,
          stagger: 0.025,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.3,
        })
      }

      // ── 3. SUBTÍTULO DO HERO ─────────────────────────────────────────────
      const heroSubtitle = document.querySelector(".hero-subtitle")
      if (heroSubtitle) {
        gsap.from(heroSubtitle, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.9,
          ease: "power3.out",
        })
      }

      // ── 4. STATS — COUNTER ANIMADO ───────────────────────────────────────
      const stats = gsap.utils.toArray(".stat-item")
      if (stats.length > 0) {
        gsap.from(stats, {
          opacity: 0,
          y: 20,
          scale: 0.9,
          stagger: 0.1,
          duration: 0.6,
          delay: 1,
          ease: "back.out(1.7)",
        })
      }

      // ── 5. SEÇÃO "SOBRE" — TEXTO ENTRA DA ESQUERDA ──────────────────────
      const aboutText = document.querySelector(".about-text-block")
      if (aboutText) {
        gsap.from(aboutText, {
          opacity: 0,
          x: -60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutText,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // ── 6. IMAGEM LATERAL ENTRA DA DIREITA ──────────────────────────────
      const aboutImg = document.querySelector(".about-image-block")
      if (aboutImg) {
        gsap.from(aboutImg, {
          opacity: 0,
          x: 60,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutImg,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // ── 7. TIMELINE — CADA ITEM SOBE COM STAGGER ────────────────────────
      const timelineSection = document.querySelector(".timeline-section")
      const timelineItems = gsap.utils.toArray(".timeline-item")
      if (timelineSection && timelineItems.length > 0) {
        gsap.from(timelineItems, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // ── 8. STACK — ÍCONES ENTRAM EM CASCATA ─────────────────────────────
      const stackSection = document.querySelector(".stack-section")
      const stackIcons = gsap.utils.toArray(".stack-section [data-stack-icon]")
      if (stackSection && stackIcons.length > 0) {
        gsap.from(stackIcons, {
          opacity: 0,
          scale: 0,
          rotate: -15,
          stagger: 0.06,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: stackSection,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // ── 9. CARDS DE DIFERENCIAIS — STAGGER GRID ─────────────────────────
      const differentialsGrid = document.querySelector(".diferenciais-grid")
      const differentialCards = gsap.utils.toArray(".diferencial-card")
      if (differentialsGrid && differentialCards.length > 0) {
        gsap.from(differentialCards, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: differentialsGrid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // ── 10. CTA BOTTOM — ENTRA COM SCALE ────────────────────────────────
      const ctaSection = document.querySelector(".cta-section")
      if (ctaSection) {
        gsap.from(ctaSection, {
          opacity: 0,
          scale: 0.97,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaSection,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
