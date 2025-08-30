import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
  depth?: "flat" | "shallow" | "medium" | "deep";
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  glowColor = "rgba(255, 225, 77, 0.4)",
  hoverScale = 1.02,
  depth = "medium",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate rotation and glow position based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (limited range)
    const rotateX = depth === "flat" ? 0 : mapRange(y, 0, rect.height, 2, -2);
    const rotateY = depth === "flat" ? 0 : mapRange(x, 0, rect.width, -2, 2);
    
    // Update state
    setMousePosition({ x, y });
  };

  // Map value from one range to another
  const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  // Calculate shadow depth based on depth prop
  const getShadowClass = () => {
    switch (depth) {
      case "flat":
        return "shadow-sm";
      case "shallow":
        return "shadow-md";
      case "deep":
        return "shadow-xl";
      case "medium":
      default:
        return "shadow-lg";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-300",
        getShadowClass(),
        className
      )}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: hoverScale }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        rotateX: isHovered ? mousePosition.y / 20 : 0,
        rotateY: isHovered ? -mousePosition.x / 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      {/* Glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor} 0%, transparent 70%)`,
            opacity: 0.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Border glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            border: `1px solid ${glowColor}`,
            boxShadow: `0 0 15px ${glowColor}`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
