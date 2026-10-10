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
        'Você informa os dados do veículo pelo formulário ou WhatsApp. Nossa equipe consulta a disponibilidade e, caso exista uma unidade compatível, apresenta as informações e condições disponíveis.',
    },
    {
      question: 'Quais dados preciso informar?',
      answer:
        'Preferencialmente marca, modelo, ano, motorização e, caso possua, código ou identificação do motor.',
    },
    {
      question: 'A disponibilidade é garantida?',
      answer:
        'Não. O estoque pode mudar e a disponibilidade deve ser confirmada no momento do atendimento.',
    },
    {
      question: 'Como recebo as informações do motor?',
      answer:
        'Após a consulta, nossa equipe apresenta as informações disponíveis sobre a unidade encontrada antes da conclusão da negociação.',
    },
    {
      question: 'Qual é a condição do motor?',
      answer:
        'A RCR AUTO SHOP comercializa exclusivamente motores usados, com procedência, nota fiscal e garantia. As características específicas da unidade disponível são informadas pela equipe durante o atendimento.',
    },
    {
      question: 'Como funciona orçamento e entrega?',
      answer:
        'Valores, condições comerciais e possibilidade de envio são informados pela equipe após a consulta do veículo e da unidade disponível.',
    },
    {
      question: 'Posso retirar no endereço da empresa?',
      answer:
        'Nosso endereço em São Caetano do Sul é cadastral. Consulte a equipe antes de se deslocar para verificar se há possibilidade de atendimento presencial ou retirada da sua unidade.',
    },
    {
      question: 'O motor possui garantia?',
      answer:
        'Sim, todos os motores comercializados possuem garantia e nota fiscal, respeitando os direitos legais do consumidor. Prazo, cobertura e condições aplicáveis à unidade específica serão informados pela equipe antes da compra.',
    },
    {
      question: 'Vocês possuem todos os motores disponíveis?',
      answer:
        'Não necessariamente. O estoque é dinâmico e a disponibilidade é verificada conforme os dados do veículo e o momento da consulta.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          {/* Header */}
          <div className="text-left">
            <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Perguntas Frequentes
            </h2>
            <p className="mt-2 text-base text-neutral-600">
              Tire suas dúvidas sobre consulta, motores usados, procedência, garantia e condições de atendimento.
            </p>
          </div>

          <SectionImage image="engine" caption="Solicite fotos e detalhes da unidade disponível no atendimento." />
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
