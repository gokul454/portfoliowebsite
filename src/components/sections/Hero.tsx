import Button from '@/components/ui/Button';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import avatar from '../../assets/gk.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden" id="hero">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold tracking-widest mb-6"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </div>
              AVAILABLE FOR NEW OPPORTUNITIES
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] tracking-tight text-ink mb-4"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_auto] animate-pulse-slow glow-text-cyan">Gokul</span>.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-mono text-ink-soft mb-6"
            >
              SharePoint, M365 & React Architect
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-ink-soft/80 max-w-xl font-light leading-relaxed mb-10"
            >
              I specialize in architecting and building enterprise-grade modern workplace solutions, transforming complex requirements into high-performance digital environments.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <Button href="#projects" icon={<FiArrowRight />} className="w-full sm:w-auto">
                VIEW WORK
              </Button>
              <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
                <FiMail className="mr-2 inline-block text-lg" /> CONTACT ME
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Identity / Photo Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 50 }}
            className="relative w-full max-w-md mx-auto lg:ml-auto mt-10 lg:mt-0 perspective-1000"
          >
            {/* Ambient Glow behind image */}
            <div className="absolute inset-4 bg-gradient-to-tr from-accent to-secondary rounded-[2rem] blur-2xl opacity-40 animate-pulse-slow"></div>
            
            {/* The Photo Container */}
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-[#0a0a0a]/80 backdrop-blur-xl group">
              
              {/* Image element - update src to your actual image path */}
              <img 
                src={avatar} 
                alt="Gokul"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale contrast-[1.2] group-hover:grayscale-0"
              />

              {/* Glassmorphic overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* Floating Skill Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-panel px-4 py-3 rounded-2xl border border-accent/30 shadow-[0_0_20px_rgba(0,240,255,0.2)] flex items-center gap-3 backdrop-blur-xl bg-surface/80"
            >
              <div className="w-8 h-8 rounded-full bg-[#61DAFB]/20 flex items-center justify-center border border-[#61DAFB]/50">
                <span className="text-[#61DAFB] font-bold text-lg">⚛</span>
              </div>
              <span className="font-mono text-sm font-bold tracking-wider">REACT</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-6 glass-panel px-4 py-3 rounded-2xl border border-secondary/30 shadow-[0_0_20px_rgba(139,92,246,0.2)] flex items-center gap-3 backdrop-blur-xl bg-surface/80"
            >
              <div className="w-8 h-8 rounded-full bg-[#0078D4]/20 flex items-center justify-center border border-[#0078D4]/50">
                <span className="text-[#0078D4] font-bold text-lg">S</span>
              </div>
              <span className="font-mono text-sm font-bold tracking-wider">SHAREPOINT</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
