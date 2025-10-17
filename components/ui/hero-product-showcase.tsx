'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play, Sparkles, ArrowRight, Zap, Camera, Video, Link2, Upload, Wand2, TrendingUp, Eye, Heart, Share2, Download } from 'lucide-react'
import { Button } from './button'

interface HeroProductShowcaseProps {
  className?: string
}

export function HeroProductShowcase({ className = '' }: HeroProductShowcaseProps) {
  const [currentStep, setCurrentStep] = useState<'input' | 'processing' | 'results'>('input')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [activeResult, setActiveResult] = useState<'images' | 'videos'>('images')
  const [urlText, setUrlText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const sampleUrl = "https://example.com/cosmetic-product"
  
  useEffect(() => {
    if (currentStep === 'input' && !urlText) {
      setIsTyping(true)
      let i = 0
      const typeInterval = setInterval(() => {
        if (i < sampleUrl.length) {
          setUrlText(sampleUrl.slice(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
        }
      }, 80)
      
      return () => clearInterval(typeInterval)
    }
  }, [currentStep, urlText])

  const handleGenerate = () => {
    setCurrentStep('processing')
    setIsProcessing(true)
    setShowResults(false)
    
    setTimeout(() => {
      setCurrentStep('results')
      setShowResults(true)
      setIsProcessing(false)
    }, 3000)
  }

  const resetDemo = () => {
    setCurrentStep('input')
    setShowResults(false)
    setIsProcessing(false)
    setUrlText('')
  }

  const generatedImages = [
    { src: '/images/1.jpg', views: '2.1M', engagement: '+347%' },
    { src: '/images/2.jpg', views: '1.8M', engagement: '+298%' },
    { src: '/images/Free Cosmetic Tube Mockup.png', views: '1.5M', engagement: '+256%' },
  ]

  return (
    <div className={`relative ${className}`}>
      {/* Main Showcase Container */}
      <div className="relative bg-[#0F1419]/95 backdrop-blur-xl border border-[#2D3748] rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/5 via-transparent to-[#60A5FA]/5 animate-pulse"></div>
        
        {/* Browser Header */}
        <div className="relative z-10 flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#EF4444] rounded-full"></div>
            <div className="w-4 h-4 bg-[#F59E0B] rounded-full"></div>
            <div className="w-4 h-4 bg-[#10B981] rounded-full"></div>
          </div>
          <div className="text-sm text-[#A0AEC0] bg-[#1A202C] px-6 py-2 rounded-full border border-[#2D3748] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F6E05E]" />
            lymo.ai/create
          </div>
          <div className="w-20"></div>
        </div>

        {/* Step Indicator */}
        <div className="relative z-10 flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            {[
              { id: 'input', label: 'Input URL', icon: Link2 },
              { id: 'processing', label: 'AI Processing', icon: Wand2 },
              { id: 'results', label: 'Generated Content', icon: Sparkles }
            ].map((step, index) => (
              <React.Fragment key={step.id}>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 ${
                  currentStep === step.id 
                    ? 'bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] text-[#111827] shadow-lg scale-105' 
                    : currentStep === 'results' && step.id !== 'results'
                    ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30'
                    : 'bg-[#1A202C] text-[#A0AEC0] border border-[#2D3748]'
                }`}>
                  <step.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{step.label}</span>
                </div>
                {index < 2 && (
                  <ArrowRight className={`w-4 h-4 transition-colors duration-500 ${
                    (currentStep === 'processing' && index === 0) || (currentStep === 'results' && index <= 1)
                      ? 'text-[#10B981]' 
                      : 'text-[#2D3748]'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 min-h-[400px]">
          
          {/* Step 1: URL Input */}
          {currentStep === 'input' && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#F7FAFC] mb-2">Paste Any Product URL</h3>
                <p className="text-[#A0AEC0]">Watch AI transform it into viral content</p>
              </div>
              
              <div className="bg-[#1A202C] rounded-2xl p-6 border border-[#2D3748] group hover:border-[#F6E05E]/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-lg flex items-center justify-center">
                    <Link2 className="w-5 h-5 text-[#111827]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#F7FAFC]">Product URL</span>
                    <div className="text-xs text-[#A0AEC0]">E-commerce, social media, or direct links</div>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    value={urlText}
                    onChange={(e) => setUrlText(e.target.value)}
                    placeholder="https://example.com/product-link"
                    className="w-full bg-[#0F1419] border border-[#2D3748] rounded-xl px-4 py-3 text-[#F7FAFC] placeholder-[#4A5568] focus:border-[#F6E05E] focus:outline-none transition-colors"
                  />
                  {isTyping && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-0.5 h-5 bg-[#F6E05E] animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[#A0AEC0]">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                      Auto-detect product
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                      Extract brand assets
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleGenerate}
                    disabled={!urlText.trim()}
                    className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#60A5FA] text-[#111827] font-bold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Content
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: AI Processing */}
          {currentStep === 'processing' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#F7FAFC] mb-2">AI is Creating Your Content</h3>
                <p className="text-[#A0AEC0]">Analyzing product, generating variations, optimizing for engagement</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Processing Images */}
                <div className="bg-[#1A202C] rounded-2xl p-6 border border-[#2D3748] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/10 to-transparent animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-lg flex items-center justify-center">
                        <Camera className="w-4 h-4 text-[#111827]" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#F7FAFC]">AI Images</span>
                        <div className="text-xs text-[#F6E05E] animate-pulse">Generating variations...</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-lg border border-[#F6E05E]/30 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/20 to-transparent animate-pulse"></div>
                          <div className="w-6 h-6 border-2 border-[#F6E05E] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 bg-[#0F1419] rounded-lg p-3 border border-[#2D3748]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#F7FAFC]">Progress</span>
                        <span className="text-xs text-[#F6E05E] font-semibold animate-pulse">73%</span>
                      </div>
                      <div className="w-full bg-[#2D3748] rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] h-2 rounded-full animate-pulse" style={{ width: '73%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Processing Videos */}
                <div className="bg-[#1A202C] rounded-2xl p-6 border border-[#2D3748] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/10 to-transparent animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] rounded-lg flex items-center justify-center">
                        <Video className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#F7FAFC]">AI Videos</span>
                        <div className="text-xs text-[#60A5FA] animate-pulse">Creating sequences...</div>
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-lg border border-[#60A5FA]/30 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/20 to-transparent animate-pulse"></div>
                      <div className="w-8 h-8 border-2 border-[#60A5FA] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    
                    <div className="mt-4 bg-[#0F1419] rounded-lg p-3 border border-[#2D3748]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#F7FAFC]">Rendering</span>
                        <span className="text-xs text-[#60A5FA] font-semibold animate-pulse">89%</span>
                      </div>
                      <div className="w-full bg-[#2D3748] rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] h-2 rounded-full animate-pulse" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Results */}
          {currentStep === 'results' && showResults && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#F7FAFC] mb-2">🎉 Content Generated Successfully!</h3>
                <p className="text-[#A0AEC0]">Professional-quality content ready for your campaigns</p>
              </div>

              {/* Content Type Switcher */}
              <div className="flex justify-center mb-6">
                <div className="bg-[#1A202C] rounded-xl p-1 border border-[#2D3748]">
                  <div className="flex gap-1">
                    {[
                      { id: 'images', label: 'AI Images', icon: Camera, count: '4' },
                      { id: 'videos', label: 'AI Videos', icon: Video, count: '2' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setActiveResult(type.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          activeResult === type.id
                            ? 'bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] text-[#111827] shadow-lg'
                            : 'text-[#A0AEC0] hover:text-[#F7FAFC] hover:bg-[#2D3748]'
                        }`}
                      >
                        <type.icon className="w-4 h-4" />
                        <span className="font-medium">{type.label}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                          activeResult === type.id ? 'bg-[#111827]/20' : 'bg-[#2D3748]'
                        }`}>
                          {type.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="space-y-4">
                {activeResult === 'images' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {generatedImages.map((image, index) => (
                      <div key={index} className="bg-[#1A202C] rounded-xl p-4 border border-[#2D3748] group hover:border-[#F6E05E]/50 transition-all duration-300 hover:scale-105">
                        <div className="aspect-square rounded-lg overflow-hidden mb-3 relative">
                          <Image
                            src={image.src}
                            alt={`Generated image ${index + 1}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center justify-between text-white text-xs">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{image.views}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                <span>{image.engagement}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-[#A0AEC0]">
                            Style {index + 1} • Ready to use
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="p-1 rounded hover:bg-[#2D3748] transition-colors">
                              <Heart className="w-3 h-3 text-[#A0AEC0] hover:text-[#F6E05E]" />
                            </button>
                            <button className="p-1 rounded hover:bg-[#2D3748] transition-colors">
                              <Share2 className="w-3 h-3 text-[#A0AEC0] hover:text-[#F6E05E]" />
                            </button>
                            <button className="p-1 rounded hover:bg-[#2D3748] transition-colors">
                              <Download className="w-3 h-3 text-[#A0AEC0] hover:text-[#F6E05E]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeResult === 'videos' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: 'Product Showcase', duration: '0:15', format: 'Square (1:1)', engagement: '+420%' },
                      { title: 'Story Format', duration: '0:30', format: 'Vertical (9:16)', engagement: '+380%' }
                    ].map((video, index) => (
                      <div key={index} className="bg-[#1A202C] rounded-xl p-4 border border-[#2D3748] group hover:border-[#60A5FA]/50 transition-all duration-300 hover:scale-105">
                        <div className="aspect-video rounded-lg bg-gradient-to-br from-[#2D3748] to-[#1A202C] border border-[#60A5FA]/30 flex items-center justify-center relative overflow-hidden mb-3 cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/10 to-[#A78BFA]/10"></div>
                          <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-gray-900 ml-0.5" />
                          </div>
                          
                          {/* Video Stats Overlay */}
                          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                            <span className="text-xs text-white font-medium">{video.duration}</span>
                          </div>
                          <div className="absolute top-3 right-3 bg-[#10B981] rounded-full px-2 py-1">
                            <span className="text-xs font-bold text-white">VIRAL</span>
                          </div>
                          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                            <span className="text-xs text-white">{video.format}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-[#F7FAFC]">{video.title}</h4>
                            <div className="flex items-center gap-1 text-xs text-[#10B981]">
                              <TrendingUp className="w-3 h-3" />
                              <span>{video.engagement}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs text-[#A0AEC0]">
                            <span>Ready for social media</span>
                            <div className="flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-[#2D3748] transition-colors">
                                <Share2 className="w-3 h-3 hover:text-[#60A5FA]" />
                              </button>
                              <button className="p-1 rounded hover:bg-[#2D3748] transition-colors">
                                <Download className="w-3 h-3 hover:text-[#60A5FA]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#60A5FA] text-[#111827] font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Download className="w-4 h-4 mr-2" />
                  Download All Content
                </Button>
                <Button 
                  onClick={resetDemo}
                  variant="outline" 
                  className="border-2 border-[#2D3748] bg-[#0F1419]/80 backdrop-blur-sm hover:bg-[#1A202C] hover:border-[#F6E05E]/50 text-[#F7FAFC] px-8 py-3 rounded-xl transition-all duration-300"
                >
                  Try Another URL
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
