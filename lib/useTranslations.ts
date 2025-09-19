import { useEffect, useState } from 'react'
import { getTranslations, type Locale } from './translations'

// Simple locale detection
const detectUserLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en'
  
  // Check localStorage first
  const stored = localStorage.getItem('lymo-locale')
  if (stored === 'sv' || stored === 'en') {
    return stored as Locale
  }
  
  // Check browser language
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('sv')) {
    return 'sv'
  }
  
  return 'en'
}

export function useTranslations() {
  const [locale, setLocale] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    const detectedLocale = detectUserLocale()
    setLocale(detectedLocale)
    setMounted(true)
  }, [])
  
  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('lymo-locale', newLocale)
  }
  
  return {
    t: getTranslations(locale),
    locale,
    isSwedish: locale === 'sv',
    isEnglish: locale === 'en',
    switchLocale,
    mounted
  }
}
