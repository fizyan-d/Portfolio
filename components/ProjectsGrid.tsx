'use client';

import { BentoCard } from './BentoCard';
import { motion } from 'framer-motion';
import { projectsData, type Project } from '@/data/projects';

function categoryAccent(category: Project['category']): 'neon' | 'cyber' | 'none' {
  if (category === 'AI / ML') return 'cyber';
  if (category === 'IoT Hardware') return 'neon';
  if (category === 'Cyber Security') return 'cyber';
  return 'neon';
}

function statusColor(status: Project['status']) {
  switch (status) {
    case 'DEPLOYED':
      return 'text-neon bg-neon/10 border-neon/20';
    case 'EXPO PROTOTYPE':
      return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
    default:
      return 'text-cyber bg-cyber/10 border-cyber/20';
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = categoryAccent(project.category);
  const isFeatured = index === 0;

  return (
    <BentoCard
      accent={accent}
      delay={index * 0.06}
      colSpan={isFeatured ? 'lg:col-span-2' : ''}
      cursorType="project"
      cursorLabel={project.status}
      magnetic
    >
      <div className={`flex flex-col justify-between ${isFeatured ? 'min-h-[280px]' : 'min-h-[240px]'}`}>
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span
              className={`text-[10px] font-space tracking-wider font-bold uppercase px-2 py-1 border ${
                accent === 'cyber'
                  ? 'text-cyber bg-cyber/10 border-cyber/20'
                  : 'text-neon bg-neon/10 border-neon/20'
              }`}
            >
              {project.category}
            </span>
            <span className={`text-[9px] font-mono px-2 py-0.5 border ${statusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          <h3 className="font-space text-lg sm:text-xl font-bold tracking-tight uppercase group-hover:text-neon transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
            {project.description}
          </p>

          {project.highlight && (
            <p className="text-[10px] font-mono text-zinc-600 tracking-wide">
              // {project.highlight}
            </p>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5 max-w-[60%]">
            {project.techStack.slice(0, isFeatured ? 5 : 3).map((tech) => (
              <span
                key={tech}
                className="text-[9px] bg-pitch border border-border text-zinc-500 px-2 py-1 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-space tracking-tighter shrink-0">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="text-zinc-500 hover:text-white uppercase font-bold text-[11px] min-h-[44px] flex items-center"
                onClick={(e) => e.stopPropagation()}
              >
                CODE
              </motion.a>
            )}
            {project.deployed && (
              <motion.a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-neon hover:text-emerald-300 uppercase font-bold text-[11px] flex items-center gap-1 min-h-[44px]"
                onClick={(e) => e.stopPropagation()}
              >
                LIVE
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="work" className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border pb-4"
      >
        <h2 className="font-space text-xl sm:text-2xl font-bold uppercase tracking-tight">
          ENGINEERING REGISTRY
        </h2>
        <span className="text-[10px] text-zinc-600 font-mono tracking-wider">
          SELECT ARCHIVE // 01 — 06
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
