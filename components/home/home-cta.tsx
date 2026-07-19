"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import DepthParallaxWords from "@/components/ui/smoothui/depth-parallax-words"

export function HomeCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/20 bg-background py-16 sm:py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(255,255,255,0.06),transparent_60%)]"
      />

      <div className="site-shell relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-kicker mb-4 text-white/40"
        >
          Próximo passo
        </motion.p>

        <div className="mx-auto max-w-3xl font-sans text-center font-semibold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}>
          <DepthParallaxWords triggerOnView delay={100} stagger={100}>
            Pronto para
          </DepthParallaxWords>
          <br />
          <span className="text-white/40">
            <DepthParallaxWords triggerOnView delay={400} stagger={80}>
              escalar seu negócio?
            </DepthParallaxWords>
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-md text-sm font-light text-white/50 sm:mt-5 sm:text-base"
        >
          Engenharia de ponta para transformar sua ideia em produto — com clareza de escopo, entrega previsível e resultados reais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-7 flex flex-col items-center justify-center gap-2.5 min-[420px]:flex-row sm:mt-8"
        >
          <CtaLink href={CONTACT.whatsapp} variant="solid" external>
            Transformar minha ideia em produto
          </CtaLink>
          <CtaLink href="/projetos" variant="soft">
            Ver todos os projetos
          </CtaLink>
        </motion.div>
      </div>
    </section>
  )
}
