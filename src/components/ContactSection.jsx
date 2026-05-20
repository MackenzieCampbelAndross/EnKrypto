import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // REPLACE THESE 3 STRINGS WITH YOUR EMAILJS IDs
    const serviceID = 'service_bjbnq1v';
    const templateID = 'template_xtro29w';
    const publicKey = 'ZGLIKX6cSk_oR-MVM';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log("Email sent successfully:", result.text);
          setStatus('success');
          e.target.reset(); // Clear the form
      }, (error) => {
          console.error("Failed to send email:", error.text);
          setStatus('error');
      });
  };

  return (
    <section className="ent-section" id="contact" style={{ padding: '6rem 2rem' }}>
      <div className="ent-container">
        
        <div className="contact-master-card reveal-up">
          
          {/* Left Column: Information */}
          <div className="contact-left">
            <div className="contact-badge">
              <span className="badge-dot"></span>
              CONTACT US
            </div>
            
            <h2 className="contact-h2">Let's secure<br/>your reality.</h2>
            
            <p className="contact-subtext">
              Ready to integrate cryptographic truth into your infrastructure? Fill out the form below or reach out directly to start a conversation about your compliance needs.
            </p>
            
            <div className="contact-info-grid">
              <div className="info-item">
                <div className="info-icon">☎</div>
                <span>+91 90254 71516</span>
              </div>
              <div className="info-item">
                <div className="info-icon">⚲</div>
                <span>Chennai , TN</span>
              </div>
              <div className="info-item">
                <div className="info-icon">✉</div>
                <span>enkryptolabs@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: EmailJS Form */}
          <div className="contact-right">
            
            {status === 'success' ? (
              // --- PREMIUM SUCCESS STATE ---
              <div style={{ textAlign: 'center', padding: '4rem 0', animation: 'fadeIn 0.5s ease forwards' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#4ade80' }}>✓</div>
                <h3 style={{ fontSize: '1.8rem', color: '#161616', marginBottom: '1rem' }}>Request Received.</h3>
                <p style={{ color: '#555', lineHeight: 1.6 }}>
                  Our integration team has been notified. Check your inbox for next steps regarding your architecture evaluation.
                </p>
                <button 
                  onClick={() => setStatus('idle')} 
                  style={{ marginTop: '2rem', background: 'transparent', border: '1px solid #161616', padding: '0.8rem 1.5rem', borderRadius: '100px', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.target.style.background = '#161616'; e.target.style.color = '#F5F4F0'; }}
                  onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#161616'; }}
                >
                  SUBMIT ANOTHER REQUEST
                </button>
              </div>
            ) : (
              // --- THE FORM ---
              <form className="ent-form-solid" ref={form} onSubmit={handleSubmit}>
                
                <div className="form-group-solid">
                  <label htmlFor="name">Your name</label>
                  <input type="text" name="name" id="name" required placeholder="John" />
                </div>
                
                <div className="form-group-solid">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" name="email" id="email" required placeholder="john@company.com" />
                </div>

                <div className="form-group-solid">
                  <label htmlFor="service">Infrastructure Type</label>
                  <div className="select-wrapper">
                    <select name="infrastructure_type" id="service" required defaultValue="">
                      <option value="" disabled>Select an environment</option>
                      <option value="aws">AWS Cloud</option>
                      <option value="gcp">Google Cloud</option>
                      <option value="azure">Microsoft Azure</option>
                      <option value="onprem">On-Premise / Bare Metal</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn-solid"
                  disabled={status === 'submitting'}
                  style={{ opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'wait' : 'pointer' }}
                >
                  <div className="btn-icon">{status === 'submitting' ? '...' : '↗'}</div>
                  <span>{status === 'submitting' ? 'TRANSMITTING...' : 'SUBMIT REQUEST'}</span>
                </button>

                {status === 'error' && (
                  <div style={{ color: '#ef4444', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginTop: '1rem', textAlign: 'center' }}>
                    Network routing error. Please email us directly.
                  </div>
                )}
                
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}