'use client';

import { motion } from 'framer-motion';

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-t border-border mt-20 sm:mt-28"
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600">
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          <span>FIZYAN_OS v1.0.0 — ALL SYSTEMS NOMINAL</span>
        </div>
        <p className="text-[10px] font-space tracking-[0.15em] text-zinc-600 uppercase tabular-nums">
          © {COPYRIGHT_YEAR} Mohammad Fiziyan Dhada
        </p>
        <div className="flex items-center gap-5 text-[10px] font-space tracking-[0.15em] text-zinc-600">
          <a
            href="https://github.com/fizyan-d"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon transition-colors duration-200 min-h-[44px] flex items-center"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-fiziyan-dhada-14b563369/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber transition-colors duration-200 min-h-[44px] flex items-center"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
