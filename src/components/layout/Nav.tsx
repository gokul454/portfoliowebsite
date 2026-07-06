import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '@/constants/nav';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-line/30 ${
        scrolled ? 'glass-panel shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between h-20 px-6 md:px-12 max-w-[1920px] mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
            <span className="font-mono text-accent font-bold text-sm">{'>_'}</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-ink group-hover:text-accent transition-colors duration-300">
            GOKUL_K
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="eyebrow text-ink-soft hover:text-accent hover:glow-text-cyan transition-all duration-300"
            >
              <span className="text-accent/50 mr-2">/</span>
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick('#contact')}
            className="px-6 py-2.5 flex items-center font-mono font-bold text-xs tracking-widest uppercase text-accent border border-accent/50 rounded hover:glow-cyan hover:bg-accent/10 transition-all duration-300"
          >
            INIT_COMMS()
          </button>
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-accent"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-panel border-b border-line/30"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-mono text-sm tracking-widest uppercase text-left text-ink-soft p-4 border border-line/10 rounded hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <span className="text-accent/50 mr-3">{'>'}</span>
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="font-mono text-sm tracking-widest uppercase text-center text-accent p-4 border border-accent/50 rounded bg-accent/5 hover:glow-cyan transition-all duration-300 mt-4"
              >
                INIT_COMMS()
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
