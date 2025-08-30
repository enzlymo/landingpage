import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "tsparticles-engine";

interface AnimatedBackgroundProps {
  variant?: "hero" | "gradient" | "subtle" | "dark";
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = "hero",
  className 
}) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  }, []);

  if (!mounted) return null;

  const getParticlesConfig = (): ISourceOptions => {
    switch(variant) {
      case "hero":
        return {
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 30,
          particles: {
            color: {
              value: "#FFD43B",
            },
            links: {
              color: "#FFD43B",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none" as const,
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 30,
            },
            opacity: {
              value: 0.2,
              animation: {
                enable: true,
                speed: 0.2,
                minimumValue: 0.1,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
          smooth: true,
        };
      case "gradient":
        return {
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 30,
          particles: {
            color: {
              value: ["#FF8A3D", "#FFD43B", "#00B4D8"],
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none" as const,
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 20,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
          smooth: true,
        };
      case "subtle":
        return {
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 30,
          particles: {
            color: {
              value: "#00B4D8",
            },
            links: {
              color: "#00B4D8",
              distance: 150,
              enable: false,
              opacity: 0.05,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "top" as const,
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 2000,
              },
              value: 15,
            },
            opacity: {
              value: 0.08,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
          smooth: true,
        };
      case "dark":
      default:
        return {
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 30,
          particles: {
            color: {
              value: "#FFFFFF",
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.05,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none" as const,
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 20,
            },
            opacity: {
              value: 0.08,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 1.5 },
            },
          },
          detectRetina: true,
          smooth: true,
        };
    }
  };

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Particles
        id={`particles-${variant}`}
        init={particlesInit}
        options={getParticlesConfig()}
        className="absolute inset-0"
      />
    </div>
  );
};
