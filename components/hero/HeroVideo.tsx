'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video plays automatically when component mounts
      videoRef.current.play().catch(() => {
        // Fallback if autoplay fails
        console.log('Autoplay failed, video will show poster image')
      })
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Fallback Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
        <Image
          src="/images/1.jpg" // Using existing image as fallback
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>
      
      {/* Video Element (User will replace with their video) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/1.jpg" // Fallback poster
        style={{ 
          filter: 'brightness(0.8) saturate(1.1)' // Slight adjustment for better text readability
        }}
      >
        {/* Placeholder - User will add their video source */}
        <source src="/hero-video.mp4" type="video/mp4" />
        
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}
