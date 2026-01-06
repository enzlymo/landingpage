'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { AIVideoStudio } from '@/components/demo/AIVideoStudio'
import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, ArrowRight, ShoppingCart, TrendingUp, CheckCircle, Play, Zap, Target, DollarSign, Users } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "E-commerce Video Generator | Create Professional Product Videos for Online Stores",
  description: "The ultimate e-commerce video generator for online stores. Create professional product videos from URLs. Perfect for Shopify, Amazon, WooCommerce, and all e-commerce platforms.",
  keywords: [
    "e-commerce video generator",
    "online store video creator",
    "product video generator",
    "e-commerce marketing videos",
    "retail video maker",
    "online store content creator",
    "e-commerce video marketing",
    "product showcase videos",
    "online retail videos",
    "e-commerce video ads"
  ],
  openGraph: {
    title: "E-commerce Video Generator | Create Professional Product Videos for Online Stores",
    description: "The ultimate e-commerce video generator for online stores. Create professional product videos from URLs instantly.",
    url: "https://lymo.me/e-commerce-video-generator",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "E-commerce Video Generator - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Video Generator | Create Professional Product Videos for Online Stores",
    description: "The ultimate e-commerce video generator for online stores. Create professional product videos from URLs instantly.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/e-commerce-video-generator"
  }
}

