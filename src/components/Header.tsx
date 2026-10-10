import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onScrollToForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onScrollToForm,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsultClick = () => {
    setMobileMenuOpen(false);
    if (currentPage !== '/') {
      onNavigate('/');
      setTimeout(() => {
        onScrollToForm();
      }, 100);
    } else {
      onScrollToForm();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-1 shrink-0"
            aria-label="RCR AUTO SHOP - Página Inicial"
          >
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-orange-400 transition-colors">
              RCR <span className="text-orange-500 font-semibold tracking-normal text-lg">AUTO SHOP</span>
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300"
            aria-label="Navegação Principal"
          >
            <button
              onClick={() => handleNavClick('/')}
              className={`hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 border-b-2 ${
                currentPage === '/' ? 'text-white border-orange-500' : 'border-transparent'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => {
                if (currentPage !== '/') {
                  onNavigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('como-identificar');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 120);
                } else {
                  const el = document.getElementById('como-identificar');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 border-b-2 border-transparent text-neutral-300"
            >
              Como Identificar
            </button>
            <button
              onClick={() => handleNavClick('/sobre')}
              className={`hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 border-b-2 ${
                currentPage === '/sobre' ? 'text-white border-orange-500' : 'border-transparent'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick('/condicoes-comerciais')}
              className={`hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 border-b-2 ${
                currentPage === '/condicoes-comerciais' ? 'text-white border-orange-500' : 'border-transparent'
              }`}
            >
              Condições Comerciais
            </button>
            <button
              onClick={() => handleNavClick('/contato')}
              className={`hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 border-b-2 ${
                currentPage === '/contato' ? 'text-white border-orange-500' : 'border-transparent'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={handleConsultClick}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Consultar disponibilidade</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs bg-neutral-900 border-l border-neutral-800 h-full p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="font-extrabold text-lg text-white">
                  RCR <span className="text-orange-500 font-semibold">AUTO SHOP</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-md"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-3">
                <button
                  onClick={() => handleNavClick('/')}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    currentPage === '/' ? 'bg-orange-600/10 text-orange-400' : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  Início
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (currentPage !== '/') {
                      onNavigate('/');
                      setTimeout(() => {
                        document.getElementById('como-identificar')?.scrollIntoView({ behavior: 'smooth' });
                      }, 120);
                    } else {
                      document.getElementById('como-identificar')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left px-3 py-2.5 rounded-md text-sm font-medium text-neutral-300 hover:bg-neutral-800"
                >
                  Como Identificar o Motor
                </button>
                <button
                  onClick={() => handleNavClick('/sobre')}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    currentPage === '/sobre' ? 'bg-orange-600/10 text-orange-400' : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  Sobre a Empresa
                </button>
                <button
                  onClick={() => handleNavClick('/condicoes-comerciais')}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    currentPage === '/condicoes-comerciais' ? 'bg-orange-600/10 text-orange-400' : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  Condições Comerciais
                </button>
                <button
                  onClick={() => handleNavClick('/contato')}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    currentPage === '/contato' ? 'bg-orange-600/10 text-orange-400' : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  Contato
                </button>
                <button
                  onClick={() => handleNavClick('/privacidade')}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    currentPage === '/privacidade' ? 'bg-orange-600/10 text-orange-400' : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  Política de Privacidade
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-neutral-800">
              <button
                onClick={handleConsultClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-orange-600 text-white font-semibold text-sm hover:bg-orange-500 transition-colors"
              >
                <span>Consultar disponibilidade</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
