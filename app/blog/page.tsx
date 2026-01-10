'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import Link from 'next/link'
import { Calendar, ArrowRight, Clock, User } from 'lucide-react'
import Image from 'next/image'

const blogPosts = [
  {
    title: "Shopify Video Marketing: Complete Guide to Boost Sales in 2026",
    excerpt: "Master Shopify video marketing with proven strategies that increase conversions by 85%. Learn how to add videos, optimize for mobile, and boost your store's sales.",
    slug: "shopify-video-marketing-guide",
    date: "2026-01-14",
    readTime: "12 min read",
    author: "Lymo AI Team",
    category: "Shopify Marketing",
    featured: true
  },
  {
    title: "How to Create Product Videos That Actually Convert: A Complete Guide for E-commerce Stores",
    excerpt: "Discover the proven strategies and techniques that top e-commerce stores use to create product videos that drive sales and boost conversions.",
    slug: "how-to-create-product-videos-that-convert",
    date: "2026-01-06",
    readTime: "8 min read",
    author: "Lymo AI Team",
    category: "E-commerce Marketing",
    featured: false
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-light text-gray-900 mb-6 leading-tight">
              E-commerce Video Marketing Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn how to create professional product videos, boost sales, and master video marketing for your online store.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <section key={index} className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                  <span className="text-blue-600 font-medium">{post.category}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* Recent Posts */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Recent Articles
              </h2>
              <p className="text-xl text-gray-600">
                Latest insights and strategies for e-commerce video marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                More Articles Coming Soon
              </h2>
              <p className="text-xl text-gray-600">
                We&apos;re working on more valuable content to help you succeed with video marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "How to Add Product Videos to Shopify: 5 Methods That Actually Work",
                  description: "Step-by-step tutorial for implementing videos on your Shopify store",
                  category: "Shopify Tutorial",
                  status: "Coming Friday"
                },
                {
                  title: "Amazon Product Video Requirements: Complete 2026 Compliance Guide",
                  description: "Master Amazon's video requirements and boost your listing rankings",
                  category: "Amazon Selling",
                  status: "Coming Soon"
                },
                {
                  title: "E-commerce Video Marketing Statistics: 50+ Stats That Will Shock You",
                  description: "Latest data and trends in e-commerce video marketing for 2026",
                  category: "Industry Insights",
                  status: "Coming Soon"
                }
              ].map((post, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="mb-4">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className={`text-sm font-medium ${post.status === 'Coming Friday' ? 'text-blue-600' : 'text-gray-400'}`}>
                    {post.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated with Video Marketing Tips
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest strategies, tips, and insights delivered to your inbox. Learn how to create videos that convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                  Subscribe
                </button>
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
                Learn the latest video marketing strategies and tips to grow your e-commerce business with professional product videos.
              </p>
            </div>

            {/* Blog Categories */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Blog Categories</h4>
              <div className="space-y-3">
                <Link href="/blog/category/ecommerce-marketing" className="block text-gray-600 hover:text-yellow-600 transition-colors">E-commerce Marketing</Link>
                <Link href="/blog/category/shopify-tips" className="block text-gray-600 hover:text-yellow-600 transition-colors">Shopify Tips</Link>
                <Link href="/blog/category/amazon-selling" className="block text-gray-600 hover:text-yellow-600 transition-colors">Amazon Selling</Link>
                <Link href="/blog/category/video-marketing" className="block text-gray-600 hover:text-yellow-600 transition-colors">Video Marketing</Link>
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
