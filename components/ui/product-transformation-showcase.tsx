'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from './button'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface TransformationShowcaseProps {
  className?: string
}

export function ProductTransformationShowcase({ className = '' }: TransformationShowcaseProps) {
  const [activeDemo, setActiveDemo] = useState<'sweatshirt' | 'cosmetic'>('cosmetic')
  const [isTransforming, setIsTransforming] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleTransform = () => {
    setIsTransforming(true)
    setShowResults(false)
    
    setTimeout(() => {
      setShowResults(true)
      setIsTransforming(false)
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
      description: 'One photo becomes professional content in seconds'
    }
  }

  const currentDemo = demos[activeDemo]

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Watch Your Products Come to Life
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One photo becomes professional content in seconds
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-lg">
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
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Interface */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Original Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-xl">
              <div className="absolute top-4 left-4 bg-gray-100 rounded-full px-4 py-1.5 z-10 border border-gray-200">
                <span className="text-sm font-semibold text-gray-700">Original</span>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 relative w-72">
                <Image
                  src={currentDemo.original}
                  alt="Original product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Transform Button */}
          <div className="flex flex-col items-center">
            <Button
              onClick={handleTransform}
              disabled={isTransforming || showResults}
              className="relative bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-gray-900 font-bold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 transform hover:scale-105 disabled:scale-100"
            >
              {isTransforming ? (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-gray-700 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-gray-700 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-gray-700 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span>Transforming...</span>
                </div>
              ) : showResults ? (
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  <span>Transformed!</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  <span>Transform with AI</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </Button>

            {showResults && (
              <button
                onClick={resetDemo}
                className="mt-4 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Try Again
              </button>
            )}
          </div>

          {/* Result */}
          <div className="relative">
            {showResults ? (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-300 shadow-2xl">
                <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-4 py-1.5 z-10 shadow-lg">
                  <span className="text-sm font-bold text-gray-900">AI Result</span>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-white relative w-72">
                  <Image
                    src={currentDemo.result}
                    alt="AI transformed result"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 border-2 border-dashed border-gray-300 shadow-xl w-72 h-72 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm font-medium">AI Result will appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="https://app.lymo.me">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-gray-900 font-bold px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Creating Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}