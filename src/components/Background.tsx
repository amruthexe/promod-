"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15, // Extremely slow drift
          vy: -Math.random() * 0.2 - 0.05,  // Slow upward drift
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
          targetAlpha: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 45, 45, ${p.alpha})`;
        ctx.fill();

        // Update particle physics
        p.x += p.vx;
        p.y += p.vy;

        // Soft alpha pulse
        if (Math.random() < 0.01) {
          p.targetAlpha = Math.random() * 0.4 + 0.1;
        }
        p.alpha += (p.targetAlpha - p.alpha) * 0.02;

        // Wrap around boundaries
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w;
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#050505] overflow-hidden -z-20 pointer-events-none select-none">
      {/* 1. Large Blurred Red Glows */}
      {/* Hero Glow (Top Right) */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full filter blur-[120px] opacity-[0.25] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 45, 45, 0.4) 0%, rgba(165, 0, 0, 0.1) 50%, rgba(0,0,0,0) 70%)"
        }}
      />

      {/* Services/Skills Glow (Middle Left) */}
      <div 
        className="absolute top-[35%] left-[-20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full filter blur-[150px] opacity-[0.2] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(165, 0, 0, 0.3) 0%, rgba(122, 0, 0, 0.08) 50%, rgba(0,0,0,0) 70%)"
        }}
      />

      {/* Projects Glow (Middle Right) */}
      <div 
        className="absolute top-[60%] right-[-15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full filter blur-[130px] opacity-[0.18] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 45, 45, 0.35) 0%, rgba(122, 0, 0, 0.08) 50%, rgba(0,0,0,0) 70%)"
        }}
      />

      {/* Contact Glow (Bottom Center) */}
      <div 
        className="absolute bottom-[-20%] left-[20%] right-[20%] h-[50vh] rounded-full filter blur-[140px] opacity-[0.22] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 45, 45, 0.3) 0%, rgba(165, 0, 0, 0.08) 50%, rgba(0,0,0,0) 70%)"
        }}
      />

      {/* 2. Tiny Dot-Matrix Grid Overlay */}
      <div className="absolute inset-0 w-full h-full grid-dots opacity-[0.7]" />

      {/* 3. Subtle Animated Particles (Canvas) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen"
      />

      {/* 4. Cinematic Vignette (Soft dark border) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(5,5,5,0.85) 100%)"
        }}
      />
    </div>
  );
}
