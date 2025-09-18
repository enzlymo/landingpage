'use client'

import { useEffect, useState } from "react"

interface WaitlistWidgetProps {
  className?: string
  showTitle?: boolean
  title?: string
  description?: string
  height?: string
}

export function WaitlistWidget({ 
  className = "",
  showTitle = false,
  title = "Join the Waitlist",
  description = "Get early access to Lymo AI",
  height = "180px"
}: WaitlistWidgetProps) {
  
  const [mounted, setMounted] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Wait for component to mount before initializing widget
    const timer = setTimeout(() => {
      // Ensure the widget script is loaded and reinitialize widgets
      if (typeof window !== 'undefined') {
        if ((window as any).LaunchList) {
          (window as any).LaunchList.init();
          setWidgetLoaded(true);
        } else {
          // Try to manually load the script if it's not available
          const script = document.createElement('script');
          script.src = 'https://getlaunchlist.com/js/widget.js';
          script.defer = true;
          script.onload = () => {
            setTimeout(() => {
              if ((window as any).LaunchList) {
                (window as any).LaunchList.init();
                setWidgetLoaded(true);
              }
            }, 500);
          };
          document.head.appendChild(script);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything on server side to prevent hydration issues
  if (!mounted) {
    return (
      <div className={`waitlist-widget-container ${className}`}>
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
        <div 
          style={{
            minHeight: height,
            width: '100%',
            border: '1px solid rgba(244, 208, 63, 0.2)',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#f9f9f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}
        >
          Loading waitlist...
        </div>
      </div>
    );
  }

  return (
    <div className={`waitlist-widget-container ${className}`}>
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
      <div 
        className="launchlist-widget" 
        data-key-id="qsOaGw" 
        data-height={height}
        style={{
          minHeight: height,
          width: '100%',
          border: '1px solid rgba(244, 208, 63, 0.2)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      />
      
      {/* Fallback form in case LaunchList doesn't load */}
      {mounted && !widgetLoaded && (
        <div style={{ marginTop: '10px' }}>
          <form 
            action="https://getlaunchlist.com/s/qsOaGw" 
            method="POST"
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 font-semibold py-2 px-4 rounded-lg hover:from-[#F1C40F] hover:to-[#D4AC0D] transition-all"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
