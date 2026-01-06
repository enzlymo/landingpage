import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "How to Create Product Videos That Actually Convert: Complete E-commerce Guide",
  description: "Learn the proven strategies top e-commerce stores use to create product videos that drive sales. Boost conversions with professional video marketing techniques.",
  keywords: [
    "product videos that convert",
    "e-commerce video marketing",
    "how to create product videos",
    "product video best practices",
    "video marketing for online stores",
    "increase conversions with video",
    "product video strategy",
    "e-commerce video tips",
    "convert visitors with video",
    "product video examples"
  ],
  openGraph: {
    title: "How to Create Product Videos That Actually Convert: Complete E-commerce Guide",
    description: "Learn the proven strategies top e-commerce stores use to create product videos that drive sales and boost conversions.",
    url: "https://lymo.me/blog/how-to-create-product-videos-that-convert",
    type: "article",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Create Product Videos That Convert"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create Product Videos That Actually Convert",
    description: "Learn the proven strategies top e-commerce stores use to create product videos that drive sales.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/blog/how-to-create-product-videos-that-convert"
  }
}

export default function ProductVideoGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
