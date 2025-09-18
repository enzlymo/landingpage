'use client'

import { useEffect, useState } from "react"

interface DynamicWaitlistProps {
  className?: string
  showTitle?: boolean
  title?: string
  description?: string
  height?: string
}

export function DynamicWaitlist({ 
  className = "",
  showTitle = false,
  title = "Unlock Early Access to Lymo AI",
  description = "Get priority entry and exclusive updates.",
  height = "180px"
}: DynamicWaitlistProps) {
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize LaunchList widget after mount
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).LaunchList) {
        (window as any).LaunchList.init();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`waitlist-container ${className}`}>
      {showTitle && (
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
      )}
      
      {/* Primary Working Form - Always Visible */}
      <form 
        action="https://getlaunchlist.com/s/qsOaGw" 
        method="POST"
        className="flex flex-col gap-3"
        target="_blank"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email for early access"
          required
          className="px-4 py-3 border-2 border-[#F4D03F]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] focus:border-[#F4D03F] text-gray-900 bg-white"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 font-semibold py-3 px-6 rounded-lg hover:from-[#F1C40F] hover:to-[#D4AC0D] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          🚀 Join the Waitlist Now
        </button>
      </form>
      
      {/* Hidden LaunchList Widget (for tracking) */}
      {mounted && (
        <div 
          className="launchlist-widget" 
          data-key-id="qsOaGw" 
          data-height="0px"
          style={{
            height: '0px',
            width: '100%',
            overflow: 'hidden',
            opacity: 0,
            position: 'absolute',
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  )
}
