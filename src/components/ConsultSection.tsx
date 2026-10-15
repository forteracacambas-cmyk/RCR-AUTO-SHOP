import React from 'react';
import { InquiryForm } from './InquiryForm';

export function ConsultSection() {
  return <section className="bg-neutral-950 text-white py-14 sm:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"><div><p className="text-xs uppercase tracking-widest font-bold text-orange-400">Atendimento pelo WhatsApp</p><h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Não encontrou o seu motor?<br />Conte o que você precisa.</h2><p className="mt-5 text-neutral-300 leading-relaxed max-w-lg">Informe modelo, ano e motorização. O formulário prepara sua mensagem para que a equipe verifique a aplicação do seu veículo.</p><ol className="mt-8 space-y-5">{['Você informa os dados do carro.', 'A equipe verifica disponibilidade e compatibilidade.', 'Você recebe as condições antes de decidir.'].map((text,i)=><li key={text} className="flex items-start gap-3 text-sm text-neutral-200"><span className="flex items-center justify-center h-7 w-7 rounded-full bg-orange-500/15 text-orange-400 font-bold shrink-0">{i+1}</span><span className="pt-1">{text}</span></li>)}</ol></div><InquiryForm /></div></section>;
}


