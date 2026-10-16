import React from 'react';
import { Building2, MapPin, MessageSquare } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchor = (anchorId: string) => {
    if (window.location.pathname !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(anchorId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <img src="https://eggxmquyojonumybuvir.supabase.co/storage/v1/object/public/rcr-site-media/rcr-logo-laranja.webp" alt="RCR Auto Shop — Motores Automotivos" width="800" height="300" loading="lazy" className="w-56 h-auto bg-white rounded-lg p-3" />
              
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
                Consulta e comercialização exclusiva de motores automotivos seminovos, com procedência, nota fiscal e garantia. Disponibilidade confirmada no atendimento.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-200 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleLink('/')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchor('como-funciona')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Como funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchor('sobre')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sobre a empresa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/condicoes-comerciais')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Condições Comerciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/contato')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contato
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/privacidade')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Cadastral Data */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-200 mb-4 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-orange-500" />
              <span>Identificação da Empresa</span>
            </h3>

            <div className="space-y-2.5 text-xs text-neutral-300 leading-relaxed bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/80">
              <div>
                <span className="text-neutral-500 block">Razão Social:</span>
                <span className="font-semibold text-neutral-200">{businessConfig.razaoSocial}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">CNPJ:</span>
                <span className="font-mono text-neutral-200">{businessConfig.cnpj}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Atendimento WhatsApp:</span>
                <a 
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de consultar a disponibilidade de um motor.')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 mt-0.5"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>{businessConfig.whatsappFormatted}</span>
                </a>
              </div>
              
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {businessConfig.razaoSocial}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3 text-neutral-400">
            <span>RCR AUTO SHOP</span>
            <span aria-hidden="true">·</span>
            <span>Motores Automotivos Seminovos</span>
          </div>
        </div>

      </div>
    </footer>
  );
};


