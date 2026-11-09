import React from 'react';
import { GraduationCap, Briefcase, FileText, CheckCircle2 } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/content';
import { Language } from '../types';

interface AboutProps {
  language: Language;
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ language, onOpenCvModal }) => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            {language === 'pt' ? 'Perfil & Competências' : 'Profile & Technical Competencies'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            {language === 'pt'
              ? 'Sobre mim e competências técnicas'
              : 'About me and technical competencies'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'pt'
              ? 'Profissional residente em Pemba, Cabo Delgado, com experiência de terreno em suporte técnico L1/L2, administração de redes e servidores, aliado a serviços digitais práticos.'
              : 'Pemba-based IT professional with field experience in L1/L2 technical support, network and server administration, and agile digital services.'}
          </p>
        </div>

        {/* Top: Short Bio + Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Bio text (3 to 4 lines) + Key Anchors */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === 'pt' ? (
                <>
                  Chamo-me <strong>Felizardo Franko</strong>, resido em Pemba e trabalho na resolução prática de problemas de tecnologias de informação. Com formação técnico-profissional em Informática e Gestão pela Politécnica, actuo actualmente na <strong>RHDC</strong> em suporte técnico e apoio administrativo, como <strong>Formador no Programa UGCS/CV5 em Saúde</strong> e na gestão da <strong>FrankTech Serviços Digitais</strong>.
                </>
              ) : (
                <>
                  My name is <strong>Felizardo Franko</strong>, based in Pemba, focused on practical IT resolution and infrastructure stability. With vocational qualifications in IT & Management from A Politécnica, I serve at <strong>RHDC</strong> in technical support and administration, as an <strong>IT Trainer for the UGCS/CV5 Health Program</strong>, and manage <strong>FrankTech Digital Services</strong>.
                </>
              )}
            </p>

            {/* Quick credentials cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 shrink-0 border border-cyan-800/40">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">
                    {language === 'pt' ? 'Curso Médio de Informática e Gestão' : 'Diploma in IT & Business Management'}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    A Politécnica
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 shrink-0 border border-blue-800/40">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">
                    {language === 'pt' ? 'Experiência & Actuação' : 'Experience & Roles'}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    RHDC · UGCS/CV5 · FrankTech
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{language === 'pt' ? 'Ver Curriculum Vitae Completo' : 'View Full Curriculum Vitae'}</span>
              </button>
            </div>
          </div>

          {/* Photo card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/hero_it_infrastructure.webp"
                  alt="Infraestrutura de TI e equipamentos gerenciados por Felizardo Franko"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={480}
                />
              </div>
              <div className="p-3.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-white font-medium">Pemba, Cabo Delgado</span>
                <span className="text-cyan-400 font-mono text-[11px]">Suporte L1/L2 & Redes</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: Competências grouped in columns with text level badges */}
        <div>
          <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {language === 'pt' ? 'Competências Técnicas por Área' : 'Technical Skills by Category'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SKILLS_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight pb-2.5 mb-3 border-b border-slate-800">
                    {language === 'pt' ? cat.title : cat.titleEn}
                  </h4>
                  <ul className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-slate-300 font-medium leading-snug">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold shrink-0 ${
                            skill.level === 'Avançado'
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
