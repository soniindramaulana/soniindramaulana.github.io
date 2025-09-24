import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

export default function Hero() {
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
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          SI
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
            onClick={scrollToContact}
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}