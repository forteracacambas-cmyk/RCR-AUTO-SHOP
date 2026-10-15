import React from 'react';
import engineHero from '../../engine-hero.webp';
import { businessConfig } from '../config/businessConfig';
import { MessageSquare, ShieldCheck } from 'lucide-react';
import { InquiryForm } from './InquiryForm';

interface HeroProps {
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative bg-[#12151A] text-white overflow-hidden border-b border-neutral-800">
      {/* Subtle grid texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct commercial headline & proposition */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5">
            
            <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase flex items-center gap-2">
              <span>RCR AUTO SHOP</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300 font-normal">Motores Automotivos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white text-balance">
              Encontre o motor para o seu carro.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              Informe os dados do seu veículo, consulte a disponibilidade e receba as informações da unidade disponível para sua aplicação.
            </p>

            {/* Selo textual discreto confirmado */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700/80 text-xs text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
              <span>Motores usados com procedência, nota fiscal e garantia. Disponibilidade confirmada no atendimento.</span>
            </div>

            {/* Ilustração do motor */}
            <figure className="w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E1013] shadow-xl">
              <img 
                src={engineHero} 
                alt="Motor automotivo" 
                width="1400" 
                height="933" 
                fetchPriority="high" 
                className="w-full h-44 sm:h-52 object-cover object-top" 
                style={{ objectPosition: 'top' }}
              />
            </figure>

            {/* Canal direto WhatsApp & aviso */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de consultar a disponibilidade de um motor.')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-colors border border-neutral-700 hover:border-neutral-500 rounded-lg bg-neutral-900/60"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" aria-hidden="true" />
                <span>Atendimento direto pelo WhatsApp</span>
              </a>

              <p className="text-xs text-neutral-400 leading-relaxed flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" aria-hidden="true"></span>
                <span>Disponibilidade confirmada no atendimento.</span>
              </p>
            </div>

          </div>

          {/* Right Column: Formulário principal em destaque no topo */}
          <div className="lg:col-span-6 w-full">
            <InquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
};
