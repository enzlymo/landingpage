import Cookies from 'js-cookie'

// Cookie consent categories
export type CookieCategory = 'necessary' | 'analytics' | 'marketing' | 'functional'

// Cookie consent preferences
export interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
  timestamp: number
  version: string
}

// Default consent (only necessary cookies)
export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
  timestamp: Date.now(),
  version: '1.0'
}

// Cookie names
export const COOKIE_CONSENT_NAME = 'lymo-cookie-consent'
export const COOKIE_BANNER_DISMISSED = 'lymo-banner-dismissed'

// Get current consent
export const getCookieConsent = (): CookieConsent | null => {
  const consent = Cookies.get(COOKIE_CONSENT_NAME)
  if (!consent) return null
  
  try {
    return JSON.parse(consent)
  } catch {
    return null
  }
}

// Set cookie consent
export const setCookieConsent = (consent: CookieConsent): void => {
  const updatedConsent = {
    ...consent,
    timestamp: Date.now(),
    version: '1.0'
  }
  
  // Set consent cookie for 1 year
  Cookies.set(COOKIE_CONSENT_NAME, JSON.stringify(updatedConsent), {
    expires: 365,
    sameSite: 'Lax',
    secure: process.env.NODE_ENV === 'production'
  })
}

// Check if user has given consent for a specific category
export const hasConsentFor = (category: CookieCategory): boolean => {
  const consent = getCookieConsent()
  if (!consent) return category === 'necessary' // Only necessary cookies by default
  
  return consent[category]
}

// Check if banner should be shown
export const shouldShowBanner = (): boolean => {
  const consent = getCookieConsent()
  const dismissed = Cookies.get(COOKIE_BANNER_DISMISSED)
  
  return !consent && !dismissed
}

// Dismiss banner (for "Reject All" option)
export const dismissBanner = (): void => {
  Cookies.set(COOKIE_BANNER_DISMISSED, 'true', {
    expires: 365,
    sameSite: 'Lax',
    secure: process.env.NODE_ENV === 'production'
  })
  
  // Set default consent (only necessary)
  setCookieConsent(defaultConsent)
}

// Accept all cookies
export const acceptAllCookies = (): void => {
  const allAccepted: CookieConsent = {
    necessary: true,
    analytics: true,
    marketing: true,
    functional: true,
    timestamp: Date.now(),
    version: '1.0'
  }
  
  setCookieConsent(allAccepted)
}

// Reject all non-necessary cookies
export const rejectAllCookies = (): void => {
  setCookieConsent(defaultConsent)
}

// Clear all consent cookies
export const clearCookieConsent = (): void => {
  Cookies.remove(COOKIE_CONSENT_NAME)
  Cookies.remove(COOKIE_BANNER_DISMISSED)
}

// Cookie definitions for transparency
export const cookieDefinitions = {
  necessary: {
    name: 'Nödvändiga cookies',
    description: 'Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av i våra system.',
    cookies: [
      {
        name: 'lymo-cookie-consent',
        purpose: 'Sparar dina cookie-preferenser',
        duration: '1 år'
      }
    ]
  },
  analytics: {
    name: 'Analys-cookies',
    description: 'Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in och rapportera information anonymt.',
    cookies: [
      {
        name: '_ga',
        purpose: 'Google Analytics - Skiljer användare åt',
        duration: '2 år'
      },
      {
        name: '_ga_*',
        purpose: 'Google Analytics - Lagrar sessionstillstånd',
        duration: '2 år'
      }
    ]
  },
  marketing: {
    name: 'Marknadsföring-cookies',
    description: 'Dessa cookies används för att spåra besökare över webbplatser för att visa relevanta annonser.',
    cookies: []
  },
  functional: {
    name: 'Funktionalitet-cookies',
    description: 'Dessa cookies möjliggör förbättrad funktionalitet och personalisering.',
    cookies: []
  }
} as const
