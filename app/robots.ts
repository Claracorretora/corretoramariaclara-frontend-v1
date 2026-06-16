import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/login', '/api'],
      crawlDelay: 1,
    },
    sitemap: 'https://www.corretoramariaclara.com.br/sitemap.xml',
  }
}
