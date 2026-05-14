'use client';

import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  accentColor?: 'green' | 'blue' | 'red' | 'purple';
}

const ACCENT_BORDERS: Record<string, string> = {
  green: 'border-neon-green border-opacity-20 hover:border-opacity-40',
  blue: 'border-cyber-blue border-opacity-20 hover:border-opacity-40',
  red: 'border-warning-red border-opacity-20 hover:border-opacity-40',
  purple: 'border-accent-purple border-opacity-20 hover:border-opacity-40',
};

const ACCENT_TITLEBAR: Record<string, string> = {
  green: 'bg-neon-green bg-opacity-5 border-neon-green border-opacity-15',
  blue: 'bg-cyber-blue bg-opacity-5 border-cyber-blue border-opacity-15',
  red: 'bg-warning-red bg-opacity-5 border-warning-red border-opacity-15',
  purple: 'bg-accent-purple bg-opacity-5 border-accent-purple border-opacity-15',
};

export default function TerminalWindow({
  title,
  children,
  className = '',
  accentColor = 'green',
}: TerminalWindowProps) {
  return (
    <div
      className={`terminal-window border transition-all duration-300 ${ACCENT_BORDERS[accentColor]} ${className}`}
    >
      <div className={`terminal-titlebar border-b ${ACCENT_TITLEBAR[accentColor]}`}>
        <div className="terminal-dot bg-warning-red" />
        <div className="terminal-dot bg-accent-yellow" />
        <div className="terminal-dot bg-neon-green" />
        {title && (
          <span className="ml-3 text-xs text-gray-600 font-mono tracking-wider">{title}</span>
        )}
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}
