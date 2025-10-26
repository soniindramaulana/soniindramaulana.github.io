import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import { ModeProvider } from '@/context/ModeContext';
import { useMode } from '@/context/ModeContext';

function PageContent() {
  const { mode } = useMode();

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

        {/* render Experience only in fullstack mode */}
        {mode === 'fullstack' && (
          <section id="experience">
            <Experience />
          </section>
        )}

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
      <footer className="py-8" style={{ backgroundColor: 'hsl(var(--muted-accent) / 18%)' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="muted">© 2025 Soni Indra Maulana. Built with React, TypeScript, and Tailwind CSS.</p>
          <p className="muted-light text-sm mt-2">Full Stack Web Developer | Data Scientist</p>
        </div>
      </footer>
    </div>
  );
}

export default function Index() {
  return (
    <ModeProvider>
      <PageContent />
    </ModeProvider>
  );
}