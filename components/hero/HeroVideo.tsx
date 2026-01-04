'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (videoRef.current) {
      const video = videoRef.current
      
      // Set video loading event
      video.addEventListener('loadeddata', () => {
        setIsLoaded(true)
      })
      
      // Ensure video plays automatically when component mounts
      video.play().catch(() => {
        // Fallback if autoplay fails
        console.log('Autoplay failed, video will show poster image')
      })
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <div className="hero-video-container">
      {/* Fallback Background - Video Poster */}
      <div className={`absolute inset-0 video-loading transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
        <video
          className="w-full h-full object-cover opacity-60"
          poster="/newherovid.mp4#t=0.1"
          preload="metadata"
          muted
        >
          <source src="/newherovid.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Hero Video */}
      <video
        ref={videoRef}
        className={`hero-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isMobile ? 'hero-video-mobile' : 'hero-video-desktop'}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/newherovid.mp4#t=0.1" // Use first frame of the video as poster
        style={{ 
          filter: isMobile 
            ? 'brightness(0.6) contrast(1.2) saturate(1.3)' // Stronger filters for mobile for better text readability
            : 'brightness(0.7) contrast(1.1) saturate(1.2)', // Standard filters for desktop
          objectPosition: 'center center' // Ensure video is centered
        }}
      >
        {/* Main video source */}
        <source src="/newherovid.mp4" type="video/mp4" />
        
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Responsive gradient overlay for better text contrast */}
      <div className="hero-video-overlay absolute inset-0" />
      
      {/* Additional subtle overlay for consistent branding */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
    </div>
  )
}

