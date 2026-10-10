import React from 'react';
import { Building2, MapPin, Clock, MessageSquare } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { PageRoute } from '../types';
import { InquiryForm } from '../components/InquiryForm';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onScrollToForm: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#12151A] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-3">
              Canais de Atendimento
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Contato
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Consulte a identificação da empresa e utilize o formulário abaixo para preparar sua consulta de motor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact status & cadastral data */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Status */}
            <div className="bg-neutral-900 text-white p-6 rounded-lg border border-neutral-800">
              <div className="text-xs font-mono uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Atendimento</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">
                WhatsApp em breve
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Nosso canal de atendimento pelo WhatsApp está em fase final de configuração. Você pode preparar os dados da sua consulta ao lado para facilitar o contato.
              </p>
            </div>

            {/* Dados Cadastrais */}
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 space-y-4">
              <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-orange-600" />
                <span>Dados da Empresa</span>
              </h3>

              <div className="text-xs space-y-2 text-neutral-700">
                <div>
                  <span className="font-semibold text-neutral-900 block">Razão Social:</span>
                  <span>{businessConfig.razaoSocial}</span>
                </div>
                <div>
                  <span className="font-semibold text-neutral-900 block">CNPJ:</span>
                  <span className="font-mono">{businessConfig.cnpj}</span>
                </div>
                <div className="pt-2 border-t border-neutral-200">
                  <span className="font-semibold text-neutral-900 block flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Endereço Cadastral:</span>
                  </span>
                  <span className="text-neutral-600 block leading-relaxed mt-0.5">
                    {businessConfig.enderecoCadastral.textoCompleto}
                  </span>
                  <span className="text-neutral-500 block text-[11px] mt-1">
                    {businessConfig.enderecoCadastral.avisoDeslocamento}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Embedded Form */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 rounded-lg p-6 sm:p-8 bg-white shadow-xs">
              <div className="mb-6">
                <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-1 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Consulta Rápida</span>
                </div>
                <h2 className="text-xl font-bold text-neutral-900">
                  Qual motor você procura?
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Preencha os dados do veículo para agilizar o atendimento.
                </p>
              </div>

              <InquiryForm />
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};
