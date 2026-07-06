import { Check } from "lucide-react"
import { SERVICES } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function Services() {
  return (
    <section id="servicos" className="bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-32">
        <SectionHeading
          kicker="Soluções"
          title="Soluções que eu construo"
          description="Aplicações, páginas e APIs para reduzir retrabalho e dar mais estrutura para a operação."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary sm:p-7">
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-5 hidden space-y-2.5 pt-2 sm:block">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Check className="size-4 shrink-0 text-foreground" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
