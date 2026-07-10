"use client"

import { ENGINEERING_APPROACH } from "@/lib/data"
import { Search, Network, Code, TestTube, Rocket, IterationCcw } from "lucide-react"
import { motion } from "framer-motion"

const ICONS = [Search, Network, Code, TestTube, Rocket, IterationCcw]

export function EngineeringApproach() {
  return (
    <section id="engineering" className="relative py-24 sm:py-48 bg-background overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 md:mb-32 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            Filosofia de Engenharia.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-muted-foreground leading-relaxed"
          >
            Engenharia de software é mais do que escrever código. É entender o problema,
            projetar arquiteturas resilientes e estabelecer pipelines de entrega confiáveis.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENGINEERING_APPROACH.map((item, i) => {
            const Icon = ICONS[i] || Code
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative flex flex-col h-full rounded-[2rem] bg-card/40 border border-border/40 p-8 transition-all hover:bg-card hover:border-blue-500/30 hover:shadow-2xl hover:-translate-y-2"
              >
                
                <div className="mb-6 inline-flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-[1rem] bg-secondary/30 text-foreground transition-transform group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    <Icon className="size-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/30">
                    0{i + 1}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
                  {item.title}
                </h3>
                
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                
                <div className="mt-auto pt-8">
                  <p className="border-t border-border/20 pt-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60">
                    {item.detail}
                  </p>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
