import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.SITE_URL || 'https://lymo.me';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Define your site pages with their properties
  const pages = [
    {
      url: '',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: '/features',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/pricing',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      url: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      url: '/blog',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      url: '/help',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.5'
    },
    {
      url: '/privacy',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      url: '/terms',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    }
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.url === '' ? `
    <image:image>
      <image:loc>${baseUrl}/images/lymo-logo.png</image:loc>
      <image:title>Lymo AI Logo</image:title>
      <image:caption>Lymo AI - Create winning AI videos in seconds</image:caption>
    </image:image>` : ''}
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}