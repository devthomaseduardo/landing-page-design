import type { MetadataRoute } from "next"

const SITE_URL = "https://thomaseduardo.com.br"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/proposta", "/r", "/curriculo"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
