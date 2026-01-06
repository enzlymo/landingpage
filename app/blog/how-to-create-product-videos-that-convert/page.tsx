import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, CheckCircle, TrendingUp, Target, Zap } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "How to Create Product Videos That Actually Convert: Complete E-commerce Guide",
  description: "Learn the proven strategies top e-commerce stores use to create product videos that drive sales. Boost conversions with professional video marketing techniques.",
  keywords: [
    "product videos that convert",
    "e-commerce video marketing",
    "how to create product videos",
    "product video best practices",
    "video marketing for online stores",
    "increase conversions with video",
    "product video strategy",
    "e-commerce video tips",
    "convert visitors with video",
    "product video examples"
  ],
  openGraph: {
    title: "How to Create Product Videos That Actually Convert: Complete E-commerce Guide",
    description: "Learn the proven strategies top e-commerce stores use to create product videos that drive sales and boost conversions.",
    url: "https://lymo.me/blog/how-to-create-product-videos-that-convert",
    type: "article",
    images: [
      {
        url: "/images/lymo-og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Create Product Videos That Convert"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create Product Videos That Actually Convert",
    description: "Learn the proven strategies top e-commerce stores use to create product videos that drive sales.",
    images: ["/images/lymo-twitter-card.png"]
  },
  alternates: {
    canonical: "https://lymo.me/blog/how-to-create-product-videos-that-convert"
  }
}

export default function ProductVideoGuide() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Article Header */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">E-commerce Marketing</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight text-center">
              How to Create Product Videos That Actually Convert
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Discover the proven strategies and techniques that top e-commerce stores use to create product videos that drive sales and boost conversions by up to 80%.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 6, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Lymo AI Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-gray-700 mb-0">
                  <strong>Did you know?</strong> E-commerce stores that use product videos see an average of <strong>80% higher conversion rates</strong> compared to those that don't. Yet, most online store owners still rely solely on static images to showcase their products.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In today's competitive e-commerce landscape, product videos aren't just nice-to-have—they're essential for success. Whether you're selling on Shopify, Amazon, or any other platform, the right product video can be the difference between a browser and a buyer.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In this comprehensive guide, we'll walk you through everything you need to know about creating product videos that actually convert, from planning and production to optimization and distribution.
              </p>

              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Why product videos convert better than images",
                    "The 5 types of high-converting product videos",
                    "Essential elements every product video needs",
                    "How to create videos without expensive equipment",
                    "Platform-specific optimization strategies",
                    "Measuring and improving video performance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Product Videos Convert 80% Better Than Images</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Before diving into the how-to, let's understand why product videos are so effective at driving conversions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Build Trust & Confidence",
                    description: "Videos show products in action, reducing uncertainty and building buyer confidence."
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Showcase Features Better",
                    description: "Demonstrate functionality, size, and quality in ways static images simply can't."
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: "Increase Engagement",
                    description: "Video content keeps visitors on your page longer, signaling quality to search engines."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Section 2 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The 5 Types of High-Converting Product Videos</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not all product videos are created equal. Here are the five types that consistently drive the highest conversion rates:
              </p>

              <div className="space-y-8 mb-12">
                {[
                  {
                    number: "01",
                    title: "Product Demonstration Videos",
                    description: "Show your product in action. Perfect for demonstrating functionality, ease of use, and key features.",
                    example: "A kitchen gadget video showing the product chopping vegetables in real-time.",
                    conversion: "85% higher conversion rate"
                  },
                  {
                    number: "02", 
                    title: "Unboxing & First Impressions",
                    description: "Recreate the excitement of receiving your product. Great for building anticipation and showcasing packaging quality.",
                    example: "An unboxing video of a tech product highlighting premium packaging and included accessories.",
                    conversion: "73% higher conversion rate"
                  },
                  {
                    number: "03",
                    title: "Before & After Transformations",
                    description: "Perfect for beauty, fitness, or home improvement products. Show the dramatic results your product delivers.",
                    example: "A skincare product showing visible improvements over 30 days.",
                    conversion: "92% higher conversion rate"
                  },
                  {
                    number: "04",
                    title: "Size & Scale Comparisons",
                    description: "Help customers understand exactly what they're getting by comparing your product to familiar objects.",
                    example: "A furniture piece shown next to common household items for scale reference.",
                    conversion: "67% higher conversion rate"
                  },
                  {
                    number: "05",
                    title: "User-Generated Content (UGC)",
                    description: "Real customers using your product builds trust and social proof better than any professional video.",
                    example: "Customer testimonials showing genuine reactions and experiences.",
                    conversion: "96% higher conversion rate"
                  }
                ].map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {type.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                        <p className="text-gray-700 mb-4">{type.description}</p>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <p className="text-sm text-gray-600 italic">Example: {type.example}</p>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          <TrendingUp className="w-4 h-4" />
                          {type.conversion}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 3 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Elements Every Converting Product Video Needs</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Regardless of which type of product video you create, these elements are non-negotiable for maximum conversions:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">The Converting Video Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Hook viewers in the first 3 seconds",
                    "Show the product within 5 seconds",
                    "Demonstrate key benefits, not just features",
                    "Include clear, compelling call-to-action",
                    "Optimize for mobile viewing (vertical or square)",
                    "Add captions for silent viewing",
                    "Keep it under 60 seconds for social media",
                    "Use high-quality audio and lighting"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating Professional Videos Without Breaking the Bank</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You don't need a Hollywood budget to create converting product videos. Here's how to get professional results on any budget:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Option: DIY with Smartphone</h3>
                  <p className="text-gray-700 mb-4">Modern smartphones can create surprisingly professional videos with the right setup:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use natural lighting or a simple ring light ($20-50)</li>
                    <li>• Invest in a smartphone tripod ($15-30)</li>
                    <li>• Use free editing apps like CapCut or InShot</li>
                    <li>• Record in 4K if your phone supports it</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mid-Range Option: Semi-Professional Setup</h3>
                  <p className="text-gray-700 mb-4">Step up your game with dedicated equipment:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• DSLR or mirrorless camera ($300-800)</li>
                    <li>• Professional lighting kit ($100-300)</li>
                    <li>• External microphone ($50-150)</li>
                    <li>• Video editing software like DaVinci Resolve (free)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Option: AI-Powered Automation</h3>
                  <p className="text-gray-700 mb-4">Let AI do the heavy lifting:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Transform product URLs into professional videos instantly</li>
                    <li>• No filming, editing, or technical skills required</li>
                    <li>• Professional quality in under 60 seconds</li>
                    <li>• Perfect for scaling across hundreds of products</li>
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Converting Product Videos?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Skip the complexity and create professional product videos from any URL in seconds with Lymo AI.
                </p>
                <Link href="https://app.lymo.me">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                    Try Lymo AI Free
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>

              {/* Conclusion */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Converting More Customers Today</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Product videos are no longer optional in e-commerce—they're essential for staying competitive. Whether you choose to create videos yourself or use AI-powered tools like Lymo AI, the important thing is to start now.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Remember, the best product video is the one that gets made. Start with one product, test the results, and scale from there. Your conversion rates (and your bottom line) will thank you.
              </p>

              {/* Related Articles */}
              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Shopify Video Marketing: Complete Guide",
                      description: "Learn how to use videos to boost your Shopify store's conversions",
                      href: "/blog/shopify-video-marketing-guide",
                      status: "Coming Soon"
                    },
                    {
                      title: "Amazon Product Video Best Practices",
                      description: "Optimize your Amazon listings with professional product videos",
                      href: "/blog/amazon-product-video-best-practices", 
                      status: "Coming Soon"
                    }
                  ].map((article, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h4>
                      <p className="text-gray-600 mb-4">{article.description}</p>
                      <span className="text-blue-500 text-sm font-medium">{article.status}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </article>
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
                Learn how to create professional product videos that convert browsers into buyers with expert tips and strategies.
              </p>
            </div>

            {/* Blog Categories */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Blog Categories</h4>
              <div className="space-y-3">
                <Link href="/blog" className="block text-gray-600 hover:text-yellow-600 transition-colors">All Articles</Link>
                <Link href="/blog/category/ecommerce-marketing" className="block text-gray-600 hover:text-yellow-600 transition-colors">E-commerce Marketing</Link>
                <Link href="/blog/category/video-marketing" className="block text-gray-600 hover:text-yellow-600 transition-colors">Video Marketing</Link>
                <Link href="/blog/category/conversion-optimization" className="block text-gray-600 hover:text-yellow-600 transition-colors">Conversion Tips</Link>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Our Tools</h4>
              <div className="space-y-3">
                <Link href="/url-to-video-generator" className="block text-gray-600 hover:text-yellow-600 transition-colors">URL to Video Generator</Link>
                <Link href="/shopify-video-creator" className="block text-gray-600 hover:text-yellow-600 transition-colors">Shopify Video Creator</Link>
                <Link href="/amazon-product-videos" className="block text-gray-600 hover:text-yellow-600 transition-colors">Amazon Product Videos</Link>
                <Link href="/e-commerce-video-generator" className="block text-gray-600 hover:text-yellow-600 transition-colors">E-commerce Video Generator</Link>
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
