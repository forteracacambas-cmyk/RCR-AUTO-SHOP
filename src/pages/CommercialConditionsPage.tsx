import React from 'react';
import { FileText, ShieldCheck, Truck, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';
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
              Entenda como funcionam as consultas, o fornecimento exclusivo de motores usados, procedência, nota fiscal, garantia e envio.
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
              Nosso atendimento funciona por consulta prévia. O cliente informa os dados do veículo (modelo, ano e motorização) e nossa equipe verifica as opções disponíveis para a aplicação antes de qualquer negociação.
            </p>
            <p className="mt-2 text-neutral-700 leading-relaxed text-sm sm:text-base">
              Este site é destinado à consulta e atendimento comercial. Não há realização de compras diretas, pagamentos ou inserção de dados financeiros na página.
            </p>
          </div>

          {/* 2. Exclusivamente motores usados */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-orange-600" />
              <span>2. Exclusivamente Motores Usados com Procedência</span>
            </h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              A RCR AUTO SHOP comercializa <strong>exclusivamente motores usados</strong>. Não ofertamos motores novos ou retificados/recondicionados.
            </p>
            <p className="mt-2 text-neutral-700 leading-relaxed text-sm sm:text-base">
              Todas as unidades comercializadas possuem procedência e características específicas informadas individualmente durante o atendimento. Quando houver uma opção compatível para o veículo informado, compartilhamos as especificações e fotos para sua avaliação antes de qualquer fechamento.
            </p>
          </div>

          {/* 3. Nota Fiscal e Garantia */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2 mb-3">
              <RefreshCw className="w-5 h-5 text-orange-600" />
              <span>3. Nota Fiscal e Garantia Legal</span>
            </h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              Todos os motores usados comercializados são fornecidos com emissão de nota fiscal e garantia, respeitando rigorosamente os direitos estabelecidos no Código de Defesa do Consumidor (CDC).
            </p>
            <p className="mt-2 text-neutral-700 leading-relaxed text-sm sm:text-base">
              O prazo, a cobertura e as condições aplicáveis à unidade específica serão informados pela equipe antes da conclusão da compra, garantindo clareza total ao consumidor.
            </p>
          </div>

          {/* 4. Envio e Logística */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2 mb-3">
              <Truck className="w-5 h-5 text-orange-600" />
              <span>4. Entrega e Envio</span>
            </h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              As opções de envio e os prazos estimados de entrega para o seu endereço são combinados diretamente durante o atendimento, de acordo com a sua localização e a unidade consultada.
            </p>
            <p className="mt-2 text-neutral-700 leading-relaxed text-sm sm:text-base text-xs text-neutral-500">
              Nosso endereço em São Caetano do Sul é cadastral. Consulte nossa equipe antes de se deslocar para verificar se há possibilidade de atendimento presencial ou retirada da sua unidade no local.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900">
                Pronto para consultar o motor do seu carro?
              </h3>
              <p className="text-sm text-neutral-600">
                Preencha os dados do veículo e receba as informações da unidade disponível.
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
