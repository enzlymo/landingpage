import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { AIImageStudio } from '@/components/demo/AIImageStudio'
import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, ArrowRight, Zap, Target, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Free AI Image Generator | Create Professional Images Online",
  description: "100% Free AI image generator. Create professional images, product photos, and marketing visuals instantly. No signup required. Advanced AI models including FLUX and DALL-E 3.",
  keywords: [
    "free AI image generator",
    "AI image generator free",
    "free AI image creator",
    "no signup AI image generator",
    "professional AI images free",
    "free product image generator",
    "AI photo generator free",
    "free marketing images AI",
    "online AI image generator",
    "free artificial intelligence images"
  ],
  openGraph: {
    title: "Free AI Image Generator | Create Professional Images Online",
    description: "100% Free AI image generator. Create professional images, product photos, and marketing visuals instantly. No signup required.",
    url: "https://lymo.me/free-ai-image-generator",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "Free AI Image Generator - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Image Generator | Create Professional Images Online",
    description: "100% Free AI image generator. Create professional images instantly. No signup required.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/free-ai-image-generator"
  }
}

export default function FreeAIImageGeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 font-semibold text-sm">100% FREE - NO SIGNUP REQUIRED</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Free AI Image Generator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create professional images instantly with our <strong>free AI image generator</strong>. 
              No signup required, unlimited generations, commercial license included.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">No Signup Required</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Commercial License</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Professional Quality</span>
              </div>
            </div>

            <Link href="https://app.lymo.me">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Sparkles className="w-6 h-6 inline mr-3" />
                Start Creating Free Images Now
                <ArrowRight className="w-6 h-6 inline ml-3" />
              </button>
            </Link>
          </div>
        </section>

        {/* AI Image Studio Demo */}
        <AIImageStudio />

        {/* Why Choose Our Free AI Image Generator */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">Free AI Image Generator?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The most advanced free AI image generator with professional features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Lightning Fast Generation",
                  description: "Generate professional AI images in under 10 seconds. Our optimized AI models deliver instant results without compromising quality.",
                  gradient: "from-yellow-400 to-orange-400"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Advanced AI Models",
                  description: "Access to FLUX Pro, DALL-E 3, and Midjourney-quality models. Create photorealistic images, artwork, and professional product photos.",
                  gradient: "from-blue-400 to-purple-400"
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Commercial License Included",
                  description: "Use generated images for your business, marketing, social media, and commercial projects. Full commercial rights included for free.",
                  gradient: "from-purple-400 to-green-400"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Best Free AI Image Generator for Professional Results</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our <strong>free AI image generator</strong> combines the power of advanced artificial intelligence with an intuitive interface, making professional image creation accessible to everyone. Whether you&apos;re a marketer, designer, content creator, or business owner, our platform delivers stunning results without any cost or signup requirements.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Makes Our AI Image Generator Special?</h3>
              
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Multiple AI Models:</strong> Access to FLUX Pro, DALL-E 3, and other cutting-edge AI image generation models</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Professional Quality:</strong> Generate 4K and 8K resolution images suitable for print and digital use</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Unlimited Generations:</strong> No limits on the number of images you can create</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Commercial Rights:</strong> Full commercial license for all generated images</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>No Watermarks:</strong> Clean, professional images without any branding</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perfect for Every Use Case</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our <strong>AI image generator</strong> is perfect for creating product photos, marketing materials, social media content, blog illustrations, website graphics, and more. The advanced AI understands context and style, delivering images that match your specific requirements.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Professional Images for Free?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join thousands of creators using our free AI image generator to bring their ideas to life
                </p>
                <Link href="https://app.lymo.me">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-gray-900 font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Sparkles className="w-5 h-5 inline mr-2" />
                    Start Creating Now - It&apos;s Free!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
                The world&apos;s best free AI image generator. Create professional images, product photos, and marketing visuals instantly.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">AI Tools</h4>
              <div className="space-y-3">
                <Link href="/ai-image" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Image Generator</Link>
                <Link href="/ai-video" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Video Generator</Link>
                <Link href="/ugc-ads-creator" className="block text-gray-600 hover:text-yellow-600 transition-colors">UGC Ads Creator</Link>
                <Link href="/ai-studios" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Studios</Link>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Support</h4>
              <div className="space-y-3">
                <Link href="mailto:lymoadsai@gmail.com" className="block text-gray-600 hover:text-yellow-600 transition-colors">Contact</Link>
                <Link href="/privacy-policy" className="block text-gray-600 hover:text-yellow-600 transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="block text-gray-600 hover:text-yellow-600 transition-colors">Terms of Service</Link>
                <Link href="/cookie-policy" className="block text-gray-600 hover:text-yellow-600 transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Lymo AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
