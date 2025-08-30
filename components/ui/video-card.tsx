import React from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface VideoCardProps {
  src?: string;
  poster?: string;
  title?: string;
  className?: string;
  stats?: {
    views?: string;
    likes?: string;
  };
  overlay?: {
    text?: string;
    position?: "top" | "center" | "bottom";
  };
}

export const VideoCard = React.forwardRef<HTMLDivElement, VideoCardProps>(
  ({ src, poster, title, className, stats, overlay, ...props }, ref) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-gray-100 will-change-transform h-full group shadow-lg hover:shadow-xl transition-shadow duration-300",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative h-full">
          {src ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={poster}
              loop
              muted
              playsInline
              onClick={togglePlay}
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : poster ? (
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${poster})` }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              <span className="text-sm text-gray-500">Video placeholder</span>
            </div>
          )}

          {/* Minimalistic hover overlay with play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.div 
              className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Play className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" />
            </motion.div>
          </div>

          {/* Stats overlay - clean design */}
          {stats && stats.views && stats.likes && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-700 font-medium shadow-sm">
              {stats.views} • {stats.likes}
            </div>
          )}

          {/* Title overlay - minimalistic */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-sm font-medium text-white">{title}</p>
            </div>
          )}

          {/* Overlay text - clean style */}
          {overlay && overlay.text && (
            <div 
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                {
                  "items-start pt-8": overlay.position === "top",
                  "items-center": overlay.position === "center" || !overlay.position,
                  "items-end pb-8": overlay.position === "bottom",
                }
              )}
            >
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                <p className="text-sm font-bold text-gray-800 tracking-wide">{overlay.text}</p>
              </div>
            </div>
          )}

          {!isPlaying && src && (
            <button
              className="absolute inset-0 flex items-center justify-center transition-opacity hover:bg-black/10"
              onClick={togglePlay}
            >
              <div className="rounded-full bg-white/90 backdrop-blur-sm p-4 shadow-lg">
                <Play className="h-5 w-5 text-gray-800" fill="currentColor" />
              </div>
            </button>
          )}
        </div>
      </motion.div>
    );
  }
);

VideoCard.displayName = "VideoCard";