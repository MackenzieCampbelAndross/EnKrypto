import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- SHARED WRAPPER COMPONENT ---
const PageLayout = ({ category, title, subtitle, children }) => {
  useEffect(() => {
    // This forces the browser to start at the top of the new webpage
    window.scrollTo(0, 0);
    // This locks the void black background for the new webpages
    document.body.className = 'theme-dashboard'; 
  }, [title]);

  return (
    <div style={{ minHeight: '100vh', background: '#050505', color: '#F5F4F0', padding: '12rem 2rem 8rem 2rem' }}>
      <div className="ent-container">
        
        {/* The Return Button */}
        <Link to="/#footer" style={{ color: '#888', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4rem', display: 'inline-block', transition: 'color 0.3s' }}>
          ← Return to HQ
        </Link>
        
        {/* THE FIX: Removed 'reveal-up' so this text is actually visible */}
        <div style={{ animation: 'fadeIn 0.8s ease forwards' }}>
          <span className="section-label" style={{ color: '#CBCBCB', display: 'block', marginBottom: '1rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {category}
          </span>
          
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1, margin: '0 0 2rem 0', color: '#F5F4F0' }}>
            {title}<span style={{ color: '#353A3E' }}>.</span>
          </h1>
          
          {subtitle && (
            <p style={{ fontSize: '1.5rem', color: '#888', maxWidth: '800px', marginBottom: '5rem', lineHeight: 1.4 }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* THE FIX: Removed 'reveal-up' here too so your content loads */}
        <div style={{ animation: 'fadeIn 1.2s ease forwards' }}>
          {children}
        </div>
        
      </div>
    </div>
  );
};

// ... Keep all your exported page components (CoreEngine, Integrations, etc.) below this exactly the same!

// ==========================================
// PRODUCT PAGES
// ==========================================

export function CoreEngine() {
  return (
    <PageLayout category="Product" title="Core Engine" subtitle="Continuous proof for every data state.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', borderTop: '1px solid #1a1a1a', paddingTop: '4rem' }}>
        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Overview</h3>
          <p style={{ color: '#CBCBCB', fontSize: '1.1rem', lineHeight: 1.8 }}>EnKrypto’s Core Engine operates at the data layer, capturing every change as it happens. Each modification is encrypted, converted into a verifiable state, and recorded immutably.<br/><br/>No snapshots. No manual logging. Only a continuous, tamper-evident history.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Key Capabilities</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#CBCBCB', fontSize: '1.1rem', lineHeight: 2 }}>
            <li style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '1rem', marginBottom: '1rem' }}>✦ Real-time state capture at the source</li>
            <li style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '1rem', marginBottom: '1rem' }}>✦ Cryptographic hashing of every change</li>
            <li style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '1rem', marginBottom: '1rem' }}>✦ Immutable append-only record</li>
            <li style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '1rem', marginBottom: '1rem' }}>✦ Zero exposure of raw data</li>
            <li>✦ Independent verification at any point</li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: '4rem', padding: '3rem', background: '#161616', borderRadius: '16px', border: '1px solid #292929' }}>
        <h4 style={{ fontFamily: 'var(--font-mono)', color: '#888', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>The Outcome</h4>
        <p style={{ fontSize: '1.5rem', fontWeight: 500 }}>A system where data integrity is provable, not assumed.</p>
      </div>
    </PageLayout>
  );
}

