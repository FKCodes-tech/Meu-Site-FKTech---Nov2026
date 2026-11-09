import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, PAYMENT_METHODS, PERSONAL_INFO } from '../data/content';
import { Language, FaqItem } from '../types';

interface FaqProps {
  language: Language;
}

export const Faq: React.FC<FaqProps> = ({ language }) => {
  const [openId, setOpenId] = useState<string | null>('atendimento-presencial');

  // Build complete FAQ list, conditionally appending payment methods if configured
  const fullFaqList: FaqItem[] = [...FAQ_ITEMS];

  if (PAYMENT_METHODS.length > 0) {
    fullFaqList.push({
      id: 'formas-pagamento',
      questionPt: 'Que formas de pagamento aceita?',
      questionEn: 'What payment methods do you accept?',
      answerPt: 'Aceito M-Pesa e e-Mola. Depois de aceitar a proposta, envio-lhe os dados de pagamento pelo WhatsApp.',
      answerEn: 'I accept M-Pesa and e-Mola. Once you accept the proposal, I will send you the payment details via WhatsApp.'
    });
  }

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleWhatsAppHelp = () => {
    const text = encodeURIComponent(
      language === 'pt'
        ? 'Olá Felizardo Franko! Estive a ler as perguntas frequentes no seu site e tenho uma dúvida adicional.'
        : 'Hello Felizardo Franko! I was reading the FAQ on your website and have an additional question.'
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Structured Data JSON-LD for FAQPage (PT)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fullFaqList.map((item) => ({
      '@type': 'Question',
      name: item.questionPt,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answerPt,
      },
    })),
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80 relative">
      {/* FAQ Schema.org injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            {language === 'pt'
              ? 'Respostas directas às suas dúvidas mais comuns'
              : 'Direct answers to your common questions'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'pt'
              ? 'Tudo o que precisa de saber sobre o atendimento presencial em Pemba, prazos, orçamentos e emergências técnicas.'
              : 'Everything you need to know about on-site support in Pemba, timelines, quotes, and IT emergencies.'}
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {fullFaqList.map((item) => {
            const isOpen = openId === item.id;
            const question = language === 'pt' ? item.questionPt : item.questionEn;
            const answer = language === 'pt' ? item.answerPt : item.answerEn;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-h-[44px]"
                  >
                    <span>{question}</span>
                    <span
                      className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-cyan-400 bg-cyan-950/80' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3"
                  >
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 4.5 Bottom Action: "Ainda tem dúvidas? Fale no WhatsApp" */}
        <div className="mt-10 sm:mt-12 text-center pt-6 border-t border-slate-800/80">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            {language === 'pt'
              ? 'Não encontrou a resposta que procurava para a sua necessidade técnica?'
              : 'Did not find the answer you were looking for regarding your IT challenge?'}
          </p>
          <button
            type="button"
            onClick={handleWhatsAppHelp}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-[0.98] min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 stroke-none" />
            <span>{language === 'pt' ? 'Ainda tem dúvidas? Fale no WhatsApp' : 'Still have questions? Chat on WhatsApp'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
