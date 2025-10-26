'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Play, Sparkles, ArrowRight, Zap, Camera, Video } from 'lucide-react'
import { Button } from './button'

interface TransformationShowcaseProps {
  className?: string
}

export function ProductTransformationShowcase({ className = '' }: TransformationShowcaseProps) {
  const [activeDemo, setActiveDemo] = useState<'sweatshirt' | 'cosmetic'>('cosmetic')
  const [isTransforming, setIsTransforming] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTransform = () => {
    setIsTransforming(true)
    setShowResults(false)
    
    setTimeout(() => {
      setShowResults(true)
      setIsTransforming(false)
      // Auto-play the video when results show
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play()
        }
      }, 500)
    }, 2000)
  }

  const resetDemo = () => {
    setShowResults(false)
    setIsTransforming(false)
  }

  const demos = {
    sweatshirt: {
      original: '/images/mockuppicture for video..jpg',
      result: '/images/2.jpg',
      title: 'Sweatshirt Product Shot',
      description: 'Transform basic product photos into professional lifestyle imagery'
    },
    cosmetic: {
      original: '/images/Free Cosmetic Tube Mockup.png',
      result: '/images/1.jpg', 
      title: 'Cosmetic Product Shot',
      description: 'Create stunning product photography with perfect lighting and composition'
    }
  }

  const currentDemo = demos[activeDemo]

  return (
    <section className={`py-20 bg-gradient-to-br from-[#0F1419] via-[#1A202C] to-[#161B22] ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7FAFC] mb-4">
            Watch Your Products Come to Life
          </h2>
          <p className="text-lg md:text-xl text-[#A0AEC0] max-w-2xl mx-auto">
            One photo becomes professional content in seconds
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#0F1419] rounded-2xl p-2 border border-[#2D3748] shadow-lg">
            <div className="flex gap-2">
              {Object.entries(demos).map(([key, demo]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveDemo(key as 'sweatshirt' | 'cosmetic')
                    resetDemo()
                  }}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeDemo === key
                      ? 'bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] text-[#111827] shadow-sm'
                      : 'text-[#A0AEC0] hover:text-[#F7FAFC] hover:bg-[#1A202C]'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Transformation Showcase */}
        <div className="relative max-w-5xl mx-auto">
          {/* Original Photo - Top Center */}
          <div className="relative flex justify-center mb-8">
            <div className="relative transform transition-all duration-500 hover:scale-105">
              <div className="bg-[#0F1419] rounded-2xl p-6 border-2 border-[#2D3748] shadow-xl">
                <div className="absolute top-4 left-4 bg-[#111827] rounded-full px-4 py-1.5 z-10 border border-[#2D3748]">
                  <span className="text-xs font-bold text-[#F7FAFC]">Original</span>
                </div>
                
                <div className="aspect-square rounded-xl overflow-hidden bg-[#1A202C] relative w-72">
                  <Image
                    src={currentDemo.original}
                    alt="Original product photo"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Pulsing Arrows - Downwards */}
              {showResults && (
                <>
                  {/* Arrow down-left to Photo Result */}
                  <div className="absolute -bottom-16 left-1/4 animate-pulse-arrow">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#F6E05E] animate-ping"></div>
                        <div className="w-2 h-2 rounded-full bg-[#F6E05E] animate-ping" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-[#F6E05E] animate-ping" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[#F6E05E] rotate-90 animate-bounce-vertical" />
                    </div>
                  </div>
                  
                  {/* Arrow down-right to Video Result */}
                  <div className="absolute -bottom-16 right-1/4 animate-pulse-arrow" style={{ animationDelay: '0.3s' }}>
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[#F59E0B] rotate-90 animate-bounce-vertical" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Transform Button */}
          <div className="flex flex-col items-center justify-center space-y-4 mb-8">
            <Button
              onClick={handleTransform}
              disabled={isTransforming}
              className="relative bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#60A5FA] text-[#111827] font-bold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 transform hover:scale-105 disabled:scale-100"
            >
              {isTransforming ? (
                <>
                  <Zap className="w-6 h-6 mr-2 animate-spin" />
                  <span className="text-lg">AI Transforming...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6 mr-2" />
                  <span className="text-lg">Transform with AI</span>
                </>
              )}
            </Button>
            
            {isTransforming && (
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#F6E05E] rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-[#F59E0B] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-[#F6E05E] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            )}
          </div>

          {/* Collapsible Results Section */}
          <div className={`transition-all duration-700 overflow-hidden ${
            showResults ? 'max-h-[800px] opacity-100 mb-12' : 'max-h-0 opacity-0 mb-0'
          }`}>
            {/* AI Generated Results - Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Professional Photo Result */}
              <div className={`relative transition-all duration-700 ${
                showResults ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}>
                <div className="bg-gradient-to-br from-[#F6E05E]/5 to-[#0F1419] rounded-2xl p-4 border-2 border-[#F6E05E] shadow-2xl">
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] rounded-full px-4 py-1.5 z-10 shadow-lg">
                    <span className="text-xs font-bold text-[#111827]">✨ AI Photo</span>
                  </div>
                  
                  <div className="aspect-square rounded-xl overflow-hidden bg-[#1A202C] relative">
                    <Image
                      src={currentDemo.result}
                      alt="AI generated professional photo"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-3 text-center bg-[#0F1419] rounded-lg py-2 border border-[#2D3748]">
                    <div className="text-sm font-bold text-[#F7FAFC]">Professional Shot</div>
                    <div className="text-xs text-[#F6E05E] font-semibold">Generated in 15 seconds</div>
                  </div>
                </div>
              </div>

              {/* Video Result */}
              <div 
                className={`relative transition-all duration-700 delay-200 ${
                  showResults ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                onMouseEnter={() => {
                  setIsHovering(true);
                  if (videoRef.current) {
                    videoRef.current.volume = 0.63;
                    videoRef.current.muted = false;
                    videoRef.current.play();
                  }
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                    videoRef.current.muted = true;
                  }
                }}
              >
                <div className="bg-gradient-to-br from-[#111827] to-[#0F1419] rounded-2xl p-4 border-2 border-[#F59E0B] shadow-2xl overflow-hidden group cursor-pointer h-full">
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-4 py-1.5 z-10 shadow-lg">
                    <span className="text-xs font-bold text-white">🎬 AI Video</span>
                  </div>
                  
                  {/* Video Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F6E05E]/20 via-transparent to-[#F59E0B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Phone Ratio Video Container */}
                  <div className="relative aspect-[9/16] rounded-xl bg-gradient-to-br from-[#1A202C] to-[#111827] flex items-center justify-center overflow-hidden max-w-[200px] mx-auto">
                    {/* Video Element */}
                    <video 
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      muted
                      loop
                      playsInline
                    >
                      <source src="/images/3bff4339-9711-438d-9995-952e23d2b626.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Play Indicator */}
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-white font-medium flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse"></div>
                        Playing
                      </span>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <div className="bg-white/30 backdrop-blur-sm rounded-full p-1.5">
                        <Camera className="w-3 h-3 text-white" />
                      </div>
                      <div className="bg-white/30 backdrop-blur-sm rounded-full p-1.5">
                        <Video className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-center bg-[#111827] rounded-lg py-2 border border-[#2D3748]">
                    <div className="text-sm font-bold text-[#F7FAFC]">Social Ready Video</div>
                    <div className="text-xs text-[#F59E0B] font-semibold">Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#A0AEC0] mb-6 text-lg">
            Transform your product photos into a complete content library
          </p>
          <Button className="bg-gradient-to-r from-[#F6E05E] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#60A5FA] text-[#111827] font-bold px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105">
            Start Creating Free
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-vertical {
          0%, 100% {
            transform: translateY(0) rotate(90deg);
          }
          50% {
            transform: translateY(6px) rotate(90deg);
          }
        }
        
        @keyframes pulse-arrow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-bounce-vertical {
          animation: bounce-vertical 1.5s ease-in-out infinite;
        }
        
        .animate-pulse-arrow {
          animation: pulse-arrow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
