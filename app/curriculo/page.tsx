import type { Metadata } from "next"
import { Download, ExternalLink, FileText } from "lucide-react"
import { CtaLink } from "@/components/ui/cta"

export const metadata: Metadata = {
  title: "Currículo | Thomas Eduardo",
  description:
    "Currículo de Thomas Eduardo - Desenvolvedor Full Stack / Product Engineer.",
  alternates: { canonical: "/curriculo" },
  robots: { index: false, follow: false },
}

const PDF_HREF = "/curriculo.pdf"

export default function CurriculoPage() {
  return (
    <main className="min-h-[100svh] bg-background text-foreground">
      <div className="site-shell pb-10 pt-24 sm:pb-14 sm:pt-28">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-kicker mb-2">Documento</p>
            <h1 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] text-white sm:text-4xl">
              Currículo.
            </h1>
            <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-white/65">
              Versão em PDF - Full Stack / Product Engineer. Pronto para
              download ou visualização.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={PDF_HREF}
              download="Thomas-Eduardo-CV.pdf"
              className="btn-cta group/cta inline-flex h-8 items-center justify-center gap-1.5 rounded-full bg-white px-3 text-[10px] font-medium uppercase tracking-[0.08em] text-black transition-[transform,background-color] duration-300 hover:-translate-y-px hover:bg-white/90 active:scale-[0.98]"
            >
              <Download className="size-3.5" />
              Baixar PDF
            </a>
            <a
              href={PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex h-8 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 text-[10px] font-medium uppercase tracking-[0.08em] text-white/85 transition-colors hover:bg-white/10"
            >
              <ExternalLink className="size-3.5" />
              Abrir em nova aba
            </a>
          </div>
        </div>

        {/* PDF viewer card */}
        <div className="overflow-hidden rounded-2xl border border-border/30 bg-black shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
            <FileText className="size-3.5 text-white/45" />
            <span className="font-mono text-[10px] tracking-wide text-white/45">
              Thomas-Eduardo-CV.pdf
            </span>
            <span className="ml-auto font-mono text-[10px] text-white/30">
              2 páginas
            </span>
          </div>

          <div className="relative min-h-[70svh] w-full bg-neutral-950 sm:min-h-[78svh]">
            <iframe
              src={`${PDF_HREF}#view=FitH`}
              title="Currículo Thomas Eduardo"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border/20 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm font-light text-white/55">
            Prefere conversar? Manda uma mensagem.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <CtaLink href="/r/wa" variant="solid" size="sm">
              WhatsApp
            </CtaLink>
            <CtaLink href="/sobre" variant="soft" size="sm">
              Sobre
            </CtaLink>
          </div>
        </div>
      </div>
    </main>
  )
}
