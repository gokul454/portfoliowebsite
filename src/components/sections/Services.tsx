import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { usePortfolio } from '@/context/PortfolioContext';
import { FiCpu } from 'react-icons/fi';

export default function Services() {
  const { services, loading } = usePortfolio();

  return (
    <section id="services" className="px-6 md:px-12 py-16 md:py-24 relative">
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <SectionHeading index="0x05" label="OPERATIONS" title="What I take on." />

        {loading ? (
          <div className="mt-12 md:mt-16 flex flex-col items-center justify-center py-10">
            <div className="w-10 h-10 border border-dashed border-accent rounded-full animate-spin"></div>
          </div>
        ) : services.length === 0 ? (
          <div className="mt-12 md:mt-16 text-center font-mono text-ink-soft opacity-50 py-10">
            NO SERVICES FOUND
          </div>
        ) : (
          <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6">
            {services.map((s) => (
            <Reveal key={s.index}>
              <div className="group glass-panel border border-line/30 rounded-lg p-8 h-full hover:border-secondary/50 hover:glow-purple transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary group-hover:glow-purple transition-all duration-300">
                    <FiCpu />
                  </div>
                  <div className="font-mono text-secondary text-sm font-bold glow-text-cyan" style={{textShadow: '0 0 10px rgba(139, 92, 246, 0.5)'}}>{s.index}</div>
                </div>
                <h3 className="font-display font-bold text-2xl text-ink group-hover:text-ink transition-colors duration-300 mb-4">
                  {s.title}
                </h3>
                <p className="text-ink-soft font-light leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
          </div>
        )}
      </div>
    </section>
  );
}
