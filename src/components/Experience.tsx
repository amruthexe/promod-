"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
      },
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-red-bright" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-red-bright font-bold">
              Journey
            </span>
            <div className="h-[1px] w-6 bg-red-bright" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sora mb-6">
            Career <span className="italic text-gradient-red">Timeline</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base font-light max-w-lg leading-relaxed">
            A chronological record of engineering positions, client relations, and digital solutions delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Vertical Glowing Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-red-bright/20 via-red-bright to-red-crimson/20"
          />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-16"
          >
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node Point */}
                  <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-[#050505] border-2 border-red-bright flex items-center justify-center shadow-[0_0_10px_2px_rgba(255,45,45,0.4)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-bright animate-pulse" />
                    </div>
                    {/* Ring ping animation */}
                    <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-red-bright/20 animate-ping -z-10" />
                  </div>

                  {/* Left Side: Empty space (desktop) or spacer */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Right Side: Timeline Content Box */}
                  <motion.div
                    variants={cardVariants}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12"
                  >
                    <div className="glass-card p-8 hover:border-red-bright/20 relative overflow-hidden group">
                      {/* Period Badge */}
                      <div className="flex items-center gap-2 mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-red-bright">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white font-sora mb-1">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-white/50 mb-6 flex items-center gap-2">
                        <Briefcase size={12} className="text-red-bright/60" />
                        <span>{item.company}</span>
                      </h4>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Soft radial glow on hover */}
                      <div className="absolute inset-0 -z-10 bg-gradient-radial from-red-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
