"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CONTACT, PROJECTS } from "@/lib/data"
import { ArrowRight, Globe, Briefcase, ChevronRight } from "lucide-react"
import { Icon } from "@iconify/react"

const Github = (props: any) => <Icon icon="mdi:github" {...props} />
const Linkedin = (props: any) => <Icon icon="mdi:linkedin" {...props} />
const Whatsapp = (props: any) => <Icon icon="mdi:whatsapp" {...props} />


const LINKS = [
  {
    name: "Falar no WhatsApp",
    desc: "Orçamentos e novos projetos",
    url: CONTACT.whatsapp,
    icon: Whatsapp,
    primary: true,
  },

  {
    name: "Como Trabalho",
    desc: "Processo e entregáveis",
    url: "/processo",
    icon: ArrowRight,
    primary: false,
  },
  {
    name: "LinkedIn",
    desc: "Conexões profissionais",
    url: CONTACT.linkedin,
    icon: Linkedin,
    primary: false,
  },
  {
    name: "GitHub",
    desc: "Repositórios e código",
    url: CONTACT.github,
    icon: Github,
    primary: false,
  },
  {
    name: "Site Oficial",
    desc: "thomaseduardo.com.br",
    url: "/",
    icon: Globe,
    primary: false,
  },
]

export default function LinkBioPage() {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-background flex items-center justify-center p-4 sm:p-6">
      {/* Hide site nav and footer via CSS to keep this page isolated like a modal */}
      <style dangerouslySetInnerHTML={{ __html: `
        header, footer, .floating-whatsapp { display: none !important; }
        html, body { background-color: #000; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-fade opacity-20" />
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md p-4 sm:p-6"
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="relative size-24 rounded-full border border-white/10 p-1 mb-4 bg-white/[0.02]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-20" />
            <Image
              src="/avatar.webp"
              alt={CONTACT.name}
              fill
              className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-2xl font-semibold tracking-tight text-white mb-1"
          >
            Thomas Eduardo
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm font-light text-white/50"
          >
            {CONTACT.role}
          </motion.p>
        </div>

        {/* Links List */}
        <div className="flex flex-col gap-3">
          {LINKS.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                <Link 
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  className={`group relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                    link.primary 
                      ? "border-white/20 bg-white/10 hover:bg-white/15 text-white" 
                      : "border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 text-white/80 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      link.primary ? "bg-white/10 text-white" : "bg-white/5 text-white/50 group-hover:text-white/80"
                    }`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-medium text-[15px] tracking-tight">{link.name}</span>
                      <span className="text-xs font-light opacity-60">{link.desc}</span>
                    </div>
                  </div>
                  <ChevronRight className="size-4 opacity-30 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-white/50">Projetos em Destaque</h2>
            <Link href="/projetos" className="text-[10px] font-medium uppercase tracking-widest text-white/30 hover:text-white transition-colors">Ver todos</Link>
          </div>
          
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6">
            {PROJECTS.slice(0, 4).map((project) => (
              <Link 
                key={project.title}
                href={project.href || "/projetos"}
                target={project.href?.startsWith("http") ? "_blank" : undefined}
                className="group relative flex-none w-[200px] h-[140px] rounded-2xl overflow-hidden snap-center bg-white/[0.02] border border-white/10"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/50 mb-1 truncate">{project.tag}</p>
                  <p className="font-display text-sm font-medium text-white truncate drop-shadow-md">{project.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">
            © {new Date().getFullYear()} Thomas Eduardo
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
