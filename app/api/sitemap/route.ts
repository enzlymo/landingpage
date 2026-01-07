import { NextResponse } from 'next/server';

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET() {
  const baseUrl = process.env.SITE_URL || 'https://lymo.me';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Define your site pages with their properties
  const pages = [
    {
      url: '',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0',
      image: {
        loc: 'https://lymo.me/images/lymologonew.svg',
        title: 'Lymo AI Logo',
        caption: 'Lymo AI - #1 AI Image Generator &amp; Video Creator'
      }
    },
    // High-priority SEO pages for target keywords
    {
      url: '/url-to-video-generator',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.95'
    },
    {
      url: '/shopify-video-creator',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.95'
    },
    {
      url: '/amazon-product-videos',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.95'
    },
    {
      url: '/ai-image',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/free-ai-image-generator',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/ai-video',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/ugc-ads-creator',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/e-commerce-video-generator',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.95'
    },
    {
      url: '/ai-studios',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/blog',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/blog/how-to-create-product-videos-that-convert',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/help',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.5'
    },
    {
      url: '/business',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/api',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.4'
    },
    {
      url: '/privacy-policy',
      lastmod: '2025-09-22',
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      url: '/terms-of-service',
      lastmod: '2025-09-22',
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      url: '/cookie-policy',
      lastmod: '2025-09-22',
      changefreq: 'yearly',
      priority: '0.3'
    }
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${pages.map(page => `
  <url>
    <loc>${escapeXml(baseUrl + page.url)}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.image ? `
    <image:image>
      <image:loc>${escapeXml(page.image.loc)}</image:loc>
      <image:title>${escapeXml(page.image.title)}</image:title>
      <image:caption>${page.image.caption}</image:caption>
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