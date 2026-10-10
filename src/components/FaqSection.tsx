import { SectionImage } from './SectionImage';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Como funciona a consulta de motor?',
      answer:
        'Você informa seu nome, seleciona o motor e clica em Consultar no WhatsApp. O aplicativo abre com a mensagem preenchida para você enviar. Nossa equipe confirma as opções disponíveis.',
    },
    {
      question: 'Quais dados eu preciso informar no formulário?',
      answer:
        'Informe seu nome e selecione o motor desejado. O modelo e o ano do veículo são opcionais no formulário e ajudam a conferir a compatibilidade durante o atendimento.',
    },
    {
      question: 'Como recebo as fotos do motor?',
      answer:
        'Quando houver uma opção disponível para o seu veículo, nossa equipe envia fotos e os detalhes da peça pelo WhatsApp para você avaliar.',
    },
    {
      question: 'Qual é a condição do motor?',
      answer:
        'A condição e os detalhes do motor serão informados na proposta enviada pela equipe.',
    },
    {
      question: 'Como funciona o orçamento e a entrega?',
      answer:
        'O valor da peça e as opções de envio para sua região são informados no atendimento antes de você tomar qualquer decisão.',
    },
    {
      question: 'Posso retirar no endereço da empresa?',
      answer:
        'Nosso endereço é cadastral. Consulte a equipe antes de se deslocar para atendimento ou retirada.',
    },
    {
      question: 'O motor possui garantia?',
      answer:
        'Sim, todas as operações respeitam as garantias legais previstas no Código de Defesa do Consumidor (CDC). As condições e detalhes são informados na proposta.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-base text-neutral-600">
            Tire suas dúvidas sobre como consultar a disponibilidade do motor para seu veículo.
          </p>
        </div>

          <SectionImage image="engine" caption="Solicite fotos reais quando houver uma opção disponível." />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-neutral-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-600' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
