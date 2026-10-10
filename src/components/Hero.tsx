import React from 'react';
import { ArrowDown, HelpCircle, FileText } from 'lucide-react';

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

          {/* Right Column: Stylized Technical SVG Engine Illustration with simple label */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-neutral-900/80 border border-neutral-800 rounded-lg p-5 relative">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <FileText className="w-3.5 h-3.5 text-orange-400" />
                  <span>ESQUEMÁTICO DO MOTOR</span>
                </span>
                <span className="text-[11px] text-neutral-400">Imagem ilustrativa</span>
              </div>

              {/* Technical SVG */}
              <div className="w-full aspect-square bg-[#0E1013] rounded border border-neutral-800/60 p-4 flex items-center justify-center relative overflow-hidden">
                
                <div 
                  className="absolute inset-0 opacity-[0.07]" 
                  style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                  aria-hidden="true"
                />

                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Desenho técnico de bloco e cabeçote de motor automotivo"
                >
                  {/* Bloco */}
                  <rect x="70" y="80" width="260" height="230" rx="10" stroke="#4B5563" strokeWidth="2.5" strokeDasharray="4 2" />
                  
                  {/* Cabeçote */}
                  <path d="M 85 80 L 100 50 L 300 50 L 315 80 Z" stroke="#F97316" strokeWidth="2" fill="#F97316" fillOpacity="0.05" />
                  <rect x="180" y="38" width="40" height="12" rx="2" stroke="#F97316" strokeWidth="1.5" />
                  <line x1="120" y1="65" x2="280" y2="65" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="6 3" />

                  {/* 4 Cilindros */}
                  <g>
                    <rect x="90" y="110" width="46" height="110" rx="3" stroke="#6B7280" strokeWidth="1.8" />
                    <rect x="94" y="140" width="38" height="24" rx="2" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="1.5" />
                    <line x1="113" y1="164" x2="113" y2="210" stroke="#9CA3AF" strokeWidth="2" />
                    <line x1="113" y1="80" x2="113" y2="110" stroke="#E5E7EB" strokeWidth="1.2" />
                    <circle cx="113" cy="110" r="2.5" fill="#F97316" />
                  </g>

                  <g>
                    <rect x="146" y="110" width="46" height="110" rx="3" stroke="#6B7280" strokeWidth="1.8" />
                    <rect x="150" y="120" width="38" height="24" rx="2" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="1.5" />
                    <line x1="169" y1="144" x2="169" y2="210" stroke="#9CA3AF" strokeWidth="2" />
                    <line x1="169" y1="80" x2="169" y2="110" stroke="#E5E7EB" strokeWidth="1.2" />
                    <circle cx="169" cy="110" r="2.5" fill="#F97316" />
                  </g>

                  <g>
                    <rect x="202" y="110" width="46" height="110" rx="3" stroke="#6B7280" strokeWidth="1.8" />
                    <rect x="206" y="155" width="38" height="24" rx="2" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="1.5" />
                    <line x1="225" y1="179" x2="225" y2="210" stroke="#9CA3AF" strokeWidth="2" />
                    <line x1="225" y1="80" x2="225" y2="110" stroke="#E5E7EB" strokeWidth="1.2" />
                    <circle cx="225" cy="110" r="2.5" fill="#F97316" />
                  </g>

                  <g>
                    <rect x="258" y="110" width="46" height="110" rx="3" stroke="#6B7280" strokeWidth="1.8" />
                    <rect x="262" y="130" width="38" height="24" rx="2" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="1.5" />
                    <line x1="281" y1="154" x2="281" y2="210" stroke="#9CA3AF" strokeWidth="2" />
                    <line x1="281" y1="80" x2="281" y2="110" stroke="#E5E7EB" strokeWidth="1.2" />
                    <circle cx="281" cy="110" r="2.5" fill="#F97316" />
                  </g>

                  {/* Virabrequim */}
                  <path d="M 80 235 L 320 235" stroke="#D1D5DB" strokeWidth="2" />
                  <circle cx="113" cy="235" r="9" stroke="#F97316" strokeWidth="1.5" />
                  <circle cx="169" cy="235" r="9" stroke="#9CA3AF" strokeWidth="1.5" />
                  <circle cx="225" cy="235" r="9" stroke="#9CA3AF" strokeWidth="1.5" />
                  <circle cx="281" cy="235" r="9" stroke="#F97316" strokeWidth="1.5" />

                  {/* Cárter */}
                  <path d="M 90 310 L 115 345 L 285 345 L 310 310 Z" stroke="#4B5563" strokeWidth="2" fill="#1F2937" fillOpacity="0.4" />

                  {/* Volante */}
                  <rect x="45" y="170" width="18" height="110" rx="2" stroke="#6B7280" strokeWidth="1.5" fill="#374151" fillOpacity="0.3" />
                  {/* Polia */}
                  <circle cx="340" cy="235" r="14" stroke="#6B7280" strokeWidth="1.5" />
                  <circle cx="340" cy="235" r="5" fill="#F97316" />

                  <line x1="40" y1="40" x2="40" y2="360" stroke="#374151" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="360" y1="40" x2="360" y2="360" stroke="#374151" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Legenda curta solicitada */}
              <div className="mt-3 text-center text-xs text-neutral-400">
                Imagem ilustrativa
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
