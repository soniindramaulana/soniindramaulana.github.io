import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

export default function Hero() {
  const { mode } = useMode();

  // mode-aware links and subtitle
  const emailAddress = 'sonione04@gmail.com';
  const linkedinLink = 'https://www.linkedin.com/in/soni-indra-23b430287/';
  const linkedinMessageLink = 'https://www.linkedin.com/in/soni-indra-23b430287/overlay/contact-info/';

  const imagePath = `${import.meta.env.BASE_URL}fotosoni.jpg`;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const config = {
    fullstack: {
      subtitle: 'Full Stack Web Developer',
      cvLink: 'https://drive.google.com/file/d/1UCj4YhBMtcH0Qb3iFEzKpeyF9XnWXmQH/view?usp=sharing',
      githubLink: 'https://github.com/CreyPoer'
    },
    datascientist: {
      subtitle: 'Data Scientist',
      cvLink: 'https://drive.google.com/file/d/1Q4gkN4wheLF_iLW8aNB6uyZKH8B8QovG/view?usp=sharing',
      githubLink: 'https://github.com/soniindramaulana'
    }
  } as const;

  const active = mode === 'datascientist' ? config.datascientist : config.fullstack;

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-16"
      style={{ backgroundImage: 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--primary) / 10%))' }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
          <img
            src={imagePath} // Ganti dengan path ke file gambar Anda
            alt="Soni Indra Avatar"
            className="w-full h-full object-cover" // Penting untuk mengisi dan memotong gambar
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--sidebar-primary)))' }}
          >
            Soni Indra Maulana
          </h1>
          <h2 id="hero-subtitle" className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium">
            {active.subtitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {mode === 'datascientist' ? (
              <>
                <Badge variant="secondary" className="px-3 py-1">Machine Learning</Badge>
                <Badge variant="secondary" className="px-3 py-1">Artificial Intelligence</Badge>
                <Badge variant="secondary" className="px-3 py-1">Deep Learning</Badge>
              </>
            ) : (
              <>
                <Badge variant="secondary" className="px-3 py-1">Frontend Developer</Badge>
                <Badge variant="secondary" className="px-3 py-1">Backend Developer</Badge>
              </>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>sonione04@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>082139732198</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Bangkalan, Indonesia</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="hover:opacity-90"
            asChild
            style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--sidebar-primary)))', color: 'hsl(var(--primary-foreground))' }}
          >
            {/* Arahkan ke link yang memaksa pengguna mengirim pesan (misal: LinkedIn atau WhatsApp) */}
            <a href={linkedinMessageLink} target="_blank" rel="noopener noreferrer">
              <Mail className="w-4 h-4 mr-2" />
              Message Me
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a id="hero-cv-link" href={active.cvLink} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <a id="hero-github-link" href={active.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            {/* Link LinkedIn */}
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}