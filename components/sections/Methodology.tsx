'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const STEPS = [
  {
    step: '01',
    title: 'Reconnaissance',
    description: 'Passive and active information gathering — OSINT, asset discovery, technology fingerprinting, and attack surface enumeration.',
    status: 'COMPLETE',
    color: 'text-neon-green',
    border: 'border-neon-green border-opacity-30',
  },
  {
    step: '02',
    title: 'Threat Modeling',
    description: 'STRIDE analysis, trust boundary mapping, data flow diagramming, and risk prioritization based on asset criticality.',
    status: 'COMPLETE',
    color: 'text-neon-green',
    border: 'border-neon-green border-opacity-30',
  },
  {
    step: '03',
    title: 'Attack Surface Mapping',
    description: 'Comprehensive enumeration of entry points — APIs, authentication flows, file upload handlers, and parameter analysis.',
    status: 'COMPLETE',
    color: 'text-cyber-blue',
    border: 'border-cyber-blue border-opacity-30',
  },
  {
    step: '04',
    title: 'Vulnerability Discovery',
    description: 'Manual testing combined with automated scanning — prioritizing business logic, authorization, and injection vulnerabilities.',
    status: 'EXECUTING',
    color: 'text-accent-yellow',
    border: 'border-accent-yellow border-opacity-30',
  },
  {
    step: '05',
    title: 'Exploitation Validation',
    description: 'Proof-of-concept development to confirm exploitability, assess real-world impact, and identify exploit chain opportunities.',
    status: 'EXECUTING',
    color: 'text-accent-yellow',
    border: 'border-accent-yellow border-opacity-30',
  },
  {
    step: '06',
    title: 'Risk Assessment',
    description: 'CVSS v3.1 / CVSS 4.0 scoring, business impact analysis, exploitability assessment, and prioritization for remediation.',
    status: 'PENDING',
    color: 'text-accent-purple',
    border: 'border-accent-purple border-opacity-30',
  },
  {
    step: '07',
    title: 'Reporting',
    description: 'Executive summary and technical detail — clear findings with reproduction steps, screenshots, and business context.',
    status: 'PENDING',
    color: 'text-accent-purple',
    border: 'border-accent-purple border-opacity-30',
  },
  {
    step: '08',
    title: 'Remediation Advisory',
    description: 'Developer-friendly guidance with code examples, secure configuration references, and library-specific recommendations.',
    status: 'PENDING',
    color: 'text-gray-500',
    border: 'border-gray-800',
  },
  {
    step: '09',
    title: 'Validation Testing',
    description: 'Re-testing verified fixes, regression testing of adjacent functions, and confirmation of remediation effectiveness.',
    status: 'PENDING',
    color: 'text-gray-500',
    border: 'border-gray-800',
  },
];

const FRAMEWORKS = [
  { name: 'OWASP WSTG', color: 'badge-green' },
  { name: 'OWASP ASVS', color: 'badge-green' },
  { name: 'OWASP MAS', color: 'badge-green' },
  { name: 'OWASP API Top 10', color: 'badge-green' },
  { name: 'PTES', color: 'badge-blue' },
  { name: 'CREST Methodology', color: 'badge-blue' },
  { name: 'MITRE ATT&CK', color: 'badge-red' },
  { name: 'CVSS v3.1 / 4.0', color: 'badge-purple' },
];

const STATUS_COLORS: Record<string, string> = {
  COMPLETE: 'text-neon-green',
  EXECUTING: 'text-accent-yellow',
  PENDING: 'text-gray-600',
};

export default function Methodology() {
  return (
    <section id="methodology" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            command="cat /methodology/engagement_flow.sh"
            title="Testing Methodology"
            subtitle="Structured engagement lifecycle — from reconnaissance to validated remediation"
            accentColor="purple"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[23px] top-6 bottom-6 timeline-line w-0.5" />

              <div className="space-y-4">
                {STEPS.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex gap-4"
                  >
                    {/* Step number circle */}
                    <div
                      className={`
                        relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                        border ${step.border} glass-panel
                      `}
                    >
                      <span className={`font-mono text-xs font-bold ${step.color}`}>
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 glass-panel rounded-lg p-4 border ${step.border} mb-1`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-mono text-sm font-bold ${step.color}`}>
                          {step.title}
                        </h3>
                        <span className={`text-xs font-mono ${STATUS_COLORS[step.status]} flex items-center gap-1`}>
                          {step.status === 'EXECUTING' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow animate-pulse" />
                          )}
                          {step.status === 'COMPLETE' && (
                            <span className="text-neon-green">✓</span>
                          )}
                          {step.status}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Frameworks sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Frameworks */}
            <div className="glass-panel rounded-lg p-5 neon-border-green">
              <div className="font-mono text-xs text-neon-green mb-4 flex items-center gap-2">
                <span className="text-gray-600">$</span>
                <span>frameworks --list</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {FRAMEWORKS.map((fw) => (
                  <span key={fw.name} className={fw.color}>
                    {fw.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="glass-panel rounded-lg p-5 neon-border-blue">
              <div className="font-mono text-xs text-cyber-blue mb-3">
                <span className="text-gray-600">$</span> philosophy --read
              </div>
              <div className="space-y-3 text-xs text-gray-500 leading-relaxed">
                <p>
                  <span className="text-neon-green">›</span> Validate every finding before reporting — no false positives.
                </p>
                <p>
                  <span className="text-cyber-blue">›</span> Think like an attacker, report like a consultant.
                </p>
                <p>
                  <span className="text-accent-purple">›</span> Exploit chains amplify low-severity findings.
                </p>
                <p>
                  <span className="text-warning-red">›</span> Business impact matters more than technical severity alone.
                </p>
                <p>
                  <span className="text-neon-green">›</span> Remediations must be developer-friendly and actionable.
                </p>
              </div>
            </div>

            {/* Standards */}
            <div className="glass-panel rounded-lg p-5 neon-border-purple">
              <div className="font-mono text-xs text-accent-purple mb-3">
                <span className="text-gray-600">$</span> standards --active
              </div>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { key: 'CVSS', val: 'v3.1 / 4.0 scoring' },
                  { key: 'Risk', val: 'Critical/High/Med/Low' },
                  { key: 'Reports', val: 'Technical + Executive' },
                  { key: 'Retest', val: 'Included by default' },
                ].map((item) => (
                  <div key={item.key} className="flex justify-between">
                    <span className="text-gray-600">{item.key}:</span>
                    <span className="text-gray-400">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
