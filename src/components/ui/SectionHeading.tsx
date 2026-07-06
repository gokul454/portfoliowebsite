import Reveal from './Reveal';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ index, label, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      <Reveal>
        <div className={`flex items-center gap-4 mb-8 ${align === 'center' ? 'justify-center' : ''}`}>
          <div className="flex items-center px-3 py-1 rounded bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold tracking-widest glow-cyan">
            {index}
          </div>
          <span className="hairline w-12" />
          <span className="font-mono text-ink-soft text-xs tracking-widest uppercase">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.1] font-bold text-ink text-balance tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed font-light max-w-2xl">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
