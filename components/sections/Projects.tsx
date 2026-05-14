'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, FileCode, Cloud, Lock, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const PROJECTS = [
  {
    id: 'web-vapt',
    caseId: 'CASE-0x001',
    classification: 'CONFIDENTIAL',
    icon: Globe,
    title: 'Web Application VAPT',
    category: 'Offensive Security',
    tags: ['OWASP Top 10', 'API Security', 'Auth Bypass'],
    color: 'text-neon-green',
    border: 'neon-border-green',
    accentHex: '#00ff41',
    description:
      'Performed end-to-end web application security testing covering authentication bypass, authorization flaws, business logic vulnerabilities, injection attacks, session management weaknesses, and API security issues. Identified critical exploit chains enabling account takeover.',
    findings: ['Auth bypass via JWT weakness', 'IDOR in API endpoints', 'Stored XSS in admin panel', 'SQLi in search function'],
    severity: 'Critical',
    severityColor: 'text-warning-red',
  },
  {
    id: 'mobile-vapt',
    caseId: 'CASE-0x002',
    classification: 'CONFIDENTIAL',
    icon: Smartphone,
    title: 'Mobile Application VAPT',
    category: 'Offensive Security',
    tags: ['Android', 'iOS', 'Frida', 'Reverse Engineering'],
    color: 'text-cyber-blue',
    border: 'neon-border-blue',
    accentHex: '#00d4ff',
    description:
      'Conducted Android/iOS security testing including runtime analysis with Frida, reverse engineering of binaries, sensitive data exposure via insecure storage, certificate pinning bypass, and deep API traffic interception.',
    findings: ['Hardcoded API keys', 'Sensitive data in SharedPreferences', 'Certificate pinning bypass', 'Insecure IPC channels'],
    severity: 'High',
    severityColor: 'text-warning-red',
  },
  {
    id: 'source-review',
    caseId: 'CASE-0x003',
    classification: 'RESTRICTED',
    icon: FileCode,
    title: 'Source Code Review',
    category: 'Security Review',
    tags: ['SAST', 'Manual Review', 'Semgrep'],
    color: 'text-accent-purple',
    border: 'neon-border-purple',
    accentHex: '#bf00ff',
    description:
      'Performed manual secure code review identifying insecure coding patterns, weak cryptographic implementations, dangerous deserialization paths, hardcoded secrets, and business logic flaws invisible to automated tools.',
    findings: ['Weak MD5 password hashing', 'Insecure deserialization', 'Command injection in admin tools', 'Race condition in payment flow'],
    severity: 'Critical',
    severityColor: 'text-warning-red',
  },
  {
    id: 'cloud-assess',
    caseId: 'CASE-0x004',
    classification: 'CONFIDENTIAL',
    icon: Cloud,
    title: 'Cloud Security Assessment',
    category: 'Infrastructure Security',
    tags: ['AWS', 'IAM', 'S3', 'Misconfiguration'],
    color: 'text-cyber-blue',
    border: 'neon-border-blue',
    accentHex: '#00d4ff',
    description:
      'Reviewed AWS cloud configurations covering IAM privilege escalation paths, publicly exposed S3 buckets, over-permissive security groups, missing CloudTrail logging, and secrets exposed in environment variables.',
    findings: ['Public S3 bucket with PII', 'IAM privilege escalation path', 'Missing encryption at rest', 'Exposed EC2 metadata service'],
    severity: 'High',
    severityColor: 'text-warning-red',
  },
  {
    id: 'thick-client',
    caseId: 'CASE-0x006',
    classification: 'RESTRICTED',
    icon: Lock,
    title: 'Thick Client Assessment',
    category: 'Offensive Security',
    tags: ['Reverse Engineering', 'Binary Analysis', 'DLL Hijack'],
    color: 'text-warning-red',
    border: 'neon-border-red',
    accentHex: '#ff0040',
    description:
      'Assessed thick client application for local privilege escalation, hardcoded credentials, unencrypted sensitive data in registry, DLL hijacking opportunities, and insecure communication channels.',
    findings: ['DLL hijacking via PATH', 'Credentials in registry', 'Cleartext API tokens in memory', 'Insecure update mechanism'],
    severity: 'Critical',
    severityColor: 'text-warning-red',
  },
];

const CLASS_COLORS: Record<string, string> = {
  CONFIDENTIAL: 'text-warning-red border-warning-red',
  RESTRICTED: 'text-accent-purple border-accent-purple',
  UNCLASSIFIED: 'text-neon-green border-neon-green',
};

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            command="ls /archive/cases --decrypt --all"
            title="Decrypted Case Files"
            subtitle="Classified engagement archive — click to expand file contents"
            accentColor="red"
          />
        </motion.div>

        {/* Archive header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8 font-mono text-xs text-gray-700 flex items-center gap-4"
        >
          <span className="text-warning-red">ARCHIVE STATUS: DECRYPTED</span>
          <span>|</span>
          <span>{PROJECTS.length} case files loaded</span>
          <span>|</span>
          <span className="text-neon-green">AES-256-GCM</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
                className={`
                  glass-panel rounded-lg p-5 cursor-pointer
                  ${project.border} transition-all duration-300
                  ${isExpanded ? 'shadow-lg' : 'hover:-translate-y-1'}
                `}
                style={isExpanded ? { boxShadow: `0 0 30px ${project.accentHex}20` } : {}}
              >
                {/* File header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <project.icon size={14} className={project.color} />
                    <span className={`text-xs font-mono ${project.color}`}>{project.caseId}</span>
                  </div>
                  <div
                    className={`text-xs font-mono border px-2 py-0.5 ${
                      CLASS_COLORS[project.classification]
                    } border-opacity-50`}
                    style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}
                  >
                    {project.classification}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-mono text-sm font-bold ${project.color} mb-1`}>
                  {project.title}
                </h3>
                <div className="text-gray-600 text-xs mb-3">{project.category}</div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-gray-600 text-xs font-mono border border-gray-800 px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand indicator */}
                <div className={`flex items-center gap-1 text-xs font-mono ${project.color} opacity-60`}>
                  <ChevronRight
                    size={12}
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                  />
                  <span>{isExpanded ? 'collapse' : 'read file'}</span>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-gray-900 space-y-3">
                        <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>

                        <div>
                          <div className={`text-xs font-mono ${project.color} mb-2`}>
                            {'>'} key_findings:
                          </div>
                          <ul className="space-y-1">
                            {project.findings.map((finding) => (
                              <li key={finding} className="flex items-start gap-2 text-xs text-gray-500">
                                <span className={`${project.color} opacity-60`}>›</span>
                                <span>{finding}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <span className="text-xs text-gray-600 font-mono">severity:</span>
                          <span className={`text-xs font-mono font-bold ${project.severityColor}`}>
                            {project.severity}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
