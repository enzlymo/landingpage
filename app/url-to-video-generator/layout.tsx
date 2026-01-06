import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "URL to Video Generator | Transform Product Links into Professional Videos",
  description: "Convert any product URL into professional marketing videos instantly. Perfect for e-commerce stores, Amazon sellers, and online marketers. Transform product links into engaging video content in seconds.",
  keywords: [
    "URL to video generator",
    "product URL to video",
    "link to video converter",
    "product link video creator",
    "e-commerce video generator",
    "Amazon product video maker",
    "Shopify video creator",
    "product URL converter",
    "online store video maker",
    "marketplace video generator"
  ],
  openGraph: {
    title: "URL to Video Generator | Transform Product Links into Professional Videos",
    description: "Convert any product URL into professional marketing videos instantly. Perfect for e-commerce stores and online marketers.",
    url: "https://lymo.me/url-to-video-generator",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "URL to Video Generator - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "URL to Video Generator | Transform Product Links into Professional Videos",
    description: "Convert any product URL into professional marketing videos instantly. Perfect for e-commerce stores.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/url-to-video-generator"
  }
}

export default function URLToVideoGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
