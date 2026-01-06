import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { AIVideoStudio } from '@/components/demo/AIVideoStudio'
import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, ArrowRight, Users, TrendingUp, Target, CheckCircle, Play } from 'lucide-react'
import Image from 'next/image'

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

export default function UGCAdsCreatorPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-purple-800 font-semibold text-sm">VIRAL UGC CONTENT CREATOR</span>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              UGC Ads Creator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create authentic <strong>UGC ads</strong> that convert with AI. 
              Generate user-generated content with realistic avatars and viral templates that drive results.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Authentic UGC Style</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Realistic AI Avatars</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Viral Templates</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">High Converting</span>
              </div>
            </div>

            <Link href="https://app.lymo.me">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Sparkles className="w-6 h-6 inline mr-3" />
                Create UGC Ads Now
                <ArrowRight className="w-6 h-6 inline ml-3" />
              </button>
            </Link>
          </div>
        </section>

        {/* UGC Examples Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Real UGC Ads Created with AI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI creates authentic user-generated content that drives conversions
              </p>
            </div>

            {/* Video Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              
              {/* UGC Avatar Ad */}
              <div className="group relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div 
                    className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 mb-4 group cursor-pointer"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector('video');
                      if (video && window.innerWidth >= 768) {
                        video.volume = 0.63;
                        video.muted = false;
                        video.play().catch(() => {});
                      }
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector('video');
                      if (video && window.innerWidth >= 768) {
                        video.pause();
                        video.currentTime = 0;
                        video.muted = true;
                      }
                    }}
                  >
                    {/* Video Element */}
                    <video 
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      muted
                      loop
                      playsInline
                      poster="/images/Skärmbild 2025-10-27 224821.png"
                      preload="metadata"
                      controls={false}
                    >
                      <source src="/images/bb97578d-a267-45ea-bd5b-1c0be429465b.mp4" type="video/mp4" />
                    </video>
                    
                    {/* UGC Style Elements */}
                    <div className="absolute top-2 left-2 bg-purple-500 rounded-full px-3 py-1">
                      <span className="text-xs font-bold text-white">UGC Style</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                      <span className="text-xs text-white">00:45</span>
                    </div>
                    
                    {/* Play Indicator */}
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-white font-medium flex items-center gap-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                        Playing
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Authentic UGC Review</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      AI-generated user testimonial that feels completely natural and authentic
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span>🎯 High Converting</span>
                      <span>👥 Authentic Feel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product UGC Demo */}
              <div className="group relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div 
                    className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-red-100 mb-4 group cursor-pointer"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector('video');
                      if (video && window.innerWidth >= 768) {
                        video.volume = 0.63;
                        video.muted = false;
                        video.play().catch(() => {});
                      }
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector('video');
                      if (video && window.innerWidth >= 768) {
                        video.pause();
                        video.currentTime = 0;
                        video.muted = true;
                      }
                    }}
                  >
                    {/* Video Element */}
                    <video 
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      muted
                      loop
                      playsInline
                      poster="/images/Skärmbild 2025-10-27 224722.png"
                      preload="metadata"
                      controls={false}
                    >
                      <source src="/images/3bff4339-9711-438d-9995-952e23d2b626.mp4" type="video/mp4" />
                    </video>
                    
                    {/* UGC Elements */}
                    <div className="absolute top-2 left-2 bg-orange-500 rounded-full px-3 py-1">
                      <span className="text-xs font-bold text-white">Product UGC</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                      <span className="text-xs text-white">00:22</span>
                    </div>
                    
                    {/* Play Indicator */}
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-white font-medium flex items-center gap-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                        Playing
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Product Unboxing UGC</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Realistic product demonstration that builds trust and drives sales
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span>🚀 Viral Potential</span>
                      <span>💰 Sales Focused</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Video Studio Demo */}
        <AIVideoStudio />

        {/* Why UGC Ads Work */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Why <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent font-medium">UGC Ads</span> Outperform Traditional Ads
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                User-generated content drives 4x higher engagement and 6.9x higher conversion rates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Authentic & Trustworthy",
                  description: "UGC ads feel genuine and relatable, building instant trust with your audience. People trust recommendations from real users over branded content.",
                  stat: "92% of consumers trust UGC more than traditional advertising",
                  gradient: "from-purple-400 to-pink-400"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Higher Engagement Rates",
                  description: "UGC content generates 6.9x higher engagement than brand-generated content. Our AI creates UGC that captures attention and drives interaction.",
                  stat: "6.9x higher engagement than brand content",
                  gradient: "from-pink-400 to-orange-400"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Better Conversion Rates",
                  description: "UGC ads convert 4x better than traditional ads because they feel authentic and reduce purchase hesitation through social proof.",
                  stat: "4x higher conversion rates",
                  gradient: "from-orange-400 to-red-400"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">{feature.stat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Create High-Converting UGC Ads with AI</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our <strong>UGC ads creator</strong> uses advanced AI to generate authentic user-generated content that drives real results. With realistic avatars, natural speech patterns, and proven UGC templates, you can create compelling ads that feel genuine and trustworthy.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Makes Our UGC Creator Special?</h3>
              
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Realistic AI Avatars:</strong> Choose from diverse, authentic-looking creators that match your target audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Viral UGC Templates:</strong> Proven formats that drive engagement and conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Natural Speech Patterns:</strong> AI-generated dialogue that sounds authentic and conversational</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Brand Integration:</strong> Seamlessly incorporate your products into authentic UGC scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Multiple Formats:</strong> Create UGC for TikTok, Instagram, Facebook, and other platforms</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perfect for Every Industry</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you&apos;re in e-commerce, SaaS, beauty, fitness, or any other industry, our <strong>UGC ads creator</strong> can generate authentic content that resonates with your audience. From product reviews to unboxing videos, testimonials to tutorials, we cover all the high-converting UGC formats.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create UGC Ads That Convert?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join thousands of marketers using AI to create authentic UGC content that drives real results
                </p>
                <Link href="https://app.lymo.me">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Play className="w-5 h-5 inline mr-2" />
                    Start Creating UGC Ads Now
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
                <Image 
                  src="/Framedark.svg" 
                  alt="Lymo Logo" 
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-600 max-w-md">
                Create authentic UGC ads that convert with AI. The leading platform for user-generated content creation.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">AI Tools</h4>
              <div className="space-y-3">
                <Link href="/ugc-ads-creator" className="block text-gray-600 hover:text-yellow-600 transition-colors">UGC Ads Creator</Link>
                <Link href="/ai-video" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Video Generator</Link>
                <Link href="/ai-image" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Image Generator</Link>
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
