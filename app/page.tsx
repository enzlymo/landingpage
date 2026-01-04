'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { VideoCard } from "@/components/ui/video-card"
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { Play, ArrowRight, Sparkles, Zap, Target, Users, BarChart3, CheckCircle, Quote, Image as ImageIcon, Video, FileText, Upload, Wand2, TrendingUp, Mail, MessageCircle, Clock, Shield } from "lucide-react"
import { StatsBanner } from "@/components/ui/stats-banner"
import { RotatingText } from "@/components/ui/rotating-text"
import { ProductTransformationShowcase } from "@/components/ui/product-transformation-showcase"
import { useTranslations } from "@/lib/useTranslations"
import { Navigation } from "@/components/layout/Navigation"
import { HeroSection } from "@/components/hero/HeroSection"
import { StatsBar } from "@/components/sections/StatsBar"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Page() {
  const { t, locale, switchLocale, mounted } = useTranslations()
  const [activeContentType, setActiveContentType] = useState<'pictures' | 'videos' | 'text'>('pictures')
  
  if (!mounted) {
    return <div className="min-h-screen bg-white"></div>
  }
  
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* New Navigation */}
      <Navigation />

      <main className="flex-grow">
        {/* New Hero Section */}
        <HeroSection />
        
        {/* Stats Bar */}
        <StatsBar />

        {/* AI Video Generation Showcase */}
        <section id="ai-video-creation" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                See AI in Action
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                Real videos created by our AI
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Create professional marketing videos with AI avatars, product showcases, and viral content in minutes
              </p>
            </div>

            {/* Video Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              
              {/* Avatar Marketing */}
              <div className="group relative">
                <div className="artlist-card hover:border-yellow-200 transition-all duration-300">
                  <div 
                    className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-100 mb-4 group cursor-pointer"
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
                    onTouchStart={(e) => {
                      const video = e.currentTarget.querySelector('video');
                      if (video) {
                        if (video.paused) {
                          video.muted = false;
                          video.volume = 0.63;
                          video.play().catch(() => {
                            video.muted = true;
                            video.play().catch(() => {});
                          });
                        } else {
                          video.pause();
                        }
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
                      webkit-playsinline="true"
                    >
                      <source src="/images/bb97578d-a267-45ea-bd5b-1c0be429465b.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating UI Elements */}
                    <div className="absolute top-2 left-2 bg-yellow-400 rounded-full px-2 py-1">
                      <span className="text-xs font-bold text-gray-900">AI Avatar</span>
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Avatar Marketing</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      AI avatars present your products with realistic human engagement and professional delivery
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span>✨ Done in minutes</span>
                      <span>🎯 Brand Focused</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Showcase Video */}
              <div className="group relative">
                <div className="artlist-card hover:border-yellow-200 transition-all duration-300">
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
                    onTouchStart={(e) => {
                      const video = e.currentTarget.querySelector('video');
                      if (video) {
                        if (video.paused) {
                          video.muted = false;
                          video.volume = 0.63;
                          video.play().catch(() => {
                            video.muted = true;
                            video.play().catch(() => {});
                          });
                        } else {
                          video.pause();
                        }
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
                      webkit-playsinline="true"
                    >
                      <source src="/images/3bff4339-9711-438d-9995-952e23d2b626.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Product Elements */}
                    <div className="absolute top-2 left-2 bg-orange-500 rounded-full px-2 py-1">
                      <span className="text-xs font-bold text-white">Product Demo</span>
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Chloe AI-UGC</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Transform any product-url into stunning video content
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span>🚀 Viral</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Product Transformation Showcase */}
        <ProductTransformationShowcase />


        {/* Professional 3-Steps Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                3 easy steps to create your{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                  studio-quality content
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Create your content in 3 quick steps. Get professional results before you start.
              </p>
            </div>

            {/* Professional Content Type Switcher */}
            <div className="flex justify-center mb-16">
              <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-lg w-full max-w-2xl">
                <div className="flex flex-col sm:flex-row gap-2">
                  {[
                    { id: 'pictures', label: 'Pictures', icon: ImageIcon },
                    { id: 'videos', label: 'Videos', icon: Video },
                    { id: 'text', label: 'Creative Text', icon: FileText }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setActiveContentType(type.id as any)}
                      className={`flex items-center justify-center gap-3 px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 flex-1 ${
                        activeContentType === type.id
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 shadow-lg'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <type.icon className="w-5 h-5" />
                      <span className="font-medium text-sm sm:text-base">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Steps Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="artlist-card h-full hover:border-yellow-200 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-gray-900 font-bold text-lg">1</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activeContentType === 'pictures' && 'Upload your images'}
                  {activeContentType === 'videos' && 'Import your brand'}
                  {activeContentType === 'text' && 'Describe your vision'}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {activeContentType === 'pictures' && 'Simply put your product-url existing photos. Our AI will analyze the style and content.'}
                  {activeContentType === 'videos' && 'Instantly pull in your colors, fonts and style with one product-url, making every video 100% on-brand.'}
                  {activeContentType === 'text' && 'Tell us what kind of content you want to create. Be as specific or general as you like.'}
                </p>

                {/* Step 1 Interface Screenshot */}
                <div className="bg-gray-100 rounded-lg p-2 border border-gray-200 overflow-hidden">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={
                        activeContentType === 'pictures' ? '/images/Frame 5@2x.png' :
                        activeContentType === 'videos' ? '/images/Frame 2@2x.png' :
                        '/images/Frame 8@2x.png'
                      }
                      alt={
                        activeContentType === 'pictures' ? 'Step 1: Upload your images interface' :
                        activeContentType === 'videos' ? 'Step 1: Import your brand interface' :
                        'Step 1: Describe your vision interface'
                      }
                      fill
                      className="object-cover"
                    />
                      </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="artlist-card h-full hover:border-blue-200 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activeContentType === 'pictures' && 'Select style & format'}
                  {activeContentType === 'videos' && 'Choose video type'}
                  {activeContentType === 'text' && 'Pick content format'}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {activeContentType === 'pictures' && 'Pick the perfect style and format for your campaign. Put in any text you want to be visible on the image.'}
                  {activeContentType === 'videos' && 'Pick the perfect AI-UGC creator and format for your campaign, our AI will adapt your brand.'}
                  {activeContentType === 'text' && 'Choose from various content formats. Our AI will structure your ideas into the perfect format.'}
                </p>

                {/* Step 2 Interface Screenshot */}
                <div className="bg-gray-100 rounded-lg p-2 border border-gray-200 overflow-hidden">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={
                        activeContentType === 'pictures' ? '/images/Frame 6@2x.png' :
                        activeContentType === 'videos' ? '/images/Frame 3@2x.png' :
                        '/images/Frame 9@2x.png'
                      }
                      alt={
                        activeContentType === 'pictures' ? 'Step 2: Select style & format interface' :
                        activeContentType === 'videos' ? 'Step 2: Choose video type interface' :
                        'Step 2: Pick content format interface'
                      }
                      fill
                      className="object-cover"
                    />
                    </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="artlist-card h-full hover:border-green-200 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-green-400 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activeContentType === 'pictures' && 'Generate images'}
                  {activeContentType === 'videos' && 'Generate videos'}
                  {activeContentType === 'text' && 'Generate content'}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {activeContentType === 'pictures' && 'Sit back while our AI produces conversion-focused images faster than it takes to write a headline.'}
                  {activeContentType === 'videos' && 'Sit back while our AI produces conversion-focused videos faster than it takes to write a headline.'}
                  {activeContentType === 'text' && 'Sit back while our AI produces conversion-focused content faster than it takes to brainstorm ideas.'}
                </p>

                {/* Step 3 Interface Screenshot */}
                <div className="bg-gray-100 rounded-lg p-2 border border-gray-200 overflow-hidden">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={
                        activeContentType === 'pictures' ? '/images/Frame 7@2x.png' :
                        activeContentType === 'videos' ? '/images/Frame 4@2x.png' :
                        '/images/Frame 10@2x.png'
                      }
                      alt={
                        activeContentType === 'pictures' ? 'Step 3: Generate images interface' :
                        activeContentType === 'videos' ? 'Step 3: Generate videos interface' :
                        'Step 3: Generate content interface'
                      }
                      fill
                      className="object-cover"
                    />
                    </div>
                        </div>
              </div>
            </div>
          </div>
        </section>


        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Simple process,
                <span className="block font-medium bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">powerful results</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Create professional videos in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Enter Your Content",
                  description: "Simply put in a product-url, choose music, ugc-creator, format and voice.",
                  gradient: "from-yellow-400 to-orange-400"
                },
                {
                  step: "02", 
                  title: "AI Generates Video",
                  description: "Our AI creates professional video with visuals, animations, and effects",
                  gradient: "from-blue-400 to-purple-400"
                },
                {
                  step: "03",
                  title: "Export & Share",
                  description: "Download in multiple formats optimized for any platform",
                  gradient: "from-purple-400 to-green-400"
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl text-white text-lg font-bold shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Free Trial CTA within How It Works */}
            <div className="text-center mt-16">
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Free Account Available</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to create your first AI video?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of creators who started with a free account. No credit card required, instant access to all features.
                </p>
                <Link href="https://app.lymo.me">
                  <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 group">
                    <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                    Create Free Account
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-800 font-semibold text-sm">GET IN TOUCH</span>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Ready to Transform
                <span className="block font-medium bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Your Content?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have questions about our AI platform? Want to discuss enterprise solutions? 
                <span className="text-gray-900 font-semibold"> We&apos;re here to help you succeed.</span>
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {/* Email Contact Card */}
              <div className="group">
                <div className="artlist-card hover:border-yellow-200 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-gray-900" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get direct access to our team. We typically respond within 2 hours during business hours.
                  </p>
                  
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 group-hover:border-yellow-300 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <a 
                        href="mailto:lymoadsai@gmail.com" 
                        className="text-yellow-600 font-semibold text-lg hover:text-yellow-700 transition-colors duration-200 group-hover:underline"
                      >
                        lymoadsai@gmail.com
                      </a>
                  </div>
                    <div className="text-xs text-gray-500 mt-2 ml-6">
                      ✓ Enterprise inquiries welcome
                  </div>
                  </div>
                </div>
              </div>

              {/* Ready to Get Started Card */}
              <div className="group">
                <div className="artlist-card hover:border-yellow-200 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-gray-900" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Join thousands of creators already using Lymo AI to transform their content strategy.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <Link href="https://app.lymo.me">
                      <Button className="w-full artlist-btn-primary">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Start Free Trial
                      </Button>
                    </Link>
                    <a href="mailto:lymoadsai@gmail.com">
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-gray-300 bg-transparent hover:bg-gray-100 hover:border-yellow-400 text-gray-700 px-6 py-3 rounded-xl transition-all duration-300"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Sales
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50 rounded-3xl p-12 md:p-16 border border-gray-100 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Start your free trial
                <span className="block font-medium bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">and create your first AI video today</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                The future of marketing is here. Join thousands of creators already transforming their content with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="https://app.lymo.me">
                  <Button className="artlist-btn-primary text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
                    <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    Try Free Today
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <div className="text-gray-600 text-sm">
                  ✓ Free account • ✓ No credit card • ✓ Instant access
                </div>
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
                  src="/images/lymologonew.svg.svg" 
                  alt="Lymo Logo" 
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-semibold text-gray-900">Lymo AI</span>
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
                <Link href="/ai-video" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Video</Link>
                <Link href="/ai-image" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Image</Link>
                <Link href="/ai-studios" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Studios</Link>
                <Link href="/pricing" className="block text-gray-600 hover:text-yellow-600 transition-colors">Pricing</Link>
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
              © 2025 Lymo AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}