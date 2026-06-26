"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
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
    hidden: { y: 50, opacity: 0 },
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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-red-bright" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-red-bright font-bold">
              Work
            </span>
            <div className="h-[1px] w-6 bg-red-bright" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sora mb-6">
            Selected <span className="italic text-gradient-red">Masterpieces</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base font-light max-w-lg leading-relaxed">
            A selection of creative and commercial editing projects with detailed post-production timelines and visual specs.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden flex flex-col h-full cursor-default"
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#050505] border-b border-white/5">
                {/* 1. Abstract Code-Based Animated Visual Placeholder */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 select-none">
                  {/* Grid Overlay */}
                  <div className="absolute inset-0 w-full h-full grid-dots opacity-[0.5]" />
                  
                  {/* Glow Backdrop */}
                  <div 
                    className="absolute w-44 h-44 rounded-full filter blur-2xl opacity-20 group-hover:scale-125 transition-transform duration-700 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, #FF2D2D 0%, #7A0000 50%, rgba(0,0,0,0) 70%)"
                    }}
                  />

                  {/* Floating abstract code graphics */}
                  <div className="w-full h-full border border-white/5 rounded-xl bg-[#0A0A0A]/40 backdrop-blur-sm flex flex-col justify-between p-5 relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                        Module 0{index + 1}
                      </span>
                    </div>

                    {/* Mock Video Editing Timeline */}
                    <div className="flex flex-col gap-1.5 w-full font-mono text-[9px] text-white/30">
                      {/* Video Track */}
                      <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 rounded px-2.5 py-1.5">
                        <span className="text-red-bright font-bold w-12 text-[8px] uppercase tracking-wider">Video:</span>
                        <div className="h-3 bg-red-bright/10 border border-red-bright/20 rounded w-full relative overflow-hidden flex items-center">
                          <div className="absolute inset-y-0 left-[15%] w-[45%] bg-red-bright/35 border-x border-red-bright/50 rounded flex items-center justify-center text-[7px] text-white/70 font-semibold truncate">Cut_0{index + 1}_Graded.mp4</div>
                          <div className="absolute inset-y-0 left-[65%] w-[30%] bg-red-bright/20 border-x border-red-bright/40 rounded" />
                        </div>
                      </div>
                      {/* Audio SFX Track */}
                      <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 rounded px-2.5 py-1.5">
                        <span className="text-blue-400 font-bold w-12 text-[8px] uppercase tracking-wider">Audio SFX:</span>
                        <div className="h-3 bg-blue-400/10 border border-blue-400/20 rounded w-full relative overflow-hidden">
                          <div className="absolute inset-y-0 left-[5%] w-[25%] bg-blue-400/35 border-x border-blue-400/50 rounded flex items-center justify-center text-[7px] text-white/60 truncate">Transition_FX</div>
                          <div className="absolute inset-y-0 left-[75%] w-[20%] bg-blue-400/35 border-x border-blue-400/50 rounded flex items-center justify-center text-[7px] text-white/60 truncate">Bass_Impact</div>
                        </div>
                      </div>
                      {/* Audio Music Track */}
                      <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 rounded px-2.5 py-1.5">
                        <span className="text-green-400 font-bold w-12 text-[8px] uppercase tracking-wider">Music:</span>
                        <div className="h-3 bg-green-400/10 border border-green-400/20 rounded w-full relative overflow-hidden">
                          <div className="absolute inset-y-0 left-0 right-0 bg-green-400/25 border-x border-green-400/40 rounded flex items-center justify-center text-[7px] text-white/60 truncate">Cinematic_Beat_120BPM</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                      <Layers size={14} className="text-red-bright" />
                      <span>{project.title.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Hover overlay filter */}
                <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Details Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono font-semibold uppercase tracking-widest text-red-bright bg-red-bright/5 border border-red-bright/10 px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white font-sora mb-3 group-hover:text-red-bright transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/50 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 mt-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-red-bright transition-colors duration-300 group/link"
                  >
                    <span>Watch Video</span>
                    <ExternalLink size={14} className="group-hover/link:translate-y-[-1px] group-hover/link:translate-x-[1px] transition-transform duration-300" />
                  </a>

                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-red-bright transition-colors duration-300 group/link"
                  >
                    <span>Production Specs</span>
                    <Layers size={14} className="group-hover/link:scale-105 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
