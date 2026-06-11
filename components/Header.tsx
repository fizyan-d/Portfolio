'use client';

import { motion } from 'framer-motion';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const navLinks = [
  { label: 'WORK', href: '#work' },
  { label: 'STACK', href: '#stack' },
  { label: 'CONTACT', href: '#contact' },
];

const socialLinks = [
  { label: 'GITHUB', href: 'https://github.com/fizyan-d', accent: 'neon' as const },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/mohammad-fiziyan-dhada-14b563369/', accent: 'cyber' as const },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="sticky top-0 z-40 border-b border-border bg-pitch/85 backdrop-blur-lg backdrop-saturate-150"
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
        <motion.a
          href="#"
          className="font-space font-bold tracking-tighter text-lg sm:text-xl text-white group shrink-0"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          F I Z Y A N
          <span className="text-neon group-hover:opacity-80 transition-opacity duration-200">.</span>
        </motion.a>

        <nav className="hidden sm:flex items-center gap-7 lg:gap-8 text-[10px] tracking-[0.2em] text-zinc-500 font-space">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="hover:text-neon transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-neon hover:after:w-full after:transition-all after:duration-300"
              whileHover={{ y: -1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              data-cursor="link"
              data-cursor-label={link.label}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5 text-[10px] tracking-[0.15em] text-zinc-500 font-space">
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                link.accent === 'neon' ? 'hover:text-neon' : 'hover:text-cyber'
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              data-cursor="link"
              data-cursor-label={link.label}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
