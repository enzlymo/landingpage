import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Shopify Video Marketing: Complete Guide to Boost Sales in 2026",
  description: "Master Shopify video marketing with proven strategies that increase conversions by 85%. Learn how to add videos, optimize for mobile, and boost your store's sales.",
  keywords: [
    "shopify video marketing",
    "shopify video marketing guide",
    "shopify product videos",
    "shopify video apps",
    "shopify video optimization",
    "shopify store videos",
    "shopify marketing strategies",
    "shopify conversion optimization",
    "shopify video best practices",
    "shopify video tutorials",
    "shopify video integration",
    "shopify video content"
  ],
  openGraph: {
    title: "Shopify Video Marketing: Complete Guide to Boost Sales in 2026",
    description: "Master Shopify video marketing with proven strategies that increase conversions by 85%. Learn how to add videos, optimize for mobile, and boost your store's sales.",
    url: "https://lymo.me/blog/shopify-video-marketing-guide",
    type: "article",
    images: [
      {
        url: "/images/shopify-video-marketing-og.png",
        width: 1200,
        height: 630,
        alt: "Shopify Video Marketing Complete Guide 2026"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Video Marketing: Complete Guide to Boost Sales in 2026",
    description: "Master Shopify video marketing with proven strategies that increase conversions by 85%.",
    images: ["/images/shopify-video-marketing-twitter.png"]
  },
  alternates: {
    canonical: "https://lymo.me/blog/shopify-video-marketing-guide"
  }
}

export default function ShopifyVideoMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}