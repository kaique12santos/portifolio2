import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FlaskConical, 
  GitBranch, 
  Terminal, 
  Database, 
  Server, 
  ExternalLink, 
  Github, 
  X, 
  CheckCircle2, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data';

// Map string icon names to Lucide icon components
const IconMap = {
  biotech: FlaskConical,
  account_tree: GitBranch,
  terminal: Terminal,
  database: Database,
  server: Server,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projetos" className="py-20 max-w-6xl mx-auto px-6 md:px-12 scroll-mt-24">
      {/* Header */}
      <div className="flex justify-between items-end mb-14">
        <div className="space-y-2">
          <p className="text-[#FF3B00] font-mono text-[11px] uppercase tracking-widest font-semibold">
            SELECTED WORKS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light italic text-[#F5F5F5] tracking-tight">
            Projetos Em Destaque
          </h2>
        </div>
        <div className="hidden md:block h-[1px] bg-[#FF3B00] w-24 mb-3"></div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          const IconComponent = IconMap[project.iconName] || Terminal;

          return (
            <motion.article
              id={`project-card-${project.id}`}
              key={project.id}
              onClick={() => openProjectDetails(project)}
              className="bg-[#0C0C0C] p-8 border border-[#222] rounded-none flex flex-col justify-between min-h-[340px] cursor-pointer hover:border-[#FF3B00] hover:bg-[#111] transition-all group relative overflow-hidden"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF3B00]/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#FF3B00]/10 text-[#FF3B00] rounded-none group-hover:bg-[#FF3B00] group-hover:text-white transition-colors duration-300">
                    <IconComponent size={22} />
                  </div>
                  <span className="text-[#555] font-mono text-xs font-semibold group-hover:text-[#FF3B00] transition-colors">
                    {project.orderString}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-sans text-lg font-bold text-[#F5F5F5] group-hover:text-[#FF3B00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#888] text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#141414] text-[#888] px-2 py-0.5 border border-[#222] rounded-none font-mono text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn more indicator */}
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF3B00] group-hover:underline uppercase tracking-widest font-mono">
                  VER DETALHES &rarr;
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Interactive Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              id="modal-backdrop"
              className="absolute inset-0 bg-[#060606]/80 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetails}
            />

            {/* Modal Content */}
            <motion.div
              id="modal-content-container"
              className="bg-[#0C0C0C] rounded-none max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 border border-[#222]"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                id="modal-close-btn"
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white hover:bg-[#141414] rounded-none transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              {/* Header Info */}
              <div className="p-8 border-b border-[#222] bg-[#111]">
                <span className="text-[#FF3B00] font-mono text-[10px] font-bold uppercase tracking-wider bg-[#FF3B00]/10 px-2.5 py-1 rounded-none border border-[#FF3B00]/20">
                  PROJETO {selectedProject.orderString}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light italic text-white mt-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-xs mt-2 font-mono uppercase tracking-widest">
                  Função:{' '}
                  <span className="font-semibold text-[#FF3B00]">
                    {selectedProject.role || 'Desenvolvedor Backend'}
                  </span>
                </p>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 font-mono">
                    <Cpu size={14} className="text-[#FF3B00]" />
                    Visão Geral
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Core Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 font-mono">
                      <CheckCircle2 size={14} className="text-[#FF3B00]" />
                      Funcionalidades Principais
                    </h4>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
                          <span className="text-[#FF3B00] mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Architecture Highlights */}
                {selectedProject.architecture && selectedProject.architecture.length > 0 && (
                  <div className="space-y-3 bg-[#111] p-5 border border-[#222] rounded-none">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 font-mono">
                      <Layers size={14} className="text-[#FF3B00]" />
                      Arquitetura & Boas Práticas
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.architecture.map((arch, idx) => (
                        <li key={idx} className="text-[11px] text-gray-400 leading-relaxed flex items-start gap-1.5">
                          <span className="text-[#FF3B00] mt-0.5 font-bold">&raquo;</span>
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                    Stack Utilizado
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#141414] text-gray-300 border border-[#222] px-3 py-1 rounded-none font-mono text-xs font-semibold uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="p-6 bg-[#111] border-t border-[#222] flex justify-end gap-3 rounded-none">
                {selectedProject.githubUrl && (
                  <a
                    id="modal-btn-github"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-black border border-[#222] hover:border-[#444] text-[#F5F5F5] text-xs uppercase font-bold tracking-widest font-mono rounded-none transition-colors"
                  >
                    <Github size={14} />
                    Ver Código
                  </a>
                )}
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <a
                    id="modal-btn-live"
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#FF3B00] hover:bg-white hover:text-black text-white text-xs uppercase font-bold tracking-widest font-mono rounded-none transition-colors shadow-xs"
                  >
                    <ExternalLink size={14} />
                    Deploy Ativo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
