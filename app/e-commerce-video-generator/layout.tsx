import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "E-commerce Video Generator | Create Professional Product Videos for Online Stores",
  description: "The ultimate e-commerce video generator for online stores. Create professional product videos from URLs. Perfect for Shopify, Amazon, WooCommerce, and all e-commerce platforms.",
  keywords: [
    "e-commerce video generator",
    "online store video creator",
    "product video generator",
    "e-commerce marketing videos",
    "retail video maker",
    "online store content creator",
    "e-commerce video marketing",
    "product showcase videos",
    "online retail videos",
    "e-commerce video ads"
  ],
  openGraph: {
    title: "E-commerce Video Generator | Create Professional Product Videos for Online Stores",
    description: "The ultimate e-commerce video generator for online stores. Create professional product videos from URLs instantly.",
    url: "https://lymo.me/e-commerce-video-generator",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "E-commerce Video Generator - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Video Generator | Create Professional Product Videos for Online Stores",
    description: "The ultimate e-commerce video generator for online stores. Create professional product videos from URLs instantly.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/e-commerce-video-generator"
  }
}

export default function EcommerceVideoGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
