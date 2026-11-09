import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, PhoneCall, Phone, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, PAYMENT_METHODS } from '../data/content';
import { Language } from '../types';

interface ContactProps {
  language: Language;
  prefilledSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ language, prefilledSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: prefilledSubject || 'Suporte TI L1/L2',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects = [
    { id: 'Suporte TI L1/L2', labelPt: 'Suporte & Infraestrutura de TI', labelEn: 'IT Support & Infrastructure' },
    { id: 'Redes & Conectividade', labelPt: 'Redes Estruturadas & Wi-Fi Empresarial', labelEn: 'Structured Networks & Wi-Fi' },
    { id: 'FrankTech Serviços Digitais', labelPt: 'FrankTech Serviços Digitais', labelEn: 'FrankTech Digital Services' },
    { id: 'Apoio Administrativo & Dados', labelPt: 'Apoio Administrativo & Folhas de Cálculo', labelEn: 'Administrative Support & Data' },
    { id: 'Outro Assunto', labelPt: 'Outro Assunto / Proposta Geral', labelEn: 'Other Inquiry' },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = language === 'pt' ? 'Por favor insira o seu nome.' : 'Please enter your name.';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = language === 'pt' ? 'Insira o seu contacto (WhatsApp ou E-mail).' : 'Please enter your contact (WhatsApp or Email).';
    } else if (formData.contact.length < 5) {
      newErrors.contact = language === 'pt' ? 'Contacto muito curto.' : 'Contact info too short.';
    }
    if (!formData.message.trim()) {
      newErrors.message = language === 'pt' ? 'Por favor escreva a sua mensagem ou pedido.' : 'Please enter your message.';
    } else if (formData.message.length < 10) {
      newErrors.message = language === 'pt' ? 'Mensagem deve ter pelo menos 10 caracteres.' : 'Message must have at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `*Contacto via Site Fk Tech*\n` +
      `*Nome:* ${formData.name}\n` +
      `*Contacto:* ${formData.contact}\n` +
      `*Assunto:* ${formData.subject}\n` +
      `*Mensagem:* ${formData.message}`
    );
    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    window.open(getWhatsAppMessageUrl(), '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleOpenWhatsAppAgain = () => {
    window.open(getWhatsAppMessageUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      subject: 'Suporte TI L1/L2',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // Check if any real social links are configured
  const hasRealSocials = Object.values(PERSONAL_INFO.socials).some((link) => Boolean(link && link.trim()));

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-slate-900/90 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            {language === 'pt' ? 'Contacto Directo' : 'Get In Touch'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {language === 'pt'
              ? 'Vamos conversar sobre o seu próximo projecto ou desafio de TI'
              : 'Let’s discuss your upcoming IT challenge or technical project'}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {language === 'pt'
              ? 'Prontidão de resposta em Pemba e Cabo Delgado. Contacte directamente por chamada, WhatsApp ou preencha o formulário.'
              : 'Prompt response across Pemba and Cabo Delgado. Call directly, chat on WhatsApp, or complete the form below.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Contact Card: WhatsApp + Chamada */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-800/70 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {language === 'pt' ? 'Contacto Principal (WhatsApp & Voz)' : 'Primary Contact (WhatsApp & Voice)'}
                    </h3>
                    <span className="text-xs text-cyan-400 font-mono font-bold">
                      {PERSONAL_INFO.phonePrimary}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {language === 'pt'
                  ? 'Canal preferencial para atendimento técnico, apoio a servidores, redes e orçamentos da FrankTech.'
                  : 'Preferred channel for technical support, server & network support, and FrankTech quotes.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(
                    language === 'pt'
                      ? 'Olá Felizardo Franko! Contacto-o através do seu site Fk Tech para solicitar apoio de TI.'
                      : 'Hello Felizardo Franko! Reaching out via your Fk Tech site for IT support.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{language === 'pt' ? 'Ligar Agora' : 'Call Now'}</span>
                </a>
              </div>
            </div>

            {/* Alternative Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      {language === 'pt' ? 'Contacto Alternativo (Chamadas)' : 'Alternative Contact (Calls)'}
                    </h3>
                    <span className="text-xs text-slate-200 font-mono font-bold">
                      {PERSONAL_INFO.phoneAlt}
                    </span>
                  </div>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phoneAlt.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <PhoneCall className="w-3 h-3 text-cyan-400" />
                  <span>{language === 'pt' ? 'Ligar' : 'Call'}</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400">
                {language === 'pt'
                  ? 'Linha alternativa para assegurar contacto imediato quando estiver no terreno ou fora de cobertura de dados.'
                  : 'Alternative direct phone line for immediate connection during field visits.'}
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {language === 'pt' ? 'Correio Electrónico' : 'Email Address'}
                  </h3>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-cyan-400 hover:underline block mt-0.5 break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {language === 'pt' ? 'Para envio de termos de referência e propostas formais.' : 'For corporate proposals and official terms of reference.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {language === 'pt' ? 'Localização & Cobertura' : 'Location & Coverage'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-0.5 font-medium">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {language === 'pt' ? 'Atendimento presencial em Pemba e suporte remoto para todo Moçambique.' : 'On-site service in Pemba & remote support throughout Mozambique.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 6.1 Formas de pagamento (mostrado apenas se PAYMENT_METHODS tiver itens) */}
            {PAYMENT_METHODS && PAYMENT_METHODS.length > 0 && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                <span className="font-semibold text-slate-200">
                  {language === 'pt' ? 'Formas de pagamento: ' : 'Payment methods: '}
                </span>
                <span className="font-mono text-cyan-300">
                  {PAYMENT_METHODS.join(', ')}
                </span>
              </div>
            )}

            {/* Social Links: rendered only if non-empty */}
            {/* TODO: adicionar links reais de LinkedIn, Facebook e Instagram quando disponíveis */}
            {hasRealSocials && (
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {language === 'pt' ? 'Redes Profissionais:' : 'Professional Profiles:'}
                </span>
                <div className="flex items-center gap-3 font-semibold text-slate-300">
                  {PERSONAL_INFO.socials.linkedin && (
                    <a
                      href={PERSONAL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {PERSONAL_INFO.socials.facebook && (
                    <a
                      href={PERSONAL_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Facebook
                    </a>
                  )}
                  {PERSONAL_INFO.socials.instagram && (
                    <a
                      href={PERSONAL_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {language === 'pt' ? 'A abrir o WhatsApp para enviar a sua mensagem...' : 'Opening WhatsApp to send your message...'}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {language === 'pt'
                      ? 'Se a aplicação do WhatsApp não abriu automaticamente, clique no botão abaixo para prosseguir com a conversa directa com o Felizardo Franko.'
                      : 'If WhatsApp did not open automatically, click the button below to continue your direct conversation with Felizardo Franko.'}
                  </p>
                  
                  {/* WhatsApp reopen and reset controls (Section 2.2) */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleOpenWhatsAppAgain}
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950 stroke-none" />
                      <span>{language === 'pt' ? 'Abrir WhatsApp novamente' : 'Open WhatsApp again'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{language === 'pt' ? 'Enviar outra mensagem' : 'Send another inquiry'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {language === 'pt' ? 'Envie uma Mensagem' : 'Send an Inquiry'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {language === 'pt'
                        ? 'Preencha os campos abaixo. Responderei o mais brevemente possível.'
                        : 'Complete the form below. I will reply as promptly as possible.'}
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      {language === 'pt' ? 'O Seu Nome Completo' : 'Your Full Name'} *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'pt' ? 'ex.: Maria Santos' : 'e.g. Maria Santos'}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border ${
                        errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white placeholder-slate-500 focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-xs text-rose-400 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Contact field */}
                  <div>
                    <label
                      htmlFor="contact-channel"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      {language === 'pt' ? 'Contacto (WhatsApp ou E-mail)' : 'Contact (WhatsApp or Email)'} *
                    </label>
                    <input
                      id="contact-channel"
                      name="contact"
                      type="text"
                      autoComplete="tel"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder={language === 'pt' ? 'ex.: +258 84 200 1781 ou email@exemplo.com' : 'e.g. +258 84 200 1781 or email@domain.com'}
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={errors.contact ? 'contact-channel-error' : undefined}
                      className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border ${
                        errors.contact ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white placeholder-slate-500 focus:outline-none transition-colors font-mono`}
                    />
                    {errors.contact && (
                      <p id="contact-channel-error" className="text-xs text-rose-400 mt-1">
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  {/* Subject selector */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      {language === 'pt' ? 'Assunto / Área de Interesse' : 'Subject / Area of Interest'}
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white focus:outline-none transition-colors"
                    >
                      {subjects.map((s) => (
                        <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                          {language === 'pt' ? s.labelPt : s.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      {language === 'pt' ? 'Mensagem ou Descrição da Necessidade' : 'Message or Project Description'} *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'pt'
                          ? 'Descreva resumidamente o tipo de suporte, número de computadores, falha de rede ou serviço FrankTech pretendido...'
                          : 'Briefly describe your support requirement, number of computers, network issue, or FrankTech project...'
                      }
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-950 border ${
                        errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white placeholder-slate-500 focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-xs text-rose-400 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'pt' ? 'Enviar Pedido de Contacto' : 'Submit Contact Request'}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    {language === 'pt'
                      ? 'Ao enviar, o WhatsApp abrirá com a mensagem pré-formatada para contacto imediato.'
                      : 'Upon submission, WhatsApp will launch with pre-formatted details for direct chat.'}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
