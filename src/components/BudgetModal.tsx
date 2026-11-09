import React, { useState, useEffect } from 'react';
import { X, Calculator, MessageCircle, Check } from 'lucide-react';
import { PERSONAL_INFO, SERVICES, PAYMENT_METHODS } from '../data/content';
import { Language } from '../types';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialServiceId?: string;
}

export const BudgetModal: React.FC<BudgetModalProps> = ({
  isOpen,
  onClose,
  language,
  initialServiceId,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || 'it-infrastructure'
  );
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const serviceTitle = language === 'pt' ? currentService.title : currentService.titleEn;
  const deliverables = language === 'pt' ? currentService.deliverables : currentService.deliverablesEn;

  const handleSendQuoteToWhatsApp = () => {
    const text = encodeURIComponent(
      `*Pedido de Orçamento – Fk Tech*\n` +
      `*Cliente:* ${clientName.trim() || 'Não especificado'}\n` +
      `*Contacto:* ${clientContact.trim() || 'Não especificado'}\n` +
      `*Serviço Escolhido:* ${serviceTitle}\n` +
      `*Urgência:* ${urgency === 'urgent' ? 'Urgente (Prioridade)' : 'Padrão'}\n` +
      (notes.trim() ? `*Observações:* ${notes.trim()}\n` : '') +
      `\nEnviado através do site Fk Tech.`
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-3 sm:my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              {language === 'pt' ? 'Pedir Proposta / Orçamento' : 'Request Proposal / Quote'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar orçamento"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 overflow-y-auto flex-1">
          <p className="text-xs sm:text-sm text-slate-300">
            {language === 'pt'
              ? 'Seleccione o serviço pretendido para receber uma proposta técnica detalhada sem compromisso:'
              : 'Select your preferred service to receive a comprehensive technical proposal with no obligation:'}
          </p>

          {/* Unified Service Selector (Group A & Group B) */}
          <div className="space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              {language === 'pt' ? 'Escolha o serviço:' : 'Choose a service:'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
              {SERVICES.map((srv) => {
                const isSelected = selectedServiceId === srv.id;
                const title = language === 'pt' ? srv.title : srv.titleEn;
                const timeline = language === 'pt' ? srv.typicalTimeline : srv.typicalTimelineEn;

                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`text-left p-3 rounded-xl border transition-all text-xs ${
                      isSelected
                        ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-sm ring-1 ring-cyan-500/30'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold line-clamp-1">{title}</span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      {srv.group === 'it-support'
                        ? (language === 'pt' ? 'Suporte TI e Redes' : 'IT Support')
                        : (timeline || (language === 'pt' ? 'Serviços Digitais' : 'Digital Services'))}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Service Deliverables Preview */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-800/80">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
              {language === 'pt' ? 'Entregáveis previstos neste serviço:' : 'Included deliverables:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
              {deliverables.slice(0, 4).map((d, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span className="leading-snug">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label
                htmlFor="budget-client-name"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
              >
                {language === 'pt' ? 'O Seu Nome / Empresa' : 'Your Name / Business'}
              </label>
              <input
                id="budget-client-name"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={language === 'pt' ? 'ex.: Maria Santos' : 'e.g. Maria Santos'}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white placeholder-slate-500 focus:outline-none min-h-[44px]"
              />
            </div>

            <div>
              <label
                htmlFor="budget-client-contact"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
              >
                {language === 'pt' ? 'WhatsApp ou Telefone' : 'WhatsApp or Phone'}
              </label>
              <input
                id="budget-client-contact"
                type="text"
                value={clientContact}
                onChange={(e) => setClientContact(e.target.value)}
                placeholder="+258 84... ou +258 86..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white placeholder-slate-500 focus:outline-none font-mono min-h-[44px]"
              />
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              {language === 'pt' ? 'Urgência do Pedido' : 'Project Urgency'}
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setUrgency('normal')}
                className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors min-h-[44px] ${
                  urgency === 'normal'
                    ? 'bg-slate-800 border-cyan-500 text-cyan-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {language === 'pt' ? 'Padrão' : 'Standard'}
              </button>
              <button
                type="button"
                onClick={() => setUrgency('urgent')}
                className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors min-h-[44px] ${
                  urgency === 'urgent'
                    ? 'bg-slate-800 border-amber-500 text-amber-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {language === 'pt' ? 'Urgente / Prioridade' : 'Urgent Priority'}
              </button>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="budget-notes"
              className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
            >
              {language === 'pt' ? 'Observações adicionais (opcional)' : 'Additional details (optional)'}
            </label>
            <textarea
              id="budget-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                language === 'pt'
                  ? 'Ex.: número de computadores, falha específica ou requisitos...'
                  : 'E.g. number of computers, specific malfunction or requirements...'
              }
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white placeholder-slate-500 focus:outline-none resize-none"
            />
          </div>

          {/* Formas de pagamento (mostrado apenas se PAYMENT_METHODS estiver preenchido per 6.2) */}
          {PAYMENT_METHODS && PAYMENT_METHODS.length > 0 && (
            <div className="text-[11px] text-slate-400 pt-1">
              <span className="font-semibold text-slate-300">
                {language === 'pt' ? 'Formas de pagamento aceites: ' : 'Accepted payment methods: '}
              </span>
              <span className="text-cyan-300 font-mono">{PAYMENT_METHODS.join(', ')}</span>
            </div>
          )}

          {/* Action CTA */}
          <button
            type="button"
            onClick={handleSendQuoteToWhatsApp}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-[0.99] min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 stroke-none" />
            <span>{language === 'pt' ? 'Enviar Pedido de Orçamento no WhatsApp' : 'Send Quote Request to WhatsApp'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
