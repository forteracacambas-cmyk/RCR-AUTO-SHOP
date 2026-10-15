import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const engines = [
  { name: 'Fastback', engine: '1.0', year: '2024', image: 'fiat-fastback-2024.webp' },
  { name: 'Focus', engine: '2.0', year: '2018', image: 'ford-focus-2018.webp' },
  { name: 'C3', engine: '1.5', year: '2015', image: 'citroen-c3-2015.webp' },
  { name: 'CrossFox', engine: '1.6', year: '2013', image: 'vw-crossfox-2013.webp' },
];

export function EngineShowcase() {
  return (
    <section id="mostruario" aria-labelledby="mostruario-titulo" className="bg-neutral-50 py-14 sm:py-20 scroll-mt-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold tracking-widest uppercase text-orange-600">Mostruário de motores usados</p>
        <h2 id="mostruario-titulo" className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">Veja de perto. Consulte para o seu carro.</h2>
        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">Conheça alguns modelos de motores. Fale com a equipe para confirmar a disponibilidade, a aplicação e os itens que acompanham cada unidade.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {engines.map((item) => (
            <article key={item.image} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col">
              <div className="bg-neutral-100 aspect-[4/3] overflow-hidden">
                <img
                  src={`https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/${item.image}`}
                  alt={`Motor seminovo ${item.name} ${item.engine}, ano ${item.year}`}
                  width="960"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide">Motor usado · Sob consulta</p>
                <h3 className="mt-2 text-xl font-bold leading-tight">{item.name} {item.engine}</h3>
                <p className="mt-2 text-sm text-neutral-600">Motorização {item.engine} <span aria-hidden="true">·</span> Ano {item.year}</p>
                <p className="mt-3 mb-5 text-xs text-neutral-500 leading-relaxed">Confirme código do motor, compatibilidade e condição da unidade no atendimento.</p>
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, RCR AUTO SHOP! Vi no mostruário o motor ${item.name} ${item.engine}, ano ${item.year}. Gostaria de consultar disponibilidade, valor e compatibilidade com meu veículo.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-600 px-3 py-3 text-sm font-bold text-white hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                >
                  Consultar este motor <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs text-neutral-500 leading-relaxed">Mostruário de referência. Fotos e identificação dos modelos fornecidas para apresentação. A disponibilidade, o ano de aplicação, os acessórios e as condições de cada unidade devem ser confirmados antes da compra.</p>
      </div>
    </section>
  );
}
