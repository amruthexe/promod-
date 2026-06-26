/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function AIVideos() {
  const [mutedStates, setMutedStates] = useState<boolean[]>([true, true, true]); // [long-form, short-1, short-2]
  const playersRef = useRef<(any | null)[]>([]);

  useEffect(() => {
    // Function to initialize the YT players
    const initPlayers = () => {
      // Long form player (Index 0)
      if (document.getElementById("ai-player-long")) {
        playersRef.current[0] = new (window as any).YT.Player("ai-player-long", {
          events: {
            onStateChange: (event: any) => {
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            }
          }
        });
      }
      // Short form player 1 (Index 1)
      if (document.getElementById("ai-player-short-1")) {
        playersRef.current[1] = new (window as any).YT.Player("ai-player-short-1", {
          events: {
            onStateChange: (event: any) => {
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            }
          }
        });
      }
      // Short form player 2 (Index 2)
      if (document.getElementById("ai-player-short-2")) {
        playersRef.current[2] = new (window as any).YT.Player("ai-player-short-2", {
          events: {
            onStateChange: (event: any) => {
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            }
          }
        });
      }
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

      const prevCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayers();
      };
    }
  }, []);

  const toggleMute = (index: number) => {
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

  return (
    <section id="ai-videos" className="py-24 relative overflow-hidden bg-[#0A0A0A]/20">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-red-bright/5 filter blur-[130px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-red-crimson/5 filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-red-bright" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-red-bright font-bold">
              AI Generation
            </span>
            <div className="h-[1px] w-6 bg-red-bright" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sora mb-6">
            AI Generated <span className="italic font-serif font-light text-gradient-red">Videos</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base font-light max-w-xl leading-relaxed">
            A premium demonstration of AI-driven video synthesis and creative motion storytelling, optimized for multiple platforms and ratios.
          </p>
        </div>

        {/* Vertical Stack Layout */}
        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          
          {/* Top: 16:9 Long-Form Widescreen Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 w-full"
          >
            <div className="relative aspect-[16/9] w-full rounded-3xl p-1.5 bg-[#121212]/80 border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9)] overflow-hidden group">
              <div className="absolute inset-2 rounded-[20px] overflow-hidden bg-black">
                <iframe
                  id="ai-player-long"
                  src="https://www.youtube.com/embed/cf-IxJTJOUg?autoplay=1&mute=1&loop=1&playlist=cf-IxJTJOUg&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
                  title="AI Long-form Video"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/35 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  <Sparkles size={12} className="text-red-bright animate-pulse" />
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-white/90">
                    Long Form Demo (16:9)
                  </span>
                </div>

                {/* Sound control */}
                <button
                  onClick={() => toggleMute(0)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 border border-white/10 hover:border-red-bright/40 hover:bg-red-bright/15 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
                >
                  {mutedStates[0] ? (
                    <VolumeX size={16} className="text-white/80" />
                  ) : (
                    <Volume2 size={16} className="text-red-bright animate-pulse" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white font-sora mb-2">Cinematic AI Landscape</h3>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">
                A horizontal long-form presentation combining synthesized high-fidelity scenic details, colorgrading depth, and immersive cinematic cuts.
              </p>
            </div>
          </motion.div>

          {/* Bottom: Two 9:16 Short Videos Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mx-auto border-t border-white/5 pt-16">
            
            {/* Short Video 1 (ii2f0Rf38lM) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto rounded-[36px] p-2 bg-[#121212]/80 border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
                <div className="absolute inset-2 rounded-[28px] overflow-hidden bg-black">
                  <iframe
                    id="ai-player-short-1"
                    src="https://www.youtube.com/embed/ii2f0Rf38lM?autoplay=1&mute=1&loop=1&playlist=ii2f0Rf38lM&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
                    title="AI Short-form Video 1"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/35 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-bright animate-ping" />
                    <span className="w-1.5 h-1.5 rounded-full bg-red-bright absolute" />
                    <span className="text-[8px] uppercase tracking-widest font-mono font-bold text-white/90 pl-3">
                      AI Portrait (9:16)
                    </span>
                  </div>

                  {/* Sound control */}
                  <button
                    onClick={() => toggleMute(1)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-red-bright/40 hover:bg-red-bright/15 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
                  >
                    {mutedStates[1] ? (
                      <VolumeX size={14} className="text-white/80" />
                    ) : (
                      <Volume2 size={14} className="text-red-bright animate-pulse" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="max-w-[320px] mx-auto text-left w-full">
                <h3 className="text-xl font-bold text-white font-sora mb-2">High Retention Short</h3>
                <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">
                  A portrait vertical reel showcasing fast paced attention hooks, zoom reveals, and micro-interactions optimized for social feeds.
                </p>
              </div>
            </motion.div>

            {/* Short Video 2 (fdoekr4m7ag) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto rounded-[36px] p-2 bg-[#121212]/80 border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
                <div className="absolute inset-2 rounded-[28px] overflow-hidden bg-black">
                  <iframe
                    id="ai-player-short-2"
                    src="https://www.youtube.com/embed/fdoekr4m7ag?autoplay=1&mute=1&loop=1&playlist=fdoekr4m7ag&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
                    title="AI Short-form Video 2"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/35 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-bright animate-ping" />
                    <span className="w-1.5 h-1.5 rounded-full bg-red-bright absolute" />
                    <span className="text-[8px] uppercase tracking-widest font-mono font-bold text-white/90 pl-3">
                      AI Motion (9:16)
                    </span>
                  </div>

                  {/* Sound control */}
                  <button
                    onClick={() => toggleMute(2)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-red-bright/40 hover:bg-red-bright/15 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
                  >
                    {mutedStates[2] ? (
                      <VolumeX size={14} className="text-white/80" />
                    ) : (
                      <Volume2 size={14} className="text-red-bright animate-pulse" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="max-w-[320px] mx-auto text-left w-full">
                <h3 className="text-xl font-bold text-white font-sora mb-2">Attention Hook Reel</h3>
                <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">
                  A high impact short-form synthesis featuring automated color grade depth, dynamic subtitles, and high-retention text transitions.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
