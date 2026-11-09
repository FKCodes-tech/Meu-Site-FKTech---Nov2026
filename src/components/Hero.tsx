import React from 'react';
import { MessageCircle, FileText, MapPin, ShieldCheck, PhoneCall, Calculator } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onOpenCvModal: () => void;
  onOpenBudgetModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenCvModal, onOpenBudgetModal }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'pt'
        ? 'Olá Felizardo Franko! Gostaria de obter mais informações sobre os seus serviços de TI e infraestrutura.'
        : 'Hello Felizardo Franko! I would like to get more information about your IT support and infrastructure services.'
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Kicker Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="truncate">
                {language === 'pt'
                  ? 'Suporte de TI, redes e serviços digitais para empresas em Pemba'
                  : 'IT support, networks & digital services for businesses in Pemba'}
              </span>
            </div>

            {/* Location Sub-Kicker */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-3 sm:mb-4 tracking-wide">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
              <span>Pemba, Cabo Delgado, Moçambique</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Fk Tech</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 sm:mb-6">
              Felizardo Franko
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 mt-1.5 sm:mt-2 text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
                {language === 'pt' ? PERSONAL_INFO.titlePt : PERSONAL_INFO.titleEn}
              </span>
            </h1>

            {/* Value Proposition & Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6 sm:mb-8">
              {language === 'pt'
                ? 'Suporte técnico de Nível 1 e 2, infraestrutura de redes estruturadas, administração Windows Server e manutenção corporativa de hardware. Tecnologia confiável que resolve problemas reais e mantém o seu negócio sempre operacional.'
                : 'Level 1 & 2 IT support, structured network infrastructure, Windows Server administration, and corporate hardware maintenance. Reliable technology ensuring uninterrupted business operations.'}
            </p>

            {/* CTAs: 2. HERO: UM BOTÃO PRINCIPAL + AÇÕES SECUNDÁRIAS DISCRETAS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              {/* 2.1 Botão principal grande: "Falar no WhatsApp" */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 active:scale-[0.98] w-full sm:w-auto shrink-0 min-h-[44px]"
              >
                <span className="animate-gentle-shake inline-block shrink-0">
                  <MessageCircle className="w-5 h-5 fill-slate-950 stroke-none" />
                </span>
                <span>{language === 'pt' ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}</span>
                <span className="w-2 h-2 rounded-full bg-slate-950/70 animate-ping ml-1 shrink-0" />
              </button>

              {/* 2.2 Acções secundárias em estilo discreto (outline / link) */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOpenBudgetModal}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors min-h-[44px]"
                >
                  <Calculator className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{language === 'pt' ? 'Pedir orçamento' : 'Request quote'}</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white bg-slate-900/40 hover:bg-slate-900 border border-slate-800 rounded-xl transition-colors min-h-[44px]"
                >
                  <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{language === 'pt' ? 'Ver CV' : 'View CV'}</span>
                </button>
              </div>
            </div>

            {/* Direct Calls & Trust Signals (Only Primary Phone visible per 2.3) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80 pt-5 sm:pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{language === 'pt' ? 'Atendimento presencial em Pemba e suporte remoto' : 'On-site in Pemba & remote support'}</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-400">{language === 'pt' ? 'Ligue directo:' : 'Call:'}</span>
                <a
                  href={`tel:${PERSONAL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="text-cyan-400 hover:underline font-semibold whitespace-nowrap min-h-[44px] flex items-center"
                >
                  {PERSONAL_INFO.phonePrimary}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-lg" />
              
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-2 overflow-hidden shadow-2xl">
                
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800">
                  <img
                    src="/src/assets/images/portrait_felizardo_franko.webp"
                    alt="Felizardo Augusto José Franko – Técnico de Informática e Infraestrutura em Pemba"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    width={480}
                    height={480}
                  />
                  
                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* On-image status overlay */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 p-2.5 sm:p-3 bg-slate-950/90 backdrop-blur-md border border-slate-800/80 rounded-lg">
                    <p className="text-xs font-semibold text-white tracking-wide">Felizardo Franko</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                      {language === 'pt' ? 'Pemba · Suporte L1/L2 · Redes & Infraestrutura' : 'Pemba · L1/L2 Support · Networks & Infrastructure'}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-width 4-Column Factual Highlights Strip */}
        <div className="mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col p-4 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-cyan-500/30 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {language === 'pt' ? stat.title : stat.titleEn}
                </span>
                <span className="text-xs text-cyan-400/90 mt-1 leading-snug">
                  {language === 'pt' ? stat.desc : stat.descEn}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
