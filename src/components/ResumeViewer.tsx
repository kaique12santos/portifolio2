import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, Check, FileText, Download, Briefcase, GraduationCap, Code } from 'lucide-react';
import { developerInfo, skillsData } from '../data';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdownResume = `
# KAIQUE CAITANO
**Desenvolvedor Backend**
- Email: kaiqueyakushi@gmail.com
- GitHub: https://github.com/kaiquecaitano
- LinkedIn: https://www.linkedin.com/in/kaique-caitano/

## OBJETIVO PROFISSIONAL
Atuar como Desenvolvedor Backend com foco em Node.js, TypeScript e arquitetura de banco de dados, aplicando práticas de código limpo (Clean Code, SOLID, DRY) e metodologias ágeis para a entrega de softwares escaláveis, seguros e de alta performance.

## FORMAÇÃO ACADÊMICA
- **Graduação em Desenvolvimento de Software Multiplataforma (DSM)**
  *FATEC Zona Leste* | Em andamento

## STACK TECNOLÓGICO
- **Backend:** Node.js, TypeScript, Express, NestJS
- **Banco de Dados:** MySQL, PostgreSQL, MongoDB, Redis
- **Frontend:** React, Tailwind CSS, HTML5, CSS3, Next.js
- **DevOps & Ferramentas:** Docker, Git, GitHub, AWS (Conhecimentos Básicos), CI/CD

## PROJETOS EM DESTAQUE
1. **SisLab - Sistema de Reserva de Laboratórios**
   Plataforma de otimização de agendamento e gestão de laboratórios acadêmicos. Backend robusto em Node.js estruturado com controle de permissão (RBAC) e tratamento estrito de concorrência de reservas no MySQL.

2. **SGPI - Gestão de Projetos Integradores**
   API robusta e modular desenvolvida sob Clean Architecture para acompanhamento do ciclo de vida de projetos multidisciplinares. Utiliza Express e injeção de dependência manual para assegurar o desacoplamento de domínio.

3. **API Gateway & Rate Limiter Customizado**
   Proxy reverso com rate limiting baseado em token bucket, cache de alto desempenho usando Redis e autenticação por chaves API.
    `;

    navigator.clipboard.writeText(markdownResume.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="resume-backdrop"
            className="absolute inset-0 bg-[#060606]/85 backdrop-blur-xs print:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            id="resume-modal-container"
            className="bg-[#0C0C0C] rounded-none max-w-3xl w-full h-[90vh] shadow-2xl relative z-10 border border-[#222] overflow-hidden flex flex-col print:h-auto print:shadow-none print:border-none print:rounded-none"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Top action bar */}
            <div className="bg-[#111] border-b border-[#222] p-4 flex justify-between items-center shrink-0 print:hidden">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-[#FF3B00]" />
                <span className="font-mono text-xs tracking-widest font-bold uppercase text-gray-300">CURRICULO_VITAE</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  id="resume-btn-copy"
                  onClick={handleCopyMarkdown}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0C0C0C] border border-[#222] hover:border-[#FF3B00] text-gray-300 rounded-none text-[10px] font-bold uppercase tracking-wider font-mono transition-colors"
                  title="Copiar currículo formatado em Markdown para colar em e-mails ou formulários"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-500" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      Copiar Markdown
                    </>
                  )}
                </button>
                <button
                  id="resume-btn-print"
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-[#FF3B00] hover:bg-white hover:text-black text-white border-0 rounded-none text-[10px] font-bold uppercase tracking-wider font-mono transition-all"
                >
                  <Printer size={12} />
                  Imprimir / PDF
                </button>
                <button
                  id="resume-close-btn"
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-white hover:bg-[#1A1A1A] rounded-none transition-colors ml-2"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Curriculum Document Container */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 print:p-0 bg-[#0C0C0C] print:bg-white text-zinc-300 print:text-black">
              <div className="max-w-2xl mx-auto space-y-8">
                {/* CV Header */}
                <div className="border-b border-[#222] print:border-zinc-200 pb-6 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                  <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-serif font-light italic text-white print:text-black tracking-tight">
                      {developerInfo.name}
                    </h1>
                    <p className="text-[#FF3B00] font-mono text-[10px] font-bold tracking-[0.25em] uppercase">
                      {developerInfo.title}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400 print:text-zinc-600 space-y-0.5 md:text-right font-mono">
                    <p>kaiqueyakushi@gmail.com</p>
                    <p>São Paulo, SP</p>
                    <p className="hover:text-[#FF3B00] transition-colors">github.com/kaiquecaitano</p>
                    <p className="hover:text-[#FF3B00] transition-colors">linkedin.com/in/kaique-caitano</p>
                  </div>
                </div>

                {/* OBJETIVO */}
                <div className="space-y-3">
                  <h3 className="text-[10px] font-bold text-white print:text-black uppercase tracking-widest flex items-center gap-2 border-b border-[#1A1A1A] print:border-zinc-100 pb-1.5 font-mono">
                    <Briefcase size={14} className="text-[#FF3B00]" />
                    Objetivo Profissional
                  </h3>
                  <p className="text-zinc-400 print:text-zinc-700 text-xs md:text-sm leading-relaxed text-justify font-sans">
                    Atuar como Desenvolvedor Backend com foco em Node.js, TypeScript e arquitetura de banco de dados, aplicando práticas de código limpo (Clean Code, SOLID, DRY) e metodologias ágeis para a entrega de softwares altamente escaláveis, seguros e de excelente performance operacional.
                  </p>
                </div>

                {/* FORMAÇÃO */}
                <div className="space-y-3">
                  <h3 className="text-[10px] font-bold text-white print:text-black uppercase tracking-widest flex items-center gap-2 border-b border-[#1A1A1A] print:border-zinc-100 pb-1.5 font-mono">
                    <GraduationCap size={14} className="text-[#FF3B00]" />
                    Formação Acadêmica
                  </h3>
                  <div className="flex justify-between items-start text-xs md:text-sm gap-4">
                    <div>
                      <h4 className="font-bold text-white print:text-black font-sans">
                        Tecnólogo em Desenvolvimento de Software Multiplataforma (DSM)
                      </h4>
                      <p className="text-gray-400 print:text-zinc-500 text-xs pt-0.5">Fatec Zona Leste (Faculdade de Tecnologia de São Paulo)</p>
                    </div>
                    <span className="text-[9px] bg-[#FF3B00]/10 text-[#FF3B00] font-bold font-mono px-2.5 py-0.5 border border-[#FF3B00]/20 whitespace-nowrap shrink-0 uppercase">
                      Em Andamento
                    </span>
                  </div>
                </div>

                {/* HABILIADES COMPACTAS */}
                <div className="space-y-3">
                  <h3 className="text-[10px] font-bold text-white print:text-black uppercase tracking-widest flex items-center gap-2 border-b border-[#1A1A1A] print:border-zinc-100 pb-1.5 font-mono">
                    <Code size={14} className="text-[#FF3B00]" />
                    Principais Competências Técnicas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {skillsData.map((cat) => (
                      <div key={cat.title} className="space-y-1">
                        <span className="text-[10px] font-bold text-gray-400 print:text-zinc-500 uppercase tracking-wider block font-mono">
                          {cat.title}
                        </span>
                        <p className="text-zinc-400 print:text-zinc-700 text-xs leading-relaxed">
                          {cat.skills.map((s) => s.name).join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PROJETOS / EXPERIÊNCIA */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold text-white print:text-black uppercase tracking-widest flex items-center gap-2 border-b border-[#1A1A1A] print:border-zinc-100 pb-1.5 font-mono">
                    <FileText size={14} className="text-[#FF3B00]" />
                    Projetos Desenvolvidos & Contribuições Acadêmicas
                  </h3>

                  {/* Project 1 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline gap-4 flex-wrap">
                      <h4 className="font-bold text-white print:text-black text-xs md:text-sm font-sans">
                        SisLab - Reserva de Laboratórios
                      </h4>
                      <span className="font-mono text-[10px] text-[#FF3B00]">Node.js, React, MySQL</span>
                    </div>
                    <p className="text-zinc-400 print:text-zinc-600 text-xs leading-relaxed text-justify">
                      Modelagem e desenvolvimento de um ecossistema completo para gerenciar solicitações e concorrências de laboratórios de informática em tempo real. Implementou segurança baseada em níveis de acesso (RBAC) e procedures SQL para validação transacional robusta.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline gap-4 flex-wrap">
                      <h4 className="font-bold text-white print:text-black text-xs md:text-sm font-sans">
                        SGPI - Gestão de Projetos Integradores
                      </h4>
                      <span className="font-mono text-[10px] text-[#FF3B00]">Express, Clean Architecture, REST API</span>
                    </div>
                    <p className="text-zinc-400 print:text-zinc-600 text-xs leading-relaxed text-justify">
                      Estruturação de API restrita utilizando os pilares da arquitetura limpa de Robert C. Martin. Garantiu desacoplamento absoluto do núcleo da aplicação (use cases) através do padrão de injeção de dependências e isolamento total de fontes de dados externas.
                    </p>
                  </div>
                </div>

                {/* METODOLOGIAS */}
                <div className="space-y-2">
                  <h3 className="text-[10px] font-bold text-white print:text-black uppercase tracking-widest flex items-center gap-2 border-b border-[#1A1A1A] print:border-zinc-100 pb-1.5 font-mono">
                    Metodologias & Práticas de Engenharia
                  </h3>
                  <p className="text-zinc-450 print:text-zinc-600 text-xs leading-relaxed">
                    Test-Driven Development (TDD), Programação Orientada a Objetos (POO), Domain-Driven Design (DDD - Conceitos), Versionamento Git com fluxo GitFlow, Arquitetura baseada em Serviços, RESTful design guidelines, Documentação com Swagger/OpenAPI.
                  </p>
                </div>
              </div>
            </div>

            {/* Print instructions banner shown on layout */}
            <div className="p-3 bg-[#FF3B00]/10 border-t border-[#222] text-center text-[10px] text-[#FF3B00] font-mono uppercase tracking-wider print:hidden">
              Dica: Você pode imprimir ou salvar em PDF diretamente clicando no botão "Imprimir / PDF".
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
