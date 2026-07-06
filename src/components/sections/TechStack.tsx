// import { motion } from 'framer-motion';

const stack = [
  'React', 'TypeScript', 'SPFx', 'Node.js',
  'Power Automate', 'Azure', 'SharePoint', 'Tailwind',
  'Next.js', 'GraphQL'
];

export default function TechStack() {
  const items = [...stack, ...stack];
  return (
    <section aria-label="Technology stack" className="py-8 md:py-12 border-y border-line/30 glass-panel relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-base via-transparent to-base z-10 pointer-events-none" />

      <div className="flex items-center gap-4 mb-10 px-6 md:px-12 max-w-[1400px] mx-auto relative z-20">
        <span className="font-mono text-accent text-sm tracking-widest">{`// SYSTEM_COMPONENTS`}</span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {items.map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center">
              <span className="font-mono font-bold uppercase text-2xl md:text-4xl text-ink-soft opacity-50 hover:opacity-100 hover:text-accent hover:glow-text-cyan transition-all duration-300 whitespace-nowrap cursor-default">
                {item}
              </span>
              <span className="text-secondary/30 text-2xl mx-8 md:mx-12">{'<>'}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
