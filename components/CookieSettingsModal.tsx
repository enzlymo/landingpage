'use client'

import { useState, useEffect } from 'react'
import { X, Info, Shield, BarChart3, Target, Puzzle } from 'lucide-react'
import { 
  getCookieConsent, 
  setCookieConsent, 
  CookieConsent,
  defaultConsent,
  cookieDefinitions 
} from '../lib/cookies'

interface CookieSettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const currentConsent = getCookieConsent() || defaultConsent
      setConsent(currentConsent)
      setHasChanges(false)
    }
  }, [isOpen])

  const handleToggle = (category: keyof Omit<CookieConsent, 'timestamp' | 'version'>) => {
    if (category === 'necessary') return // Can't disable necessary cookies
    
    setConsent(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
    setHasChanges(true)
  }

  const handleSave = () => {
    setCookieConsent(consent)
    onClose()
    
    // Reload page to apply changes
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const handleAcceptAll = () => {
    const allAccepted: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: Date.now(),
      version: '1.0'
    }
    setCookieConsent(allAccepted)
    onClose()
    
    // Reload page to apply changes
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  if (!isOpen) return null

  const categoryIcons = {
    necessary: Shield,
    analytics: BarChart3,
    marketing: Target,
    functional: Puzzle
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Cookie-inställningar</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <p className="text-sm text-gray-600 mb-6">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. Du kan välja vilka typer av cookies du vill tillåta nedan.
            </p>

            <div className="space-y-6">
              {Object.entries(cookieDefinitions).map(([key, definition]) => {
                const category = key as keyof typeof cookieDefinitions
                const IconComponent = categoryIcons[category]
                const isEnabled = consent[category]
                const isNecessary = category === 'necessary'

                return (
                  <div key={category} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`p-2 rounded-lg ${
                          isNecessary ? 'bg-green-100' :
                          isEnabled ? 'bg-blue-100' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${
                            isNecessary ? 'text-green-600' :
                            isEnabled ? 'text-blue-600' : 'text-gray-400'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-medium text-gray-900">{definition.name}</h3>
                            {isNecessary && (
                              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                Nödvändig
                              </span>
                            )}
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3">
                            {definition.description}
                          </p>

                          {definition.cookies.length > 0 && (
                            <details className="text-xs text-gray-500">
                              <summary className="cursor-pointer hover:text-gray-700">
                                Visa cookies ({definition.cookies.length})
                              </summary>
                              <div className="mt-2 space-y-2">
                                {definition.cookies.map((cookie, index) => (
                                  <div key={index} className="pl-4 border-l-2 border-gray-200">
                                    <div className="font-medium">{cookie.name}</div>
                                    <div>Syfte: {cookie.purpose}</div>
                                    <div>Varaktighet: {cookie.duration}</div>
                                  </div>
                                ))}
                              </div>
                            </details>
                          )}
                        </div>
                      </div>

                      {/* Toggle Switch */}
                      <div className="flex-shrink-0 ml-4">
                        <button
                          onClick={() => handleToggle(category)}
                          disabled={isNecessary}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            isEnabled 
                              ? 'bg-blue-600' 
                              : 'bg-gray-200'
                          } ${isNecessary ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              isEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-xs text-gray-500">
              <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800 underline">
                Läs vår fullständiga cookie-policy
              </a>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Acceptera alla
              </button>
              
              <button
                onClick={handleSave}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Spara val
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
