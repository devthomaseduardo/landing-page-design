"use client"

import { useState } from "react"
import { Minus, Plus, MonitorSmartphone, ShoppingCart, Globe, Briefcase } from "lucide-react"

const RATE = 20

const PRESETS = [
  { label: "Landing Page", icon: Globe, hours: 6 },
  { label: "Site Inst.", icon: Briefcase, hours: 16 },
  { label: "E-commerce", icon: ShoppingCart, hours: 40 },
  { label: "Sistema Web", icon: MonitorSmartphone, hours: 80 },
]

const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })

export function PriceCalculator() {
  const [hours, setHours] = useState(6)

  const total = hours * RATE

  const wa = `https://wa.me/5511977070209?text=${encodeURIComponent(
    `Olá Thomas, fiz uma estimativa inicial no site para um projeto de aproximadamente ${hours}h (${BRL.format(total)}). Podemos conversar sobre o escopo?`,
  )}`

  return (
    <div className="rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-xl p-7 sm:p-9 shadow-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/55">Simulador</p>
      <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
        Estime o seu projeto
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Valor base de <span className="font-mono text-white/70">{BRL.format(RATE)}/hora</span>.
      </p>

      {/* PRESETS INTELIGENTES */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
        {PRESETS.map((p) => {
          const isSelected = hours === p.hours
          return (
            <button
              key={p.label}
              onClick={() => setHours(p.hours)}
              className={`flex flex-col items-center gap-3 rounded-2xl border p-5 text-sm transition-all ${
                isSelected
                  ? "border-white/30 bg-white/5 text-white/55 shadow-none"
                  : "border-border/40 bg-background/30 text-muted-foreground hover:bg-card/80 hover:border-border/80"
              }`}
            >
              <p.icon className={`size-6 ${isSelected ? "text-white/55" : "text-muted-foreground/60"}`} />
              <span className="font-medium tracking-wide">{p.label}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-border/40 bg-background/40 p-5">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Horas estimadas</p>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold text-foreground">{hours}</span>
            <span className="text-lg text-muted-foreground">h</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setHours((v) => Math.max(1, v - 1))}
            className="inline-flex size-12 items-center justify-center rounded-full border border-border/40 bg-card/60 transition-colors hover:bg-card hover:text-foreground hover:border-border"
          >
            <Minus className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setHours((v) => v + 1)}
            className="inline-flex size-12 items-center justify-center rounded-full border border-border/40 bg-card/60 transition-colors hover:bg-card hover:text-foreground hover:border-border"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 flex items-end justify-between border-t border-border/30 pt-6">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">Estimativa total</span>
          <span className="font-mono text-xs text-white/55/60 mt-1">{hours}h × {BRL.format(RATE)}</span>
        </div>
        <span className="font-display text-4xl font-bold text-foreground">{BRL.format(total)}</span>
      </div>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-neutral-900 to-black px-6 py-4 text-sm font-medium text-white/80 transition-all hover:scale-[1.02] hover:shadow-none"
      >
        Solicitar orçamento com essa base
      </a>
      
      <p className="mt-4 text-center text-xs text-muted-foreground/60 leading-relaxed max-w-xs mx-auto">
        Estimativa inicial - o valor final é fechado após alinharmos o escopo.
      </p>
    </div>
  )
}
