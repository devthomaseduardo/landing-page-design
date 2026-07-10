import type { Metadata } from "next"
import { PrintButton } from "@/components/print-button"
import { Globe, Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Currículo | Thomas Eduardo",
  description: "Currículo de Thomas Eduardo — Desenvolvedor Full Stack / Product Engineer.",
  alternates: { canonical: "/curriculo" },
}

// Dados do Currículo (Específicos para o modelo editorial)
const CV_DATA = {
  name: "Thomas Eduardo",
  role: "Desenvolvedor Full Stack | Product Engineer",
  location: "São Paulo, SP — Brasil",
  phone: "(11) 97707-0209",
  email: "devthomaseduardo@gmail.com",
  site: "thomaseduardo.online",
  linkedin: "linkedin.com/in/devthomaseduardo",
  github: "github.com/devthomaseduardo",

  summary:
    "Desenvolvedor Full Stack com foco em engenharia de produto e arquitetura escalável. Experiência em transformar processos de negócio em plataformas digitais seguras e de alta performance. Especialista no ecossistema TypeScript (Next.js, Node.js) e modelagem de dados, aliando rigor técnico a uma visão clara de experiência do usuário e conversão.",

  experience: [
    {
      role: "Desenvolvedor Full Stack",
      company: "Freelance / Consultoria",
      period: "08/2023 — Atual",
      achievements: [
        "Arquitetura e desenvolvimento de aplicações web completas, do frontend ao backend, utilizando Next.js, Fastify e PostgreSQL.",
        "Implementação de sistemas de autenticação seguros (JWT/RBAC), dashboards administrativos e integrações via APIs REST.",
        "Desenvolvimento de landing pages e e-commerces com foco em SEO técnico, performance (Core Web Vitals) e conversão.",
        "Gerenciamento de infraestrutura e deploy automatizado (Vercel, AWS e ambientes Linux).",
      ],
    },
  ],

  projects: [
    {
      name: "Torcida Urbana — E-commerce Backend",
      tech: "Node.js, Prisma, PostgreSQL, Docker",
      description:
        "Desenvolvimento de API REST estruturada para catálogo e pedidos, incluindo containerização e controle de acesso.",
    },
    {
      name: "HOMMA — Frontend de Marca",
      tech: "Next.js, Tailwind CSS, Framer Motion",
      description:
        "Engenharia de interface de alta fidelidade visual com foco em animações fluidas e otimização de performance editorial.",
    },
    {
      name: "Auth JWT RBAC",
      tech: "Fastify, TypeScript, PostgreSQL",
      description:
        "Arquitetura backend escalável para gestão de permissões e autenticação segura de usuários.",
    },
  ],

  education: [
    {
      degree: "Engenharia de Software",
      institution: "Universidade Anhanguera",
      period: "Em andamento",
    },
  ],

  certifications: [
    {
      name: "AWS re/Start Graduate",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
    },
    {
      name: "API REST & JWT",
      issuer: "Ada Tech",
      year: "2024",
    },
    {
      name: "UX Essentials",
      issuer: "FIAP",
      year: "2024",
    },
    {
      name: "IT Essentials (Hardware)",
      issuer: "Cisco",
      year: "2024",
    },
  ],

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Fastify", "Express", "Prisma", "PostgreSQL", "REST APIs"],
    tools: ["Git", "Docker", "Linux", "AWS", "Vercel", "Figma"],
  },

  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Técnico / Intermediário" },
  ],
}

