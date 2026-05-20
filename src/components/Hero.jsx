import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <main className="hero">
        <h1 className="interactive">EnKrypto</h1>
        <p className="sleek-tagline">Cryptographic Proof Engine</p>
      </main>
      
      <div className="bottom-nav-container">
        {/* Swapped back to Contact Sales */}
        <Link to="/#contact" className="enter-btn interactive">
          Contact Sales
        </Link>
      </div>
      
      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </>
  );
}