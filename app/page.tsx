'use client'

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { VideoCard } from "@/components/ui/video-card"
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { Play, ArrowRight, Sparkles, Zap, Target, Users, BarChart3, Star, CheckCircle, Quote, ChevronDown, Clock, Shield, Headphones } from "lucide-react"
import { HeroAnimatedBackground } from "@/components/ui/HeroAnimatedBackground"
import { FloatingElement } from "@/components/ui/floating-element"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedText } from "@/components/ui/animated-text"
import { PremiumScrollIndicator } from "@/components/ui/micro-interactions"
import { MouseGlowEffect } from "@/components/ui/mouse-glow-effect"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Page() {
  // Parallax effect for hero section
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  
  // Register GSAP plugins
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // State for page load animation
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glowElements = document.querySelectorAll('.glow-text');
      glowElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (element as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (element as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
              <Button variant="ghost" size="sm" className="text-sm text-gray-600 hover:text-gray-900">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] hover:from-[#F1C40F] hover:to-[#D4AC0D] text-gray-900 font-semibold text-sm px-6 shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FCF3CF] via-white to-[#F7DC6F]/20">
          {/* Enhanced animated background with yellow tones */}
          <div className="absolute inset-0">
            {/* Animated gradient background */}
            <AnimatedGradientBackground className="z-0" />
            
            {/* Original static gradients for layering */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,208,63,0.08),transparent_70%)] z-1" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,220,111,0.06),transparent_70%)] z-1" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI0NCwyMDgsNjMsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 z-2" />
          </div>
          
          <div className="relative w-full z-10">
            <div className="max-w-5xl mx-auto px-6 py-16">
              
              {/* Hero Content */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 rounded-full text-sm font-semibold mb-8 shadow-lg"
                >
                  <FloatingElement floatIntensity="subtle" rotateIntensity="none" delay={0.5}>
                    <Sparkles className="h-4 w-4" />
                  </FloatingElement>
                  AI-Powered Content Generation
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-5 text-gray-900"
                >
                  Generate{' '}
                  <span className="bg-gradient-to-r from-[#F4D03F] via-[#F1C40F] to-[#FF6633] bg-clip-text text-transparent font-medium relative inline-block glow-text">
                    images, videos & UGC
                  </span>{' '}
                  with just a link
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base md:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed mb-6 font-medium"
                >
                  Transform any URL into high-converting visual content. AI-powered generation for images, videos, and user-generated content - no design skills needed.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] hover:from-[#F1C40F] hover:to-[#D4AC0D] text-gray-900 font-semibold px-8 h-12 text-base rounded-full shadow-xl"
                  >
                    Start Generating <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#F4D03F] text-gray-700 hover:bg-[#F4D03F]/10 px-8 h-12 text-base rounded-full"
                  >
                    <Play className="mr-2 h-4 w-4" /> See it in action
                  </Button>
                </motion.div>
              </div>

              {/* Featured Video Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-4xl mx-auto mb-12 px-4 py-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-[#F4D03F]/20"
              >
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
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + (index * 0.1) 
                      }}
                      className="aspect-[9/16] relative group w-full max-w-[280px] mx-auto"
                      whileHover={{ y: -5 }}
                    >
                      <VideoCard
                        poster={video.poster}
                        title={video.title}
                        stats={video.stats}
                        overlay={video.overlay}
                        className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-[#F4D03F]/20"
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Social Proof */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex justify-center mt-12"
                >
                  <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full border-2 border-[#F4D03F]/20 shadow-lg">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className="w-10 h-10 rounded-full border-3 border-white bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] shadow-lg"
                        />
                      ))}
                    </div>
                    <div className="text-base">
                      <span className="font-bold text-gray-900 text-xl">1,000+</span>
                      <span className="text-gray-600 ml-2">creators trust Lymo</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex justify-center mt-12"
              >
                <PremiumScrollIndicator className="border-[#F4D03F]/40" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Everything you need to create
                <span className="block font-medium bg-gradient-to-r from-[#F4D03F] via-[#F1C40F] to-[#FF6633] bg-clip-text text-transparent">
                  converting video content
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional video creation tools powered by advanced AI technology
              </p>
            </motion.div>

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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AnimatedCard 
                    className="bg-white rounded-2xl p-6 border border-gray-100 h-full"
                    glowColor="rgba(244, 208, 63, 0.3)"
                    hoverScale={1.03}
                    depth="medium"
                  >
                    <FloatingElement 
                      floatIntensity="subtle" 
                      rotateIntensity="subtle" 
                      delay={index * 0.2}
                      className="mb-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-xl flex items-center justify-center shadow-lg">
                        <feature.icon className="h-6 w-6 text-gray-900" />
                      </div>
                    </FloatingElement>
                    <AnimatedText
                      as="h3"
                      animation="slide"
                      delay={0.1 + index * 0.1}
                      className="text-lg font-semibold text-gray-900 mb-2"
                    >
                      {feature.title}
                    </AnimatedText>
                    <AnimatedText
                      as="p"
                      animation="fade"
                      delay={0.2 + index * 0.1}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {feature.description}
                    </AnimatedText>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - Company Logos */}
        <section className="py-16 bg-[#FCF3CF]/30 border-y border-[#F4D03F]/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-sm font-medium text-[#D4AC0D] mb-8">
                Trusted by leading companies worldwide
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
                {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <div className="h-10 bg-gradient-to-r from-[#F4D03F]/20 to-[#F1C40F]/20 border border-[#F4D03F]/30 rounded-lg px-6 flex items-center justify-center">
                      <span className="text-gray-700 font-medium text-sm">{company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Simple process,
                <span className="block font-medium">powerful results</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Create professional videos in three simple steps
              </p>
            </motion.div>

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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <FloatingElement 
                    floatIntensity="medium" 
                    rotateIntensity="subtle" 
                    delay={index * 0.3}
                    className="inline-block mb-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-2xl text-gray-900 text-lg font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                      {step.step}
                    </div>
                  </FloatingElement>
                  <AnimatedText
                    as="h3"
                    animation="slide"
                    delay={0.1 + index * 0.1}
                    className="text-xl font-semibold text-gray-900 mb-3"
                  >
                    {step.title}
                  </AnimatedText>
                  <AnimatedText
                    as="p"
                    animation="fade"
                    delay={0.2 + index * 0.1}
                    className="text-gray-600 leading-relaxed"
                  >
                    {step.description}
                  </AnimatedText>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#FCF3CF]/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Loved by creators
                <span className="block font-medium">worldwide</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what our customers have to say about Lymo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Lymo transformed how we create content. What used to take hours now takes minutes.",
                  author: "Sarah Johnson",
                  title: "Marketing Director",
                  company: "TechCorp"
                },
                {
                  quote: "The AI quality is incredible. Our engagement rates have increased by 300%.",
                  author: "Michael Chen",
                  title: "Creative Director", 
                  company: "BrandStudio"
                },
                {
                  quote: "Finally, a tool that understands what we need. The results speak for themselves.",
                  author: "Emily Rodriguez",
                  title: "Social Media Manager",
                  company: "GrowthLab"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AnimatedCard 
                    className="bg-white rounded-2xl p-8 border border-[#F4D03F]/20 h-full relative overflow-hidden"
                    glowColor="rgba(244, 208, 63, 0.2)"
                    hoverScale={1.02}
                    depth="shallow"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F]" />
                    <FloatingElement floatIntensity="subtle" rotateIntensity="none" delay={index * 0.2}>
                      <Quote className="h-8 w-8 text-[#F4D03F] mb-4" />
                    </FloatingElement>
                    <AnimatedText
                      as="p"
                      animation="fade"
                      delay={0.1 + index * 0.1}
                      className="text-gray-900 mb-6 leading-relaxed"
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </AnimatedText>
                    <div className="flex items-center">
                      <FloatingElement floatIntensity="subtle" rotateIntensity="subtle" delay={0.5 + index * 0.1}>
                        <div className="w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] rounded-full mr-4 shadow-lg" />
                      </FloatingElement>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <AnimatedText
                as="h2"
                animation="words"
                delay={0.1}
                className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
              >
                Simple, transparent
                <span className="block font-medium">pricing</span>
              </AnimatedText>
              <AnimatedText
                as="p"
                animation="fade"
                delay={0.3}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Choose the plan that&apos;s right for your team
              </AnimatedText>
            </motion.div>

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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    <Button 
                      className={`w-full mb-6 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 font-semibold shadow-lg hover:shadow-xl' 
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Get Started
                    </Button>
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#FCF3CF]/20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Frequently asked
                <span className="block font-medium">questions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about Lymo
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: "How does AI video generation work?",
                  answer: "Our AI analyzes your text input and automatically generates professional videos with relevant visuals, animations, and effects. The process typically takes under 60 seconds."
                },
                {
                  question: "What video formats do you support?",
                  answer: "We support all major video formats including MP4, MOV, and AVI. Videos can be exported in various resolutions from HD to 4K, optimized for different platforms."
                },
                {
                  question: "Can I customize the generated videos?",
                  answer: "Yes! You can customize colors, fonts, music, and visual elements. Our editor allows you to fine-tune every aspect of your video to match your brand."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "We offer a 14-day free trial with access to all features. No credit card required to get started."
                },
                {
                  question: "How do you ensure video quality?",
                  answer: "Our AI is trained on millions of high-quality videos and uses advanced algorithms to ensure professional results. All videos are rendered in high resolution with optimized compression."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-[#F4D03F]/20 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Ready to transform your
                <span className="block font-medium">content creation?</span>
              </h2>
              <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already making high-converting videos with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gray-900 text-white hover:bg-gray-800 px-8 h-12 text-base font-medium rounded-full shadow-xl"
                >
                  Start creating for free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 h-12 text-base rounded-full"
                >
                  Book a demo
                </Button>
              </div>
            </motion.div>
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