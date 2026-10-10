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
  const [open, setOpen] = useState(() => { try { return !localStorage.getItem(KEY); } catch { return true; } });
  useEffect(() => {
    startTag();
    const handler = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest('a');
      if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href);
      if (url.hostname !== 'wa.me') return;
      if (!measurementAllowed()) return;
      event.preventDefault();
      trackWhatsApp(() => { window.location.assign(link.href); });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  const choose = (accepted: boolean) => {
    try { localStorage.setItem(KEY, accepted ? 'accepted' : 'rejected'); } catch { /* Continue without measurement. */ }
    setOpen(false);
    if (accepted) startTag();
    else if (window.gtag) window.location.reload();
  };
  return <>
    <div className="bg-neutral-950 px-4 py-3 text-center"><button onClick={() => setOpen(true)} className="text-xs text-neutral-300 underline cursor-pointer">Preferências de cookies</button></div>
    {open && <div role="dialog" aria-label="Preferências de privacidade" className="fixed bottom-0 inset-x-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row gap-3 sm:items-center">
        <p className="flex-1 text-xs text-neutral-600">Podemos usar cookies do Google Ads para medir os contatos iniciados pelo site. Você pode aceitar ou continuar sem medição. <a href="/privacidade" className="underline">Política de Privacidade</a>.</p>
        <button onClick={() => choose(false)} className="rounded-lg border border-neutral-300 px-4 py-2 text-sm cursor-pointer">Continuar sem medição</button>
        <button onClick={() => choose(true)} className="rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white cursor-pointer">Aceitar medição</button>
      </div>
    </div>}
  </>;
};
