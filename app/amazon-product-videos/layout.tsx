import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Amazon Product Video Maker | Create Professional Amazon Listing Videos",
  description: "Create professional Amazon product videos that boost sales and rankings. Transform Amazon listings into compelling video content. Perfect for Amazon sellers and FBA businesses.",
  keywords: [
    "Amazon product video maker",
    "Amazon listing videos",
    "Amazon product videos",
    "Amazon video creator",
    "Amazon FBA videos",
    "Amazon seller videos",
    "product video Amazon",
    "Amazon marketing videos",
    "Amazon product showcase",
    "Amazon video ads"
  ],
  openGraph: {
    title: "Amazon Product Video Maker | Create Professional Amazon Listing Videos",
    description: "Create professional Amazon product videos that boost sales and rankings. Transform Amazon listings into compelling video content.",
    url: "https://lymo.me/amazon-product-videos",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "Amazon Product Video Maker - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Product Video Maker | Create Professional Amazon Listing Videos",
    description: "Create professional Amazon product videos that boost sales and rankings.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/amazon-product-videos"
  }
}

export default function AmazonProductVideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
