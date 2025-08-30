HYROS-Style Animated Rainbow Background
Overview
This guide explains how to create the animated rainbow gradient background effect seen on HYROS AIR, featuring a dynamic, rotating spectrum of colors that creates visual energy and movement.
Core Concept
The HYROS background uses a rotating radial gradient that continuously shifts through the rainbow spectrum, creating a mesmerizing, dynamic effect that draws attention while maintaining readability of overlaid content.
CSS Implementation
Method 1: CSS Animation with Multiple Gradients
css.hyros-animated-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000; /* Fallback */
}

.hyros-animated-background::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    #FF3366 0%,
    #FF6633 12.5%,
    #FFCC33 25%,
    #66FF33 37.5%,
    #33CCFF 50%,
    #3366FF 62.5%,
    #6633FF 75%,
    #CC33FF 87.5%,
    #FF3366 100%
  );
  animation: rotateGradient 10s linear infinite;
  opacity: 0.9;
}

@keyframes rotateGradient {
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(90deg) scale(1.1);
  }
  50% {
    transform: rotate(180deg) scale(1);
  }
  75% {
    transform: rotate(270deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
Method 2: CSS with Hue Rotation (Simpler)
css.hyros-background-simple {
  background: radial-gradient(
    ellipse at center,
    #FF3366,
    #FF6633,
    #FFCC33,
    #66FF33,
    #33CCFF,
    #6633FF,
    #CC33FF
  );
  animation: hueShift 8s ease-in-out infinite alternate;
}

@keyframes hueShift {
  0% {
    filter: hue-rotate(0deg) saturate(1) brightness(1);
  }
  50% {
    filter: hue-rotate(180deg) saturate(1.2) brightness(1.1);
  }
  100% {
    filter: hue-rotate(360deg) saturate(1) brightness(1);
  }
}
React Component Implementation
jsximport React from 'react';
import './HyrosBackground.css';

const HyrosAnimatedBackground = ({ children, intensity = 'normal' }) => {
  const intensitySettings = {
    subtle: {
      animationDuration: '15s',
      opacity: 0.7,
      scale: '1.05'
    },
    normal: {
      animationDuration: '10s',
      opacity: 0.9,
      scale: '1.1'
    },
    intense: {
      animationDuration: '6s',
      opacity: 1,
      scale: '1.2'
    }
  };

  const settings = intensitySettings[intensity];

  return (
    <div 
      className="hyros-animated-background"
      style={{
        '--animation-duration': settings.animationDuration,
        '--background-opacity': settings.opacity,
        '--scale-factor': settings.scale
      }}
    >
      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
};

export default HyrosAnimatedBackground;
Advanced CSS with Custom Properties
css:root {
  --animation-duration: 10s;
  --background-opacity: 0.9;
  --scale-factor: 1.1;
  
  /* Brand colors */
  --rainbow-1: #FF3366;
  --rainbow-2: #FF6633;
  --rainbow-3: #FFCC33;
  --rainbow-4: #66FF33;
  --rainbow-5: #33CCFF;
  --rainbow-6: #3366FF;
  --rainbow-7: #6633FF;
  --rainbow-8: #CC33FF;
  --brand-yellow: #F4D03F;
}

.hyros-background-advanced {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
}

.hyros-background-advanced::before {
  content: '';
  position: absolute;
  top: -25%;
  left: -25%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    ellipse at center,
    var(--rainbow-1) 0%,
    var(--rainbow-2) 14%,
    var(--brand-yellow) 28%, /* Include brand yellow */
    var(--rainbow-4) 42%,
    var(--rainbow-5) 56%,
    var(--rainbow-6) 70%,
    var(--rainbow-7) 84%,
    var(--rainbow-8) 100%
  );
  animation: 
    rotateGradient var(--animation-duration) linear infinite,
    pulseGradient calc(var(--animation-duration) * 0.6) ease-in-out infinite alternate;
  opacity: var(--background-opacity);
  z-index: -1;
}

@keyframes rotateGradient {
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(90deg) scale(var(--scale-factor)); }
  50% { transform: rotate(180deg) scale(1); }
  75% { transform: rotate(270deg) scale(var(--scale-factor)); }
  100% { transform: rotate(360deg) scale(1); }
}

@keyframes pulseGradient {
  0% { 
    opacity: var(--background-opacity);
    filter: blur(0px) saturate(1);
  }
  100% { 
    opacity: calc(var(--background-opacity) * 0.7);
    filter: blur(1px) saturate(1.3);
  }
}
Performance Optimizations
1. GPU Acceleration
css.hyros-animated-background::before {
  will-change: transform;
  transform: translateZ(0); /* Force GPU layer */
  backface-visibility: hidden;
}
2. Reduce Motion for Accessibility
css@media (prefers-reduced-motion: reduce) {
  .hyros-animated-background::before {
    animation: none;
    background: radial-gradient(
      ellipse at center,
      var(--rainbow-1) 0%,
      var(--rainbow-5) 50%,
      var(--rainbow-8) 100%
    );
  }
}
3. Intersection Observer (React)
jsxconst useReducedAnimation = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShouldAnimate(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return { shouldAnimate, elementRef };
};
Content Overlay Best Practices
Ensuring Readability
css.content-overlay {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Dark content variant */
.content-overlay-dark {
  background: rgba(15, 23, 42, 0.9);
  color: white;
  backdrop-filter: blur(20px);
}
Usage Examples
Hero Section
jsx<HyrosAnimatedBackground intensity="normal">
  <div className="hero-content">
    <h1>AI Agent that turns every visit into a 1 to 1 customized sales experience</h1>
    <p>Transform your business with cutting-edge AI technology</p>
    <button className="cta-button">Get Started</button>
  </div>
</HyrosAnimatedBackground>
Section Background
jsx<section className="hyros-background-advanced">
  <div className="container">
    <div className="content-overlay">
      <h2>How it works</h2>
      {/* Content */}
    </div>
  </div>
</section>
Customization Variables
VariableDefaultDescription--animation-duration10sSpeed of rotation--background-opacity0.9Background visibility--scale-factor1.1Maximum scale during animation--blur-amount1pxBlur effect intensity--saturation-boost1.3Color saturation increase
Browser Support

Modern browsers: Full support with hardware acceleration
Safari: May need -webkit- prefixes for some properties
IE11: Fallback to static gradient recommended

Tips for Implementation

Start subtle - Use lower opacity and slower animations initially
Test performance - Monitor frame rates on lower-end devices
Provide fallbacks - Static gradients for unsupported browsers
Consider context - Intense animations work better for hero sections than content areas
Accessibility first - Always respect prefers-reduced-motion