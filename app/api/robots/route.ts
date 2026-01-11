import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.SITE_URL || 'https://lymo.me';
  
  const robots = `# Robots.txt for Lymo AI - ${baseUrl}

User-agent: *
Allow: /

# Allow all search engines to crawl the site
Allow: /images/
Allow: /videos/
Allow: /blog/

# Disallow admin areas and sensitive paths
Disallow: /admin/
Disallow: /dashboard/
Disallow: /api/private/
Disallow: /_next/
Disallow: /private/
Disallow: /temp/
Disallow: /.env
Disallow: /config/

# Prevent indexing of app subdomain
User-agent: *
Disallow: https://app.lymo.me/

# Canonical domain preference
Host: lymo.me

# Disallow URL parameters that might create duplicate content
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?source=*
Disallow: /*?campaign=*

# Allow specific important bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Crawl delay for general bots
Crawl-delay: 1

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}