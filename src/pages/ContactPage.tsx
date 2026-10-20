import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { PageRoute } from '../types';

/* ==========================================================================
   CONFIGURAÇÕES FÁCEIS PARA VOCÊ EDITAR OU SUBSTITUIR RAPIDAMENTE:
   ========================================================================== */

// 1. LOGO DA LOJA (Formato redondo no topo)
const LOGO_LOJA_URL =
  'https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/rcr-logo-laranja.webp';

// 2. FOTO REAL DA LOJA / ESTOQUE
const FOTO_LOJA_URL =
  'https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/motores-prateleiras.webp';

// 3. FOTO DA FACHADA DA EMPRESA
const FOTO_FACHADA_URL =
  'https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/rcr-fachada-simulacao.webp';

// 4. ATENDENTE VIRTUAL (FOTO / AVATAR DA PERSONAGEM)
const FOTO_ATENDENTE_URL =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80';
const NOME_ATENDENTE = 'Juliana · Atendimento RCR';

// 5. NOME DA LOJA
const NOME_DA_LOJA = 'RCR AUTO SHOP MOTORES';

// 6. NÚMERO DO WHATSAPP (Apenas números com DDI + DDD)
const NUMERO_WHATSAPP = businessConfig.whatsappNumber; // 553198825498

// 7. MENSAGEM AUTOMÁTICA PADRÃO DO WHATSAPP
const MENSAGEM_WHATSAPP = 'Olá, gostaria de consultar a disponibilidade de um motor de veículo? E preço?';

// 8. EXEMPLOS DE MOTORES COM CONSULTA DE VALORES E DISPONIBILIDADE
const MOTORES_EXEMPLOS = [
  {
    nome: 'Fastback 1.0',
    ano: '2024',
    imagem:
      'https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/fiat-fastback-2024.webp',
  },
  {
    nome: 'Focus 2.0',
    ano: '2018',
    imagem:
      'https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/ford-focus-2018.webp',
  },
  {
    nome: 'C3 1.5',
    ano: '2015',
    imagem:
      'https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/citroen-c3-2015.webp',
  },
  {
    nome: 'CrossFox 1.6',
    ano: '2013',
    imagem:
      'https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/vw-crossfox-2013.webp',
  },
];

interface ContactPageProps {
  onNavigate?: (route: PageRoute) => void;
  onScrollToForm?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [horaAtual, setHoraAtual] = useState('');
  
