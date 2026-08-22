import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { DepartmentShowcase } from './components/DepartmentShowcase';
import { CivicImpact } from './components/CivicImpact';
import { HistoryTimeline } from './components/HistoryTimeline';
import { Scholars } from './components/Scholars';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-parchment text-navy selection:bg-gold selection:text-navy">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        <DepartmentShowcase />
        <Scholars />
        <CivicImpact />
        <HistoryTimeline />
      </main>

      <footer className="bg-navy-light text-parchment-alt py-12 text-center text-sm mt-auto border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="w-12 h-px bg-gold/30 mb-6"></div>
          <p className="mb-3 text-3xl text-gold" style={{ fontFamily: 'var(--font-calligraphy, serif)' }}>
            Jamia Masjid & Cultural Academy
          </p>
          <p className="opacity-70 font-light tracking-wide mt-2">
            © {new Date().getFullYear()} Board of Trustees. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
