import { PROCESS } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Process() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20 sm:py-36">

      <Reveal>
        <div className="mb-16 sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Processo</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Do problema ao produto.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Um processo claro em quatro etapas — da descoberta ao deploy.
          </p>
        </div>
      </Reveal>

      {/* Desktop: horizontal steps */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-6 h-px bg-border" aria-hidden />

          <div className="grid grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="group relative pt-12">
                  {/* Step dot */}
                  <div className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-primary/40">
                    <span className="font-mono text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                      {p.step}
                    </span>
                  </div>

                  <p className="font-mono text-xs uppercase tracking-widest text-primary/70">{p.title}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{p.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical steps */}
      <div className="relative lg:hidden">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" aria-hidden />

        <div className="space-y-10">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <div className="group relative flex gap-6 pl-14">
                {/* Step dot */}
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-border bg-card">
                  <span className="font-mono text-xs font-medium text-muted-foreground">
                    {p.step}
                  </span>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70">{p.title}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">{p.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  )
}
