import React from 'react';
import { TIMELINE } from '../data/content';
import { Language } from '../types';
import { Briefcase, GraduationCap, Plane, Laptop, MapPin } from 'lucide-react';

interface TimelineProps {
  language: Language;
}

export const Timeline: React.FC<TimelineProps> = ({ language }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />;
      case 'internship':
        return <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />;
      case 'support':
        return <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />;
      case 'business':
        return <Laptop className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />;
      default:
        return <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="percurso" className="py-16 sm:py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            {language === 'pt' ? 'Trajectória & Experiência' : 'Career Progression'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {language === 'pt'
              ? 'Um percurso construído entre o rigor técnico e a operação de terreno'
              : 'A journey built on academic rigor & field operations'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'pt'
              ? 'Da formação técnico-profissional na Politécnica e estágio em ambiente aeroportuário ao suporte técnico de TI, infraestrutura de redes e serviços digitais com a FrankTech em Cabo Delgado.'
              : 'From technical vocational training and airport operations internship to IT support, structured networking, and digital services with FrankTech across Cabo Delgado.'}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 ml-3 sm:ml-6 md:ml-32 space-y-8 sm:space-y-12">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative pl-5 sm:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[15px] sm:-left-[17px] top-1 p-1 sm:p-1.5 rounded-full bg-slate-950 border border-slate-700 shadow-md group-hover:border-cyan-400 transition-colors">
                {getIcon(item.type)}
              </div>

              {/* Year Label for md+ screens on the left */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="font-mono text-xs font-bold text-cyan-400 tabular-nums">
                  {item.year}
                </span>
              </div>

              {/* Content Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700/80 transition-colors shadow-sm">
                
                {/* Mobile Year Badge */}
                <div className="md:hidden font-mono text-xs font-bold text-cyan-400 mb-1.5">
                  {item.year}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-cyan-400/90 mb-2.5">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {item.achievements.map((ach, achIdx) => (
                    <div key={achIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-snug">
                      <span className="text-cyan-400 mt-0.5 shrink-0">•</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
