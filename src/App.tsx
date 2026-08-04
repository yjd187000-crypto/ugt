import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { CompanyBrochureModal } from './components/layout/CompanyBrochureModal';
import { GlobalSearchModal } from './components/layout/GlobalSearchModal';
import { ChatbotWidget } from './components/layout/ChatbotWidget';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BusinessPage } from './pages/BusinessPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-900">
      <ScrollToTop />

      <Header
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenContact={handleOpenContact}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenBrochure={() => setIsBrochureOpen(true)} />}
          />
          <Route
            path="/business"
            element={<BusinessPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage onOpenContact={handleOpenContact} />}
          />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer onOpenBrochure={() => setIsBrochureOpen(true)} />

      <MobileBottomNav />

      {/* Floating AI Chatbot Widget */}
      <ChatbotWidget
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Global Modals */}
      <CompanyBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
