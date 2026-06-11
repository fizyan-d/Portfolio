'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import Magnetic from './Magnetic';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  accent?: 'neon' | 'cyber' | 'none';
  colSpan?: string;
  rowSpan?: string;
  delay?: number;
  magnetic?: boolean;
  href?: string;
  cursorType?: string;
  cursorLabel?: string;
}

export function BentoCard({
  children,
  className = '',
  accent = 'none',
  colSpan = '',
  rowSpan = '',
  delay = 0,
  magnetic = true,
  href,
  cursorType,
  cursorLabel,
}: BentoCardProps) {
  const accentColors = {
    neon: 'group-hover:border-neon/50 group-hover:glow-neon',
    cyber: 'group-hover:border-cyber/50 group-hover:glow-cyber',
    none: 'group-hover:border-zinc-600',
  };

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      whileHover={{ scale: 1.008, y: -2 }}
      whileTap={{ scale: 0.985 }}
      data-cursor={cursorType}
      data-cursor-label={cursorLabel}
      className={`
        group relative overflow-hidden
        border border-border bg-surface
        rounded-none p-5 sm:p-6
        transition-[border-color,box-shadow] duration-300 ease-out
        ${accentColors[accent]}
        ${colSpan} ${rowSpan}
        ${className}
      `}
      suppressHydrationWarning
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon/[0.04] via-transparent to-cyber/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );

  if (magnetic) {
    return (
      <Magnetic strength={0.12} className={`h-full ${colSpan} ${rowSpan}`}>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
            {inner}
          </a>
        ) : (
          inner
        )}
      </Magnetic>
    );
  }

  return inner;
}
