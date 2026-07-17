import type { Metadata } from "next"
import { getProposal } from "@/lib/proposals"
import { ProposalPortal } from "./portal"

type Props = { params: Promise<{ cliente: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cliente } = await params
  const proposal = getProposal(cliente)
  return {
    title: proposal ? `Proposta - ${proposal.projectTitle}` : "Proposta Comercial",
    description: "Proposta comercial personalizada - documento privado.",
    robots: { index: false, follow: false },
  }
}

export default async function PropostaClientePage({ params }: Props) {
  const { cliente } = await params
  const proposal = getProposal(cliente)

  if (!proposal) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">404</p>
          <h1 className="font-display text-3xl font-semibold text-foreground">Proposta não encontrada</h1>
          <p className="mt-3 text-muted-foreground">Este link pode ter expirado ou não existir.</p>
        </div>
      </div>
    )
  }

  return <ProposalPortal proposal={proposal} />
}
