'use client';

import { motion } from 'framer-motion';
import { Layout, Server, Database } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const STACKS = [
  {
    id: 'frontend',
    icon: Layout,
    title: 'Front-End Development',
    accent: 'text-cyber-blue',
    border: 'neon-border-blue',
    glow: 'hover:shadow-neon-blue',
    badge: 'badge-blue',
    command: 'ls ./frontend --frameworks',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript ES6+', level: 95 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Responsive UI', level: 95 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Accessibility (WCAG)', level: 80 },
      { name: 'Performance Optimization', level: 85 },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Back-End Development',
    accent: 'text-neon-green',
    border: 'neon-border-green',
    glow: 'hover:shadow-neon-green',
    badge: 'badge-green',
    command: 'ls ./backend --frameworks',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'Java / Spring Boot', level: 80 },
      { name: 'PHP / Laravel', level: 75 },
      { name: 'NestJS', level: 80 },
      { name: 'REST API Design', level: 95 },
      { name: 'Authentication Systems', level: 90 },
      { name: 'Secure API Design', level: 95 },
      { name: 'Microservices', level: 80 },
      { name: 'WebSocket / gRPC', level: 75 },
    ],
  },
  {
    id: 'infra',
    icon: Database,
    title: 'Database & Infrastructure',
    accent: 'text-accent-purple',
    border: 'neon-border-purple',
    glow: 'hover:shadow-neon-purple',
    badge: 'badge-purple',
    command: 'ls ./infrastructure --all',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL / MariaDB', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD (GitHub Actions)', level: 80 },
      { name: 'Cloud (AWS / Azure)', level: 80 },
      { name: 'Secure Architecture', level: 90 },
      { name: 'Kubernetes (basic)', level: 65 },
      { name: 'Terraform / IaC', level: 65 },
    ],
  },
];

const ACCENTBAR_COLORS: Record<string, string> = {
  'text-cyber-blue': '#00d4ff',
  'text-neon-green': '#00ff41',
  'text-accent-purple': '#bf00ff',
};

export default function DevExpertise() {
  return (
    <section id="development" className="relative py-20 md:py-28 px-4 md:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,212,255,0.02) 0%, transparent 70%)' }}
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
            command="cat /workstation/stack.config"
            title="Secure Full Stack Engineering"
            subtitle="Security-first development — visually polished, performant, and resilient against real-world attacks"
            accentColor="blue"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STACKS.map((stack, stackIndex) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: stackIndex * 0.15 }}
              className={`glass-panel rounded-lg p-5 ${stack.border} ${stack.glow} transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <stack.icon size={14} className={stack.accent} />
                <h3 className={`text-xs font-mono font-bold ${stack.accent} tracking-wide`}>
                  {stack.title}
                </h3>
              </div>
              <div className="text-gray-700 text-xs font-mono mb-5">
                <span className="text-gray-600">$</span> {stack.command}
              </div>

              {/* Skills with progress bars */}
              <div className="space-y-3">
                {stack.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">{skill.name}</span>
                      <span className={`text-xs font-mono ${stack.accent}`}>{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-gray-900 rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + stackIndex * 0.1 }}
                        className="h-full rounded"
                        style={{
                          background: `linear-gradient(90deg, ${ACCENTBAR_COLORS[stack.accent]}90, ${ACCENTBAR_COLORS[stack.accent]})`,
                          boxShadow: `0 0 4px ${ACCENTBAR_COLORS[stack.accent]}60`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-900">
                <span className={stack.badge}>PROFICIENT</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-panel rounded-lg p-6 neon-border-green text-center"
        >
          <div className="font-mono text-xs text-gray-600 mb-2">
            <span className="text-neon-green">$</span> cat positioning_statement.txt
          </div>
          <p className="text-gray-300 font-mono text-sm leading-relaxed max-w-3xl mx-auto">
            <span className="text-neon-green">&gt; </span>
            Security-first development approach — building applications that are not only visually polished
            and performant, but also{' '}
            <span className="text-neon-green">resilient against real-world attacks</span>.
            Every line of code written with the mindset of a{' '}
            <span className="text-warning-red">senior pentester</span> and a{' '}
            <span className="text-cyber-blue">senior engineer</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
