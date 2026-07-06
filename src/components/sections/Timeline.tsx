import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { timeline } from '@/data/content';

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6'],
  });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className="px-6 md:px-12 py-16 md:py-24 relative">
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <SectionHeading index="0x06" label="RUNTIME_HISTORY" title="The path so far." />

        <div ref={ref} className="relative mt-12 md:mt-16 max-w-3xl ml-4 md:ml-0">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-line/30" />
          <motion.div
            style={{ height }}
            className="absolute left-[11px] top-2 w-0.5 bg-accent glow-cyan"
          />

          <div className="flex flex-col gap-16">
            {timeline.map((item) => (
              <Reveal key={item.year}>
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-[0px] top-1.5 w-6 h-6 rounded bg-base border border-accent/50 flex items-center justify-center glow-cyan">
                    <div className="w-2 h-2 rounded bg-accent" />
                  </div>
                  <span className="font-mono text-xs text-secondary tracking-widest bg-secondary/10 px-2 py-1 rounded">STATE_{item.year}</span>
                  <h3 className="font-display font-bold text-2xl text-ink mt-4">{item.title}</h3>
                  <p className="mt-3 text-ink-soft font-light leading-relaxed max-w-lg">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
