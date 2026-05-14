import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'neon-green-dim': '#00cc33',
        'neon-green-glow': 'rgba(0,255,65,0.15)',
        'cyber-blue': '#00d4ff',
        'cyber-blue-dim': '#0099cc',
        'cyber-blue-glow': 'rgba(0,212,255,0.15)',
        'warning-red': '#ff0040',
        'warning-red-dim': '#cc0033',
        'accent-purple': '#bf00ff',
        'accent-yellow': '#ffd700',
        'terminal-bg': '#080c08',
        'terminal-panel': '#0d120d',
        'terminal-border': 'rgba(0,255,65,0.2)',
        'glass-bg': 'rgba(8,12,8,0.8)',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['var(--font-orbitron)', 'Orbitron', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'glow-pulse-blue': 'glow-pulse-blue 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch-1': 'glitch-1 4s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 4s infinite linear alternate-reverse',
        'float-up': 'float-up 0.5s ease-out forwards',
        'matrix-fall': 'matrix-fall 20s linear infinite',
        'typing': 'typing 0.1s steps(1)',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'neon-flicker': 'neon-flicker 3s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,65,0.3), 0 0 20px rgba(0,255,65,0.1)' },
          '50%': { boxShadow: '0 0 15px rgba(0,255,65,0.6), 0 0 40px rgba(0,255,65,0.3)' },
        },
        'glow-pulse-blue': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,212,255,0.3), 0 0 20px rgba(0,212,255,0.1)' },
          '50%': { boxShadow: '0 0 15px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.3)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glitch-1': {
          '0%': { clip: 'rect(20px, 9999px, 35px, 0)', transform: 'skew(0.5deg)' },
          '5%': { clip: 'rect(75px, 9999px, 90px, 0)', transform: 'skew(0.2deg)' },
          '10%': { clip: 'rect(45px, 9999px, 55px, 0)', transform: 'skew(-0.3deg)' },
          '15%': { clip: 'rect(5px, 9999px, 20px, 0)', transform: 'skew(0.4deg)' },
          '20%': { clip: 'rect(80px, 9999px, 95px, 0)', transform: 'skew(-0.1deg)' },
          '100%': { clip: 'rect(20px, 9999px, 35px, 0)', transform: 'skew(0.5deg)' },
        },
        'glitch-2': {
          '0%': { clip: 'rect(60px, 9999px, 75px, 0)', transform: 'skew(-0.5deg)' },
          '5%': { clip: 'rect(30px, 9999px, 45px, 0)', transform: 'skew(0.3deg)' },
          '10%': { clip: 'rect(85px, 9999px, 100px, 0)', transform: 'skew(-0.4deg)' },
          '15%': { clip: 'rect(10px, 9999px, 25px, 0)', transform: 'skew(0.2deg)' },
          '20%': { clip: 'rect(55px, 9999px, 70px, 0)', transform: 'skew(0.1deg)' },
          '100%': { clip: 'rect(60px, 9999px, 75px, 0)', transform: 'skew(-0.5deg)' },
        },
        'float-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(0,255,65,0.3)' },
          '50%': { borderColor: 'rgba(0,255,65,0.8)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'neon-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 7px #00ff41, 0 0 10px #00ff41, 0 0 21px #00ff41',
          },
          '20%, 24%, 55%': { textShadow: 'none' },
        },
      },
      boxShadow: {
        'neon-green': '0 0 5px rgba(0,255,65,0.5), 0 0 20px rgba(0,255,65,0.3)',
        'neon-green-lg': '0 0 10px rgba(0,255,65,0.7), 0 0 30px rgba(0,255,65,0.4), 0 0 60px rgba(0,255,65,0.1)',
        'neon-blue': '0 0 5px rgba(0,212,255,0.5), 0 0 20px rgba(0,212,255,0.3)',
        'neon-blue-lg': '0 0 10px rgba(0,212,255,0.7), 0 0 30px rgba(0,212,255,0.4)',
        'neon-red': '0 0 5px rgba(255,0,64,0.5), 0 0 20px rgba(255,0,64,0.3)',
        'neon-purple': '0 0 5px rgba(191,0,255,0.5), 0 0 20px rgba(191,0,255,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glass-hover': '0 16px 48px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)`,
        'scanline-pattern': `repeating-linear-gradient(
                              0deg,
                              transparent,
                              transparent 2px,
                              rgba(0,0,0,0.04) 2px,
                              rgba(0,0,0,0.04) 4px
                            )`,
        'terminal-gradient': 'linear-gradient(180deg, #080c08 0%, #060a06 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(0,255,65,0.05) 0%, rgba(0,212,255,0.03) 100%)',
        'neon-border-gradient': 'linear-gradient(135deg, #00ff41, #00d4ff)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
