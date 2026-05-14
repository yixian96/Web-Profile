'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, FileCode, Cloud, Monitor, Cpu, Wifi, Brain, Lock } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const CAPABILITIES = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web Application VAPT',
    accent: 'text-neon-green',
    border: 'neon-border-green',
    bgGlow: 'rgba(0,255,65,0.03)',
    badge: 'badge-green',
    points: [
      'OWASP Top 10 testing',
      'Authentication & authorization bypass',
      'Business logic exploitation',
      'API security testing',
      'Injection flaws (SQLi, NoSQLi, XXE)',
      'Session management review',
      'XSS / CSRF / SSRF / IDOR / RCE',
      'JWT & OAuth vulnerabilities',
      'CORS misconfiguration',
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Application VAPT',
    accent: 'text-cyber-blue',
    border: 'neon-border-blue',
    bgGlow: 'rgba(0,212,255,0.03)',
    badge: 'badge-blue',
    points: [
      'Android security testing',
      'iOS security testing',
      'Runtime analysis with Frida',
      'Reverse engineering (JADX/MobSF)',
      'Root / jailbreak detection bypass',
      'Sensitive data storage review',
      'API traffic interception (Burp)',
      'Deep link & intent exploitation',
      'Certificate pinning bypass',
    ],
  },
  {
    id: 'source',
    icon: FileCode,
    title: 'Source Code Review',
    accent: 'text-accent-purple',
    border: 'neon-border-purple',
    bgGlow: 'rgba(191,0,255,0.03)',
    badge: 'badge-purple',
    points: [
      'Manual secure code review (SAST)',
      'Authentication & authorization review',
      'Input validation analysis',
      'Cryptographic implementation review',
      'Insecure deserialization review',
      'Dangerous function identification',
      'Business logic flaw detection',
      'Secret / credential exposure',
      'Semgrep ruleset analysis',
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud VAPT',
    accent: 'text-cyber-blue',
    border: 'neon-border-blue',
    bgGlow: 'rgba(0,212,255,0.03)',
    badge: 'badge-blue',
    points: [
      'AWS security assessment',
      'IAM privilege escalation review',
      'S3 bucket permission analysis',
      'Network exposure mapping',
      'Security group misconfiguration',
      'Logging & monitoring gaps',
      'Cloud misconfiguration testing',
      'Secrets management review',
      'Container security (Docker/K8s)',
    ],
  },
  {
    id: 'thick',
    icon: Monitor,
    title: 'Thick Client Testing',
    accent: 'text-warning-red',
    border: 'neon-border-red',
    bgGlow: 'rgba(255,0,64,0.03)',
    badge: 'badge-red',
    points: [
      'Local storage & registry review',
      'Binary reverse engineering',
      'Traffic interception (Burp/Wireshark)',
      'Authentication flow analysis',
      'Hardcoded credential detection',
      'Memory analysis',
      'DLL hijacking review',
      'Anti-tampering bypass',
    ],
  },
  {
    id: 're',
    icon: Cpu,
    title: 'Reverse Engineering',
    accent: 'text-warning-red',
    border: 'neon-border-red',
    bgGlow: 'rgba(255,0,64,0.03)',
    badge: 'badge-red',
    points: [
      'Static analysis (Ghidra / IDA)',
      'Dynamic analysis & debugging',
      'Binary & PE inspection',
      'APK analysis (JADX / MobSF)',
      'Runtime instrumentation (Frida)',
      'Logic bypass analysis',
      'Obfuscation deobfuscation',
      'Malware behavior analysis',
    ],
  },
  {
    id: 'wifi',
    icon: Wifi,
    title: 'WiFi Penetration Testing',
    accent: 'text-accent-purple',
    border: 'neon-border-purple',
    bgGlow: 'rgba(191,0,255,0.03)',
    badge: 'badge-purple',
    points: [
      'Wireless encryption assessment',
      'Rogue AP / Evil Twin simulation',
      'WPA/WPA2 cracking',
      'PMKID attack',
      'Deauthentication testing',
      'Network segmentation review',
      'Client isolation bypass',
    ],
  },
  {
    id: 'kiosk',
    icon: Lock,
    title: 'Kiosk / Lockdown Breakout',
    accent: 'text-accent-yellow',
    border: 'neon-border-yellow',
    bgGlow: 'rgba(255,215,0,0.03)',
    badge: 'badge-yellow',
    points: [
      'Kiosk escape & lockdown bypass',
      'Application restriction evasion',
      'Keyboard shortcut exploitation',
      'Task manager & process escalation',
      'Accessibility feature abuse (Sticky Keys)',
      'Virtual keyboard exploitation',
      'Registry & group policy bypass',
      'Multi-monitor display manager escape',
      'DLL hijacking in restricted environments',
    ],
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI/ML Security Testing',
    accent: 'text-neon-green',
    border: 'neon-border-green',
    bgGlow: 'rgba(0,255,65,0.03)',
    badge: 'badge-green',
    points: [
      'Prompt injection (direct & indirect)',
      'LLM jailbreaking techniques',
      'Model behavior manipulation',
      'AI application threat modeling',
      'RAG poisoning & context injection',
      'Data leakage via model output',
      'AI agent authorization bypass',
      'AI supply chain security',
    ],
  },
];

export default function SecurityExpertise() {
  return (
    <section id="security" className="relative py-20 md:py-28 px-4 md:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,255,65,0.02) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            command="nmap --attack-surface --enumerate all"
            title="Security Testing Capabilities"
            subtitle="Comprehensive offensive security testing across all attack surfaces"
            accentColor="red"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`
                group glass-panel rounded-lg p-5 ${cap.border}
                hover-glow-green transition-all duration-300 cursor-default
              `}
              style={{ '--card-glow': cap.bgGlow } as React.CSSProperties}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`p-1.5 rounded ${cap.border} bg-black bg-opacity-40`}>
                  <cap.icon size={14} className={cap.accent} />
                </div>
                <h3 className={`text-xs font-mono font-bold ${cap.accent} leading-tight`}>
                  {cap.title}
                </h3>
              </div>

              {/* Points */}
              <ul className="space-y-1.5">
                {cap.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    <span className={`${cap.accent} opacity-60 mt-0.5 flex-shrink-0`}>›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom badge */}
              <div className="mt-4 pt-3 border-t border-gray-900">
                <span className={cap.badge}>ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
