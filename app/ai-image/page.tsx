import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { AIImageStudio } from '@/components/demo/AIImageStudio'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Free AI Image Generator | Create Professional Images Instantly",
  description: "Generate stunning AI images for free. Professional AI image generator with advanced models. Create product photos, marketing visuals, and social media content in seconds. No design skills required.",
  keywords: [
    "AI image generator",
    "free AI image generator",
    "AI image creator",
    "AI photo generator", 
    "professional AI images",
    "product image generator",
    "marketing image creator",
    "social media images AI",
    "AI generated images",
    "artificial intelligence images"
  ],
  openGraph: {
    title: "Free AI Image Generator | Create Professional Images Instantly",
    description: "Generate stunning AI images for free. Professional AI image generator with advanced models. Create product photos and marketing visuals in seconds.",
    url: "https://lymo.me/ai-image",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "Lymo AI Image Generator - Create Professional Images"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Image Generator | Create Professional Images Instantly",
    description: "Generate stunning AI images for free. Professional AI image generator with advanced models.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/ai-image"
  }
}

export default function AIImagePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* AI Image Studio Demo */}
        <AIImageStudio />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-12 mt-auto border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/Framedark.svg" 
                  alt="Lymo Logo" 
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-600 max-w-md">
                Transform any product into professional AI videos and images. 
                The choice of creators worldwide for stunning marketing content.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Product</h4>
              <div className="space-y-3">
                <a href="/ai-video" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Video</a>
                <a href="/ai-image" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Image</a>
                <a href="/ai-studios" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Studios</a>
                <a href="/pricing" className="block text-gray-600 hover:text-yellow-600 transition-colors">Pricing</a>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Support</h4>
              <div className="space-y-3">
                <a href="mailto:lymoadsai@gmail.com" className="block text-gray-600 hover:text-yellow-600 transition-colors">Contact</a>
                <a href="/privacy-policy" className="block text-gray-600 hover:text-yellow-600 transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="block text-gray-600 hover:text-yellow-600 transition-colors">Terms of Service</a>
                <a href="/cookie-policy" className="block text-gray-600 hover:text-yellow-600 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Lymo AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
