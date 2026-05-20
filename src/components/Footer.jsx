import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="ent-container">
        
        <div className="footer-hero reveal-up">
          <h2 className="massive-brand">ENKRYPTO<span style={{color: '#353A3E'}}>.</span></h2>
          <div className="footer-status-badge">
            <span className="pulse-dot"></span>
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>

        <div className="footer-nav-grid reveal-up delay-1">
          {/* Column 1: Product */}
          <div className="nav-col">
            <h5>PRODUCT</h5>
            <Link to="/core-engine">Core Engine</Link>
            <Link to="/integrations">Integrations</Link>
          </div>
          
          {/* Column 2: Developers */}
          <div className="nav-col">
            <h5>DEVELOPERS</h5>
            <Link to="/sdk-documentation">SDK Documentation</Link>
            <Link to="/api-reference">API Reference</Link>
          </div>
          
          {/* Column 3: Company */}
          <div className="nav-col">
            <h5>COMPANY</h5>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact-sales">Contact Sales</Link>
          </div>

          {/* Column 4: Trust & Legal */}
          <div className="nav-col">
            <h5>TRUST & LEGAL</h5>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/security">Security / SOC2</Link>
          </div>
        </div>

        <div className="footer-bottom reveal-up delay-2">
          <div className="copyright">
            © 2026 ENKRYPTO LABS. <span className="dim-text">BUILT IN CHENNAI, INDIA.</span>
          </div>
          <div className="social-links">
            <a href="https://x.com" target="_blank" rel="noreferrer">X (TWITTER)</a>
            <a href="https://in.linkedin.com/company/enkryptolabs" target="_blank" rel="noreferrer">LINKEDIN</a>
          </div>
        </div>

      </div>
    </footer>
  );
}