export default function CurriculoPage() {
  return (
    <main className="min-h-screen bg-background py-16 text-foreground print:bg-white print:py-0 print:text-black">
      <div className="mx-auto max-w-[210mm] px-4 sm:px-8 print:px-0">

        {/* Print Action */}
        <div className="mb-8 flex justify-end print:hidden">
          <PrintButton />
        </div>

        {/* Paper Container */}
        <div className="rounded-[3rem] bg-card/50 border border-border/40 shadow-[0_0_50px_-15px_rgba(37,99,235,0.15)] print:rounded-none print:bg-white print:border-none print:shadow-none print:ring-0">

          <div className="p-8 sm:p-12 lg:p-16 print:p-8">

            {/* Header */}
            <header className="mb-10 flex flex-col gap-6 border-b border-border/60 pb-10 sm:flex-row sm:items-end sm:justify-between print:border-black/10">
              <div className="space-y-1">
                <h1 className="font-display text-4xl font-bold tracking-tight text-foreground print:text-black">
                  {CV_DATA.name}
                </h1>
                <p className="text-lg font-medium bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent print:text-blue-600">
                  {CV_DATA.role}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground print:text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-blue-500 print:text-blue-600" /> {CV_DATA.location}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 text-blue-500 print:text-blue-600" /> {CV_DATA.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-3.5 text-blue-500 print:text-blue-600" /> {CV_DATA.email}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="size-3.5 text-blue-500 print:text-blue-600" /> {CV_DATA.site}
                </div>
              </div>
            </header>

            {/* Layout em Grid (2/3 + 1/3) */}
            <div className="grid gap-12 lg:grid-cols-[1fr_260px] print:grid-cols-[1fr_220px] print:gap-10">

              {/* Coluna Principal */}
              <div className="space-y-10">

                {/* Resumo */}
                <section>
                  <SectionTitle>Resumo Profissional</SectionTitle>
                  <p className="text-[13px] leading-relaxed text-gray-700">
                    {CV_DATA.summary}
                  </p>
                </section>

                <section>
                  <SectionTitle>Experiência Profissional</SectionTitle>
                  <div className="space-y-6">
                    {CV_DATA.experience.map((exp) => (
                      <div key={exp.role}>
                        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-sm font-bold text-foreground print:text-black">{exp.role}</h3>
                          <span className="font-mono text-[11px] font-medium tracking-wide text-muted-foreground print:text-gray-500">
                            {exp.period}
                          </span>
                        </div>
                        <p className="mb-3 text-[13px] font-medium text-blue-400 print:text-blue-600">
                          {exp.company}
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="relative pl-4 text-[13px] leading-relaxed text-muted-foreground print:text-gray-700 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-blue-500/60">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projetos */}
                <section>
                  <SectionTitle>Projetos em Destaque</SectionTitle>
                  <div className="space-y-5">
                    {CV_DATA.projects.map((proj) => (
                      <div key={proj.name}>
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="text-[13px] font-bold text-foreground print:text-black">{proj.name}</h3>
                          <span className="text-[12px] text-muted-foreground print:text-gray-500">— {proj.tech}</span>
                        </div>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground print:text-gray-700">
                          {proj.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>

              {/* Coluna Lateral */}
              <div className="space-y-10">

                {/* Competências */}
                <section>
                  <SectionTitle>Competências Técnicas</SectionTitle>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/50 print:text-gray-400">Frontend</h4>
                      <p className="text-[13px] leading-relaxed text-foreground/80 print:text-gray-800">{CV_DATA.skills.frontend.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/50 print:text-gray-400">Backend</h4>
                      <p className="text-[13px] leading-relaxed text-foreground/80 print:text-gray-800">{CV_DATA.skills.backend.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/50 print:text-gray-400">Ferramentas</h4>
                      <p className="text-[13px] leading-relaxed text-foreground/80 print:text-gray-800">{CV_DATA.skills.tools.join(", ")}</p>
                    </div>
                  </div>
                </section>

                {/* Formação */}
                <section>
                  <SectionTitle>Formação Acadêmica</SectionTitle>
                  <div className="space-y-4">
                    {CV_DATA.education.map((edu) => (
                      <div key={edu.degree}>
                        <h3 className="text-[13px] font-bold text-foreground print:text-black">{edu.degree}</h3>
                        <p className="mt-0.5 text-[13px] text-muted-foreground print:text-gray-600">{edu.institution}</p>
                        <p className="mt-1 font-mono text-[11px] text-muted-foreground/60 print:text-gray-500">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certificações */}
                <section>
                  <SectionTitle>Certificações</SectionTitle>
                  <ul className="space-y-3">
                    {CV_DATA.certifications.map((cert) => (
                      <li key={cert.name}>
                        <div className="text-[13px] font-bold text-foreground print:text-black">{cert.name}</div>
                        <div className="text-[12px] text-muted-foreground print:text-gray-600">{cert.issuer}, {cert.year}</div>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Idiomas */}
                <section>
                  <SectionTitle>Idiomas</SectionTitle>
                  <ul className="space-y-2">
                    {CV_DATA.languages.map((lang) => (
                      <li key={lang.name} className="flex justify-between text-[13px]">
                        <span className="font-semibold text-foreground print:text-black">{lang.name}</span>
                        <span className="text-muted-foreground print:text-gray-500">{lang.level}</span>
                      </li>
                    ))}
                  </ul>
                </section>

              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 border-b border-border/60 pb-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-foreground print:text-black print:border-black/5">
      <span className="text-blue-500 print:text-black mr-1">/</span> {children}
    </h2>
  )
}