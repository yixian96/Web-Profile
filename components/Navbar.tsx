'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal, Menu, X, Command } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Security', href: '#security' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'certifications', 'security', 'methodology', 'projects', 'tools', 'contact'];

interface NavbarProps {
  onOpenPalette: () => void;
}

export default function Navbar({ onOpenPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-terminal-bg bg-opacity-90 backdrop-blur-md border-b border-neon-green border-opacity-10 shadow-lg'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 text-neon-green hover:text-glow-green transition-all group"
            aria-label="Go to top"
          >
            <Terminal size={16} className="opacity-70 group-hover:opacity-100" />
            <span className="font-mono text-sm tracking-wider">
              <span className="text-gray-500">&gt; </span>
              <span className="text-neon-green">yi_xian</span>
              <span className="text-gray-600">@security</span>
              <span className="text-neon-green animate-cursor-blink">█</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`relative px-3 py-2 text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-neon-green'
                      : 'text-gray-500 hover:text-gray-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-neon-green rounded-r" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Command palette trigger */}
            <button
              onClick={onOpenPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-gray-500 hover:text-neon-green border border-gray-800 hover:border-neon-green hover:border-opacity-30 rounded transition-all duration-200"
              aria-label="Open command palette (Ctrl+K)"
              title="Command palette (Ctrl+K)"
            >
              <Command size={12} />
              <span className="hidden md:inline">Command</span>
              <span className="text-gray-700 hidden md:inline">Ctrl+K</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-neon-green transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-terminal-bg bg-opacity-98 backdrop-blur-md border-t border-neon-green border-opacity-10"
        >
          <div className="px-4 py-3 space-y-1">
            {/* Mobile command palette button */}
            <button
              onClick={() => { setMobileOpen(false); onOpenPalette(); }}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-mono text-gray-500 hover:text-neon-green border border-gray-800 hover:border-neon-green hover:border-opacity-30 rounded mb-3 transition-all"
              aria-label="Open command palette"
            >
              <Command size={14} />
              <span>Command Palette</span>
            </button>

            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm font-mono rounded transition-all ${
                    isActive
                      ? 'text-neon-green bg-neon-green-glow border border-neon-green border-opacity-20'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-900'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />}
                  <span className="text-gray-600 text-xs">{'>'}</span>
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
