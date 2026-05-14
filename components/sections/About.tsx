'use client';

import { motion } from 'framer-motion';
import { User, Target, Code2, FileText } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import TerminalWindow from '@/components/ui/TerminalWindow';

const STATS = [
  { label: 'Years Experience', value: '2+', color: 'text-neon-green' },
  { label: 'Certifications', value: '9', color: 'text-cyber-blue' },
  { label: 'Security Domains', value: '8+', color: 'text-accent-purple' },
  { label: 'Targets Pwned', value: '100+', color: 'text-accent-yellow' },
];

const HIGHLIGHTS = [
  {
    icon: Target,
    title: 'Offensive Security',
    description: 'CREST-aligned penetration testing across web, mobile, cloud, and thick client applications using industry-standard methodologies.',
    color: 'text-warning-red',
    border: 'neon-border-red',
  },
  {
    icon: Code2,
    title: 'AI/ML Security',
    description: 'Prompt injection, LLM abuse testing, RAG poisoning, model threat modeling, and AI agent authorization bypass.',
    color: 'text-cyber-blue',
    border: 'neon-border-blue',
  },
  {
    icon: FileText,
    title: 'Reporting Discipline',
    description: 'Clear, actionable security reports with CVSS v3.1 / CVSS 4.0 scoring, business impact analysis, and developer-friendly remediation guidance.',
    color: 'text-accent-purple',
    border: 'neon-border-purple',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            command="cat /profile/about.txt"
            title="About"
            subtitle="Profile — background, expertise, and approach"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main terminal window */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <TerminalWindow title="/profile/about.txt — read-only">
              <div className="font-mono text-sm space-y-4">
                <div className="flex items-center gap-2 text-gray-600 text-xs mb-4">
                  <User size={12} className="text-neon-green" />
                  <span className="text-neon-green">operator@ax-security</span>
                  <span>:~$</span>
                  <span className="text-accent-yellow">cat /profile/about.txt</span>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Au Yi Xian is a senior-level penetration tester with strong
                  experience across{' '}
                  <span className="text-neon-green">offensive security</span>,{' '}
                  <span className="text-cyber-blue">vulnerability research</span>, and{' '}
                  <span className="text-accent-purple">application security assessments</span>.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  He specializes in identifying real-world security weaknesses across{' '}
                  <span className="text-gray-300">web applications</span>,{' '}
                  <span className="text-gray-300">mobile applications</span>,{' '}
                  <span className="text-gray-300">cloud environments</span>,{' '}
                  <span className="text-gray-300">thick client applications</span>,{' '}
                  <span className="text-gray-300">kiosk &amp; lockdown environments</span>,{' '}
                  <span className="text-gray-300">source code</span>,{' '}
                  <span className="text-gray-300">APIs</span>,{' '}
                  <span className="text-gray-300">wireless networks</span>, and{' '}
                  <span className="text-gray-300">enterprise systems</span>.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  He approaches every engagement with the mindset of a real-world{' '}
                  <span className="text-warning-red">attacker</span>, identifying exploit chains
                  that automated tools consistently miss — from authentication bypass to privilege
                  escalation to AI/ML model manipulation.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  His approach combines practical exploitation knowledge, OWASP methodology,
                  CREST-aligned testing practices, CVSS v3.1 / CVSS 4.0 risk scoring, and strong
                  reporting discipline that communicates impact to both technical and executive audiences.
                </p>

                <div className="pt-4 border-t border-neon-green border-opacity-10">
                  <div className="text-xs text-gray-600 flex flex-wrap gap-x-6 gap-y-1">
                    <span>
                      <span className="text-neon-green">Location:</span>{' '}
                      <span className="text-gray-400">Singapore</span>
                    </span>
                    <span>
                      <span className="text-neon-green">GitHub:</span>{' '}
                      <a
                        href="https://github.com/yixian96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-blue hover:text-neon-green transition-colors"
                      >
                        github.com/yixian96
                      </a>
                    </span>
                    <span>
                      <span className="text-neon-green">LinkedIn:</span>{' '}
                      <a
                        href="https://www.linkedin.com/in/au-yi-xian-5a871b121"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-blue hover:text-neon-green transition-colors"
                      >
                        au-yi-xian
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-600 text-xs">
                  <span>EOF</span>
                  <span className="animate-cursor-blink text-neon-green ml-1">█</span>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Stats + highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-lg p-4 text-center neon-border-green"
                >
                  <div className={`font-display text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className={`glass-panel rounded-lg p-4 ${item.border} hover-glow-green transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon size={14} className={item.color} />
                  <span className={`text-xs font-mono font-bold ${item.color}`}>
                    {item.title}
                  </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
