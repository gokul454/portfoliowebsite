import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const placeholders = [
  { index: 'A', role: 'Stakeholder testimonial — pending' },
  { index: 'B', role: 'Client testimonial — pending' },
  { index: 'C', role: 'Colleague testimonial — pending' },
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 relative border-t border-line/30 bg-base/50">
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <SectionHeading
          index="0x07"
          label="NETWORK_LOGS"
          title="Words from the field."
          description="A space reserved for client and stakeholder correspondence, filed as it arrives."
        />

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6">
          {placeholders.map((p) => (
            <Reveal key={p.index} delay={0.05}>
              <div className="glass-panel rounded-lg p-8 h-full flex flex-col justify-between min-h-[220px] hover:border-accent/50 transition-all duration-300">
                <span className="font-mono text-4xl text-line font-bold">{"//"}</span>
                <p className="text-ink-soft font-mono text-sm tracking-widest uppercase leading-relaxed mt-4">
                  {p.role}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-0.5 w-8 bg-accent/50" />
                  <span className="font-mono text-xs text-accent">USER_{p.index}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
