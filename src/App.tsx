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
import { CommercialOrientation } from './components/CommercialOrientation';
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
      {/* Discreet Persistent Header with Top Bar Contract */}
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

            {/* 4. Engine Identification Guidance (No documents required) */}
            <EngineGuidance />

            {/* 5. Commercial Orientation & Transparency Guidelines */}
            <CommercialOrientation />

            {/* 6. FAQ Section */}
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

      {/* Complete Footer with Cadastral Data & Disclaimer */}
      <Footer onNavigate={navigateTo} />

      <TrackingConsent />

      {/* Mobile Sticky CTA Cap <= 15% Viewport */}
      {currentRoute === '/' && (
        <MobileStickyCta onScrollToForm={scrollToForm} />
      )}
    </div>
  );
}
