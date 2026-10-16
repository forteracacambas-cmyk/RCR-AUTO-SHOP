import React from 'react';
import { Building2, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
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
              Fale com a equipe pelo WhatsApp ou preencha o formulário para consultar a disponibilidade do motor desejado.
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
            <div className="bg-neutral-900 text-white p-6 rounded-xl border border-neutral-800 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Atendimento Comercial</span>
              </div>
              <h2 className="text-lg font-bold text-white">
                Atendimento pelo WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Informe o seu veículo para consultar disponibilidade, fotos e orçamento de motores seminovos com procedência, nota fiscal e garantia.
              </p>
              
              <div className="pt-2">
                <a 
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de consultar a disponibilidade de um motor.')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 py-3.5 px-4 font-semibold text-white transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar no WhatsApp · {businessConfig.whatsappFormatted}</span>
                </a>
              </div>
            </div>

            {/* Aviso Operacional */}
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 leading-relaxed flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
              <span>
                Comercializamos exclusivamente motores seminovos com procedência, nota fiscal e garantia. Disponibilidade confirmada no atendimento.
              </span>
            </div>

            {/* Dados Cadastrais */}
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-4">
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
                <div>
                  <span className="font-semibold text-neutral-900 block">Atendimento:</span>
                  <span>{businessConfig.whatsappFormatted} (WhatsApp Comercial)</span>
                </div>
                
              </div>
            </div>

          </div>

          {/* Right: Embedded Form */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>

        </div>

      </section>
    </div>
  );
};
