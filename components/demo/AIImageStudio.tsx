'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles, ChevronDown, Image as ImageIcon, Wand2 } from 'lucide-react'

export function AIImageStudio() {
  const [activeTab, setActiveTab] = useState<'text-to-image' | 'image-to-image'>('text-to-image')

  return (
    <section className="artlist-section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            AI Image Studio
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Transform products into stunning visuals
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Create professional product images with AI - from text descriptions to image transformations
          </p>
        </div>

        {/* Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* App Interface Mockup */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* App Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-lg text-gray-700 font-semibold">AI Images</div>
                  <div className="w-16"></div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="px-6 pt-6">
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('text-to-image')}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'text-to-image'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <ImageIcon className="w-4 h-4 inline mr-2" />
                    Text to Image
                  </button>
                  <button
                    onClick={() => setActiveTab('image-to-image')}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'image-to-image'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Wand2 className="w-4 h-4 inline mr-2" />
                    Image to Image
                  </button>
                </div>
              </div>

              {/* App Content */}
              <div className="p-8 lg:p-12">
                {activeTab === 'text-to-image' ? (
                  <>
                    {/* Text to Image Interface */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Describe your image</label>
                      <textarea
                        placeholder="e.g., A professional product photo of a sleek wireless headphone on a minimalist white background, soft studio lighting, 8K quality..."
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-gray-50 resize-none h-32"
                        readOnly
                      />
                      <div className="text-xs text-gray-500 mt-2">0/2000 characters</div>
                    </div>

                    {/* Model Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Model</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-700 appearance-none">
                            <option>Seedream 3 / FLUX Kontext (Recommended)</option>
                            <option>DALL-E 3</option>
                            <option>Midjourney</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Aspect Ratio</label>
                        <div className="flex gap-2">
                          {['1:1', '16:9', '9:16'].map((ratio, index) => (
                            <button
                              key={ratio}
                              className={`flex-1 px-3 py-3 border rounded-xl text-sm font-medium transition-colors ${
                                index === 0 
                                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                  : 'border-gray-200 hover:border-gray-300 text-gray-600'
                              }`}
                            >
                              {ratio}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                  </>
                ) : (
                  <>
                    {/* Image to Image Interface */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Upload Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50">
                        <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Drop your image here or click to browse</p>
                        <p className="text-sm text-gray-500">Supports JPG, PNG, WebP up to 10MB</p>
                      </div>
                    </div>

                    {/* Transformation Options */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Transformation Style</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          { name: 'Enhance', icon: '✨' },
                          { name: 'Style Transfer', icon: '🎨' },
                          { name: 'Background Remove', icon: '🖼️' },
                          { name: 'Upscale', icon: '📈' },
                          { name: 'Color Adjust', icon: '🌈' },
                          { name: 'Artistic', icon: '🖌️' }
                        ].map((style, index) => (
                          <button
                            key={style.name}
                            className={`p-3 border rounded-xl text-center transition-all ${
                              index === 0 
                                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                : 'border-gray-200 hover:border-gray-300 text-gray-600'
                            }`}
                          >
                            <div className="text-lg mb-1">{style.icon}</div>
                            <div className="text-xs font-medium">{style.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

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

          {/* My Creations Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-gray-600" />
                My Creations
              </h3>
              
              {/* Empty State */}
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-2">Your generated images will appear here</p>
                <p className="text-sm text-gray-500">Create your first AI image to get started</p>
              </div>

              {/* Auto-saved Info */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-yellow-900">💡</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-800 mb-1">Auto-saved to Library</h4>
                    <p className="text-xs text-yellow-700">All generated images are automatically saved to your Creative Library</p>
                  </div>
                </div>
              </div>

              {/* Example Gallery */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Example Gallery</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg border border-gray-200 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
