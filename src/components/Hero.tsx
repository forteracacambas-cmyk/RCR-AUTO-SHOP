import React from 'react';
import { ArrowDown, ArrowUpRight, Check, MessageSquare } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export const Hero: React.FC<{ onScrollToForm: () => void }> = () => (
  <section className="bg-[#f6f3ef] border-b border-neutral-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      {/* Imagem das prateleiras: no modo celular fica no topo (acima de RCR AUTO SHOP), e no desktop fica ao lado */}
      <figure className="order-1 lg:order-2 w-full rounded-3xl overflow-hidden bg-white border border-neutral-200 shadow-lg shadow-neutral-900/5">
        <img
          src="https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/motores-prateleiras.webp"
          alt="Motores seminovos organizados em prateleiras e paletes"
          width="720"
          height="540"
          fetchPriority="high"
          className="aspect-[4/3] w-full object-contain"
        />
        <figcaption className="px-5 py-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <div>
            <p className="font-bold text-neutral-900">Motores para diferentes aplicações</p>
            <p className="mt-1 text-xs text-neutral-500">Compatibilidade e disponibilidade sob consulta.</p>
          </div>
          <span className="rounded-full bg-orange-50 text-orange-700 px-3 py-2 text-xs font-bold shrink-0">
            Mostruário
          </span>
        </figcaption>
      </figure>

      {/* Conteúdo textual */}
      <div className="order-2 lg:order-1 w-full">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">RCR AUTO SHOP · Motores seminovos</p>
        <h1 className="mt-5 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.06] tracking-tight text-neutral-950">
          Motores seminovos.<br />
          <span className="text-orange-600">Testados e funcionando.</span>
        </h1>
        <p className="mt-5 text-lg sm:text-xl font-bold text-neutral-900">Com garantia e emissão de nota fiscal.</p>
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-neutral-600 max-w-xl">
          Diga qual é o seu carro. Consulte a disponibilidade, receba fotos e confira as condições do motor compatível com o seu veículo.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-neutral-800">
          {['Motores testados', 'Nota fiscal', 'Garantia com condições no atendimento'].map((text) => (
            <li key={text} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-orange-600 shrink-0" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Olá, RCR AUTO SHOP! Estou procurando um motor. Podem me ajudar a verificar a disponibilidade para o meu carro?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 justify-center items-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 px-6 py-4 text-white font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
          >
            <MessageSquare className="w-5 h-5" />
            Falar com a equipe
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#mostruario"
            className="inline-flex min-h-14 justify-center items-center gap-2 rounded-xl border border-neutral-300 hover:bg-white px-5 py-4 font-semibold text-neutral-800"
          >
            Ver mostruário
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
        <p className="mt-4 text-xs text-neutral-500">Sem cadastro no site. Você conversa diretamente pelo WhatsApp.</p>
      </div>
    </div>
  </section>
);
