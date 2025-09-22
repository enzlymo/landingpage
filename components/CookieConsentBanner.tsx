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
import { 
  detectLanguage, 
  getCurrentLanguage, 
  setLanguage, 
  translations, 
  SupportedLanguage 
} from '../lib/language'

interface CookieConsentBannerProps {
  onShowSettings: () => void
}

export default function CookieConsentBanner({ onShowSettings }: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [language, setCurrentLanguage] = useState<SupportedLanguage>('none')
  const [detecting, setDetecting] = useState(true)

  useEffect(() => {
    const initializeLanguageAndBanner = async () => {
      setDetecting(true)
      
      // First check if we already have a stored language
      const storedLang = getCurrentLanguage()
      if (storedLang !== 'none') {
        setCurrentLanguage(storedLang)
        setDetecting(false)
        
        // Only show banner for EU users
        if (storedLang === 'sv' || storedLang === 'en') {
          const shouldShow = shouldShowBanner()
          setIsVisible(shouldShow)
        }
        return
      }
      
      // Detect language for new users
      try {
        const detectedLang = await detectLanguage()
        setLanguage(detectedLang)
        setCurrentLanguage(detectedLang)
        
        // Only show banner for EU users (Swedish or English)
        if (detectedLang === 'sv' || detectedLang === 'en') {
          const shouldShow = shouldShowBanner()
          setIsVisible(shouldShow)
        }
      } catch (error) {
        console.log('Language detection failed')
        setCurrentLanguage('none')
      } finally {
        setDetecting(false)
      }
    }

    initializeLanguageAndBanner()
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

  // Don't show anything if detecting language or not an EU user
  if (detecting || language === 'none' || !isVisible) return null

  const t = translations[language].banner

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4 max-w-7xl">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex items-start gap-2 mb-3">
            <div className="flex-shrink-0 p-1.5 bg-yellow-100 rounded-lg">
              <Cookie className="w-4 h-4 text-yellow-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {t.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                {t.description}
              </p>
            </div>
          </div>
          
          {/* Mobile Buttons - Compact */}
          <div className="flex gap-2">
            <button
              onClick={handleCustomize}
              className="flex-1 px-2 py-2 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              disabled={isLoading}
            >
              <Settings className="w-3 h-3 inline mr-1" />
              Settings
            </button>
            
            <button
              onClick={handleRejectAll}
              className="flex-1 px-2 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              disabled={isLoading}
            >
              {language === 'sv' ? 'Avvisa' : 'Reject'}
            </button>
            
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-2 py-2 text-xs font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (language === 'sv' ? 'Laddar...' : 'Loading...') : (language === 'sv' ? 'Acceptera' : 'Accept')}
            </button>
          </div>
          
          {/* Mobile Links */}
          <div className="mt-2 flex justify-center gap-3 text-xs">
            <a 
              href="/cookie-policy" 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.cookiePolicy}
            </a>
            <a 
              href="/privacy-policy" 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.privacyPolicy}
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col lg:flex-row items-start lg:items-center gap-4">
          {/* Cookie Icon & Content */}
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 p-2 bg-yellow-100 rounded-lg">
              <Cookie className="w-5 h-5 text-yellow-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.description}
              </p>
              
              {/* Links */}
              <div className="mt-3 flex flex-wrap gap-4 text-xs">
                <a 
                  href="/cookie-policy" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cookiePolicy}
                </a>
                <a 
                  href="/privacy-policy" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.privacyPolicy}
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
            <button
              onClick={handleCustomize}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={isLoading}
            >
              <Settings className="w-4 h-4 inline mr-2" />
              {t.managePreferences}
            </button>
            
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={isLoading}
            >
              {t.rejectAll}
            </button>
            
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? t.loading : t.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
