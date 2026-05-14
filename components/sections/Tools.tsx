'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const TOOL_GROUPS = [
  {
    id: 'web',
    label: 'Web / API',
    badge: 'badge-green',
    color: 'text-neon-green',
    tools: [
      { name: 'Burp Suite', desc: 'Web app proxy & scanner' },
      { name: 'OWASP ZAP', desc: 'Automated scanner' },
      { name: 'SQLmap', desc: 'SQL injection tool' },
      { name: 'ffuf', desc: 'Web fuzzer' },
      { name: 'Nikto', desc: 'Web server scanner' },
      { name: 'testssl.sh', desc: 'TLS/SSL scanner' },
      { name: 'sslscan', desc: 'SSL cipher tester' },
      { name: 'sslyze', desc: 'SSL/TLS analyzer' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    badge: 'badge-blue',
    color: 'text-cyber-blue',
    tools: [
      { name: 'Frida', desc: 'Dynamic instrumentation' },
      { name: 'JADX', desc: 'Android decompiler' },
      { name: 'MobSF', desc: 'Mobile security framework' },
      { name: 'APKTool', desc: 'APK disassembler' },
      { name: 'objection', desc: 'Runtime mobile explorer' },
      { name: 'drozer', desc: 'Android attack framework' },
    ],
  },
  {
    id: 're',
    label: 'Reverse Engineering',
    badge: 'badge-red',
    color: 'text-warning-red',
    tools: [
      { name: 'Ghidra', desc: 'NSA reverse engineering' },
      { name: 'IDA Pro', desc: 'Binary disassembler' },
      { name: 'x64dbg', desc: 'Windows debugger' },
      { name: 'radare2', desc: 'Binary analysis' },
      { name: 'Cutter', desc: 'Radare2 GUI frontend' },
      { name: 'PEStudio', desc: 'PE file analyzer' },
    ],
  },
  {
    id: 'network',
    label: 'Network / Infra',
    badge: 'badge-purple',
    color: 'text-accent-purple',
    tools: [
      { name: 'Nmap', desc: 'Network scanner' },
      { name: 'Nessus', desc: 'Vulnerability scanner' },
      { name: 'Metasploit', desc: 'Exploitation framework' },
      { name: 'Wireshark', desc: 'Packet analyzer' },
      { name: 'Responder', desc: 'LLMNR/NBT-NS poisoner' },
      { name: 'BloodHound', desc: 'AD attack paths' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    badge: 'badge-blue',
    color: 'text-cyber-blue',
    tools: [
      { name: 'Trivy', desc: 'Container scanner' },
      { name: 'ScoutSuite', desc: 'Cloud auditing tool' },
      { name: 'Prowler', desc: 'AWS security tool' },
      { name: 'CloudMapper', desc: 'AWS network visualization' },
      { name: 'pacu', desc: 'AWS exploitation framework' },
    ],
  },
  {
    id: 'sast',
    label: 'Source Code Review',
    badge: 'badge-yellow',
    color: 'text-accent-yellow',
    tools: [
      { name: 'Semgrep', desc: 'Static analysis rules' },
      { name: 'OWASP Dep-Check', desc: 'Dependency scanner' },
      { name: 'Snyk', desc: 'SCA & SAST tool' },
      { name: 'SonarQube', desc: 'Code quality & security' },
      { name: 'Bandit', desc: 'Python SAST' },
      { name: 'SpotBugs', desc: 'Java static analyzer' },
    ],
  },
  {
    id: 'dev',
    label: 'Development',
    badge: 'badge-green',
    color: 'text-neon-green',
    tools: [
      { name: 'Docker', desc: 'Containerization' },
      { name: 'Git', desc: 'Version control' },
      { name: 'Linux / Kali', desc: 'Primary OS environment' },
      { name: 'VS Code', desc: 'Primary IDE' },
      { name: 'Postman', desc: 'API testing client' },
      { name: 'GitHub Actions', desc: 'CI/CD pipelines' },
    ],
  },
];

export default function Tools() {
  return (
    <section id="tools" className="relative py-20 md:py-28 px-4 md:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 50%, rgba(191,0,255,0.02) 0%, transparent 70%)' }}
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
            command="ls /toolbox --categorized --all"
            title="Security Toolbox"
            subtitle="Offensive security and development toolkit — actively maintained"
            accentColor="purple"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TOOL_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass-panel rounded-lg p-4 neon-border-green hover-glow-green transition-all duration-300"
            >
              {/* Group header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-900">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-green opacity-60" />
                  <span className={`text-xs font-mono font-bold ${group.color}`}>
                    {group.label}
                  </span>
                </div>
                <span className={group.badge}>{group.tools.length}</span>
              </div>

              {/* Tools list */}
              <div className="space-y-2.5">
                {group.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: groupIndex * 0.1 + toolIndex * 0.05 }}
                    className="flex items-start gap-2 group cursor-default"
                  >
                    <span className={`${group.color} opacity-50 mt-0.5 text-xs`}>›</span>
                    <div>
                      <div className={`text-xs font-mono font-medium ${group.color} group-hover:opacity-100 opacity-80 transition-opacity`}>
                        {tool.name}
                      </div>
                      <div className="text-xs text-gray-700 mt-0.5">{tool.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center font-mono text-xs text-gray-700"
        >
          <span className="text-gray-600">$</span> echo &quot;All tools used in authorized engagements only. Ethical use enforced.&quot;
          <br />
          <span className="text-neon-green mt-1 inline-block">
            All tools used in authorized engagements only. Ethical use enforced.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
