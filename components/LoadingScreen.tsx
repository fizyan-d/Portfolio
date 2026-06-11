'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMounted } from '@/hooks/useMounted';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const mounted = useMounted();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 450);
          return 100;
        }
        return prev + 2;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [mounted, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 bg-pitch z-[300] flex flex-col items-center justify-center overflow-hidden font-space select-none"
      suppressHydrationWarning
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        suppressHydrationWarning
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div
        className="absolute w-full h-full opacity-20 pointer-events-none overflow-hidden"
        suppressHydrationWarning
      >
        {[15, 45, 75].map((top, i) => (
          <span
            key={top}
            className="absolute h-[1px] bg-neon animate-[lf_0.6s_linear_infinite]"
            style={{
              width: `${20 + i * 5}%`,
              top: `${top}%`,
              animationDelay: `${i * 0.3}s`,
              left: '200%',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={mounted ? { scale: 0.92, opacity: 0 } : false}
        animate={mounted ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-sm h-48 flex items-center justify-center"
        suppressHydrationWarning
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[speeder_0.4s_linear_infinite]">
          <span className="absolute h-1 w-8 bg-neon -top-4 left-[60px]">
            <span className="absolute top-0 h-[1px] bg-neon w-6 animate-[fazer_0.2s_linear_infinite]" />
            <span className="absolute top-1 h-[1px] bg-neon w-8 animate-[fazer_0.3s_linear_infinite_0.1s]" />
            <span className="absolute top-2 h-[1px] bg-cyber w-5 animate-[fazer_0.1s_linear_infinite_0.2s]" />
          </span>
          <div className="relative">
            <span className="absolute w-0 h-0 border-t-[4px] border-t-transparent border-r-[80px] border-r-neon border-b-[4px] border-b-transparent after:content-[''] after:h-4 after:w-4 after:rounded-full after:bg-neon after:absolute after:-right-[90px] after:-top-2" />
            <div className="absolute h-2 w-4 bg-neon rounded-t-full -rotate-[40deg] -right-[102px] -top-2 opacity-80" />
          </div>
        </div>
      </motion.div>

      <div className="z-10 text-center space-y-4 mt-6 w-full max-w-xs px-4" suppressHydrationWarning>
        <motion.h1
          animate={mounted ? { opacity: [0.6, 1, 0.6] } : { opacity: 1 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase"
        >
          INITIALIZING_SYSTEM
        </motion.h1>
        <p className="text-[10px] text-zinc-600 font-outfit tracking-[0.25em] uppercase">
          Synchronizing Deployed Protocols // 6 Engines Live
        </p>

        <div className="w-full max-w-[14rem] h-[3px] bg-zinc-900 mx-auto overflow-hidden border border-border">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber to-neon origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: mounted ? progress / 100 : 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            style={{ width: '100%' }}
          />
        </div>
        <p className="text-[10px] font-mono text-zinc-600 tabular-nums h-4">
          {mounted ? `${progress}%` : '0%'}
        </p>
      </div>

      <div
        className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 flex flex-col space-y-1 opacity-60 text-left"
        suppressHydrationWarning
      >
        <div className="flex items-center space-x-2 text-[9px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" />
          <span className="text-neon uppercase tracking-wider">FIZYAN_OS v1.0.0</span>
        </div>
        <div className="text-[8px] text-zinc-600 font-mono">LOC: BENGALURU, IN // B.TECH CSE AIML</div>
      </div>
    </motion.div>
  );
}
