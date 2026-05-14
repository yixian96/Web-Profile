'use client';

import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01アBCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 13;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -height);

    let lastTime = 0;
    const fps = 20;
    const interval = 1000 / fps;
    let animId: number;

    function draw(timestamp: number) {
      const delta = timestamp - lastTime;
      if (delta < interval) {
        animId = requestAnimationFrame(draw);
        return;
      }
      lastTime = timestamp - (delta % interval);

      ctx!.fillStyle = 'rgba(8, 12, 8, 0.05)';
      ctx!.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const isHead = Math.random() > 0.97;
        if (isHead) {
          ctx!.fillStyle = '#ffffff';
          ctx!.shadowColor = '#00ff41';
          ctx!.shadowBlur = 4;
        } else {
          const alpha = Math.random() * 0.5 + 0.1;
          ctx!.fillStyle = `rgba(0, 180, 60, ${alpha})`;
          ctx!.shadowBlur = 0;
        }

        ctx!.font = `${fontSize}px 'JetBrains Mono', monospace`;
        ctx!.fillText(char, x, y);

        drops[i]++;
        if (y > height && Math.random() > 0.975) {
          drops[i] = Math.random() * -50;
        }
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 0, opacity: 0.18 }}
      aria-hidden="true"
    />
  );
}
