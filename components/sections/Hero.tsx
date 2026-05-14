'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Shield, Code, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const EXPERTISE_ITEMS = [
  'Web VAPT',
  'Mobile VAPT',
  'Cloud VAPT',
  'Source Code Review',
  'Reverse Engineering',
  'Thick Client',
  'Kiosk Breakout',
  'WiFi Pentest',
  'AI/ML Security',
];

function useTypewriter(text: string, speed = 40, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => {
      const tick = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { displayed: line1, done: done1 } = useTypewriter('Senior Penetration Tester', 40, 300);
  const { displayed: line2 } = useTypewriter(
    'Web VAPT | Mobile VAPT | Cloud VAPT | Source Code Review | Reverse Engineering | Thick Client | Kiosk Breakout | WiFi Pentest | AI/ML Security',
    15,
    done1 ? 800 : 99999
  );

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-4 md:px-8"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 hex-bg pointer-events-none opacity-30" />

      {/* Radial glow behind hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,65,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Content */}
          <div className="space-y-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                System Online — Profile Loaded
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight glitch"
                data-text="Au Yi Xian"
              >
                Au Yi Xian
              </h1>
              <div className="mt-2 text-neon-green font-display text-sm md:text-base tracking-widest uppercase opacity-80">
                Senior Penetration Tester
              </div>
            </motion.div>

            {/* Terminal command outputs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-3"
            >
              {/* whoami / role */}
              <div className="font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <span className="text-neon-green">$</span>
                  <span>role --current</span>
                </div>
                <div className="pl-4 text-neon-green text-glow-green text-sm">
                  {line1}
                  {!done1 && <span className="animate-cursor-blink ml-0.5">█</span>}
                </div>
              </div>

              {/* expertise */}
              <div className="font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <span className="text-neon-green">$</span>
                  <span>expertise --list</span>
                </div>
                <div className="pl-4 text-cyber-blue text-xs leading-relaxed max-w-lg">
                  {line2 || ' '}
                </div>
              </div>

              {/* status */}
              <div className="font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <span className="text-neon-green">$</span>
                  <span>status --check</span>
                </div>
                <div className="pl-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-gray-300 text-xs">
                    Available for security consulting, penetration testing engagements, and technical leadership
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Expertise tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-2"
            >
              {EXPERTISE_ITEMS.map((item, i) => (
                <span
                  key={item}
                  className="badge-green text-xs"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button
                onClick={() => {
                  document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-neon-green flex items-center gap-2"
                aria-label="View certifications"
              >
                <Shield size={14} />
                <span>View Certifications</span>
              </button>
              <button
                onClick={() => {
                  document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-neon-blue flex items-center gap-2"
                aria-label="Explore skills"
              >
                <Code size={14} />
                <span>Explore Skills</span>
              </button>
              <a
                href="https://github.com/yixian96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-gray-400 border border-gray-800 hover:border-gray-600 hover:text-gray-200 transition-all duration-200"
                aria-label="View GitHub profile"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/au-yi-xian-5a871b121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-gray-400 border border-gray-800 hover:border-gray-600 hover:text-gray-200 transition-all duration-200"
                aria-label="View LinkedIn profile"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal window */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="terminal-window border border-neon-green border-opacity-20">
              <div className="terminal-titlebar">
                <div className="terminal-dot bg-warning-red" />
                <div className="terminal-dot bg-accent-yellow" />
                <div className="terminal-dot bg-neon-green" />
                <span className="ml-3 text-xs text-gray-600 font-mono">
                  profile.json — decrypted
                </span>
              </div>
              <div className="p-5 font-mono text-xs space-y-1 overflow-hidden" style={{ maxHeight: '380px' }}>
                <ProfileDisplay />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700 hover:text-neon-green transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}

function ProfileDisplay() {
  const lines = [
    { t: 'key', v: '"operator":', val: '"Au Yi Xian"', c: 'text-neon-green' },
    { t: 'key', v: '"role":', val: '"Senior Penetration Tester"', c: 'text-cyber-blue' },
    { t: 'key', v: '"level":', val: '"Senior / Lead"', c: 'text-accent-purple' },
    { t: 'section', v: '"certifications": [', val: '', c: 'text-gray-400' },
    { t: 'item', v: '  "OSWE",', val: '', c: 'text-neon-green' },
    { t: 'item', v: '  "OSCP+",', val: '', c: 'text-neon-green' },
    { t: 'item', v: '  "OSCP",', val: '', c: 'text-neon-green' },
    { t: 'item', v: '  "CREST CRT",', val: '', c: 'text-neon-green' },
    { t: 'item', v: '  "CREST CPSA",', val: '', c: 'text-neon-green' },
    { t: 'item', v: '  "C-AI/MLPen",', val: '', c: 'text-neon-green' },
    { t: 'item', v: '  "CKBPro",', val: '', c: 'text-neon-green' },
    { t: 'item', v: '  "CEH"', val: '', c: 'text-neon-green' },
    { t: 'close', v: '],', val: '', c: 'text-gray-400' },
    { t: 'section', v: '"expertise": [', val: '', c: 'text-gray-400' },
    { t: 'item', v: '  "Web VAPT",', val: '', c: 'text-cyber-blue' },
    { t: 'item', v: '  "Mobile VAPT",', val: '', c: 'text-cyber-blue' },
    { t: 'item', v: '  "Cloud VAPT",', val: '', c: 'text-cyber-blue' },
    { t: 'item', v: '  "Source Code Review",', val: '', c: 'text-cyber-blue' },
    { t: 'item', v: '  "Reverse Engineering",', val: '', c: 'text-cyber-blue' },
    { t: 'item', v: '  "Kiosk Breakout"', val: '', c: 'text-cyber-blue' },
    { t: 'close', v: '],', val: '', c: 'text-gray-400' },
    { t: 'key', v: '"status":', val: '"available"', c: 'text-neon-green' },
    { t: 'key', v: '"clearance":', val: '"operator"', c: 'text-warning-red' },
  ];

  return (
    <div className="text-gray-500 leading-relaxed">
      <div className="text-neon-green mb-2">{'{'}</div>
      {lines.map((line, i) => (
        <div key={i} className="pl-2">
          {line.val ? (
            <span>
              <span className="text-gray-600">{line.v}</span>{' '}
              <span className={line.c}>{line.val}</span>
              {i < lines.length - 1 ? <span className="text-gray-700">,</span> : null}
            </span>
          ) : (
            <span className={line.c}>{line.v}</span>
          )}
        </div>
      ))}
      <div className="text-neon-green mt-2">{'}'}</div>
      <div className="mt-3 flex items-center gap-1">
        <span className="text-gray-600">$</span>
        <span className="animate-cursor-blink text-neon-green">█</span>
      </div>
    </div>
  );
}
