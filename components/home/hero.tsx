"use client"

import Link from "next/link"
import Script from "next/script"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">

      <Script
        src="https://embed.mckp.live/embed.js"
        strategy="afterInteractive"
      />

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* @ts-expect-error Custom Web Component */}
        <mockup-player
          mockup-id="48991589-86a0-4a9d-b5df-5f3ce547e4b9"
          aspect-ratio="16 / 9"
          trigger="load"
          trigger-loop="true"
          cursor-affect-page="false"
          cursor-range="6-55-4-58"
          camera-zoom="39"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            pointerEvents: "none",
          }}
        />

      </div>

      <div className="absolute inset-0 -z-10 bg-black/55 backdrop-blur-[1px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">

          <h1 className="font-display text-5xl font-bold leading-tight text-white lg:text-7xl">
            Construo sistemas e interfaces web de{" "}
            <span className="text-white/60">
              alta performance
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Desenvolvedor Full Stack focado em sistemas web,
            automações, APIs e produtos digitais com foco em
            performance, escalabilidade e experiência do usuário.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="#projetos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Ver projetos

              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>
      </div>

      <ArrowDown
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/60"
      />

    </section>
  )
}