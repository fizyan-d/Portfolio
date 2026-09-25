'use client';

import { BentoCard } from './BentoCard';
import { motion } from 'framer-motion';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border pb-4"
      >
        <h2 className="font-space text-xl sm:text-2xl font-bold uppercase tracking-tight">
          HONORS & RECOGNITION
        </h2>
        <span className="text-[10px] text-zinc-600 font-mono tracking-wider">
          AWARDS // 01
        </span>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        <BentoCard accent="cyber" delay={0}>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-[10px] font-space tracking-wider font-bold uppercase px-2 py-1 border text-cyber bg-cyber/10 border-cyber/20">
                1ST PRIZE WINNER
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 border text-neon bg-neon/10 border-neon/20">
                SEPTEMBER 3, 2026
              </span>
            </div>

            <h3 className="font-space text-lg sm:text-xl font-bold tracking-tight uppercase group-hover:text-neon transition-colors duration-300">
              🏆 Track 1 — Building AI Agents on AWS
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              Won 1st Prize at IdeateBLR &apos;26 (AI Ideathon), held at REVA University, Bengaluru, as part of Bengaluru Tech Week 2026. Organized by AWS Cloud Club REVA in collaboration with AiFi Club REVA. Project: ArchForge — an AI agent that assesses architectural and design feasibility.
            </p>

            <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-[10px] font-mono text-zinc-600 tracking-wide">
                // PROJECT: ARCHFORGE // AWS SBG RU × AIFI
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] bg-pitch border border-border text-zinc-500 px-2 py-1 font-mono">
                  AWS AI Agents
                </span>
                <span className="text-[9px] bg-pitch border border-border text-zinc-500 px-2 py-1 font-mono">
                  IdeateBLR &apos;26
                </span>
                <span className="text-[9px] bg-pitch border border-border text-zinc-500 px-2 py-1 font-mono">
                  REVA University
                </span>
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
