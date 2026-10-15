import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 w-full transition-all duration-300 z-50 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 max-w-6xl mx-auto">
        {/* Logo */}
        <a
          id="logo-link"
          href="#"
          className="text-xs tracking-[0.3em] font-extrabold uppercase text-[#F5F5F5] hover:opacity-85 transition-opacity"
        >
          KAIQUE CAITANO<span className="text-[#FF3B00]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <a
              id={`nav-desktop-${item.label.toLowerCase()}`}
              key={item.label}
              href={item.href}
              className="text-[#999] hover:text-[#FF3B00] font-semibold text-[11px] tracking-widest uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            id="nav-desktop-resume"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 bg-[#FF3B00] hover:bg-white hover:text-black text-white px-4 py-2 rounded-xs font-bold text-[11px] tracking-widest uppercase transition-all shadow-xs active:scale-95"
          >
            <FileText size={13} />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="nav-mobile-resume-icon"
            onClick={onOpenResume}
            className="p-2 text-[#FF3B00] hover:bg-[#111] rounded-xs transition-colors"
            title="Visualizar Resume"
          >
            <FileText size={20} />
          </button>
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#F5F5F5] hover:bg-[#111] rounded-xs transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu-container"
          className="absolute top-full left-0 w-full bg-[#0C0C0C] border-b border-[#222] shadow-xl px-6 py-8 md:hidden flex flex-col gap-4 animate-fadeIn"
        >
          {menuItems.map((item) => (
            <a
              id={`nav-mobile-${item.label.toLowerCase()}`}
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className="text-[#999] hover:text-[#FF3B00] font-bold text-xs tracking-widest uppercase py-3 border-b border-[#1A1A1A] last:border-0 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            id="nav-mobile-resume"
            onClick={() => {
              setIsOpen(false);
              onOpenResume();
            }}
            className="flex items-center justify-center gap-2 bg-[#FF3B00] hover:bg-white hover:text-black text-white py-3.5 rounded-xs font-bold text-xs tracking-widest uppercase transition-all shadow-xs mt-2"
          >
            <FileText size={15} />
            Resume / Currículo
          </button>
        </div>
      )}
    </header>
  );
}
