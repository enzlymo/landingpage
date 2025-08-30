'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { useTexture, Plane, shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// Define the shader material
const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uColor1: new THREE.Color(0xFF8A3D), // Orange
    uColor2: new THREE.Color(0xFFD43B), // Yellow
    uColor3: new THREE.Color(0x00B4D8), // Blue
    uResolution: new THREE.Vector2(1, 1),
    uIntensity: 0.3,
    uSpeed: 0.2,
  },
  // Vertex shader
  `
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec2 uResolution;
    uniform float uIntensity;
    uniform float uSpeed;
    
    varying vec2 vUv;
    
    // Simplex 2D noise function
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m;
      m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    
    void main() {
      vec2 uv = vUv;
      
      // Create flowing effect with slower, more subtle movement
      float time = uTime * uSpeed;
      
      // Create multiple noise layers with larger scale and slower movement
      float noise1 = snoise(vec2(uv.x * 1.5, uv.y * 1.5 + time * 0.1)) * uIntensity;
      float noise2 = snoise(vec2(uv.x * 1.0 - time * 0.05, uv.y * 1.0)) * uIntensity;
      float noise3 = snoise(vec2(uv.x * 2.0 + time * 0.02, uv.y * 2.0)) * uIntensity;
      
      // Combine noise layers
      float noiseValue = noise1 + noise2 + noise3;
      
      // Create a gradient based on the UV coordinates and noise
      float gradient = uv.y + noiseValue * 0.5;
      
      // Mix colors based on the gradient value
      vec3 color;
      if (gradient < 0.33) {
        color = mix(uColor1, uColor2, smoothstep(0.0, 0.33, gradient));
      } else if (gradient < 0.66) {
        color = mix(uColor2, uColor3, smoothstep(0.33, 0.66, gradient));
      } else {
        color = mix(uColor3, uColor1, smoothstep(0.66, 1.0, gradient));
      }
      
      // Add some variation based on horizontal position
      color = mix(color, color * (0.8 + 0.4 * sin(uv.x * 10.0 + time)), 0.1);
      
      // Output the final color
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// Extend the Three.js materials with our custom shader
extend({ WaveShaderMaterial });

// Declare the JSX element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'waveShaderMaterial': any;
    }
  }
}

// The animated wave component
const AnimatedWaves = () => {
  const materialRef = useRef<any>();
  
  // Update the shader uniform on each frame
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
  });
  
  return (
    <Plane args={[2, 2]} position={[0, 0, 0]}>
      <waveShaderMaterial ref={materialRef} />
    </Plane>
  );
};

interface AnimatedHeroBackgroundProps {
  className?: string;
}

export const AnimatedHeroBackground: React.FC<AnimatedHeroBackgroundProps> = ({ className }) => {
  const [mounted, setMounted] = React.useState(false);
  const [isReducedMotion, setIsReducedMotion] = React.useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleReducedMotionChange = () => {
      setIsReducedMotion(mediaQuery.matches);
    };
    
    mediaQuery.addEventListener('change', handleReducedMotionChange);
    return () => mediaQuery.removeEventListener('change', handleReducedMotionChange);
  }, []);
  
  if (!mounted) return null;
  
  // Use fallback for reduced motion preference
  if (isReducedMotion) {
    return <AnimatedHeroBackgroundFallback className={className} />;
  }
  
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]} // Responsive device pixel ratio
        performance={{ min: 0.5 }} // Allow performance scaling
        gl={{ 
          powerPreference: "high-performance",
          antialias: false, // Disable antialiasing for better performance
          depth: false, // Disable depth testing since we're just rendering a 2D plane
          stencil: false, // Disable stencil buffer
        }}
      >
        <AnimatedWaves />
      </Canvas>
    </div>
  );
};

// A simpler fallback component for browsers without WebGL support
export const AnimatedHeroBackgroundFallback: React.FC<AnimatedHeroBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={`absolute inset-0 z-0 ${className} bg-gradient-to-br from-gradient-yellow via-gradient-blue to-gradient-orange animate-gradient-slow`}
    />
  );
};