export function Integrations() {
  return (
    <PageLayout category="Product" title="Integrations" subtitle="Works seamlessly with your existing stack.">
      <div style={{ maxWidth: '800px', marginBottom: '5rem' }}>
        <p style={{ color: '#CBCBCB', fontSize: '1.2rem', lineHeight: 1.8 }}>EnKrypto integrates directly into your application layer without disrupting workflows. It passively observes and records state transitions across your system. Designed to be infrastructure, not overhead.</p>
      </div>
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: '#888' }}>Supported Environments</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {['Backend Services (Node, Python, Java)', 'SQL & NoSQL Databases', 'File Systems & Doc Pipelines', 'Cloud & Distributed Systems'].map(env => (
          <div key={env} style={{ padding: '2rem', background: '#111', border: '1px solid #222', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 500 }}>{env}</div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', borderTop: '1px solid #1a1a1a', paddingTop: '4rem' }}>
        <div>
          <h4 style={{ color: '#888', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>WHAT CHANGES</h4>
          <p style={{ color: '#CBCBCB', lineHeight: 2 }}>✓ No workflow disruption<br/>✓ No user retraining<br/>✓ No dependency on external storage</p>
        </div>
        <div>
          <h4 style={{ color: '#888', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>WHAT IMPROVES</h4>
          <p style={{ color: '#4ade80', lineHeight: 2 }}>↗ Verifiability<br/>↗ Audit readiness<br/>↗ System trust</p>
        </div>
      </div>
    </PageLayout>
  );
}

// ==========================================
// DEVELOPERS PAGES
// ==========================================

export function SdkDocumentation() {
  return (
    <PageLayout category="Developers" title="SDK Docs" subtitle="Integrate in minutes.">
      <p style={{ color: '#CBCBCB', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '800px', marginBottom: '4rem' }}>The EnKrypto SDK hooks into your system to track and secure data changes automatically. Minimal configuration, maximum coverage.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
        <div style={{ background: '#161616', padding: '3rem', borderRadius: '16px', border: '1px solid #292929' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>What the SDK does</h3>
          <ul style={{ color: '#CBCBCB', lineHeight: 2.2, fontSize: '1.1rem' }}>
            <li>Intercepts data mutations at the application layer</li>
            <li>Encrypts state changes locally</li>
            <li>Generates deterministic hashes</li>
            <li>Sends proof metadata to the backend anonymously</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Design Principles</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#888', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            <span>[01] Lightweight & non-intrusive</span>
            <span>[02] Language agnostic</span>
            <span>[03] Fail-safe operation</span>
            <span>[04] Zero performance degradation</span>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '4rem', padding: '2rem', background: '#F5F4F0', color: '#161616', borderRadius: '12px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
        QUICK START FLOW: INSTALL → CONFIGURE → VERIFY
      </div>
    </PageLayout>
  );
}

export function ApiReference() {
  return (
    <PageLayout category="Developers" title="API Reference" subtitle="Direct access to verification infrastructure.">
      <p style={{ color: '#CBCBCB', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '800px', marginBottom: '4rem' }}>The EnKrypto API allows you to query, verify, and audit data states programmatically. Every response is backed by cryptographic proof.</p>
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Core Endpoints</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '5rem' }}>
        {['POST /api/v1/proof/submit', 'GET /api/v1/states/historical', 'POST /api/v1/verify/integrity', 'GET /api/v1/audit/trail'].map(ep => (
          <div key={ep} style={{ padding: '1.5rem', background: '#111', border: '1px solid #222', borderRadius: '8px', fontFamily: 'var(--font-mono)', color: '#4ade80' }}>
            {ep}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// ==========================================
// COMPANY PAGES
// ==========================================

export function About() {
  return (
    <PageLayout category="Company" title="About Us" subtitle="Trust should be built into systems, not assumed.">
      <div style={{ maxWidth: '800px' }}>
        <p style={{ color: '#CBCBCB', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>EnKrypto is building infrastructure for verifiable data integrity. In a world where data drives decisions, the ability to prove its authenticity is no longer optional.</p>
        <p style={{ color: '#CBCBCB', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '4rem' }}>We enable systems to generate continuous, tamper-proof evidence of correctness without exposing the data itself.</p>
        
        <div style={{ borderLeft: '4px solid #F5F4F0', paddingLeft: '2rem', marginBottom: '4rem' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', color: '#888', marginBottom: '1rem', letterSpacing: '0.1em' }}>OUR VISION</h4>
          <p style={{ fontSize: '1.8rem', fontWeight: 400 }}>A digital ecosystem where every critical action is independently verifiable.</p>
        </div>
        
        <div style={{ padding: '2rem', background: '#161616', borderRadius: '12px', border: '1px solid #292929' }}>
          <span style={{ color: '#888', fontFamily: 'var(--font-mono)' }}>POSITIONING</span>
          <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Not storage. Not security tooling. <strong>A new layer: proof infrastructure.</strong></p>
        </div>
      </div>
    </PageLayout>
  );
}

export function Careers() {
  return (
    <PageLayout category="Company" title="Careers" subtitle="Build the trust layer of the internet.">
      <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
        <p style={{ color: '#CBCBCB', fontSize: '1.2rem', lineHeight: 1.8 }}>We work at the intersection of cryptography, systems design, and real-world compliance. Small team. High ownership. Every contribution directly shapes the product.</p>
      </div>
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>What we look for</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '5rem' }}>
        <div style={{ padding: '2rem', background: '#111', border: '1px solid #222', borderRadius: '12px' }}>Strong backend or systems fundamentals</div>
        <div style={{ padding: '2rem', background: '#111', border: '1px solid #222', borderRadius: '12px' }}>Interest in cryptography or distributed systems</div>
        <div style={{ padding: '2rem', background: '#111', border: '1px solid #222', borderRadius: '12px' }}>Extreme bias for execution</div>
      </div>
      
      <div style={{ textAlign: 'center', padding: '4rem', border: '1px dashed #333', borderRadius: '16px' }}>
        <h4 style={{ color: '#888', fontFamily: 'var(--font-mono)' }}>OPEN ROLES</h4>
        <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>No open roles currently. Check back soon.</p>
      </div>
    </PageLayout>
  );
}

export function ContactSales() {
  return (
    <PageLayout category="Company" title="Contact Sales" subtitle="Bring verifiable integrity to your system.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div>
          <p style={{ color: '#CBCBCB', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>Whether you are preparing for audits, scaling a regulated product, or building high-trust systems, EnKrypto integrates directly into your workflow.</p>
          <h4 style={{ color: '#888', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>WHAT HAPPENS NEXT</h4>
          <ul style={{ color: '#F5F4F0', lineHeight: 2, fontSize: '1.1rem', listStyle: 'none', padding: 0 }}>
            <li>01. Understand your architecture</li>
            <li>02. Identify integration points</li>
            <li>03. Provide implementation plan</li>
          </ul>
        </div>
        <div style={{ background: '#161616', padding: '3rem', borderRadius: '16px', border: '1px solid #292929' }}>
          <h3 style={{ marginBottom: '2rem' }}>Request a Demo</h3>
          <p style={{ color: '#888', marginBottom: '2rem' }}>Sales forms are currently being routed. Please email us directly to speak with our integration team.</p>
          <a href="mailto:secure@enkrypto.dev" style={{ display: 'inline-block', padding: '1rem 2rem', background: '#F5F4F0', color: '#050505', textDecoration: 'none', fontWeight: 600, borderRadius: '100px', fontFamily: 'var(--font-mono)' }}>secure@enkrypto.dev ↗</a>
        </div>
      </div>
    </PageLayout>
  );
}

// ==========================================
// TRUST & LEGAL PAGES
// ==========================================

export function PrivacyPolicy() {
  return (
    <PageLayout category="Trust & Legal" title="Privacy Policy" subtitle="Your data remains yours.">
      <div style={{ maxWidth: '800px' }}>
        <p style={{ color: '#CBCBCB', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>EnKrypto is designed to operate without accessing or storing raw data. Only encrypted metadata required for verification is processed.</p>
        
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Core Principles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['No storage of sensitive data', 'Minimal data collection', 'Encryption-first architecture', 'User-controlled integrations'].map(p => (
            <div key={p} style={{ padding: '1.5rem', background: '#111', borderLeft: '2px solid #F5F4F0', color: '#CBCBCB' }}>{p}</div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export function TermsOfService() {
  return (
    <PageLayout category="Trust & Legal" title="Terms of Service" subtitle="Clear terms for a trust-first system.">
      <div style={{ maxWidth: '800px' }}>
        <p style={{ color: '#CBCBCB', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>These terms govern the use of EnKrypto infrastructure, APIs, and services.</p>
        
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Scope of Coverage</h3>
        <ul style={{ color: '#CBCBCB', fontSize: '1.1rem', lineHeight: 2.2, paddingLeft: '1.5rem' }}>
          <li>Acceptable usage of infrastructure</li>
          <li>Service scope and uptime commitments</li>
          <li>Limitations of liability regarding raw data</li>
          <li>Integration responsibilities and API limits</li>
        </ul>
      </div>
    </PageLayout>
  );
}

export function SecurityPage() {
  return (
    <PageLayout category="Trust & Legal" title="Security & SOC2" subtitle="Security designed into the architecture.">
      <div style={{ maxWidth: '800px' }}>
        <p style={{ color: '#CBCBCB', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>EnKrypto follows strict security practices aligned with modern compliance standards. We secure proofs, not data.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ padding: '2rem', background: '#161616', borderRadius: '12px', border: '1px solid #292929' }}>End-to-end encryption of state proofs</div>
          <div style={{ padding: '2rem', background: '#161616', borderRadius: '12px', border: '1px solid #292929' }}>Secure key handling and rotation</div>
          <div style={{ padding: '2rem', background: '#161616', borderRadius: '12px', border: '1px solid #292929' }}>Strict Role-Based Access Control</div>
          <div style={{ padding: '2rem', background: '#161616', borderRadius: '12px', border: '1px solid #292929' }}>Continuous monitoring and logging</div>
        </div>
        
        <div style={{ padding: '2rem', background: '#F5F4F0', color: '#050505', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>Compliance Direction</span>
          <span style={{ fontFamily: 'var(--font-mono)', background: '#050505', color: '#F5F4F0', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.8rem' }}>SOC2 ALIGNMENT IN PROGRESS</span>
        </div>
      </div>
    </PageLayout>
  );
}