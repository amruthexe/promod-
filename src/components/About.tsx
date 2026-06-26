"use client";

import { motion } from "framer-motion";
import { Sparkles, Volume2, Layers, Palette } from "lucide-react";

const pillars = [
  {
    title: "Retention Pacing",
    description: "Building narrative rhythm using frame-cuts, zoom effects, and speed-ramps to keep viewers engaged.",
    icon: Sparkles,
    badge: "Focus 01",
  },
  {
    title: "Sound Design & SFX",
    description: "Integrating multi-layered sound effects, background hums, and clean voice treatment for deep acoustic immersion.",
    icon: Volume2,
    badge: "Focus 02",
  },
  {
    title: "Scroll-Stopping Visuals",
    description: "Crafting eye-catching motion typography, dynamic popups, and graphic overlays that stop the scroll.",
    icon: Layers,
    badge: "Focus 03",
  },
  {
    title: "Cinematic Color Grading",
    description: "Correcting and grading footage to deliver rich contrast, vibrant tones, and high-end commercial appeal.",
    icon: Palette,
    badge: "Focus 04",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
      },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-red-bright/5 filter blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Centered Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-red-bright" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-red-bright font-bold">
              About Me
            </span>
            <div className="h-[1px] w-6 bg-red-bright" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sora max-w-3xl leading-tight">
            Crafting Scroll-Stopping Videos with <span className="italic text-gradient-red">Precision</span> &amp; Impact
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left: Biography Details */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-6"
            >
              I am a results-oriented video editor and creative motion specialist dedicated to turning raw footage into high-retention stories. My focus is on producing premium, engaging content that scales your brand value, spikes watch time, and turns casual viewers into loyal clients.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white/40 text-sm md:text-base font-light leading-relaxed mb-8"
            >
              Whether collaborating with top creators, luxury gyms, or ecommerce agencies, I take care of the entire post-production pipeline. From tight pacing and custom motion captions to clean sound designs and cinematic color grading, I ensure your content stands out in a crowded social feed.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-xs text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-red-bright animate-pulse" />
                Retention-Driven Pacing
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-xs text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-red-bright animate-pulse" />
                Dynamic Captions & FX
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-xs text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-red-bright animate-pulse" />
                Immersive Sound Design
              </div>
            </motion.div>
          </div>

          {/* Right: Modern Editing Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="glass-card p-8 flex flex-col justify-between h-56 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-red-bright/5 border border-red-bright/10 flex items-center justify-center text-red-bright group-hover:text-white group-hover:bg-red-bright transition-all duration-300 shadow-[0_0_15px_rgba(255,45,45,0.05)]">
                      <IconComponent size={22} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-semibold font-mono">
                      {pillar.badge}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-base font-bold text-white font-sora mb-2 group-hover:text-red-bright transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-white/40 leading-relaxed font-light">{pillar.description}</p>
                  </div>
                  {/* Hover background radial glow */}
                  <div className="absolute inset-0 -z-10 bg-gradient-radial from-red-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
