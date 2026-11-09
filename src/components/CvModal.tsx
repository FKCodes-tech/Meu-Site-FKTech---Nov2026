import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle, GraduationCap, Briefcase } from 'lucide-react';
import { CV_DATA, PERSONAL_INFO } from '../data/content';
import { Language } from '../types';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-3 sm:my-8 max-h-[94vh] flex flex-col">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="print:hidden flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400">
              Curriculum Vitae
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500">· Felizardo Franko</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm"
              title="Imprimir ou Guardar em PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'Imprimir / PDF' : 'Print / PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fechar CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="p-4 sm:p-8 md:p-12 text-slate-100 bg-slate-900 print:bg-white print:text-black print:p-8 space-y-6 sm:space-y-8 overflow-y-auto flex-1 print:overflow-visible">
          
          {/* CV Header */}
          <div className="border-b border-slate-800 print:border-gray-300 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight mb-2">
              {CV_DATA.fullName}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-cyan-400 print:text-sky-700 mb-4">
              {CV_DATA.title}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-300 print:text-gray-700">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-gray-500 shrink-0" />
                <span>{CV_DATA.contact.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-gray-500 shrink-0" />
                <span className="font-mono">{CV_DATA.contact.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-gray-500 shrink-0" />
                <span className="font-mono">
                  <a href={`tel:${PERSONAL_INFO.phonePrimary.replace(/\s+/g, '')}`} className="hover:underline">
                    {PERSONAL_INFO.phonePrimary}
                  </a>{' '}
                  /{' '}
                  <a href={`tel:${PERSONAL_INFO.phoneAlt.replace(/\s+/g, '')}`} className="hover:underline">
                    {PERSONAL_INFO.phoneAlt}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-sky-800 mb-3 border-b border-slate-800 print:border-gray-300 pb-1">
              {language === 'pt' ? 'Resumo Profissional' : 'Executive Summary'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {CV_DATA.summary}
            </p>
          </div>

          {/* Habilitações Académicas */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-sky-800 mb-3 border-b border-slate-800 print:border-gray-300 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'Habilitações Literárias & Formação' : 'Education & Qualifications'}</span>
            </h2>
            <div className="space-y-4">
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black">
                    <span>{edu.course}</span>
                    <span className="font-mono text-cyan-400 print:text-gray-600 text-xs font-normal">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-slate-400 print:text-gray-600 font-medium mt-0.5">
                    {edu.institution}
                  </div>
                  <p className="text-slate-300 print:text-gray-700 text-xs mt-1 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-sky-800 mb-3 border-b border-slate-800 print:border-gray-300 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'Experiência Profissional Relevante' : 'Professional Experience'}</span>
            </h2>
            <div className="space-y-6">
              {CV_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white print:text-black">{exp.role}</span>
                    <span className="font-mono text-cyan-400 print:text-gray-600 text-xs">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 print:text-gray-600 font-medium">
                    {exp.company} — {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-700 pl-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Competências Principais */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-sky-800 mb-3 border-b border-slate-800 print:border-gray-300 pb-1">
              {language === 'pt' ? 'Competências Técnicas Principais' : 'Core Technical Skills'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-gray-800">
              {CV_DATA.keySkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 print:text-sky-700 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Idiomas & Referências */}
          <div className="pt-2 border-t border-slate-800 print:border-gray-300 text-xs text-slate-400 print:text-gray-600 flex flex-col sm:flex-row justify-between gap-2">
            <div>
              <strong>{language === 'pt' ? 'Idiomas:' : 'Languages:'}</strong> {CV_DATA.contact.languages}
            </div>
            <div>
              <em>{language === 'pt' ? 'Referências profissionais disponíveis sob solicitação.' : 'Professional references available upon request.'}</em>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
