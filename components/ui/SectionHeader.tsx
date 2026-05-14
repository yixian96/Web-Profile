'use client';

interface SectionHeaderProps {
  command: string;
  title: string;
  subtitle?: string;
  accentColor?: 'green' | 'blue' | 'red' | 'purple';
}

const ACCENT_COLORS: Record<string, string> = {
  green: 'text-neon-green',
  blue: 'text-cyber-blue',
  red: 'text-warning-red',
  purple: 'text-accent-purple',
};

export default function SectionHeader({
  command,
  title,
  subtitle,
  accentColor = 'green',
}: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      {/* Terminal command line */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-neon-green text-sm font-mono opacity-70">$</span>
        <span className={`text-sm font-mono ${ACCENT_COLORS[accentColor]}`}>{command}</span>
        <span className="w-2 h-4 bg-neon-green opacity-60 animate-cursor-blink" />
      </div>

      {/* Title */}
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wide">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-500 text-sm font-mono max-w-2xl">{subtitle}</p>
      )}

      {/* Divider */}
      <div className="mt-6 section-divider" />
    </div>
  );
}
