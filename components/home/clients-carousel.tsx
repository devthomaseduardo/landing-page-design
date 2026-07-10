"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CLIENTS } from "@/lib/data"
import { CurvedDivider } from "@/components/ui/curved-divider"

// Duplicamos para o loop infinito
const ALL_CLIENTS = [...CLIENTS, ...CLIENTS]

export function ClientsCarousel({ 
  title = "Clientes & Parceiros",
  titleClassName = "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/50"
}: { 
  title?: string
  titleClassName?: string
}) {
  return (
    <section className="relative overflow-hidden bg-card/10 py-16">

      <div className="absolute -top-6 inset-x-0 z-20">
        <CurvedDivider />
      </div>
      <div className="absolute -bottom-6 inset-x-0 z-20">
        <CurvedDivider />
      </div>

      {/* Fades laterais */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

      {/* Label */}
      <div className="mb-10 text-center">
        <p className={titleClassName}>
          {title}
        </p>
      </div>

      {/* Faixa animada */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-10 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {ALL_CLIENTS.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="relative flex h-20 px-8 shrink-0 items-center justify-center opacity-40 transition-all hover:opacity-100"
            >
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap text-foreground/70 tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
