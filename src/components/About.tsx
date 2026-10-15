import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, Target } from 'lucide-react';
import { developerInfo } from '../data';

export default function About() {
  return (
    <section id="sobre" className="py-20 max-w-6xl mx-auto px-6 md:px-12 scroll-mt-24">
      {/* Centered Heading with lines */}
      <div className="flex items-center gap-4 mb-14">
        <div className="h-px bg-[#222] flex-1"></div>
        <h2 className="font-sans text-[10px] md:text-xs font-bold tracking-[0.4em] text-[#FF3B00] uppercase px-4 whitespace-nowrap">
          SOBRE MIM
        </h2>
        <div className="h-px bg-[#222] flex-1"></div>
      </div>

      {/* About Content */}
      <motion.div
        id="about-content"
        className="max-w-3xl mx-auto text-center space-y-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6 text-[#999] text-base md:text-lg leading-relaxed font-sans">
          <p>
            Graduando em Desenvolvimento de Software Multiplataforma (DSM) na{' '}
            <span className="font-bold text-[#F5F5F5]">Fatec Zona Leste</span>. 
            Minha trajetória é pautada pelo compromisso com a excelência técnica, aplicando padrões de{' '}
            <span className="text-[#FF3B00] font-semibold border-b border-[#FF3B00]/40 pb-0.5">Clean Code</span>{' '}
            e princípios de segurança desde a concepção do código.
          </p>
          <p className="text-[#888]">
            Acredito que o backend é o coração de qualquer aplicação de sucesso. Por isso, foco em arquiteturas robustas que permitem crescimento sustentável e performance otimizada.
          </p>
        </div>

        {/* Core Values / Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-left">
          <div className="p-8 bg-[#0C0C0C] border border-[#222] rounded-none hover:border-[#FF3B00] transition-all group">
            <div className="w-10 h-10 bg-[#FF3B00]/10 text-[#FF3B00] rounded-none flex items-center justify-center mb-6 group-hover:bg-[#FF3B00] group-hover:text-white transition-colors duration-300">
              <BookOpen size={18} />
            </div>
            <h4 className="font-bold text-[#F5F5F5] text-base mb-3 font-sans uppercase tracking-wider">Formação de Ponta</h4>
            <p className="text-xs text-[#888] leading-relaxed">
              Foco em engenharia de software avançada, abrangendo banco de dados, infraestrutura em nuvem e modelagem de microsserviços na Fatec Zona Leste.
            </p>
          </div>

          <div className="p-8 bg-[#0C0C0C] border border-[#222] rounded-none hover:border-[#FF3B00] transition-all group">
            <div className="w-10 h-10 bg-[#FF3B00]/10 text-[#FF3B00] rounded-none flex items-center justify-center mb-6 group-hover:bg-[#FF3B00] group-hover:text-white transition-colors duration-300">
              <Award size={18} />
            </div>
            <h4 className="font-bold text-[#F5F5F5] text-base mb-3 font-sans uppercase tracking-wider">Código Limpo</h4>
            <p className="text-xs text-[#888] leading-relaxed">
              Desenvolvimento orientado a testes (TDD), refatoração contínua, SOLID e DRY para garantir manutenibilidade e escalabilidade do software.
            </p>
          </div>

          <div className="p-8 bg-[#0C0C0C] border border-[#222] rounded-none hover:border-[#FF3B00] transition-all group">
            <div className="w-10 h-10 bg-[#FF3B00]/10 text-[#FF3B00] rounded-none flex items-center justify-center mb-6 group-hover:bg-[#FF3B00] group-hover:text-white transition-colors duration-300">
              <Target size={18} />
            </div>
            <h4 className="font-bold text-[#F5F5F5] text-base mb-3 font-sans uppercase tracking-wider">Foco em Performance</h4>
            <p className="text-xs text-[#888] leading-relaxed">
              Otimização de queries SQL, estruturação de cache resiliente com Redis e microsserviços assíncronos de alta disponibilidade.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
