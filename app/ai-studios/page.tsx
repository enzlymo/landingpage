'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Sparkles } from 'lucide-react'

export default function AIStudiosPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="artlist-section-padding bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              AI Studios
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete AI-powered content creation suite. 
              <br />
              Create videos, images, and more with professional quality.
            </p>
            <a href="https://app.lymo.me">
              <button className="artlist-btn-primary text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                Start Creating Now
              </button>
            </a>
          </div>
        </section>

        {/* Professional AI Studio */}
        <section className="artlist-section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Professional AI Studio
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                Complete content creation suite for professionals
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Transform any product into professional videos and images with our unified AI-powered platform
              </p>
            </div>

            {/* Professional Studio Interface */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* App Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-lg text-gray-700 font-semibold">Professional AI Studio</div>
                    <div className="w-16"></div>
                  </div>
                </div>

                {/* Studio Content */}
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Video Creation */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg">🎬</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">AI Video Creation</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Product URL</label>
                          <input
                            type="text"
                            placeholder="https://amazon.com/product/xyz or any product URL..."
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-gray-50"
                            readOnly
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Style</label>
                            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-700">
                              <option>👤 Avatar</option>
                              <option>📱 Product Demo</option>
                              <option>🚀 Viral Content</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Voice</label>
                            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-700">
                              <option>Sarah (Professional)</option>
                              <option>David (Casual)</option>
                              <option>Emma (Energetic)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image Creation */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg">🎨</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">AI Image Creation</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Describe your image</label>
                          <textarea
                            placeholder="e.g., A professional product photo of a sleek wireless headphone on a minimalist white background, soft studio lighting..."
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-gray-50 resize-none h-24"
                            readOnly
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Model</label>
                            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-700">
                              <option>FLUX Pro (Recommended)</option>
                              <option>DALL-E 3</option>
                              <option>Midjourney</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Quality</label>
                            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-700">
                              <option>Professional (8K)</option>
                              <option>High (4K)</option>
                              <option>Standard (2K)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <div className="mt-12 text-center">
                    <a href="https://app.lymo.me" className="inline-block">
                      <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-gray-900 font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                        <Sparkles className="w-6 h-6 inline mr-3" />
                        Create Professional Content
                      </button>
                    </a>
                    
                    {/* Info Text */}
                    <p className="text-center text-base text-gray-600 mt-6 font-medium">
                      ✓ No credit card required • ✓ Instant access • ✓ Professional quality • ✓ Commercial license
                    </p>
                  </div>
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
                <img 
                  src="/Framedark.svg" 
                  alt="Lymo Logo" 
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
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
                <a href="/ai-video" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Video</a>
                <a href="/ai-image" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Image</a>
                <a href="/ai-studios" className="block text-gray-600 hover:text-yellow-600 transition-colors">AI Studios</a>
                <a href="/pricing" className="block text-gray-600 hover:text-yellow-600 transition-colors">Pricing</a>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Support</h4>
              <div className="space-y-3">
                <a href="mailto:lymoadsai@gmail.com" className="block text-gray-600 hover:text-yellow-600 transition-colors">Contact</a>
                <a href="/privacy-policy" className="block text-gray-600 hover:text-yellow-600 transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="block text-gray-600 hover:text-yellow-600 transition-colors">Terms of Service</a>
                <a href="/cookie-policy" className="block text-gray-600 hover:text-yellow-600 transition-colors">Cookie Policy</a>
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
