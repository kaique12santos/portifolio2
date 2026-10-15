import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail, User, ShieldAlert, CheckCircle } from 'lucide-react';
import { developerInfo, contactsData } from './data';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import ResumeViewer from './components/ResumeViewer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const openResume = () => setIsResumeOpen(true);

  // Social icons mapping
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'LinkedIn':
        return <Linkedin size={20} />;
      case 'GitHub':
        return <Github size={20} />;
      case 'Email':
        return <Mail size={20} />;
      default:
        return <User size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col justify-between selection:bg-[#FF3B00] selection:text-white">
      {/* Header / Top Navigation Bar */}
      <Header onOpenResume={openResume} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onContactClick={openContact} />

        {/* Separator line */}
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-[#1A1A1A]"></div>
        </div>

        {/* About Section */}
        <About />

        {/* Separator line */}
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-[#1A1A1A]"></div>
        </div>

        {/* Projects Section */}
        <Projects />

        {/* Separator line */}
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px bg-[#1A1A1A]"></div>
        </div>

        {/* Skills Section */}
        <Skills />
      </main>

      {/* Footer Section & Direct Contacts */}
      <footer
        id="contato"
        className="bg-[#060606] w-full py-14 border-t border-[#141414] mt-20"
      >
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-6xl mx-auto gap-8">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <span className="font-mono text-xs font-bold tracking-[0.3em] text-[#FF3B00] uppercase">
              KAIQUE CAITANO
            </span>
            <p className="font-sans text-[11px] text-zinc-500 tracking-wide">
              &copy; 2026 Backend Architecture & Design. Todos os direitos reservados.
            </p>
          </div>

          {/* Connect Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {contactsData.map((contact) => (
              <a
                id={`footer-link-${contact.platform.toLowerCase()}`}
                key={contact.platform}
                href={contact.url}
                target={contact.platform !== 'Email' ? '_blank' : undefined}
                rel={contact.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-zinc-400 hover:text-[#FF3B00] transition-colors font-bold text-xs font-mono uppercase tracking-wider group"
              >
                <span className="text-zinc-600 group-hover:text-[#FF3B00] transition-colors">
                  {getSocialIcon(contact.platform)}
                </span>
                <span>{contact.platform}</span>
              </a>
            ))}
            
            {/* Quick action button to contact modal */}
            <button
              id="footer-btn-open-contact"
              onClick={openContact}
              className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[#FF3B00] hover:bg-white hover:text-black text-white border-0 px-4 py-2.5 rounded-none transition-colors"
            >
              Falar Comigo
            </button>
          </div>

        </div>
      </footer>

      {/* Slide-over/Dialog Modals */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
