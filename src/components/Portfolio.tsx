import React from 'react';
import { ExternalLink, Quote, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS, TESTIMONIALS } from '../data/content';
import { Language } from '../types';

interface PortfolioProps {
  language: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({ language }) => {
  const hasPortfolio = PORTFOLIO_ITEMS && PORTFOLIO_ITEMS.length > 0;
  const hasTestimonials = TESTIMONIALS && TESTIMONIALS.length > 0;

  // 5.2 Se ambos estiverem vazios, não renderiza nada
  if (!hasPortfolio && !hasTestimonials) {
    return null;
  }

  return (
    <section id="trabalhos" className="py-16 sm:py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5.2 Grelha de trabalhos realizados (apenas se houver itens) */}
        {hasPortfolio && (
          <div className="mb-16">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'Trabalhos Realizados' : 'Featured Work'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
                {language === 'pt'
                  ? 'Projectos e soluções entregues a clientes'
                  : 'Projects and delivered client solutions'}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {language === 'pt'
                  ? 'Trabalhos executados em infraestruturas de TI, redes e soluções digitais com autorização de apresentação.'
                  : 'Delivered IT infrastructure, networking, and digital solutions with verified client authorization.'}
              </p>
            </div>

            {/* Grelha responsiva: 1 coluna em mobile (360px), 2 em tablet, 3 em desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORTFOLIO_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
                >
                  <div>
                    {item.image && (
                      <div className="aspect-video w-full overflow-hidden bg-slate-950">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5 sm:p-6">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-semibold">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {item.link && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>{language === 'pt' ? 'Ver projecto' : 'View project'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5.4 Bloco opcional de depoimentos com autorização real (apenas se houver itens) */}
        {hasTestimonials && (
          <div className="pt-8 border-t border-slate-800/80">
            <div className="max-w-2xl mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {language === 'pt' ? 'Depoimentos de Clientes & Parceiros' : 'Testimonials & Endorsements'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {language === 'pt'
                  ? 'Avaliações reais de clientes acompanhados por Felizardo Franko.'
                  : 'Genuine reviews from clients assisted by Felizardo Franko.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
                >
                  <Quote className="w-6 h-6 text-cyan-400/50 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 italic mb-4 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400">
                      {t.role} · {t.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
