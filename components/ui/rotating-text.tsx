'use client'

import React, { useState, useEffect } from 'react'

interface RotatingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function RotatingText({ texts, className = "", interval = 5000 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsAnimating(false)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <span 
      className={`inline-block transition-all duration-300 ease-in-out ${
        isAnimating ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  )
}
