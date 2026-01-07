'use client'

import { Mail } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";

export default function BusinessPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navigation - Same as landing page */}
      <Navigation />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Business Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Scale your content creation with AI-powered video and image generation. 
              Perfect for e-commerce stores, marketing agencies, and enterprise teams.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Bulk Generation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Generate hundreds of product videos and images in minutes. Perfect for large catalogs and multiple product lines.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Team Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-user accounts with role-based permissions and centralized asset management for your entire team.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Custom Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  API access and custom integrations with your existing e-commerce platforms and marketing tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Perfect for Your Industry
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-200 rounded-2xl">
                <h3 className="text-xl font-medium text-gray-900 mb-4">E-commerce Stores</h3>
                <p className="text-gray-600 mb-4">Transform product catalogs into engaging video content for better conversion rates.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Higher conversion rates</li>
                  <li>• Reduced bounce rates</li>
                  <li>• Better SEO performance</li>
                </ul>
              </div>

              <div className="p-8 border border-gray-200 rounded-2xl">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Marketing Agencies</h3>
                <p className="text-gray-600 mb-4">Scale your content creation services with AI-powered generation.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Faster client delivery</li>
                  <li>• Higher profit margins</li>
                  <li>• More creative capacity</li>
                </ul>
              </div>

              <div className="p-8 border border-gray-200 rounded-2xl">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Enterprise Retailers</h3>
                <p className="text-gray-600 mb-4">Automate content creation across multiple brands and product lines.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Consistent brand messaging</li>
                  <li>• Reduced production costs</li>
                  <li>• Faster time-to-market</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact us to learn more about our business solutions and custom pricing.
            </p>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md mx-auto">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6">
                <Mail className="w-8 h-8 text-gray-600" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4">Get in Touch</h3>
              
              <a 
                href="mailto:lymoadsai@gmail.com?subject=Business%20Inquiry%20-%20Enterprise%20Solutions"
                className="inline-block text-lg text-gray-900 hover:text-gray-600 transition-colors mb-4 font-medium"
              >
                lymoadsai@gmail.com
              </a>
              
              <p className="text-sm text-gray-600">
                We typically respond within 2 hours during business hours.
              </p>
            </div>
          </div>
        </section>
      </main>

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
            }
          })
        }}
      />
    </div>
  );
}
