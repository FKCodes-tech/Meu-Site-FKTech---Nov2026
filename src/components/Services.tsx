import React from 'react';
import {
  Server,
  Network,
  FileSpreadsheet,
  ShieldCheck,
  Globe,
  Clock,
  Palette,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { Language, ServiceItem } from '../types';

interface ServicesProps {
  language: Language;
  onOpenBudgetModal: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ language, onOpenBudgetModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const groupAServices = SERVICES.filter((s) => s.group === 'it-support');
  const groupBServices = SERVICES.filter((s) => s.group === 'franktech');

  const renderServiceCard = (service: ServiceItem, isFrankTech: boolean) => {
    const title = language === 'pt' ? service.title : service.titleEn;
    const description = language === 'pt' ? service.description : service.descriptionEn;
    const deliverables = language === 'pt' ? service.deliverables : service.deliverablesEn;
    const timeline = language === 'pt' ? service.typicalTimeline : service.typicalTimelineEn;

    return (
      <div
        key={service.id}
        className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors shadow-lg shadow-black/20"
      >
        <div>
          {/* Header & Icon */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
              {getIcon(service.icon)}
            </div>

            {/* Typical timeline shown ONLY for FrankTech services */}
            {isFrankTech && timeline && (
              <span className="text-[11px] font-mono font-medium text-cyan-400 bg-cyan-950/70 border border-cyan-800/40 px-2.5 py-0.5 rounded-full shrink-0">
                {timeline}
              </span>
            )}
          </div>

          {/* Title & 1-2 line description */}
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {description}
          </p>

          {/* Up to 4 key points */}
          <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800/80">
            {deliverables.slice(0, 4).map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA: Button "Pedir orçamento" opening BudgetModal with preselected service */}
        <div className="pt-4 border-t border-slate-800/80">
          <button
            type="button"
            onClick={() => onOpenBudgetModal(service.id)}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-sm active:scale-[0.99] min-h-[44px]"
          >
            <span>{language === 'pt' ? 'Pedir orçamento' : 'Request quote'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Main Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            {language === 'pt' ? 'Serviços Especializados' : 'Services & Solutions'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            {language === 'pt'
              ? 'Tecnologia que funciona e apoio técnico contínuo'
              : 'Dependable technology and ongoing technical support'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'pt'
              ? 'Estruturação de redes, suporte a computadores e servidores corporativos, combinados com soluções digitais ágeis para pequenos negócios em Pemba e Cabo Delgado.'
              : 'Structured networking, corporate computer and server maintenance, coupled with agile digital solutions for businesses in Pemba and Cabo Delgado.'}
          </p>
        </div>

        {/* 1.1 GRUPO A: Suporte de TI e Redes */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-2.5 mb-6 pb-2 border-b border-slate-800">
            <Server className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {language === 'pt' ? 'Grupo A: Suporte de TI e Redes' : 'Group A: IT Support & Networks'}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              ({groupAServices.length} {language === 'pt' ? 'serviços' : 'services'})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {groupAServices.map((srv) => renderServiceCard(srv, false))}
          </div>
        </div>

        {/* 1.1 GRUPO B: Serviços Digitais (FrankTech) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {language === 'pt' ? 'Grupo B: Serviços Digitais (FrankTech)' : 'Group B: Digital Services (FrankTech)'}
              </h3>
              <span className="text-xs font-mono text-slate-400">
                ({groupBServices.length} {language === 'pt' ? 'serviços' : 'services'})
              </span>
            </div>
          </div>

          {/* 1.4 Disclaimer obrigatório */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6 text-xs text-slate-400">
            <p>
              {language === 'pt'
                ? 'A FrankTech Serviços Digitais é um serviço independente, prestado em nome próprio por Felizardo Franko.'
                : 'FrankTech Serviços Digitais is an independent service provided in his own name by Felizardo Franko.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {groupBServices.map((srv) => renderServiceCard(srv, true))}
          </div>
        </div>

      </div>
    </section>
  );
};
