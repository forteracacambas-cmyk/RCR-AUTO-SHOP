import React from 'react';
import { FileText, ShieldCheck, Truck, RefreshCw, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface CommercialConditionsPageProps {
  onNavigate: (route: PageRoute) => void;
  onScrollToForm: () => void;
}

export const CommercialConditionsPage: React.FC<CommercialConditionsPageProps> = ({
  onNavigate,
  onScrollToForm,
}) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#12151A] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-3">
              Informações Comerciais
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Condições Comerciais
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Entenda como funcionam as consultas, o orçamento, o envio e as condições gerais de atendimento.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-10">
          
          {/* 1. Fluxo de consulta */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-orange-600" />
              <span>1. Consulta e Orçamento</span>
            </h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              Nossa equipe consulta a disponibilidade e envia fotos e orçamento quando houver uma opção para seu veículo.
            </p>
            <p className="mt-2 text-neutral-700 leading-relaxed text-sm sm:text-base">
              Este site é destinado à consulta e atendimento. Não há realização de compras, pagamentos ou inserção de dados financeiros na página.
            </p>
          </div>

          {/* 2. Informações na proposta */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-orange-600" />
              <span>2. Detalhes do Motor na Proposta</span>
            </h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              A condição e os detalhes do motor serão informados na proposta. Quando houver uma opção compatível para o veículo informado, compartilhamos as especificações e fotos para sua avaliação antes de qualquer fechamento.
            </p>
          </div>

          {/* 3. Envio e Logística */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2 mb-3">
              <Truck className="w-5 h-5 text-orange-600" />
              <span>3. Entrega e Envio</span>
            </h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              As opções de frete e prazos estimados de entrega para o seu endereço são combinadas diretamente durante o atendimento, de acordo com a sua localização.
            </p>
          </div>

          {/* 4. Garantia e Legislação */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2 mb-3">
              <RefreshCw className="w-5 h-5 text-orange-600" />
              <span>4. Garantia Legal</span>
            </h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              Todas as vendas respeitam plenamente os direitos estabelecidos no Código de Defesa do Consumidor (CDC), incluindo as garantias legais aplicáveis e o direito de arrependimento para compras à distância previsto no Artigo 49 da Lei nº 8.078/1990.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900">
                Pronto para consultar o motor do seu carro?
              </h3>
              <p className="text-sm text-neutral-600">
                Preencha os dados do veículo e prepare sua mensagem.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('/');
                setTimeout(() => {
                  onScrollToForm();
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors cursor-pointer shrink-0"
            >
              <span>Consultar disponibilidade</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </section>
    </div>
  );
};
