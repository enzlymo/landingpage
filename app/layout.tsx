import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";
import CookieConsentProvider from "../components/CookieConsentProvider";
import { Analytics } from "@vercel/analytics/next";

const sora = Sora({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: "Lymo AI - Create Winning AI Videos in Seconds | #1 AI Video Generator",
    template: "%s | Lymo AI - AI Video Generator"
  },
  description: "Generate high-converting video ads from text with Lymo AI. No editing skills required. Choose from hundreds of AI actors and create professional videos in minutes. Transform URLs into viral content instantly.",
  
  // Keywords
  keywords: [
    "AI video generator",
    "text to video",
    "video creation tool",
    "AI content creator",
    "automated video production",
    "marketing videos",
    "social media videos",
    "AI actors",
    "video marketing",
    "content generation",
    "URL to video",
    "UGC creation",
    "video ads",
    "AI video maker",
    "professional video creator"
  ],
  
  // Author and Publisher
  authors: [{ name: "Lymo AI Team" }],
  creator: "Lymo AI",
  publisher: "Lymo AI",
  
  // Robots and Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph Tags (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lymo.me',
    siteName: 'Lymo AI',
    title: 'Lymo AI - Create Winning AI Videos in Seconds',
    description: 'Generate high-converting video ads from text with Lymo AI. No editing skills required. Transform URLs into viral content instantly.',
    images: [
      {
        url: '/images/lymo-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lymo AI - AI Video Generator Platform',
      },
      {
        url: '/images/lymologonew.svg.svg',
        width: 800,
        height: 600,
        alt: 'Lymo AI Logo',
      },
    ],
  },
  
  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image',
    site: '@LymoAI',
    creator: '@LymoAI',
    title: 'Lymo AI - Create Winning AI Videos in Seconds',
    description: 'Generate high-converting video ads from text with Lymo AI. Transform URLs into viral content instantly.',
    images: ['/images/lymo-twitter-card.png'],
  },
  
  // Additional Meta Tags
  category: 'Technology',
  classification: 'AI Video Generation Software',
  
  // Verification Tags (Add your actual verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
      'p:domain_verify': 'your-pinterest-verification-code',
    },
  },
  
  // Icons and Manifest
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#F4D03F' },
    ],
  },
  manifest: '/manifest.json',
  
  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  // Alternate Languages (if you plan to support multiple languages)
  alternates: {
    canonical: 'https://lymo.me',
    languages: {
      'en-US': 'https://lymo.me',
      'es-ES': 'https://lymo.me/es',
      'fr-FR': 'https://lymo.me/fr',
    },
  },
  
  // App Links (for mobile apps if you have them)
  appLinks: {
    web: {
      url: 'https://lymo.me',
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lymo.me/#organization",
        "name": "Lymo AI",
        "url": "https://lymo.me",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lymo.me/images/lymologonew.svg.svg",
          "width": 512,
          "height": 512
        },
        "description": "Leading AI video generation platform for creating professional videos from text and URLs",
        "sameAs": [
          "https://twitter.com/LymoAI",
          "https://linkedin.com/company/lymo-ai",
          "https://facebook.com/LymoAI",
          "https://instagram.com/lymo.ai"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@lymo.me",
          "url": "https://lymo.me/contact"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://lymo.me/#website",
        "url": "https://lymo.me",
        "name": "Lymo AI",
        "description": "Create winning AI videos in seconds with Lymo AI",
        "publisher": {
          "@id": "https://lymo.me/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://lymo.me/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://lymo.me/#software",
        "name": "Lymo AI Video Generator",
        "description": "AI-powered video generation platform that creates professional videos from text and URLs",
        "url": "https://lymo.me",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "29",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1247",
          "bestRating": "5",
          "worstRating": "1"
        },
        "publisher": {
          "@id": "https://lymo.me/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://lymo.me/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does AI video generation work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI analyzes your text input and automatically generates professional videos with relevant visuals, animations, and effects. The process typically takes under 60 seconds."
            }
          },
          {
            "@type": "Question", 
            "name": "What video formats do you support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support all major video formats including MP4, MOV, and AVI. Videos can be exported in various resolutions from HD to 4K, optimized for different platforms."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize the generated videos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! You can customize colors, fonts, music, and visual elements. Our editor allows you to fine-tune every aspect of your video to match your brand."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#F4D03F" />
        <meta name="msapplication-TileColor" content="#F4D03F" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//getlaunchlist.com" />
        
        {/* LaunchList Widget */}
        <script src="https://getlaunchlist.com/js/widget.js" defer></script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://lymo.me" />
      </head>
      <body className={`${inter.className} ${sora.variable} ${inter.variable} bg-background text-foreground font-sans`}>
        <GoogleAnalytics />
        <CookieConsentProvider />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
