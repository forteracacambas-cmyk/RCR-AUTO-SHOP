import React from 'react';
import { RefreshCw, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const StockAndCondition: React.FC = () => {
  const blocks = [
    {
      title: 'ESTOQUE VARIÁVEL',
      desc: 'As unidades disponíveis podem mudar. A disponibilidade apresentada durante o atendimento deve ser confirmada antes da conclusão da compra.',
      icon: RefreshCw,
    },
    {
      title: 'SOMENTE MOTORES USADOS',
      desc: 'Comercializamos exclusivamente motores usados, com procedência, nota fiscal e garantia. As características e a condição são informadas individualmente durante o atendimento.',
      icon: ShieldCheck,
    },
    {
      title: 'COMPATIBILIDADE',
      desc: 'Antes da negociação, nossa equipe utiliza as informações fornecidas pelo cliente para verificar a aplicação correspondente ao veículo.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-2">
            Disponibilidade e Condição
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Disponibilidade e condição dos motores
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            Nosso estoque é dinâmico e pode mudar ao longo do dia. Por isso, trabalhamos com consulta de disponibilidade de acordo com o veículo informado pelo cliente.
          </p>
          <p className="mt-2 text-sm text-orange-400/90 font-medium">
            Motores usados com procedência, nota fiscal e garantia. Estoque sujeito à disponibilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950/70 rounded-xl p-6 sm:p-7 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-3">
                    {block.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {block.desc}
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
