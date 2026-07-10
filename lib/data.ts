export const CONTACT = {
  name: "Thomas Eduardo R. Nascimento",
  role: "Software Engineer | Full Stack Developer",
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
    href: "https://hommadesignvercelapp.vercel.app",
    year: "2026",
  },


  {
    tag: "Backend de E-commerce",
    title: "Torcida Urbana",
    subtitle: "API de operação comercial com regras reais de negócio",
    context: "E-commerce lidando com picos de requisições concorrentes em datas de lançamento de produtos altamente limitados.",
    problem: "Operação de e-commerce com processos manuais, sem controle real de estoque e inconsistências em vendas simultâneas que geravam prejuízos recorrentes.",
    architecture: "Monolito modular Node.js. PostgreSQL isolando transações com níveis de isolamento rigorosos para evitar deadlocks em race conditions.",
    solution: "API REST robusta com controle de estoque transacional, autenticação JWT, cálculo automático de comissão e prevenção de race conditions em vendas paralelas.",
    challenges: "Implementar pessimistic locks (SELECT FOR UPDATE) no PostgreSQL garantindo que vendas simultâneas do mesmo produto não quebrassem o inventário.",
    result: "Operação sem inconsistências, controle total de estoque e automação do cálculo de comissões — eliminando trabalho manual e erros humanos.",
    description:
      "API para operação comercial com regras reais de negócio: controle de estoque, autenticação, cálculo de comissão e prevenção de inconsistências em vendas simultâneas.",
    bullets: [
      "Controle de estoque com transações atômicas",
      "Autenticação JWT + RBAC",
      "Cálculo automático de comissão",
    ],
    stack: [
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Docker",
    ],
    image: "/projects/homma-section.webp",
    year: "2025",
  },


  {
    tag: "Ferramentas para Engenharia",
    title: "Developer Ecosystem",
    subtitle: "CLI, extensão VSCode e automações de desenvolvimento",
    context: "Time de desenvolvimento escalando precisava de padronização rígida para iniciar novos microserviços e componentes.",
    problem: "Setup repetitivo de projetos consumindo tempo e gerando inconsistências entre ambientes. Ausência de padrões de estrutura e configuração.",
    architecture: "CLI compilada em TypeScript. Extensão VSCode consumindo AST para injeção semântica de snippets contextuais.",
    solution: "Ecossistema de ferramentas internas: CLI para bootstrap de projetos com templates opinados, extensão VSCode com snippets e automações de workflow de desenvolvimento.",
    challenges: "Lidar com compatibilidade cross-platform executando comandos nativos de scaffolding e garantindo integridade de permissões de sistema de arquivos.",
    result: "Redução significativa no tempo de setup, consistência entre projetos e produtividade elevada no ciclo de desenvolvimento.",
    description:
      "Ferramentas internas para acelerar o ciclo de desenvolvimento: CLI para bootstrap de projetos, extensão VSCode e automação de workflows.",
    bullets: [
      "CLI para bootstrap de projetos",
      "Extensão VSCode com snippets",
      "Automação de workflow de desenvolvimento",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Shell Script",
      "VS Code API",
    ],
    image: "/hero.png",
    year: "2025",
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
    image: "/projects/paper-contratos.svg",
    year: "2025",
  },

  {
    tag: "E-commerce Colchoaria",
    title: "Sleep House Campinas",
    subtitle: "Catálogo virtual de alto padrão e otimizado",
    context: "Maior rede multimarcas de colchões precisava de um catálogo rápido e direcionado a leads qualificados no WhatsApp.",
    problem: "Plataformas de e-commerce tradicionais geravam páginas pesadas que prejudicavam conversão em campanhas pagas.",
    architecture: "Arquitetura Jamstack com Next.js (SSG) servindo milhares de variações de produtos em milissegundos.",
    solution: "Um e-commerce híbrido extremamente veloz com integração direta via WhatsApp para negociação B2C VIP.",
    challenges: "Geração estática de milhares de páginas (Static Site Generation) com revalidação inteligente.",
    result: "Aumento massivo no ROI das campanhas no Google Ads devido ao LCP (Largest Contentful Paint) menor que 1 segundo.",
    description: "Catálogo digital de alta performance focado na geração de leads qualificados e atendimento consultivo VIP.",
    bullets: [
      "Integração direta de orçamento",
      "Geração Estática super rápida",
      "Catálogo dinâmico gerenciável",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/sleep-house-campinas.svg",
    year: "2024",
  },

  {
    tag: "Website Institucional",
    title: "Academia Spinmove",
    subtitle: "Presença digital para academia local",
    context: "Necessidade de modernizar a presença online e facilitar captação de novas matrículas locais.",
    problem: "Sem site oficial, as campanhas online convertiam pouco devido a falta de credibilidade.",
    architecture: "Landing page estruturada em React com integração ao sistema de gestão CRM para lead imediato.",
    solution: "Interface altamente otimizada, calendário de aulas dinâmico e botões focados em ativação.",
    challenges: "Design visual imersivo e agressivo focado no mundo fitness, mantendo a performance.",
    result: "Captação de leads triplicada e consolidação da marca na região.",
    description: "Plataforma focada em aquisição de clientes com cronograma, planos e forte identidade visual.",
    bullets: [
      "Conversão direta para CRM",
      "Calendário em tempo real",
      "Design vibrante",
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/academia-spinmove.svg",
    year: "2024",
  },

  {
    tag: "Portal Educacional",
    title: "Yázigi Swiss Park",
    subtitle: "Escola de idiomas com plataforma integrada",
    context: "A unidade precisava de uma forma mais prática de captar alunos e disponibilizar informações sobre turmas.",
    problem: "Informações fragmentadas em redes sociais reduziam as matrículas via tráfego orgânico e pago.",
    architecture: "Site construído em Next.js para maximizar o SEO local (Local Search).",
    solution: "Portal educacional completo com testes de nível online, turmas, depoimentos e blog integrado.",
    challenges: "Integrar um teste de proficiência online (quiz interativo) com captura de leads antes do resultado.",
    result: "Crescimento sustentável de matrículas orgânicas através de buscas locais por cursos de inglês.",
    description: "Portal moderno focado em captura orgânica, com teste interativo e estruturação de cursos.",
    bullets: [
      "Teste de nivelamento interativo",
      "Local SEO estruturado",
      "Geração inteligente de leads",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/projects/yagizi-swissparck.svg",
    year: "2024",
  },

  {
    tag: "Website Clínico",
    title: "Instituto Kell",
    subtitle: "Clínica médica multidisciplinar",
    context: "Necessidade de apresentar o corpo clínico e facilitar agendamentos diários via WhatsApp de forma organizada.",
    problem: "Alta fricção na marcação de consultas por telefone e pacientes confusos sobre as especialidades disponíveis.",
    architecture: "SPA em React super leve com roteamento client-side para navegação fluida.",
    solution: "Apresentação limpa (clean design), perfis dos profissionais e integração direta ao WhatsApp da recepção para cada especialidade.",
    challenges: "Acessibilidade e usabilidade voltadas a um público de faixa etária mais ampla.",
    result: "Fluxo de atendimento simplificado, reduzindo ligações demoradas e aumentando consultas agendadas digitalmente.",
    description: "Site limpo e humanizado para agendamento rápido, focado em conversão direta para o corpo clínico.",
    bullets: [
      "Filtros de especialidades",
      "Clean & Acessível",
      "Roteamento de atendimento",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/intituto-kell.svg",
    year: "2023",
  },

  {
    tag: "Plataforma B2B",
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
    image: "/projects/hazap-workstation.svg",
    year: "2023",
  },

  {
    tag: "Portfólio Advogado",
    title: "Gil Barbosa",
    subtitle: "Posicionamento de autoridade no direito",
    context: "Advogado especialista necessitava de um canal oficial para transmitir confiança e autoridade para clientes empresariais.",
    problem: "Apenas perfis de redes sociais não transmitiam o peso institucional exigido por clientes B2B.",
    architecture: "Site de alta performance servido estaticamente.",
    solution: "Página pessoal robusta, minimalista, com integração de artigos e áreas de atuação estruturadas.",
    challenges: "Criar uma interface clássica, porém que pareça altamente moderna e tecnológica.",
    result: "Fechamento de grandes contas B2B impulsionado por credibilidade digital (Social Proof consolidado).",
    description: "Desenvolvimento de branding digital para autoridade jurídica com design editorial.",
    bullets: [
      "Arquitetura de autoridade",
      "Design minimalista",
      "Alta velocidade (SSG)",
    ],
    stack: ["Next.js", "Tailwind CSS"],
    image: "/projects/gilbarbosa.svg",
    year: "2023",
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
  { name: "Brasservice", logo: "/clientes/brasservice.webp" },
  { name: "Casalellit", logo: "/clientes/casalellit.webp" },
  { name: "Contabilidade Almeida", logo: "/clientes/contabilidade-almeida.webp" },
  { name: "Fitflow", logo: "/clientes/fitflow.webp" },
  { name: "Hazzap Workstation", logo: "/clientes/hazzap.webp" },
  { name: "Instituto Kell", logo: "/clientes/kell.webp" },
  { name: "Reis do Manto", logo: "/clientes/reis-do-manto.webp" },
  { name: "Sleep House", logo: "/clientes/sleephouse.png" },
  { name: "Spinmove", logo: "/clientes/spinmove.webp" },
  { name: "Yazigi Swiss Park", logo: "/clientes/yazigi.webp" },
]
