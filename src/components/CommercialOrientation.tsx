import { SectionImage } from './SectionImage';
import React from 'react';
import { Shield, Cpu, Truck, FileSignature } from 'lucide-react';

export const CommercialOrientation: React.FC = () => {
  const cards = [
    {
      title: 'Compatibilidade com seu veículo',
      desc: 'Utilizamos os dados informados para verificar a aplicação correspondente.',
      icon: Cpu,
    },
    {
      title: 'Condição e detalhes do motor',
      desc: 'As informações da unidade disponível são apresentadas durante o atendimento.',
      icon: Shield,
    },
    {
      title: 'Orçamento e envio',
      desc: 'As condições comerciais e opções de envio aplicáveis são apresentadas antes da conclusão da negociação.',
      icon: Truck,
    },
    {
      title: 'Atendimento e direitos do consumidor',
      desc: 'O atendimento respeita as diretrizes do Código de Defesa do Consumidor, com esclarecimento prévio de todas as condições da negociação.',
      icon: FileSignature,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2">
              Atendimento Técnico
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Como conduzimos cada atendimento
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Nossa equipe reúne as informações do veículo, consulta a disponibilidade e apresenta as condições da unidade encontrada antes da conclusão da compra.
            </p>
          </div>

          <SectionImage image="shipping" caption="Consulte as condições de envio e entrega no atendimento." />
        </div>

        {/* Orientation Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 sm:p-7 border border-neutral-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-5 shadow-xs">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
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
