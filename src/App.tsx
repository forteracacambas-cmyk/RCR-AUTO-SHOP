/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThreeSteps } from './components/ThreeSteps';
import { EngineGuidance } from './components/EngineGuidance';
import { InquiryForm } from './components/InquiryForm';
import { StockAndCondition } from './components/StockAndCondition';
import { TransparencySection } from './components/TransparencySection';
import { CommercialOrientation } from './components/CommercialOrientation';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CommercialConditionsPage } from './pages/CommercialConditionsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { PageRoute } from './types';
import { TrackingConsent } from './adsTracking';

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
      <Header
        currentPage={currentRoute}
        onNavigate={navigateTo}
        onScrollToForm={scrollToForm}
      />

      {/* Main Content Area based on Current Route */}
      <main className="flex-1">
        {currentRoute === '/' && (
          <>
            <Hero onScrollToForm={scrollToForm} />
            <ThreeSteps onScrollToForm={scrollToForm} />
            <InquiryForm />

            {/* Nova Seção: Disponibilidade e Condição dos Motores */}
            <StockAndCondition />

            {/* Nova Seção: Transparência na Consulta */}
            <TransparencySection />

            {/* Como Identificar os Dados do Motor */}
            <EngineGuidance />

            {/* Como Conduzimos Cada Atendimento */}
            <CommercialOrientation />

            {/* Seção Sobre a Empresa na Landing Page */}
            <AboutSection onScrollToForm={scrollToForm} />

            {/* FAQ com as 9 perguntas */}
            <FaqSection />
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
      <Footer onNavigate={navigateTo} />

      <TrackingConsent />

      {/* Mobile Sticky CTA Cap <= 15% Viewport */}
      {currentRoute === '/' && (
        <MobileStickyCta onScrollToForm={scrollToForm} />
      )}
    </div>
  );
}
