import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

interface SlideInProps extends AnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right';
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delay?: number;
}

interface StaggerItemProps {
  children: ReactNode;
}

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
}

interface FloatingAnimationProps {
  children: ReactNode;
  intensity?: 'subtle' | 'medium' | 'strong';
}

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

// Fade in animation
export const FadeIn: React.FC<AnimationProps> = ({ children, delay = 0, duration = 0.5 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Slide in animation
export const SlideIn: React.FC<SlideInProps> = ({ children, direction = 'up', delay = 0, duration = 0.5 }) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

// Scale animation
export const ScaleIn: React.FC<AnimationProps> = ({ children, delay = 0, duration = 0.5 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Stagger children animation
export const StaggerContainer: React.FC<StaggerContainerProps> = ({ children, staggerDelay = 0.1, delay = 0 }) => (
  <motion.div
    initial="hidden"
    animate="show"
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay
        }
      }
    }}
  >
    {children}
  </motion.div>
);

// Stagger item
export const StaggerItem: React.FC<StaggerItemProps> = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
  >
    {children}
  </motion.div>
);

// Hover animation
export const HoverScale: React.FC<HoverScaleProps> = ({ children, scale = 1.05 }) => (
  <motion.div whileHover={{ scale }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
    {children}
  </motion.div>
);

// Scroll-triggered animation
export const ScrollReveal: React.FC<StaggerItemProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

// Floating animation
export const FloatingAnimation: React.FC<FloatingAnimationProps> = ({ children, intensity = "medium" }) => {
  const intensities = {
    subtle: { y: [-2, 2] },
    medium: { y: [-5, 5] },
    strong: { y: [-10, 10] }
  };

  return (
    <motion.div
      animate={intensities[intensity]}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Pulse animation
export const PulseAnimation: React.FC<StaggerItemProps> = ({ children }) => (
  <motion.div
    animate={{
      scale: [1, 1.02, 1],
      opacity: [1, 0.8, 1]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// Shimmer effect
export const ShimmerEffect: React.FC<StaggerItemProps> = ({ children }) => (
  <motion.div
    style={{
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
      backgroundSize: "200% 100%"
    }}
    animate={{
      backgroundPosition: ["200% center", "-200% center"]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    {children}
  </motion.div>
);

// Gradient text animation
export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ children, className = "" }) => (
  <motion.span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-[#FF3366] via-[#FF6633] to-[#FFCC33] ${className}`}
    animate={{
      backgroundPosition: ["0% center", "200% center", "0% center"]
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      backgroundSize: "200% auto"
    }}
  >
    {children}
  </motion.span>
);

// Button click animation
export const ButtonAnimation: React.FC<StaggerItemProps> = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.button>
);

// Card hover animation
export const CardAnimation: React.FC<StaggerItemProps> = ({ children }) => (
  <motion.div
    whileHover={{
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      y: -5
    }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);
