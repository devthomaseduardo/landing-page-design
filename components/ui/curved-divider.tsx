"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function CurvedDivider() {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let proxy = { curve: 0 }
    
    const setPath = () => {
      if (pathRef.current) {
        // Aumentando a altura da curva no eixo Y baseada no proxy
        pathRef.current.setAttribute("d", `M 0 50 Q 50 ${50 + proxy.curve} 100 50`)
      }
    }

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = self.getVelocity()
        // Limita a curvatura máxima para um valor razoável
        const targetCurve = gsap.utils.clamp(-35, 35, v / 30)
        
        // Tween suave para seguir a velocidade atual
        gsap.to(proxy, {
          curve: targetCurve,
          duration: 0.5,
          ease: "power3.out",
          overwrite: true,
          onUpdate: setPath,
          onComplete: () => {
            // Quando parar de rolar, volta pro centro (0) como um elástico
            gsap.to(proxy, {
              curve: 0,
              duration: 1,
              ease: "elastic.out(1, 0.4)",
              onUpdate: setPath
            })
          }
        })
      }
    })

    return () => {
      st.kill()
    }
  }, [])

  return (
    <div className="relative w-full h-12 flex items-center justify-center overflow-visible z-10 pointer-events-none">
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="absolute w-full h-full text-white/10 overflow-visible"
      >
        <path
          ref={pathRef}
          d="M 0 50 Q 50 50 100 50"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
