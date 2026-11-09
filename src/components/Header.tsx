import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Globe } from 'lucide-react';
import { PERSONAL_INFO, PORTFOLIO_ITEMS } from '../data/content';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenContact: (subject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3.3 Âncoras do menu: Serviços, Como trabalho, Sobre mim, Percurso, FAQ, Contacto (+ Trabalhos apenas se houver itens)
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

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      language === 'pt'
        ? 'Olá Felizardo! Encontrei o seu site Fk Tech e gostaria de conversar sobre suporte de TI e infraestrutura.'
        : 'Hello Felizardo! I found your Fk Tech website and would like to discuss IT support and infrastructure.'
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-slate-950/70 backdrop-blur-sm border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Wordmark logo */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 min-h-[44px]"
        >
          <span className="text-cyan-400 font-extrabold tracking-tighter">FK</span>
          <span>TECH</span>
        </a>

        {/* Clean single-line desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors py-1 whitespace-nowrap shrink-0 min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action button + Language switch */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
            title={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            aria-label="Alternar idioma"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase font-mono">{language === 'pt' ? 'PT' : 'EN'}</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all whitespace-nowrap shrink-0 shadow-md shadow-cyan-500/20 active:scale-95 min-h-[44px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950" />
            </span>
            <MessageCircle className="w-4 h-4 fill-slate-950 stroke-none" />
            <span>{language === 'pt' ? 'Fale comigo' : 'Contact me'}</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppDirect();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 stroke-none" />
                <span>{language === 'pt' ? 'Fale comigo no WhatsApp' : 'Chat on WhatsApp'}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-lg transition-colors min-h-[44px]"
              >
                {language === 'pt' ? 'Enviar Mensagem' : 'Send Message'}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
