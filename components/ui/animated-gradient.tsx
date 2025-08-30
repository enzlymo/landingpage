import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedGradientProps {
  variant?: "hero" | "cta" | "subtle";
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  variant = "hero",
  className,
  children,
}) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!gradientRef.current) return;
    
    const colors = 
      variant === "hero" 
        ? ["#FF3366", "#9966FF", "#33CCFF", "#FFCC33"] 
        : variant === "cta" 
          ? ["#FFE14D", "#FFCC33", "#FF9933"] 
          : ["#111111", "#333333", "#111111"];
    
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Create the animation
    tl.to(gradientRef.current, {
      duration: variant === "subtle" ? 15 : 10,
      backgroundPosition: "200% center",
      ease: "none"
    });
    
    return () => {
      tl.kill();
    };
  }, [variant]);
  
  const getGradientStyle = () => {
    switch(variant) {
      case "hero":
        return {
          background: "linear-gradient(135deg, #FF3366, #9966FF, #33CCFF, #FFCC33, #FF3366)",
          backgroundSize: "400% 400%",
        };
      case "cta":
        return {
          background: "linear-gradient(135deg, #FFE14D, #FFCC33, #FF9933, #FFE14D)",
          backgroundSize: "400% 400%",
        };
      case "subtle":
      default:
        return {
          background: "linear-gradient(135deg, #111111, #333333, #111111)",
          backgroundSize: "400% 400%",
        };
    }
  };
  
  return (
    <div 
      ref={gradientRef}
      className={`absolute inset-0 ${className}`}
      style={getGradientStyle()}
    >
      {children}
    </div>
  );
};
