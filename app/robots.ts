import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/login', '/api'],
    },
    host: 'https://www.corretoramariaclara.com.br',
    sitemap: 'https://www.corretoramariaclara.com.br/sitemap.xml',
  }
}
