import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { usePortfolio } from '@/context/PortfolioContext';

export default function About() {
  const { landing } = usePortfolio();
  
  const data = landing || {
    aboutHeading: 'Enterprise craftsmanship, executed with precision.',
    aboutIntro: 'I specialize in SharePoint Online, SPFx, React, and TypeScript — building scalable enterprise applications that simplify business process and improve collaboration.',
    aboutDetails: 'Working across Power Automate, Microsoft 365, and modern frontend development, I build systems that hold up at enterprise scale while staying intuitive for the people who use them every day. My work sits at the intersection of business requirement and technical execution — translating operational needs into interfaces that feel considered, not default.',
    stats: [
      { value: '15+', label: 'Processes Delivered' },
      { value: '4', label: 'Enterprise Projects' },
      { value: 'M365', label: 'Native Ecosystem' }
    ]
  };
  return (
    <section id="about" className="px-6 md:px-12 py-16 md:py-24 relative">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-5">
          <SectionHeading index="0x01" label="SYS_INFO" title={data.aboutHeading} />
        </div>

        <div className="md:col-span-7 md:pt-2">
          <Reveal delay={0.1}>
            <p className="font-display text-2xl md:text-3xl leading-snug text-ink text-balance">
              {data.aboutIntro}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-ink-soft leading-relaxed max-w-xl text-lg whitespace-pre-wrap">
              {data.aboutDetails}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
              {data.stats.map((stat, i) => (
                <div key={i} className="glass-panel p-6 rounded-lg text-center hover:glow-cyan transition-all duration-300">
                  <div className={`font-mono font-bold text-4xl ${i % 2 !== 0 ? 'text-secondary' : 'text-accent'} glow-text-cyan`} style={i % 2 !== 0 ? {textShadow: '0 0 10px rgba(139, 92, 246, 0.5)'} : undefined}>{stat.value}</div>
                  <div className="eyebrow mt-3 text-ink-soft">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
