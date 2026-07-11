import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowUpRight, FiTerminal } from 'react-icons/fi';
import { usePortfolio } from '@/context/PortfolioContext';
import type { Project } from '@/types';
import ProjectCover from '@/components/project/ProjectCover';
import Reveal from '@/components/ui/Reveal';
import { fadeUp, viewportOnce } from '@/animations/variants';
import Button from '@/components/ui/Button';

const blocks: { key: keyof Project; label: string; index: string }[] = [
  { key: 'problem', label: 'Problem', index: '0x01' },
  { key: 'solution', label: 'Solution', index: '0x02' },
  { key: 'challenges', label: 'Challenges', index: '0x03' },
  { key: 'outcome', label: 'Outcome', index: '0x04' },
  { key: 'lessons', label: 'Lessons Learned', index: '0x05' },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const { projects, loading } = usePortfolio();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="w-12 h-12 border border-dashed border-accent rounded-full animate-spin"></div>
      </div>
    );
  }

  const project = projects.find((p) => p.id === id);
  const index = projects.findIndex((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <Link
          to="/#projects"
          className="font-mono text-xs tracking-widest uppercase text-ink-soft hover:text-accent hover:glow-text-cyan transition-all duration-300 inline-flex items-center gap-2 mb-10"
        >
          <FiArrowLeft /> TERMINATE_PROCESS
        </Link>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-secondary text-sm">{`// ${project.index}`}</span>
            <span className="hairline w-8" />
            <span className="font-mono text-accent text-sm uppercase">{project.category}</span>
          </div>
          <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] text-ink text-balance max-w-4xl">
            {project.title}
          </h1>
          <p className="mt-6 text-ink-soft font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <FiTerminal className="text-accent" /> {project.client}
            {project.duration ? ` [${project.duration}]` : ''}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-14 aspect-[21/9] glass-panel rounded-lg overflow-hidden border border-line/30 p-2"
        >
          <div className="w-full h-full rounded overflow-hidden relative">
            <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10"></div>
            <ProjectCover variant={project.cover} className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
          </div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="sticky top-28 space-y-10 glass-panel p-8 rounded-lg border border-line/30">
                <div>
                  <h3 className="font-mono text-accent text-sm tracking-widest uppercase mb-4 glow-text-cyan">Overview</h3>
                  <p className="text-ink-soft font-light leading-relaxed">{project.overview}</p>
                </div>
                <div>
                  <h3 className="font-mono text-accent text-sm tracking-widest uppercase mb-4 glow-text-cyan">Responsibilities</h3>
                  <ul className="space-y-3">
                    {project.responsibilities.map((r) => (
                      <li key={r} className="text-ink-soft font-light text-sm flex gap-3">
                        <span className="text-secondary font-mono">{'>'}</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-accent text-sm tracking-widest uppercase mb-4 glow-text-cyan">Technology</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[0.7rem] tracking-widest uppercase border border-line/30 bg-surface px-3 py-1.5 rounded text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="glass-panel p-8 md:p-12 rounded-lg border border-line/30 flex flex-col gap-12">
              {blocks.map((b) => (
                <motion.div
                  key={b.key}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeUp}
                  className="border-t border-line/30 pt-12 first:pt-0 first:border-t-0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center px-3 py-1 rounded bg-secondary/10 border border-secondary/30 text-secondary font-mono text-xs font-bold tracking-widest glow-purple" style={{ textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}>
                      {b.index}
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-ink">{b.label}</h2>
                  </div>
                  <p className="text-ink-soft font-light leading-relaxed max-w-3xl">
                    {project[b.key] as string}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {next && (
          <div className="mt-24 pt-10 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-xs text-ink-soft tracking-widest uppercase mb-6">{'// NEXT_DEPLOYMENT'}</span>
            <Link
              to={`/work/${next.id}`}
              className="group font-display font-bold text-4xl md:text-5xl text-ink hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-accent hover:to-secondary transition-all duration-300"
            >
              {next.title}
            </Link>

            <div className="mt-16">
              <Button href="/#contact" icon={<FiArrowUpRight />} variant="ghost">
                INITIALIZE_SIMILAR_PROJECT
              </Button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
