import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

interface AboutSectionProps {
  onScrollToForm: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScrollToForm }) => {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-white border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: Institutional Text */}
          <div>
            <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2">
              Sobre a Empresa
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              RCR AUTO SHOP · Atendimento Especializado
            </h2>
            
            <p className="mt-4 text-base text-neutral-700 leading-relaxed">
              A <strong>RCR AUTO SHOP</strong> atua com atendimento especializado para consulta de motores automotivos. Comercializamos exclusivamente motores usados, com procedência, nota fiscal e garantia. Disponibilidade confirmada no atendimento.
            </p>
            
            <p className="mt-3 text-base text-neutral-700 leading-relaxed">
              O processo é realizado de acordo com as informações do veículo e a disponibilidade existente no momento do atendimento. Nosso objetivo é fornecer informações claras para que o cliente possa avaliar a opção encontrada antes da conclusão da negociação.
            </p>

            <div className="mt-8 bg-neutral-50 rounded-xl p-5 border border-neutral-200 space-y-2.5 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center gap-2 font-bold text-neutral-900 pb-2 border-b border-neutral-200">
                <Building2 className="w-4 h-4 text-orange-600" />
                <span>Dados Oficiais de Cadastro</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Razão Social:</span>
                <span className="font-semibold text-neutral-900">{businessConfig.razaoSocial}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">CNPJ:</span>
                <span className="font-mono text-neutral-900">{businessConfig.cnpj}</span>
              </div>
              <div className="pt-2 border-t border-neutral-200">
                <span className="text-neutral-500 block text-xs">Endereço Cadastral:</span>
                <span className="text-neutral-800 leading-relaxed block">{businessConfig.enderecoCadastral.textoCompleto}</span>
                <span className="text-neutral-500 block text-[11px] mt-0.5">{businessConfig.enderecoCadastral.avisoDeslocamento}</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-1"
              >
                <span>Consultar disponibilidade para seu veículo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div>
            <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
              <img src="https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/rcr-fachada-simulacao.webp" alt="Simulação de fachada laranja com a identidade visual da RCR Auto Shop" width="1200" height="900" loading="lazy" className="w-full h-auto" />
              <figcaption className="p-4 text-xs text-neutral-500 leading-relaxed">Simulação de fachada para apresentação da marca. Para atendimento presencial ou retirada, confirme o local com a equipe antes de se deslocar.</figcaption>
            </figure>
          </div>
        </div>

      </div>
    </section>
  );
};


