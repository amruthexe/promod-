"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/BrandIcons";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: GithubIcon, link: profile.github, label: "GitHub" },
    { icon: LinkedinIcon, link: profile.linkedin, label: "LinkedIn" },
    { icon: InstagramIcon, link: profile.instagram, label: "Instagram" },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-16 pb-8 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div 
        className="absolute bottom-0 right-1/4 left-1/4 h-32 rounded-full filter blur-[80px] opacity-10 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(255, 45, 45, 0.3) 0%, rgba(0,0,0,0) 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        {/* Large Logo / Name Header */}
        <div className="text-center mb-10">
          <button
            onClick={() => scrollToSection("home")}
            className="group flex flex-col items-center focus:outline-none"
          >
            <span className="text-3xl md:text-4xl font-extrabold tracking-[0.3em] uppercase text-white font-sora mb-2 group-hover:text-red-bright transition-colors duration-300">
              {profile.name.split(" ")[0]}
              <span className="text-red-bright">.</span>
            </span>
            <span className="text-[9px] uppercase font-semibold font-mono tracking-[0.4em] text-white/30">
              Video Editing &amp; Motion Design Portfolio
            </span>
          </button>
        </div>

        {/* Quick Links Menu */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {["home", "showcase", "about", "skills", "projects", "experience", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-xs uppercase font-semibold font-mono tracking-widest text-white/50 hover:text-red-bright transition-colors duration-300"
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Social Icons row */}
        <div className="flex items-center gap-5 mb-12">
          {socialLinks.map((social, i) => {
            const IconComp = social.icon;
            return (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 hover:border-red-bright/30 bg-white/[0.01] hover:bg-red-bright/5 flex items-center justify-center text-white/40 hover:text-red-bright transition-all duration-300"
                aria-label={social.label}
              >
                <IconComp size={16} />
              </a>
            );
          })}
        </div>

        {/* Footer Base Row */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/30">
          {/* Copyright mark */}
          <div>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </div>

          {/* Designed by attribution */}
          <div className="flex items-center gap-2">
            <span>Built with Next.js 15 &amp; Framer Motion</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-full border border-white/5 hover:border-red-bright/30 flex items-center justify-center text-white/30 hover:text-red-bright transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
