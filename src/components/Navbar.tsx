"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Showcase", id: "showcase" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    // Section Observer for Active Link Indicators
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus on middle/upper half of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 md:gap-3 text-white font-semibold text-base md:text-lg tracking-wider focus:outline-none group"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-red-crimson via-red-dark to-red-bright p-[1px] shadow-[0_0_15px_rgba(255,45,45,0.25)] group-hover:shadow-[0_0_20px_rgba(255,45,45,0.45)] group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center font-black text-xs md:text-sm text-red-bright">
              {profile.name[0]}
            </div>
          </div>
          <span className="font-extrabold uppercase tracking-[0.2em] text-white hover:text-red-bright transition-colors duration-300">
            {profile.name.split(" ")[0]}
            <span className="text-red-bright">.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-[10px] lg:text-xs xl:text-sm tracking-widest uppercase font-semibold focus:outline-none py-1.5 transition-all duration-300 hover:text-white"
              style={{
                color: activeSection === item.id ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)",
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-red-bright shadow-[0_0_8px_rgba(255,45,45,0.8)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button (Desktop Only) */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-red-crimson to-red-bright text-white shadow-[0_4px_15px_rgba(255,45,45,0.35)] hover:shadow-[0_0_25px_rgba(255,45,45,0.5)] hover:scale-105 transition-all duration-300 focus:outline-none"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm tracking-widest uppercase font-medium py-2 focus:outline-none ${
                    activeSection === item.id ? "text-red-bright" : "text-white/60"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-bright shadow-[0_0_8px_rgba(255,45,45,0.8)]" />
                    )}
                  </span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-center py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-red-crimson to-red-bright text-white focus:outline-none"
              >
                Let&apos;s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
