import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

export default function Hero() {
  // Data Anda
  const emailAddress = 'sonione04@gmail.com'; // Ganti dengan email Anda
  const cvLink = 'https://drive.google.com/file/d/10sCAHiZd28VYQXpIvC6p1zcDEW3sQ703/view?usp=drive_link'; // Ganti dengan link Google Drive CV Anda
  const githubLink = 'https://github.com/CreyPoer'; // Ganti dengan link GitHub Anda
  const linkedinLink = 'https://www.linkedin.com/in/soni-indra-23b430287/'; // Ganti dengan link LinkedIn Anda
  const linkedinMessageLink = 'https://www.linkedin.com/in/soni-indra-23b430287/overlay/contact-info/'; // URL profil LinkedIn Anda

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
          <img
            src="../../public/fotosoni.jpg" // Ganti dengan path ke file gambar Anda
            alt="Soni Indra Avatar"
            className="w-full h-full object-cover" // Penting untuk mengisi dan memotong gambar
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Soni Indra Maulana
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium">
            Full Stack Web Developer
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary" className="px-3 py-1">Frontend Developer</Badge>
            <Badge variant="secondary" className="px-3 py-1">Backend Developer</Badge>
            <Badge variant="secondary" className="px-3 py-1">Data Analyst</Badge>
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
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            asChild
          >
            {/* Arahkan ke link yang memaksa pengguna mengirim pesan (misal: LinkedIn atau WhatsApp) */}
            <a href={linkedinMessageLink} target="_blank" rel="noopener noreferrer">
              <Mail className="w-4 h-4 mr-2" />
              Message Me
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            {/* Menggunakan href dan target="_blank" untuk link eksternal */}
            <a href={cvLink} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            {/* Link GitHub */}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
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