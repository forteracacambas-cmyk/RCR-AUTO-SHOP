import React, { useState } from 'react';
import { 
  Check, 
  Copy, 
  RotateCcw, 
  MessageSquare, 
  Car, 
  Calendar, 
  Cpu, 
  Fuel, 
  FileText,
  Clock
} from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

interface FormState {
  brand: string;
  model: string;
  yearFab: string;
  yearMod: string;
  displacement: string;
  fuelType: string;
  notes: string;
}

export const InquiryForm: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 2;
  const minYear = 1960;

  const [form, setForm] = useState<FormState>({
    brand: '',
    model: '',
    yearFab: '',
    yearMod: '',
    displacement: '',
    fuelType: '', // Inicia em branco ("Selecione, se souber")
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [generatedMessage, setGeneratedMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);


  const quickDisplacements = [
    '1.0', '1.4', '1.6', '1.8', '2.0', 'Diesel Turbo'
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.brand.trim()) {
      newErrors.brand = 'Informe a marca do veículo.';
    }

    if (!form.model.trim()) {
      newErrors.model = 'Informe o modelo do veículo.';
    }

    if (!form.yearFab.trim()) {
      newErrors.yearFab = 'Informe o ano de fabricação.';
    } else {
      const yearFabNum = parseInt(form.yearFab, 10);
      if (isNaN(yearFabNum) || yearFabNum < minYear || yearFabNum > maxYear) {
        newErrors.yearFab = `Ano inválido (entre ${minYear} e ${maxYear}).`;
      }
    }

    if (form.yearMod.trim()) {
      const yearModNum = parseInt(form.yearMod, 10);
      if (isNaN(yearModNum) || yearModNum < minYear || yearModNum > maxYear) {
        newErrors.yearMod = `Ano modelo inválido.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerateMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const yearString = form.yearMod.trim() 
      ? `${form.yearFab.trim()}/${form.yearMod.trim()}` 
      : form.yearFab.trim();

    const messageLines = [
      `Olá, gostaria de consultar a disponibilidade e orçamento para um motor com a RCR AUTO SHOP:`,
      ``,
      `• Marca: ${form.brand.trim()}`,
      `• Modelo: ${form.model.trim()}`,
      `• Ano: ${yearString}`,
    ];

    if (form.displacement.trim()) {
      messageLines.push(`• Motorização: ${form.displacement.trim()}`);
    } else {
      messageLines.push(`• Motorização: A confirmar no atendimento`);
    }

    if (form.fuelType.trim()) {
      messageLines.push(`• Combustível: ${form.fuelType.trim()}`);
    }

    if (form.notes.trim()) {
      messageLines.push(`• Observações: ${form.notes.trim()}`);
    }

    messageLines.push(``);
    messageLines.push(`Poderiam me informar se há opções disponíveis para este veículo, fotos e o orçamento? Obrigado.`);

    const compiledText = messageLines.join('\n');
    setGeneratedMessage(compiledText);
    setHasGenerated(true);
    setCopied(false);

    setTimeout(() => {
      document.getElementById('resultado-consulta')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleCopy = async () => {
    if (!generatedMessage) return;
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textarea = document.getElementById('mensagem-gerada-textarea') as HTMLTextAreaElement;
      if (textarea) {
        textarea.select();
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    }
  };

  const handleReset = () => {
    setForm({
      brand: '',
      model: '',
      yearFab: '',
      yearMod: '',
      displacement: '',
      fuelType: '',
      notes: '',
    });
    setErrors({});
    setGeneratedMessage('');
    setHasGenerated(false);
    setCopied(false);
  };

  const isWhatsAppConfigured = Boolean(
    businessConfig.whatsappNumber && businessConfig.whatsappNumber.trim() !== ''
  );

  return (
    <section id="formulario-consulta" className="py-16 sm:py-20 bg-white border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2">
            Consulta
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Qual motor você procura?
          </h2>
          <p className="mt-2 text-base text-neutral-600 leading-relaxed">
            Preencha os dados do veículo para agilizar o atendimento.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form inputs */}
          <div className="lg:col-span-7 bg-neutral-50 p-6 sm:p-8 rounded-lg border border-neutral-200">
            <form onSubmit={handleGenerateMessage} noValidate className="space-y-6">
              
              {/* Field: Marca */}
              <div>
                <label htmlFor="brand-input" className="block text-sm font-semibold text-neutral-900 mb-1.5 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-orange-600" aria-hidden="true" />
                  <span>Marca do Veículo *</span>
                </label>
                <input
                  type="text"
                  id="brand-input"
                  value={form.brand}
                  onChange={(e) => {
                    setForm({ ...form, brand: e.target.value });
                    if (errors.brand) setErrors({ ...errors, brand: undefined });
                  }}
                  placeholder="Informe a marca do seu veículo"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-md border text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-colors ${
                    errors.brand
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-neutral-300 focus:ring-orange-500 focus:border-orange-500'
                  }`}
                  aria-invalid={errors.brand ? 'true' : 'false'}
                  aria-describedby={errors.brand ? 'brand-error' : undefined}
                />
                {errors.brand && (
                  <p id="brand-error" className="mt-1.5 text-xs text-red-600 font-medium">
                    {errors.brand}
                  </p>
                )}


              </div>

              {/* Field: Modelo */}
              <div>
                <label htmlFor="model-input" className="block text-sm font-semibold text-neutral-900 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-orange-600" aria-hidden="true" />
                  <span>Modelo e Versão *</span>
                </label>
                <input
                  type="text"
                  id="model-input"
                  value={form.model}
                  onChange={(e) => {
                    setForm({ ...form, model: e.target.value });
                    if (errors.model) setErrors({ ...errors, model: undefined });
                  }}
                  placeholder="Informe o modelo e a versão"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-md border text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-colors ${
                    errors.model
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-neutral-300 focus:ring-orange-500 focus:border-orange-500'
                  }`}
                  aria-invalid={errors.model ? 'true' : 'false'}
                  aria-describedby={errors.model ? 'model-error' : undefined}
                />
                {errors.model && (
                  <p id="model-error" className="mt-1.5 text-xs text-red-600 font-medium">
                    {errors.model}
                  </p>
                )}
              </div>

              {/* Row: Anos (Fabricação e Modelo separados) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Ano Fab */}
                <div>
                  <label htmlFor="yearfab-input" className="block text-sm font-semibold text-neutral-900 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-orange-600" aria-hidden="true" />
                    <span>Ano de Fabricação *</span>
                  </label>
                  <input
                    type="number"
                    id="yearfab-input"
                    min={minYear}
                    max={maxYear}
                    value={form.yearFab}
                    onChange={(e) => {
                      setForm({ ...form, yearFab: e.target.value });
                      if (errors.yearFab) setErrors({ ...errors, yearFab: undefined });
                    }}
                    placeholder="Ex.: 2013"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-md border text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-colors tabular-nums ${
                      errors.yearFab
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-neutral-300 focus:ring-orange-500 focus:border-orange-500'
                    }`}
                    aria-invalid={errors.yearFab ? 'true' : 'false'}
                    aria-describedby={errors.yearFab ? 'yearfab-error' : undefined}
                  />
                  {errors.yearFab && (
                    <p id="yearfab-error" className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.yearFab}
                    </p>
                  )}
                </div>

                {/* Ano Mod */}
                <div>
                  <label htmlFor="yearmod-input" className="block text-sm font-semibold text-neutral-900 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-orange-600" aria-hidden="true" />
                    <span>Ano Modelo <span className="text-neutral-500 font-normal text-xs">(se diferente)</span></span>
                  </label>
                  <input
                    type="number"
                    id="yearmod-input"
                    min={minYear}
                    max={maxYear}
                    value={form.yearMod}
                    onChange={(e) => {
                      setForm({ ...form, yearMod: e.target.value });
                      if (errors.yearMod) setErrors({ ...errors, yearMod: undefined });
                    }}
                    placeholder="Ex.: 2014"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-md border text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-colors tabular-nums ${
                      errors.yearMod
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-neutral-300 focus:ring-orange-500 focus:border-orange-500'
                    }`}
                    aria-invalid={errors.yearMod ? 'true' : 'false'}
                    aria-describedby={errors.yearMod ? 'yearmod-error' : undefined}
                  />
                  {errors.yearMod && (
                    <p id="yearmod-error" className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.yearMod}
                    </p>
                  )}
                </div>

              </div>

              {/* Row: Motorização (Opcional) & Combustível */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Motorização (Opcional) */}
                <div>
                  <label htmlFor="displacement-input" className="block text-sm font-semibold text-neutral-900 mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-orange-600" aria-hidden="true" />
                    <span>Motorização <span className="text-neutral-500 font-normal text-xs">(Opcional)</span></span>
                  </label>
                  <input
                    type="text"
                    id="displacement-input"
                    value={form.displacement}
                    onChange={(e) => setForm({ ...form, displacement: e.target.value })}
                    placeholder="Ex.: 1.0, 1.6 16V, 2.0 Turbo..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-md border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                  <p className="mt-1 text-[11px] text-neutral-500">
                    Se não souber, informe no atendimento.
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5 items-center">
                    {quickDisplacements.slice(0, 4).map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setForm({ ...form, displacement: d })}
                        className="text-xs px-2 py-0.5 bg-white hover:bg-orange-50 hover:text-orange-700 border border-neutral-200 rounded text-neutral-700 transition-colors cursor-pointer"
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Combustível: inicia em "Selecione, se souber" */}
                <div>
                  <label htmlFor="fuel-select" className="block text-sm font-semibold text-neutral-900 mb-1.5 flex items-center gap-1.5">
                    <Fuel className="w-4 h-4 text-orange-600" aria-hidden="true" />
                    <span>Combustível <span className="text-neutral-500 font-normal text-xs">(Opcional)</span></span>
                  </label>
                  <select
                    id="fuel-select"
                    value={form.fuelType}
                    onChange={(e) => setForm({ ...form, fuelType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-md border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Selecione, se souber</option>
                    <option value="Flex">Flex (Álcool / Gasolina)</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Etanol">Etanol</option>
                    <option value="Híbrido">Híbrido</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

              </div>

              {/* Field: Observações opcionais */}
              <div>
                <label htmlFor="notes-input" className="block text-sm font-semibold text-neutral-900 mb-1.5">
                  Observações complementares <span className="text-neutral-500 font-normal">(Opcional)</span>
                </label>
                <textarea
                  id="notes-input"
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Código do motor se souber, câmbio manual ou automático, etc."
                  className="w-full px-3.5 py-2.5 text-sm bg-white rounded-md border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-y"
                />
              </div>

              {/* Botões do formulário */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Preparar consulta</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 rounded-md transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Limpar</span>
                </button>
              </div>

              {/* Link discreto de privacidade */}
              <div className="pt-2 text-xs text-neutral-500">
                A consulta é preparada no seu navegador. Veja nossa{' '}
                <a href="/privacidade" className="text-orange-600 hover:underline">
                  Política de Privacidade
                </a>
                .
              </div>

            </form>
          </div>

          {/* Result / Output column */}
          <div id="resultado-consulta" className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="bg-neutral-900 text-white rounded-lg p-6 border border-neutral-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Mensagem da Consulta</span>
                </div>
                {hasGenerated && (
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Gerada
                  </span>
                )}
              </div>

              {hasGenerated ? (
                <div>
                  <p className="text-xs text-neutral-400 mb-2">
                    Você pode editar a mensagem antes de copiar:
                  </p>
                  <textarea
                    id="mensagem-gerada-textarea"
                    aria-label="Mensagem da consulta"
                    rows={8}
                    value={generatedMessage}
                    onChange={(e) => setGeneratedMessage(e.target.value)}
                    className="w-full bg-neutral-950 text-neutral-200 text-xs font-mono p-3 rounded border border-neutral-800 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors leading-relaxed"
                  />

                  {/* Actions for generated message */}
                  <div className="mt-4 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-white hover:bg-neutral-100 rounded-md transition-colors cursor-pointer shadow-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copiado com sucesso!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-neutral-700" />
                          <span>Copiar mensagem da consulta</span>
                        </>
                      )}
                    </button>

                    {/* WhatsApp Action or Honest "WhatsApp em breve" */}
                    {isWhatsAppConfigured ? (
                      <button
                        type="button"
                        onClick={() => {
                          const cleanNumber = businessConfig.whatsappNumber.replace(/\D/g, '');
                          const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(generatedMessage)}`;
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors cursor-pointer shadow-sm"
                      >
                        <span>Enviar consulta pelo WhatsApp</span>
                      </button>
                    ) : (
                      <div className="mt-2 p-3 bg-neutral-950 border border-neutral-800 rounded text-xs text-neutral-400 flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          <span className="font-semibold text-neutral-200 block">Atendimento por WhatsApp em breve</span>
                          Copie a mensagem acima para enviar assim que o canal for disponibilizado.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-12 px-4 text-center text-neutral-400">
                  <div className="w-12 h-12 mx-auto rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 mb-3">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-200">
                    Nenhuma consulta preparada ainda
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
                    Preencha a marca, modelo e ano do seu carro ao lado e clique em "Preparar consulta".
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
