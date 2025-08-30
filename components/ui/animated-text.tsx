import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface AnimatedTextProps {
  children: React.ReactNode;
  as?: React.ElementType;
  animation?: "fade" | "slide" | "chars" | "words" | "highlight";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  as: Component = "div",
  animation = "fade",
  delay = 0,
  duration = 0.8,
  className,
  once = true,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  
  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, SplitText);
    }
    
    // Initialize animation
    const element = textRef.current;
    if (!element) return;
    
    let tl: gsap.core.Timeline;
    
    const initAnimation = () => {
      switch (animation) {
        case "chars":
          if (!splitRef.current) {
            splitRef.current = new SplitText(element, { type: "chars" });
          }
          tl = gsap.timeline({ paused: true });
          tl.from(splitRef.current.chars, {
            opacity: 0,
            y: 20,
            rotationX: -90,
            stagger: 0.02,
            duration: duration * 0.6,
            ease: "back.out(1.7)",
          });
          break;
          
        case "words":
          if (!splitRef.current) {
            splitRef.current = new SplitText(element, { type: "words" });
          }
          tl = gsap.timeline({ paused: true });
          tl.from(splitRef.current.words, {
            opacity: 0,
            y: 30,
            stagger: 0.05,
            duration: duration * 0.7,
            ease: "power3.out",
          });
          break;
          
        case "slide":
          tl = gsap.timeline({ paused: true });
          tl.from(element, {
            x: -50,
            opacity: 0,
            duration: duration,
            ease: "power3.out",
          });
          break;
          
        case "highlight":
          tl = gsap.timeline({ paused: true });
          tl.fromTo(
            element,
            { backgroundSize: "0% 100%" },
            {
              backgroundSize: "100% 100%",
              duration: duration,
              ease: "power3.out",
            }
          );
          break;
          
        case "fade":
        default:
          tl = gsap.timeline({ paused: true });
          tl.from(element, {
            opacity: 0,
            y: 20,
            duration: duration,
            ease: "power3.out",
          });
          break;
      }
      
      // Add delay if specified
      if (delay > 0) {
        tl.delay(delay);
      }
      
      return tl;
    };
    
    // Create timeline
    tl = initAnimation();
    
    // Set up scroll trigger
    triggerRef.current = ScrollTrigger.create({
      trigger: element,
      start: "top bottom-=100",
      onEnter: () => tl.play(),
      onLeaveBack: () => !once && tl.reverse(),
      onRefresh: () => {
        // Clean up and recreate animation if needed
        if (splitRef.current) {
          splitRef.current.revert();
          splitRef.current = null;
        }
        tl.kill();
        tl = initAnimation();
      },
    });
    
    // Cleanup
    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      if (splitRef.current) {
        splitRef.current.revert();
      }
      tl.kill();
    };
  }, [animation, delay, duration, once]);
  
  const getHighlightStyle = () => {
    if (animation === "highlight") {
      return {
        backgroundImage: "linear-gradient(to right, #FFE14D, #FFCC33)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 100%",
        backgroundSize: "0% 8px",
        paddingBottom: "2px",
      };
    }
    return {};
  };
  
  return (
    <Component
      ref={textRef}
      className={className}
      style={getHighlightStyle()}
    >
      {children}
    </Component>
  );
};
