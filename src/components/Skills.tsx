"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { skills } from "@/data/portfolio";

// Helper mapper for Lucide Icons
const getIcon = (name: string) => {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[name];
  return IconComponent ? <IconComponent size={24} /> : <LucideIcons.HelpCircle size={24} />;
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-red-bright" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-red-bright font-bold">
              Expertise
            </span>
            <div className="h-[1px] w-6 bg-red-bright" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sora mb-6">
            Technical &amp; <span className="italic text-gradient-red">Creative</span> Arsenal
          </h2>
          <p className="text-white/40 text-sm md:text-base font-light max-w-lg leading-relaxed">
            A curated list of core capabilities developed over years of focused work, combining logical execution with creative aesthetics.
          </p>
        </div>

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
              className="glass-card p-8 flex flex-col justify-between group cursor-default relative overflow-hidden"
            >
              {/* Top Row: Icon & Category */}
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-red-bright/30 group-hover:bg-red-bright/5 flex items-center justify-center text-white/70 group-hover:text-red-bright transition-all duration-300">
                  {getIcon(skill.iconName)}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-3xl font-extrabold font-mono text-white/[0.02] group-hover:text-red-bright/10 transition-colors duration-500 leading-none">
                    0{index + 1}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-white/30 font-semibold font-mono bg-white/[0.02] px-2.5 py-1 rounded-full border border-white/5">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-bright transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">
                  {skill.description}
                </p>
              </div>

              {/* Background soft red glow on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-radial from-red-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
