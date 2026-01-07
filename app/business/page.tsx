import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Users, Zap, Shield, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Solutions | Lymo AI - Enterprise AI Video & Image Generation",
  description: "Transform your business with Lymo AI's enterprise solutions. Professional AI video generation, bulk content creation, and custom integrations for e-commerce businesses. Contact us at lymoadsai@gmail.com",
  keywords: [
    "business AI video generator",
    "enterprise AI solutions",
    "bulk video creation",
    "e-commerce AI tools",
    "business automation",
    "enterprise video marketing",
    "AI content generation for business",
    "custom AI integrations",
    "business video solutions",
    "enterprise image generation"
  ],
  openGraph: {
    title: "Business Solutions | Lymo AI - Enterprise AI Video & Image Generation",
    description: "Transform your business with Lymo AI's enterprise solutions. Professional AI video generation and custom integrations.",
    url: "https://lymo.me/business",
    type: "website",
    images: [
      {
        url: "/images/lymo-business-og.png",
        width: 1200,
        height: 630,
        alt: "Lymo AI Business Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Solutions | Lymo AI - Enterprise AI Video & Image Generation",
    description: "Transform your business with Lymo AI's enterprise solutions. Professional AI video generation and custom integrations.",
    images: ["/images/lymo-business-twitter.png"]
  },
  alternates: {
    canonical: "https://lymo.me/business"
  }
};

export default function BusinessPage() {
  const businessFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Bulk Content Generation",
      description: "Generate hundreds of product videos and images in minutes, not hours. Perfect for large e-commerce catalogs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant infrastructure with dedicated support and custom data handling agreements."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Multi-user accounts, role-based permissions, and centralized asset management for your entire team."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Custom Integrations",
      description: "API access and custom integrations with your existing e-commerce platforms, CRM, and marketing tools."
    }
  ];

  const useCases = [
    {
      title: "E-commerce Stores",
      description: "Transform product catalogs into engaging video content for better conversion rates.",
      benefits: ["Higher conversion rates", "Reduced bounce rates", "Better SEO performance"]
    },
    {
      title: "Marketing Agencies",
      description: "Scale your content creation services with AI-powered video and image generation.",
      benefits: ["Faster client delivery", "Higher profit margins", "More creative capacity"]
    },
    {
      title: "Enterprise Retailers",
      description: "Automate content creation across multiple brands and product lines.",
      benefits: ["Consistent brand messaging", "Reduced production costs", "Faster time-to-market"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Enterprise AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Scale your business with professional AI video and image generation. 
              Transform your entire product catalog into engaging content in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:lymoadsai@gmail.com?subject=Enterprise%20Inquiry%20-%20Business%20Solutions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales Team
              </a>
              <div className="text-gray-400 text-sm">
                Response within 2 hours • Free consultation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your business content creation with AI-powered automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-gray-900">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses like yours are using Lymo AI to transform their content strategy
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our enterprise team for a personalized demo and custom pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Inquiries</h4>
                      <a 
                        href="mailto:lymoadsai@gmail.com?subject=Enterprise%20Business%20Inquiry"
                        className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
                      >
                        lymoadsai@gmail.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Enterprise sales and partnerships</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Company</h4>
                      <p className="text-gray-700">LYMERA AB</p>
                      <p className="text-gray-600">Sweden</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                      <p className="text-gray-700">Within 2 hours</p>
                      <p className="text-gray-600">Business hours (CET)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join hundreds of businesses already using Lymo AI to create professional content at scale. 
                Get a personalized demo and see how we can transform your content strategy.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:lymoadsai@gmail.com?subject=Demo%20Request%20-%20Business%20Solutions&body=Hi%20Lymo%20team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20business%20solutions.%20Please%20schedule%20a%20demo.%0A%0ACompany:%20%0AIndustry:%20%0ATeam%20Size:%20%0A%0AThank%20you!"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Demo
                </a>
                
                <div className="text-center text-sm text-gray-400">
                  ✓ Free consultation • ✓ Custom pricing • ✓ No commitment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lymo AI",
            "url": "https://lymo.me",
            "logo": "https://lymo.me/images/lymologonew.svg",
            "description": "Enterprise AI video and image generation solutions for businesses",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "lymoadsai@gmail.com",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SE"
            },
            "sameAs": [
              "https://twitter.com/LymoAI",
              "https://linkedin.com/company/lymo-ai"
            ]
          })
        }}
      />
    </div>
  );
}
