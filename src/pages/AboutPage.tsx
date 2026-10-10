import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onScrollToForm: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onScrollToForm }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#12151A] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-3">
              Institucional
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Sobre a RCR AUTO SHOP
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Atendimento focado em consulta de motores automotivos, com envio de fotos e orçamento pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-10">
          
          {/* Apresentação comercial simples */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Nossa Atuação
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base">
              A <strong>RCR AUTO SHOP LTDA</strong> atua no comércio e fornecimento de motores automotivos. Nosso objetivo é ajudar proprietários e profissionais da mecânica a encontrar a opção ideal para cada veículo.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed text-base">
              Nossa equipe consulta a disponibilidade e envia fotos e orçamento quando houver uma opção para seu veículo. A condição e os detalhes do motor serão informados na proposta.
            </p>
          </div>

          {/* Dados da Empresa */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-orange-600" />
              <span>Identificação da Empresa</span>
            </h2>

            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-3 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-neutral-200/60">
                <span className="font-medium text-neutral-500">Razão Social:</span>
                <span className="font-semibold text-neutral-900 sm:col-span-2">{businessConfig.razaoSocial}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-neutral-200/60">
                <span className="font-medium text-neutral-500">CNPJ:</span>
                <span className="font-mono text-neutral-900 sm:col-span-2">{businessConfig.cnpj}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5">
                <span className="font-medium text-neutral-500">Endereço Cadastral:</span>
                <span className="text-neutral-900 sm:col-span-2 leading-relaxed">
                  {businessConfig.enderecoCadastral.textoCompleto}
                  <span className="block mt-1 text-xs text-neutral-500">
                    {businessConfig.enderecoCadastral.avisoDeslocamento}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900">
                Quer consultar um motor para o seu carro?
              </h3>
              <p className="text-sm text-neutral-600">
                Informe os dados do veículo e receba nosso retorno.
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
