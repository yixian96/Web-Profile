'use client';

import { ReactNode } from 'react';

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: 'green' | 'blue' | 'red' | 'purple';
  hover?: boolean;
}

const BORDER_CLASSES: Record<string, string> = {
  green: 'neon-border-green hover-glow-green',
  blue: 'neon-border-blue hover-glow-blue',
  red: 'neon-border-red',
  purple: 'neon-border-purple',
};

export default function NeonCard({
  children,
  className = '',
  accentColor = 'green',
  hover = true,
}: NeonCardProps) {
  return (
    <div
      className={`
        glass-panel rounded-lg p-5
        ${hover ? BORDER_CLASSES[accentColor] : 'neon-border-green'}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
