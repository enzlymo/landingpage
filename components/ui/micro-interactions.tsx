import { motion, HTMLMotionProps } from 'framer-motion';
import React, { ReactNode } from 'react';

// Common types
interface BaseProps {
  children: ReactNode;
  className?: string;
}

// Component specific types
type PremiumCardProps = BaseProps & HTMLMotionProps<"div">;
type PremiumLinkProps = BaseProps & HTMLMotionProps<"a">;
type PremiumIconButtonProps = BaseProps & HTMLMotionProps<"button">;
type PremiumBadgeProps = BaseProps & HTMLMotionProps<"span">;
type PremiumTooltipProps = {
  content: ReactNode;
  children: ReactNode;
  className?: string;
};
type PremiumSwitchProps = {
  checked?: boolean;
  onChange?: () => void;
  className?: string;
};
type PremiumProgressBarProps = {
  progress?: number;
  className?: string;
};
type PremiumNotificationBadgeProps = {
  count: number;
  className?: string;
};

// Premium button with hover effect
type PremiumButtonProps = Omit<HTMLMotionProps<"button">, "size"> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps
>(({ children, className = '', variant = 'primary', size = 'md', ...props }, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300';
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };
  const variantClasses = {
    primary: 'bg-yellow-gradient text-[#0F172A] shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20',
    outline: 'border-2 border-[#FFD43B] text-[#FFD43B] hover:bg-[#FFD43B]/10'
  };

  return (
    <motion.button
      ref={ref}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

PremiumButton.displayName = 'PremiumButton';

// Premium card with hover effect
export const PremiumCard: React.FC<PremiumCardProps> = ({ children, className = '', ...props }) => (
  <motion.div
    className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}
    whileHover={{
      y: -5,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }}
  >
    {children}
  </motion.div>
);

// Premium link with hover effect
export const PremiumLink: React.FC<PremiumLinkProps> = ({ children, className = '', ...props }) => (
  <motion.a
    className={`relative inline-block text-[#0F172A] ${className}`}
    whileHover="hover"
  >
    {children}
    <motion.span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-gradient origin-left"
      variants={{
        hover: { scaleX: 1 },
        initial: { scaleX: 0 }
      }}
      initial="initial"
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

// Premium icon button with hover effect
export const PremiumIconButton: React.FC<PremiumIconButtonProps> = ({ children, className = '', ...props }) => (
  <motion.button
    className={`p-3 rounded-full bg-white/10 backdrop-blur-md ${className}`}
    whileHover={{
      scale: 1.1,
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.button>
);

// Premium badge with hover effect
export const PremiumBadge: React.FC<PremiumBadgeProps> = ({ children, className = '', ...props }) => (
  <motion.span
    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </motion.span>
);

// Premium input with focus effect
type PremiumInputProps = Omit<HTMLMotionProps<"input">, "ref"> & {
  className?: string;
};

export const PremiumInput = React.forwardRef<HTMLInputElement, PremiumInputProps>(
  ({ className = '', ...props }, ref) => (
    <motion.input
      ref={ref}
      className={`w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]/50 transition-all duration-300 ${className}`}
      whileFocus={{
        scale: 1.02,
        boxShadow: '0 0 0 2px rgba(255, 212, 59, 0.2)'
      }}
      {...props}
    />
  )
);

PremiumInput.displayName = 'PremiumInput';

// Premium select with hover effect
type PremiumSelectProps = Omit<HTMLMotionProps<"select">, "ref"> & {
  className?: string;
  children: ReactNode;
};

export const PremiumSelect = React.forwardRef<HTMLSelectElement, PremiumSelectProps>(
  ({ className = '', children, ...props }, ref) => (
  <motion.select
    ref={ref}
    className={`w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white appearance-none cursor-pointer ${className}`}
    whileHover={{
      backgroundColor: 'rgba(255, 255, 255, 0.15)'
    }}
    {...props}
  >
    {children}
  </motion.select>
));

PremiumSelect.displayName = 'PremiumSelect';

// Premium checkbox with animation
type PremiumInputControlProps = Omit<HTMLMotionProps<"input">, "ref"> & {
  className?: string;
};

export const PremiumCheckbox = React.forwardRef<HTMLInputElement, PremiumInputControlProps>(
  ({ className = '', ...props }, ref) => (
  <motion.input
    ref={ref}
    type="checkbox"
    className={`w-5 h-5 rounded border-2 border-white/20 checked:bg-yellow-gradient checked:border-transparent transition-all duration-300 ${className}`}
    whileHover={{
      scale: 1.1
    }}
    {...props}
  />
));

PremiumCheckbox.displayName = 'PremiumCheckbox';

// Premium radio with animation
export const PremiumRadio = React.forwardRef<HTMLInputElement, PremiumInputControlProps>(
  ({ className = '', ...props }, ref) => (
  <motion.input
    ref={ref}
    type="radio"
    className={`w-5 h-5 rounded-full border-2 border-white/20 checked:bg-yellow-gradient checked:border-transparent transition-all duration-300 ${className}`}
    whileHover={{
      scale: 1.1
    }}
    {...props}
  />
));

PremiumRadio.displayName = 'PremiumRadio';

// Premium switch with animation
export const PremiumSwitch: React.FC<PremiumSwitchProps> = ({ checked = false, onChange, className = '' }) => (
  <motion.div
    className={`relative w-12 h-6 rounded-full cursor-pointer ${
      checked ? 'bg-yellow-gradient' : 'bg-white/20'
    } ${className}`}
    onClick={onChange}
  >
    <motion.div
      className="absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5"
      animate={{
        x: checked ? 24 : 0
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  </motion.div>
);

// Premium tooltip with animation
export const PremiumTooltip: React.FC<PremiumTooltipProps> = ({ content, children, className = '' }) => (
  <motion.div className="relative group">
    {children}
    <motion.div
      className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mb-2"
      initial={{ y: 10, opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
    >
      {content}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90" />
    </motion.div>
  </motion.div>
);

// Premium loading spinner with animation
export const PremiumSpinner = ({ className = '' }) => (
  <motion.div
    className={`w-6 h-6 border-3 border-white/20 border-t-white rounded-full ${className}`}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
  />
);

// Premium progress bar with animation
export const PremiumProgressBar: React.FC<PremiumProgressBarProps> = ({ progress = 0, className = '' }) => (
  <div className={`w-full h-2 bg-white/10 rounded-full overflow-hidden ${className}`}>
    <motion.div
      className="h-full bg-yellow-gradient"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  </div>
);

// Premium notification badge with animation
export const PremiumNotificationBadge: React.FC<PremiumNotificationBadgeProps> = ({ count, className = '' }) => (
  <motion.div
    className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-red-500 text-white text-xs font-bold ${className}`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
  >
    {count}
  </motion.div>
);

// Premium scroll indicator with animation
type PremiumScrollIndicatorProps = {
  className?: string;
};

export const PremiumScrollIndicator: React.FC<PremiumScrollIndicatorProps> = ({ className = '' }) => (
  <motion.div
    className={`w-6 h-10 border-2 border-white/20 rounded-full p-1 ${className}`}
    initial="initial"
    animate="animate"
  >
    <motion.div
      className="w-full h-2 bg-white rounded-full"
      variants={{
        initial: { y: 0 },
        animate: { y: 24 }
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut'
      }}
    />
  </motion.div>
);
