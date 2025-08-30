'use client';

import React from 'react';

interface HeroAnimatedBackgroundProps {
  className?: string;
}

export function HeroAnimatedBackground({ className = '' }: HeroAnimatedBackgroundProps) {
  return (
    <>
      <div className={`absolute inset-0 overflow-hidden hero-bg-container ${className}`}>
        {/* Base background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        
        {/* Animated radiating background */}
        <div className="absolute inset-0 hero-rays" />
      </div>

      <style jsx global>{`
        .hero-bg-container {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .hero-rays {
          position: relative;
          background: 
            conic-gradient(
              from 0deg at 50% 50%,
              rgba(59, 130, 246, 0.03) 0deg,
              rgba(99, 102, 241, 0.05) 45deg,
              rgba(139, 92, 246, 0.04) 90deg,
              rgba(168, 85, 247, 0.03) 135deg,
              rgba(59, 130, 246, 0.04) 180deg,
              rgba(99, 102, 241, 0.05) 225deg,
              rgba(139, 92, 246, 0.03) 270deg,
              rgba(168, 85, 247, 0.04) 315deg,
              rgba(59, 130, 246, 0.03) 360deg
            );
          animation: rotateRays 30s linear infinite;
          opacity: 0.6;
        }

        .hero-rays::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            conic-gradient(
              from 45deg at 50% 50%,
              rgba(59, 130, 246, 0.02) 0deg,
              rgba(99, 102, 241, 0.03) 60deg,
              rgba(139, 92, 246, 0.04) 120deg,
              rgba(168, 85, 247, 0.03) 180deg,
              rgba(59, 130, 246, 0.02) 240deg,
              rgba(99, 102, 241, 0.03) 300deg,
              rgba(59, 130, 246, 0.02) 360deg
            );
          animation: rotateRaysReverse 45s linear infinite;
          opacity: 0.4;
        }

        @keyframes rotateRays {
          0% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.6; 
          }
          25% { 
            transform: rotate(90deg) scale(1.1);
            opacity: 0.8; 
          }
          50% { 
            transform: rotate(180deg) scale(1);
            opacity: 0.7; 
          }
          75% { 
            transform: rotate(270deg) scale(1.1);
            opacity: 0.9; 
          }
          100% { 
            transform: rotate(360deg) scale(1);
            opacity: 0.6; 
          }
        }

        @keyframes rotateRaysReverse {
          0% { 
            transform: rotate(0deg) scale(1.05);
            opacity: 0.4; 
          }
          50% { 
            transform: rotate(-180deg) scale(0.95);
            opacity: 0.7; 
          }
          100% { 
            transform: rotate(-360deg) scale(1.05);
            opacity: 0.4; 
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-rays,
          .hero-rays::before {
            animation: none !important;
            opacity: 0.3 !important;
          }
        }
      `}</style>
    </>
  );
}