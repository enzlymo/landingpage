'use client'

import { useState } from 'react'
import CookieConsentBanner from './CookieConsentBanner'
import CookieSettingsModal from './CookieSettingsModal'

export default function CookieConsentProvider() {
  const [showSettings, setShowSettings] = useState(false)

  const handleShowSettings = () => {
    setShowSettings(true)
  }

  const handleCloseSettings = () => {
    setShowSettings(false)
  }

  return (
    <>
      <CookieConsentBanner onShowSettings={handleShowSettings} />
      <CookieSettingsModal 
        isOpen={showSettings} 
        onClose={handleCloseSettings} 
      />
    </>
  )
}
