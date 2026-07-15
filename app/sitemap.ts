import type { MetadataRoute } from "next"

const SITE_URL = "https://thomaseduardo.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sobre", "/curriculo", "/valores"]
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
