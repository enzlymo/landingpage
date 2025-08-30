import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  floatIntensity?: "subtle" | "medium" | "strong";
  rotateIntensity?: "none" | "subtle" | "medium" | "strong";
  delay?: number;
  duration?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className,
  floatIntensity = "medium",
  rotateIntensity = "subtle",
  delay = 0,
  duration = 4,
}) => {
  const controls = useAnimation();
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth animation
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  useEffect(() => {
    // Calculate float range based on intensity
    const getFloatRange = () => {
      switch (floatIntensity) {
        case "subtle":
          return 5;
        case "strong":
          return 20;
        case "medium":
        default:
          return 10;
      }
    };
    
    // Calculate rotation range based on intensity
    const getRotateRange = () => {
      switch (rotateIntensity) {
        case "none":
          return 0;
        case "subtle":
          return 2;
        case "strong":
          return 8;
        case "medium":
        default:
          return 4;
      }
    };
    
    const floatRange = getFloatRange();
    const rotateRange = getRotateRange();
    
    // Create floating animation
    const startAnimation = async () => {
      // Initial delay
      if (delay > 0) {
        await controls.start({ opacity: 1, transition: { delay } });
      }
      
      // Continuous floating animation
      controls.start({
        y: [0, -floatRange, 0, floatRange, 0],
        rotateX: rotateRange > 0 ? [0, rotateRange, 0, -rotateRange, 0] : 0,
        rotateY: rotateRange > 0 ? [0, -rotateRange, 0, rotateRange, 0] : 0,
        transition: {
          duration,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };
    
    startAnimation();
  }, [controls, delay, duration, floatIntensity, rotateIntensity]);
  
  return (
    <motion.div
      ref={elementRef}
      className={cn("", className)}
      style={{
        y,
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      initial={{ opacity: delay > 0 ? 0 : 1 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
