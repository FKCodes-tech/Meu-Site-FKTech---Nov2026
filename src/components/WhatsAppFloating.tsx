import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { Language } from '../types';

interface WhatsAppFloatingProps {
  language: Language;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Automatically show the prompt balloon after 2 seconds to capture visitor attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const quickOptions = [
    {
      titlePt: 'Suporte Técnico de TI',
      titleEn: 'IT Support Inquiry',
      descPt: 'Falha em computadores, hardware ou sistemas',
      descEn: 'Computer, hardware or system issues',
      message: 'Olá Felizardo, preciso de suporte técnico de TI para a minha empresa/computador.',
    },
    {
      titlePt: 'Redes & Infraestrutura',
      titleEn: 'Networks & Infrastructure',
      descPt: 'Wi-Fi corporativo, cablagem e servidores',
      descEn: 'Corporate Wi-Fi, cabling & servers',
      message: 'Olá Felizardo, gostaria de solicitar um diagnóstico ou instalação de rede e infraestrutura.',
    },
    {
      titlePt: 'Orçamento FrankTech',
      titleEn: 'FrankTech Digital Quote',
      descPt: 'Websites, flyers ou identidade digital',
      descEn: 'Websites, flyers or digital branding',
      message: 'Olá Felizardo, tenho interesse nos serviços digitais da FrankTech e gostaria de um orçamento.',
    },
  ];

  const handleSendCustom = (customText: string) => {
    const text = encodeURIComponent(customText);
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end max-w-[calc(100vw-2rem)]">
      
      {/* 1. Animated Speech Balloon / Callout Badge (Responsive sizing) */}
      {!isOpen && showTooltip && (
        <div className="mb-2.5 w-[calc(100vw-2.5rem)] sm:w-auto max-w-xs animate-float-badge flex items-start gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-slate-900/95 border border-emerald-500/40 text-white shadow-2xl backdrop-blur-md">
          <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer flex-1 text-left"
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                {language === 'pt' ? 'Disponível Online' : 'Available Online'}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-200 leading-snug hover:text-white transition-colors">
              {language === 'pt'
                ? 'Olá! Precisa de suporte de TI ou orçamento? Fale agora no WhatsApp.'
                : 'Hi! Need IT support or a quote? Chat now on WhatsApp.'}
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1 transition-colors"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 2. Interactive Quick Chat Popover (100% responsive width) */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-4 sm:p-5 text-slate-200 animate-in fade-in slide-in-from-bottom-3 duration-150">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shrink-0">
                <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Felizardo Franko</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{language === 'pt' ? 'Online · Pemba, Moçambique' : 'Online · Pemba, Mozambique'}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-3">
            {language === 'pt'
              ? 'Como posso ajudar hoje? Escolha um assunto para mensagem rápida:'
              : 'How can I assist today? Pick a topic for a quick WhatsApp text:'}
          </p>

          {/* Quick subject cards */}
          <div className="space-y-2 mb-4 max-h-[45vh] overflow-y-auto pr-0.5">
            {quickOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendCustom(opt.message)}
                className="w-full text-left p-2.5 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800/80 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div className="pr-2">
                  <p className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {language === 'pt' ? opt.titlePt : opt.titleEn}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    {language === 'pt' ? opt.descPt : opt.descEn}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0" />
              </button>
            ))}
          </div>

          {/* Direct CTA */}
          <button
            onClick={() => handleSendCustom('Olá Felizardo, estou no seu site e gostaria de conversar directamente sobre suporte de TI.')}
            className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-98"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'Conversar directamente no WhatsApp' : 'Chat directly on WhatsApp'}</span>
          </button>
        </div>
      )}

      {/* 3. Main Floating Action Button */}
      <div className="relative group">
        
        {/* Expanding glowing radar ping rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-60 pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-md pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/80 transition-all duration-300 hover:scale-105 active:scale-95 animate-whatsapp-pulse"
          aria-label="Abrir WhatsApp Directo"
          title="Fale comigo no WhatsApp (+258 84 200 1781)"
        >
          {/* Animated gently shaking icon */}
          <div className="animate-gentle-shake shrink-0">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-none" />
          </div>

          <span className="text-xs sm:text-sm tracking-tight whitespace-nowrap font-extrabold drop-shadow-sm">
            {language === 'pt' ? 'WhatsApp Directo' : 'WhatsApp Chat'}
          </span>

          {/* Little green active dot */}
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-full w-full bg-white" />
          </span>
        </button>
      </div>

    </div>
  );
};
