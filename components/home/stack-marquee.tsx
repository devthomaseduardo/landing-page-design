import { STACK } from "@/lib/data"

function MarqueeRow({
  duration,
  reverse = false,
  size = "text-xl sm:text-2xl",
  muted = false,
}: {
  duration: string
  reverse?: boolean
  size?: string
  muted?: boolean
}) {
  const items = [...STACK, ...STACK]

  return (
    <div
      className={`marquee-track flex w-max items-center animate-[marquee_38s_linear_infinite] motion-reduce:animate-none group-hover:[animation-play-state:paused]`}
      style={{
        animationDuration: duration,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((tech, i) => (
        <div key={`${tech}-${i}`} className="flex items-center gap-6 pr-6 sm:gap-8 sm:pr-8">
          <span
            className={`group/item flex items-baseline gap-2 whitespace-nowrap font-mono uppercase tracking-widest transition-colors duration-300 ${size} ${
              muted ? "text-muted-foreground/45" : "text-muted-foreground"
            } hover:text-[var(--primary)]`}
          >
            <span className="text-[0.55em] font-normal text-[var(--primary)]/60 transition-colors group-hover/item:text-[var(--primary)]">
              {String((i % STACK.length) + 1).padStart(2, "0")}
            </span>
            {tech}
          </span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--primary)]/40" />
        </div>
      ))}
    </div>
  )
}

export function StackMarquee() {
  return (
    <section className="group relative overflow-hidden bg-card/20 py-10 sm:py-12" aria-label="Tecnologias">
      {/* hairline superior com fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />

      <div className="mx-auto mb-7 flex max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
          Stack
        </div>
        <span className="font-mono text-xs text-muted-foreground/60">
          {String(STACK.length).padStart(2, "0")} tecnologias
        </span>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <MarqueeRow duration="34s" />
        </div>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <MarqueeRow duration="46s" reverse size="text-base sm:text-lg" muted />
        </div>
      </div>

      {/* hairline inferior com fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />
    </section>
  )
}