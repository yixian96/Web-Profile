'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, Terminal, ChevronRight } from 'lucide-react';

interface Command {
  id: string;
  label: string;
  description: string;
  section: string;
  shortcut?: string;
}

const COMMANDS: Command[] = [
  { id: 'hero', label: 'go hero', description: 'Navigate to introduction', section: '#hero' },
  { id: 'about', label: 'go about', description: 'View profile & background', section: '#about' },
  { id: 'certifications', label: 'go certifications', description: 'View credentials vault', section: '#certifications' },
  { id: 'security', label: 'go security', description: 'Explore security capabilities', section: '#security' },
  { id: 'methodology', label: 'go methodology', description: 'Testing methodology timeline', section: '#methodology' },
  { id: 'projects', label: 'go projects', description: 'Browse decrypted case files', section: '#projects' },
  { id: 'tools', label: 'go tools', description: 'Security toolbox inventory', section: '#tools' },
  { id: 'contact', label: 'go contact', description: 'Establish secure channel', section: '#contact' },
  { id: 'github', label: 'open github', description: 'View GitHub profile', section: 'https://github.com/yixian96' },
  { id: 'linkedin', label: 'open linkedin', description: 'View LinkedIn profile', section: 'https://www.linkedin.com/in/au-yi-xian-5a871b121' },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = query.trim()
    ? COMMANDS.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase())
      )
    : COMMANDS;

  const execute = useCallback((cmd: Command) => {
    onClose();
    setQuery('');
    if (cmd.section.startsWith('#')) {
      const id = cmd.section.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.open(cmd.section, '_blank', 'noopener,noreferrer');
    }
  }, [onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && filtered[selectedIndex]) {
        execute(filtered[selectedIndex]);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, filtered, selectedIndex, execute, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-20 md:pt-32 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm" />

      {/* Panel */}
      <div className="relative w-full max-w-xl terminal-window overflow-hidden animate-float-up">
        {/* Title bar */}
        <div className="terminal-titlebar justify-between">
          <div className="flex items-center gap-2">
            <div className="terminal-dot bg-warning-red" />
            <div className="terminal-dot bg-accent-yellow" />
            <div className="terminal-dot bg-neon-green" />
            <span className="ml-3 text-xs text-gray-500 font-mono">
              <Terminal size={10} className="inline mr-1" />
              command_palette.exe
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-300 transition-colors p-1"
            aria-label="Close command palette"
          >
            <X size={14} />
          </button>
        </div>

        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neon-green border-opacity-10">
          <span className="text-neon-green font-mono text-sm">$</span>
          <Search size={14} className="text-gray-600 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command (e.g. go about, open github)..."
            className="flex-1 bg-transparent text-sm font-mono text-gray-200 placeholder-gray-700 outline-none border-none"
            aria-label="Search commands"
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        {/* Results */}
        <ul
          ref={listRef}
          className="overflow-y-auto max-h-72"
          role="listbox"
          aria-label="Command results"
        >
          {filtered.length === 0 ? (
            <li className="px-4 py-6 text-center text-sm text-gray-600 font-mono">
              No commands found for &ldquo;{query}&rdquo;
            </li>
          ) : (
            filtered.map((cmd, i) => (
              <li
                key={cmd.id}
                role="option"
                aria-selected={i === selectedIndex}
                onClick={() => execute(cmd)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                  i === selectedIndex
                    ? 'bg-neon-green-glow border-l-2 border-neon-green'
                    : 'hover:bg-gray-900 border-l-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ChevronRight
                    size={12}
                    className={i === selectedIndex ? 'text-neon-green' : 'text-gray-700'}
                  />
                  <div>
                    <div
                      className={`text-sm font-mono ${
                        i === selectedIndex ? 'text-neon-green' : 'text-gray-300'
                      }`}
                    >
                      {cmd.label}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5">{cmd.description}</div>
                  </div>
                </div>
                {i === selectedIndex && (
                  <span className="text-xs text-gray-600 font-mono">↵ enter</span>
                )}
              </li>
            ))
          )}
        </ul>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-neon-green border-opacity-10 flex items-center justify-between text-xs text-gray-700 font-mono">
          <div className="flex gap-4">
            <span><kbd className="text-gray-600">↑↓</kbd> navigate</span>
            <span><kbd className="text-gray-600">↵</kbd> execute</span>
            <span><kbd className="text-gray-600">esc</kbd> close</span>
          </div>
          <span className="text-gray-800">{filtered.length} commands</span>
        </div>
      </div>
    </div>
  );
}
