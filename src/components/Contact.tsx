"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { InstagramIcon } from "@/components/BrandIcons";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate network submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormState({ name: "", email: "", message: "" });
  };

  const contactCards = [
    {
      title: "Email",
      value: profile.email,
      link: `mailto:${profile.email}`,
      icon: Mail,
      label: "Send a message",
    },
    {
      title: "WhatsApp",
      value: profile.whatsapp,
      link: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`,
      icon: MessageSquare,
      label: "Chat directly",
    },
    {
      title: "Instagram",
      value: "@pramodaluri",
      link: profile.instagram,
      icon: InstagramIcon,
      label: "Follow social feed",
    },
  ];

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
        stiffness: 85,
        damping: 18,
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-red-bright" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-red-bright font-bold">
              Contact
            </span>
            <div className="h-[1px] w-6 bg-red-bright" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-white font-sora max-w-2xl leading-[1.1] mb-6">
            Ready to build something <span className="italic text-gradient-red">amazing</span> together?
          </h2>
          <p className="text-white/40 text-sm md:text-base font-light max-w-md leading-relaxed">
            Let&apos;s edit high-impact videos tailored to grow your brand. Select a channel or write directly below.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactCards.map((card, i) => {
            const IconComp = card.icon;
            return (
              <motion.a
                key={i}
                href={card.link}
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass-card p-8 flex flex-col justify-between h-56 group relative overflow-hidden"
              >
                {/* Header Row: Circular Icon & Arrow Link */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-red-bright/30 group-hover:bg-red-bright/5 flex items-center justify-center text-white/50 group-hover:text-red-bright transition-all duration-300">
                    <IconComp size={20} />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white/30 group-hover:text-red-bright transition-colors duration-300">
                    <ArrowUpRight size={18} className="group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-transform duration-300" />
                  </div>
                </div>

                {/* Content Area */}
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-white/30 mb-1">
                    {card.title}
                  </div>
                  <div className="text-lg font-bold text-white font-sora group-hover:text-red-bright transition-colors duration-300">
                    {card.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1 font-light">{card.label}</div>
                </div>

                {/* Soft gradient backdrop glow on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-radial from-red-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-12 relative">
            <h3 className="text-xl font-bold font-sora text-white mb-8">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs uppercase font-mono tracking-widest text-white/40 font-semibold">
                    Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    disabled={status === "submitting" || status === "success"}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#050505]/40 border border-white/5 focus:border-red-bright/40 focus:ring-1 focus:ring-red-bright/35 rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-xs uppercase font-mono tracking-widest text-white/40 font-semibold">
                    Email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    disabled={status === "submitting" || status === "success"}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full bg-[#050505]/40 border border-white/5 focus:border-red-bright/40 focus:ring-1 focus:ring-red-bright/35 rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="form-message" className="text-xs uppercase font-mono tracking-widest text-white/40 font-semibold">
                  Message
                </label>
                <textarea
                  id="form-message"
                  rows={5}
                  required
                  disabled={status === "submitting" || status === "success"}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#050505]/40 border border-white/5 focus:border-red-bright/40 focus:ring-1 focus:ring-red-bright/35 rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Error warning state */}
              {status === "error" && (
                <div className="text-xs text-red-bright font-medium">
                  Please fill out all fields correctly.
                </div>
              )}

              {/* Submit button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="px-8 py-4 rounded-full btn-gradient-red text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 min-w-[160px] relative overflow-hidden group"
                >
                  <AnimatePresence mode="wait">
                    {status === "submitting" ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"
                      />
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2.5"
                      >
                        <span>Send Message</span>
                        <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>

            {/* Success Overlay Screen */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#0A0A0A]/95 rounded-[24px] flex flex-col items-center justify-center p-8 z-10"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                    className="flex flex-col items-center text-center max-w-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-bright/10 border border-red-bright/20 flex items-center justify-center text-red-bright mb-6 shadow-[0_0_20px_rgba(255,45,45,0.2)]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-bold font-sora text-white mb-3">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-white/50 font-light leading-relaxed mb-8">
                      Thank you for reaching out. I have received your request and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full border border-white/10 hover:border-red-bright/40 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300"
                    >
                      Send another
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
