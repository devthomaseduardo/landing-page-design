import type { MetadataRoute } from "next"

const SITE_URL = "https://thomaseduardo.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", 
    "/sobre", 
    "/curriculo", 
    "/processo", 
    "/projetos", 
    "/proposta"
  ]
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : (route === "/projetos" || route === "/sobre" ? 0.9 : 0.8),
  }))
}
