import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Shopify Video Creator | Transform Shopify Products into Professional Videos",
  description: "Create professional marketing videos from your Shopify products instantly. Boost conversions with AI-generated product videos. Perfect for Shopify store owners and e-commerce marketers.",
  keywords: [
    "Shopify video creator",
    "Shopify product videos",
    "Shopify marketing videos",
    "e-commerce video maker",
    "Shopify store videos",
    "product video generator Shopify",
    "Shopify video ads",
    "online store video creator",
    "Shopify content creator",
    "e-commerce video marketing"
  ],
  openGraph: {
    title: "Shopify Video Creator | Transform Shopify Products into Professional Videos",
    description: "Create professional marketing videos from your Shopify products instantly. Boost conversions with AI-generated product videos.",
    url: "https://lymo.me/shopify-video-creator",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Video Creator - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Video Creator | Transform Shopify Products into Professional Videos",
    description: "Create professional marketing videos from your Shopify products instantly. Boost conversions with AI-generated product videos.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/shopify-video-creator"
  }
}

export default function ShopifyVideoCreatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
