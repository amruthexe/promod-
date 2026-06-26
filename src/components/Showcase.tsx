/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { videoProjects } from "@/data/portfolio";

export default function Showcase() {
  const [mutedStates, setMutedStates] = useState<boolean[]>(
    new Array(videoProjects.length).fill(true)
  );
  
  const playersRef = useRef<(any | null)[]>([]);

  useEffect(() => {
    // Function to initialize the YT players
    const initPlayers = () => {
      videoProjects.forEach((project, index) => {
        const id = `showcase-youtube-player-${index}`;
        if (document.getElementById(id)) {
          playersRef.current[index] = new (window as any).YT.Player(id, {
            events: {
              onStateChange: (event: any) => {
                // Loop video manually if playlist looping fails
                if (event.data === (window as any).YT.PlayerState.ENDED) {
                  event.target.playVideo();
                }
              }
            }
          });
        }
      });
    };

    // If API is already loaded, initialize
    if ((window as any).YT && (window as any).YT.Player) {
      initPlayers();
    } else {
      // Otherwise, load API and define callback
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // Save previous callback if it exists
      const prevCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayers();
      };
    }
  }, []);

  const toggleMute = (e: React.MouseEvent, index: number) => {
    e.stopPropagation(); // Avoid triggering any card-click events
    const player = playersRef.current[index];
    if (player && typeof player.isMuted === "function") {
      if (player.isMuted()) {
        player.unMute();
        setMutedStates((prev) => {
          const next = [...prev];
          next[index] = false;
          return next;
        });
      } else {
        player.mute();
        setMutedStates((prev) => {
          const next = [...prev];
          next[index] = true;
          return next;
        });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 75,
        damping: 18,
      },
    },
  };

  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-red-bright" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-red-bright font-bold">
              Portfolio
            </span>
            <div className="h-[1px] w-6 bg-red-bright" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sora mb-6">
            Best <span className="italic font-serif font-light text-gradient-red">Work</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base font-light max-w-xl leading-relaxed">
            A curated selection of short-form edits built to stop the scroll and convert attention into results.
          </p>
        </div>

        {/* Video Reel Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {videoProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-card group relative aspect-[9/16] overflow-hidden rounded-[28px] border border-white/5 hover:border-red-bright/20 bg-[#050505] shadow-[0_15px_35px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              {/* YouTube Iframe Player */}
              <iframe
                id={`showcase-youtube-player-${index}`}
                src={`https://www.youtube.com/embed/${project.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${project.videoUrl}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  width: "120%",
                  height: "120%",
                  top: "-10%",
                  left: "-10%",
                  border: "none",
                }}
              />

              {/* Bottom vignette shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30 opacity-70 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

              {/* Top Row: Category Tag & Sound Control */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="text-[9px] uppercase tracking-wider font-semibold font-mono bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 text-white/90">
                  {project.category}
                </span>

                <button
                  onClick={(e) => toggleMute(e, index)}
                  className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-red-bright/40 hover:bg-red-bright/10 text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label={mutedStates[index] ? "Unmute Video" : "Mute Video"}
                >
                  {mutedStates[index] ? (
                    <VolumeX size={15} className="text-white/80" />
                  ) : (
                    <Volume2 size={15} className="text-red-bright animate-pulse" />
                  )}
                </button>
              </div>

              {/* Bottom Row: Title / View count & Red indicator dot */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="text-sm font-bold text-white font-sora tracking-wide drop-shadow-md group-hover:text-red-bright transition-colors duration-300">
                  {project.views}
                </span>
                
                {/* Blinking Red Dot */}
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-bright opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-bright"></span>
                </div>
              </div>

              {/* Soft radial glow on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-radial from-red-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
