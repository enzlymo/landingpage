'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, CheckCircle, TrendingUp, Target, Zap, Play, ShoppingCart, BarChart3, Users, Star, Download } from 'lucide-react'
import Image from 'next/image'

export default function ShopifyVideoMarketingGuide() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Article Header */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Shopify Marketing</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight text-center">
              Shopify Video Marketing: Complete Guide to Boost Sales in 2026
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Master the art of Shopify video marketing with proven strategies that increase conversions by 85%. Learn how to add videos, optimize for mobile, and transform your store into a sales machine.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 14, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
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
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-gray-700 mb-0">
                  <strong>Shopify stores with product videos see 85% higher conversion rates</strong> and 64% more sales compared to stores using only images. Yet, 73% of Shopify store owners still haven&apos;t implemented video marketing strategies.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                If you&apos;re running a Shopify store in 2026, video marketing isn&apos;t just an advantage—it&apos;s essential for survival. With over 4.6 million Shopify stores competing for attention, those who master video marketing will dominate their markets.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This comprehensive guide will show you exactly how to implement video marketing on your Shopify store, from basic setup to advanced optimization strategies that drive real results.
              </p>

              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Master in This Guide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Why Shopify video marketing works so well",
                    "5 types of videos that boost Shopify sales",
                    "How to add videos to your Shopify store",
                    "Best Shopify video apps and tools",
                    "Mobile optimization for Shopify videos",
                    "Advanced video SEO for Shopify",
                    "Measuring video performance and ROI",
                    "Scaling video content across products"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Shopify Video Marketing Dominates in 2026</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Shopify&apos;s platform is uniquely positioned for video marketing success. Here&apos;s why video marketing works exceptionally well on Shopify stores:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  {
                    icon: <ShoppingCart className="w-8 h-8" />,
                    title: "Built-in E-commerce Focus",
                    description: "Shopify's product-centric design makes videos feel natural and integrated, not intrusive.",
                    stat: "85% higher conversion rates"
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8" />,
                    title: "Mobile-First Platform",
                    description: "With 79% of Shopify traffic on mobile, videos are perfectly optimized for mobile shopping behavior.",
                    stat: "79% mobile traffic"
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Social Commerce Integration",
                    description: "Seamless integration with social platforms where video content performs best.",
                    stat: "3x more engagement"
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Advanced Analytics",
                    description: "Track video performance directly tied to sales data and customer behavior.",
                    stat: "Real-time insights"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      {benefit.stat}
                    </div>
                  </div>
                ))}
              </div>

              {/* Success Story */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Story: Fashion Boutique Increases Sales by 127%</h3>
                    <p className="text-gray-700 mb-4">
                      &quot;After implementing product videos on our Shopify store using the strategies in this guide, we saw a 127% increase in sales within 60 days. Our return rate dropped by 43% because customers knew exactly what they were buying.&quot;
                    </p>
                    <p className="text-sm text-gray-600 font-medium">— Sarah Chen, Founder of ModernStyle Boutique</p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5 Types of Videos That Boost Shopify Sales</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not all videos are created equal. These five types consistently drive the highest conversion rates on Shopify stores:
              </p>

              <div className="space-y-8 mb-12">
                {[
                  {
                    number: "01",
                    title: "Product Demo Videos",
                    description: "Show your products in action on your Shopify product pages. Perfect for demonstrating functionality, fit, and quality.",
                    example: "A clothing store showing fabric texture, fit, and movement in natural lighting.",
                    conversion: "92% higher conversion rate",
                    placement: "Product pages, collection pages",
                    shopifyTip: "Use Shopify's native video upload feature for fast loading times."
                  },
                  {
                    number: "02", 
                    title: "Unboxing Experience Videos",
                    description: "Recreate the excitement of receiving your product. Builds anticipation and showcases your brand experience.",
                    example: "A tech accessory brand showing premium packaging and first impressions.",
                    conversion: "78% higher conversion rate",
                    placement: "Homepage, product pages",
                    shopifyTip: "Embed in your product description for maximum impact."
                  },
                  {
                    number: "03",
                    title: "Size & Fit Guide Videos",
                    description: "Address the #1 concern for online shoppers: 'Will this fit me?' Show products on different body types or in various settings.",
                    example: "A furniture store showing pieces in different room sizes and styles.",
                    conversion: "89% higher conversion rate",
                    placement: "Product pages, size guide pages",
                    shopifyTip: "Link to size charts and reduce return rates significantly."
                  },
                  {
                    number: "04",
                    title: "Customer Testimonial Videos",
                    description: "Real customers sharing their experiences builds trust and social proof better than any written review.",
                    example: "Customers showing before/after results or sharing their success stories.",
                    conversion: "96% higher conversion rate",
                    placement: "Homepage, product pages, about page",
                    shopifyTip: "Use Shopify's review apps to collect and display video testimonials."
                  },
                  {
                    number: "05",
                    title: "Behind-the-Scenes Videos",
                    description: "Show your brand story, manufacturing process, or team. Builds emotional connection and brand loyalty.",
                    example: "A handmade jewelry brand showing the crafting process and attention to detail.",
                    conversion: "67% higher conversion rate",
                    placement: "About page, homepage, blog",
                    shopifyTip: "Perfect for building brand trust and justifying premium pricing."
                  }
                ].map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {type.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                        <p className="text-gray-700 mb-4">{type.description}</p>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <p className="text-sm text-gray-600 italic mb-2">Example: {type.example}</p>
                          <p className="text-sm text-blue-600 font-medium">Best placement: {type.placement}</p>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                          <p className="text-sm text-green-700 font-medium">💡 Shopify Tip: {type.shopifyTip}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Add Videos to Your Shopify Store (5 Methods)</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Shopify offers multiple ways to add videos to your store. Here are the 5 most effective methods, ranked by ease of implementation:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Native Shopify Video Upload (Recommended)</h3>
                      <p className="text-gray-700 mb-4">Upload videos directly to your product pages through Shopify&apos;s built-in media manager.</p>
                      <div className="bg-green-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-green-800 mb-2">Step-by-Step:</h4>
                        <ol className="text-sm text-green-700 space-y-1">
                          <li>1. Go to Products → Select product → Media section</li>
                          <li>2. Click &quot;Add media&quot; → Upload video (max 1GB, MP4/MOV)</li>
                          <li>3. Add alt text for SEO: &quot;[Product name] demonstration video&quot;</li>
                          <li>4. Set as featured media if desired</li>
                        </ol>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-green-600 font-medium">✅ Free</span>
                        <span className="text-green-600 font-medium">✅ Fast loading</span>
                        <span className="text-green-600 font-medium">✅ SEO optimized</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">YouTube/Vimeo Embedding</h3>
                      <p className="text-gray-700 mb-4">Embed videos from YouTube or Vimeo using Shopify&apos;s video block in the theme customizer.</p>
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Best For:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Long-form content (tutorials, brand stories)</li>
                          <li>• Videos you want to promote on social media</li>
                          <li>• When you need detailed analytics</li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-blue-600 font-medium">✅ Free hosting</span>
                        <span className="text-blue-600 font-medium">✅ Advanced analytics</span>
                        <span className="text-orange-600 font-medium">⚠️ External dependency</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Shopify Video Apps</h3>
                      <p className="text-gray-700 mb-4">Use specialized apps like Videowise, Tolstoy, or Video Shopping for advanced features.</p>
                      <div className="bg-purple-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-purple-800 mb-2">Top Apps:</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• <strong>Videowise:</strong> Shoppable videos with analytics ($29/month)</li>
                          <li>• <strong>Tolstoy:</strong> Interactive video experiences ($19/month)</li>
                          <li>• <strong>Video Shopping:</strong> Live shopping features ($49/month)</li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-purple-600 font-medium">✅ Advanced features</span>
                        <span className="text-purple-600 font-medium">✅ Detailed analytics</span>
                        <span className="text-red-600 font-medium">❌ Monthly cost</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom HTML/CSS Integration</h3>
                      <p className="text-gray-700 mb-4">Add custom video players with advanced controls and styling through theme code editing.</p>
                      <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-indigo-800 mb-2">When to Use:</h4>
                        <ul className="text-sm text-indigo-700 space-y-1">
                          <li>• Need specific video player styling</li>
                          <li>• Want custom video controls</li>
                          <li>• Advanced tracking requirements</li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-indigo-600 font-medium">✅ Full control</span>
                        <span className="text-indigo-600 font-medium">✅ Custom styling</span>
                        <span className="text-red-600 font-medium">❌ Technical knowledge required</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Video Generation</h3>
                      <p className="text-gray-700 mb-4">Create professional product videos automatically from your existing product URLs and images.</p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Perfect For:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Scaling video content across hundreds of products</li>
                          <li>• No video creation experience or equipment</li>
                          <li>• Consistent professional quality across all products</li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-blue-600 font-medium">✅ No filming needed</span>
                        <span className="text-blue-600 font-medium">✅ Professional quality</span>
                        <span className="text-blue-600 font-medium">✅ Scalable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Shopify Video Apps & Tools (2026 Edition)</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The right tools can make or break your Shopify video marketing strategy. Here are the top-rated apps and tools that Shopify store owners swear by:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    name: "Videowise",
                    rating: "4.9/5",
                    price: "$29/month",
                    category: "Shoppable Videos",
                    features: ["Interactive video shopping", "Advanced analytics", "A/B testing", "Mobile optimized"],
                    bestFor: "High-volume stores wanting interactive experiences",
                    pros: "Excellent ROI tracking, easy setup",
                    cons: "Higher price point"
                  },
                  {
                    name: "Tolstoy",
                    rating: "4.8/5", 
                    price: "$19/month",
                    category: "Interactive Videos",
                    features: ["Video quizzes", "Personalized experiences", "Shopify integration", "Analytics dashboard"],
                    bestFor: "Brands wanting to engage customers with interactive content",
                    pros: "Great for customer engagement",
                    cons: "Learning curve for setup"
                  },
                  {
                    name: "Video Shopping",
                    rating: "4.7/5",
                    price: "$49/month", 
                    category: "Live Shopping",
                    features: ["Live shopping events", "Video galleries", "Social proof", "Mobile-first design"],
                    bestFor: "Fashion and lifestyle brands",
                    pros: "Live shopping capabilities",
                    cons: "Most expensive option"
                  },
                  {
                    name: "Lymo AI",
                    rating: "4.9/5",
                    price: "From $19/month",
                    category: "AI Video Creation",
                    features: ["URL to video conversion", "Automated creation", "Professional quality", "Bulk processing"],
                    bestFor: "Stores with large product catalogs",
                    pros: "No filming required, scales infinitely",
                    cons: "Less customization than manual creation"
                  }
                ].map((app, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600">{app.rating}</span>
                          </div>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm font-medium text-green-600">{app.price}</span>
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">{app.category}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{app.bestFor}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {app.features.map((feature, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{feature}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-green-600 font-medium">✅ Pros:</span>
                          <p className="text-gray-600">{app.pros}</p>
                        </div>
                        <div>
                          <span className="text-orange-600 font-medium">⚠️ Cons:</span>
                          <p className="text-gray-600">{app.cons}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 5 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mobile Optimization for Shopify Videos</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With 79% of Shopify traffic coming from mobile devices, optimizing your videos for mobile is crucial. Here&apos;s how to ensure your videos perform perfectly on every device:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Mobile Video Optimization Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Use vertical (9:16) or square (1:1) aspect ratios",
                    "Keep file sizes under 50MB for fast loading",
                    "Add captions for silent viewing (85% watch without sound)",
                    "Ensure touch-friendly play/pause controls",
                    "Test loading speed on 3G connections",
                    "Use auto-play with muted audio",
                    "Optimize thumbnail images for mobile",
                    "Implement lazy loading for better performance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              <div className="border border-gray-200 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Video Specifications for Shopify</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Play className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Format & Quality</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>MP4 format (H.264 codec)</li>
                      <li>1080p resolution minimum</li>
                      <li>30 fps frame rate</li>
                      <li>High quality compression</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Target className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dimensions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Square: 1080x1080px</li>
                      <li>Vertical: 1080x1920px</li>
                      <li>Horizontal: 1920x1080px</li>
                      <li>Responsive design friendly</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Max file size: 50MB</li>
                      <li>Duration: 15-60 seconds</li>
                      <li>Loading time: &lt;3 seconds</li>
                      <li>Auto-play compatible</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Shopify Store with Video?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Create professional product videos for your entire Shopify catalog in minutes, not months. No filming, editing, or technical skills required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/shopify-video-creator">
                    <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                      Try Shopify Video Creator
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/blog/how-to-add-videos-to-shopify">
                    <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-500 font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 inline-flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Free Setup Guide
                    </button>
                  </Link>
                </div>
              </div>

              {/* Section 6 */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring Video Performance & ROI</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What gets measured gets improved. Here&apos;s how to track your Shopify video marketing performance and calculate real ROI:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics to Track</h3>
                  <div className="space-y-3">
                    {[
                      { metric: "Video View Rate", target: ">75%", description: "Percentage of visitors who watch your videos" },
                      { metric: "Conversion Rate", target: "+85%", description: "Sales increase from pages with videos vs. without" },
                      { metric: "Time on Page", target: "+64%", description: "How much longer visitors stay on video pages" },
                      { metric: "Return Rate", target: "-43%", description: "Reduction in product returns with video" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.metric}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium ml-3">
                          {item.target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Calculation Formula</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 mb-2"><strong>Video ROI = (Revenue Increase - Video Costs) / Video Costs × 100</strong></p>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>• Revenue Increase: Additional sales from video pages</p>
                      <p>• Video Costs: Production + hosting + time investment</p>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Example ROI Calculation:</h4>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>Revenue increase: $10,000/month</p>
                      <p>Video investment: $2,000</p>
                      <p><strong>ROI: 400% in first month</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Dominating Shopify with Video Marketing Today</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Video marketing isn&apos;t just the future of e-commerce—it&apos;s the present. Shopify stores that implement video marketing strategies see immediate improvements in conversion rates, customer engagement, and overall sales performance.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The question isn&apos;t whether you should add videos to your Shopify store, but how quickly you can implement them. Start with one product, measure the results, and scale from there. Your competitors are already using video—don&apos;t let them leave you behind.
              </p>

              {/* Related Articles */}
              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Continue Your Video Marketing Journey</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "How to Add Product Videos to Shopify: 5 Methods That Actually Work",
                      description: "Step-by-step tutorial for implementing videos on your Shopify store",
                      href: "/blog/how-to-add-videos-to-shopify",
                      status: "Coming Friday",
                      category: "Tutorial"
                    },
                    {
                      title: "Best Shopify Video Apps: 10 Tools to Boost Your Store's Conversions",
                      description: "Complete comparison of the top Shopify video apps and tools",
                      href: "/blog/best-shopify-video-apps", 
                      status: "Coming Soon",
                      category: "Tools"
                    },
                    {
                      title: "How to Create Product Videos That Actually Convert",
                      description: "Master the fundamentals of creating high-converting product videos",
                      href: "/blog/how-to-create-product-videos-that-convert",
                      status: "Read Now",
                      category: "Guide"
                    },
                    {
                      title: "Amazon vs Shopify: Video Marketing Strategies Compared",
                      description: "Platform-specific video marketing strategies and best practices",
                      href: "/blog/amazon-vs-shopify-video-marketing",
                      status: "Coming Soon",
                      category: "Comparison"
                    }
                  ].map((article, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">{article.category}</span>
                        <span className={`text-xs font-medium ${article.status === 'Read Now' ? 'text-green-600' : 'text-gray-500'}`}>
                          {article.status}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h4>
                      <p className="text-gray-600 mb-4">{article.description}</p>
                      {article.status === 'Read Now' ? (
                        <Link href={article.href} className="text-blue-500 hover:text-blue-600 font-medium text-sm inline-flex items-center gap-1">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <span className="text-gray-400 text-sm">Coming Soon</span>
                      )}
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
                  alt="Lymo AI Logo - Shopify Video Marketing Platform" 
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-600 max-w-md">
                Master Shopify video marketing with expert strategies, tools, and tutorials that help e-commerce stores boost conversions and sales.
              </p>
            </div>

            {/* Blog Categories */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Shopify Resources</h4>
              <div className="space-y-3">
                <Link href="/blog" className="block text-gray-600 hover:text-green-600 transition-colors">All Shopify Guides</Link>
                <Link href="/blog/category/shopify-marketing" className="block text-gray-600 hover:text-green-600 transition-colors">Shopify Marketing</Link>
                <Link href="/blog/category/shopify-optimization" className="block text-gray-600 hover:text-green-600 transition-colors">Store Optimization</Link>
                <Link href="/blog/category/shopify-apps" className="block text-gray-600 hover:text-green-600 transition-colors">Best Shopify Apps</Link>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Video Tools</h4>
              <div className="space-y-3">
                <Link href="/shopify-video-creator" className="block text-gray-600 hover:text-green-600 transition-colors">Shopify Video Creator</Link>
                <Link href="/url-to-video-generator" className="block text-gray-600 hover:text-green-600 transition-colors">URL to Video Generator</Link>
                <Link href="/e-commerce-video-generator" className="block text-gray-600 hover:text-green-600 transition-colors">E-commerce Video Generator</Link>
                <Link href="/amazon-product-videos" className="block text-gray-600 hover:text-green-600 transition-colors">Amazon Product Videos</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Lymo AI. All rights reserved. | Shopify Video Marketing Made Simple
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}