import React, { useState } from 'react';

export default function QuestionsSection() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const faqData = [
    { 
      id: '01', 
      question: 'What exactly does EnKrypto do?', 
      answer: (
        <>
          EnKrypto continuously encrypts your data at every change, generates a unique cryptographic state, and anchors it on-chain to create a tamper-proof audit trail of your data’s history.
        </>
      )
    },
    { 
      id: '02', 
      question: 'How is this different from traditional cloud storage or backups?', 
      answer: (
        <>
          Cloud storage protects availability. EnKrypto protects integrity and verifiability.<br /><br />
          Every modification is recorded as a cryptographic proof, making it impossible to alter data without detection.
        </>
      )
    },
    { 
      id: '03', 
      question: 'Do you store my actual files or sensitive data?', 
      answer: (
        <>
          <strong>No. EnKrypto never stores your raw files.</strong><br /><br />
          Only encrypted state keys and proofs are recorded, ensuring your data remains private while still being verifiable.
        </>
      )
    },
    { 
      id: '04', 
      question: 'Who is this built for?', 
      answer: (
        <>
          EnKrypto is designed for teams handling high-trust data:<br /><br />
          • Compliance and audit teams<br />
          • Legal and contract workflows<br />
          • Regulated startups<br />
          • Financial and enterprise systems
        </>
      )
    },
    { 
      id: '05', 
      question: 'Why would I need this before compliance or audits?', 
      answer: (
        <>
          EnKrypto acts as pre-compliance infrastructure.<br /><br />
          Instead of preparing evidence later, your system continuously generates verifiable proof of integrity, reducing audit time, risk, and manual verification overhead.
        </>
      )
    }
  ];

  return (
    <section className="ent-section" id="faq" style={{ padding: '4rem 2rem 10rem 2rem' }}>
      <div className="ent-container">
        <span className="section-label reveal-up" style={{ color: '#c3c3c3' }}>faq</span>
        <h2 className="ent-heading reveal-up delay-1" style={{ color: '#161616', marginBottom: '6rem' }}>
          Your Questions.<br/><strong style={{ color: '#161616', webkitTextFillColor: '#161616' }}>answered.</strong>
        </h2>
        
        <div className="faq-group reveal-up delay-2">
          {faqData.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isActive ? 'is-active' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="faq-trigger" onClick={() => toggleAccordion(item.id)}>
                  <div className="faq-q-wrap">
                    <span className="faq-num">{item.id}</span>
                    <h3 className="faq-question">{item.question}</h3>
                  </div>
                  <div className="faq-toggle-icon">
                    <span className="line-h"></span>
                    <span className="line-v"></span>
                  </div>
                </div>
                
                <div className="faq-content-wrapper">
                  <div className="faq-content-inner">
                    {/* Changed from <p> to <div> to avoid hydration/nesting errors with JSX answers */}
                    <div className="faq-answer">{item.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}