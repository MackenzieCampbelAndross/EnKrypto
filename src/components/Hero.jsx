import { useState } from 'react';

export default function Hero() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedInit, setCopiedInit] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'install') {
      setCopiedInstall(true);
      setTimeout(() => setCopiedInstall(false), 2000);
    } else {
      setCopiedInit(true);
      setTimeout(() => setCopiedInit(false), 2000);
    }
  };

  return (
    <section id="landing-content">
      <div className="hero-split">
        
        {/* LEFT COLUMN: PURE BRANDING */}
        <div className="hero-left">
          <h1 className="massive-title">
            EnKrypto<br />
            <span className="labs-text">Labs.</span>
          </h1>
          
          <a href="#contact" className="enter-btn interactive">Contact Sales</a>
        </div>

        {/* RIGHT COLUMN: CENTERED MAC TERMINAL */}
        <div className="hero-right">
          <div className="hero-terminal interactive">
            {/* Authentic macOS Header */}
            <div className="terminal-header">
              <div className="term-mac-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="term-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', opacity: 0.6}}>
                  <path d="M2 12h4l3-9 5 18 3-9h5"/>
                </svg>
                user@enkrypto: ~
              </div>
            </div>
            
            <div className="terminal-body">
              <div className="term-session-start">Last login: {new Date().toDateString()} on ttys000</div>
              
              {/* Command 1: Install */}
              <div className="term-block">
                <div className="term-comment"># Install core cryptographic engine</div>
                <div className="term-line">
                  <span className="term-prompt">user@ ~ %</span>
                  <code className="term-cmd">pip install enkrypto</code>
                  <button className="term-copy interactive" onClick={() => handleCopy('pip install enkrypto', 'install')} aria-label="Copy install command">
                    {copiedInstall ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F4F0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Command 2: Initialize */}
              <div className="term-block">
                <div className="term-comment"># Initialize global environment</div>
                <div className="term-line">
                  <span className="term-prompt">user@ ~ %</span>
                  <code className="term-cmd">enk</code>
                  <button className="term-copy interactive" onClick={() => handleCopy('enk', 'init')} aria-label="Copy init command">
                    {copiedInit ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F4F0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* HARDWARE-STYLED DOCS BUTTON */}
          <a href="/enkrypto-docs.pdf" target="_blank" rel="noopener noreferrer" className="docs-btn-premium interactive">
            <span>System Documentation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}