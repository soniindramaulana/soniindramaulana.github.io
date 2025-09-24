import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sonione04@gmail.com",
      href: "mailto:sonione04@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "082139732198",
      href: "tel:+62821397321998"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bangkalan, Indonesia",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      username: "soniindra",
      href: "https://github.com/soniindra"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      username: "SoniIndraM",
      href: "https://linkedin.com/in/soniindram"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow">
                    <div className="text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                      <a 
                        href={item.href}
                        className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Social Links
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow">
                    <div className="text-blue-600 dark:text-blue-400">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{link.label}</p>
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.username}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                Let's Work Together!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                I'm actively seeking opportunities where I can continuously develop my skills and make meaningful contributions to a team. Whether it's a full-time position, freelance project, or collaboration, I'd love to hear from you.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                  Subject
                </label>
                <Input placeholder="What's this about?" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                I'll get back to you within 24 hours!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}