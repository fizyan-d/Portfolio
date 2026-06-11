'use client';

import { BentoCard } from './BentoCard';
import { motion } from 'framer-motion';

const skillDomains = [
  {
    title: 'AI / ML',
    accent: 'cyber' as const,
    skills: ['Python', 'TensorFlow', 'Scikit-Learn', 'Deep Learning', 'Streamlit', 'NLP'],
    description: 'Algorithmic trading suites, intrusion detection engines, and predictive models.',
  },
  {
    title: 'IoT & HARDWARE',
    accent: 'neon' as const,
    skills: ['Microcontrollers', 'Sensor Arrays', 'Firmware', 'Laser Systems', 'Flow Sensors'],
    description: 'Physical security grids, bio-composter tracking, and water management nodes.',
  },
  {
    title: 'FULL-STACK & DEPLOY',
    accent: 'neon' as const,
    skills: ['React', 'Next.js', 'TypeScript', 'Streamlit', 'Lovable', 'Git'],
    description: 'Production deployments, live dashboards, and end-to-end system architecture.',
  },
  {
    title: 'CYBER SECURITY',
    accent: 'cyber' as const,
    skills: ['ML Classification', 'Network Security', 'Threat Detection', 'Perimeter Defense'],
    description: 'Web attack classification and automated laser perimeter security ecosystems.',
  },
];

export default function SkillsSection() {
  return (
    <section id="stack" className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border pb-4"
      >
        <h2 className="font-space text-xl sm:text-2xl font-bold uppercase tracking-tight">
          TECHNICAL MATRIX
        </h2>
        <span className="text-[10px] text-zinc-600 font-mono tracking-wider">
          CORE DOMAINS // 04
        </span>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {skillDomains.map((domain, i) => (
          <BentoCard key={domain.title} accent={domain.accent} delay={i * 0.08}>
            <div className="space-y-4 min-h-[180px]">
              <h3
                className={`font-space text-sm font-bold tracking-[0.15em] uppercase ${
                  domain.accent === 'cyber' ? 'text-cyber' : 'text-neon'
                }`}
              >
                {domain.title}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                {domain.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {domain.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: domain.accent === 'cyber' ? '#A855F7' : '#00FF66' }}
                    className="text-[10px] font-mono border border-border text-zinc-400 px-2.5 py-1.5 cursor-default transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
