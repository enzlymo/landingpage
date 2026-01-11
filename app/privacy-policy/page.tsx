import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Lymo AI - AI Video Generator",
  description: "Privacy Policy for Lymo AI platform. Learn how we collect, use, and protect your personal data in compliance with GDPR and data protection laws.",
  keywords: "privacy policy, lymo ai, gdpr, data protection, personal data, cookies, analytics",
  openGraph: {
    title: "Privacy Policy | Lymo AI",
    description: "Privacy Policy for Lymo AI platform. Learn how we collect, use, and protect your personal data in compliance with GDPR.",
    url: "https://lymo.me/privacy-policy",
    siteName: "Lymo AI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Lymo AI",
    description: "Privacy Policy for Lymo AI platform. Learn how we collect, use, and protect your personal data in compliance with GDPR.",
  },
  alternates: {
    canonical: "https://lymo.me/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Lymo AI platform. Learn how we collect, use, and protect your personal data in compliance with GDPR.",
    "url": "https://lymo.me/privacy-policy",
    "mainEntity": {
      "@type": "Organization",
      "name": "LYMERA AB",
      "url": "https://lymo.me",
      "email": "lymoadsai@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SE"
      }
    },
    "dateModified": "2025-09-22",
    "inLanguage": "en"
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">
              <strong>LYMERA AB</strong><br />
              <strong>Effective Date:</strong> September 22, 2025<br />
              <strong>Last Updated:</strong> September 22, 2025
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LYMERA AB (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Lymo platform (lymo.me) and related services (&quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Data Controller Information:</strong><br />
                • Company: LYMERA AB<br />
                • Country: Sweden<br />
                • Contact: lymoadsai@gmail.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Personal Information You Provide</h3>
            <p className="text-gray-700 mb-2">When you register for and use our Service, we may collect:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li><strong>Account Information:</strong> Email address, first name, last name, password (encrypted)</li>
              <li><strong>Profile Information:</strong> Industry, company name, job title, company size, profile image</li>
              <li><strong>Authentication Data:</strong> Google OAuth data if you sign in with Google (name, email, profile picture)</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed through Stripe)</li>
              <li><strong>Communications:</strong> Messages, feedback, and correspondence with us</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Content and Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li><strong>Generated Content:</strong> Scripts, images, videos, and other content you create using our AI services</li>
              <li><strong>Upload Data:</strong> Files, images, and media you upload to our creative library</li>
              <li><strong>Project Data:</strong> Product URLs, inspiration images, and project metadata</li>
              <li><strong>Usage Analytics:</strong> How you interact with our Service, features used, generation history</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, session duration</li>
              <li><strong>Technical Data:</strong> IP address, server logs, error reports</li>
              <li><strong>Location Data:</strong> General location based on IP address (country/region level)</li>
              <li><strong>Session Data:</strong> Login times, activity patterns, real-time usage statistics</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.4 Third-Party Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Analytics Data:</strong> Google Analytics and Vercel Analytics data from lymo.me (cookies, session data, behavior tracking)</li>
              <li><strong>AI Service Data:</strong> Data processed through our AI partner APIs</li>
              <li><strong>Payment Data:</strong> Stripe payment processing and subscription management data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Service Provision</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Provide and maintain the Lymo platform</li>
              <li>Process your requests for content generation</li>
              <li>Manage your account and subscriptions</li>
              <li>Store and organize your creative library</li>
              <li>Provide customer support</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Service Improvement</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Analyze usage patterns to improve our Service</li>
              <li>Develop new features and functionality</li>
              <li>Monitor system performance and reliability</li>
              <li>Conduct A/B testing and user research</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Communication</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Send service-related notifications</li>
              <li>Provide customer support responses</li>
              <li>Send marketing communications (with consent)</li>
              <li>Notify about policy changes and updates</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.4 Legal and Security</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and abuse</li>
              <li>Enforce our Terms of Service</li>
              <li>Maintain security and integrity of our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-700 mb-4">We process your personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Contract Performance:</strong> Processing necessary to provide our Service</li>
              <li><strong>Legitimate Interests:</strong> Service improvement, security, and business operations</li>
              <li><strong>Consent:</strong> Marketing communications and optional features</li>
              <li><strong>Legal Compliance:</strong> Compliance with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Third-Party Service Providers</h3>
            <p className="text-gray-700 mb-2">We share data with trusted service providers who assist in operating our Service:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li><strong>Supabase:</strong> Database and authentication services (EU hosting)</li>
              <li><strong>Stripe:</strong> Payment processing and subscription management</li>
              <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
              <li><strong>Vercel Analytics:</strong> Privacy-first website analytics and performance metrics</li>
              <li><strong>AWS:</strong> Content moderation and file scanning (EU region)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Business Transfers</h3>
            <p className="text-gray-700 mb-4">
              In case of merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Legal Requirements</h3>
            <p className="text-gray-700 mb-4">
              We may disclose your information when required by law, court order, or governmental request.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.4 Safety and Security</h3>
            <p className="text-gray-700">
              We may disclose information to protect the safety of users, enforce our policies, or prevent fraud.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">We retain your personal data for as long as necessary to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Provide our Service to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">Specific Retention Periods:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Account Data:</strong> Until account deletion or 3 years after last activity</li>
              <li><strong>Content Data:</strong> Until manually deleted by user or account termination</li>
              <li><strong>Usage Analytics:</strong> 2 years from collection</li>
              <li><strong>Payment Records:</strong> 7 years (legal requirement)</li>
              <li><strong>Security Logs:</strong> 1 year</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures to protect your data:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Encryption:</strong> Data encrypted in transit and at rest</li>
              <li><strong>Access Controls:</strong> Role-based access limitations</li>
              <li><strong>Content Moderation:</strong> Automated scanning for inappropriate content</li>
              <li><strong>Security Monitoring:</strong> Continuous monitoring and incident response</li>
              <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">Your data may be processed in countries outside the EU/EEA. We ensure adequate protection through:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Standard Contractual Clauses:</strong> EU-approved transfer mechanisms</li>
              <li><strong>Adequacy Decisions:</strong> Transfers to countries with adequate protection</li>
              <li><strong>Privacy Shield:</strong> For US-based service providers (where applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Your Rights Under GDPR</h2>
            <p className="text-gray-700 mb-4">As a data subject, you have the following rights:</p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Access</h3>
            <p className="text-gray-700 mb-4">Request access to your personal data and information about our processing</p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Rectification</h3>
            <p className="text-gray-700 mb-4">Request correction of inaccurate or incomplete data</p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">9.3 Erasure (&quot;Right to be Forgotten&quot;)</h3>
            <p className="text-gray-700 mb-4">Request deletion of your personal data under certain circumstances</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-blue-800">Faster Account Deletion Available</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    For quicker processing, email us at <a href="mailto:contact@lymo.me" className="underline">contact@lymo.me</a> to delete your account. 
                    We typically process email requests within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium text-gray-900 mb-3">9.4 Restriction</h3>
            <p className="text-gray-700 mb-4">Request limitation of processing under certain conditions</p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">9.5 Data Portability</h3>
            <p className="text-gray-700 mb-4">Request your data in a structured, machine-readable format</p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">9.6 Objection</h3>
            <p className="text-gray-700 mb-4">Object to processing based on legitimate interests or for marketing purposes</p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">9.7 Withdrawal of Consent</h3>
            <p className="text-gray-700 mb-4">Withdraw consent for processing (where consent is the legal basis)</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>To exercise your rights, contact us at lymoadsai@gmail.com</strong>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cookies and Tracking Technologies</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 Our Website (lymo.me)</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li><strong>Google Analytics:</strong> Performance and usage analytics</li>
              <li><strong>Vercel Analytics:</strong> Privacy-first analytics and performance monitoring</li>
              <li><strong>Essential Cookies:</strong> Authentication and security</li>
              <li><strong>Preference Cookies:</strong> User settings and preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 Cookie Management</h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Note that disabling certain cookies may affect functionality. For more details, see our{" "}
              <Link href="/cookie-policy" className="text-blue-600 hover:text-blue-800 underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Marketing and Communications</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">11.1 Email Marketing</h3>
            <p className="text-gray-700 mb-4">
              We may send marketing emails with your consent. You can unsubscribe at any time.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">11.2 Service Communications</h3>
            <p className="text-gray-700">
              We send essential service communications regardless of marketing preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Our Service is not intended for users under 16 years of age. We do not knowingly collect personal data from children under 16.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of material changes via email or Service notification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Data Protection Officer</h2>
            <p className="text-gray-700 mb-4">
              For privacy-related inquiries, contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700">
                Email: lymoadsai@gmail.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Privacy Policy or our data practices:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>LYMERA AB</strong><br />
                Email: lymoadsai@gmail.com<br />
                Privacy Contact: lymoadsai@gmail.com
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600 italic">
              This Privacy Policy is governed by Swedish law and GDPR requirements.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
