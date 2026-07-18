export const CONTACT = {
  name: "Thomas Eduardo R. Nascimento",
  role: "Software Engineer | Full Stack Developer",
  email: "contato@thomaseduardo.com.br",
  phone: "(11) 97707-0209",
  location: "São Paulo, SP",
  site: "thomaseduardo.com.br",
  github: "https://github.com/devthomaseduardo",
  linkedin: "https://www.linkedin.com/in/devthomaseduardo",
  whatsapp:
    "https://wa.me/5511977070209?text=Ol%C3%A1%20Thomas%2C%20quero%20falar%20sobre%20um%20projeto.",
  cnpj: "60.882.678/0001-77",
}


export type Project = {
  tag: string
  title: string
  subtitle: string
  context: string
  problem: string
  architecture: string
  solution: string
  challenges: string
  result: string
  description: string
  bullets: string[]
  stack: string[]
  image: string
  gallery?: string[]
  href?: string
  year?: string
}


export const PROJECTS: Project[] = [

  {
    tag: "Produto SaaS",
    title: "Áurea",
    subtitle: "Plataforma de Gestão Inteligente",
    context: "Desenvolvimento de um sistema completo para gestão e inteligência de negócios.",
    problem: "Necessidade de centralizar operações e dados em uma única plataforma performática.",
    architecture: "Arquitetura moderna escalável com React e integrações via API REST.",
    solution: "Plataforma web rápida, responsiva e focada na experiência do usuário.",
    challenges: "Garantir alta performance com grande volume de dados na interface.",
    result: "Sistema entregue com sucesso, otimizando o tempo operacional.",
    description: "Sistema Áurea: plataforma completa para gestão.",
    bullets: ["Painel administrativo", "Gestão de dados em tempo real", "Alta performance"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/aurea.webp",
    gallery: ["/projects/aurea-1.png", "/projects/aurea-2.png", "/projects/aurea-3.png"],
    href: "https://aurea.thomaseduardo.com.br/",
    year: "2026",
  },
  {
    tag: "Ferramenta Útil",
    title: "Gerador de QR Code",
    subtitle: "Criação rápida de QR Codes",
    context: "Uma ferramenta prática e rápida para geração de QR Codes dinâmicos e estáticos.",
    problem: "Muitas ferramentas de QR Code possuem excesso de anúncios ou fluxos complexos.",
    architecture: "Aplicação frontend leve construída com React e Tailwind.",
    solution: "Gerador limpo, direto ao ponto e sem atritos para o usuário.",
    challenges: "Processamento de imagem no client-side para download rápido.",
    result: "Ferramenta útil acessada por dezenas de usuários diariamente.",
    description: "Gerador de QR Code simples e direto, focado na experiência do usuário.",
    bullets: ["Geração instantânea", "Download em alta resolução", "Interface clean"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/qrcode-br.webp",
    gallery: ["/projects/qrcode-1.png", "/projects/qrcode-2.png", "/projects/qrcode-3.png"],
    href: "https://qrcode.thomaseduardo.com.br/",
    year: "2026",
  },
  {
    tag: "Plataforma B2B",
    title: "Braservice",
    subtitle: "Sistema de Assistência e Serviços",
    context: "Portal corporativo para a Braservice, facilitando o acesso a serviços e chamados.",
    problem: "Fluxo de atendimento manual e dependente de planilhas e e-mails.",
    architecture: "Sistema web responsivo integrado a banco de dados em tempo real.",
    solution: "Portal unificado onde os clientes podem solicitar serviços e acompanhar status.",
    challenges: "Migrar dados legados sem interromper a operação da empresa.",
    result: "Redução de 40% no tempo de resposta a novos chamados.",
    description: "Plataforma de gestão de serviços para a Braservice.",
    bullets: ["Gestão de chamados", "Painel B2B", "Acompanhamento em tempo real"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/projects/brasservise.webp",
    gallery: [],
    href: "https://braservice.thomaseduardo.com.br/",
    year: "2026",
  },
  {

    tag: "Website Institucional",
    title: "Homma Design",
    subtitle: "Presença digital para mobiliário autoral",
    context:
      "A Homma Design precisava de uma presença digital que transmitisse sofisticação, valor dos produtos autorais e a experiência de showroom - com facilidade de contato e apresentação de projetos.",
    problem:
      "Marca de mobiliário autoral e interiores sem site institucional à altura da curadoria offline; dependência de indicações e pouca clareza na comunicação digital.",
    architecture:
      "Next.js 15 com Static Export, React, TypeScript e Tailwind. Pipeline CI/CD via GitHub Actions com deploy FTP para HostGator.",
    solution:
      "Website institucional minimalista com foco em imagens, narrativa visual e conversão - arquitetura preparada para evolução contínua.",
    challenges:
      "Equilibrar assets de alta resolução com performance e um fluxo de deploy automatizado em hospedagem compartilhada.",
    result:
      "Presença digital premium que comunica a essência da marca e facilita o contato com o showroom.",
    description:
      "Website institucional para a Homma Design (mobiliário autoral e interiores), com foco em experiência visual, performance e conversão.",
    bullets: [
      "Narrativa visual de showroom",
      "Next.js Static Export + CI/CD",
      "Deploy automatizado (GitHub Actions → FTP)",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/homma-1.webp",
    gallery: ["/projects/homma-2.webp"],
    href: "https://hommadesign.com.br/",
    year: "2026",
  },


  {
    tag: "Produto SaaS · Monorepo",
    title: "TERON OS",
    subtitle: "Sistema operacional da empresa de serviços digitais",
    context:
      "Monorepo da plataforma TERON: Site, OS (centro de comando), Workspace (portal do cliente) e API compartilhada - do lead ao pagamento, na mesma verdade.",
    problem:
      "Operação fragmentada entre CRM, propostas, projetos e financeiro; cliente e time sem a mesma visão do andamento.",
    architecture:
      "Monorepo pnpm com Vite + React + React Router no front, API Node e design system inspirado em Linear/Stripe.",
    solution:
      "OS para o time operar (CRM, propostas, forecast, financeiro, projetos) e Workspace para o cliente aprovar, enviar material, conversar e pagar - mesma API.",
    challenges:
      "Unificar o ciclo lead → proposta → projeto → fatura sem misturar operação interna com portal do cliente.",
    result:
      "Fluxo ponta a ponta: lead ganho vira conta e projeto; ações do cliente no Workspace refletem progresso e financeiro no OS.",
    description:
      "Centro de comando da TERON: CRM, propostas, projetos e financeiro no mesmo ecossistema - com o cliente acompanhando no Workspace.",
    bullets: [
      "CRM, funil e forecast de propostas",
      "Projetos e financeiro no mesmo ciclo",
      "API única para OS + Workspace",
      "Monorepo Site · OS · Workspace · API",
    ],
    stack: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS"],
    image: "/projects/teron-os.webp",
    year: "2026",
  },


  {
    tag: "Produto SaaS · Portal do cliente",
    title: "TERON Workspace",
    subtitle: "Portal do cliente na mesma verdade do OS",
    context:
      "Superfície do monorepo TERON em que o cliente acompanha o projeto: aprovações, materiais, mensagens e faturas - sem misturar com a operação interna.",
    problem:
      "Clientes sem visibilidade do andamento; aprovações e materiais espalhados em e-mail e chat, desalinhando time e entrega.",
    architecture:
      "SPA React (Vite + React Router) consumindo a mesma API do OS; design system compartilhado no monorepo.",
    solution:
      "Área do cliente para aprovar itens (progresso sobe no OS), enviar material, conversar na timeline e pagar faturas.",
    challenges:
      "Manter UX clara para o cliente e sincronização imediata com o centro de comando do time.",
    result:
      "Transparência ponta a ponta: o que o cliente faz no portal alimenta o OS em tempo de negócio real.",
    description:
      "Portal do cliente TERON: aprovações, materiais, comunicação e pagamentos na mesma verdade da operação.",
    bullets: [
      "Aprovações que avançam o projeto",
      "Envio de material e timeline",
      "Faturas e acompanhamento",
      "Mesma API e design system do OS",
    ],
    stack: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS"],
    image: "/projects/teron-workspace.webp",
    year: "2026",
  },

  {
    tag: "SaaS · Documentos com IA",
    title: "Minuta Fácil",
    subtitle: "Contratos, NDAs, propostas e CVs com IA",
    context:
      "Workspace multi-usuário para criar contratos, NDAs, propostas, faturas, currículos e cartas com visual de documento oficial brasileiro e assistência de IA (Gemini).",
    problem:
      "Montagem manual de minutas é lenta, inconsistente e sem versionamento por tipo de documento nem perfil por usuário.",
    architecture:
      "Monorepo: React 19 + Vite + Tailwind no front; Node/Express + TypeScript no back; Firebase Auth; PostgreSQL (Neon); Gemini só no servidor.",
    solution:
      "Geração de minutas no navegador com seções por tipo, rascunhos isolados, perfil/clientes na nuvem, exportação PDF e apoio via Pix/Stripe.",
    challenges:
      "Completude inteligente por tipo de documento, multi-tenant por user_id e IA restrita ao backend por segurança.",
    result:
      "Minutas profissionais em minutos, com API REST versionada e painel multi-usuário em produção.",
    description:
      "Workspace para contratos, NDAs, propostas, faturas e currículos com visual de ofício BR, multi-usuário e IA (Gemini).",
    bullets: [
      "Tipos: contrato, NDA, proposta, CV, fatura…",
      "IA de cláusulas (Gemini no backend)",
      "Firebase Auth + PostgreSQL multi-tenant",
      "Exportação PDF e pagamentos (Pix/Stripe)",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/minuta-1.png",
    gallery: ["/projects/minuta-2.png", "/projects/minuta-3.png"],
    href: "https://minuta.thomaseduardo.com.br/",
    year: "2025",
  },

  {
    tag: "Showroom Digital · Multi-tenant",
    title: "Sleep House",
    subtitle: "Showroom digital multi-unidade",
    context:
      "Plataforma SPA de alta performance para o showroom digital da Sleep House: uma base de código que atende várias filiais via subpastas no domínio.",
    problem:
      "Manter sites separados por loja e páginas pesadas de e-commerce tradicional prejudicava campanhas e a experiência de compra consultiva.",
    architecture:
      "SPA React 18 + Vite + TanStack Router + Tailwind CSS v4 + Framer Motion. Roteamento por unidade na URL; catálogo, WhatsApp, Maps, SEO e GTM por filial.",
    solution:
      "Concierge digital (funil de dor → recomendação → WhatsApp), curadoria de produtos com lightbox e analytics avançado na dataLayer.",
    challenges:
      "Personalizar interface, catálogo e tracking por unidade sem redirecionamentos e sem múltiplos deploys.",
    result:
      "Uma plataforma multi-tenant para Galeria, Polo, Iguatemi e Kenedy - conversão e UX premium em produção.",
    description:
      "Showroom digital multi-tenant da Sleep House: catálogo, concierge e analytics por unidade, com SPA de alta performance.",
    bullets: [
      "Multi-tenant por subpasta (unidades)",
      "Concierge digital → WhatsApp",
      "Analytics (dataLayer / GTM)",
      "UX premium com Framer Motion",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/projects/sleep-house-campinas.webp",
    href: "https://www.sleephouseloja.com.br/",
    year: "2026",
  },

  {
    tag: "Landing Page de Conversão",
    title: "SpinMove",
    subtitle: "Bike indoor e bootcamp - alta conversão",
    context:
      "Landing page completa e responsiva para o estúdio SpinMove (bike indoor e bootcamp), com presença digital moderna e foco em matrículas.",
    problem:
      "Sem site oficial forte, campanhas e indicação perdiam credibilidade e o caminho até a matrícula era confuso.",
    architecture:
      "React + TypeScript + Tailwind CSS, com animações, parallax e CTAs diretos para WhatsApp (deploy na Vercel).",
    solution:
      "Página modular (planos, benefícios, horários, modais) guiando o visitante até o agendamento/matrícula.",
    challenges:
      "Identidade visual fitness forte e imersiva sem sacrificar performance e clareza no mobile.",
    result:
      "Presença digital pronta para campanhas, com conversão direta via WhatsApp.",
    description:
      "Landing page do estúdio SpinMove: design moderno, animações e integração WhatsApp para captação de matrículas.",
    bullets: [
      "Planos, benefícios e horários",
      "Animações e parallax",
      "CTA direto para WhatsApp",
      "Componentes reutilizáveis em React",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/academia-spinmove.webp",
    href: "https://spinmovecom.vercel.app/",
    year: "2025",
  },

  {
    tag: "Landing + Admin",
    title: "Yázigi Swiss Park",
    subtitle: "Landing, diagnóstico e painel de leads",
    context:
      "Landing e painel admin da unidade Yázigi Swiss Park (Campinas): cursos, depoimentos, galeria, diagnóstico de inglês e captura de leads no Supabase.",
    problem:
      "Informações e leads espalhados; falta de um funil digital com diagnóstico e operação interna para a equipe da unidade.",
    architecture:
      "React 18 + Vite + TypeScript + Tailwind + shadcn/ui; Supabase (Auth, leads, diagnósticos); React Query; Framer Motion.",
    solution:
      "Site de conversão com diagnóstico interativo, WhatsApp, GTM e área /admin com listagens de leads e diagnósticos.",
    challenges:
      "Fluxo de diagnóstico em modal com persistência e painel autenticado sem sobrecarregar a landing.",
    result:
      "Canal digital unificado: marketing, geração de demanda e operação de leads na mesma aplicação.",
    description:
      "Landing page e admin da Yázigi Swiss Park: cursos, diagnóstico de inglês, leads no Supabase e painel interno.",
    bullets: [
      "Diagnóstico de inglês (modal)",
      "Leads e admin no Supabase",
      "Depoimentos, galeria e cursos",
      "GTM + WhatsApp flutuante",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/projects/yagizi-swissparck.webp",
    href: "https://www.yaziswissparkcampinas.com.br/",
    year: "2025",
  },

  {
    tag: "Landing Page",
    title: "Instituto Kell",
    subtitle: "Clínica médica multidisciplinar",
    context:
      "Necessidade de apresentar o corpo clínico e facilitar agendamentos diários via WhatsApp de forma organizada.",
    problem:
      "Alta fricção na marcação de consultas por telefone e pacientes confusos sobre as especialidades disponíveis.",
    architecture:
      "SPA em React leve com roteamento client-side para navegação fluida.",
    solution:
      "Apresentação limpa, perfis dos profissionais e integração direta ao WhatsApp da recepção por especialidade.",
    challenges:
      "Acessibilidade e usabilidade para um público de faixa etária mais ampla.",
    result:
      "Fluxo de atendimento simplificado, com menos ligações longas e mais consultas agendadas digitalmente.",
    description:
      "Landing page limpa e humanizada para agendamento rápido, com conversão direta para o corpo clínico.",
    bullets: [
      "Filtros de especialidades",
      "Clean & acessível",
      "Roteamento de atendimento",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/intituto-kell.webp",
    year: "2025",
  },

  {
    tag: "Landing Page · Workstations",
    title: "Hazap Workstation",
    subtitle: "Estações de trabalho de alta performance",
    context:
      "Landing da Hazap para workstations personalizadas voltadas a arquitetura, engenharia, IA e desenvolvimento de software.",
    problem:
      "Visitante técnico precisa entender valor (consultoria, montagem sob medida, benchmarks) e chegar ao comercial com contexto.",
    architecture:
      "SPA React 18 + Vite + TypeScript + Tailwind + shadcn/ui; Framer Motion; deploy estático (raiz ou subpasta /workstation/).",
    solution:
      "Landing de conversão com seções de prova, perfis profissionais, FAQ, benchmarks e CTAs WhatsApp pré-contextualizados.",
    challenges:
      "Narrativa comercial densa em SPA única, tema escuro e builds distintos (demo Vercel vs subpasta de produção).",
    result:
      "Showroom digital de workstations com pipeline comercial via WhatsApp e SEO/OG configurados.",
    description:
      "Site institucional Hazap Workstation: workstations sob medida, prova social e conversão via WhatsApp.",
    bullets: [
      "Fluxo comercial em página única",
      "CTAs WhatsApp contextualizados",
      "Tema escuro + animações",
      "Build para raiz ou /workstation/",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/projects/hazap-workstation.webp",
    href: "https://hazap.com.br/workstation/",
    year: "2026",
  },

]



export type Service = {
  title: string
  description: string
  features: string[]
}



export const SERVICES: Service[] = [

  {
    title: "Produtos Digitais e Sistemas",
    description:
      "Aplicações web completas para empresas que precisam organizar processos, automatizar tarefas e criar novas soluções digitais.",
    features: [
      "Dashboards administrativos",
      "Autenticação e permissões",
      "Banco de dados estruturado",
    ],
  },


  {
    title: "Sites e Landing Pages",
    description:
      "Experiências digitais rápidas e estratégicas para apresentar marcas, serviços e gerar novas oportunidades.",
    features: [
      "SEO técnico",
      "Performance otimizada",
      "Integração com WhatsApp",
    ],
  },


  {
    title: "APIs e Back-end",
    description:
      "Desenvolvimento de APIs, integrações e estruturas backend preparadas para aplicações reais.",
    features: [
      "APIs REST",
      "Webhooks",
      "Integrações externas",
    ],
  },

]



export const DIFERENCIAIS = [

  {
    title: "Código limpo e preparado para evolução",
    description:
      "Estruturas organizadas para manutenção, crescimento e novas funcionalidades.",
  },


  {
    title: "Visão de produto",
    description:
      "Cada decisão técnica considera experiência do usuário e objetivo do negócio.",
  },


  {
    title: "Desenvolvimento Full Stack",
    description:
      "Da interface ao backend, criando soluções completas de ponta a ponta.",
  },


  {
    title: "Entrega organizada",
    description:
      "Processo dividido em etapas claras desde planejamento até publicação.",
  },

]



export const PROCESS = [

  {
    step: "01",
    title: "Discovery",
    label: "Entendimento",
    description:
      "Análise profunda do problema, contexto do negócio e objetivo real antes de qualquer linha de código.",
  },


  {
    step: "02",
    title: "Architecture",
    label: "Arquitetura",
    description:
      "Definição da stack, estrutura de dados, APIs e estratégia de desenvolvimento sustentável.",
  },


  {
    step: "03",
    title: "Development",
    label: "Desenvolvimento",
    description:
      "Construção incremental com foco em qualidade, testes e código limpo e legível.",
  },


  {
    step: "04",
    title: "Deployment",
    label: "Deploy & Evolução",
    description:
      "Publicação em produção, monitoramento e iteração contínua com base em feedback real.",
  },

]



export const ENGINEERING_APPROACH = [
  {
    title: "Descoberta",
    description: "Imersão profunda nos requisitos de negócio, necessidades do usuário e restrições técnicas antes de qualquer linha de código.",
    detail: "Design de sistema, modelagem de domínio e análise de viabilidade técnica.",
  },
  {
    title: "Arquitetura",
    description: "Projetar sistemas escaláveis e resilientes utilizando paradigmas modernos.",
    detail: "Microsserviços, Monorepos, Serverless e arquiteturas orientadas a eventos.",
  },
  {
    title: "Desenvolvimento",
    description: "Escrever código limpo, de fácil manutenção e type-safe com foco nos princípios SOLID.",
    detail: "Frontend component-first, backend RESTful e queries de banco otimizadas.",
  },
  {
    title: "Testes",
    description: "Garantir confiabilidade e prevenir regressões por meio de testes automatizados.",
    detail: "Testes unitários, de integração e fluxos end-to-end (E2E).",
  },
  {
    title: "Deploy",
    description: "Pipelines de entrega automatizadas garantindo releases sem downtime.",
    detail: "CI/CD, containerização com Docker, AWS e edge networks Vercel.",
  },
  {
    title: "Melhoria Contínua",
    description: "Monitorar, perfilar e iterar com base em dados reais de usuário e métricas.",
    detail: "Observabilidade, logging, otimização de performance e redução de dívida técnica.",
  },
]



export const STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Framer Motion",
  "shadcn/ui",
  "Node.js",
  "Fastify",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "AWS",
  "Docker",
  "Vercel",
  "GitHub Actions",
  "Supabase",
  "Mercado Pago",
  "WhatsApp API",
  "Figma",
]

export const CLIENTS = [
  { name: "Brasservice", logo: "/clientes/brasservice.webp", href: "https://braservice.thomaseduardo.com.br/" },
  { name: "Casalellit", logo: "/clientes/casalellit.webp", href: "https://www.lellit.com.br/" },
  { name: "Contabilidade Almeida", logo: "/clientes/contabilidade-almeida.webp" },
  { name: "Fitflow", logo: "/clientes/fitflow.webp" },
  { name: "Hazzap Workstation", logo: "/clientes/hazzap.webp", href: "https://hazap.com.br/workstation/" },
  { name: "Instituto Kell", logo: "/clientes/kell.webp" },
  { name: "Reis do Manto", logo: "/clientes/reis-do-manto.webp" },
  { name: "Sleep House", logo: "/clientes/sleephouse.png", href: "https://sleephouseloja.com.br" },
  { name: "Spinmove", logo: "/clientes/spinmove.webp", href: "https://spinmovecom.vercel.app/" },
  { name: "Yazigi Swiss Park", logo: "/clientes/yazigi.webp", href: "https://www.yaziswissparkcampinas.com.br/" },
]
