import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowIWork } from './components/HowIWork';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Faq } from './components/Faq';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { CvModal } from './components/CvModal';
import { BudgetModal } from './components/BudgetModal';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [budgetInitialServiceId, setBudgetInitialServiceId] = useState<string | undefined>();
  const [contactPrefilledSubject, setContactPrefilledSubject] = useState<string | undefined>();

  const handleOpenContact = (subject?: string) => {
    setContactPrefilledSubject(subject);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBudget = (serviceId?: string) => {
    setBudgetInitialServiceId(serviceId);
    setIsBudgetModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden w-full relative">
      {/* 1. Header & Navigation (Fixed) */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        {/* 2. Hero Section: 1 Botão principal + 2 acções secundárias discretas */}
        <Hero
          language={language}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenBudgetModal={() => handleOpenBudget()}
        />

        {/* 3. Serviços: Lista única dividida em Grupo A (Suporte/Redes) e Grupo B (FrankTech) */}
        <Services
          language={language}
          onOpenBudgetModal={handleOpenBudget}
        />

        {/* 4. Como Trabalho (3 passos factuais e transparentes) */}
        <HowIWork
          language={language}
        />

        {/* 5. Sobre Mim e Competências: Bio resumida, foto e grelha de competências */}
        <About
          language={language}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* 6. Percurso Profissional */}
        <Timeline
          language={language}
        />

        {/* 7. Perguntas Frequentes (FAQ) com acordeão acessível */}
        <Faq
          language={language}
        />

        {/* 8. Trabalhos Realizados & Depoimentos (Renderiza apenas se houver itens em content.ts) */}
        <Portfolio
          language={language}
        />

        {/* 9. Contacto Directo & Formulário */}
        <Contact
          language={language}
          prefilledSubject={contactPrefilledSubject}
        />
      </main>

      {/* 10. Rodapé */}
      <Footer
        language={language}
      />

      {/* 11. Botão Flutuante de WhatsApp Directo */}
      <WhatsAppFloating
        language={language}
      />

      {/* 12. Modal de Curriculum Vitae (com suporte a impressão e PDF) */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        language={language}
      />

      {/* 13. Modal de Pedido de Proposta / Orçamento */}
      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
        language={language}
        initialServiceId={budgetInitialServiceId}
      />
    </div>
  );
}
