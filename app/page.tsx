'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { VideoCard } from "@/components/ui/video-card"
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { Play, ArrowRight, Sparkles, Zap, Target, Users, BarChart3, CheckCircle, Quote, Image as ImageIcon, Video, FileText, Upload, Wand2, TrendingUp } from "lucide-react"
import { DynamicWaitlist } from "@/components/ui/dynamic-waitlist"
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
      {/* Professional Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]/95 backdrop-blur-sm border-b border-[#2D3748] shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-4">
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
                
                <Button 
                  onClick={() => {
                    const waitlistElement = document.querySelector('.launchlist-widget');
                    if (waitlistElement) {
                      waitlistElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  size="sm" 
                  className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#F6E05E] text-[#111827] font-semibold text-sm px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t.nav.signIn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Billion Dollar SaaS Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#161B22] flex items-center justify-center overflow-hidden">
          {/* Premium Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#F6E05E]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#60A5FA]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#F6E05E]/5 to-[#A78BFA]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">
                {/* Trust Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2 bg-[#0F1419]/80 backdrop-blur-sm border border-[#2D3748] rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                    <span className="text-sm text-[#A0AEC0]">50,000+ creators</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#F6E05E] text-sm">★★★★★</span>
                    <span className="text-xs text-[#A0AEC0]">4.9/5</span>
                  </div>
                </div>
                
                {/* Main Headlines */}
                <div className="space-y-6">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] text-[#F7FAFC]">
                    Create Viral
                    <span className="block bg-gradient-to-r from-[#F6E05E] via-[#F59E0B] to-[#60A5FA] bg-clip-text text-transparent">
                      AI Content
                    </span>
                    <span className="block text-4xl sm:text-5xl lg:text-6xl">
                      <RotatingText 
                        texts={["in Seconds", "That Converts", "That Scales", "That Sells"]}
                        interval={2500}
                      />
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-[#A0AEC0] leading-relaxed max-w-2xl">
                    Transform any product photo into professional videos, ads, and campaigns. 
                    <span className="text-[#F7FAFC] font-semibold"> Join the AI revolution</span> that&apos;s changing content creation forever.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#F6E05E] text-[#111827] font-bold text-xl px-10 py-7 rounded-2xl shadow-2xl hover:shadow-[#F6E05E]/30 transition-all duration-300 transform hover:scale-105 group">
                      <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                      Start Creating Free
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-2 border-[#2D3748] bg-[#0F1419]/80 backdrop-blur-sm hover:bg-[#1A202C] hover:border-[#F6E05E]/50 text-[#F7FAFC] text-xl px-10 py-7 rounded-2xl transition-all duration-300 group"
                    >
                      <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                      Watch Demo
                    </Button>
                  </div>

                  {/* Social Proof */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
                    <div className="flex items-center gap-2 text-sm text-[#A0AEC0]">
                      <CheckCircle className="w-5 h-5 text-[#10B981]" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#A0AEC0]">
                      <CheckCircle className="w-5 h-5 text-[#10B981]" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#A0AEC0]">
                      <CheckCircle className="w-5 h-5 text-[#10B981]" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Visual Showcase */}
              <div className="relative">
                {/* Floating Performance Cards */}
                <div className="absolute -top-8 -left-8 z-30 hidden lg:block">
                  <div className="bg-[#0F1419]/95 backdrop-blur-xl border border-[#2D3748] rounded-2xl p-5 shadow-2xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#60A5FA] rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#F7FAFC]">Lightning Fast</div>
                        <div className="text-xs text-[#10B981]">Generated in 8.2s</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 z-30 hidden lg:block">
                  <div className="bg-[#0F1419]/95 backdrop-blur-xl border border-[#2D3748] rounded-2xl p-5 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#111827]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#F7FAFC]">+347% Engagement</div>
                        <div className="text-xs text-[#F6E05E]">vs traditional content</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Product Interface */}
                <div className="relative bg-[#0F1419]/90 backdrop-blur-xl border border-[#2D3748] rounded-3xl p-6 shadow-2xl max-w-xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/8 to-[#60A5FA]/8 rounded-3xl"></div>
                  
                  {/* Browser Header */}
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#EF4444] rounded-full"></div>
                      <div className="w-4 h-4 bg-[#F59E0B] rounded-full"></div>
                      <div className="w-4 h-4 bg-[#10B981] rounded-full"></div>
                    </div>
                    <div className="text-sm text-[#A0AEC0] bg-[#1A202C] px-4 py-2 rounded-full border border-[#2D3748]">
                      lymo.ai/create
                    </div>
                  </div>

                  {/* Content Creation Flow */}
                  <div className="space-y-6">
                    {/* Upload Section */}
                    <div className="bg-[#1A202C] rounded-2xl p-5 border border-[#2D3748] group hover:border-[#F6E05E]/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-lg flex items-center justify-center">
                          <Upload className="w-4 h-4 text-[#111827]" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-[#F7FAFC]">Upload Product</span>
                          <div className="text-xs text-[#A0AEC0]">Watch AI transformation in real-time</div>
                        </div>
                      </div>
                      
                      <div className="aspect-[3/2] bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-xl border-2 border-dashed border-[#4A5568] flex items-center justify-center relative overflow-hidden group cursor-pointer">
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
                        
                        {/* AI Processing Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F6E05E]/20 via-transparent to-[#60A5FA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Scanning Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#F6E05E] to-transparent animate-pulse"></div>
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="text-xs text-white font-medium">cosmetic-product.jpg</div>
                          <div className="w-full bg-[#F6E05E] h-1.5 rounded-full mt-2 shadow-lg">
                            <div className="bg-gradient-to-r from-[#F6E05E] to-[#10B981] h-1.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI Results Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Video Output */}
                      <div className="bg-[#1A202C] rounded-2xl p-4 border border-[#2D3748] group hover:border-[#60A5FA]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#60A5FA]/10 hover:scale-105">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] rounded-lg flex items-center justify-center">
                            <Video className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-semibold text-[#F7FAFC] block">AI Video</span>
                            <div className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full inline-block animate-pulse">Live Preview</div>
                          </div>
                        </div>
                        
                        <div className="aspect-video bg-gradient-to-br from-[#60A5FA]/20 to-[#A78BFA]/20 rounded-lg border border-[#60A5FA]/30 flex items-center justify-center relative overflow-hidden cursor-pointer">
                          {/* Animated Video Preview Background */}
                          <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/10 to-[#A78BFA]/10 animate-pulse"></div>
                            <div className="absolute top-2 left-2 w-2 h-2 bg-[#60A5FA] rounded-full animate-ping"></div>
                            <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#A78BFA] rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                          
                          {/* Interactive Play Button */}
                          <div className="relative z-10 bg-white/95 rounded-full p-2 shadow-xl group-hover:scale-125 group-hover:bg-white transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#60A5FA]/50">
                            <Play className="w-4 h-4 text-[#60A5FA] group-hover:text-[#A78BFA] transition-colors" />
                          </div>
                          
                          {/* Pulse Rings */}
                          <div className="absolute inset-0 rounded-lg border-2 border-[#60A5FA]/0 group-hover:border-[#60A5FA]/50 group-hover:animate-ping transition-all duration-300"></div>
                          <div className="absolute inset-2 rounded-lg border border-[#A78BFA]/0 group-hover:border-[#A78BFA]/30 group-hover:animate-pulse transition-all duration-300" style={{ animationDelay: '0.2s' }}></div>
                          
                          {/* Video Stats Overlay */}
                          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs text-white font-medium">2.1M views</span>
                          </div>
                        </div>
                        
                        <div className="mt-2 text-center">
                          <div className="text-xs text-[#A0AEC0]">Generated in <span className="text-[#F6E05E] font-semibold animate-pulse">8.2s</span></div>
                        </div>
                      </div>

                      {/* Images Output */}
                      <div className="bg-[#1A202C] rounded-2xl p-4 border border-[#2D3748] group hover:border-[#F6E05E]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F6E05E]/10 hover:scale-105">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-lg flex items-center justify-center">
                            <ImageIcon className="w-3 h-3 text-[#111827]" />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-semibold text-[#F7FAFC] block">AI Images</span>
                            <div className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full inline-block animate-pulse">4 Variants</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group/img relative">
                            <Image 
                              src="/images/1.jpg" 
                              alt="AI Generated" 
                              width={80} 
                              height={80} 
                              className="w-full h-full object-cover group-hover:scale-110 group/img:scale-125 group/img:rotate-2 transition-all duration-500"
                            />
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/0 to-[#F59E0B]/0 group/img:from-[#F6E05E]/20 group/img:to-[#F59E0B]/20 transition-all duration-300 rounded-lg"></div>
                          </div>
                          <div className="aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group/img relative">
                            <Image 
                              src="/images/2.jpg" 
                              alt="AI Generated" 
                              width={80} 
                              height={80} 
                              className="w-full h-full object-cover group-hover:scale-110 group/img:scale-125 group/img:-rotate-2 transition-all duration-500"
                            />
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/0 to-[#F59E0B]/0 group/img:from-[#F6E05E]/20 group/img:to-[#F59E0B]/20 transition-all duration-300 rounded-lg"></div>
                          </div>
                        </div>
                        
                        <div className="mt-2 text-center">
                          <div className="text-xs text-[#A0AEC0]">4 variants • <span className="text-[#F6E05E] font-semibold animate-pulse">12.1s</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Live Processing Status with Animation */}
                    <div className="bg-[#1A202C] rounded-xl p-3 border border-[#2D3748] group hover:border-[#10B981]/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-[#F7FAFC]">AI Processing Status</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                          <span className="text-xs text-[#10B981] font-semibold animate-pulse">Complete</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#2D3748] rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#F6E05E] via-[#60A5FA] to-[#10B981] h-2 rounded-full relative" style={{ width: '100%' }}>
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#2D3748] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#F6E05E] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Product Transformation Showcase */}
        <ProductTransformationShowcase />

        {/* AI Video Creation Interface Showcase */}
        <section className="py-24 bg-gradient-to-br from-[#1A202C] via-[#2D3748] to-[#1A202C]">
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
                  {/* Interface Preview Photo */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-2xl overflow-hidden mb-6 border-2 border-[#2D3748]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-[#A0AEC0] mx-auto mb-2" />
                        <div className="text-sm text-[#F7FAFC] font-medium">Avatar Marketing Interface</div>
                        <div className="text-xs text-[#A0AEC0]">Upload your screenshot here</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#F7FAFC] mb-2">Avatar Marketing Video</h3>
                    <p className="text-[#A0AEC0] text-sm">
                      AI generates marketing videos with realistic avatars and professional presentation
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

        {/* AI Video Generation Showcase */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Avatar Marketing Video */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 hover:border-[#F4D03F]/50 transition-all duration-500 hover:scale-105">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F4D03F]/10 to-[#F1C40F]/10 mb-6">
                    {/* Video Preview */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </div>
                    
                    {/* Floating UI Elements */}
                    <div className="absolute top-4 left-4 bg-[#F4D03F] rounded-full px-3 py-1">
                      <span className="text-xs font-bold text-gray-900">AI Avatar</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                      <span className="text-xs text-white">00:45</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                      <span className="text-xs text-white">Marketing Video</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">Avatar Marketing</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      AI avatars present your products with realistic human engagement and professional delivery
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span>✨ Realistic AI Presenter</span>
                      <span>🎯 Brand Focused</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Showcase Video */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 hover:border-[#F4D03F]/50 transition-all duration-500 hover:scale-105">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F4D03F]/10 to-[#F1C40F]/10 mb-6">
                    {/* Video Preview */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </div>
                    
                    {/* Product Elements */}
                    <div className="absolute top-4 left-4 bg-orange-500 rounded-full px-3 py-1">
                      <span className="text-xs font-bold text-white">Product Demo</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                      <span className="text-xs text-white">01:20</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-green-500 rounded-full px-2 py-1">
                      <span className="text-xs font-bold text-white">VIRAL</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">Product Showcase</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Transform any product into stunning video content perfect for social media and advertising
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span>📱 Social Ready</span>
                      <span>🚀 Viral Potential</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Character Transformation */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 hover:border-[#F4D03F]/50 transition-all duration-500 hover:scale-105">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F4D03F]/10 to-[#F1C40F]/10 mb-6">
                    {/* Video Preview */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </div>
                    
                    {/* Character Elements */}
                    <div className="absolute top-4 left-4 bg-pink-500 rounded-full px-3 py-1">
                      <span className="text-xs font-bold text-white">AI Transform</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                      <span className="text-xs text-white">00:30</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-purple-500 rounded-full px-2 py-1">
                      <span className="text-xs font-bold text-white">TRENDING</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">Character Swap</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Replace anyone in videos with custom characters while maintaining natural movement and expressions
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span>🎭 Face Swap</span>
                      <span>⚡ Instant Results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                100% AI-Generated Marketing Videos
              </h3>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of creators and brands using Lymo AI to produce viral content that converts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] hover:from-[#F1C40F] hover:to-[#D4AC0D] text-gray-900 font-bold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg transform hover:scale-105">
                  Start Creating Videos
                </Button>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No credit card required</span>
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
                  {activeContentType === 'pictures' && 'Simply drag and drop your product images or existing photos. Our AI will analyze the style and content.'}
                  {activeContentType === 'videos' && 'Instantly pull in your logo, colors, fonts and style with one click, making every video 100% on-brand.'}
                  {activeContentType === 'text' && 'Tell us what kind of content you want to create. Be as specific or general as you like.'}
                </p>

                {/* Professional Step Mockup */}
                <div className="bg-[#0F1419] rounded-lg p-4 border border-[#2D3748]">
                  {activeContentType === 'pictures' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Upload className="w-4 h-4 text-[#F6E05E]" />
                        <span className="text-[#F7FAFC] text-sm font-medium">Drop images here</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-gradient-to-br from-[#F6E05E]/20 to-[#F59E0B]/20 rounded border border-[#F6E05E]/30"></div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeContentType === 'videos' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[#F7FAFC] text-sm">URL</span>
                        <Button size="sm" className="bg-[#F6E05E] hover:bg-[#F59E0B] text-[#111827] text-xs">
                          Import Brand
                        </Button>
                      </div>
                      <div className="bg-[#1A202C] rounded p-3 border border-[#2D3748]">
                        <div className="text-[#F7FAFC] text-sm">Brand Name: Lymo AI</div>
                        <div className="text-[#A0AEC0] text-xs mt-1">Colors, fonts, and style detected</div>
                      </div>
                    </div>
                  )}
                  
                  {activeContentType === 'text' && (
                    <div className="space-y-3">
                      <div className="bg-[#1A202C] rounded p-3 border border-[#2D3748]">
                        <div className="text-[#A0AEC0] text-xs mb-2">Your prompt</div>
                        <div className="text-[#F7FAFC] text-sm">
                          &ldquo;Create engaging social media content for a tech startup launch...&rdquo;
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wand2 className="w-4 h-4 text-[#F6E05E]" />
                        <span className="text-[#F6E05E] text-sm">AI analyzing...</span>
                      </div>
                    </div>
                  )}
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
                  {activeContentType === 'pictures' && 'Pick the perfect style and format for your campaign. Our AI will adapt your images into any style you need.'}
                  {activeContentType === 'videos' && 'Pick the perfect format for your campaign and our AI will adapt your brand into any video style you need.'}
                  {activeContentType === 'text' && 'Choose from various content formats. Our AI will structure your ideas into the perfect format.'}
                </p>

                {/* Step 2 Mockup */}
                <div className="bg-[#0F1419] rounded-lg p-4 border border-[#2D3748]">
                  <div className="space-y-4">
                    <div className="text-[#60A5FA] text-sm font-medium">
                      {activeContentType === 'pictures' && 'Most Popular Styles For Your Images'}
                      {activeContentType === 'videos' && 'Most Popular Video Types For Your Brand'}
                      {activeContentType === 'text' && 'Recommended Content Types'}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-[4/3] bg-gradient-to-br from-[#60A5FA]/20 to-[#A78BFA]/20 rounded-lg border border-[#60A5FA]/20"></div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-[#2D3748] rounded-lg p-3 text-center">
                        <div className="text-[#F7FAFC] text-sm">
                          {activeContentType === 'pictures' && 'Product Photos'}
                          {activeContentType === 'videos' && 'Social Videos'}
                          {activeContentType === 'text' && 'Blog Posts'}
                        </div>
                      </div>
                      <div className="flex-1 bg-[#2D3748] rounded-lg p-3 text-center">
                        <div className="text-[#F7FAFC] text-sm">
                          {activeContentType === 'pictures' && 'Lifestyle'}
                          {activeContentType === 'videos' && 'Ads'}
                          {activeContentType === 'text' && 'Social Posts'}
                        </div>
                      </div>
                    </div>
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

                {/* Step 3 Mockup */}
                <div className="bg-[#0F1419] rounded-lg p-4 border border-[#2D3748]">
                  <div className="space-y-4">
                    <div className="text-[#A78BFA] text-sm font-medium">
                      AI Generated {activeContentType === 'pictures' ? 'Images' : activeContentType === 'videos' ? 'Videos' : 'Content'}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="aspect-square bg-gradient-to-br from-[#A78BFA]/20 to-[#10B981]/20 rounded-lg border border-[#A78BFA]/30 flex items-center justify-center">
                          {activeContentType === 'pictures' && <ImageIcon className="w-8 h-8 text-[#A78BFA]" />}
                          {activeContentType === 'videos' && <Video className="w-8 h-8 text-[#A78BFA]" />}
                          {activeContentType === 'text' && <FileText className="w-8 h-8 text-[#A78BFA]" />}
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#10B981]/20 rounded-lg p-3 border border-[#10B981]/30">
                      <div className="text-[#10B981] text-sm font-medium">✓ Ready to download</div>
                      <div className="text-[#10B981] text-xs">Generated in 15 seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-br from-[#1A202C] via-[#0F1419] to-[#161B22]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#F7FAFC] mb-4">
                Everything you need to create
                <span className="block font-medium bg-gradient-to-r from-[#F6E05E] via-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
                  converting video content
                </span>
              </h2>
              <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
                Professional video creation tools powered by advanced AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Generate videos in under 60 seconds",
                  gradient: "from-[#F6E05E] to-[#F59E0B]"
                },
                {
                  icon: Target,
                  title: "AI Optimization",
                  description: "Smart algorithms for maximum engagement",
                  gradient: "from-[#60A5FA] to-[#A78BFA]"
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Real-time collaboration tools",
                  gradient: "from-[#A78BFA] to-[#F6E05E]"
                },
                {
                  icon: BarChart3,
                  title: "Analytics",
                  description: "Detailed performance insights",
                  gradient: "from-[#10B981] to-[#60A5FA]"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-[#0F1419] rounded-2xl p-6 border border-[#2D3748] h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#F6E05E]/30 group">
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-[#111827]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#F7FAFC] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#A0AEC0] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
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
                  description: "Simply describe your video concept or paste your marketing copy",
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
                Ready to transform your
                <span className="block font-medium text-[#0F1419]">content creation?</span>
              </h2>
              <p className="text-lg text-[#111827]/80 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already making high-converting videos with AI
              </p>
              <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#0F1419]/20 shadow-2xl">
                <DynamicWaitlist 
                  showTitle={true}
                  title="Unlock Early Access to Lymo AI"
                  description="Get priority entry and exclusive updates."
                  height="150px"
                />
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