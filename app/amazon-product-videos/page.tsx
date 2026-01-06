'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { AIVideoStudio } from '@/components/demo/AIVideoStudio'
import Link from 'next/link'
import { Sparkles, ArrowRight, Package, TrendingUp, CheckCircle, Play, Zap, Target, Star, Award } from 'lucide-react'
import Image from 'next/image'

export default function AmazonProductVideosPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-800 font-semibold text-sm">AMAZON SELLER&apos;S SECRET WEAPON</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Amazon Product Video Maker
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create professional <strong>Amazon product videos</strong> that boost sales and improve rankings. 
              Transform your Amazon listings into compelling video content that converts browsers into buyers.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Boost Amazon Rankings</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Increase Conversion Rates</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Professional Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">FBA Optimized</span>
              </div>
            </div>

            <Link href="https://app.lymo.me">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Package className="w-6 h-6 inline mr-3" />
                Create Amazon Videos Now
                <ArrowRight className="w-6 h-6 inline ml-3" />
              </button>
            </Link>
          </div>
        </section>

        {/* Amazon Success Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Proven Results for <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-medium">Amazon Sellers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why successful Amazon sellers use our video maker to dominate their categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  stat: "73%",
                  label: "Higher Click-Through Rate",
                  description: "Amazon listings with videos get 73% higher CTR in search results",
                  color: "from-orange-400 to-red-400"
                },
                {
                  stat: "96%",
                  label: "More Likely to Purchase",
                  description: "Customers are 96% more likely to buy products with video content",
                  color: "from-red-400 to-pink-400"
                },
                {
                  stat: "41%",
                  label: "Increase in Sales",
                  description: "Amazon sellers see average 41% sales increase with product videos",
                  color: "from-pink-400 to-purple-400"
                },
                {
                  stat: "67%",
                  label: "Better Search Rankings",
                  description: "Products with videos rank 67% higher in Amazon search results",
                  color: "from-purple-400 to-blue-400"
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

        {/* How It Works for Amazon */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Dominate Amazon with <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-medium">Professional Videos</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your Amazon listings into sales-driving video content in 3 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Paste Amazon Product URL",
                  description: "Copy your Amazon product URL (ASIN) and paste it into our platform. Our AI instantly extracts all product details, images, and specifications.",
                  gradient: "from-orange-400 to-red-400",
                  icon: <Package className="w-8 h-8" />
                },
                {
                  step: "02", 
                  title: "Choose Amazon-Optimized Style",
                  description: "Select from video templates specifically designed for Amazon success. Our styles are proven to increase conversions and improve rankings.",
                  gradient: "from-red-400 to-pink-400",
                  icon: <Star className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Upload to Amazon & Watch Sales Grow",
                  description: "Download your professional Amazon product video and upload it to your listing. Watch your conversion rates and rankings improve immediately.",
                  gradient: "from-pink-400 to-purple-400",
                  icon: <TrendingUp className="w-8 h-8" />
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

        {/* AI Video Studio Demo */}
        <AIVideoStudio />

        {/* Amazon-Specific Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Built for <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-medium">Amazon Success</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Features specifically designed to help Amazon sellers win
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Improve Amazon SEO Rankings",
                  description: "Amazon&apos;s algorithm favors listings with video content. Our videos are optimized to boost your product&apos;s visibility in search results and increase organic traffic.",
                  stat: "67% better search rankings",
                  gradient: "from-orange-400 to-red-400"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Increase Conversion Rates",
                  description: "Professional product videos build trust and showcase features effectively, leading to higher conversion rates and more sales per visitor.",
                  stat: "96% more likely to purchase",
                  gradient: "from-red-400 to-pink-400"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Reduce Return Rates",
                  description: "Clear video demonstrations help customers understand exactly what they&apos;re buying, leading to fewer returns and higher customer satisfaction.",
                  stat: "45% reduction in returns",
                  gradient: "from-pink-400 to-purple-400"
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

        {/* Amazon Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Perfect for Every <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-medium">Amazon Category</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our video maker works for all types of Amazon products
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Electronics", icon: "📱", description: "Showcase features and functionality" },
                { name: "Home & Kitchen", icon: "🏠", description: "Demonstrate usage and benefits" },
                { name: "Fashion", icon: "👕", description: "Show fit, style, and quality" },
                { name: "Beauty", icon: "💄", description: "Before/after transformations" },
                { name: "Sports", icon: "⚽", description: "Action shots and performance" },
                { name: "Toys", icon: "🧸", description: "Fun and engaging demonstrations" },
                { name: "Books", icon: "📚", description: "Content previews and reviews" },
                { name: "Automotive", icon: "🚗", description: "Installation and compatibility" }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Ultimate Amazon Product Video Maker for Sellers</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our <strong>Amazon product video maker</strong> is specifically designed for Amazon sellers who want to dominate their categories and increase sales. Unlike generic video tools, our platform understands Amazon&apos;s unique requirements and creates videos that not only look professional but also improve your search rankings and conversion rates.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Amazon Sellers Choose Our Video Maker</h3>
              
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Amazon Algorithm Optimization:</strong> Videos designed to boost your rankings in Amazon search results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>ASIN Integration:</strong> Simply paste your Amazon product URL and our AI extracts all necessary information</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Conversion Focused:</strong> Every video element is designed to turn browsers into buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Category Specific:</strong> Templates optimized for different Amazon product categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Compliance Ready:</strong> All videos meet Amazon&apos;s content guidelines and requirements</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dominate Your Amazon Category</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today&apos;s competitive Amazon marketplace, product videos are essential for success. Our <strong>Amazon product video maker</strong> gives you the edge you need to outperform competitors and increase your market share. From electronics to fashion, home goods to beauty products, our AI creates compelling videos that showcase your products unique value propositions and drive sales.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Dominate Amazon?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join thousands of successful Amazon sellers using our video maker to increase sales and rankings
                </p>
                <Link href="https://app.lymo.me">
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Package className="w-5 h-5 inline mr-2" />
                    Create Your First Amazon Video
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
                The leading Amazon product video maker. Create professional Amazon listing videos that boost sales and rankings.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">E-commerce Tools</h4>
              <div className="space-y-3">
                <Link href="/amazon-product-videos" className="block text-gray-600 hover:text-yellow-600 transition-colors">Amazon Product Videos</Link>
                <Link href="/shopify-video-creator" className="block text-gray-600 hover:text-yellow-600 transition-colors">Shopify Video Creator</Link>
                <Link href="/url-to-video-generator" className="block text-gray-600 hover:text-yellow-600 transition-colors">URL to Video Generator</Link>
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
