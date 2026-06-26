/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, Play } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Function to initialize the YT player
    const initPlayer = () => {
      playerRef.current = new (window as any).YT.Player("hero-youtube-player", {
        events: {
          onStateChange: (event: any) => {
            // Loop video manually if playlist looping fails
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    // If API is already loaded, initialize
    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
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
        initPlayer();
      };
    }
  }, []);

  const toggleMute = () => {
    const player = playerRef.current;
    if (player && typeof player.isMuted === "function") {
      if (player.isMuted()) {
        player.unMute();
        setIsMuted(false);
      } else {
        player.mute();
        setIsMuted(true);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Heading & Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Subheading Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 self-start mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-red-bright animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/60 font-semibold">
              Available for Projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 font-sora leading-[1.05]"
          >
            {profile.name.split(" ")[0]} <span className="italic text-gradient-red font-light font-serif">{profile.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Role Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-white mb-4 leading-relaxed max-w-xl font-sora"
          >
            {profile.role}
          </motion.p>

          {/* Tagline Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-white/50 mb-8 max-w-xl font-light leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-white/90 text-black text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 group transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span>View My Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play size={14} className="fill-white text-white" />
              <span>Book an Edit</span>
            </button>
          </motion.div>

          {/* Trusted Creators Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3.5 mb-8">
            <div className="flex -space-x-2.5">
              <img
                className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                alt="Creator Avatar"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                alt="Creator Avatar"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80"
                alt="Creator Avatar"
              />
            </div>
            <span className="text-[9px] uppercase font-mono tracking-widest text-white/40 font-bold">
              Trusted by creators & clients
            </span>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 w-full"
          >
            <div>
              <div className="text-3xl font-extrabold text-white font-sora">120+</div>
              <div className="text-[9px] uppercase font-mono tracking-widest text-white/30 mt-1">Edits Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-sora">8M+</div>
              <div className="text-[9px] uppercase font-mono tracking-widest text-white/30 mt-1">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-sora">48h</div>
              <div className="text-[9px] uppercase font-mono tracking-widest text-white/30 mt-1">Avg Turnaround</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Phone mockup container with video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Glowing Red Aura */}
          <div className="absolute w-72 h-96 rounded-full bg-red-bright/15 filter blur-[90px] -z-10 animate-pulse" />

          {/* Smartphone mockup frame */}
          <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] rounded-[36px] p-2 bg-[#121212]/80 border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
            {/* Phone Screen content wrapper */}
            <div className="absolute inset-2 rounded-[28px] border border-white/5 overflow-hidden bg-black">
              {/* YouTube Iframe Player */}
              <iframe
                id="hero-youtube-player"
                src="https://www.youtube.com/embed/MEm1v472lxU?autoplay=1&mute=1&loop=1&playlist=MEm1v472lxU&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute pointer-events-none"
                style={{
                  width: "120%",
                  height: "120%",
                  top: "-10%",
                  left: "-10%",
                  border: "none",
                }}
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

              {/* Live Badge (Top-Left) */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-red-bright animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-red-bright absolute" />
                <span className="text-[8px] uppercase tracking-widest font-mono font-bold text-white/90">
                  Live Reel
                </span>
              </div>

              {/* Volume Controller (Top-Right) */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-white/10 hover:border-red-bright/30 hover:bg-red-bright/10 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX size={14} className="text-white/80" />
                ) : (
                  <Volume2 size={14} className="text-red-bright animate-pulse" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 flex flex-col items-center gap-2 group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 group-hover:text-red-bright transition-colors duration-300">
          Scroll Down
        </span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/20 group-hover:border-red-bright/50 flex justify-center p-1 transition-colors duration-300">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-red-bright"
          />
        </div>
      </motion.div>
    </section>
  );
}
