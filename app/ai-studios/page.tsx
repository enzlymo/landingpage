'use client'

import React from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { AIVideoStudio } from '@/components/demo/AIVideoStudio'
import { AIImageStudio } from '@/components/demo/AIImageStudio'

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

        {/* AI Video Studio */}
        <AIVideoStudio />

        {/* AI Image Studio */}
        <AIImageStudio />
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
