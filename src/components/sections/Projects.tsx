import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/project/ProjectCard';
import { usePortfolio } from '@/context/PortfolioContext';

export default function Projects() {
  const { projects, loading } = usePortfolio();

  return (
    <section id="projects" className="px-6 md:px-12 py-16 md:py-24 relative">
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <SectionHeading
          index="0x04"
          label="DEPLOYMENTS"
          title="Selected enterprise modules."
          description="A log of deployed solutions, engineered for scale and operational efficiency."
        />

        {loading ? (
          <div className="mt-12 md:mt-16 flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border border-dashed border-accent rounded-full animate-spin"></div>
            <div className="mt-4 font-mono text-sm tracking-widest text-accent/50 uppercase">Loading Data...</div>
          </div>
        ) : projects.length === 0 ? (
          <div className="mt-12 md:mt-16 text-center font-mono text-ink-soft opacity-50 py-20">
            NO PROJECTS FOUND IN DATABASE
          </div>
        ) : (
          <div className="mt-12 md:mt-16 flex flex-col gap-16 md:gap-24">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
