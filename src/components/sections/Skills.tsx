import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups } from '@/data/content';
import { staggerContainer, fadeUp, viewportOnce } from '@/animations/variants';

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-16 md:py-24 relative">
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <SectionHeading
          index="0x02"
          label="CAPABILITIES"
          title="System competencies."
          description="A registry of initialized skills and technical proficiencies."
        />

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-16 gap-y-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer(0.05, gi * 0.08)}
            >
              <Reveal>
                <div className="flex items-baseline justify-between border-b border-line/30 pb-3 mb-6">
                  <h3 className="font-mono text-sm tracking-widest text-accent uppercase glow-text-cyan">{group.label}</h3>
                  <span className="font-mono text-xs text-ink-soft">{'// '}{String(gi + 1).padStart(2, '0')}</span>
                </div>
              </Reveal>
              <ul className="flex flex-wrap gap-x-3 gap-y-4">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="font-mono text-xs tracking-widest uppercase border border-line/20 px-3 py-1.5 rounded glass-panel text-ink-soft hover:text-accent hover:border-accent/50 hover:glow-cyan transition-all duration-300 cursor-default"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
