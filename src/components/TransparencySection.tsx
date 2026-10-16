import React from 'react';
import { CheckCircle, ShieldCheck, FileText, UserCheck } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  const cards = [
    {
      title: 'Disponibilidade confirmada',
      desc: 'A disponibilidade é verificada no momento da consulta de acordo com as informações do veículo.',
      icon: CheckCircle,
    },
    {
      title: 'Somente motores seminovos',
      desc: 'Comercializamos exclusivamente motores seminovos, com procedência e características informadas no atendimento.',
      icon: ShieldCheck,
    },
    {
      title: 'Nota fiscal e garantia',
      desc: 'Unidades fornecidas com nota fiscal e garantia. Prazo, cobertura e condições aplicáveis à unidade são informados pela equipe antes da compra.',
      icon: FileText,
    },
    {
      title: 'Atendimento humano',
      desc: 'O cliente pode esclarecer dúvidas diretamente com a equipe antes de finalizar a negociação.',
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2">
            Transparência na Consulta
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Informações claras antes da compra
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Antes da conclusão da negociação, o cliente recebe as informações disponíveis sobre a unidade consultada, condições comerciais e demais detalhes aplicáveis ao atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-orange-100/70 border border-orange-200 flex items-center justify-center text-orange-600 mb-5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {card.desc}
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
