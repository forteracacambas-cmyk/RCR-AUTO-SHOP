import React, { useEffect, useRef, useState } from 'react';
import { Check, MessageSquare, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export function PreparationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let inView = false;
    const updatePlayback = () => {
      if (inView && !document.hidden) {
        void video.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      updatePlayback();
    }, { threshold: [0, 0.35, 0.6] });
    observer.observe(video);
    document.addEventListener('visibilitychange', updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updatePlayback);
      video.pause();
    };
  }, []);

  return (
    <section id="preparo-envio" className="py-14 sm:py-20 bg-[#f6f3ef] border-b border-neutral-200 scroll-mt-24" aria-labelledby="preparo-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <figure className="w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-950 shadow-lg shadow-neutral-900/10">
          <video ref={videoRef} controls playsInline loop muted={muted} preload="none" poster="https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/preparo-motor-poster.webp" onVolumeChange={() => setMuted(videoRef.current?.muted ?? true)} className="w-full aspect-[9/16] object-contain" aria-label="Vídeo de preparo de motor para envio">
            <source src="https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/preparo-envio-motor.mp4" type="video/mp4" />
            Seu navegador não reproduz este vídeo. <a href="https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/preparo-envio-motor.mp4">Abrir vídeo de preparo do motor</a>.
          </video>
          <figcaption className="px-4 py-3 text-xs text-neutral-300 flex items-center justify-between gap-3"><span>Preparo do motor para envio.</span><button type="button" onClick={() => setMuted(!muted)} aria-label={muted ? 'Ativar som do vídeo' : 'Silenciar vídeo'} className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-neutral-600 px-3 py-2 text-white hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-orange-500 shrink-0">{muted ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}{muted ? 'Ativar som' : 'Silenciar'}</button></figcaption>
        </figure>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Preparo e envio</p>
          <h2 id="preparo-titulo" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">Mais detalhes para você decidir com segurança.</h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">Veja o preparo no vídeo e tire suas dúvidas com a equipe. Antes de concluir a compra, consulte as informações da unidade e as condições de envio para a sua cidade.</p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-700">{['Peça fotos e detalhes do motor consultado.', 'Confira os itens que acompanham a unidade.', 'Consulte frete, prazo e condições de garantia.'].map(text=><li key={text} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0 text-orange-600" aria-hidden="true" />{text}</li>)}</ul>
          <a href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Olá, RCR AUTO SHOP! Vi o vídeo de preparo do motor no site e gostaria de consultar um motor e as condições de envio para minha cidade.')}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 px-5 py-3 text-white font-bold text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"><MessageSquare className="w-4 h-4" aria-hidden="true" />Consultar motor e envio<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}


