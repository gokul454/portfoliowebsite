import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode } from 'react-icons/fi';
import type { Project } from '@/types';
import ProjectCover from './ProjectCover';
import { fadeUp, viewportOnce } from '@/animations/variants';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <Link to={`/work/${project.id}`} className="group block">
        <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? 'md:[direction:rtl]' : ''}`}>
          <div className="aspect-[4/3] overflow-hidden glass-panel rounded-lg relative [direction:ltr] p-2">
            <div className="w-full h-full rounded bg-base/50 overflow-hidden relative">
              <motion.div
                className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <ProjectCover variant={project.cover} className="w-full h-full mix-blend-luminosity group-hover:mix-blend-normal" />
              </motion.div>
            </div>
            
            <div className="absolute top-6 right-6 w-10 h-10 rounded bg-accent/10 border border-accent/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:glow-cyan">
              <FiArrowRight className="text-accent text-xl" />
            </div>
          </div>

          <div className="[direction:ltr]">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-secondary text-sm">{`// ${project.index}`}</span>
              <span className="hairline w-8" />
              <span className="font-mono text-accent text-sm uppercase">{project.category}</span>
            </div>
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-ink group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-secondary transition-all duration-300">
              {project.title}
            </h3>
            <p className="mt-4 text-ink-soft font-mono text-sm tracking-widest uppercase flex items-center gap-2">
              <FiCode className="text-accent" /> {project.client}
              {project.duration ? ` [${project.duration}]` : ''}
            </p>
            <p className="mt-6 text-ink-soft leading-relaxed max-w-md">{project.overview}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.7rem] tracking-widest uppercase border border-line/30 px-3 py-1.5 rounded bg-surface text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase text-accent hover:glow-text-cyan transition-all duration-300">
              EXECUTE_CASE_STUDY <FiArrowRight />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
