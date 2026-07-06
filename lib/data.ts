export const CONTACT = {
  name: "Thomas Eduardo R. Nascimento",
  role: "Desenvolvedor Full Stack",
  email: "devthomaseduardo@gmail.com",
  phone: "(11) 97707-0209",
  location: "São Paulo, SP",
  site: "thomaseduardo.online",
  github: "https://github.com/devthomaseduardo",
  linkedin: "https://linkedin.com/in/devthomaseduardo",
  whatsapp:
    "https://wa.me/5511977070209?text=Ol%C3%A1%20Thomas%2C%20quero%20falar%20sobre%20um%20projeto.",
  cnpj: "60.882.678/0001-77",
}

export type Project = {
  tag: string
  title: string
  description: string
  bullets: string[]
  stack: string[]
  image: string
}

export const PROJECTS: Project[] = [
  {
    tag: "Auth",
    title: "Auth JWT RBAC",
    description:
      "API de autenticação e permissões com cadastro, login, senha criptografada, refresh token e papéis de usuário.",
    bullets: ["JWT + RBAC", "Rotas protegidas", "Prisma + PostgreSQL"],
    stack: ["Node.js", "Fastify", "Prisma", "JWT"],
    image: "/projects/gestao.png",
  },
  {
    tag: "Back-end",
    title: "API Node.js em Servidor Linux",
    description:
      "Backend publicado em Linux com PM2, banco PostgreSQL, documentação de endpoints e validação de rotas.",
    bullets: ["Deploy em Linux", "PM2 + Nginx", "APIs REST"],
    stack: ["Node.js", "Linux", "PostgreSQL", "Docker"],
    image: "/projects/automacao.png",
  },
  {
    tag: "Micro-SaaS",
    title: "PropostaLink",
    description:
      "Plataforma para criar propostas comerciais online, gerar link público e facilitar envio por WhatsApp.",
    bullets: ["Templates de proposta", "Link público", "Fluxo comercial"],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    image: "/projects/landing.png",
  },
  {
    tag: "Produto",
    title: "ApplyPilot",
    description:
      "Copiloto de candidaturas planejado para monitorar vagas, ranquear oportunidades e gerar versões de currículo.",
    bullets: ["Automação com Playwright", "Ranqueamento de vagas", "FastAPI"],
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    image: "/projects/automacao.png",
  },
  {
    tag: "Landing",
    title: "Sleep House",
    description:
      "Landing comercial para loja de colchões, com catálogo, prova social, FAQ e estrutura de conversão por WhatsApp.",
    bullets: ["Página rápida", "SEO técnico", "Conversão via WhatsApp"],
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    image: "/projects/landing.png",
  },
  {
    tag: "Landing",
    title: "Homma Design",
    description:
      "Landing premium para mobiliário autoral, com estética editorial, vídeos, prova social e contato direto.",
    bullets: ["Direção visual editorial", "Performance", "Layout responsivo"],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/projects/landing.png",
  },
  {
    tag: "Sistema",
    title: "Portal do Cliente / Admin",
    description:
      "Sistema administrativo para operação comercial, com módulos de projetos, clientes, propostas, financeiro, contratos e leads.",
    bullets: ["Dashboard administrativo", "Módulos internos", "Controle de acesso"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    image: "/projects/mokup-hazap.png",
  },
]

export type Service = {
  title: string
  description: string
  features: string[]
}

export const SERVICES: Service[] = [
  {
    title: "Portais e Dashboards",
    description: "Sistemas internos, painéis administrativos e ferramentas para organizar processos que hoje ficam soltos.",
    features: ["Autenticação (JWT) e RBAC", "Dashboard administrativo", "Banco de dados estruturado"],
  },
  {
    title: "Sites e Landing Pages",
    description: "Páginas rápidas, claras e responsivas para apresentar ofertas, serviços e canais de contato com mais consistência.",
    features: ["SEO técnico e performance", "Responsividade total", "Integração direta com WhatsApp"],
  },
  {
    title: "APIs e Back-end",
    description: "APIs REST, autenticação, áreas administrativas, banco de dados e integrações para aplicações web reais.",
    features: ["APIs REST e Webhooks", "Processamento em background", "Integração (Stripe, WhatsApp, etc)"],
  },
]

export const DIFERENCIAIS = [
  {
    title: "Código limpo e previsível",
    description: "Estrutura pensada para manter e evoluir, não só para funcionar no primeiro deploy.",
  },
  {
    title: "Visão de produto",
    description: "Cada decisão técnica considera o uso real da aplicação e o objetivo de negócio.",
  },
  {
    title: "Full Stack de ponta a ponta",
    description: "Da interface ao servidor, sem depender de terceiros para entregar valor.",
  },
  {
    title: "Entrega incremental",
    description: "Escopo organizado em etapas, com evolução clara entre interface, API, banco e deploy.",
  },
]

export const PROCESS = [
  { step: "01", title: "Entendimento do problema", description: "Antes de código, entendo o objetivo real e o processo atual." },
  { step: "02", title: "Arquitetura e planejamento", description: "Defino escopo técnico, stack e a estrutura que vai escalar." },
  { step: "03", title: "Desenvolvimento e entrega", description: "Construção incremental, deploy e documentação para evoluir." },
]

export const STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Fastify", "Express",
  "PostgreSQL", "Prisma", "Docker", "Linux", "Vercel", "JWT", "Tailwind CSS", "Python",
]
