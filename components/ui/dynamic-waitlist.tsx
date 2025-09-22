'use client'

import { useState } from "react"
import { WaitlistSuccess } from "./waitlist-success"

interface DynamicWaitlistProps {
  className?: string
  showTitle?: boolean
  title?: string
  description?: string
  height?: string
}

export function DynamicWaitlist({ 
  className = "",
  showTitle = false,
  title = "Unlock Early Access to Lymo AI",
  description = "Get priority entry and exclusive updates.",
  height = "180px"
}: DynamicWaitlistProps) {
  
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmittedEmail(email);
        setIsSuccess(true);
        setEmail("");
      } else {
        setError(data.error || 'Failed to join waitlist. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    setIsSuccess(false);
    setSubmittedEmail("");
    setError("");
  };

  if (isSuccess) {
    return (
      <div className={`waitlist-container ${className}`}>
        <WaitlistSuccess email={submittedEmail} onGoBack={handleGoBack} />
      </div>
    );
  }

  return (
    <div className={`waitlist-container ${className}`}>
      {showTitle && (
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
      )}
      
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          required
          disabled={isLoading}
          className="px-4 py-3 border-2 border-[#F4D03F]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] focus:border-[#F4D03F] text-gray-900 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        
        {error && (
          <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 font-semibold py-3 px-6 rounded-lg hover:from-[#F1C40F] hover:to-[#D4AC0D] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Joining...
            </span>
          ) : (
            "🚀 Join the Waitlist Now"
          )}
        </button>
      </form>
    </div>
  )
}
