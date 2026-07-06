import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import Timeline from '@/components/sections/Timeline';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <TechStack />
      <Services />
      <Timeline />
      <Testimonials />
      <Contact />
    </>
  );
}
