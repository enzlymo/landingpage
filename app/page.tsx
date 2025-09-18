'use client'

import { Button } from "@/components/ui/button"
import { VideoCard } from "@/components/ui/video-card"
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { Play, ArrowRight, Sparkles, Zap, Target, Users, BarChart3, CheckCircle, Quote } from "lucide-react"
import { DynamicWaitlist } from "@/components/ui/dynamic-waitlist"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Page() {
  return (
    <div className={`flex flex-col min-h-screen ${inter.variable} font-sans bg-white text-gray-900`}>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/lymo-logo.png" 
                alt="Lymo Logo" 
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Features', 'How It Works', 'Pricing'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center space-x-3">
              <Button 
                onClick={() => {
                  const waitlistElement = document.querySelector('.launchlist-widget');
                  if (waitlistElement) {
                    waitlistElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="sm" 
                className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] hover:from-[#F1C40F] hover:to-[#D4AC0D] text-gray-900 font-semibold text-sm px-6 shadow-lg"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FCF3CF] via-white to-[#F7DC6F]/20">
          {/* Simple background gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,208,63,0.08),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,220,111,0.06),transparent_70%)]" />
          </div>
          
          <div className="relative w-full z-10">
            <div className="max-w-5xl mx-auto px-6 py-16">
              
              {/* Hero Content */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  AI-Powered Content Generation
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-5 text-gray-900">
                  Generate{' '}
                  <span className="bg-gradient-to-r from-[#F4D03F] via-[#F1C40F] to-[#FF6633] bg-clip-text text-transparent font-medium">
                    images, videos & UGC
                  </span>{' '}
                  with just a link
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed mb-8 font-medium">
                  Transform any URL into high-converting visual content. AI-powered generation for images, videos, and user-generated content - no design skills needed.
                </p>

                {/* Primary Waitlist Widget */}
                <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#F4D03F]/20 shadow-xl mb-8">
                  <DynamicWaitlist 
                    showTitle={true}
                    title="Unlock Early Access to Lymo AI"
                    description="Get priority entry and exclusive updates."
                    height="160px" 
                  />
                </div>

                {/* Social Proof */}
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#F4D03F]/20 shadow-lg">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-gray-900">1,000+</span>
                    <span className="text-gray-600 ml-1">creators trust Lymo</span>
                  </div>
                </div>
              </div>

              {/* Featured Video Showcase */}
              <div className="max-w-4xl mx-auto mb-12 px-4 py-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-[#F4D03F]/20">
                <div className="text-center mb-6">
                  <p className="text-sm font-medium text-[#D4AC0D] uppercase tracking-wide mb-2">
                    Generated with Lymo AI
                  </p>
                  <h3 className="text-xl md:text-2xl font-light text-gray-900">
                    From URL to content in seconds
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {[
                    {
                      poster: "/images/photo-1.jpg",
                      title: "Product videos from website links",
                      stats: { views: "142k", likes: "2.2k" },
                      overlay: { text: "URL → VIDEO", position: "top" as const }
                    },
                    {
                      poster: "/images/photo-2.jpg", 
                      title: "UGC content from any source",
                      stats: { views: "98k", likes: "1.8k" },
                      overlay: { text: "UGC AI", position: "center" as const }
                    },
                    {
                      poster: "/images/photo-3.jpg",
                      title: "Social media posts from links", 
                      stats: { views: "205k", likes: "3.4k" },
                      overlay: { text: "SOCIAL", position: "center" as const }
                    }
                  ].map((video, index) => (
                    <div
                      key={index}
                      className="aspect-[9/16] relative w-full max-w-[280px] mx-auto"
                    >
                      <VideoCard
                        poster={video.poster}
                        title={video.title}
                        stats={video.stats}
                        overlay={video.overlay}
                        className="rounded-2xl shadow-xl border-2 border-[#F4D03F]/20"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Everything you need to create
                <span className="block font-medium bg-gradient-to-r from-[#F4D03F] via-[#F1C40F] to-[#FF6633] bg-clip-text text-transparent">
                  converting video content
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional video creation tools powered by advanced AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Generate videos in under 60 seconds"
                },
                {
                  icon: Target,
                  title: "AI Optimization",
                  description: "Smart algorithms for maximum engagement"
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Real-time collaboration tools"
                },
                {
                  icon: BarChart3,
                  title: "Analytics",
                  description: "Detailed performance insights"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-xl flex items-center justify-center shadow-lg">
                      <feature.icon className="h-6 w-6 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Simple process,
                <span className="block font-medium">powerful results</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Create professional videos in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Enter Your Content",
                  description: "Simply describe your video concept or paste your marketing copy"
                },
                {
                  step: "02", 
                  title: "AI Generates Video",
                  description: "Our AI creates professional video with visuals, animations, and effects"
                },
                {
                  step: "03",
                  title: "Export & Share",
                  description: "Download in multiple formats optimized for any platform"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-2xl text-gray-900 text-lg font-bold shadow-lg mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing with Waitlist */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Simple, transparent
                <span className="block font-medium">pricing</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join the waitlist for exclusive early access pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  period: "/month",
                  description: "Perfect for individuals and small teams",
                  features: [
                    "10 videos per month",
                    "HD video quality",
                    "Basic templates",
                    "Email support"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$99",
                  period: "/month",
                  description: "For growing businesses and agencies",
                  features: [
                    "Unlimited videos",
                    "4K video quality",
                    "Premium templates",
                    "Priority support",
                    "Custom branding"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "For large organizations with custom needs",
                  features: [
                    "Everything in Professional",
                    "Dedicated account manager",
                    "Custom integrations",
                    "Advanced analytics",
                    "SLA guarantee"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 border-2 ${
                    plan.popular 
                      ? 'border-[#F4D03F] bg-gradient-to-b from-[#F4D03F]/5 to-white shadow-xl' 
                      : 'border-gray-200 bg-white shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-light text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-600">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm mb-6 text-gray-600">
                      {plan.description}
                    </p>
                    <div className="w-full mb-6">
                      <DynamicWaitlist height="120px" />
                    </div>
                    <ul className="text-left space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-3 text-[#F4D03F]" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Ready to transform your
                <span className="block font-medium">content creation?</span>
              </h2>
              <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already making high-converting videos with AI
              </p>
              <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-900/20 shadow-xl">
                <DynamicWaitlist 
                  showTitle={true}
                  title="Unlock Early Access to Lymo AI"
                  description="Get priority entry and exclusive updates."
                  height="150px"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image 
                src="/images/lymo-logo.png" 
                alt="Lymo Logo" 
                width={32}
                height={32}
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lymo AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}