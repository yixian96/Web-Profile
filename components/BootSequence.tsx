'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface BootLine {
  text: string;
  type: 'system' | 'ok' | 'scan' | 'warn' | 'load' | 'border' | 'access' | 'spacer' | 'progress' | 'command' | 'output' | 'welcome';
  delay: number;
}

const BOOT_LINES: BootLine[] = [
  { text: 'BIOS v2.4.1 — AX Security Systems Corp', type: 'system', delay: 0 },
  { text: 'CPU: INTEL CORE ATTACKER_MODE — 16 CORES / 32 THREADS', type: 'system', delay: 200 },
  { text: 'RAM: 128 GB DDR5 — Initialized', type: 'system', delay: 350 },
  { text: 'STORAGE: Encrypted NVMe — Mounted', type: 'system', delay: 500 },
  { text: '', type: 'spacer', delay: 650 },
  { text: '[BOOT] Initializing portfolio system...', type: 'system', delay: 750 },
  { text: '[  OK  ] Kernel modules loaded', type: 'ok', delay: 950 },
  { text: '[  OK  ] Security profile mounted', type: 'ok', delay: 1100 },
  { text: '[  OK  ] Offensive tooling indexed', type: 'ok', delay: 1250 },
  { text: '', type: 'spacer', delay: 1400 },
  { text: '[SCAN ] Verifying installed certifications...', type: 'scan', delay: 1500 },
  { text: '[  OK  ] OSWE (Offensive Security Web Expert) ............. VALID', type: 'ok', delay: 1700 },
  { text: '[  OK  ] OSCP+ (OS Certified Professional Plus) ........... VALID', type: 'ok', delay: 1850 },
  { text: '[  OK  ] OSCP (OS Certified Professional) ................. VALID', type: 'ok', delay: 2000 },
  { text: '[  OK  ] CREST CRT (Registered Pentration Tester) ......... VALID', type: 'ok', delay: 2150 },
  { text: '[  OK  ] CREST CPSA (Practitioner Security Analyst) ....... VALID', type: 'ok', delay: 2300 },
  { text: '[  OK  ] C-AI/MLPen (Certified AI/ML Pentester) ........... VALID', type: 'ok', delay: 2450 },
  { text: '[  OK  ] CKBPro (Certified Kiosk Breakout Professional) ... VALID', type: 'ok', delay: 2600 },
  { text: '[  OK  ] CEH (Certified Ethical Hacker) ................... VALID', type: 'ok', delay: 2750 },
  { text: '[  OK  ] Workday Extend Certified ......................... VALID', type: 'ok', delay: 2900 },
  { text: '', type: 'spacer', delay: 3050 },
  { text: '[LOAD ] Loading project archive (AES-256-GCM)...', type: 'load', delay: 3150 },
  { text: '[  OK  ] Project archive decrypted — 47 entries indexed', type: 'ok', delay: 3400 },
  { text: '[  OK  ] Full stack engineering workspace loaded', type: 'ok', delay: 3550 },
  { text: '', type: 'spacer', delay: 3700 },
  { text: '[INIT ] Establishing encrypted session...', type: 'scan', delay: 3800 },
  { text: '[  OK  ] TLS 1.3 / X25519MLKEM768 negotiated', type: 'ok', delay: 4000 },
  { text: '[  OK  ] Certificate chain validated', type: 'ok', delay: 4150 },
  { text: '[  OK  ] Secure session established', type: 'ok', delay: 4300 },
  { text: '', type: 'spacer', delay: 4450 },
  { text: '████████████████████████████████████████ 100%', type: 'progress', delay: 4600 },
  { text: '', type: 'spacer', delay: 4900 },
  { text: '╔══════════════════════════════════════════╗', type: 'border', delay: 5000 },
  { text: '║            ACCESS  GRANTED               ║', type: 'access', delay: 5150 },
  { text: '╚══════════════════════════════════════════╝', type: 'border', delay: 5300 },
  { text: '', type: 'spacer', delay: 5450 },
  { text: 'Welcome, operator. Secure environment ready.', type: 'welcome', delay: 5600 },
  { text: '', type: 'spacer', delay: 5800 },
  { text: '> whoami', type: 'command', delay: 5950 },
  { text: 'Au Yi Xian — Senior Penetration Tester', type: 'output', delay: 6200 },
];

