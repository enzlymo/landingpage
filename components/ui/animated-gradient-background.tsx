'use client'

import React, { useRef, useEffect } from 'react'

interface AnimatedGradientBackgroundProps {
  className?: string
}

export function AnimatedGradientBackground({ className = "" }: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationIdRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation variables
    let time = 0
    const speed = 0.002

    // Color palette
    const colors = [
      { r: 244, g: 208, b: 63 },  // #F4D03F
      { r: 241, g: 196, b: 15 },  // #F1C40F
      { r: 247, g: 220, b: 111 }, // #F7DC6F
      { r: 252, g: 243, b: 207 }  // #FCF3CF
    ]

    const animate = () => {
      time += speed

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      const w = canvas.width / window.devicePixelRatio
      const h = canvas.height / window.devicePixelRatio

      // Create multiple flowing gradient layers
      for (let i = 0; i < 4; i++) {
        const color = colors[i]
        const alpha = 0.25 - i * 0.03
        
        // Calculate position with different wave patterns
        const offsetX = Math.sin(time + i * 2) * (100 + i * 50)
        const offsetY = Math.cos(time * 0.8 + i * 1.5) * (80 + i * 30)
        
        const centerX = w * (0.3 + i * 0.15) + offsetX
        const centerY = h * (0.4 + i * 0.1) + offsetY
        
        const radius = 200 + i * 50 + Math.sin(time * 2 + i) * 30

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        )
        
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.6})`)
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, w, h)
      }

      // Add flowing wave effect
      ctx.globalCompositeOperation = 'overlay'
      
      for (let x = 0; x < w; x += 20) {
        for (let y = 0; y < h; y += 20) {
          const wave = Math.sin((x + time * 100) * 0.01) * Math.cos((y + time * 80) * 0.008)
          const intensity = (wave + 1) * 0.1
          
          ctx.fillStyle = `rgba(244, 208, 63, ${intensity * 0.1})`
          ctx.fillRect(x, y, 20, 20)
        }
      }
      
      ctx.globalCompositeOperation = 'source-over'

      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          filter: 'blur(30px)',
          opacity: 0.8
        }}
      />
    </div>
  )
}
