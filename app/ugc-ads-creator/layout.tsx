import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "UGC Ads Creator | AI-Generated User Content for Marketing",
  description: "Create authentic UGC ads with AI. Generate user-generated content that converts. Professional UGC creator with realistic avatars and viral content templates. Start free today!",
  keywords: [
    "UGC ads",
    "UGC creator",
    "user generated content",
    "UGC ads creator",
    "AI UGC generator",
    "UGC marketing",
    "authentic UGC content",
    "UGC video ads",
    "social media UGC",
    "UGC advertising"
  ],
  openGraph: {
    title: "UGC Ads Creator | AI-Generated User Content for Marketing",
    description: "Create authentic UGC ads with AI. Generate user-generated content that converts with realistic avatars and viral templates.",
    url: "https://lymo.me/ugc-ads-creator",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "UGC Ads Creator - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC Ads Creator | AI-Generated User Content for Marketing",
    description: "Create authentic UGC ads with AI. Generate user-generated content that converts.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/ugc-ads-creator"
  }
}

export default function UGCAdsCreatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