const LINE_COLORS: Record<BootLine['type'], string> = {
  system: 'text-gray-500',
  ok: 'text-neon-green',
  scan: 'text-cyber-blue',
  warn: 'text-warning-red',
  load: 'text-accent-purple',
  border: 'text-neon-green',
  access: 'text-neon-green font-bold tracking-widest',
  spacer: '',
  progress: 'text-neon-green',
  command: 'text-accent-yellow',
  output: 'text-gray-200 pl-4',
  welcome: 'text-cyber-blue italic',
};

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [phase, setPhase] = useState<'booting' | 'waiting' | 'exiting'>('booting');
  const [blinkAccess, setBlinkAccess] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleEnter = useCallback(() => {
    if (phase !== 'waiting') return;
    setPhase('exiting');
    const t = setTimeout(() => {
      onComplete();
    }, 800);
    timeoutsRef.current.push(t);
  }, [phase, onComplete]);

  useEffect(() => {
    BOOT_LINES.forEach((line, index) => {
      const t = setTimeout(() => {
        setVisibleLines(index + 1);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        if (index === BOOT_LINES.length - 1) {
          const waitTimer = setTimeout(() => {
            setPhase('waiting');
            setBlinkAccess(true);
          }, 400);
          timeoutsRef.current.push(waitTimer);
        }
      }, line.delay);
      timeoutsRef.current.push(t);
    });

    const capturedTimeouts = timeoutsRef.current;
    return () => {
      capturedTimeouts.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleEnter();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleEnter]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-terminal-bg transition-opacity duration-700 ${
        phase === 'exiting' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{ transition: phase === 'exiting' ? 'opacity 0.7s ease, transform 0.7s ease' : 'none' }}
      onClick={handleEnter}
      role="presentation"
      aria-label="Boot sequence loading screen"
    >
      {/* Scanlines on boot screen */}
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />
      <div className="absolute inset-0 crt-vignette pointer-events-none" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-60" />

      {/* Terminal container */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        {/* Monitor frame */}
        <div className="terminal-window w-full" style={{ maxHeight: '80vh' }}>
          {/* Title bar */}
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-warning-red" />
            <div className="terminal-dot bg-accent-yellow" />
            <div className="terminal-dot bg-neon-green" />
            <span className="ml-4 text-xs text-gray-500 font-mono tracking-widest">
              SECURE_TERMINAL — root@ax-security:~
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="p-4 md:p-6 font-mono text-xs md:text-sm overflow-y-auto"
            style={{ maxHeight: 'calc(80vh - 40px)', scrollbarWidth: 'thin' }}
          >
            {BOOT_LINES.slice(0, visibleLines).map((line, index) => (
              <div
                key={index}
                className={`leading-relaxed ${LINE_COLORS[line.type]} ${
                  line.type === 'access' && blinkAccess
                    ? 'text-glow-green'
                    : ''
                }`}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  minHeight: line.type === 'spacer' ? '0.75rem' : 'auto',
                }}
              >
                {line.type === 'progress' ? (
                  <ProgressBar />
                ) : (
                  line.text
                )}
              </div>
            ))}

            {/* Waiting for input prompt */}
            {phase === 'waiting' && (
              <div className="mt-4 pt-4 border-t border-neon-green border-opacity-20">
                <div className="flex items-center gap-3 text-neon-green">
                  <span className="text-xs tracking-widest opacity-70">
                    ──────────────────────────────────────────
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-neon-green text-sm tracking-widest animate-pulse">
                    [ PRESS ENTER OR CLICK TO ACCESS PORTFOLIO ]
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-gray-600 text-xs">
                  <span>&gt;</span>
                  <span className="cursor-blink" />
                </div>
              </div>
            )}

            {/* Active cursor while booting */}
            {phase === 'booting' && visibleLines > 0 && (
              <span
                className="inline-block w-2 h-4 bg-neon-green opacity-80 animate-cursor-blink"
                style={{ verticalAlign: 'text-bottom', marginLeft: '4px' }}
              />
            )}
          </div>
        </div>

        {/* Skip hint */}
        {phase === 'booting' && visibleLines < BOOT_LINES.length && (
          <div className="mt-4 text-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setVisibleLines(BOOT_LINES.length);
                timeoutsRef.current.forEach(clearTimeout);
                setTimeout(() => {
                  setPhase('waiting');
                  setBlinkAccess(true);
                }, 200);
              }}
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors underline underline-offset-2"
              aria-label="Skip boot sequence"
            >
              skip intro
            </button>
          </div>
        )}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-40" />
    </div>
  );
}

function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(100), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex items-center gap-3 my-1">
      <div className="flex-1 h-2 bg-gray-900 rounded overflow-hidden border border-neon-green border-opacity-20">
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, #00ff41, #00d4ff)',
            boxShadow: '0 0 8px rgba(0,255,65,0.6)',
          }}
        />
      </div>
      <span className="text-neon-green text-xs w-10 text-right">{width}%</span>
    </div>
  );
}
