import React from 'react';

export default function EngineSection() {
  const steps = [
    {
      id: "CLI",
      title: "Terminal",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      )
    },
    {
      id: "SDK",
      title: "Integration",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: "BACKEND",
      title: "Processing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: "LEDGER",
      title: "Anchoring",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      id: "VERIFY",
      title: "Verification",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="engine" className="engine-simple">
      <div className="ent-container">
        <div className="simple-engine-header reveal-up">
          <span className="section-label">System Architecture</span>
          <h2>A unified pipeline for cryptographic truth.</h2>
        </div>

        <div className="flow-wrapper reveal-up delay-1">
          {steps.map((step, index) => (
            <div key={step.id} className="flow-step">
              
              {/* Grouped Icon and Text to stack them */}
              <div className="step-node group">
                <div className="step-icon-box">
                  {step.icon}
                  <span className="step-number">0{index + 1}</span>
                </div>
                <div className="step-info">
                  <span className="step-id">{step.id}</span>
                  <h4>{step.title}</h4>
                </div>
              </div>
              
              {/* Static Arrow pushed to the right */}
              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <polyline points="15 5 22 12 15 19"></polyline>
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}