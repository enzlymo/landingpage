'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslations } from '@/lib/useTranslations'

export function Navigation() {
  const { t, locale, switchLocale } = useTranslations()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { href: '/ai-video', label: 'AI Video' },
    { href: '/ai-image', label: 'AI Image' },
    { href: '/ai-studios', label: 'AI Studios' },
  ]

  const moreItems = [
    { href: '/business', label: 'Business' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="px-4 md:px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image 
                  src="/lymo-logo.png" 
                  alt="Lymo Logo" 
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
                
                {/* More Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    More
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMoreDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {moreItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsMoreDropdownOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      
                      {/* Language Switcher in Dropdown */}
                      <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                        <div className="text-xs text-gray-500 mb-2">Language</div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              switchLocale('en')
                              setIsMoreDropdownOpen(false)
                            }}
                            className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                              locale === 'en' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            English
                          </button>
                          <button
                            onClick={() => {
                              switchLocale('sv')
                              setIsMoreDropdownOpen(false)
                            }}
                            className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                              locale === 'sv' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            Svenska
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
              
              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                {/* Primary CTA */}
                <Link href="https://app.lymo.me">
                  <Button className="artlist-btn-primary">
                    Start Free Now
                  </Button>
                </Link>
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-[88px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile More Items */}
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500 mb-3">Language</div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      switchLocale('en')
                      setIsMobileMenuOpen(false)
                    }}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                      locale === 'en' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      switchLocale('sv')
                      setIsMobileMenuOpen(false)
                    }}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                      locale === 'sv' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Svenska
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
