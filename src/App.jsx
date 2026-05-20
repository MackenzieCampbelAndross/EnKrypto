import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Global Components
import Cursor from './components/Cursor';
import Header from './components/Header';
import Footer from './components/Footer';

// Landing Page Sections
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import EngineSection from './components/EngineSection';
import DashboardSection from './components/DashboardSection';
import QuestionsSection from './components/QuestionsSection';
import ContactSection from './components/ContactSection';

// Bespoke Inner Pages
import { 
  CoreEngine, Integrations, 
  SdkDocumentation, ApiReference, 
  About, Careers, ContactSales, 
  PrivacyPolicy, TermsOfService, SecurityPage 
} from './components/Pages';

import './index.css';

// --- THE MAIN LANDING PAGE ---
function LandingPage() {
  const location = useLocation();

  // 1. Hash Routing Logic (For the "Return to HQ" button)
  useEffect(() => {
    if (location.hash) {
      // Small timeout ensures the DOM is painted before attempting to scroll
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // 2. Seamless Scroll Themes & Scroll Animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      document.body.classList.remove('theme-hero', 'theme-problem', 'theme-engine', 'theme-dashboard');

      if (scrollY < vh * 0.5) {
        document.body.classList.add('theme-hero');
      } else if (scrollY < vh * 1.5) {
        document.body.classList.add('theme-problem');
      } else if (scrollY < vh * 2.5) {
        document.body.classList.add('theme-engine');
      } else {
        document.body.classList.add('theme-dashboard');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state on load

    // Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.15 });

    setTimeout(() => {
      document.querySelectorAll('.reveal-up, .reveal-width').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="landing-content">
        <Hero />
      </div>
      <main id="enterprise-narrative">
        <ProblemSection />
        <EngineSection />
        <DashboardSection />
        <QuestionsSection />
        <ContactSection />
      </main>
    </>
  );
}

// --- THE MASTER APP ROUTER ---
export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Header />
      
      <Routes>
        {/* Main Landing Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* PRODUCT ROUTES */}
        <Route path="/core-engine" element={<CoreEngine />} />
        <Route path="/integrations" element={<Integrations />} />
        
        {/* DEVELOPERS ROUTES */}
        <Route path="/sdk-documentation" element={<SdkDocumentation />} />
        <Route path="/api-reference" element={<ApiReference />} />
        
        {/* COMPANY ROUTES */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        
        {/* TRUST & LEGAL ROUTES */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}