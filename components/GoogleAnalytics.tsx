'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { hasConsentFor, getCookieConsent } from '../lib/cookies'

export const GA_TRACKING_ID = 'G-R245K5DXDE'

const GoogleAnalytics = () => {
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false)

  useEffect(() => {
    // Check analytics consent on mount and when cookies change
    const checkConsent = () => {
      const consent = hasConsentFor('analytics')
      setHasAnalyticsConsent(consent)
    }

    checkConsent()

    // Listen for cookie changes (simplified polling approach)
    const interval = setInterval(checkConsent, 1000)
    return () => clearInterval(interval)
  }, [])

  // Don't load GA if no analytics consent
  if (!hasAnalyticsConsent) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configure GA with privacy settings
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
