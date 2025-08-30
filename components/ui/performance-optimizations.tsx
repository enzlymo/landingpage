import React, { useEffect } from 'react';

// This component applies performance optimizations for animations
export const PerformanceOptimizations: React.FC = () => {
  useEffect(() => {
    // Check if the device is low-end or has reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEndDevice = 
      !('deviceMemory' in navigator) || 
      // @ts-ignore - deviceMemory is not in the standard TS navigator type
      (navigator.deviceMemory && navigator.deviceMemory < 4);
    
    // Apply performance optimizations based on device capabilities
    if (prefersReducedMotion || isLowEndDevice) {
      document.documentElement.classList.add('reduce-animations');
    }
    
    // Add CSS variables for animation durations based on device capabilities
    const root = document.documentElement;
    if (isLowEndDevice) {
      root.style.setProperty('--animation-duration-fast', '0.2s');
      root.style.setProperty('--animation-duration-normal', '0.3s');
      root.style.setProperty('--animation-duration-slow', '0.5s');
    } else {
      root.style.setProperty('--animation-duration-fast', '0.3s');
      root.style.setProperty('--animation-duration-normal', '0.5s');
      root.style.setProperty('--animation-duration-slow', '0.8s');
    }
    
    // Disable some animations on mobile devices
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      root.style.setProperty('--particle-count', '15');
      root.style.setProperty('--particle-speed', '0.5');
    } else {
      root.style.setProperty('--particle-count', '40');
      root.style.setProperty('--particle-speed', '1');
    }
    
    // Add event listener for visibility change to pause animations when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.documentElement.classList.add('pause-animations');
      } else {
        document.documentElement.classList.remove('pause-animations');
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return null;
};

export default PerformanceOptimizations;
