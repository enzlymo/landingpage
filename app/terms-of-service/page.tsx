import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Lymo AI - AI Video Generator",
  description: "Terms of Service for Lymo AI platform. Learn about user accounts, acceptable use, intellectual property rights, and legal terms.",
  openGraph: {
    title: "Terms of Service | Lymo AI",
    description: "Terms of Service for Lymo AI platform",
    url: "https://lymo.me/terms-of-service",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Lymo AI",
    description: "Terms of Service for Lymo AI platform",
  },
  alternates: {
    canonical: "https://lymo.me/terms-of-service",
  },
};

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-light text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">
              <strong>LYMERA AB</strong><br />
              <strong>Effective Date:</strong> September 22, 2025<br />
              <strong>Last Updated:</strong> September 22, 2025
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the Lymo platform (the &quot;Service&quot;) operated by LYMERA AB (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access the Service.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Company Information:</strong><br />
                • Name: LYMERA AB<br />
                • Country: Sweden<br />
                • Contact: lymoadsai@gmail.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lymo is an AI-powered content generation platform that enables users to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Generate marketing scripts, images, and videos</li>
              <li>Create and manage creative content libraries</li>
              <li>Process and analyze product information</li>
              <li>Access premium features through subscription plans</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Account Creation</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You must be at least 16 years old to create an account</li>
              <li>One person may not maintain multiple accounts</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Account Responsibility</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>You are responsible for all activities under your account</li>
              <li>You must notify us immediately of any unauthorized access</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Permitted Uses</h3>
            <p className="text-gray-700 mb-2">You may use the Service to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Generate original marketing content for legitimate business purposes</li>
              <li>Store and organize creative assets</li>
              <li>Collaborate with team members (where applicable)</li>
              <li>Access educational and support materials</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Prohibited Uses</h3>
            <p className="text-gray-700 mb-2">You may not use the Service to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Generate content that is illegal, harmful, or violates third-party rights</li>
              <li>Create misleading, false, or deceptive content</li>
              <li>Generate content that infringes intellectual property rights</li>
              <li>Upload malicious software, viruses, or harmful code</li>
              <li>Attempt to reverse engineer or hack the Service</li>
              <li>Use automated tools to access the Service without permission</li>
              <li>Resell or redistribute the Service without authorization</li>
              <li>Generate content promoting violence, hate speech, or discrimination</li>
              <li>Create adult content or content harmful to minors</li>
              <li>Engage in spam, harassment, or abusive behavior</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">4.3 Content Moderation</h3>
            <p className="text-gray-700 mb-2">We employ automated content moderation systems and reserve the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Review and moderate user-generated content</li>
              <li>Remove content that violates these Terms</li>
              <li>Suspend accounts that repeatedly violate our policies</li>
              <li>Report illegal content to appropriate authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Content and Intellectual Property</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Your Content</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>You retain ownership of content you create and upload</li>
              <li>You grant us a license to process, store, and display your content as necessary to provide the Service</li>
              <li>You represent that you have the right to use all uploaded content</li>
              <li>You are responsible for ensuring your content complies with applicable laws</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 AI-Generated Content</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Content generated using our AI services is owned by you</li>
              <li>AI-generated content may not be unique and similar content may be generated for other users</li>
              <li>You are responsible for reviewing and validating AI-generated content before use</li>
              <li>We do not guarantee the accuracy, completeness, or suitability of AI-generated content</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Our Intellectual Property</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>The Service, including software, design, and algorithms, is owned by LYMERA AB</li>
              <li>Our trademarks, logos, and branding are protected intellectual property</li>
              <li>You may not use our intellectual property without written permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Subscription Plans and Billing</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Plan Types</h3>
            <p className="text-gray-700 mb-2">We offer various subscription plans with different features and usage limits:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Free plans with limited functionality</li>
              <li>Premium plans with enhanced features and higher usage limits</li>
              <li>Enterprise plans with custom features and support</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Billing and Payment</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Subscription fees are billed in advance on a recurring basis</li>
              <li>Payment processing is handled by Stripe, Inc.</li>
              <li>All fees are non-refundable unless required by law</li>
              <li>We may change pricing with 30 days' notice</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Free Trials</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Free trial periods may be offered for premium plans</li>
              <li>Trials automatically convert to paid subscriptions unless canceled</li>
              <li>You may cancel during the trial period to avoid charges</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">6.4 Usage Limits</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Each plan includes specific usage limits for content generation</li>
              <li>Exceeding limits may result in service restrictions or upgrade requirements</li>
              <li>Usage is tracked and monitored for billing purposes</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">6.5 Cancellation and Refunds</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>You may cancel your subscription at any time</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>No refunds are provided for partial billing periods</li>
              <li>Free plans may be subject to limitations or termination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>, which is incorporated into these Terms by reference.
            </p>
            
            <p className="text-gray-700 mb-2">Key privacy practices:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>We collect only necessary information to provide the Service</li>
              <li>We comply with GDPR and applicable data protection laws</li>
              <li>We use industry-standard security measures</li>
              <li>We do not sell personal information to third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service integrates with various third-party providers through APIs and services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li><strong>Analytics Services:</strong> Google Analytics and Vercel Analytics for website performance monitoring</li>
              <li><strong>Payment Processing:</strong> Stripe for secure payment handling</li>
              <li><strong>AI Services:</strong> Various AI APIs for content generation</li>
              <li><strong>Infrastructure:</strong> Cloud services for hosting and data processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These integrations are subject to the respective third-party terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Service Availability and Modifications</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Service Availability</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>We strive for high availability but do not guarantee uninterrupted service</li>
              <li>Maintenance windows may result in temporary service unavailability</li>
              <li>We are not liable for service interruptions beyond our control</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Service Modifications</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>We may modify, update, or discontinue features at any time</li>
              <li>Material changes will be communicated with reasonable notice</li>
              <li>Continued use after changes constitutes acceptance of modifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 Disclaimer of Warranties</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800 font-medium">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>

            <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 Limitation of Damages</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800 font-medium">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LYMERA AB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE.
              </p>
            </div>

            <h3 className="text-xl font-medium text-gray-900 mb-3">10.3 Maximum Liability</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800 font-medium">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700 mb-2">
              You agree to indemnify and hold harmless LYMERA AB, its officers, directors, employees, and agents from any claims, damages, losses, and expenses arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of third-party rights</li>
              <li>Content you submit or generate</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">12.1 Termination by You</h3>
            <p className="text-gray-700 mb-2">You may terminate your account at any time by:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Canceling your subscription through account settings</li>
              <li>Contacting customer support</li>
              <li>Following account deletion procedures</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">12.2 Termination by Us</h3>
            <p className="text-gray-700 mb-2">We may terminate or suspend your account if:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>You violate these Terms or our policies</li>
              <li>You engage in fraudulent or illegal activities</li>
              <li>Your account remains inactive for an extended period</li>
              <li>We discontinue the Service</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">12.3 Effect of Termination</h3>
            <p className="text-gray-700 mb-2">Upon termination:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Your access to the Service will cease</li>
              <li>Your content may be deleted according to our retention policy</li>
              <li>Outstanding fees remain payable</li>
              <li>Provisions that should survive termination will continue to apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Dispute Resolution</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">13.1 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by Swedish law, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">13.2 Jurisdiction</h3>
            <p className="text-gray-700 mb-4">
              Any disputes shall be resolved in the courts of Sweden, and you consent to the jurisdiction of such courts.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">13.3 Alternative Dispute Resolution</h3>
            <p className="text-gray-700">
              We encourage informal resolution of disputes. You may contact us at lymoadsai@gmail.com to attempt resolution before initiating formal proceedings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. EU Consumer Rights</h2>
            <p className="text-gray-700 mb-2">For users in the European Union:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>These Terms do not limit your statutory consumer rights</li>
              <li>You may have additional rights under EU consumer protection laws</li>
              <li>In case of conflict, applicable consumer protection laws take precedence</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Compliance and Regulatory</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">15.1 Export Controls</h3>
            <p className="text-gray-700 mb-4">
              The Service may be subject to export control laws. You agree to comply with all applicable export regulations.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">15.2 Data Protection</h3>
            <p className="text-gray-700 mb-4">
              We comply with GDPR and other applicable data protection regulations. See our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">15.3 Content Regulations</h3>
            <p className="text-gray-700">
              Users are responsible for ensuring their content complies with applicable laws and regulations in their jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Miscellaneous</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">16.1 Entire Agreement</h3>
            <p className="text-gray-700 mb-4">
              These Terms constitute the entire agreement between you and LYMERA AB regarding the Service.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">16.2 Severability</h3>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found unenforceable, the remaining provisions will continue in effect.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">16.3 No Waiver</h3>
            <p className="text-gray-700 mb-4">
              Our failure to enforce any provision does not constitute a waiver of that provision.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">16.4 Assignment</h3>
            <p className="text-gray-700 mb-4">
              You may not assign these Terms without our consent. We may assign these Terms to any successor entity.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">16.5 Force Majeure</h3>
            <p className="text-gray-700">
              We are not liable for delays or failures due to circumstances beyond our reasonable control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms from time to time. Material changes will be communicated through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Email notification to registered users</li>
              <li>Notice on our website</li>
              <li>In-app notifications</li>
            </ul>
            <p className="text-gray-700">
              Continued use after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">18. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service:
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
              These Terms of Service are effective as of September 22, 2025 and are governed by Swedish law.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
