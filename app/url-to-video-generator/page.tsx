'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { AIVideoStudio } from '@/components/demo/AIVideoStudio'
import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, ArrowRight, Link as LinkIcon, ShoppingCart, TrendingUp, CheckCircle, Play, Zap, Target } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "URL to Video Generator | Transform Product Links into Professional Videos",
  description: "Convert any product URL into professional marketing videos instantly. Perfect for e-commerce stores, Amazon sellers, and online marketers. Transform product links into engaging video content in seconds.",
  keywords: [
    "URL to video generator",
    "product URL to video",
    "link to video converter",
    "product link video creator",
    "e-commerce video generator",
    "Amazon product video maker",
    "Shopify video creator",
    "product URL converter",
    "online store video maker",
    "marketplace video generator"
  ],
  openGraph: {
    title: "URL to Video Generator | Transform Product Links into Professional Videos",
    description: "Convert any product URL into professional marketing videos instantly. Perfect for e-commerce stores and online marketers.",
    url: "https://lymo.me/url-to-video-generator",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "URL to Video Generator - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "URL to Video Generator | Transform Product Links into Professional Videos",
    description: "Convert any product URL into professional marketing videos instantly. Perfect for e-commerce stores.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/url-to-video-generator"
  }
}

export default function URLToVideoGeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-800 font-semibold text-sm">WORLD&apos;S FIRST URL TO VIDEO GENERATOR</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              URL to Video Generator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform any <strong>product URL</strong> into professional marketing videos instantly. 
              Perfect for e-commerce stores, Amazon sellers, and online marketers.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Any Product URL</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Professional Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">60 Second Creation</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">E-commerce Ready</span>
              </div>
            </div>

            <Link href="https://app.lymo.me">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <LinkIcon className="w-6 h-6 inline mr-3" />
                Transform Your First URL Now
                <ArrowRight className="w-6 h-6 inline ml-3" />
              </button>
            </Link>
          </div>
        </section>

        {/* How It Works - URL Specific */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                How Our <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">URL to Video Generator</span> Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The world&apos;s first and only platform that transforms product URLs into professional videos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Paste Your Product URL",
                  description: "Simply paste any product URL from Amazon, Shopify, WooCommerce, or any e-commerce store. Our AI instantly analyzes the product details.",
                  gradient: "from-blue-400 to-purple-400",
                  icon: <LinkIcon className="w-8 h-8" />
                },
                {
                  step: "02", 
                  title: "AI Extracts Product Data",
                  description: "Our advanced AI extracts product images, descriptions, features, and pricing to create compelling video content automatically.",
                  gradient: "from-purple-400 to-pink-400",
                  icon: <Zap className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Professional Video Generated",
                  description: "Get a professional marketing video with product showcases, features, and call-to-actions ready for your campaigns.",
                  gradient: "from-pink-400 to-red-400",
                  icon: <Play className="w-8 h-8" />
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-full text-white text-sm font-bold mb-4`}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Works with <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">Any E-commerce Platform</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our URL to video generator supports all major e-commerce platforms and marketplaces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Amazon",
                  description: "Transform Amazon product listings into compelling video ads",
                  color: "from-orange-400 to-yellow-400",
                  icon: "🛒"
                },
                {
                  name: "Shopify",
                  description: "Convert Shopify product pages into professional marketing videos",
                  color: "from-green-400 to-blue-400",
                  icon: "🏪"
                },
                {
                  name: "WooCommerce",
                  description: "Turn WooCommerce products into engaging video content",
                  color: "from-purple-400 to-pink-400",
                  icon: "🛍️"
                },
                {
                  name: "Any Store",
                  description: "Works with any e-commerce website or product URL",
                  color: "from-blue-400 to-purple-400",
                  icon: "🌐"
                }
              ].map((platform, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 text-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Video Studio Demo */}
        <AIVideoStudio />

        {/* Benefits for E-commerce */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Perfect for <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">E-commerce Success</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why thousands of online stores use our URL to video generator
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShoppingCart className="w-8 h-8" />,
                  title: "Boost Sales Conversions",
                  description: "Video content increases conversion rates by up to 80%. Transform your product URLs into sales-driving videos that showcase features and benefits effectively.",
                  stat: "80% higher conversion rates with video",
                  gradient: "from-blue-400 to-purple-400"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Increase Engagement",
                  description: "Video content gets 1200% more shares than text and images combined. Create engaging product videos from URLs that capture attention and drive traffic.",
                  stat: "1200% more social shares",
                  gradient: "from-purple-400 to-pink-400"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Reduce Ad Costs",
                  description: "Video ads have 27% lower cost-per-click and higher quality scores. Generate professional video ads from product URLs to optimize your advertising spend.",
                  stat: "27% lower advertising costs",
                  gradient: "from-pink-400 to-red-400"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl text-white mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">{benefit.stat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Ultimate URL to Video Generator for E-commerce</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our <strong>URL to video generator</strong> is the world&apos;s first platform specifically designed to transform product URLs into professional marketing videos. Whether you&apos;re selling on Amazon, running a Shopify store, or managing any e-commerce website, our AI-powered tool extracts product information directly from URLs and creates compelling video content in seconds.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our URL to Video Generator?</h3>
              
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Universal Compatibility:</strong> Works with any product URL from Amazon, Shopify, WooCommerce, and thousands of other platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Automatic Data Extraction:</strong> AI automatically pulls product images, descriptions, prices, and features from URLs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Professional Quality:</strong> Generate broadcast-quality videos suitable for ads, social media, and websites</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Lightning Fast:</strong> Transform any product URL into a professional video in under 60 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>E-commerce Optimized:</strong> Videos designed specifically for online stores and product marketing</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perfect for Every E-commerce Business</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether yo&apos;re an Amazon seller looking to create product videos, a Shopify store owner wanting to boost conversions, or a digital marketer managing multiple e-commerce accounts, our <strong>URL to video generator</strong> streamlines your content creation process. Simply paste any product URL, and watch as our AI creates professional marketing videos that drive sales and engagement.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Product URLs?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join thousands of e-commerce businesses using our URL to video generator to boost sales and engagement
                </p>
                <Link href="https://app.lymo.me">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105">
                    <LinkIcon className="w-5 h-5 inline mr-2" />
                    Start Converting URLs Now
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
                The world&apos;s first URL to video generator. Transform any product URL into professional marketing videos instantly.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">E-commerce Tools</h4>
              <div className="space-y-3">
                <Link href="/url-to-video-generator" className="block text-gray-600 hover:text-yellow-600 transition-colors">URL to Video Generator</Link>
                <Link href="/shopify-video-creator" className="block text-gray-600 hover:text-yellow-600 transition-colors">Shopify Video Creator</Link>
                <Link href="/amazon-product-videos" className="block text-gray-600 hover:text-yellow-600 transition-colors">Amazon Product Videos</Link>
                <Link href="/e-commerce-video-generator" className="block text-gray-600 hover:text-yellow-600 transition-colors">E-commerce Video Generator</Link>
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
