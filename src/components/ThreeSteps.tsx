import { SectionImage } from './SectionImage';
import React from 'react';
import { Search, Image, Calculator, ArrowRight } from 'lucide-react';

interface ThreeStepsProps {
  onScrollToForm: () => void;
}

export const ThreeSteps: React.FC<ThreeStepsProps> = ({ onScrollToForm }) => {
  const steps = [
    {
      number: '01',
      title: 'Informe o veículo',
      description:
        'Conte qual é a marca, modelo, ano e motorização do seu carro para iniciarmos o atendimento.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Consulte opções e fotos',
      description:
        'Nossa equipe consulta a disponibilidade e envia fotos e orçamento quando houver uma opção para seu veículo.',
      icon: Image,
    },
    {
      number: '03',
      title: 'Avalie orçamento e condições',
      description:
        'A condição e os detalhes do motor serão informados na proposta, junto com o valor e as informações de entrega.',
      icon: Calculator,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Section Header */}
          <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2">
            Como Funciona
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Passo a passo para consultar seu motor
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Atendimento direto e prático para você receber todas as informações antes de tomar sua decisão.
          </p>
        </div>

          <SectionImage image="inspection" caption="Conte os dados do veículo para iniciar a consulta." />
        </div>

        {/* 3 Steps Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-neutral-50 rounded-lg p-6 sm:p-7 border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-neutral-400">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded bg-white border border-neutral-200 flex items-center justify-center text-orange-600 shadow-xs">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link to Form */}
        <div className="mt-10 flex items-center justify-start">
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-1"
          >
            <span>Ir para o formulário de consulta</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
