'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const CHANNELS = [
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'au-yi-xian-5a871b121',
    description: 'Connect for professional enquiries, consulting, and project collaborations.',
    href: 'https://www.linkedin.com/in/au-yi-xian-5a871b121',
    status: 'CONNECTED',
    color: 'text-cyber-blue',
    border: 'neon-border-blue',
    btnClass: 'btn-neon-blue',
    statusColor: 'text-neon-green',
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    handle: 'yixian96',
    description: 'View public repositories, tools, and open source security projects.',
    href: 'https://github.com/yixian96',
    status: 'AVAILABLE',
    color: 'text-neon-green',
    border: 'neon-border-green',
    btnClass: 'btn-neon-green',
    statusColor: 'text-neon-green',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    handle: 'Secure contact channel',
    description: 'For confidential enquiries, vulnerability disclosures, and consulting requests.',
    href: 'mailto:yixian@ymail.com',
    status: 'READY',
    color: 'text-accent-purple',
    border: 'neon-border-purple',
    btnClass: 'btn-neon-green',
    statusColor: 'text-neon-green',
  },
];

export default function Contact() {
  const [initiated, setInitiated] = useState<string | null>(null);

  const handleConnect = (channelId: string, href: string) => {
    setInitiated(channelId);
    setTimeout(() => {
      window.open(href, channelId === 'email' ? '_self' : '_blank', 'noopener,noreferrer');
      setTimeout(() => setInitiated(null), 2000);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 md:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            command="contact --init --secure"
            title="Establish Secure Channel"
            subtitle="Encrypted communication channels — select your preferred method"
            accentColor="blue"
          />
        </motion.div>

        {/* Terminal init block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="terminal-window border border-neon-green border-opacity-20 mb-10"
        >
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-warning-red" />
            <div className="terminal-dot bg-accent-yellow" />
            <div className="terminal-dot bg-neon-green" />
            <span className="ml-3 text-xs text-gray-600">secure_channel.sh — initializing</span>
          </div>
          <div className="p-5 font-mono text-xs space-y-1.5">
            <div className="text-gray-600">$ contact --init</div>
            <div className="text-neon-green">[  OK  ] Secure channel interface loaded</div>
            <div className="text-gray-500">
              <span className="text-cyber-blue">LinkedIn:</span> ............. connected
            </div>
            <div className="text-gray-500">
              <span className="text-neon-green">GitHub:</span> ............... available
            </div>
            <div className="text-gray-500">
              <span className="text-accent-purple">Email:</span> ................ ready
            </div>
            <div className="text-neon-green mt-2">[  OK  ] All channels operational</div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-gray-600">$</span>
              <span className="animate-cursor-blink text-neon-green">█</span>
            </div>
          </div>
        </motion.div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {CHANNELS.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`glass-panel rounded-lg p-5 ${channel.border} hover-glow-green transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <channel.icon size={16} className={channel.color} />
                <span className={`font-mono text-sm font-bold ${channel.color}`}>
                  {channel.label}
                </span>
              </div>

              {/* Handle */}
              <div className="text-gray-500 text-xs font-mono mb-2">@{channel.handle}</div>

              {/* Status */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className={`w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse`} />
                <span className={`text-xs font-mono ${channel.statusColor}`}>
                  {channel.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed mb-5">
                {channel.description}
              </p>

              {/* CTA */}
              <button
                onClick={() => handleConnect(channel.id, channel.href)}
                className={`w-full ${channel.btnClass} flex items-center justify-center gap-2`}
                aria-label={`Connect via ${channel.label}`}
              >
                {initiated === channel.id ? (
                  <>
                    <CheckCircle size={14} />
                    <span>Initiating...</span>
                  </>
                ) : (
                  <>
                    <channel.icon size={14} />
                    <span>Connect</span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Availability note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="glass-panel rounded-lg p-6 neon-border-green text-center"
        >
          <div className="font-mono text-xs text-gray-600 mb-3">
            <span className="text-neon-green">$</span> status --availability
          </div>
          <p className="text-gray-300 font-mono text-sm">
            <span className="text-neon-green">●</span> Currently available for{' '}
            <span className="text-cyber-blue">security consulting</span>,{' '}
            <span className="text-accent-purple">penetration testing engagements</span>, and{' '}
            <span className="text-neon-green">technical leadership</span> opportunities.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {['Web VAPT', 'Mobile VAPT', 'Cloud Assessment', 'Source Code Review', 'AI/ML Security'].map((item) => (
              <span key={item} className="badge-green">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-neon-green border-opacity-10 pt-8 text-center">
        <p className="font-mono text-xs text-gray-700">
          <span className="text-neon-green">©</span> 2025 Au Yi Xian — Senior Penetration Tester
        </p>
        <p className="font-mono text-xs text-gray-800 mt-1">
          Built with Next.js · TypeScript · TailwindCSS · Framer Motion
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/yixian96"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-neon-green transition-colors text-xs font-mono"
          >
            GitHub
          </a>
          <span className="text-gray-800">·</span>
          <a
            href="https://www.linkedin.com/in/au-yi-xian-5a871b121"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-neon-green transition-colors text-xs font-mono"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
