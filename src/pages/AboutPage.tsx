import React from 'react';
import engineDetail from '../../engine-detail.webp';
import { Building2, ArrowRight, ShieldCheck, FileText, CheckCircle } from 'lucide-react';
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
              Atendimento especializado para consulta de motores automotivos. Motores usados com procedência, nota fiscal e garantia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-10">
          <figure className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950">
            <img src={engineDetail} alt="Ilustração de bloco de motor com pistões" width="1400" height="933" loading="lazy" className="w-full max-h-96 object-cover" />
            <figcaption className="px-5 py-3 text-xs text-neutral-400">Imagem ilustrativa de componentes de um motor.</figcaption>
          </figure>
          
          {/* Apresentação comercial simples */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Nossa Atuação
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base">
              A <strong>RCR AUTO SHOP</strong> atua com atendimento especializado para consulta de motores automotivos. Comercializamos motores usados com procedência, nota fiscal e garantia. Estoque sujeito à disponibilidade.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed text-base">
              O processo é realizado de acordo com as informações do veículo e a disponibilidade existente no momento do atendimento. Nosso objetivo é fornecer informações claras para que o cliente possa avaliar a opção encontrada antes da conclusão da negociação.
            </p>
          </div>

          {/* Destaques operacionais confirmados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-lg bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-2 font-bold text-neutral-900 mb-1 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-600" />
                <span>Com Procedência</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Motores com identificação conferida pela equipe antes da conclusão do negócio.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-2 font-bold text-neutral-900 mb-1 text-sm">
                <FileText className="w-4 h-4 text-orange-600" />
                <span>Nota Fiscal</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Comercialização regular com emissão de nota fiscal para cada unidade fornecida.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-2 font-bold text-neutral-900 mb-1 text-sm">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>Com Garantia</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Prazo, cobertura e condições aplicáveis à unidade informados previamente pela equipe.
              </p>
            </div>
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
