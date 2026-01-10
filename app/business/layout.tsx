import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Solutions | Lymo AI - Enterprise AI Video & Image Generation",
  description: "Transform your business with Lymo AI's enterprise solutions. Professional AI video generation, bulk content creation, and custom integrations for e-commerce businesses. Contact us at lymoadsai@gmail.com",
  keywords: [
    "business AI video generator",
    "enterprise AI solutions",
    "bulk video creation",
    "e-commerce AI tools",
    "business automation",
    "enterprise video marketing",
    "AI content generation for business",
    "custom AI integrations",
    "business video solutions",
    "enterprise image generation"
  ],
  openGraph: {
    title: "Business Solutions | Lymo AI - Enterprise AI Video & Image Generation",
    description: "Transform your business with Lymo AI's enterprise solutions. Professional AI video generation and custom integrations.",
    url: "https://lymo.me/business",
    type: "website",
    images: [
      {
        url: "/images/lymo-business-og.png",
        width: 1200,
        height: 630,
        alt: "Lymo AI Business Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Solutions | Lymo AI - Enterprise AI Video & Image Generation",
    description: "Transform your business with Lymo AI's enterprise solutions. Professional AI video generation and custom integrations.",
    images: ["/images/lymo-business-twitter.png"]
  },
  alternates: {
    canonical: "https://lymo.me/business"
  }
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}


