import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const location = useLocation();

  // Detect scroll for the glassmorphic shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Format the time to look like a server clock (e.g., 14:05:32 UTC)
  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <header className={`ent-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        {/* LEFT: Live Timer Only */}
        <div className="header-left">
          <div className="system-status-mini">
            <span className="pulse-dot-mini"></span>
            <span className="status-text">{formattedTime} IST</span>
          </div>
        </div>

        {/* CENTER: Mega Menus */}
        <nav className="header-nav">
          
          {/* SOLUTIONS MEGA MENU */}
          <div className="nav-item group">
            <button className="nav-trigger">Solutions <span className="chevron">▼</span></button>
            <div className="mega-menu">
              <div className="mega-grid-2">
                <div className="mega-col">
                  <span className="mega-heading">CORE PLATFORM</span>
                  <Link to="/core-engine" className="mega-link">Immutable Audit Trail</Link>
                  <Link to="/integrations" className="mega-link">Data Integrity Verification</Link>
                  <Link to="/sdk-documentation" className="mega-link">SDK Integration</Link>
                  <Link to="/core-engine" className="mega-link">Cryptographic Evidence Layer</Link>
                </div>
                <div className="mega-col" style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px' }}>
                  <span className="mega-heading">ENTERPRISE</span>
                  <Link to="/security" className="mega-link">Compliance Readiness</Link>
                  <Link to="/security" className="mega-link">Internal Governance</Link>
                  <Link to="/core-engine" className="mega-link">Secure Change Tracking</Link>
                  <Link to="/integrations" className="mega-link">Multi-Team Monitoring</Link>
                </div>
              </div>
            </div>
          </div>

          {/* DEVELOPERS MEGA MENU */}
          <div className="nav-item group">
            <button className="nav-trigger">Developers <span className="chevron">▼</span></button>
            <div className="mega-menu mega-wide">
              <div className="mega-grid-3">
                <div className="mega-col">
                  <span className="mega-heading">GETTING STARTED</span>
                  <Link to="/sdk-documentation" className="mega-link">Quickstart</Link>
                  <Link to="/sdk-documentation" className="mega-link">SDKs (Python/Node/Go)</Link>
                </div>
                <div className="mega-col">
                  <span className="mega-heading">APIs & ARCHITECTURE</span>
                  <Link to="/api-reference" className="mega-link">REST API <span className="badge">v1.0</span></Link>
                  <Link to="/core-engine" className="mega-link">How EnKrypto Works</Link>
                </div>
                <div className="mega-col">
                  <span className="mega-heading">INFRASTRUCTURE</span>
                  <Link to="/security" className="mega-link">Encryption Model</Link>
                </div>
              </div>
            </div>
          </div>

          {/* COMPANY DROPDOWN */}
          <div className="nav-item group">
            <button className="nav-trigger">Company <span className="chevron">▼</span></button>
            <div className="mega-menu dropdown-small">
              <div className="mega-col">
                <Link to="/about" className="mega-link">About EnKrypto</Link>
                <Link to="/careers" className="mega-link">Careers <span className="badge-hiring">HIRING</span></Link>
                <Link to="/contact-sales" className="mega-link">Contact Sales</Link>
                <Link to="/privacy-policy" className="mega-link">Legal & Trust</Link>
              </div>
            </div>
          </div>

        </nav>

        {/* RIGHT: Conversion CTA Only */}
        <div className="header-right">
          <Link to="/#contact" className="btn-book-demo">
            <span>Book Demo</span>
          </Link>
        </div>

      </div>
    </header>
  );
}