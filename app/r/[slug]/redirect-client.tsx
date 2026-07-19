"use client"

import { useEffect, useState } from "react"
import { track } from "@vercel/analytics"
import type { RedirectEntry } from "@/lib/redirects"

export function RedirectClient({ entry }: { entry: RedirectEntry }) {
  const [count, setCount] = useState(2)

  useEffect(() => {
    try {
      track(entry.event, { slug: entry.slug, label: entry.label })
    } catch {
      // analytics may be unavailable in dev
    }

    const tick = setInterval(() => {
      setCount((c) => Math.max(0, c - 1))
    }, 1000)

    const go = setTimeout(() => {
      window.location.href = entry.url
    }, 1800)

    return () => {
      clearInterval(tick)
      clearTimeout(go)
    }
  }, [entry])

  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_40%,rgba(255,255,255,0.06),transparent_60%)]"
      />

      <div className="relative z-10 w-full max-w-sm text-center">
        <p className="font-display text-xs font-semibold lowercase tracking-[0.2em] text-white/60">
          devthomas
        </p>

        <h1 className="mt-6 font-display text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-3xl">
          {entry.label}
        </h1>
        {entry.description && (
          <p className="mt-2 text-sm font-light text-white/65">
            {entry.description}
          </p>
        )}

        <div className="mx-auto mt-8 h-px w-24 overflow-hidden bg-white/10">
          <div
            className="h-full origin-left bg-white"
            style={{
              animation: "redirect-progress 1.8s ease-out forwards",
              transform: "scaleX(0)",
            }}
          />
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
          Redirecionando{count > 0 ? ` · ${count}s` : "…"}
        </p>

        <a
          href={entry.url}
          className="mt-8 inline-flex text-xs font-medium uppercase tracking-[0.12em] text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Continuar agora
        </a>
      </div>

      <style>{`
        @keyframes redirect-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </main>
  )
}
