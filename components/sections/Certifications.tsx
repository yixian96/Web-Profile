'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Lock } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

type CertColor = 'green' | 'blue' | 'purple' | 'yellow';

interface Cert {
  name: string;
  full: string;
  issuer: string;
  command: string;
  color: CertColor;
}

interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  border: string;
  bg: string;
  certs: Cert[];
}

const CATEGORIES: Category[] = [
  {
    id: 'offensive',
    label: 'Offensive Security',
    icon: Zap,
    color: 'text-warning-red',
    border: 'border-warning-red border-opacity-30',
    bg: 'bg-warning-red bg-opacity-5',
    certs: [
      { name: 'OSWE', full: 'Offensive Security Web Expert', issuer: 'Offensive Security', command: 'verify --cert OSWE', color: 'green' },
      { name: 'OSCP+', full: 'OS Certified Professional Plus', issuer: 'Offensive Security', command: 'verify --cert OSCP+', color: 'green' },
      { name: 'OSCP', full: 'OS Certified Professional', issuer: 'Offensive Security', command: 'verify --cert OSCP', color: 'green' },
    ],
  },
  {
    id: 'crest',
    label: 'CREST Certifications',
    icon: ShieldCheck,
    color: 'text-cyber-blue',
    border: 'border-cyber-blue border-opacity-30',
    bg: 'bg-cyber-blue bg-opacity-5',
    certs: [
      { name: 'CRT', full: 'CREST Registered Penetration Tester', issuer: 'CREST', command: 'verify --cert CRT', color: 'blue' },
      { name: 'CPSA', full: 'CREST Practitioner Security Analyst', issuer: 'CREST', command: 'verify --cert CPSA', color: 'blue' },
    ],
  },
  {
    id: 'specialized',
    label: 'Specialized Security',
    icon: Lock,
    color: 'text-accent-purple',
    border: 'border-accent-purple border-opacity-30',
    bg: 'bg-accent-purple bg-opacity-5',
    certs: [
      { name: 'CKBPro', full: 'Certified Kiosk Breakout Professional', issuer: 'The SecOps Group', command: 'verify --cert CKBPro', color: 'purple' },
      { name: 'C-AI/MLPen', full: 'Certified AI/ML Pentester', issuer: 'The SecOps Group', command: 'verify --cert C-AI/MLPen', color: 'purple' },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise / Platform',
    icon: Award,
    color: 'text-accent-yellow',
    border: 'border-accent-yellow border-opacity-30',
    bg: 'bg-accent-yellow bg-opacity-5',
    certs: [
      { name: 'CEH', full: 'Certified Ethical Hacker', issuer: 'EC-Council', command: 'verify --cert CEH', color: 'yellow' },
      { name: 'Workday Extend', full: 'Workday Extend Certified', issuer: 'Workday', command: 'verify --cert WD-Extend', color: 'yellow' },
    ],
  },
];

const CERT_COLORS: Record<string, { border: string; glow: string; badge: string; text: string }> = {
  green: {
    border: 'border-neon-green border-opacity-25 hover:border-opacity-60',
    glow: 'hover:shadow-neon-green',
    badge: 'badge-green',
    text: 'text-neon-green',
  },
  blue: {
    border: 'border-cyber-blue border-opacity-25 hover:border-opacity-60',
    glow: 'hover:shadow-neon-blue',
    badge: 'badge-blue',
    text: 'text-cyber-blue',
  },
  purple: {
    border: 'border-accent-purple border-opacity-25 hover:border-opacity-60',
    glow: 'hover:shadow-neon-purple',
    badge: 'badge-purple',
    text: 'text-accent-purple',
  },
  yellow: {
    border: 'border-accent-yellow border-opacity-25 hover:border-opacity-60',
    glow: '',
    badge: 'badge-yellow',
    text: 'text-accent-yellow',
  },
};

function CertCard({ cert, index }: { cert: Cert; index: number }) {
  const [hovered, setHovered] = useState(false);
  const colors = CERT_COLORS[cert.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative glass-panel rounded-lg p-4 border cursor-default
        transition-all duration-300 overflow-hidden
        ${colors.border} ${colors.glow}
        ${hovered ? 'transform -translate-y-1' : ''}
      `}
    >
      {/* Glow top edge */}
      <div
        className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: `linear-gradient(90deg, transparent, ${cert.color === 'green' ? '#00ff41' : cert.color === 'blue' ? '#00d4ff' : cert.color === 'purple' ? '#bf00ff' : '#ffd700'}, transparent)` }}
      />

      {/* Cert name */}
      <div className={`font-display text-lg font-bold ${colors.text} mb-1`}>
        {cert.name}
      </div>
      <div className="text-gray-400 text-xs mb-2 leading-tight">{cert.full}</div>
      <div className="text-gray-600 text-xs">{cert.issuer}</div>

      {/* Hover overlay: terminal verification */}
      <div
        className={`absolute inset-0 flex flex-col justify-center px-4 py-3 transition-all duration-200 rounded-lg ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ background: 'rgba(8,12,8,0.92)', backdropFilter: 'blur(4px)' }}
      >
        <div className="font-mono text-xs space-y-1">
          <div className="text-gray-500">$ {cert.command}</div>
          <div className={`${colors.text}`}>
            <span className="text-gray-600">status: </span>validated
          </div>
          <div className={colors.text}>
            <span className="text-gray-600">issuer: </span>{cert.issuer}
          </div>
          <div className="text-neon-green">
            <span className="text-gray-600">trust: </span>
            <span className="animate-pulse">● VERIFIED</span>
          </div>
        </div>
      </div>

      {/* Validated stamp */}
      <div className="absolute top-3 right-3">
        <span className={`text-xs font-mono ${colors.text} opacity-40`}>✓</span>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            command="ls /vault/credentials --decrypt"
            title="Credentials Vault"
            subtitle="Verified certifications — hover to authenticate"
            accentColor="blue"
          />
        </motion.div>

        {/* Vault unlock header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10 font-mono text-xs text-gray-600 flex items-center gap-3"
        >
          <span className="text-neon-green">$</span>
          <span>vault --status</span>
          <span className="text-neon-green animate-pulse">● UNLOCKED</span>
          <span className="text-gray-700">|</span>
          <span>9 credentials loaded</span>
        </motion.div>

        {/* Category sections */}
        <div className="space-y-10">
          {CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category header */}
              <div className={`flex items-center gap-3 mb-4 pb-2 border-b ${category.border}`}>
                <category.icon size={14} className={category.color} />
                <span className={`font-mono text-xs font-bold ${category.color} tracking-widest uppercase`}>
                  {category.label}
                </span>
                <span className="text-gray-700 text-xs font-mono">
                  ({category.certs.length} certificates)
                </span>
              </div>

              {/* Cert cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.certs.map((cert, i) => (
                  <CertCard key={cert.name} cert={cert} index={i + catIndex * 3} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
