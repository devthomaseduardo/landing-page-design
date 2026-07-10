import Image from "next/image"
import { CLIENTS } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Clients() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">

      <Reveal>
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Clientes</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Empresas que confiaram no trabalho.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale transition-all duration-700 hover:opacity-80 hover:grayscale-0 md:gap-14">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="relative h-8 w-28 transition-transform duration-300 hover:scale-105 md:h-10 md:w-36"
            >
              <Image
                src={client.logo}
                alt={`${client.name}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Reveal>

    </section>
  )
}
