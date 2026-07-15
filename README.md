# Thomas Eduardo — Portfólio Profissional

**Product Engineer Full Stack** | Next.js • TypeScript • Node.js • AWS  
São Paulo, Brasil

<p align="center">
  <a href="https://thomaseduardo.com.br"><img src="https://img.shields.io/badge/🌐_Portf%C3%B3lio-thomaseduardo.com.br-E8620A?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <a href="https://thomaseduardo.com.br"><img src="https://img.shields.io/badge/Demo-Live-E8620A?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <a href="https://github.com/devthomaseduardo/thomas-eduardo-site"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>

---

## Sobre o Projeto

Este repositório contém o **portfólio profissional completo** de Thomas Eduardo, construído com foco em:

- **Apresentação para recrutadores** (sinais claros de senioridade, processo e resultados)
- **Experiência premium para clientes** (design editorial, conversão e profissionalismo)
- **Demonstração prática** do processo de engenharia de 6 etapas que uso em todos os projetos

**Site em produção:** [thomaseduardo.com.br](https://thomaseduardo.com.br)

---

## Processo de Engenharia (6 Etapas)

Todo projeto que entrego segue este processo estruturado:

| Etapa | Descrição | Entregável |
|-------|-----------|------------|
| 1. Discovery | Entendimento profundo do problema, objetivos de negócio e restrições | Documento de escopo + métricas de sucesso |
| 2. Arquitetura | Definição de stack, estrutura de pastas, padrões e estimativas | Arquitetura + backlog priorizado |
| 3. Desenvolvimento | Código limpo, componentização, testes e documentação | Código em produção-ready |
| 4. Validação & QA | Testes manuais, automação quando aplicável e feedback | Relatório de testes + ajustes |
| 5. Deploy & Monitoramento | CI/CD, observabilidade e rollback strategy | Deploy estável + métricas |
| 6. Iteração & Entrega | Coleta de feedback, melhorias contínuas e handoff | Projeto entregue + documentação final |

Este processo aparece de forma clara na seção **Valores** do site.

---

## Stack Técnica

| Camada              | Tecnologias                                                                 |
|---------------------|-------------------------------------------------------------------------------|
| **Framework**       | Next.js 16 (App Router)                                                       |
| **Frontend**        | React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, GSAP, Lenis  |
| **UI/UX**           | Componentes reutilizáveis, micro-interações, carrosséis custom (scroll-snap) |
| **Backend & Dados** | Node.js, Fastify/Express, Prisma, PostgreSQL, MongoDB, Supabase              |
| **Infra & Deploy**  | Vercel, AWS, Docker, GitHub Actions, CI/CD                                   |
| **Integrações**     | Mercado Pago, WhatsApp API, JWT + RBAC, Analytics                            |

---

## Funcionalidades Principais

- **Hero com vídeo + animações avançadas** (TextPressure, Framer Motion)
- **Seção de Projetos** com cases reais e métricas de impacto
- **Processo de 6 etapas** bem documentado e visual
- **Sobre + Métricas** (timeline, certificações, resultados)
- **Linkbio** e **Currículo** otimizados para recrutadores
- **Redirects com tracking** (`/r/wa`, `/r/github`)
- **Páginas de Proposta** privadas (noindex)
- **Design system** consistente + experiência mobile-first com carrosséis
- **SEO otimizado** + JSON-LD Person

---

## Rotas Principais

| Rota          | Finalidade                              | Indexável? |
|---------------|-----------------------------------------|------------|
| `/`           | Home + Hero + Projetos + Processo       | Sim        |
| `/sobre`      | Sobre, métricas, timeline e valores     | Sim        |
| `/projetos`   | Cases detalhados                        | Sim        |
| `/valores`    | Processo comercial + FAQ                | Sim        |
| `/linkbio`    | Hub de links sociais                    | Sim        |
| `/curriculo`  | Visualizador + download do CV           | Não        |
| `/r/*`        | Redirects com analytics                 | Não        |
| `/proposta`   | Páginas privadas de proposta            | Não        |

---

## Desenvolvimento Local

**Requisitos:** Node.js 18+ e pnpm

```bash
git clone https://github.com/devthomaseduardo/thomas-eduardo-site.git
cd thomas-eduardo-site
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000)

### Scripts úteis

```bash
pnpm dev      # Desenvolvimento
pnpm build    # Build de produção
pnpm start    # Servir build
pnpm lint     # ESLint
```

---

## Estrutura do Projeto

```
app/                    # App Router (Next.js 16)
  r/[slug]/             # Redirects com tracking
  curriculo/            # Viewer de PDF
  linkbio/              # Hub de links
  sobre | projetos | valores /
components/
  home/                 # Seções da home
  ui/                   # Primitives e componentes reutilizáveis
lib/
  data.ts               # Projetos, clientes, stack
  redirects.ts          # Mapa de /r/*
public/
  curriculo.pdf         # CV oficial
  hero.mp4              # Vídeo do hero
  projects/             # Imagens dos cases
```

---

## Deploy

Deploy automático via **Vercel** (push na branch `main`).

```bash
pnpm build   # Verificação local
```

---

## SEO & Privacidade

- Páginas públicas indexáveis: Home, Sobre, Projetos, Valores
- Páginas com `noindex`: `/proposta`, `/r/*`, `/curriculo`
- JSON-LD Person implementado no layout raiz

---

## Licença

Uso pessoal e profissional. Todos os direitos reservados © Thomas Eduardo.

---

**Construído com processo, intenção e atenção aos detalhes.**