'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import BootSequence from '@/components/BootSequence';
import Navbar from '@/components/Navbar';
import CommandPalette from '@/components/CommandPalette';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Certifications from '@/components/sections/Certifications';
import SecurityExpertise from '@/components/sections/SecurityExpertise';
import Methodology from '@/components/sections/Methodology';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

/* Lazy-load heavy components */
const MatrixRain = dynamic(() => import('@/components/MatrixRain'), { ssr: false });
const Tools = dynamic(() => import('@/components/sections/Tools'), { ssr: false });

export default function Page() {
  const [bootComplete, setBootComplete] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mainVisible, setMainVisible] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBootComplete(true);
    setTimeout(() => setMainVisible(true), 100);
  }, []);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  /* Keyboard shortcut: Ctrl+K / Cmd+K */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* Boot sequence overlay */}
      {!bootComplete && <BootSequence onComplete={handleBootComplete} />}

      {/* Persistent background effects */}
      {bootComplete && <MatrixRain />}

      {/* Scanlines — always on after boot */}
      {bootComplete && (
        <>
          <div className="scanline-overlay" aria-hidden="true" />
          <div className="crt-vignette" aria-hidden="true" />
        </>
      )}

      {/* Command palette */}
      <CommandPalette isOpen={paletteOpen} onClose={closePalette} />

      {/* Main portfolio */}
      <div
        className={`relative z-10 transition-opacity duration-700 ${
          mainVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: mainVisible ? 'auto' : 'none' }}
      >
        {bootComplete && <Navbar onOpenPalette={openPalette} />}

        <main>
          <Hero />
          <div className="section-divider mx-4 md:mx-8" />
          <About />
          <div className="section-divider mx-4 md:mx-8" />
          <Certifications />
          <div className="section-divider mx-4 md:mx-8" />
          <SecurityExpertise />
          <div className="section-divider mx-4 md:mx-8" />
          <Methodology />
          <div className="section-divider mx-4 md:mx-8" />
          <Projects />
          <div className="section-divider mx-4 md:mx-8" />
          <Tools />
          <div className="section-divider mx-4 md:mx-8" />
          <Contact />
        </main>
      </div>
    </>
  );
}
