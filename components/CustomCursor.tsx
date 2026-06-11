'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMounted } from '@/hooks/useMounted';

export default function CustomCursor() {
  const mounted = useMounted();
  const [hoverType, setHoverType] = useState<'none' | 'link' | 'project' | 'hardware'>('none');
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { stiffness: 450, damping: 32, mass: 0.45 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      const closest = target.closest('[data-cursor]');
      if (closest) {
        setHoverType(closest.getAttribute('data-cursor') as typeof hoverType);
        setLabel(closest.getAttribute('data-cursor-label') || '');
      }
    };

    const handleHoverEnd = () => {
      setHoverType('none');
      setLabel('');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    const bindCursorElements = () => {
      document.querySelectorAll('[data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    bindCursorElements();

    const observer = new MutationObserver(bindCursorElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [mounted, cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[200] hidden md:block mix-blend-difference"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      suppressHydrationWarning
    >
      <motion.div
        animate={{
          width: hoverType !== 'none' ? 96 : 14,
          height: hoverType !== 'none' ? 96 : 14,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className={`rounded-full border flex items-center justify-center overflow-hidden font-space ${
          hoverType !== 'none'
            ? 'bg-white border-white text-black'
            : 'bg-transparent border-neon'
        }`}
      >
        {hoverType !== 'none' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className="text-[9px] font-bold tracking-tighter uppercase text-center px-1"
          >
            {label || 'INTERACT'}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
