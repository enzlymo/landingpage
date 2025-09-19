import React from 'react';

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Predefined schemas for easy use
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lymo AI",
  "url": "https://lymo.me",
  "logo": {
    "@type": "ImageObject",
    "url": "https://lymo.me/images/lymo-logo.png",
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
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lymo AI Video Generator",
  "description": "AI-powered video generation platform that creates professional videos from text and URLs",
  "url": "https://lymo.ai",
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
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
    },
    {
      "@type": "Question",
      "name": "Is there a free trial available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a 14-day free trial with access to all features. No credit card required to get started."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure video quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI is trained on millions of high-quality videos and uses advanced algorithms to ensure professional results. All videos are rendered in high resolution with optimized compression."
      }
    }
  ]
};



