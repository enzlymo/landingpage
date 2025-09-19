// EU countries that require GDPR compliance
export const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'
]

export type SupportedLanguage = 'sv' | 'en' | 'none'

// Detect user's location and determine appropriate language
export const detectLanguage = async (): Promise<SupportedLanguage> => {
  try {
    // First try to get location from browser API (if user allows)
    if ('geolocation' in navigator) {
      // For now, we'll use a simpler approach with browser language
      const browserLang = navigator.language.toLowerCase()
      
      // Swedish users get Swedish
      if (browserLang.startsWith('sv')) {
        return 'sv'
      }
      
      // Try to detect EU languages for English fallback
      const euLanguages = [
        'de', 'fr', 'it', 'es', 'pt', 'nl', 'pl', 'da', 'fi', 'no',
        'cs', 'sk', 'hu', 'ro', 'bg', 'hr', 'sl', 'lv', 'lt', 'et'
      ]
      
      if (euLanguages.some(lang => browserLang.startsWith(lang))) {
        return 'en'
      }
    }
    
    // Try IP-based geolocation (fallback)
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      const country = data.country_code
      
      if (country === 'SE') {
        return 'sv'
      } else if (EU_COUNTRIES.includes(country)) {
        return 'en'
      }
    }
    
    // Default fallback - no cookie banner for non-EU
    return 'none'
  } catch (error) {
    console.log('Language detection failed, using browser language fallback')
    
    // Fallback to browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('sv')) {
      return 'sv'
    } else if (browserLang.startsWith('en') || browserLang.startsWith('de') || browserLang.startsWith('fr')) {
      return 'en'
    }
    
    return 'none'
  }
}

// Cookie banner translations
export const translations = {
  sv: {
    banner: {
      title: "Vi värnar om din integritet",
      description: "Vi använder cookies för att förbättra din upplevelse, analysera webbplatstrafik och för marknadsföring. Du kan hantera dina preferenser nedan. Genom att klicka &quot;Acceptera alla&quot; samtycker du till användning av alla cookies.",
      acceptAll: "Acceptera alla",
      rejectAll: "Avvisa alla",
      managePreferences: "Hantera preferenser",
      loading: "Laddar...",
      cookiePolicy: "Cookie-policy",
      privacyPolicy: "Integritetspolicy"
    },
    modal: {
      title: "Cookie-inställningar",
      description: "Vi använder cookies för att förbättra din upplevelse på vår webbplats. Du kan välja vilka typer av cookies du vill tillåta nedan.",
      acceptAll: "Acceptera alla",
      saveChoices: "Spara val",
      necessary: "Nödvändiga cookies",
      analytics: "Analys-cookies",
      marketing: "Marknadsföring-cookies",
      functional: "Funktionalitet-cookies",
      necessaryDesc: "Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av i våra system.",
      analyticsDesc: "Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in och rapportera information anonymt.",
      marketingDesc: "Dessa cookies används för att spåra besökare över webbplatser för att visa relevanta annonser.",
      functionalDesc: "Dessa cookies möjliggör förbättrad funktionalitet och personalisering.",
      showCookies: "Visa cookies",
      hideCookies: "Dölj cookies",
      required: "Nödvändig",
      readFullPolicy: "Läs vår fullständiga cookie-policy"
    }
  },
  en: {
    banner: {
      title: "We care about your privacy",
      description: "We use cookies to improve your experience, analyze website traffic, and for marketing purposes. You can manage your preferences below. By clicking &quot;Accept all&quot; you consent to the use of all cookies.",
      acceptAll: "Accept all",
      rejectAll: "Reject all",
      managePreferences: "Manage preferences",
      loading: "Loading...",
      cookiePolicy: "Cookie policy",
      privacyPolicy: "Privacy policy"
    },
    modal: {
      title: "Cookie settings",
      description: "We use cookies to improve your experience on our website. You can choose which types of cookies you want to allow below.",
      acceptAll: "Accept all",
      saveChoices: "Save choices",
      necessary: "Necessary cookies",
      analytics: "Analytics cookies",
      marketing: "Marketing cookies",
      functional: "Functional cookies",
      necessaryDesc: "These cookies are necessary for the website to function and cannot be turned off in our systems.",
      analyticsDesc: "These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously.",
      marketingDesc: "These cookies are used to track visitors across websites to display relevant advertisements.",
      functionalDesc: "These cookies enable enhanced functionality and personalization.",
      showCookies: "Show cookies",
      hideCookies: "Hide cookies",
      required: "Required",
      readFullPolicy: "Read our full cookie policy"
    }
  }
} as const

// Get current language from localStorage or detect
export const getCurrentLanguage = (): SupportedLanguage => {
  if (typeof window === 'undefined') return 'none'
  
  const stored = localStorage.getItem('lymo-language')
  if (stored && (stored === 'sv' || stored === 'en' || stored === 'none')) {
    return stored as SupportedLanguage
  }
  
  return 'none' // Default until detection completes
}

// Set language in localStorage
export const setLanguage = (lang: SupportedLanguage) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lymo-language', lang)
  }
}
