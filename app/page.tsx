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

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Page() {
  const { t, locale, switchLocale, mounted } = useTranslations()
  const [activeContentType, setActiveContentType] = useState<'pictures' | 'videos' | 'text'>('pictures')
  
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-[#0F1419] to-[#1A202C]"></div>
  }
  
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-[#0F1419] via-[#161B22] to-[#1A202C] text-[#F7FAFC]">
      {/* Launch Month Sale Banner - Top of Page */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#F6E05E] via-[#F59E0B] to-[#F6E05E] shadow-lg overflow-hidden">
        {/* Animated background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1.5 md:py-2 relative">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#111827] rounded-full animate-bounce"></div>
              <span className="text-[#111827] font-bold text-sm md:text-base tracking-wide">
                 LAUNCH MONTH SALE - Limited Time Only! 
              </span>
              <div className="w-2 h-2 bg-[#111827] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Navigation */}
      <header className="fixed top-[32px] md:top-[40px] left-0 right-0 z-40 bg-[#1A202C]/95 backdrop-blur-sm border-b border-[#2D3748] shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center justify-center">
                <Image 
                  src="/images/lymologonew.svg.svg" 
                  alt="Lymo Logo" 
                  width={36}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
              
              <nav className="hidden md:flex items-center space-x-8">
                {[
                  { key: 'features', label: t.nav.features },
                  { key: 'how-it-works', label: t.nav.howItWorks }
                ].map((item) => (
                  <Link 
                    key={item.key}
                    href={`#${item.key}`}
                    className="text-sm font-medium text-[#A0AEC0] hover:text-[#F7FAFC] transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
                
                {/* Premium Language Switcher */}
                <div className="flex items-center ml-6">
                  <div className="relative bg-[#2D3748] rounded-full p-1">
                    <div className="flex items-center">
                      <button
                        onClick={() => switchLocale('en')}
                        className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                          locale === 'en' 
                            ? 'bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] text-[#111827] shadow-sm' 
                            : 'text-[#A0AEC0] hover:text-[#F7FAFC] hover:bg-[#1A202C]'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => switchLocale('sv')}
                        className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                          locale === 'sv' 
                            ? 'bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] text-[#111827] shadow-sm' 
                            : 'text-[#A0AEC0] hover:text-[#F7FAFC] hover:bg-[#1A202C]'
                        }`}
                      >
                        Svenska
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
              
              <div className="flex items-center space-x-3">
                {/* Mobile Premium Language Switcher */}
                <div className="flex md:hidden items-center mr-3">
                  <div className="relative bg-[#2D3748] rounded-full p-0.5">
                    <div className="flex items-center">
                      <button
                        onClick={() => switchLocale('en')}
                        className={`relative px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                          locale === 'en' 
                            ? 'bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] text-[#111827] shadow-sm' 
                            : 'text-[#A0AEC0] hover:text-[#F7FAFC] hover:bg-[#1A202C]'
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => switchLocale('sv')}
                        className={`relative px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                          locale === 'sv' 
                            ? 'bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] text-[#111827] shadow-sm' 
                            : 'text-[#A0AEC0] hover:text-[#F7FAFC] hover:bg-[#1A202C]'
                        }`}
                      >
                        SV
                      </button>
                    </div>
                  </div>
                </div>
                
                <Link href="https://app.lymo.me">
                <Button 
                  size="sm" 
                    className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#F6E05E] text-[#111827] font-semibold text-sm px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Login
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>


      <main className="flex-grow pt-[88px] md:pt-[104px]">
        {/* Premium $100M Startup Hero Section */}
<section className="relative min-h-[70vh] md:min-h-[80vh] bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#161B22] flex items-center justify-center overflow-hidden">
          {/* Premium Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#F6E05E]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#60A5FA]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#F6E05E]/5 to-[#A78BFA]/5 rounded-full blur-3xl"></div>
              </div>
              
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 md:py-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content - More Compact */}
              <div className="space-y-6 text-center lg:text-left">
                {/* Trust Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2 bg-[#0F1419]/80 backdrop-blur-sm border border-[#2D3748] rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                    <span className="text-sm text-[#A0AEC0]">100+ creators</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#F6E05E] text-sm">★★★★★</span>
                    <span className="text-xs text-[#A0AEC0]">4.9/5</span>
                  </div>
                </div>
                
                {/* Main Headlines - More Compact */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.9] text-[#F7FAFC]">
                    Create Viral
                    <span className="block bg-gradient-to-r from-[#F6E05E] via-[#F59E0B] to-[#60A5FA] bg-clip-text text-transparent">
                      AI Content
                    </span>
                    <span className="block text-3xl sm:text-4xl lg:text-5xl">
                  <RotatingText 
                        texts={["in Seconds", "That Converts", "That Scales", "That Sells"]}
                        interval={2500}
                  />
                </span>
              </h1>
              
                  <p className="text-lg lg:text-xl text-[#A0AEC0] leading-relaxed max-w-2xl">
                    Transform any product photo into professional videos, ads, and campaigns. 
                    <span className="text-[#F7FAFC] font-semibold"> Start your free trial today</span> and join the AI revolution.
                  </p>
              </div>
              
                {/* CTA Section - More Compact */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <Link href="https://app.lymo.me">
                      <Button className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#F6E05E] text-[#111827] font-bold text-lg px-8 py-6 rounded-2xl shadow-2xl hover:shadow-[#F6E05E]/30 transition-all duration-300 transform hover:scale-105 group">
                        <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                        Start Creating Free
                </Button>
                    </Link>
                <a href="#ai-video-creation">
                  <Button 
                    variant="outline" 
                        className="border-2 border-[#2D3748] bg-[#0F1419]/80 backdrop-blur-sm hover:bg-[#2D3748]/60 hover:border-[#F6E05E]/70 active:bg-[#2D3748]/80 active:text-[#F7FAFC] text-[#F7FAFC] text-lg px-8 py-6 rounded-2xl transition-all duration-300 group"
                  >
                        <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        Watch Demo
                  </Button>
                </a>
              </div>
              
                  {/* Enhanced Free Trial Messaging */}
                  <div className="bg-[#0F1419]/60 backdrop-blur-sm border border-[#2D3748] rounded-2xl p-4 max-w-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#F7FAFC] font-semibold text-lg">Start Your Free Account Today</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-[#A0AEC0]">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  <span>No credit card required</span>
                </div>
                      <div className="flex items-center gap-2 text-[#A0AEC0]">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        <span>Free account available</span>
                </div>
                      <div className="flex items-center gap-2 text-[#A0AEC0]">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  <span>Cancel anytime</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A0AEC0]">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        <span>Instant access</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            
              {/* Right Visual Showcase - Interactive Video Example */}
              <div className="relative">
                {/* Floating Performance Cards */}
                <div className="absolute -top-6 -left-6 z-30 hidden lg:block">
                  <div className="bg-[#0F1419]/95 backdrop-blur-xl border border-[#2D3748] rounded-2xl p-4 shadow-2xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#10B981] to-[#60A5FA] rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#F7FAFC]">Lightning Fast</div>
                        <div className="text-xs text-[#10B981]">Generated in 8.2s</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 z-30 hidden lg:block">
                  <div className="bg-[#0F1419]/95 backdrop-blur-xl border border-[#2D3748] rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-[#111827]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#F7FAFC]">+347% Engagement</div>
                        <div className="text-xs text-[#F6E05E]">vs traditional content</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Interactive Demo Interface */}
                <div className="relative bg-[#0F1419]/90 backdrop-blur-xl border border-[#2D3748] rounded-3xl p-5 shadow-2xl max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/8 to-[#60A5FA]/8 rounded-3xl"></div>
                  
                  {/* Simplified Browser Header */}
                  <div className="relative z-10 flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#EF4444] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                    </div>
                    <div className="text-xs text-[#A0AEC0] bg-[#1A202C] px-3 py-1.5 rounded-full border border-[#2D3748]">
                      AI Demo
                    </div>
                  </div>

                  {/* Interactive Product Transformation */}
                  <div className="space-y-4">
                    {/* Upload Section with Hover Transform */}
                    <div className="bg-[#1A202C] rounded-2xl p-4 border border-[#2D3748] group hover:border-[#F6E05E]/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-7 h-7 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-lg flex items-center justify-center">
                          <Upload className="w-3.5 h-3.5 text-[#111827]" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-[#F7FAFC]">Upload & Transform</span>
                          <div className="text-xs text-[#A0AEC0]">Hover to see AI magic</div>
                        </div>
                      </div>
                      
                      <div className="aspect-[4/3] bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-xl border-2 border-dashed border-[#4A5568] flex items-center justify-center relative overflow-hidden group cursor-pointer">
                        {/* Original Cosmetic Tube Mockup */}
                        <Image 
                          src="/images/Free Cosmetic Tube Mockup.png"
                          alt="Product showcase"
                          fill
                          className="object-cover opacity-90 group-hover:opacity-0 transition-all duration-700 rounded-xl"
                        />
                        
                        {/* AI Generated Result - Shows on Hover */}
                        <Image 
                          src="/images/1.jpg"
                          alt="AI Generated Result"
                          fill
                          className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-xl absolute inset-0"
                        />
                        
                        {/* Premium AI Processing Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F6E05E]/30 via-transparent to-[#60A5FA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Advanced Scanning Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#F6E05E] to-transparent animate-pulse"></div>
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <div className="absolute top-1/2 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-[#A78BFA] to-transparent animate-pulse" style={{ animationDelay: '0.25s' }}></div>
                      </div>
                        
                        {/* Transform Indicator */}
                        <div className="absolute top-3 right-3 bg-[#F6E05E] text-[#111827] px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                          AI ENHANCED
                    </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="w-full bg-[#F6E05E] h-1.5 rounded-full shadow-lg">
                            <div className="bg-gradient-to-r from-[#F6E05E] to-[#10B981] h-1.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                          </div>
                    </div>
                  </div>
                </div>
                

                    {/* Premium Processing Status */}
                    <div className="bg-[#1A202C] rounded-xl p-3 border border-[#2D3748] group hover:border-[#10B981]/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-[#F7FAFC]">AI Processing Status</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                          <span className="text-xs text-[#10B981] font-semibold animate-pulse">Ready</span>
                      </div>
                      </div>
                      <div className="w-full bg-[#2D3748] rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#F6E05E] via-[#60A5FA] to-[#10B981] h-2 rounded-full relative" style={{ width: '100%' }}>
                          {/* Premium Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                    </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* AI Video Generation Showcase */}
        <section id="ai-video-creation" className="py-24 bg-gradient-to-br from-[#1A202C] via-[#2D3748] to-[#1A202C] text-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                AI-Powered Video Creation
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Generate, Transform, Captivate
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Create professional marketing videos with AI avatars, product showcases, and viral content in minutes
              </p>
            </div>

            {/* Video Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
              
              {/* Avatar Marketing */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700 hover:border-[#F6E05E]/50 transition-all duration-300 hover:scale-102">
                  <div 
                    className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-[#F6E05E]/10 to-[#F59E0B]/10 mb-4 group cursor-pointer"
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
                    <div className="absolute top-2 left-2 bg-[#F6E05E] rounded-full px-2 py-1">
                      <span className="text-xs font-bold text-gray-900">AI Avatar</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                      <span className="text-xs text-white">00:45</span>
                    </div>
                    
                    {/* Play Indicator */}
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-white font-medium flex items-center gap-1">
                        <div className="w-1 h-1 bg-[#10B981] rounded-full animate-pulse"></div>
                        Playing
                      </span>
                    </div>
                    
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">Avatar Marketing</h3>
                    <p className="text-gray-400 text-sm mb-4">
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
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700 hover:border-[#F6E05E]/50 transition-all duration-300 hover:scale-102">
                  <div 
                    className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-[#F6E05E]/10 to-[#F59E0B]/10 mb-4 group cursor-pointer"
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
                        <div className="w-1 h-1 bg-[#10B981] rounded-full animate-pulse"></div>
                        Playing
                      </span>
                    </div>
                    
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">Chloe AI-UGC</h3>
                    <p className="text-gray-400 text-sm mb-4">
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

        {/* AI Video Creation Interface Showcase */}
        <section className="py-24 bg-gradient-to-br from-[#1A202C] via-[#2D3748] to-[#1A202C] hidden">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7FAFC] mb-6">
                Professional Video Creation
                <span className="block bg-gradient-to-r from-[#F6E05E] via-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h2>
              <p className="text-xl text-[#A0AEC0] max-w-3xl mx-auto">
                Create stunning marketing videos with our intuitive AI interface - from avatar presentations to product showcases
              </p>
            </div>

            {/* Interface Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Avatar Marketing Interface */}
              <div className="group relative">
                <div className="bg-[#0F1419] rounded-3xl p-8 shadow-2xl border border-[#2D3748] hover:border-[#F6E05E]/50 hover:shadow-3xl transition-all duration-700 hover:scale-105">
                  {/* Interface Preview */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-2xl overflow-hidden mb-6 border-2 border-[#2D3748]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Video className="w-8 h-8 text-[#111827]" />
                        </div>
                        <div className="text-sm text-[#F7FAFC] font-medium">Avatar Marketing Interface</div>
                        <div className="text-xs text-[#A0AEC0]">AI-powered presenter creation</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#F7FAFC] mb-2">AI-UGC</h3>
                    <p className="text-[#A0AEC0] text-sm">
                      AI avatars present your products with realistic human engagement and product photos from your product-url!
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Showcase Interface */}
              <div className="group relative">
                <div className="bg-[#0F1419] rounded-3xl p-8 shadow-2xl border border-[#2D3748] hover:border-[#F6E05E]/50 hover:shadow-3xl transition-all duration-700 hover:scale-105">
                  {/* Interface Preview Photo */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-2xl overflow-hidden mb-6 border-2 border-[#2D3748]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-[#A0AEC0] mx-auto mb-2" />
                        <div className="text-sm text-[#F7FAFC] font-medium">Product Showcase Interface</div>
                        <div className="text-xs text-[#A0AEC0]">Upload your screenshot here</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#F7FAFC] mb-2">Product Showcase</h3>
                    <p className="text-[#A0AEC0] text-sm">
                      AI transforms products into engaging videos perfect for social media marketing
                    </p>
                  </div>
                </div>
              </div>

              {/* Character Swap Interface */}
              <div className="group relative">
                <div className="bg-[#0F1419] rounded-3xl p-8 shadow-2xl border border-[#2D3748] hover:border-[#F6E05E]/50 hover:shadow-3xl transition-all duration-700 hover:scale-105">
                  {/* Interface Preview Photo */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-2xl overflow-hidden mb-6 border-2 border-[#2D3748]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-[#A0AEC0] mx-auto mb-2" />
                        <div className="text-sm text-[#F7FAFC] font-medium">Character Swap Interface</div>
                        <div className="text-xs text-[#A0AEC0]">Upload your screenshot here</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#F7FAFC] mb-2">Character Swap</h3>
                    <p className="text-[#A0AEC0] text-sm">
                      Replace faces naturally while maintaining expressions and movement quality
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="text-center mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F7FAFC] mb-2">15 sec</div>
                  <div className="text-[#A0AEC0]">Average creation time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F7FAFC] mb-2">99.9%</div>
                  <div className="text-[#A0AEC0]">Accuracy rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F7FAFC] mb-2">50+</div>
                  <div className="text-[#A0AEC0]">Video formats supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional 3-Steps Section */}
        <section className="py-24 bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#161B22]">
          <div className="max-w-6xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#F7FAFC] mb-4">
                3 easy steps to create your{' '}
                <span className="bg-gradient-to-r from-[#F6E05E] via-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent font-medium">
                  studio-quality content
                </span>
              </h2>
              <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
                Create your content in 3 quick steps. Get professional results before you start.
              </p>
            </div>

            {/* Professional Content Type Switcher */}
            <div className="flex justify-center mb-16">
              <div className="bg-[#1A202C] rounded-2xl p-2 border border-[#2D3748] shadow-xl w-full max-w-2xl">
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
                          ? 'bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] text-[#111827] shadow-lg'
                          : 'text-[#A0AEC0] hover:text-[#F7FAFC] hover:bg-[#2D3748]'
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-[#1A202C] rounded-2xl p-6 border border-[#2D3748] h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#F6E05E]/30">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F6E05E] to-[#F59E0B] rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-[#111827] font-bold text-lg">1</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#F7FAFC] mb-2">
                  {activeContentType === 'pictures' && 'Upload your images'}
                  {activeContentType === 'videos' && 'Import your brand'}
                  {activeContentType === 'text' && 'Describe your vision'}
                </h3>
                
                <p className="text-[#A0AEC0] text-sm leading-relaxed mb-6">
                  {activeContentType === 'pictures' && 'Simply put your product-url existing photos. Our AI will analyze the style and content.'}
                  {activeContentType === 'videos' && 'Instantly pull in your colors, fonts and style with one product-url, making every video 100% on-brand.'}
                  {activeContentType === 'text' && 'Tell us what kind of content you want to create. Be as specific or general as you like.'}
                </p>

                {/* Step 1 Interface Screenshot */}
                <div className="bg-[#0F1419] rounded-lg p-2 border border-[#2D3748] overflow-hidden">
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
              <div className="bg-[#1A202C] rounded-2xl p-6 border border-[#2D3748] h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#60A5FA]/30">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#60A5FA] to-[#A78BFA] rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#F7FAFC] mb-2">
                  {activeContentType === 'pictures' && 'Select style & format'}
                  {activeContentType === 'videos' && 'Choose video type'}
                  {activeContentType === 'text' && 'Pick content format'}
                </h3>
                
                <p className="text-[#A0AEC0] text-sm leading-relaxed mb-6">
                  {activeContentType === 'pictures' && 'Pick the perfect style and format for your campaign. Put in any text you want to be visible on the image.'}
                  {activeContentType === 'videos' && 'Pick the perfect AI-UGC creator and format for your campaign, our AI will adapt your brand.'}
                  {activeContentType === 'text' && 'Choose from various content formats. Our AI will structure your ideas into the perfect format.'}
                </p>

                {/* Step 2 Interface Screenshot */}
                <div className="bg-[#0F1419] rounded-lg p-2 border border-[#2D3748] overflow-hidden">
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
              <div className="bg-[#1A202C] rounded-2xl p-6 border border-[#2D3748] h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#A78BFA]/30">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#A78BFA] to-[#10B981] rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#F7FAFC] mb-2">
                  {activeContentType === 'pictures' && 'Generate images'}
                  {activeContentType === 'videos' && 'Generate videos'}
                  {activeContentType === 'text' && 'Generate content'}
                </h3>
                
                <p className="text-[#A0AEC0] text-sm leading-relaxed mb-6">
                  {activeContentType === 'pictures' && 'Sit back while our AI produces conversion-focused images faster than it takes to write a headline.'}
                  {activeContentType === 'videos' && 'Sit back while our AI produces conversion-focused videos faster than it takes to write a headline.'}
                  {activeContentType === 'text' && 'Sit back while our AI produces conversion-focused content faster than it takes to brainstorm ideas.'}
                </p>

                {/* Step 3 Interface Screenshot */}
                <div className="bg-[#0F1419] rounded-lg p-2 border border-[#2D3748] overflow-hidden">
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
        <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#0F1419] via-[#161B22] to-[#1A202C]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#F7FAFC] mb-4">
                Simple process,
                <span className="block font-medium bg-gradient-to-r from-[#F6E05E] via-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">powerful results</span>
              </h2>
              <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
                Create professional videos in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Enter Your Content",
                  description: "Simply put in a product-url, choose music, ugc-creator, format and voice.",
                  gradient: "from-[#F6E05E] to-[#F59E0B]"
                },
                {
                  step: "02", 
                  title: "AI Generates Video",
                  description: "Our AI creates professional video with visuals, animations, and effects",
                  gradient: "from-[#60A5FA] to-[#A78BFA]"
                },
                {
                  step: "03",
                  title: "Export & Share",
                  description: "Download in multiple formats optimized for any platform",
                  gradient: "from-[#A78BFA] to-[#10B981]"
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl text-[#111827] text-lg font-bold shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#F7FAFC] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#A0AEC0] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Free Trial CTA within How It Works */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0F1419] via-[#1A202C] to-[#0F1419] border border-[#2D3748] rounded-3xl p-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                  <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wide">Free Account Available</span>
                  <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#F7FAFC] mb-4">
                  Ready to create your first AI video?
                </h3>
                <p className="text-[#A0AEC0] mb-6 max-w-2xl mx-auto">
                  Join thousands of creators who started with a free account. No credit card required, instant access to all features.
                </p>
                <Link href="https://app.lymo.me">
                  <Button className="bg-gradient-to-r from-[#10B981] to-[#60A5FA] hover:from-[#60A5FA] hover:to-[#10B981] text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-[#10B981]/30 transition-all duration-300 transform hover:scale-105 group">
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
        <section className="py-24 bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#161B22] relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#F6E05E]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#60A5FA]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#A78BFA]/3 to-[#F6E05E]/3 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#F6E05E]/10 backdrop-blur-sm border border-[#F6E05E]/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-[#F6E05E] rounded-full animate-pulse"></div>
                <span className="text-[#F6E05E] font-semibold text-sm">GET IN TOUCH</span>
                <div className="w-2 h-2 bg-[#F6E05E] rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7FAFC] mb-6">
                Ready to Transform
                <span className="block bg-gradient-to-r from-[#F6E05E] via-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
                  Your Content?
                </span>
              </h2>
              <p className="text-xl text-[#A0AEC0] max-w-3xl mx-auto leading-relaxed">
                Have questions about our AI platform? Want to discuss enterprise solutions? 
                <span className="text-[#F7FAFC] font-semibold"> We&apos;re here to help you succeed.</span>
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {/* Email Contact Card */}
              <div className="group">
                <div className="bg-[#0F1419]/90 backdrop-blur-xl border border-[#2D3748] rounded-3xl p-8 shadow-2xl hover:shadow-[#F6E05E]/20 transition-all duration-500 hover:scale-105 hover:border-[#F6E05E]/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/5 to-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 text-[#111827]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#F7FAFC] mb-4">Email Us</h3>
                    <p className="text-[#A0AEC0] mb-6 leading-relaxed">
                      Get direct access to our team. We typically respond within 2 hours during business hours.
                    </p>
                    
                    <div className="bg-[#1A202C] rounded-2xl p-4 border border-[#2D3748] group-hover:border-[#F6E05E]/30 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                        <a 
                          href="mailto:lymoadsai@gmail.com" 
                          className="text-[#F6E05E] font-semibold text-lg hover:text-[#F59E0B] transition-colors duration-200 group-hover:underline"
                        >
                          lymoadsai@gmail.com
                        </a>
                    </div>
                      <div className="text-xs text-[#A0AEC0] mt-2 ml-6">
                        ✓ Enterprise inquiries welcome
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ready to Get Started Card */}
              <div className="group">
                <div className="bg-[#0F1419]/90 backdrop-blur-xl border border-[#2D3748] rounded-3xl p-8 shadow-2xl hover:shadow-[#F6E05E]/20 transition-all duration-500 hover:scale-105 hover:border-[#F6E05E]/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/5 to-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-[#111827]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#F7FAFC] mb-4">Ready to Get Started?</h3>
                    <p className="text-[#A0AEC0] mb-6 leading-relaxed">
                      Join thousands of creators already using Lymo AI to transform their content strategy.
                    </p>
                    
                    <div className="flex flex-col gap-3">
                      <Button className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#F6E05E] text-[#111827] font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Start Free Trial
                      </Button>
                      <a href="mailto:lymoadsai@gmail.com">
                        <Button 
                          variant="outline" 
                          className="w-full border-2 border-[#2D3748] bg-transparent hover:bg-[#1A202C] hover:border-[#F6E05E]/50 text-[#F7FAFC] px-6 py-3 rounded-xl transition-all duration-300"
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

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-[#F6E05E] via-[#F59E0B] to-[#60A5FA] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/90 via-[#F59E0B]/90 to-[#60A5FA]/90"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div>
              
              <h2 className="text-3xl md:text-4xl font-light text-[#111827] mb-6">
                Start your free trial
                <span className="block font-medium text-[#0F1419]">and create your first AI video today</span>
              </h2>
              <p className="text-lg text-[#111827]/80 mb-8 max-w-2xl mx-auto">
                The future of marketing is here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="https://app.lymo.me">
                  <Button className="bg-[#0F1419] hover:bg-[#1A202C] text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
                    <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    Try Free Today
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <div className="text-[#111827]/70 text-sm">
                  ✓ Free account • ✓ No credit card • ✓ Instant access
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#161B22] text-[#F7FAFC] py-8 mt-auto border-t border-[#2D3748]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image 
                src="/images/lymologonew.svg.svg" 
                alt="Lymo Logo" 
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex space-x-6 text-sm text-[#A0AEC0]">
              <Link href="/privacy-policy" className="hover:text-[#F6E05E] transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-[#F6E05E] transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-[#F6E05E] transition-colors">Cookie Policy</Link>
              <Link href="mailto:lymoadsai@gmail.com" className="hover:text-[#F6E05E] transition-colors">Support</Link>
            </div>
          </div>
          <div className="border-t border-[#2D3748] mt-8 pt-8 text-center">
            <p className="text-[#A0AEC0] text-sm">
              © 2025 Lymo AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}