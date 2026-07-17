"use client"

import type { ReactNode, CSSProperties } from "react"
import { cn } from "@/lib/utils"
import { useTilt3D, type Tilt3DOptions } from "@/hooks/useTilt3D"

type Tilt3DProps = Tilt3DOptions & {
  children: ReactNode
  className?: string
  contentClassName?: string
  style?: CSSProperties
  /** Show specular glare overlay */
  showGlare?: boolean
}

/**
 * 3D tilt wrapper - GPU transform via CSS vars from useTilt3D.
 */
export function Tilt3D({
  children,
  className,
  contentClassName,
  style,
  showGlare = true,
  max,
  perspective,
  scale,
  glare,
  disableOnTouch,
}: Tilt3DProps) {
  const ref = useTilt3D<HTMLDivElement>({
    max,
    perspective,
    scale,
    glare: glare ?? showGlare,
    disableOnTouch,
  })

  return (
    <div ref={ref} className={cn("tilt-3d group/tilt", className)} style={style}>
      <div className={cn("tilt-3d-inner relative h-full w-full", contentClassName)}>
        {children}
        {showGlare && <span className="tilt-3d-glare" aria-hidden />}
      </div>
    </div>
  )
}
