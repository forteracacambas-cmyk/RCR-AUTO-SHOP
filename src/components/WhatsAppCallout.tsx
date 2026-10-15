import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export function WhatsAppCallout({ final = false }: { final?: boolean }) {
  const message = final ? 'Olá, RCR AUTO SHOP! Gostaria de consultar um motor para o meu veículo. Podem me ajudar?' : 'Olá, RCR AUTO SHOP! Gostaria de tirar dúvidas sobre um motor, nota fiscal e garantia.';
  return <section className={final ? 'bg-orange-600 text-white py-12 sm:py-16' : 'bg-neutral-50 py-10 border-b border-neutral-200'} aria-label={final ? 'Consultar motor pelo WhatsApp' : 'Tirar dúvidas com a equipe'}><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"><div><h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{final ? 'Vamos encontrar uma opção para o seu carro?' : 'Quer tirar uma dúvida antes de escolher?'}</h2><p className={`mt-3 max-w-2xl text-sm sm:text-base leading-relaxed ${final ? 'text-orange-50' : 'text-neutral-600'}`}>{final ? 'Envie o modelo, o ano e a motorização. A equipe consulta a disponibilidade e apresenta as condições pelo WhatsApp.' : 'Converse com a equipe sobre aplicação, condição do motor, nota fiscal, garantia e envio.'}</p></div><a href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full md:w-auto shrink-0 min-h-14 items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 px-6 py-4 text-white text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"><MessageSquare className="w-5 h-5" aria-hidden="true" />{final ? 'Consultar meu motor no WhatsApp' : 'Tirar dúvidas no WhatsApp'}<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a></div></section>;
}


