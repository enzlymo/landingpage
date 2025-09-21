'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { VideoCard } from "@/components/ui/video-card"
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { Play, ArrowRight, Sparkles, Zap, Target, Users, BarChart3, CheckCircle, Quote, Image as ImageIcon, Video, FileText, Upload, Wand2 } from "lucide-react"
import { DynamicWaitlist } from "@/components/ui/dynamic-waitlist"
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
    return <div className="min-h-screen bg-white"></div>
  }
  
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900 pb-16">
        {/* Professional Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center justify-center">
                <Image 
                  src="/images/lymo-logo.png" 
                  alt="Lymo Logo" 
                  width={36}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
              
              <nav className="hidden md:flex items-center space-x-8">
                {[
                  { key: 'features', label: t.nav.features },
                  { key: 'how-it-works', label: t.nav.howItWorks },
                  { key: 'pricing', label: t.nav.pricing }
                ].map((item) => (
                  <Link 
                    key={item.key}
                    href={`#${item.key}`}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
                
                {/* Premium Language Switcher */}
                <div className="flex items-center ml-6">
                  <div className="relative bg-gray-100 rounded-full p-1">
                    <div className="flex items-center">
                      <button
                        onClick={() => switchLocale('en')}
                        className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                          locale === 'en' 
                            ? 'bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => switchLocale('sv')}
                        className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                          locale === 'sv' 
                            ? 'bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
                  <div className="relative bg-gray-100 rounded-full p-0.5">
                    <div className="flex items-center">
                      <button
                        onClick={() => switchLocale('en')}
                        className={`relative px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                          locale === 'en' 
                            ? 'bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => switchLocale('sv')}
                        className={`relative px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                          locale === 'sv' 
                            ? 'bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
                  className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] hover:from-[#F1C40F] hover:to-[#F4D03F] text-gray-900 font-semibold text-sm px-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {t.nav.signIn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Professional Hero Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F4D03F]/10 to-[#F1C40F]/10 border border-[#F4D03F]/20 text-gray-900 rounded-full text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4 text-[#F4D03F]" />
                {t.hero.badge}
              </div>

              {/* Professional Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6 text-gray-900">
                {t.hero.title}{' '}
                <span className="bg-gradient-to-r from-[#F4D03F] via-[#F1C40F] to-[#FF6633] bg-clip-text text-transparent font-medium">
                  {t.hero.titleHighlight}
                </span>{' '}
                {t.hero.titleEnd}
              </h1>

              {/* Professional Subtitle */}
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                {t.hero.subtitle}
              </p>

              {/* Professional CTA Section */}
              <div className="flex flex-col items-center gap-8">
                {/* Professional Waitlist Widget */}
                <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <DynamicWaitlist 
                    showTitle={true}
                    title={t.hero.waitlistTitle}
                    description={t.hero.waitlistDescription}
                    height="160px" 
                  />
                </div>

                {/* Professional Social Proof */}
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-gray-900">1,000+</span>
                    <span className="text-gray-600 ml-1">{t.hero.socialProof}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Media Showcase */}
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[#F4D03F] uppercase tracking-wide mb-3">
                {t.hero.showcaseTitle}
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                {t.hero.showcaseSubtitle}
              </h3>
            </div>
                
            {/* Professional Layout: 1 Center Video + 2 Side Images */}
            <div className="flex items-center justify-center gap-8 px-4">
              {/* Left Card */}
              <div className="hidden lg:block relative group">
                <div className="w-80 h-96 bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-xl mb-4"></div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">URL to Video</h4>
                      <p className="text-gray-600 text-sm">Transform any product page into engaging video content in seconds.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#F4D03F] rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <div className="text-gray-900 text-sm font-medium">2.4M views</div>
                          <div className="text-gray-600 text-xs">Product Demo</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Video (Main) */}
              <div className="relative group">
                <div className="w-[320px] h-[480px] bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
                  <VideoCard
                    poster="/images/photo-2.jpg"
                    title="AI-Generated UGC Content"
                    stats={{ views: "1.2M", likes: "45k" }}
                    overlay={{ text: "AI CREATOR", position: "center" }}
                    className="w-full h-full rounded-3xl border-0"
                  />
                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Right Card */}
              <div className="hidden lg:block relative group">
                <div className="w-80 h-96 bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-[#F4D03F] rounded-xl mb-4"></div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Social Media Magic</h4>
                      <p className="text-gray-600 text-sm">Create viral social content that drives engagement and conversions.</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                          <Target className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-900 text-sm font-medium">890K views</div>
                          <div className="text-gray-600 text-xs">Social Campaign</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional 3-Steps Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                3 easy steps to create your{' '}
                <span className="bg-gradient-to-r from-[#F4D03F] via-[#F1C40F] to-[#FF6633] bg-clip-text text-transparent font-medium">
                  studio-quality content
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Create your content in 3 quick steps. Get professional results before you start.
              </p>
            </div>

            {/* Professional Content Type Switcher */}
            <div className="flex justify-center mb-16">
              <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-sm w-full max-w-2xl">
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
                          ? 'bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
              <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-gray-900 font-bold text-lg">1</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activeContentType === 'pictures' && 'Upload your images'}
                  {activeContentType === 'videos' && 'Import your brand'}
                  {activeContentType === 'text' && 'Describe your vision'}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {activeContentType === 'pictures' && 'Simply drag and drop your product images or existing photos. Our AI will analyze the style and content.'}
                  {activeContentType === 'videos' && 'Instantly pull in your logo, colors, fonts and style with one click, making every video 100% on-brand.'}
                  {activeContentType === 'text' && 'Tell us what kind of content you want to create. Be as specific or general as you like.'}
                </p>

                {/* Professional Step Mockup */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  {activeContentType === 'pictures' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Upload className="w-4 h-4 text-[#F4D03F]" />
                        <span className="text-gray-700 text-sm font-medium">Drop images here</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-gradient-to-br from-[#F4D03F]/20 to-[#F1C40F]/20 rounded border border-[#F4D03F]/30"></div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeContentType === 'videos' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm">URL</span>
                        <Button size="sm" className="bg-[#F4D03F] hover:bg-[#F1C40F] text-gray-900 text-xs">
                          Import Brand
                        </Button>
                      </div>
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <div className="text-gray-900 text-sm">Brand Name: Lymo AI</div>
                        <div className="text-gray-500 text-xs mt-1">Colors, fonts, and style detected</div>
                      </div>
                    </div>
                  )}
                  
                  {activeContentType === 'text' && (
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <div className="text-gray-500 text-xs mb-2">Your prompt</div>
                        <div className="text-gray-900 text-sm">
                          &ldquo;Create engaging social media content for a tech startup launch...&rdquo;
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wand2 className="w-4 h-4 text-[#F4D03F]" />
                        <span className="text-[#F4D03F] text-sm">AI analyzing...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F1C40F] to-orange-500 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-gray-900 font-bold text-lg">2</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activeContentType === 'pictures' && 'Select style & format'}
                  {activeContentType === 'videos' && 'Choose video type'}
                  {activeContentType === 'text' && 'Pick content format'}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {activeContentType === 'pictures' && 'Pick the perfect style and format for your campaign. Our AI will adapt your images into any style you need.'}
                  {activeContentType === 'videos' && 'Pick the perfect format for your campaign and our AI will adapt your brand into any video style you need.'}
                  {activeContentType === 'text' && 'Choose from various content formats. Our AI will structure your ideas into the perfect format.'}
                </p>

                {/* Step 2 Mockup */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="space-y-4">
                    <div className="text-[#F4D03F] text-sm font-medium">
                      {activeContentType === 'pictures' && 'Most Popular Styles For Your Images'}
                      {activeContentType === 'videos' && 'Most Popular Video Types For Your Brand'}
                      {activeContentType === 'text' && 'Recommended Content Types'}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-[4/3] bg-gradient-to-br from-[#F4D03F]/20 to-orange-500/20 rounded-lg border border-[#F4D03F]/20"></div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-gray-700 text-sm">
                          {activeContentType === 'pictures' && 'Product Photos'}
                          {activeContentType === 'videos' && 'Social Videos'}
                          {activeContentType === 'text' && 'Blog Posts'}
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-gray-700 text-sm">
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
              <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg mb-4">
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

                {/* Step 3 Mockup */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="space-y-4">
                    <div className="text-[#F4D03F] text-sm font-medium">
                      AI Generated {activeContentType === 'pictures' ? 'Images' : activeContentType === 'videos' ? 'Videos' : 'Content'}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="aspect-square bg-gradient-to-br from-orange-500/20 to-[#F4D03F]/20 rounded-lg border border-orange-400/30 flex items-center justify-center">
                          {activeContentType === 'pictures' && <ImageIcon className="w-8 h-8 text-[#F4D03F]" />}
                          {activeContentType === 'videos' && <Video className="w-8 h-8 text-[#F4D03F]" />}
                          {activeContentType === 'text' && <FileText className="w-8 h-8 text-[#F4D03F]" />}
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                      <div className="text-green-600 text-sm font-medium">✓ Ready to download</div>
                      <div className="text-green-500 text-xs">Generated in 15 seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Everything you need to create
                <span className="block font-medium bg-gradient-to-r from-[#F4D03F] via-[#F1C40F] to-[#FF6633] bg-clip-text text-transparent">
                  converting video content
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional video creation tools powered by advanced AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Generate videos in under 60 seconds"
                },
                {
                  icon: Target,
                  title: "AI Optimization",
                  description: "Smart algorithms for maximum engagement"
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Real-time collaboration tools"
                },
                {
                  icon: BarChart3,
                  title: "Analytics",
                  description: "Detailed performance insights"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-xl flex items-center justify-center shadow-lg">
                      <feature.icon className="h-6 w-6 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Simple process,
                <span className="block font-medium">powerful results</span>
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
                  description: "Simply describe your video concept or paste your marketing copy"
                },
                {
                  step: "02", 
                  title: "AI Generates Video",
                  description: "Our AI creates professional video with visuals, animations, and effects"
                },
                {
                  step: "03",
                  title: "Export & Share",
                  description: "Download in multiple formats optimized for any platform"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-2xl text-gray-900 text-lg font-bold shadow-lg mb-6">
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
          </div>
        </section>

        {/* Pricing with Waitlist */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Simple, transparent
                <span className="block font-medium">pricing</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join the waitlist for exclusive early access pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  period: "/month",
                  description: "Perfect for individuals and small teams",
                  features: [
                    "10 videos per month",
                    "HD video quality",
                    "Basic templates",
                    "Email support"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$99",
                  period: "/month",
                  description: "For growing businesses and agencies",
                  features: [
                    "Unlimited videos",
                    "4K video quality",
                    "Premium templates",
                    "Priority support",
                    "Custom branding"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "For large organizations with custom needs",
                  features: [
                    "Everything in Professional",
                    "Dedicated account manager",
                    "Custom integrations",
                    "Advanced analytics",
                    "SLA guarantee"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 border-2 ${
                    plan.popular 
                      ? 'border-[#F4D03F] bg-gradient-to-b from-[#F4D03F]/5 to-white shadow-xl' 
                      : 'border-gray-200 bg-white shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-light text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-600">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm mb-6 text-gray-600">
                      {plan.description}
                    </p>
                    <div className="w-full mb-6">
                      <DynamicWaitlist height="120px" />
                    </div>
                    <ul className="text-left space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-3 text-[#F4D03F]" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Ready to transform your
                <span className="block font-medium">content creation?</span>
              </h2>
              <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already making high-converting videos with AI
              </p>
              <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-900/20 shadow-xl">
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
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image 
                src="/images/lymo-logo.png" 
                alt="Lymo Logo" 
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lymo AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}