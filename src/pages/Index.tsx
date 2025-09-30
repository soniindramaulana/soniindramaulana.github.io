import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-300">
            © 2025 Soni Indra Maulana. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Full Stack Web Developer | Data Analyst 
          </p>
        </div>
      </footer>
    </div>
  );
}