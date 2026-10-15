import React, { useState } from 'react';
import { MessageSquare, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';
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

interface InquiryFormProps {
  className?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ className = '' }) => {
  const currentYear = Math.max(2027, new Date().getFullYear() + 1);
  const years = Array.from({ length: currentYear - 1989 }, (_, i) => String(currentYear - i));

  const [engine, setEngine] = useState('');
  const [year, setYear] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [error, setError] = useState('');

  const message = [
    'Olá, RCR AUTO SHOP!',
    'Gostaria de consultar a disponibilidade do seguinte motor:',
    `• Motor: ${engine}`,
    `• Ano: ${year}`,
    `• Veículo: ${vehicle.trim()}`,
    '',
    'Podem me enviar fotos, valor e condições caso haja uma opção compatível disponível?'
  ].join('\n');

  const isValid = Boolean(engine && year && vehicle.trim());

  const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isValid) {
      event.preventDefault();
      setError('Por favor, preencha todos os campos obrigatórios (Motor, Ano e Veículo) para consultar.');
      return;
    }
    setError('');
    // Quando válidos, a navegação nativa do link ocorre normalmente para wa.me, sem preventDefault
  };

  const fieldClass = 'w-full min-h-12 rounded-xl border-2 border-neutral-700 bg-neutral-950 px-4 py-3 text-sm sm:text-base font-medium text-white shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 placeholder:font-normal placeholder:text-neutral-500';

  return (
    <div id="formulario-consulta" className={`scroll-mt-24 ${className}`}>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          if (!isValid) {
            setError('Por favor, preencha todos os campos obrigatórios (Motor, Ano e Veículo) para consultar.');
          }
        }} 
        noValidate 
        className="rounded-2xl sm:rounded-3xl border border-neutral-700/80 border-t-4 border-t-orange-500 bg-[#161A22] p-5 sm:p-7 shadow-2xl shadow-black/50 space-y-4 sm:space-y-5"
      >
        <input type="hidden" name="text" value={message} />

        {/* Top Header of Form */}
        <div className="border-b border-neutral-800 pb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Fácil e simples · Menos de 2 minutos</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
            Consulta de disponibilidade do seu motor
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-300">
            Fácil e simples, em menos de 2 minutos. Confira! Preencha os campos abaixo:
          </p>
        </div>

        {/* Fields Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Field 1: Motor */}
          <div>
            <label htmlFor="engine-choice" className="mb-1.5 block text-xs sm:text-sm font-semibold text-white">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[11px] text-neutral-950 font-black">1</span>
                <span>Motor que procura *</span>
              </span>
            </label>
            <select 
              id="engine-choice" 
              value={engine} 
              onChange={e => { setEngine(e.target.value); setError(''); }} 
              className={fieldClass} 
              required
            >
              <option value="" className="bg-neutral-900 text-neutral-400">Selecione o motor</option>
              {engines.map(item => <option key={item} value={item} className="bg-neutral-900 text-white">{item}</option>)}
            </select>
          </div>

          {/* Field 2: Ano */}
          <div>
            <label htmlFor="vehicle-year" className="mb-1.5 block text-xs sm:text-sm font-semibold text-white">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[11px] text-neutral-950 font-black">2</span>
                <span>Ano do veículo *</span>
              </span>
            </label>
            <select 
              id="vehicle-year" 
              value={year} 
              onChange={e => { setYear(e.target.value); setError(''); }} 
              className={fieldClass} 
              required
            >
              <option value="" className="bg-neutral-900 text-neutral-400">Selecione o ano</option>
              {years.map(item => <option key={item} value={item} className="bg-neutral-900 text-white">{item}</option>)}
              <option value="Anterior a 1990" className="bg-neutral-900 text-white">Anterior a 1990</option>
            </select>
          </div>
        </div>

        {/* Field 3: Veículo / Carro com label e instruções super simples com exemplos */}
        <div>
          <label htmlFor="vehicle-details" className="mb-1.5 block text-xs sm:text-sm font-semibold text-white">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[11px] text-neutral-950 font-black">3</span>
              <span>Qual é o seu carro? (Marca e Modelo) *</span>
            </span>
            <span className="mt-1 block text-xs font-normal text-neutral-300">
              Digite o modelo do carro (Exemplo: Gol, Palio, Onix, Corolla, Celta, Hilux, etc.)
            </span>
          </label>
          <input 
            id="vehicle-details" 
            maxLength={180} 
            value={vehicle} 
            onChange={e => { setVehicle(e.target.value); setError(''); }} 
            placeholder="Exemplo: VW Gol 1.6, Fiat Palio Fire, GM Onix, Corolla..." 
            className={fieldClass} 
            required 
          />
        </div>

        {error && (
          <p role="alert" className="rounded-xl bg-red-950/80 border border-red-800/80 px-4 py-3 text-xs sm:text-sm text-red-200 font-medium">
            {error}
          </p>
        )}

        {/* Ação CONSULTAR NO WHATSAPP como link real */}
        <a 
          href={isValid ? whatsappUrl : '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="flex min-h-14 sm:min-h-16 w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 px-4 py-3.5 text-base sm:text-lg font-bold text-white shadow-xl shadow-emerald-950/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 cursor-pointer uppercase tracking-wide no-underline"
        >
          <MessageSquare size={22} aria-hidden="true" />
          <span>CONSULTAR NO WHATSAPP</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>

        {/* Aviso claro sobre consulta e disponibilidade */}
        <div className="rounded-lg bg-neutral-950/60 border border-neutral-800/80 p-3 text-xs text-neutral-300 leading-relaxed flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span>A consulta não representa reserva imediata. A disponibilidade é verificada pela nossa equipe durante o atendimento.</span>
        </div>

        <p className="text-[11px] sm:text-xs leading-relaxed text-neutral-400 text-center">
          Ao clicar, o WhatsApp abre com sua mensagem preenchida para envio direto à nossa equipe. Não exigimos cadastro prévio, CPF ou documentos no site.{' '}
          <a href="/privacidade" className="text-orange-400 hover:text-orange-300 underline">
            Política de Privacidade
          </a>.
        </p>
      </form>
    </div>
  );
};
