import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GradientHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  gradient?: "main" | "yellow" | "custom";
  customGradient?: string;
  animate?: boolean;
}

export const GradientHeading = ({
  children,
  as = "h2",
  className,
  gradient = "main",
  customGradient,
  animate = true,
}: GradientHeadingProps) => {
  const Component = as;
  
  const gradientClass = 
    gradient === "main" 
      ? "bg-main-gradient" 
      : gradient === "yellow" 
        ? "bg-yellow-gradient" 
        : "";
  
  const customGradientStyle = customGradient 
    ? { backgroundImage: customGradient } 
    : {};
  
  const content = (
    <Component
      className={cn(
        "bg-clip-text text-transparent font-bold",
        gradientClass,
        className
      )}
      style={customGradient ? customGradientStyle : {}}
    >
      {children}
    </Component>
  );
  
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }
  
  return content;
};
