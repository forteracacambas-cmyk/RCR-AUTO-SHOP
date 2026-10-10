import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface MobileStickyCtaProps {
  onScrollToForm: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onScrollToForm }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        const formEl = document.getElementById('formulario-consulta');
        if (formEl) {
          const rect = formEl.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 100) {
            setVisible(false);
            return;
          }
        }
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-neutral-950/90 backdrop-blur-md border-t border-neutral-800 transition-transform duration-200 shadow-lg"
      style={{ maxHeight: '60px' }}
      aria-label="Ação rápida móvel"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3 px-1">
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-mono text-neutral-400 leading-tight">RCR AUTO SHOP</span>
          <span className="text-xs font-bold text-white leading-tight">Motores Usados</span>
        </div>
        <button
          onClick={onScrollToForm}
          className="inline-flex items-center gap-1.5 py-2 px-3.5 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
          <span>CONSULTAR</span>
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
