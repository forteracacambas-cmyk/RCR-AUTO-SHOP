import { SectionImage } from './SectionImage';
import React from 'react';
import { Tag, FileCheck, Layers, Gauge } from 'lucide-react';

export const EngineGuidance: React.FC = () => {
  const guidanceCards = [
    {
      title: 'Modelo e Versão do Carro',
      desc: 'Informe o nome do modelo e a versão, conforme a identificação do veículo. Isso ajuda a equipe a identificar a configuração correta da montadora.',
      icon: Tag,
    },
    {
      title: 'Ano de Fabricação e Modelo',
      desc: 'Caso o ano de fabricação seja diferente do modelo (ex.: 2013/2014), você pode informar ambos. Em anos de transição de versão, essa informação é especialmente útil.',
      icon: FileCheck,
    },
    {
      title: 'Motorização e Válvulas',
      desc: 'Informe a litragem do motor (ex.: 1.0, 1.4, 1.6, 2.0) e, se souber, o número de válvulas (8V, 16V). Se não tiver certeza, nossa equipe auxilia durante o atendimento.',
      icon: Gauge,
    },
    {
      title: 'Código do Motor (Opcional)',
      desc: 'Se o mecânico já identificou o código ou sigla do motor, informe durante o atendimento para agilizar a conferência.',
      icon: Layers,
    },
  ];

  return (
    <section id="como-identificar" className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2">
              Identificação Técnica
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Como identificar os dados do motor
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Quanto mais informações sobre o veículo forem enviadas, mais precisa poderá ser a consulta da aplicação correspondente.
            </p>
          </div>

          <SectionImage image="detail" caption="Modelo e motorização ajudam na conferência precisa." />
        </div>

        {/* Guidance Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {guidanceCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 sm:p-7 border border-neutral-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
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
