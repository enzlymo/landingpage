'use client'

import React from 'react'
import { Zap } from 'lucide-react'

interface StatsBannerProps {
  count?: number
  timeframe?: string
  className?: string
}

export function StatsBanner({ 
  count = 2847, 
  timeframe = "ads generated this week",
  className = "" 
}: StatsBannerProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#F4D03F]/10 to-[#F1C40F]/10 border border-[#F4D03F]/20 text-gray-900 rounded-full text-xs font-medium ${className}`}>
      <Zap className="h-3 w-3 text-[#F4D03F]" />
      <span className="font-bold text-[#F4D03F]">{count.toLocaleString()}</span>
      <span className="text-gray-700">{timeframe}</span>
    </div>
  )
}
