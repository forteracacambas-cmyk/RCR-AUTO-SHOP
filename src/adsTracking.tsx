import React, { useEffect, useState } from 'react';

const TAG = 'AW-18485377342';
const CONVERSION = TAG + '/_yMFCO_ztZcdEL7ywe5E';
const KEY = 'rcr-measurement-consent';
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }
export function measurementAllowed() { try { return localStorage.getItem(KEY) === 'accepted'; } catch { return false; } }
function startTag() {
  if (!measurementAllowed() || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (..._args: unknown[]) { window.dataLayer!.push(arguments); };
  window.gtag('consent', 'default', { ad_storage: 'denied', analytics_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  window.gtag('consent', 'update', { ad_storage: 'granted', analytics_storage: 'denied', ad_user_data: 'granted', ad_personalization: 'denied' });
  window.gtag('js', new Date());
  window.gtag('config', TAG, { allow_ad_personalization_signals: false });
  const script = document.createElement('script'); script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + TAG;
  document.head.appendChild(script);
}
export function trackWhatsApp(done: () => void) {
  if (!measurementAllowed() || !window.gtag) { done(); return; }
  let finished = false;
  const finish = () => { if (!finished) { finished = true; clearTimeout(timer); done(); } };
  const timer = setTimeout(finish, 1200);
  window.gtag('event', 'conversion', { send_to: CONVERSION, event_callback: finish, event_timeout: 1000 });
}
export const TrackingConsent: React.FC = () => {
  const [open, setOpen] = useState(() => { 
    try { 
      return localStorage.getItem(KEY) !== 'accepted'; 
    } catch { 
      return true; 
    } 
  });

  useEffect(() => {
    startTag();
    const handler = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest('a');
      if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      try {
        const url = new URL(link.href);
        if (url.hostname !== 'wa.me') return;
        if (!measurementAllowed()) return;
        event.preventDefault();
        trackWhatsApp(() => { window.location.assign(link.href); });
      } catch {
        // Ignore invalid URLs
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const acceptConsent = () => {
    try { 
      localStorage.setItem(KEY, 'accepted'); 
    } catch { 
      /* LocalStorage unavailable */ 
    }
    setOpen(false);
    startTag();
  };

  return (
    <>
      {open && (
        <div 
          role="dialog" 
          aria-label="Aviso de cookies e experiência do usuário" 
          className="fixed bottom-0 inset-x-0 z-50 border-t border-neutral-800 bg-neutral-900/98 backdrop-blur-md p-4 sm:p-5 shadow-2xl text-white animate-in fade-in duration-300"
        >
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="flex-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <span className="font-semibold text-white block mb-0.5 sm:inline sm:mb-0 sm:mr-1.5">Cookies e Experiência:</span>
              Utilizamos cookies e tecnologias de medição para entender melhor a sua experiência ao navegar em nosso site e aprimorar nossos serviços e atendimento.{' '}
              <a href="/privacidade" className="text-orange-400 hover:text-orange-300 underline font-medium">
                Política de Privacidade
              </a>.
            </div>
            <div className="flex items-center shrink-0">
              <button 
                onClick={acceptConsent} 
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                Aceitar medição
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
