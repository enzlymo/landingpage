import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Lymo AI - AI Video Generator",
  description: "Cookie Policy for Lymo AI platform. Learn how we use cookies and similar tracking technologies on our website.",
  openGraph: {
    title: "Cookie Policy | Lymo AI",
    description: "Cookie Policy for Lymo AI platform",
    url: "https://lymo.me/cookie-policy",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | Lymo AI",
    description: "Cookie Policy for Lymo AI platform",
  },
  alternates: {
    canonical: "https://lymo.me/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
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
          <h1 className="text-4xl font-light text-gray-900 mb-8">Cookie Policy</h1>
          
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
              This Cookie Policy explains how LYMERA AB (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking technologies on our website lymo.me and related services (the &quot;Service&quot;).
            </p>
            <p className="text-gray-700 leading-relaxed">
              This policy should be read together with our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800 underline">
                Terms of Service
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit a website. They contain information that is transferred to your device&apos;s hard drive and help websites recognize your device and remember certain information about your visit.
            </p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Types of Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until manually deleted</li>
              <li><strong>First-Party Cookies:</strong> Set by the website you&apos;re visiting (lymo.me)</li>
              <li><strong>Third-Party Cookies:</strong> Set by external services we use (like Google Analytics)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies We Use</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Essential Cookies</h3>
            <p className="text-gray-700 mb-4">These cookies are necessary for the basic functionality of our Service:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Cookie Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Purpose</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Duration</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Type</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">session_token</td>
                    <td className="px-4 py-2 border-b">Maintains user login session</td>
                    <td className="px-4 py-2 border-b">Session</td>
                    <td className="px-4 py-2 border-b">First-party</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">auth_state</td>
                    <td className="px-4 py-2 border-b">Authentication state management</td>
                    <td className="px-4 py-2 border-b">24 hours</td>
                    <td className="px-4 py-2 border-b">First-party</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">csrf_token</td>
                    <td className="px-4 py-2 border-b">Security protection against cross-site request forgery</td>
                    <td className="px-4 py-2 border-b">Session</td>
                    <td className="px-4 py-2 border-b">First-party</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono">cookie_consent</td>
                    <td className="px-4 py-2">Stores your cookie preferences</td>
                    <td className="px-4 py-2">1 year</td>
                    <td className="px-4 py-2">First-party</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Analytics Cookies</h3>
            <p className="text-gray-700 mb-4">We use Google Analytics and Vercel Analytics to understand how visitors use our website:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Cookie Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Purpose</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Duration</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Type</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">_ga</td>
                    <td className="px-4 py-2 border-b">Distinguishes unique users</td>
                    <td className="px-4 py-2 border-b">2 years</td>
                    <td className="px-4 py-2 border-b">Third-party (Google)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">_ga_*</td>
                    <td className="px-4 py-2 border-b">Contains campaign-related information</td>
                    <td className="px-4 py-2 border-b">2 years</td>
                    <td className="px-4 py-2 border-b">Third-party (Google)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">_gid</td>
                    <td className="px-4 py-2 border-b">Distinguishes unique users</td>
                    <td className="px-4 py-2 border-b">24 hours</td>
                    <td className="px-4 py-2 border-b">Third-party (Google)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">_gat</td>
                    <td className="px-4 py-2 border-b">Throttles request rate</td>
                    <td className="px-4 py-2 border-b">1 minute</td>
                    <td className="px-4 py-2 border-b">Third-party (Google)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono">va-*</td>
                    <td className="px-4 py-2">Vercel Analytics tracking and performance metrics</td>
                    <td className="px-4 py-2">Session</td>
                    <td className="px-4 py-2">Third-party (Vercel)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 mb-2"><strong>Analytics Information Collected:</strong></p>
              <p className="text-sm text-blue-800 mb-2"><em>Google Analytics:</em></p>
              <ul className="list-disc pl-4 text-sm text-blue-800 space-y-1 mb-3">
                <li>Pages visited and time spent</li>
                <li>Geographic location (country/region)</li>
                <li>Device and browser information</li>
                <li>Traffic sources and referral data</li>
                <li>User interactions and behavior patterns</li>
              </ul>
              <p className="text-sm text-blue-800 mb-2"><em>Vercel Analytics:</em></p>
              <ul className="list-disc pl-4 text-sm text-blue-800 space-y-1">
                <li>Page views and unique visitors</li>
                <li>Performance metrics (page load times)</li>
                <li>Basic device and browser information</li>
                <li>Referrer information</li>
                <li>No personal identifiers collected</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Functional Cookies</h3>
            <p className="text-gray-700 mb-4">These cookies enhance your experience by remembering your preferences:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Cookie Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Purpose</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Duration</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Type</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">theme_preference</td>
                    <td className="px-4 py-2 border-b">Remembers dark/light mode setting</td>
                    <td className="px-4 py-2 border-b">1 year</td>
                    <td className="px-4 py-2 border-b">First-party</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">language_preference</td>
                    <td className="px-4 py-2 border-b">Stores language selection</td>
                    <td className="px-4 py-2 border-b">1 year</td>
                    <td className="px-4 py-2 border-b">First-party</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">dashboard_layout</td>
                    <td className="px-4 py-2 border-b">Saves dashboard customization</td>
                    <td className="px-4 py-2 border-b">6 months</td>
                    <td className="px-4 py-2 border-b">First-party</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono">tutorial_completed</td>
                    <td className="px-4 py-2">Tracks onboarding progress</td>
                    <td className="px-4 py-2">1 year</td>
                    <td className="px-4 py-2">First-party</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.4 Performance Cookies</h3>
            <p className="text-gray-700 mb-4">These cookies help us monitor and improve our Service performance:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Cookie Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Purpose</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Duration</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Type</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">performance_timing</td>
                    <td className="px-4 py-2 border-b">Measures page load times</td>
                    <td className="px-4 py-2 border-b">Session</td>
                    <td className="px-4 py-2 border-b">First-party</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">error_tracking</td>
                    <td className="px-4 py-2 border-b">Tracks JavaScript errors</td>
                    <td className="px-4 py-2 border-b">Session</td>
                    <td className="px-4 py-2 border-b">First-party</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono">feature_usage</td>
                    <td className="px-4 py-2">Monitors feature adoption</td>
                    <td className="px-4 py-2">30 days</td>
                    <td className="px-4 py-2">First-party</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Consent</h3>
            <p className="text-gray-700 mb-4">
              When you first visit lymo.me, you&apos;ll see a cookie banner that allows you to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences</li>
              <li>Learn more about our cookie usage</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Managing Cookie Preferences</h3>
            <p className="text-gray-700 mb-2">You can change your cookie preferences at any time by:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Visiting our Cookie Preference Center (link in footer)</li>
              <li>Updating your account settings (for logged-in users)</li>
              <li>Using browser controls to block or delete cookies</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">4.3 Browser Controls</h3>
            <p className="text-gray-700 mb-2">Most browsers allow you to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>View and delete cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies (may affect functionality)</li>
              <li>Receive notifications when cookies are set</li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2"><strong>Browser Cookie Settings:</strong></p>
              <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Legal Basis for Cookie Use</h2>
            <p className="text-gray-700 mb-4">Under GDPR and applicable laws, we use cookies based on:</p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Consent</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Analytics cookies (Google Analytics, Vercel Analytics)</li>
              <li>Marketing cookies (when applicable)</li>
              <li>Non-essential functional cookies</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Legitimate Interest</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Essential cookies for Service functionality</li>
              <li>Security and fraud prevention cookies</li>
              <li>Performance monitoring cookies</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Contract Performance</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Authentication and session management cookies</li>
              <li>Payment processing cookies (during transactions)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Protection and Security</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Cookie Security</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Secure transmission using HTTPS</li>
              <li>HttpOnly flags to prevent script access</li>
              <li>SameSite attributes for CSRF protection</li>
              <li>Regular security audits and updates</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Data Retention</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Session cookies: Deleted when browser closes</li>
              <li>Persistent cookies: Automatically expire based on set duration</li>
              <li>Analytics data: Retained according to Google Analytics settings (26 months)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Data Sharing</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>First-party cookies: Data not shared with third parties</li>
              <li>Third-party cookies: Governed by respective privacy policies</li>
              <li>No sale of cookie data to advertisers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">Under GDPR and applicable data protection laws, you have the right to:</p>
            
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request information about cookies and data collection</li>
              <li><strong>Rectification:</strong> Correct inaccurate cookie preference data</li>
              <li><strong>Erasure:</strong> Request deletion of cookie data (where technically feasible)</li>
              <li><strong>Restriction:</strong> Limit cookie processing through preference settings</li>
              <li><strong>Objection:</strong> Object to non-essential cookie usage</li>
              <li><strong>Withdrawal:</strong> Withdraw cookie consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Transfers</h2>
            <p className="text-gray-700 mb-4">Some third-party services may transfer cookie data outside the EU:</p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 Google Analytics</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Data may be transferred to the US</li>
              <li>Google participates in relevant data transfer frameworks</li>
              <li>Standard Contractual Clauses in place</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 Vercel Analytics</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Data may be processed in the US by Vercel Inc.</li>
              <li>Privacy-first analytics with minimal data collection</li>
              <li>Standard Contractual Clauses in place for data transfers</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">8.3 Safeguards</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>We ensure adequate protection for all data transfers</li>
              <li>Regular assessment of third-party compliance</li>
              <li>Alternative solutions for EU data residency when available</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Our Service is not directed to children under 16. We do not knowingly collect cookie data from children under 16 years of age.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">We may update this Cookie Policy to reflect:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Changes in our cookie usage</li>
              <li>New third-party services</li>
              <li>Legal or regulatory requirements</li>
              <li>Technology updates</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 mb-2"><strong>Notification of Changes:</strong></p>
              <ul className="list-disc pl-4 text-sm text-blue-800 space-y-1">
                <li>Email notification for material changes</li>
                <li>Website banner for policy updates</li>
                <li>Updated effective date at the top of this policy</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Do Not Track</h2>
            <p className="text-gray-700">
              Some browsers include &quot;Do Not Track&quot; signals. Currently, there is no standard for how websites should respond to these signals, so we do not alter our cookie practices based on Do Not Track requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Cookie-Free Alternatives</h2>
            <p className="text-gray-700 mb-2">If you prefer not to use cookies, you can:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Use our Service with essential cookies only</li>
              <li>Contact us for alternative access methods</li>
              <li>Use browser private/incognito mode (limited functionality)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Technical Information</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">13.1 Cookie Storage</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Cookies are stored locally on your device</li>
              <li>No personal data in cookie names or most values</li>
              <li>Encrypted authentication tokens for security</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">13.2 Cross-Site Tracking</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>We do not participate in cross-site tracking networks</li>
              <li>Our cookies are specific to lymo.me domain</li>
              <li>Third-party cookies governed by respective policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Cookie Policy or our cookie practices:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>LYMERA AB</strong><br />
                Email: lymoadsai@gmail.com
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600 italic">
              This Cookie Policy is governed by Swedish law and GDPR requirements. Last updated: September 22, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}