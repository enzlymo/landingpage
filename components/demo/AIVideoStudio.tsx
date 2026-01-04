'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play, Upload, ChevronDown, Sparkles } from 'lucide-react'

export function AIVideoStudio() {
  return (
    <section className="artlist-section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            AI Video Studio
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Create professional videos in seconds
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Transform any product URL into engaging video content with AI avatars and professional delivery
          </p>
        </div>

        {/* Demo Interface - Full Width */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* App Interface Mockup */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* App Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-lg text-gray-700 font-semibold">AI Video Studio</div>
                <div className="w-16"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-8 lg:p-12">
              {/* Step Indicator */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</div>
                    <span className="text-blue-600 font-semibold text-lg">Product Info</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-gray-500 font-medium">Customize</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-gray-500 font-medium">Complete</span>
                  </div>
                </div>
              </div>

              {/* Product URL Input */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-800 mb-4">Product URL</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="https://amazon.com/product/xyz or any product URL..."
                    className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white text-lg transition-all duration-200"
                    readOnly
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Upload className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Platform Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-800 mb-4">Try with popular platforms:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {['Amazon', 'Shopify', 'Etsy', 'eBay'].map((platform) => (
                    <button
                      key={platform}
                      className="px-6 py-3 border-2 border-gray-200 rounded-xl text-base font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Style Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-800 mb-4">Choose Style:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'Avatar', icon: '👤', selected: true },
                    { name: 'Product Demo', icon: '📱', selected: false },
                    { name: 'Viral Content', icon: '🚀', selected: false }
                  ].map((style) => (
                    <button
                      key={style.name}
                      className={`p-6 border-2 rounded-2xl text-center transition-all duration-200 ${
                        style.selected 
                          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg' 
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700'
                      }`}
                    >
                      <div className="text-3xl mb-3">{style.icon}</div>
                      <div className="text-base font-semibold">{style.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice and Music Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-3">Voice:</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white text-gray-700 appearance-none text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                      <option>Sarah (Professional)</option>
                      <option>Mike (Energetic)</option>
                      <option>Emma (Friendly)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-3">Music:</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white text-gray-700 appearance-none text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                      <option>Upbeat Commercial</option>
                      <option>Corporate</option>
                      <option>Trendy Pop</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <Link href="https://app.lymo.me" className="block">
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-gray-900 font-bold text-xl py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Generate for Free
                </Button>
              </Link>

              {/* Info Text */}
              <p className="text-center text-base text-gray-600 mt-6 font-medium">
                ✓ No credit card required • ✓ Instant access • ✓ Professional quality
              </p>
            </div>
          </div>
        </div>

        {/* Video Showcase Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">See AI in Action</h3>
            <p className="text-lg text-gray-600">Real videos created by our AI Video Studio</p>
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Avatar Marketing Video */}
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
                >
                  <video 
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    muted
                    loop
                    playsInline
                    poster="/images/Skärmbild 2025-10-27 224821.png"
                    preload="metadata"
                    controls={false}
                  >
                    <source src="/images/bb97578d-a267-45ea-bd5b-1c0be429465b.mp4" type="video/mp4" />
                  </video>
                  
                  <div className="absolute top-2 left-2 bg-yellow-400 rounded-full px-2 py-1">
                    <span className="text-xs font-bold text-gray-900">AI Avatar</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                    <span className="text-xs text-white">00:45</span>
                  </div>
                  
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white font-medium flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      Playing
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">Avatar Marketing</h4>
                  <p className="text-gray-600">
                    AI avatars present your products with realistic human engagement
                  </p>
                </div>
              </div>
            </div>

            {/* Product Demo Video */}
            <div className="group relative">
              <div className="artlist-card hover:border-orange-200 transition-all duration-300">
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
                >
                  <video 
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    muted
                    loop
                    playsInline
                    poster="/images/Skärmbild 2025-10-27 224722.png"
                    preload="metadata"
                    controls={false}
                  >
                    <source src="/images/3bff4339-9711-438d-9995-952e23d2b626.mp4" type="video/mp4" />
                  </video>
                  
                  <div className="absolute top-2 left-2 bg-orange-500 rounded-full px-2 py-1">
                    <span className="text-xs font-bold text-white">Product Demo</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                    <span className="text-xs text-white">00:22</span>
                  </div>
                  
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white font-medium flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      Playing
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">Chloe AI-UGC</h4>
                  <p className="text-gray-600">
                    Transform any product URL into stunning video content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}