'use client';

import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import NoiseOverlay from '@/components/NoiseOverlay';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBento from '@/components/StatsBento';
import ProjectsGrid from '@/components/ProjectsGrid';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useMounted } from '@/hooks/useMounted';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function Home() {
  const mounted = useMounted();
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (!mounted) {
    return (
      <div
        className="min-h-screen bg-pitch"
        aria-hidden="true"
        suppressHydrationWarning
      />
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          {...pageTransition}
          className="min-h-screen bg-pitch text-white relative font-outfit overflow-x-hidden"
          suppressHydrationWarning
        >
          <CustomCursor />
          <NoiseOverlay />

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.12]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            }}
          />

          <Header />

          <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-20 sm:pb-28 space-y-20 sm:space-y-24">
            <Hero />
            <StatsBento />
            <ProjectsGrid />
            <SkillsSection />
            <ContactSection />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
