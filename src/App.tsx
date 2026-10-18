/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EngineShowcase } from './components/EngineShowcase';
import { ConsultSection } from './components/ConsultSection';
import { PreparationVideo } from './components/PreparationVideo';
import { WhatsAppCallout } from './components/WhatsAppCallout';
import { TransparencySection } from './components/TransparencySection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CommercialConditionsPage } from './pages/CommercialConditionsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { PageRoute } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const path = window.location.pathname;
    if (['/sobre', '/contato', '/condicoes-comerciais', '/privacidade'].includes(path)) {
      return path as PageRoute;
    }
    return '/';
  });

  // Keep state synced with browser history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (['/sobre', '/contato', '/condicoes-comerciais', '/privacidade'].includes(path)) {
        setCurrentRoute(path as PageRoute);
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    if (currentRoute !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const formEl = document.getElementById('formulario-consulta');
        formEl?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const formEl = document.getElementById('formulario-consulta');
      formEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-orange-600 selection:text-white">
      {/* Persistent Header with Top Bar Contract */}
      {currentRoute !== "/contato" && (
        <Header
          currentPage={currentRoute}
          onNavigate={navigateTo}
          onScrollToForm={scrollToForm}
        />
      )}

      {/* Main Content Area based on Current Route */}
      <main className="flex-1">
        {currentRoute === '/' && (
          <>
            <Hero onScrollToForm={scrollToForm} />
            <EngineShowcase />
            <PreparationVideo />
            <div id="como-funciona" className="scroll-mt-20"><ConsultSection /></div>
            <TransparencySection />
            <WhatsAppCallout />

            {/* Seção Sobre a Empresa na Landing Page */}
            <AboutSection onScrollToForm={scrollToForm} />

            {/* FAQ com as 9 perguntas */}
            <FaqSection />
            <WhatsAppCallout final />
          </>
        )}

        {currentRoute === '/sobre' && (
          <AboutPage onNavigate={navigateTo} onScrollToForm={scrollToForm} />
        )}

        {currentRoute === '/contato' && (
          <ContactPage onNavigate={navigateTo} onScrollToForm={scrollToForm} />
        )}

        {currentRoute === '/condicoes-comerciais' && (
          <CommercialConditionsPage onNavigate={navigateTo} onScrollToForm={scrollToForm} />
        )}

        {currentRoute === '/privacidade' && (
          <PrivacyPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Complete Footer with Cadastral Data & Navigation */}
      {currentRoute !== "/contato" && (
        <Footer onNavigate={navigateTo} />
      )}

      {/* Mobile Sticky CTA Cap <= 15% Viewport */}
      {currentRoute === '/' && (
        <MobileStickyCta onScrollToForm={scrollToForm} />
      )}
    </div>
  );
}


