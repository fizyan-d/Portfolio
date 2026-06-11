'use client';

import { BentoCard } from './BentoCard';
import { motion } from 'framer-motion';

const stats = [
  { metric: '6+', title: 'COMPLETED ENGINES', accent: 'neon' as const },
  { metric: '3', title: 'DEPLOYED LIVE APPS', accent: 'cyber' as const },
  { metric: 'IoT EXPO', title: 'PROTOTYPE FEATURES', accent: 'neon' as const },
  { metric: 'B.TECH', title: 'CSE AIML MATRIX', accent: 'cyber' as const },
];

export default function StatsBento() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, i) => (
        <BentoCard key={stat.title} accent={stat.accent} delay={i * 0.08} magnetic={false}>
          <div className="flex flex-col justify-between min-h-[100px] sm:min-h-[120px]">
            <motion.span
              className={`font-space text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                stat.accent === 'neon' ? 'text-white' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {stat.metric}
            </motion.span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-zinc-500 mt-3 block font-medium font-space">
              {stat.title}
            </span>
            <div
              className={`absolute bottom-0 right-0 w-8 h-8 border-t border-l ${
                stat.accent === 'neon' ? 'border-neon/20' : 'border-cyber/20'
              }`}
            />
          </div>
        </BentoCard>
      ))}
    </section>
  );
}
