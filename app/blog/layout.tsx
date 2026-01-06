import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Lymo AI Blog | E-commerce Video Marketing Tips & Strategies",
  description: "Learn how to create professional product videos, boost e-commerce sales, and master video marketing for online stores. Expert tips from Lymo AI.",
  keywords: [
    "e-commerce video marketing",
    "product video tips",
    "online store marketing",
    "video marketing blog",
    "e-commerce content strategy",
    "product video best practices",
    "Shopify marketing tips",
    "Amazon seller tips"
  ],
  openGraph: {
    title: "Lymo AI Blog | E-commerce Video Marketing Tips & Strategies",
    description: "Learn how to create professional product videos, boost e-commerce sales, and master video marketing for online stores.",
    url: "https://lymo.me/blog",
    type: "website"
  },
  alternates: {
    canonical: "https://lymo.me/blog"
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
