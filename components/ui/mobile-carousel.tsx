"use client"

import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

type MobileCarouselProps = {
  children: ReactNode
  itemClassName?: string
  desktopClassName?: string
  className?: string
  dots?: boolean
}

/**
 * Mobile carousel with smooth gesture navigation.
 * Very subtle dots by default.
 */
export function MobileCarousel({
  children,
  itemClassName = "w-[min(86vw,22rem)]",
  desktopClassName = "sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3",
  className,
  dots = true,
}: MobileCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const items = Children.toArray(children).filter(Boolean)
  const [active, setActive] = useState(0)

  const syncActive = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const slides = Array.from(el.children) as HTMLElement[]
    if (!slides.length) return

    const viewportCenter = el.scrollLeft + el.clientWidth / 2
    let bestIndex = 0
    let smallestDistance = Infinity

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
      const distance = Math.abs(slideCenter - viewportCenter)
      if (distance < smallestDistance) {
        smallestDistance = distance
        bestIndex = index
      }
    })

    setActive(bestIndex)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    syncActive()
    el.addEventListener("scroll", syncActive, { passive: true })
    window.addEventListener("resize", syncActive)

    return () => {
      el.removeEventListener("scroll", syncActive)
      window.removeEventListener("resize", syncActive)
    }
  }, [syncActive, items.length])

  const goTo = (index: number) => {
    const el = scrollerRef.current
    if (!el) return
    const slide = el.children[index] as HTMLElement | undefined
    if (!slide) return

    const targetLeft = slide.offsetLeft - 16
    el.scrollTo({ left: targetLeft, behavior: "smooth" })
  }

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollerRef}
        className={cn(
          "-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2",
          "touch-action-pan-x",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          "sm:mx-0 sm:grid sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0",
          desktopClassName
        )}
      >
        {items.map((child, i) => (
          <div
            key={isValidElement(child) && child.key != null ? String(child.key) : i}
            className={cn(
              "shrink-0 snap-center snap-always sm:min-w-0 sm:shrink sm:snap-align-none",
              itemClassName,
              "sm:!w-auto sm:!max-w-none"
            )}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Extremely subtle dots */}
      {dots && items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5 sm:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-[2px] rounded-full transition-all duration-200 ease-out",
                i === active
                  ? "w-6 bg-white/70"           // Active: thin elegant line
                  : "w-[3px] bg-white/10 hover:bg-white/20" // Inactive: almost invisible
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
