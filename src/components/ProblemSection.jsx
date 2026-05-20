import { useRef, useState, useEffect } from 'react';

// --- Scroll Progress Hook for Wires ---
const useSectionScroll = (ref) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled through the viewport
      const totalScrollable = rect.height + windowHeight;
      const scrolled = windowHeight - rect.top;
      
      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return scrollProgress;
};

// --- Helper: Staggered Text ---
const CinematicText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <h2 className="cinematic-heading reveal-up">
      {words.map((word, i) => (
        <span key={i} className="cinematic-word" style={{ transitionDelay: `${delayOffset + (i * 0.05)}s` }}>
          {word}&nbsp;
        </span>
      ))}
    </h2>
  );
};

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const progress = useSectionScroll(sectionRef);

  // Dash array math for the SVG wires (100 is full length)
  const drawAmount = progress * 100;

  return (
    <section ref={sectionRef} id="problem" className="machine-section">
      
      {/* BACKGROUND WIRES */}
      <div className="wire-container left">
        <svg viewBox="0 0 50 1000" preserveAspectRatio="none">
          <path 
            d="M 25 0 C 25 200, 45 250, 45 500 C 45 750, 25 800, 25 1000" 
            className="glow-wire" 
            style={{ strokeDashoffset: 100 - drawAmount }} 
            pathLength="100" 
          />
        </svg>
      </div>
      <div className="wire-container right">
        <svg viewBox="0 0 50 1000" preserveAspectRatio="none">
          <path 
            d="M 25 0 C 25 300, 5 350, 5 500 C 5 650, 25 700, 25 1000" 
            className="glow-wire" 
            style={{ strokeDashoffset: 100 - drawAmount }} 
            pathLength="100" 
          />
        </svg>
      </div>

      <div className="ent-container relative z-10">
        
        {/* PART 1: The Text Reveal */}
        <div className="story-block text-center pt-24 pb-32">
          <CinematicText text="Digital records are easy to edit." />
          <CinematicText text="Trust is easy to claim." delayOffset={0.3} />
          <CinematicText text="Proof is hard." delayOffset={0.6} />
        </div>

        {/* PART 2: The 3D Isometric Skeleton */}
        <div className="isometric-stage reveal-up delay-2">
          <div className="iso-scene">
            
            {/* Base Layer */}
            <div className="iso-base-layer">
                <div className="iso-grid-lines"></div>
            </div>

            {/* Floating UI Cards */}
            <div className="iso-card float-low" style={{ top: '10%', left: '10%', width: '40%' }}>
                <div className="iso-skeleton-line w-1/2"></div>
                <div className="iso-skeleton-line w-full"></div>
                <div className="iso-skeleton-line w-3/4"></div>
            </div>

            <div className="iso-card float-high" style={{ top: '30%', right: '10%', width: '35%', borderColor: 'rgba(255, 107, 107, 0.4)' }}>
                <div className="iso-badge text-red">Unverified Alteration</div>
                <div className="iso-skeleton-block"></div>
                <div className="iso-skeleton-line w-full"></div>
            </div>

            <div className="iso-card float-med" style={{ bottom: '15%', left: '20%', width: '60%' }}>
                <div className="iso-flex">
                    <div className="iso-circle"></div>
                    <div className="w-full">
                        <div className="iso-skeleton-line w-1/3"></div>
                        <div className="iso-skeleton-line w-2/3"></div>
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* PART 3: The Data Visuals */}
        <div className="data-block mt-40 pb-32">
            <h3 className="data-heading reveal-up">The Cost of Blind Trust</h3>
            
            <div className="data-grid mt-12">
                <div className="data-card reveal-up delay-1">
                    <div className="data-number">287<span className="text-sm"> Days</span></div>
                    <p className="data-sub">Average time required to identify and contain a silent data breach or record alteration.</p>
                    
                    <div className="graph-track mt-6">
                        <div className="graph-fill reveal-width" style={{ '--target-width': '85%' }}></div>
                    </div>
                </div>

                <div className="data-card reveal-up delay-2">
                    <div className="data-number">$4.4<span className="text-sm"> Million</span></div>
                    <p className="data-sub">Average cost of a trust-based compliance failure or legal evidence dispute.</p>
                    
                    <div className="graph-track mt-6">
                        <div className="graph-fill reveal-width bg-red" style={{ '--target-width': '60%' }}></div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}