import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';

// 12 Individual Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FounderPage from './pages/FounderPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import WhyPage from './pages/WhyPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import QualityPage from './pages/QualityPage';
import CommitmentPage from './pages/CommitmentPage';
import CredentialsPage from './pages/CredentialsPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';

// Scroll to Top on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Cinematic 5-Stage Intro Animation (Triggers on initial load / reload) */}
      <IntroAnimation />

      <ScrollToTop />
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Smooth Page Transition Route Container */}
      <div
        key={location.pathname}
        style={{
          flex: 1,
          animation: 'fadeInPage 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/why-first-brick" element={<WhyPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/commitment" element={<CommitmentPage />} />
          <Route path="/credentials" element={<CredentialsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>

      {/* Global Studio Footer */}
      <Footer />

      {/* Keyframe animation for smooth page transitions */}
      <style>{`
        @keyframes fadeInPage {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
