'use client';

import { BentoCard } from './BentoCard';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-b border-border pb-4"
      >
        <h2 className="font-space text-xl sm:text-2xl font-bold uppercase tracking-tight">
          INITIATE CONTACT
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        <BentoCard accent="neon" colSpan="lg:col-span-2" delay={0}>
          <div className="space-y-6 min-h-[200px] flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-[10px] font-mono text-zinc-600 tracking-wider">// TRANSMISSION OPEN</p>
              <h3 className="font-space text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                Let&apos;s build something{' '}
                <span className="text-neon">intelligent</span>.
              </h3>
              <p className="text-zinc-400 text-sm font-light max-w-lg leading-relaxed">
                Open to collaborations on AI/ML systems, IoT hardware integrations, agentic
                development, and full-stack deployments. Based in Bengaluru, available globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Magnetic strength={0.2}>
                <motion.a
                  href="https://www.linkedin.com/in/mohammad-fiziyan-dhada-14b563369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  data-cursor="link"
                  data-cursor-label="CONNECT"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 border border-neon text-neon font-space text-xs tracking-[0.2em] uppercase hover:bg-neon hover:text-pitch transition-all duration-300"
                >
                  SEND TRANSMISSION
                </motion.a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <motion.a
                  href="https://github.com/fizyan-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  data-cursor="link"
                  data-cursor-label="GITHUB"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 border border-border text-zinc-400 font-space text-xs tracking-[0.2em] uppercase hover:border-cyber hover:text-cyber transition-all duration-300"
                >
                  VIEW GITHUB
                </motion.a>
              </Magnetic>
            </div>
          </div>
        </BentoCard>

        <BentoCard accent="cyber" delay={0.1}>
          <div className="space-y-5 min-h-[200px]">
            <p className="text-[10px] font-mono text-zinc-600 tracking-wider">// NODE INFO</p>
            {[
              { label: 'LOCATION', value: 'Bengaluru, IN' },
              { label: 'EDUCATION', value: 'B.Tech CSE AIML' },
              { label: 'STATUS', value: 'Available', highlight: true },
              { label: 'GITHUB', value: '@fizyan-d', link: 'https://github.com/fizyan-d' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-[9px] font-space tracking-[0.2em] text-zinc-600">{item.label}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cyber hover:text-purple-300 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    className={`text-sm font-medium ${
                      item.highlight ? 'text-neon flex items-center gap-2' : 'text-white'
                    }`}
                  >
                    {item.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                    )}
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