  // Estados para simular a digitação e aparição sequencial
  const [step, setStep] = useState<number>(0);
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const buttonRef = useRef<HTMLAnchorElement>(null); 
  // 0: digitando primeira mensagem
  // 1: primeira mensagem revelada, digitando segunda
  // 2: segunda mensagem revelada, botão liberado com animação

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Consulte seu Motor | RCR Auto Shop';

    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc?.getAttribute('content') || '';

    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Consulte motores disponíveis para seu veículo. Fale diretamente com nossa equipe pelo WhatsApp.'
      );
    }

    const agora = new Date();
    setHoraAtual(
      agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    );

    // Sequência de digitação:
    // Passo 1: digita por 1.2s -> mostra mensagem 1
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 1200);

    // Passo 2: após 1.4s digitando a segunda mensagem -> mostra mensagem 2 e botão pulsando
    const timer2 = setTimeout(() => {
      setStep(2);
    }, 2800);

    // Após 10 segundos, anima o botão com carregamento e aciona o clique do link como clique real do usuário
    const autoClickTimer = setTimeout(() => {
      setIsRedirecting(true);
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.click();
        }
      }, 800);
    }, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(autoClickTimer);
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  const cleanNumber = NUMERO_WHATSAPP.replace(/\D/g, '');
  const mainWhatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    MENSAGEM_WHATSAPP
  )}`;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F0F2F5] text-neutral-800 flex flex-col items-center justify-start px-3 py-6 sm:py-10 selection:bg-emerald-600 selection:text-white">
      {/* Container Central LinkBio estilo Chat do WhatsApp */}
      <main className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-neutral-900/5 border border-neutral-200/80 p-4 sm:p-6 flex flex-col items-center text-center">
        
        {/* 1. LOGO DA LOJA REDONDO NO TOPO */}
        <div className="relative mb-2 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-orange-500/30 p-1 bg-white shadow-md flex items-center justify-center">
            <img
              src={LOGO_LOJA_URL}
              alt={`Logo ${NOME_DA_LOJA}`}
              width="96"
              height="96"
              fetchPriority="high"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <span
            className="absolute bottom-0.5 right-0.5 bg-emerald-500 text-white rounded-full p-1 shadow-sm"
            title="Atendimento Verificado"
            aria-label="Verificado"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* 2. NOME DA LOJA */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-950">
          {NOME_DA_LOJA}
        </h1>
                {/* BADGE DE GRANDE DESTAQUE: MOTORES NOVOS E SEMINOVOS COM 12 MESES DE GARANTIA */}
        <div className="w-full mt-3 p-3 rounded-2xl bg-gradient-to-r from-orange-500/15 via-emerald-500/15 to-orange-500/15 border-2 border-orange-500/40 shadow-sm flex flex-col items-center justify-center text-center gap-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Garantia Total de 12 Meses</span>
          </div>
          <p className="text-sm sm:text-base font-extrabold text-neutral-900 mt-1">
            MOTORES NOVOS E SEMINOVOS
          </p>
          <p className="text-[11px] sm:text-xs font-semibold text-neutral-600">
            Com procedência garantida, nota fiscal e 1 ano de garantia para o seu veículo
          </p>
        </div>

        {/* 3. FOTO REAL DA LOJA / ESTOQUE DE MOTORES */}
        <div className="w-full mt-4 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm">
          <img
            src={FOTO_LOJA_URL}
            alt="Motores em estoque organizados na loja"
            width="720"
            height="480"
            className="w-full aspect-[16/10] object-cover"
          />
          <div className="bg-neutral-50 px-3 py-1.5 text-[11px] text-neutral-600 font-medium border-t border-neutral-200 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Motores novos e seminovos com garantia de 12 meses e nota fiscal</span>
          </div>
        </div>

        {/* 4. CHAT INTERATIVO COM A PERSONAGEM ATENDENTE E ANIMAÇÃO DE DIGITANDO */}
        <div className="w-full mt-5 rounded-2xl border border-neutral-200 bg-[#EFEAE2] p-3 sm:p-4 text-left shadow-inner">
          {/* Header do Chat / Atendente */}
          <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-300/60">
            <div className="relative">
              <img
                src={FOTO_ATENDENTE_URL}
                alt={NOME_ATENDENTE}
                className="w-10 h-10 rounded-full object-cover border border-emerald-500 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-bold text-neutral-900">{NOME_ATENDENTE}</p>
              <p className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {step < 2 ? 'digitando...' : 'online agora'}
              </p>
            </div>
          </div>

          {/* Balão 1: Se ainda não carregou, mostra efeito de 3 pontinhos digitando */}
          {step === 0 ? (
            <div className="mt-3 inline-flex items-center gap-1.5 bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm border border-neutral-200/80 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" />
            </div>
          ) : (
            <div className="mt-3 bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm border border-neutral-200/80 text-xs text-neutral-800 leading-relaxed space-y-2 transition-all duration-300">
              <p className="font-semibold text-neutral-900">
                Olá, bem-vindo à <strong>RCR AUTO SHOP MOTORES</strong>! 👋
              </p>
              <p>
                Se você procura por motor de veículo está no lugar certo, trabalhamos com <strong>motores novos e seminovos</strong>, com procedência, <strong>garantia de 12 meses</strong> e nota fiscal.
              </p>
              <div className="text-[9px] text-neutral-400 text-right font-mono">
                {horaAtual || '09:30'} ✓✓
              </div>
            </div>
          )}

          {/* Balão 2: Mostra efeito digitando no step 1, e exibe o balão verde no step 2 */}
          {step === 1 && (
            <div className="mt-2.5 inline-flex items-center gap-1.5 bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm border border-neutral-200/80 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" />
            </div>
          )}

          {step >= 2 && (
            <div className="mt-2.5 bg-[#DCF8C6] rounded-2xl rounded-tl-sm p-3 shadow-sm border border-emerald-200 text-xs text-neutral-900 leading-relaxed space-y-2 transition-all duration-300">
              <p className="font-medium">
                Quer consultar <strong>disponibilidade e preço</strong>? Chame a gente no WhatsApp, fale conosco, estamos prontos para atender e ajudar!
              </p>
              <div className="text-[9px] text-neutral-500 text-right font-mono">
                {horaAtual || '09:31'} ✓✓
              </div>
            </div>
          )}
        </div>

        {/* 5. BOTÃO PRINCIPAL VERDE DO WHATSAPP ELEGANTE E SEM EXPANSÃO LATERAL */}
        <div className="w-full mt-5">
          <a
            ref={buttonRef}
            href={mainWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={"group w-full min-h-[58px] sm:min-h-[62px] flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg shadow-emerald-600/30 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 no-underline cursor-pointer " + (isRedirecting ? "bg-[#1fa851]" : "")}
          >
            {isRedirecting ? (
              <>
                <svg className="w-6 h-6 animate-spin text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span className="text-sm sm:text-base tracking-wide animate-pulse">Redirecionando para nossos atendentes...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-6 h-6 fill-current shrink-0 transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Consultar motor no WhatsApp</span>
              </>
            )}
          </a>
        </div>

        {/* 6. FOTOS DOS MOTORES COM CONSULTA DE VALORES E DISPONIBILIDADE */}
        <div className="w-full mt-6 pt-5 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-3 text-left">
            <div>
              <p className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                Exemplos de Motores
              </p>
              <p className="text-[11px] text-neutral-500">
                Toque para consultar valores e disponibilidade:
              </p>
            </div>
            <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">
              Sob consulta
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {MOTORES_EXEMPLOS.map((item) => {
              const itemWhatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
                `Olá! Vi o motor ${item.nome} (${item.ano}) na página de contato e gostaria de consultar a disponibilidade e o valor para o meu veículo.`
              )}`;

              return (
                <a
                  key={item.nome}
                  href={itemWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-neutral-200 bg-neutral-50/70 hover:bg-neutral-100/90 p-2 text-left transition-all hover:border-emerald-400 no-underline"
                >
                  <div className="aspect-[4/3] w-full rounded-lg bg-white overflow-hidden border border-neutral-200/80 mb-2">
                    <img
                      src={item.imagem}
                      alt={`Motor ${item.nome}`}
                      width="200"
                      height="150"
                      loading="lazy"
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-xs font-bold text-neutral-900 truncate">
                    {item.nome}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Ano {item.ano}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between text-[11px] font-bold text-emerald-700">
                    <span>Consultar valor</span>
                    <span className="text-xs">→</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* 7. FOTO DA FACHADA DA LOJA */}
        <div className="w-full mt-6 pt-5 border-t border-neutral-200 text-center">
          <div className="rounded-xl overflow-hidden border border-neutral-200 mb-3">
            <img
              src={FOTO_FACHADA_URL}
              alt="Fachada RCR Auto Shop"
              width="600"
              height="350"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-[11px] text-neutral-500">
            CNPJ: {businessConfig.cnpj} · {businessConfig.razaoSocial}
          </p>
          <p className="text-[10px] text-neutral-400 mt-1">
            Motores novos e seminovos com 12 meses de garantia e nota fiscal.
          </p>
        </div>

      </main>

      {/* Rodapé discreto */}
      <footer className="mt-6 text-center text-[11px] text-neutral-500">
        <p>© {new Date().getFullYear()} {NOME_DA_LOJA}. Todos os direitos reservados.</p>
        <a
          href="/"
          className="text-neutral-500 hover:text-neutral-700 underline mt-1 inline-block"
        >
          Ir para a página principal
        </a>
      </footer>
    </div>
  );
};
