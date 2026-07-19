import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ShapeDividerProps {
  type?: "slant" | "curve" | "arrow"
  position?: "top" | "bottom"
  className?: string
  color?: string
}

export function ShapeDivider({
  type = "arrow",
  position = "top",
  className,
  color = "currentColor", // Fills with text color by default, you can override with text-white, text-black etc on the parent
}: ShapeDividerProps) {
  const isTop = position === "top"
  
  // Rotating the divider if it's on bottom so it mirrors correctly
  const transform = isTop ? "" : "rotate-180"

  return (
    <div
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden leading-none z-10",
        isTop ? "top-0" : "bottom-0",
        className
      )}
    >
      <motion.svg
        initial={{ y: isTop ? "-100%" : "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn("block w-full", transform)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height: "auto", minHeight: "60px", maxHeight: "120px" }}
      >
        {type === "slant" && (
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill={color}
          />
        )}
        
        {type === "curve" && (
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill={color}
          />
        )}

        {type === "arrow" && (
          <path
            d="M0 0 H1200 V15 L600 90 L0 15 Z"
            fill={color}
          />
        )}
      </motion.svg>
    </div>
  )
}
