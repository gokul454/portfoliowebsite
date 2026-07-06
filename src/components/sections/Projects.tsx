import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/project/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-16 md:py-24 relative">
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <SectionHeading
          index="0x04"
          label="DEPLOYMENTS"
          title="Selected enterprise modules."
          description="A log of deployed solutions, engineered for scale and operational efficiency."
        />

        <div className="mt-12 md:mt-16 flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
