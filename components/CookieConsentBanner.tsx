'use client'

import { useState, useEffect } from 'react'
import { X, Settings, Cookie } from 'lucide-react'
import { 
  shouldShowBanner, 
  acceptAllCookies, 
  rejectAllCookies,
  getCookieConsent,
  CookieConsent 
} from '../lib/cookies'

interface CookieConsentBannerProps {
  onShowSettings: () => void
}

export default function CookieConsentBanner({ onShowSettings }: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if banner should be shown
    const shouldShow = shouldShowBanner()
    setIsVisible(shouldShow)
  }, [])

  const handleAcceptAll = async () => {
    setIsLoading(true)
    acceptAllCookies()
    setIsVisible(false)
    
    // Reload page to apply analytics
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const handleRejectAll = () => {
    setIsLoading(true)
    rejectAllCookies()
    setIsVisible(false)
    setIsLoading(false)
  }

  const handleCustomize = () => {
    onShowSettings()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          {/* Cookie Icon & Content */}
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 p-2 bg-yellow-100 rounded-lg">
              <Cookie className="w-5 h-5 text-yellow-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vi värnar om din integritet
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Vi använder cookies för att förbättra din upplevelse, analysera webbplatstrafik och för marknadsföring. 
                Du kan hantera dina preferenser nedan. Genom att klicka &quot;Acceptera alla&quot; samtycker du till användning av alla cookies.
              </p>
              
              {/* Links */}
              <div className="mt-3 flex flex-wrap gap-4 text-xs">
                <a 
                  href="/cookie-policy" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie-policy
                </a>
                <a 
                  href="/privacy" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Integritetspolicy
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
            <button
              onClick={handleCustomize}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={isLoading}
            >
              <Settings className="w-4 h-4 inline mr-2" />
              Hantera preferenser
            </button>
            
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={isLoading}
            >
              Avvisa alla
            </button>
            
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Laddar...' : 'Acceptera alla'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
