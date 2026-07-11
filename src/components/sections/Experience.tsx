import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { usePortfolio } from '@/context/PortfolioContext';
import { FiCommand } from 'react-icons/fi';

export default function Experience() {
  const { experience, loading } = usePortfolio();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="px-6 md:px-12 py-16 md:py-24 relative">
      <div className="max-w-[] mx-auto z-10 relative">
        <SectionHeading index="0x03" label="EXECUTION_LOG" title="Where the work has happened." />

        {loading ? (
          <div className="mt-12 md:mt-16 flex flex-col items-center justify-center py-10">
            <div className="w-10 h-10 border border-dashed border-accent rounded-full animate-spin"></div>
          </div>
        ) : experience.length === 0 ? (
          <div className="mt-12 md:mt-16 text-center font-mono text-ink-soft opacity-50 py-10">
            NO EXPERIENCE RECORDS FOUND
          </div>
        ) : (
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-8 md:gap-12 min-h-[400px]">
            {/* Tab Navigation (Left on desktop, Top on mobile) */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar pb-4 md:pb-0 md:w-64 shrink-0 border-b md:border-b-0 md:border-l border-line/30 relative">
            {experience.map((item, index) => (
              <button
                key={item.company}
                onClick={() => setActiveTab(index)}
                className={`relative flex-shrink-0 text-left px-6 py-4 font-mono text-sm tracking-wide transition-all duration-300 whitespace-nowrap
                  ${activeTab === index 
                    ? 'text-accent bg-accent/5' 
                    : 'text-ink-soft hover:text-ink hover:bg-surface'
                  }
                `}
              >
                {item.company}
                
                {/* Active Indicator Line */}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 md:w-0.5 md:h-full bg-accent glow-cyan"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-lg border border-line/30 p-8 hover:border-accent/30 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="font-display font-bold text-2xl text-ink">
                    {experience[activeTab].role} <span className="text-accent">@ {experience[activeTab].company}</span>
                  </h3>
                  <div className="flex items-center gap-3 mt-3">
                    <FiCommand className="text-secondary" />
                    <span className="font-mono text-xs tracking-widest text-ink-soft border border-line/30 rounded px-2 py-1 bg-base/50">
                      {experience[activeTab].period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {experience[activeTab].points.map((p, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="text-ink-soft font-light leading-relaxed flex gap-4"
                    >
                      <span className="text-accent font-mono mt-1 shrink-0">▹</span>
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
