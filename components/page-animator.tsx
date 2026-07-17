"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * Page-wide scroll choreography - fade, 3D rise, stagger cards.
 */
export function PageAnimator() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-gsap]")
      targets.forEach((el) => {
        const type = el.dataset.gsap ?? "fade-up"
        const delay = parseFloat(el.dataset.delay ?? "0")

        const fromVars: gsap.TweenVars = {
          opacity: 0,
          duration: 0.75,
          delay,
          ease: "power3.out",
        }

        if (type === "fade-up") {
          fromVars.y = 40
          fromVars.rotateX = 8
          fromVars.transformPerspective = 900
        }
        if (type === "fade-left") fromVars.x = -40
        if (type === "fade-right") fromVars.x = 40
        if (type === "scale-in") {
          fromVars.scale = 0.9
          fromVars.filter = "blur(8px)"
        }
        if (type === "tilt-in") {
          fromVars.y = 48
          fromVars.rotateX = 16
          fromVars.rotateY = -6
          fromVars.scale = 0.94
          fromVars.transformPerspective = 1000
        }

        gsap.from(el, {
          ...fromVars,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      })

      const cardGroups = gsap.utils.toArray<HTMLElement>(".gsap-stagger")
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll<HTMLElement>(".card-animate")
        if (!cards.length) return

        gsap.from(cards, {
          opacity: 0,
          y: 36,
          rotateX: 12,
          scale: 0.94,
          transformPerspective: 900,
          stagger: 0.08,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Soft parallax for elements marked data-parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? "0.15")
        gsap.to(el, {
          yPercent: speed * -30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
