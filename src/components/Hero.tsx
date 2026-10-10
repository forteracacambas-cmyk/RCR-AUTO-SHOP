import React from 'react';
import engineHero from '../../engine-hero.webp';
import { ArrowDown, HelpCircle } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct commercial headline & clear proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-4 flex items-center gap-2">
              <span>RCR AUTO SHOP</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300 font-normal">Motores Automotivos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white max-w-2xl text-balance">
              Encontre o motor para o seu carro.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              Conte qual é o seu veículo. Consulte disponibilidade e receba fotos e orçamento pelo WhatsApp.
            </p>

            {/* Primary Action */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer"
              >
                <span>Consultar disponibilidade</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#como-identificar"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-700 hover:border-neutral-500 rounded-md"
              >
                <HelpCircle className="w-4 h-4 text-orange-400" aria-hidden="true" />
                <span>Como identificar o motor</span>
              </a>
            </div>

            {/* Microtexto claro e direto */}
            <p className="mt-4 text-xs text-neutral-400 leading-relaxed max-w-lg">
              Nossa equipe consulta a disponibilidade e envia fotos e orçamento quando houver uma opção para seu veículo.
            </p>

          </div>

          <figure className="lg:col-span-5 w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E1013] shadow-2xl">
            <img src={engineHero} alt="Ilustração de motor automotivo sem marca" width="1400" height="933" fetchPriority="high" className="w-full h-auto object-cover" />
            <figcaption className="px-5 py-3 text-center text-xs text-neutral-400">Imagem ilustrativa. Consulte fotos do motor disponível no atendimento.</figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
};

