import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Terminal } from 'lucide-react';
import { developerInfo } from '../data';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className="py-16 md:py-28 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto px-6 md:px-12">
      {/* Left side text */}
      <motion.div
        id="hero-text-container"
        className="flex-1 space-y-8 text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-[#FF3B00] font-mono text-[11px] tracking-widest uppercase font-semibold">
            <Terminal size={14} />
            <span>sys.init() // BACKEND ARCHITECTURE</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[0.9] italic font-light tracking-tighter text-[#F5F5F5]">
            Creative<br />
            <span className="md:ml-16 lg:ml-20 text-[#FF3B00]">Developer</span>
          </h1>
          
          <p className="font-sans text-sm md:text-base text-[#999] max-w-lg leading-relaxed tracking-wide">
            {developerInfo.tagline}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            id="hero-btn-projects"
            href="#projetos"
            className="group flex items-center gap-2 bg-[#FF3B00] hover:bg-white hover:text-black text-white px-7 py-3.5 rounded-none font-bold text-xs tracking-widest uppercase transition-all active:scale-95"
          >
            Ver Projetos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            id="hero-btn-contact"
            onClick={onContactClick}
            className="flex items-center gap-2 bg-[#111] border border-[#222] hover:border-[#444] text-[#F5F5F5] px-7 py-3.5 rounded-none font-bold text-xs tracking-widest uppercase transition-all active:scale-95"
          >
            <MessageSquare size={14} className="text-[#666]" />
            Contato
          </button>
        </div>
      </motion.div>

      {/* Right side avatar image with glows */}
      <motion.div
        id="hero-image-container"
        className="relative flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      >
        {/* Subtle background glow */}
        <div className="absolute -z-10 -bottom-4 -right-4 w-72 h-72 rounded-full bg-[#FF3B00]/5 blur-3xl animate-pulse"></div>
        <div className="absolute -z-10 -top-4 -left-4 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>

        {/* Outer picture container - Editorial style with thick border and grayscale */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-none overflow-hidden border-[8px] border-[#141414] shadow-2xl bg-[#0C0C0C] flex items-center justify-center relative group">
          <img
            id="hero-avatar"
            alt={developerInfo.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            src={developerInfo.avatarUrl}
            referrerPolicy="no-referrer"
          />
          {/* Subtle inner overlay border */}
          <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
          
          {/* Decorative index marker */}
          <div className="absolute bottom-4 left-4 bg-black/80 border border-[#222] px-2 py-1 text-[9px] font-mono tracking-wider text-[#FF3B00]">
            K. CAITANO // 01
          </div>
        </div>
      </motion.div>
    </section>
  );
}
