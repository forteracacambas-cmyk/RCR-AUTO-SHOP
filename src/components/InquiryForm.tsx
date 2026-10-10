import { SectionImage } from './SectionImage';
import React, { useState } from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const engines = ['Motor 1.0', 'Motor 1.4', 'Motor 1.6', 'Motor 1.8', 'Motor 2.0', 'Motor diesel', 'Outra motorização / não sei'];

export const InquiryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [engine, setEngine] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [error, setError] = useState('');
  const message = [
    `Olá, RCR AUTO SHOP! Meu nome é ${name.trim()}.`,
    `Gostaria de consultar a disponibilidade de: ${engine}.`,
    ...(vehicle.trim() ? [`Meu veículo: ${vehicle.trim()}.`] : []),
    'Podem me enviar fotos, valor e condições caso haja uma opção compatível disponível?'
  ].join('\n\n');
  const submit = (event: React.FormEvent) => {
    if (!name.trim() || !engine) {
      event.preventDefault();
      setError('Informe seu nome e selecione o motor que procura.');
      return;
    }
    setError('');
  };
  const fieldClass = 'w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500';
  return (
    <section id="formulario-consulta" className="scroll-mt-20 border-b border-neutral-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700">Consulta pelo WhatsApp</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900">Qual motor você procura?</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">Informe seu nome e o motor desejado. Nossa equipe consulta a disponibilidade e envia fotos e orçamento quando houver uma opção para o seu veículo.</p>
            <p className="mt-4 text-sm text-neutral-500">As opções abaixo ajudam a organizar sua consulta. A disponibilidade e a compatibilidade são confirmadas no atendimento.</p>
            <div className="mt-6"><SectionImage image="detail" compact caption="Disponibilidade confirmada pelo WhatsApp." /></div>
          </div>
          <form action={`https://wa.me/${businessConfig.whatsappNumber.replace(/\D/g, '')}`} method="get" onSubmit={submit} noValidate className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:p-7 space-y-5">
            <input type="hidden" name="text" value={message} />
            <div>
              <label htmlFor="customer-name" className="mb-2 block text-sm font-semibold">Seu nome *</label>
              <input id="customer-name" autoComplete="given-name" maxLength={100} value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos chamar você?" className={fieldClass} required />
            </div>
            <div>
              <label htmlFor="engine-choice" className="mb-2 block text-sm font-semibold">Motor que procura *</label>
              <select id="engine-choice" value={engine} onChange={e => setEngine(e.target.value)} className={fieldClass} required>
                <option value="">Selecione o motor</option>
                {engines.map(item => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="vehicle-details" className="mb-2 block text-sm font-semibold">Veículo e ano <span className="font-normal text-neutral-500">(opcional)</span></label>
              <input id="vehicle-details" maxLength={180} value={vehicle} onChange={e => setVehicle(e.target.value)} placeholder="Informe o modelo e o ano do seu carro" className={fieldClass} />
            </div>
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-4 text-sm font-bold text-white hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 cursor-pointer">
              <MessageSquare size={19} aria-hidden="true" />Consultar no WhatsApp<ArrowUpRight size={17} aria-hidden="true" />
            </button>
            <p className="text-xs leading-relaxed text-neutral-500">Ao clicar, o WhatsApp abre com sua mensagem preenchida para você enviar. Os dados do formulário não são salvos neste site. <a href="/privacidade" className="text-orange-700 underline">Política de Privacidade</a>.</p>
          </form>
        </div>
      </div>
    </section>
  );
};
