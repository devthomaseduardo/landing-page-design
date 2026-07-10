"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * Drop this component anywhere in a page to automatically animate
 * all elements with data-gsap="fade-up | fade-left | fade-right | scale-in"
 * and all .card-animate elements with a stagger.
 */
export function PageAnimator() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    gsap.registerPlugin(ScrollTrigger)

    // Generic data-gsap targets
    const targets = gsap.utils.toArray<HTMLElement>("[data-gsap]")
    targets.forEach((el) => {
      const type = el.dataset.gsap ?? "fade-up"
      const delay = parseFloat(el.dataset.delay ?? "0")

      const fromVars: gsap.TweenVars = { opacity: 0, duration: 0.8, delay, ease: "power3.out" }
      if (type === "fade-up")    fromVars.y = 40
      if (type === "fade-left")  fromVars.x = -40
      if (type === "fade-right") fromVars.x = 40
      if (type === "scale-in")   { fromVars.scale = 0.92; fromVars.filter = "blur(8px)" }

      gsap.from(el, {
        ...fromVars,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      })
    })

    // Cards — stagger by parent container
    const cardGroups = gsap.utils.toArray<HTMLElement>(".gsap-stagger")
    cardGroups.forEach((group) => {
      const cards = group.querySelectorAll<HTMLElement>(".card-animate")
      if (!cards.length) return
      gsap.from(cards, {
        opacity: 0,
        y: 32,
        scale: 0.97,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    // Buttons — subtle bounce on scroll in
    const btns = gsap.utils.toArray<HTMLElement>(".btn-animate")
    btns.forEach((btn) => {
      gsap.from(btn, {
        opacity: 0,
        y: 16,
        scale: 0.95,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: btn,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
