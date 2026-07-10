// Dados mock para demonstração do Portal Comercial
// Em produção, isso viria de um banco de dados ou CMS

export type ProposalData = {
  // Cliente
  clientName: string
  clientCompany?: string
  greeting: string

  // Projeto
  projectTitle: string
  projectTag: string
  readingTime: string

  // Entendimento
  objective: string
  problem: string
  solution: string
  expectedResult: string

  // Escopo
  included: string[]
  notIncluded: string[]

  // Investimento
  totalValue: string
  paymentTerms: string
  deadline: string // prazo da proposta

  // Cronograma (duração em semanas)
  estimatedWeeks: number

  // Sobre o Thomas para aquele cliente
  personalNote: string
}

// Banco de propostas por slug
const PROPOSALS: Record<string, ProposalData> = {
  "demo": {
    clientName: "João",
    clientCompany: "Empresa XYZ",
    greeting: "Olá, João.",
    projectTitle: "Sistema de Gestão de Clientes",
    projectTag: "Aplicação Web Completa",
    readingTime: "5 min",
    objective: "Digitalizar e centralizar a gestão de clientes, contratos e pagamentos da Empresa XYZ em uma plataforma única e segura.",
    problem: "Hoje a empresa gerencia clientes via planilhas, contratos em papel e comunicação dispersa no WhatsApp. Isso gera perda de informações, retrabalho e dificuldade de acompanhamento.",
    solution: "Uma aplicação web sob medida com área administrativa, cadastro de clientes, controle de contratos, histórico de pagamentos e dashboard com visão geral do negócio.",
    expectedResult: "Redução de 80% do tempo gasto em tarefas manuais, eliminação de erros por retrabalho e centralização total das informações do negócio.",
    included: [
      "Interface completa e responsiva (desktop e mobile)",
      "Área administrativa com autenticação segura",
      "Cadastro e gestão de clientes",
      "Controle de contratos e status",
      "Dashboard com métricas do negócio",
      "SEO técnico e otimização de performance",
      "Deploy em produção",
      "30 dias de suporte pós-entrega",
    ],
    notIncluded: [
      "Identidade visual (logo, cores, tipografia)",
      "Criação de conteúdo e textos",
      "Fotografia e produção de vídeo",
      "Domínio e hospedagem (custo mensal)",
      "Integrações externas (gateway de pagamento, etc.)",
      "Funcionalidades fora do escopo acordado",
    ],
    totalValue: "R$ 1.200",
    paymentTerms: "50% na aprovação · 50% na entrega",
    deadline: "Proposta válida por 7 dias",
    estimatedWeeks: 4,
    personalNote: "João, foi um prazer conversar sobre seu projeto. Tenho certeza que podemos criar algo que vai transformar a operação da Empresa XYZ.",
  },
}

export function getProposal(slug: string): ProposalData | null {
  return PROPOSALS[slug] ?? PROPOSALS["demo"] ?? null
}
