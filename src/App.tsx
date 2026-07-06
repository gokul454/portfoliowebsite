import { Routes, Route } from 'react-router-dom';
import Nav from '@/components/layout/Nav';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import { useLenis } from '@/hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-base text-ink font-body">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-40"></div>
      
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen animate-pulse-slow"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[180px] pointer-events-none z-0 mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <footer className="py-8 text-center text-ink-soft/50 font-mono text-sm tracking-widest border-t border-line/30 glass-panel">
          <p>© {new Date().getFullYear()} GOKUL K. // ALL SYSTEMS NOMINAL</p>
        </footer>
      </div>
    </div>
  );
}
