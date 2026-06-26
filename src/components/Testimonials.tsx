"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  // Helper to extract initials for fallback avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0A0A0A]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-red-bright" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-red-bright font-bold">
              Testimonials
            </span>
            <div className="h-[1px] w-6 bg-red-bright" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sora mb-6">
            Client <span className="italic text-gradient-red">Feedback</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base font-light max-w-lg leading-relaxed">
            Kind words from clients and creative directors after successful project collaborations.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-3xl mx-auto mt-12 min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-card p-10 sm:p-14 relative w-full"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-8 text-white/[0.02] pointer-events-none select-none">
                <Quote size={120} />
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg text-white/70 font-light italic leading-relaxed mb-10 relative z-10">
                &ldquo;{current.review}&rdquo;
              </p>

              {/* Client Info Row */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-8 relative z-10">
                {/* Fallback avatar with initial lettering */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-crimson to-red-bright p-[1px] flex-shrink-0 shadow-[0_0_15px_rgba(255,45,45,0.2)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center text-xs font-bold text-white tracking-wider">
                    {getInitials(current.name)}
                  </div>
                </div>

                <div>
                  <div className="text-sm sm:text-base font-bold text-white font-sora">
                    {current.name}
                  </div>
                  <div className="text-xs text-white/40 font-medium">
                    {current.role} at <span className="text-red-bright/80">{current.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-16 sm:bottom-auto sm:left-[-80px] sm:right-[-80px] sm:top-1/2 sm:-translate-y-1/2 flex sm:justify-between justify-center gap-6 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:border-red-bright/40 hover:bg-red-bright/5 text-white/70 hover:text-red-bright flex items-center justify-center transition-all duration-300 shadow-xl"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:border-red-bright/40 hover:bg-red-bright/5 text-white/70 hover:text-red-bright flex items-center justify-center transition-all duration-300 shadow-xl"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2.5 mt-24">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-red-bright shadow-[0_0_8px_rgba(255,45,45,0.6)]"
                  : "w-2 bg-white/10 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
