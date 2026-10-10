import { SectionImage } from './SectionImage';
import React from 'react';
import { Shield, Cpu, Truck, FileSignature } from 'lucide-react';

export const CommercialOrientation: React.FC = () => {
  const cards = [
    {
      title: 'Compatibilidade com seu Veículo',
      desc: 'Conferimos os dados do modelo, ano e versão para verificar se a opção disponível atende com exatidão à necessidade do seu carro.',
      icon: Cpu,
    },
    {
      title: 'Condição e Detalhes do Motor',
      desc: 'A condição e os detalhes do motor serão informados na proposta, com fotos reais do item quando houver disponibilidade.',
      icon: Shield,
    },
    {
      title: 'Orçamento e Envio',
      desc: 'O valor da peça e as opções de envio para o seu endereço são informados no atendimento antes de qualquer decisão.',
      icon: Truck,
    },
    {
      title: 'Atendimento e Direitos do Consumidor',
      desc: 'Todas as orientações respeitam os direitos previstos no Código de Defesa do Consumidor, com clareza em todas as etapas.',
      icon: FileSignature,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Section Header */}
          <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2">
            Informações Úteis
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Como conduzimos cada atendimento
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Nossa equipe atua para que você tenha todas as informações sobre o motor antes de concluir sua compra.
          </p>
        </div>

          <SectionImage image="shipping" caption="Consulte as condições de envio no atendimento." />
        </div>

        {/* Orientation Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-50 rounded-lg p-6 sm:p-7 border border-neutral-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-white border border-neutral-200 flex items-center justify-center text-orange-600 mb-5 shadow-xs">
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
