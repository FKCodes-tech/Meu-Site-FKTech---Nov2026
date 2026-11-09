import React from 'react';
import { ArrowUp, MapPin, Mail, MessageCircle, Phone } from 'lucide-react';
import { PERSONAL_INFO, PORTFOLIO_ITEMS } from '../data/content';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#servicos', label: language === 'pt' ? 'Serviços' : 'Services' },
    { href: '#como-trabalho', label: language === 'pt' ? 'Como trabalho' : 'How I work' },
    { href: '#sobre', label: language === 'pt' ? 'Sobre mim' : 'About me' },
    { href: '#percurso', label: language === 'pt' ? 'Percurso' : 'Journey' },
    { href: '#faq', label: 'FAQ' },
    ...(PORTFOLIO_ITEMS && PORTFOLIO_ITEMS.length > 0
      ? [{ href: '#trabalhos', label: language === 'pt' ? 'Trabalhos' : 'Portfolio' }]
      : []),
    { href: '#contacto', label: language === 'pt' ? 'Contacto' : 'Contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-2 min-h-[44px]"
            >
              <span className="text-cyan-400 font-extrabold tracking-tighter">FK</span>
              <span>TECH</span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {language === 'pt'
                ? 'Tecnologia que funciona, formação que transforma e serviços digitais pensados para impulsionar negócios em Pemba e Cabo Delgado.'
                : 'Reliable technology, empowering training, and digital services tailored for businesses across Pemba and Cabo Delgado.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Pemba, Cabo Delgado, Moçambique</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              {language === 'pt' ? 'Navegação' : 'Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors py-1.5 truncate min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct channels & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
                {language === 'pt' ? 'Contactos Directos' : 'Direct Channels'}
              </h4>
              <div className="space-y-2.5 text-xs">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-mono min-h-[44px]"
                  title="WhatsApp e Chamadas"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>WhatsApp: {PERSONAL_INFO.phonePrimary}</span>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phoneAlt.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-mono min-h-[44px]"
                  title="Número Alternativo para Chamadas"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Alt: {PERSONAL_INFO.phoneAlt}</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors truncate font-mono min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-lg transition-colors min-h-[44px]"
                aria-label="Voltar ao topo da página"
              >
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'pt' ? 'Voltar ao topo' : 'Back to top'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Felizardo Augusto José Franko (Fk Tech). Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Desenvolvido com rigor técnico em Pemba, Moçambique</span>
            <span aria-hidden="true">🇲🇿</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
