import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { AIVideoStudio } from '@/components/demo/AIVideoStudio'
import { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, ArrowRight, ShoppingBag, TrendingUp, CheckCircle, Play, Zap, Target, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: "Shopify Video Creator | Transform Shopify Products into Professional Videos",
  description: "Create professional marketing videos from your Shopify products instantly. Boost conversions with AI-generated product videos. Perfect for Shopify store owners and e-commerce marketers.",
  keywords: [
    "Shopify video creator",
    "Shopify product videos",
    "Shopify marketing videos",
    "e-commerce video maker",
    "Shopify store videos",
    "product video generator Shopify",
    "Shopify video ads",
    "online store video creator",
    "Shopify content creator",
    "e-commerce video marketing"
  ],
  openGraph: {
    title: "Shopify Video Creator | Transform Shopify Products into Professional Videos",
    description: "Create professional marketing videos from your Shopify products instantly. Boost conversions with AI-generated product videos.",
    url: "https://lymo.me/shopify-video-creator",
    type: "website",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Video Creator - Lymo AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Video Creator | Transform Shopify Products into Professional Videos",
    description: "Create professional marketing videos from your Shopify products instantly. Boost conversions with AI-generated product videos.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/shopify-video-creator"
  }
}

export default function ShopifyVideoCreatorPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 font-semibold text-sm">BUILT FOR SHOPIFY SUCCESS</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Shopify Video Creator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your <strong>Shopify products</strong> into professional marketing videos instantly. 
              Boost conversions and sales with AI-generated product videos that convert.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Direct Shopify Integration</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">80% Higher Conversions</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">60 Second Creation</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Ready for Ads</span>
              </div>
            </div>

            <Link href="https://app.lymo.me">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <ShoppingBag className="w-6 h-6 inline mr-3" />
                Create Shopify Videos Now
                <ArrowRight className="w-6 h-6 inline ml-3" />
              </button>
            </Link>
          </div>
        </section>

        {/* Shopify Success Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Proven Results for <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">Shopify Stores</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why thousands of Shopify store owners trust our video creator
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  stat: "80%",
                  label: "Higher Conversion Rates",
                  description: "Shopify stores with product videos see 80% higher conversion rates",
                  color: "from-green-400 to-blue-400"
                },
                {
                  stat: "64%",
                  label: "More Likely to Purchase",
                  description: "Customers are 64% more likely to buy after watching a product video",
                  color: "from-blue-400 to-purple-400"
                },
                {
                  stat: "300%",
                  label: "Increase in Engagement",
                  description: "Product videos generate 300% more engagement than images alone",
                  color: "from-purple-400 to-pink-400"
                },
                {
                  stat: "85%",
                  label: "Reduction in Returns",
                  description: "Video content reduces product returns by showing accurate details",
                  color: "from-pink-400 to-red-400"
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

        {/* How It Works for Shopify */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Simple Process for <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">Shopify Success</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your Shopify products into professional videos in 3 easy steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Paste Shopify Product URL",
                  description: "Copy any product URL from your Shopify store and paste it into our platform. Our AI instantly accesses your product details, images, and descriptions.",
                  gradient: "from-green-400 to-blue-400",
                  icon: <ShoppingBag className="w-8 h-8" />
                },
                {
                  step: "02", 
                  title: "Customize Video Style",
                  description: "Choose from Shopify-optimized video templates. Select your preferred style, voice, and branding to match your store's aesthetic.",
                  gradient: "from-blue-400 to-purple-400",
                  icon: <Zap className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Download & Use Everywhere",
                  description: "Get your professional Shopify product video ready for your store, social media ads, email campaigns, and marketing materials.",
                  gradient: "from-purple-400 to-pink-400",
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

        {/* AI Video Studio Demo */}
        <AIVideoStudio />

        {/* Shopify-Specific Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Built Specifically for <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">Shopify Stores</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Features designed to maximize your Shopify store's success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Increase Average Order Value",
                  description: "Product videos showcase features and benefits more effectively, leading to higher-value purchases. Shopify stores with videos see 25% higher AOV on average.",
                  stat: "25% higher average order value",
                  gradient: "from-green-400 to-blue-400"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Reduce Cart Abandonment",
                  description: "Videos build confidence and trust, reducing cart abandonment rates. Clear product demonstrations help customers make informed purchase decisions.",
                  stat: "35% reduction in cart abandonment",
                  gradient: "from-blue-400 to-purple-400"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Improve SEO Rankings",
                  description: "Video content improves your Shopify store's SEO performance. Google favors pages with video content, leading to better organic visibility.",
                  stat: "53x more likely to rank on page 1",
                  gradient: "from-purple-400 to-pink-400"
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

        {/* Use Cases for Shopify */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Perfect for Every <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">Shopify Use Case</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From product pages to social media ads, our videos work everywhere
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Product Page Videos",
                  description: "Embed professional product videos directly on your Shopify product pages to increase conversions and reduce bounce rates.",
                  features: ["Higher conversion rates", "Reduced returns", "Better customer understanding"]
                },
                {
                  title: "Social Media Advertising",
                  description: "Use your Shopify product videos for Facebook, Instagram, and TikTok ads to drive traffic and sales to your store.",
                  features: ["Lower ad costs", "Higher engagement", "Better ROAS"]
                },
                {
                  title: "Email Marketing",
                  description: "Include product videos in your email campaigns to showcase new arrivals, sales, and featured products.",
                  features: ["Higher click rates", "Increased sales", "Better engagement"]
                },
                {
                  title: "Influencer Collaborations",
                  description: "Provide influencers with professional product videos to maintain brand consistency across all partnerships.",
                  features: ["Brand consistency", "Professional quality", "Easy sharing"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Ultimate Shopify Video Creator for E-commerce Success</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our <strong>Shopify video creator</strong> is specifically designed for Shopify store owners who want to boost conversions and sales through professional product videos. Unlike generic video tools, our platform understands the unique needs of Shopify merchants and creates videos optimized for e-commerce success.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Shopify Store Owners Choose Our Video Creator</h3>
              
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Direct Shopify Integration:</strong> Simply paste your Shopify product URLs and our AI does the rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>E-commerce Optimized:</strong> Videos designed specifically to drive sales and conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Multiple Formats:</strong> Create videos for product pages, ads, social media, and email campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Brand Consistency:</strong> Maintain your store's branding across all video content</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Proven Results:</strong> Shopify stores using our videos see 80% higher conversion rates</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transform Your Shopify Store's Performance</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Video content is no longer optional for successful Shopify stores. Our <strong>Shopify video creator</strong> makes it easy to add professional product videos to every product in your store, helping you compete with larger retailers and increase your sales. From fashion to electronics, home goods to beauty products, our AI creates compelling videos that showcase your products in the best light.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Boost Your Shopify Sales?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join thousands of successful Shopify store owners using our video creator to increase conversions and sales
                </p>
                <Link href="https://app.lymo.me">
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105">
                    <ShoppingBag className="w-5 h-5 inline mr-2" />
                    Create Your First Shopify Video
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
                The leading Shopify video creator. Transform your Shopify products into professional marketing videos that drive sales.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">E-commerce Tools</h4>
              <div className="space-y-3">
                <Link href="/shopify-video-creator" className="block text-gray-600 hover:text-yellow-600 transition-colors">Shopify Video Creator</Link>
                <Link href="/url-to-video-generator" className="block text-gray-600 hover:text-yellow-600 transition-colors">URL to Video Generator</Link>
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
