import React from 'react';
import { motion } from 'motion/react';
import { Layers, Database, Monitor, Terminal } from 'lucide-react';
import { skillsData } from '../data';

// Icon mapper for the 4 categories
const CategoryIconMap = {
  storage: Layers,
  database: Database,
  desktop_windows: Monitor,
  terminal: Terminal,
};

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 max-w-6xl mx-auto px-6 md:px-12 scroll-mt-24">
      {/* Centered title */}
      <div className="text-center mb-14 space-y-3">
        <h2 className="font-serif text-3xl md:text-4xl font-light italic text-[#F5F5F5] tracking-tight">
          Stack Tecnológico
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-xs tracking-wide">
          Ferramentas, linguagens e frameworks que utilizo no dia a dia para construir soluções backend robustas e seguras.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, index) => {
          const IconComponent = CategoryIconMap[category.iconName] || Terminal;

          return (
            <motion.div
              id={`skills-card-${category.title.toLowerCase().replace(/\s/g, '-')}`}
              key={category.title}
              className="bg-[#0C0C0C] p-6 rounded-none border border-[#222] shadow-xs hover:border-[#FF3B00] transition-all flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                {/* Category Header */}
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#FF3B00] mb-6 flex items-center gap-2 uppercase font-mono">
                  <span className="p-1.5 bg-[#FF3B00]/10 text-[#FF3B00] rounded-none">
                    <IconComponent size={14} />
                  </span>
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      id={`skill-item-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
                      key={skill.name}
                      className="flex justify-between items-center group/item"
                    >
                      <span className="text-gray-300 font-sans font-medium text-xs tracking-wide group-hover/item:text-[#FF3B00] transition-colors">
                        {skill.name}
                      </span>
                      {/* Active status bubble */}
                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          skill.active
                            ? 'bg-[#FF3B00] shadow-[0_0_8px_rgba(255,59,0,0.6)] group-hover/item:scale-125'
                            : 'bg-zinc-800'
                        }`}
                        title={skill.active ? 'Domínio Ativo' : 'Conhecimento Intermediário / Aprendendo'}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Informative footer for card */}
              <div className="mt-8 pt-4 border-t border-[#141414] flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>{category.skills.filter(s => s.active).length} ATIVOS</span>
                <span>{category.skills.filter(s => !s.active).length} ESTUDOS</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
