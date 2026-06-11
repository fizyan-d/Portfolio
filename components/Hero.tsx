'use client';

import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15, duration: 0.55, ease: EASE }}
      className="inline-flex items-center gap-2.5 border border-neon/25 bg-neon/[0.06] text-neon font-space font-bold px-3.5 py-2 text-[10px] tracking-[0.18em] uppercase"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
      </span>
      <span>AVAILABLE FOR AGENTIC DEVELOPMENT</span>
    </motion.div>
  );
}

const titleWords = ['BUILDING', 'INTELLIGENT', 'SYSTEMS', 'THAT', 'BRIDGE'];

export default function Hero() {
  return (
    <section className="space-y-7 sm:space-y-9 max-w-4xl">
      <StatusBadge />

      <h1 className="font-space text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tighter leading-[0.92] text-white uppercase">
        {titleWords.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease: EASE }}
            className="inline-block mr-[0.22em]"
          >
            {word}
          </motion.span>
        ))}
        <br />
        <motion.span
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.65, ease: EASE }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon via-emerald-400 to-cyber mt-1"
        >
          HARDWARE & AI
        </motion.span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62, duration: 0.55, ease: EASE }}
        className="space-y-5"
      >
        <p className="text-zinc-400 tracking-wide text-sm md:text-base font-light max-w-xl leading-[1.75]">
          Mohammad Fiziyan Dhada — Full-Stack Developer, IoT Systems Engineer, and entrepreneur
          based in <span className="text-white font-medium">Bengaluru</span>. Specializing in
          Artificial Intelligence, Machine Learning, and embedded hardware. Transforming complex
          automation frameworks into deployed, production-ready systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
          <Magnetic strength={0.2}>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              data-cursor="link"
              data-cursor-label="VIEW_WORK"
              className="inline-flex items-center justify-center min-h-[52px] px-7 sm:px-8 border border-neon bg-neon/[0.08] text-neon font-space text-[11px] tracking-[0.18em] uppercase hover:bg-neon hover:text-pitch transition-colors duration-300"
            >
              VIEW ENGINEERING REGISTRY
            </motion.a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              data-cursor="link"
              data-cursor-label="CONTACT"
              className="inline-flex items-center justify-center min-h-[52px] px-7 sm:px-8 border border-border text-zinc-400 font-space text-[11px] tracking-[0.18em] uppercase hover:border-cyber/60 hover:text-cyber transition-all duration-300"
            >
              INITIATE CONTACT
            </motion.a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
