export const CONTACT = {
  name: "Thomas Eduardo R. Nascimento",
  role: "Software Engineer | Full Stack Developer",
  email: "devthomaseduardo@gmail.com",
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
  href?: string
  year?: string
}


export const PROJECTS: Project[] = [

  {
    tag: "Website Institucional Premium",
    title: "Homma Design",
    subtitle: "Experiência digital para showroom de alto padrão",
    context: "O setor de mobiliário autoral de luxo exige uma apresentação visual impecável e carregamento instantâneo. A marca operava offline há 20 anos.",
    problem: "Showroom de mobiliário autoral sem presença digital. O negócio dependia exclusivamente de indicações e não conseguia comunicar a sofisticação da marca online.",
    architecture: "SSG com Next.js App Router para as páginas públicas garantindo TTFB mínimo, com Edge Caching na Vercel e imagens servidas em formato moderno.",
    solution: "Website editorial premium com narrativa visual, galeria imersiva de projetos e foco em conversão. Arquitetura Next.js com performance máxima e SEO técnico.",
    challenges: "Equilibrar assets de altíssima resolução com métricas perfeitas de Core Web Vitals (LCP < 2.5s).",
    result: "Presença digital premium que comunica a essência da marca e gera novos contatos qualificados para o showroom.",
    description:
      "Experiência digital para showroom de mobiliário de alto padrão com foco em apresentação visual, performance e conversão.",
    bullets: [
      "Direção visual editorial premium",
      "Performance otimizada — Lighthouse 98+",
      "SEO técnico estruturado",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/projects/homma-projetos.webp",
    href: "https://hommadesign.com.br",
    year: "2026",
  },


  {
    tag: "Projeto Proprietário",
    title: "TERON OS",
    subtitle: "Sistema operacional empresarial",
    context: "TERON OS é um sistema operacional empresarial criado para automatizar e padronizar toda a operação de uma empresa de serviços digitais. A plataforma integra CRM, propostas comerciais, contratos digitais, onboarding de clientes, gestão financeira, projetos, automações e inteligência artificial em um único ecossistema, reduzindo tarefas manuais e oferecendo uma experiência profissional do primeiro contato até o pós-venda.",
    problem: "Empresas de serviços digitais sofrem com processos fragmentados, tarefas operacionais manuais repetitivas e falta de centralização entre vendas, financeiro e entregas.",
    architecture: "Arquitetura multi-tenant robusta, integrando microsserviços de automação com LLMs para assistentes de IA, banco relacional para consistência financeira e APIs REST.",
    solution: "Um sistema operacional empresarial que conecta processos comerciais, financeiros e operacionais em um único ambiente inteligente, criado para transformar a forma como empresas de tecnologia gerenciam seus projetos e clientes.",
    challenges: "Consolidar múltiplos fluxos complexos (CRM, contratos, faturamento) em um único dashboard de alta performance e tempo de resposta otimizado.",
    result: "Automação operacional de ponta a ponta, reduzindo trabalho manual administrativo e centralizando a inteligência do negócio.",
    description: "Um sistema operacional empresarial que conecta processos comerciais, financeiros e operacionais em um único ambiente inteligente, criado para transformar a forma como empresas de tecnologia gerenciam seus projetos e clientes.",
    bullets: [
      "CRM, funil comercial e propostas",
      "Contratos digitais e onboarding",
      "Financeiro e gestão de projetos",
      "Workspace e assistente de IA",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    image: "/projects/teron-os.webp",
    year: "2026",
  },


  {
    tag: "Projeto Proprietário",
    title: "TERON Studio Workspace",
    subtitle: "Workspace inteligente de projetos",
    context: "TERON Studio Workspace é um workspace inteligente desenvolvido para centralizar toda a gestão de projetos digitais em um único ambiente. A plataforma reúne cronograma, aprovações, comunicação, arquivos, pagamentos e acompanhamento em tempo real, proporcionando mais transparência para o cliente e mais organização durante todo o desenvolvimento do projeto.",
    problem: "A falta de visibilidade no andamento de projetos causa ansiedade em clientes e desalinhamento de expectativas no time de desenvolvimento.",
    architecture: "SPA em React e Next.js com atualizações em tempo real (WebSockets), armazenamento seguro de arquivos e integrações de pagamentos seguras.",
    solution: "Uma plataforma para gerenciamento transparente de projetos digitais, desenvolvida para oferecer aos clientes uma experiência organizada durante todas as etapas do desenvolvimento.",
    challenges: "Gerenciar atualizações de status em tempo real e uploads de grandes volumes de arquivos sem impactar a performance geral do app.",
    result: "Experiência de onboarding e acompanhamento premium para o cliente final, aumentando a fidelidade e a satisfação com a entrega.",
    description: "Uma plataforma para gerenciamento transparente de projetos digitais, desenvolvida para oferecer aos clientes uma experiência organizada durante todas as etapas do desenvolvimento.",
    bullets: [
      "Dashboard interativo e timeline",
      "Área exclusiva do cliente",
      "Aprovações e controle de arquivos",
      "Interface moderna estilo SaaS",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/projects/teron-workspace.webp",
    year: "2026",
  },

  {
    tag: "Plataforma de Contratos Automáticos",
    title: "Paper Contratos",
    subtitle: "Geração e assinatura digital automatizada",
    context: "Escritórios jurídicos e imobiliárias perdendo horas na confecção manual de contratos.",
    problem: "Lentidão e erros humanos na criação de documentos baseados em templates complexos.",
    architecture: "Next.js App Router para frontend, Node.js + Prisma para processamento e webhooks.",
    solution: "Plataforma SaaS que injeta variáveis dinamicamente em templates estruturados e integra APIs de assinatura digital via webhooks.",
    challenges: "Parseamento confiável de dezenas de variáveis aninhadas em templates ricos preservando formatação.",
    result: "Redução de horas de trabalho manual para minutos, eliminando falhas de preenchimento.",
    description: "SaaS de geração de contratos dinâmicos integrados com assinatura digital e workflows automatizados.",
    bullets: [
      "Geração automática de PDFs estruturados",
      "Integração com APIs de assinatura",
      "Webhooks de status",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Prisma"],
    image: "/projects/paper-contratos.webp",
    href: "https://paper-contracts.vercel.app/",
    year: "2025",
  },

  {
    tag: "Landing Page de Varejo",
    title: "Sleep House Campinas",
    subtitle: "Catálogo virtual de alto padrão e otimizado",
    context: "Maior rede multimarcas de colchões precisava de um catálogo rápido e direcionado a leads qualificados no WhatsApp.",
    problem: "Plataformas de e-commerce tradicionais geravam páginas pesadas que prejudicavam conversão em campanhas pagas.",
    architecture: "Arquitetura Jamstack com Next.js (SSG) servindo milhares de variações de produtos em milissegundos.",
    solution: "Um e-commerce híbrido extremamente veloz com integração direta via WhatsApp para negociação B2C VIP.",
    challenges: "Geração estática de milhares de páginas (Static Site Generation) com revalidação inteligente.",
    result: "Aumento significativo na captação de leads qualificados devido à otimização de performance.",
    description: "Catálogo digital de alta performance focado na geração de leads qualificados e atendimento consultivo VIP.",
    bullets: [
      "Integração direta de orçamento",
      "Geração Estática super rápida",
      "Catálogo dinâmico gerenciável",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/sleep-house-campinas.webp",
    href: "https://sleephouseloja.com.br",
    year: "2026",
  },

  {
    tag: "Landing Page Institucional",
    title: "Academia Spinmove",
    subtitle: "Presença digital para academia local",
    context: "Necessidade de modernizar a presença online e facilitar captação de novas matrículas locais.",
    problem: "Sem site oficial, as campanhas online convertiam pouco devido a falta de credibilidade.",
    architecture: "Landing page estruturada em React com integração ao sistema de gestão CRM para lead imediato.",
    solution: "Interface altamente otimizada, calendário de aulas dinâmico e botões focados em ativação.",
    challenges: "Design visual imersivo e agressivo focado no mundo fitness, mantendo a performance.",
    result: "Aumento significativo na captação de leads e consolidação da marca na região.",
    description: "Landing page focada em aquisição de clientes com cronograma, planos e forte identidade visual.",
    bullets: [
      "Conversão direta para CRM",
      "Calendário em tempo real",
      "Design vibrante",
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/academia-spinmove.webp",
    href: "https://spinmovecom.vercel.app/",
    year: "2025",
  },

  {
    tag: "Landing Page Educacional",
    title: "Yázigi Swiss Park",
    subtitle: "Escola de idiomas com plataforma integrada",
    context: "A unidade precisava de uma forma mais prática de captar alunos e disponibilizar informações sobre turmas.",
    problem: "Informações fragmentadas em redes sociais reduziam as matrículas via tráfego orgânico e pago.",
    architecture: "Landing page construída em Next.js para maximizar o SEO local (Local Search).",
    solution: "Portal educacional completo com testes de nível online, turmas, depoimentos e blog integrado.",
    challenges: "Integrar um teste de proficiência online (quiz interativo) com captura de leads antes do resultado.",
    result: "Crescimento sustentável de matrículas orgânicas através de buscas locais por cursos de inglês.",
    description: "Landing page moderna focado em captura orgânica, com teste interativo e estruturação de cursos.",
    bullets: [
      "Teste de nivelamento interativo",
      "Local SEO estruturado",
      "Geração inteligente de leads",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/projects/yagizi-swissparck.webp",
    href: "https://www.yaziswissparkcampinas.com.br/",
    year: "2025",
  },

  {
    tag: "Landing Page",
    title: "Instituto Kell",
    subtitle: "Clínica médica multidisciplinar",
    context: "Necessidade de apresentar o corpo clínico e facilitar agendamentos diários via WhatsApp de forma organizada.",
    problem: "Alta fricção na marcação de consultas por telefone e pacientes confusos sobre as especialidades disponíveis.",
    architecture: "SPA em React super leve com roteamento client-side para navegação fluida.",
    solution: "Apresentação limpa (clean design), perfis dos profissionais e integração direta ao WhatsApp da recepção para cada especialidade.",
    challenges: "Acessibilidade e usabilidade voltadas a um público de faixa etária mais ampla.",
    result: "Fluxo de atendimento simplificado, reduzindo ligações demoradas e aumentando consultas agendadas digitalmente.",
    description: "Landing page limpa e humanizada para agendamento rápido, focado em conversão direta para o corpo clínico.",
    bullets: [
      "Filtros de especialidades",
      "Clean & Acessível",
      "Roteamento de atendimento",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/intituto-kell.webp",
    year: "2025",
  },

  {
    tag: "Landing Page",
    title: "Hazap Workstation",
    subtitle: "Gestão inteligente para coworking",
    context: "Espaço de escritórios B2B precisava organizar disponibilidade de salas e posições virtuais.",
    problem: "Ocupação não otimizada por falta de visualização pública e clara de espaços.",
    architecture: "Interface administrativa complexa consumindo APIs REST.",
    solution: "Catálogo de espaços com visualização interativa e sistema de solicitação de aluguel facilitado.",
    challenges: "Gestão visual de grids e plantas de escritório.",
    result: "Taxa de ocupação maximizada através da automação do pipeline de novos locatários.",
    description: "Solução B2B para visualização e captação comercial de um espaço corporativo e coworking.",
    bullets: [
      "Catálogo inteligente",
      "Pipeline integrado",
      "Gestão de demandas",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
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

  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Fastify",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Linux",
  "AWS",
  "Vercel",
  "JWT",
  "Tailwind CSS",
  "Python",
  "MongoDB",

]

export const CLIENTS = [
  { name: "Brasservice", logo: "/clientes/brasservice.webp", href: "https://ass.bras-service.com/" },
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
