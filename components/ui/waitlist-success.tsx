'use client'

import { CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface WaitlistSuccessProps {
  email?: string
  onGoBack?: () => void
}

export function WaitlistSuccess({ email, onGoBack }: WaitlistSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <div className="mb-6">
        <CheckCircle className="w-16 h-16 text-[#F4D03F] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          🎉 You're on the list!
        </h2>
        <p className="text-gray-600 mb-4">
          Thanks for joining the Lymo AI waitlist. We'll notify you as soon as we launch!
        </p>
        {email && (
          <p className="text-sm text-gray-500 mb-6">
            Confirmation sent to: <span className="font-medium">{email}</span>
          </p>
        )}
      </div>

      <div className="bg-gradient-to-r from-[#F4D03F]/10 to-[#F1C40F]/10 border border-[#F4D03F]/30 rounded-lg p-6 mb-6 max-w-md">
        <h3 className="font-semibold text-gray-900 mb-2">What's next?</h3>
        <ul className="text-sm text-gray-600 text-left space-y-2">
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#F4D03F] rounded-full mr-3"></div>
            You'll get priority access when we launch
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#F4D03F] rounded-full mr-3"></div>
            Exclusive updates on our progress
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#F4D03F] rounded-full mr-3"></div>
            Special early-bird pricing
          </li>
        </ul>
      </div>

      <div className="flex gap-4">
        {onGoBack ? (
          <button
            onClick={onGoBack}
            className="flex items-center gap-2 px-6 py-3 border-2 border-[#F4D03F] text-gray-900 font-medium rounded-lg hover:bg-[#F4D03F]/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 border-2 border-[#F4D03F] text-gray-900 font-medium rounded-lg hover:bg-[#F4D03F]/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        )}
        
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Join Lymo AI Waitlist',
                text: 'I just joined the Lymo AI waitlist! Join me and get early access.',
                url: window.location.origin
              });
            } else {
              // Fallback: copy to clipboard
              navigator.clipboard.writeText(window.location.origin);
              alert('Link copied to clipboard!');
            }
          }}
          className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 font-semibold py-3 px-6 rounded-lg hover:from-[#F1C40F] hover:to-[#D4AC0D] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          🚀 Share with Friends
        </button>
      </div>
    </div>
  )
}
