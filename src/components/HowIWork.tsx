import React from 'react';
import { MessageCircle, FileSearch, Wrench } from 'lucide-react';
import { Language } from '../types';

interface HowIWorkProps {
  language: Language;
}

export const HowIWork: React.FC<HowIWorkProps> = ({ language }) => {
  const steps = [
    {
      number: '01',
      title: language === 'pt' ? 'Contacto pelo WhatsApp' : 'Contact via WhatsApp',
      desc: language === 'pt'
        ? 'Envia uma mensagem breve a descrever o problema informático, a necessidade da rede ou o serviço pretendido.'
        : 'Send a quick message explaining your computer issue, network requirement, or requested service.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: language === 'pt' ? 'Diagnóstico e proposta' : 'Diagnosis & Proposal',
      desc: language === 'pt'
        ? 'Analiso a situação, presencialmente em Pemba ou à distância, e apresento uma solução clara com o prazo estimado.'
        : 'I evaluate the situation on-site in Pemba or remotely, and present a clear plan with an estimated timeline.',
      icon: FileSearch,
    },
    {
      number: '03',
      title: language === 'pt' ? 'Execução e acompanhamento' : 'Execution & Follow-up',
      desc: language === 'pt'
        ? 'Efectuo a intervenção técnica, os testes de funcionamento e fico disponível para tirar dúvidas e assegurar estabilidade.'
        : 'I carry out the technical work, test the setup, and remain available to ensure steady operation.',
      icon: Wrench,
    },
  ];

  return (
    <section id="como-trabalho" className="py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            {language === 'pt' ? 'Processo Simples & Transparente' : 'Simple & Clear Process'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {language === 'pt' ? 'Como trabalho' : 'How I Work'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'pt'
              ? 'Uma abordagem directa e prática, sem burocracias desnecessárias, focada em resolver o problema do seu escritório ou negócio.'
              : 'A direct and practical approach focused on solving issues efficiently for your office or business.'}
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                    <span className="font-mono text-sm font-bold text-cyan-400">
                      Passo {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
