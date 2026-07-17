"use client"

import { motion } from "framer-motion"
import { CLIENTS } from "@/lib/data"

// Duplicamos a lista para criar um loop infinito suave no carrossel
const ALL_CLIENTS = [...CLIENTS, ...CLIENTS]

export function ClientsCarousel({
  title = "Marcas & parceiros",
  titleClassName = "label-kicker text-muted-foreground/50",
}: {
  title?: string
  titleClassName?: string
}) {
  return (
    <section className="relative overflow-hidden border-y border-border/40 py-6 sm:py-9">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="mb-3 text-center sm:mb-5">
        <p className={titleClassName}>{title}</p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center gap-7 sm:gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 34, ease: "linear", repeat: Infinity }}
        >
          {ALL_CLIENTS.map((client, i) => (
            <motion.div
              key={`${client.name}-${i}`}
              className="flex h-8 shrink-0 items-center px-1.5 opacity-40 transition-opacity duration-300 hover:opacity-90 sm:h-10 sm:px-2"
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <span className="font-display whitespace-nowrap text-base font-semibold uppercase tracking-[0.04em] text-foreground/80 sm:text-xl md:text-2xl">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
