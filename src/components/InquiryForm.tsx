import { measurementAllowed, trackWhatsApp } from '../adsTracking';
import React, { useState } from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const engines = [
  'Motor 1.0',
  'Motor 1.4',
  'Motor 1.6',
  'Motor 1.8',
  'Motor 2.0',
  'Motor diesel',
  'Outra motorização / não sei'
];

export const InquiryForm: React.FC = () => {
  const currentYear = Math.max(2027, new Date().getFullYear() + 1);
  const years = Array.from({ length: currentYear - 1989 }, (_, i) => String(currentYear - i));

  const [engine, setEngine] = useState('');
  const [year, setYear] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [error, setError] = useState('');

  const message = [
    'Olá, RCR AUTO SHOP!',
    `Gostaria de consultar a disponibilidade do seguinte motor:`,
    `• Motor: ${engine}`,
    `• Ano: ${year}`,
    `• Veículo: ${vehicle.trim()}`,
    '',
    'Podem me enviar fotos, valor e condições caso haja uma opção compatível disponível?'
  ].join('\n');

  const submit = (event: React.FormEvent) => {
    if (!engine || !year || !vehicle.trim()) {
      event.preventDefault();
      setError('Por favor, preencha todos os campos obrigatórios (Motor, Ano e Veículo) para consultar.');
      return;
    }
    setError('');

    if (measurementAllowed()) {
      event.preventDefault();
      const url = `https://wa.me/${businessConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
      trackWhatsApp(() => window.location.assign(url));
    }
  };

  const fieldClass = 'w-full min-h-14 rounded-xl border-2 border-transparent bg-white px-4 py-3.5 text-base font-medium text-neutral-900 shadow-sm transition focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-400/20 placeholder:font-normal placeholder:text-neutral-500';

  return (
    <section id="formulario-consulta" className="scroll-mt-20 border-b border-neutral-200 bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700">Consulta pelo WhatsApp</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Qual motor você procura?</h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-neutral-600">
              Selecione o motor e o ano, e digite o seu veículo. Nossa equipe consulta a disponibilidade e envia fotos e orçamento quando houver uma opção compatível.
            </p>
          </div>

          <form 
            action={`https://wa.me/${businessConfig.whatsappNumber.replace(/\D/g, '')}`} 
            method="get" 
            onSubmit={submit} 
            noValidate 
            className="rounded-3xl border border-neutral-800 border-t-4 border-t-orange-500 bg-neutral-900 p-5 sm:p-7 shadow-xl shadow-neutral-900/15 space-y-5"
          >
            <input type="hidden" name="text" value={message} />

            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <MessageSquare size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-white text-base">Consulte o motor para seu carro</p>
                <p className="mt-0.5 text-xs text-neutral-300">Preencha os 3 campos obrigatórios abaixo para iniciar o atendimento.</p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="engine-choice" className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs text-neutral-950 font-bold">1</span>
                  Motor que procura *
                </label>
                <select 
                  id="engine-choice" 
                  value={engine} 
                  onChange={e => { setEngine(e.target.value); setError(''); }} 
                  className={fieldClass} 
                  required
                >
                  <option value="">Selecione o motor</option>
                  {engines.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="vehicle-year" className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs text-neutral-950 font-bold">2</span>
                  Ano do veículo *
                </label>
                <select 
                  id="vehicle-year" 
                  value={year} 
                  onChange={e => { setYear(e.target.value); setError(''); }} 
                  className={fieldClass} 
                  required
                >
                  <option value="">Selecione o ano</option>
                  {years.map(item => <option key={item} value={item}>{item}</option>)}
                  <option value="Anterior a 1990">Anterior a 1990</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="vehicle-details" className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs text-neutral-950 font-bold">3</span>
                Veículo (Marca e Modelo) *
              </label>
              <input 
                id="vehicle-details" 
                maxLength={180} 
                value={vehicle} 
                onChange={e => { setVehicle(e.target.value); setError(''); }} 
                placeholder="Ex: Fiat Palio, VW Gol, Ford Ka, GM Onix, Toyota Corolla..." 
                className={fieldClass} 
                required 
              />
            </div>

            {error && (
              <p role="alert" className="rounded-xl bg-red-950/70 border border-red-800/60 px-4 py-3 text-sm text-red-200 font-medium">
                {error}
              </p>
            )}

            <button 
              type="submit" 
              className="flex min-h-16 w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 px-4 py-4 text-base font-bold text-white shadow-lg shadow-emerald-950/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 cursor-pointer"
            >
              <MessageSquare size={20} aria-hidden="true" />
              <span>Consultar no WhatsApp</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>

            <p className="text-xs leading-relaxed text-neutral-400">
              Ao clicar, o WhatsApp abre com sua mensagem preenchida para envio direto à nossa equipe. Não exigimos cadastro prévio, CPF ou documentos no site.{' '}
              <a href="/privacidade" className="text-orange-400 hover:text-orange-300 underline">
                Política de Privacidade
              </a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