export default function EcommerceVideoGeneratorPage() {
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
              <span className="text-blue-800 font-semibold text-sm">THE COMPLETE E-COMMERCE SOLUTION</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              E-commerce Video Generator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              The ultimate <strong>e-commerce video generator</strong> for online stores. 
              Create professional product videos from any URL - perfect for all e-commerce platforms.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">All Platforms Supported</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Boost Sales by 80%</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Professional Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">60 Second Creation</span>
              </div>
            </div>

            <Link href="https://app.lymo.me">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <ShoppingCart className="w-6 h-6 inline mr-3" />
                Start Creating E-commerce Videos
                <ArrowRight className="w-6 h-6 inline ml-3" />
              </button>
            </Link>
          </div>
        </section>

        {/* Platform Support */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Works with <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">Every E-commerce Platform</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our e-commerce video generator supports all major platforms and marketplaces
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Shopify", icon: "🛍️", users: "2M+ stores", color: "from-green-400 to-blue-400" },
                { name: "Amazon", icon: "📦", users: "9M+ sellers", color: "from-orange-400 to-yellow-400" },
                { name: "WooCommerce", icon: "🛒", users: "5M+ stores", color: "from-purple-400 to-pink-400" },
                { name: "Etsy", icon: "🎨", users: "5M+ sellers", color: "from-pink-400 to-red-400" },
                { name: "eBay", icon: "🏪", users: "25M+ sellers", color: "from-blue-400 to-purple-400" },
                { name: "BigCommerce", icon: "🏬", users: "60K+ stores", color: "from-indigo-400 to-blue-400" },
                { name: "Magento", icon: "🛍️", users: "250K+ stores", color: "from-red-400 to-pink-400" },
                { name: "Any Store", icon: "🌐", users: "Unlimited", color: "from-gray-400 to-gray-600" }
              ].map((platform, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-3xl flex items-center justify-center mx-auto mb-4 text-3xl`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{platform.name}</h3>
                  <p className="text-gray-600 text-sm">{platform.users}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-commerce Success Stats */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Proven Results for <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">E-commerce Success</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why thousands of online stores trust our e-commerce video generator
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  stat: "80%",
                  label: "Higher Conversion Rates",
                  description: "E-commerce stores with product videos see 80% higher conversion rates",
                  color: "from-blue-400 to-purple-400"
                },
                {
                  stat: "300%",
                  label: "More Engagement",
                  description: "Product videos generate 300% more engagement than images alone",
                  color: "from-purple-400 to-pink-400"
                },
                {
                  stat: "64%",
                  label: "More Likely to Buy",
                  description: "Customers are 64% more likely to purchase after watching product videos",
                  color: "from-pink-400 to-red-400"
                },
                {
                  stat: "85%",
                  label: "Fewer Returns",
                  description: "Video content reduces product returns by showing accurate details",
                  color: "from-red-400 to-orange-400"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-2xl">{item.stat}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Video Studio Demo */}
        <AIVideoStudio />

        {/* Comparison with Competitors */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">Lymo AI</span> Over Others?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The only platform that transforms product URLs into professional videos
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Lymo AI</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Generic AI Tools</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Video Editors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "URL to Video Generation", lymo: "✅", generic: "❌", editors: "❌" },
                    { feature: "E-commerce Optimization", lymo: "✅", generic: "❌", editors: "❌" },
                    { feature: "Automatic Product Data Extraction", lymo: "✅", generic: "❌", editors: "❌" },
                    { feature: "Platform-Specific Templates", lymo: "✅", generic: "❌", editors: "❌" },
                    { feature: "60-Second Creation", lymo: "✅", generic: "⚠️", editors: "❌" },
                    { feature: "No Design Skills Required", lymo: "✅", generic: "⚠️", editors: "❌" },
                    { feature: "Commercial License", lymo: "✅", generic: "⚠️", editors: "✅" },
                    { feature: "Professional Quality", lymo: "✅", generic: "⚠️", editors: "✅" }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-lg">{row.lymo}</td>
                      <td className="px-6 py-4 text-center text-lg">{row.generic}</td>
                      <td className="px-6 py-4 text-center text-lg">{row.editors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* E-commerce Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Built for <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">E-commerce Success</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every feature designed to boost your online store&apos;s performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Increase Revenue",
                  description: "Product videos drive higher conversion rates and average order values. E-commerce stores with videos see 80% higher sales on average.",
                  benefits: ["Higher conversion rates", "Increased AOV", "More repeat customers"]
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Build Customer Trust",
                  description: "Video content builds confidence and reduces purchase hesitation. Customers trust products they can see in action.",
                  benefits: ["Reduced cart abandonment", "Fewer returns", "Higher customer satisfaction"]
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Improve SEO Rankings",
                  description: "Search engines favor pages with video content. Boost your organic visibility and drive more traffic to your store.",
                  benefits: ["Better search rankings", "Increased organic traffic", "Higher click-through rates"]
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center text-white mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Ultimate E-commerce Video Generator for Online Stores</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our <strong>e-commerce video generator</strong> is the world&apos;s first platform specifically designed for online stores and e-commerce businesses. Unlike generic video tools, our AI understands the unique needs of e-commerce and creates videos that drive sales, improve conversions, and boost search rankings.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why E-commerce Businesses Choose Our Video Generator</h3>
              
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Universal Platform Support:</strong> Works with Shopify, Amazon, WooCommerce, and all major e-commerce platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>URL-Based Generation:</strong> Simply paste any product URL and our AI creates professional videos automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Sales-Focused Design:</strong> Every video element is optimized to drive conversions and increase revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Professional Quality:</strong> Broadcast-quality videos suitable for product pages, ads, and marketing campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Instant Results:</strong> Transform any product into a professional video in under 60 seconds</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transform Your E-commerce Business</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today&apos;s competitive e-commerce landscape, video content is essential for success. Our <strong>e-commerce video generator</strong> gives you the competitive edge you need to outperform competitors and maximize your online store&apos;s potential. From fashion to electronics, home goods to beauty products, our AI creates compelling videos that showcase your products and drive sales.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your E-commerce Store?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join thousands of successful online stores using our e-commerce video generator to boost sales and conversions
                </p>
                <Link href="https://app.lymo.me">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105">
                    <ShoppingCart className="w-5 h-5 inline mr-2" />
                    Start Creating E-commerce Videos
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
                The ultimate e-commerce video generator. Transform any product URL into professional marketing videos for your online store.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">E-commerce Tools</h4>
              <div className="space-y-3">
                <Link href="/e-commerce-video-generator" className="block text-gray-600 hover:text-yellow-600 transition-colors">E-commerce Video Generator</Link>
                <Link href="/url-to-video-generator" className="block text-gray-600 hover:text-yellow-600 transition-colors">URL to Video Generator</Link>
                <Link href="/shopify-video-creator" className="block text-gray-600 hover:text-yellow-600 transition-colors">Shopify Video Creator</Link>
                <Link href="/amazon-product-videos" className="block text-gray-600 hover:text-yellow-600 transition-colors">Amazon Product Videos</Link>
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
