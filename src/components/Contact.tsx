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
          <div className="w-24 h-1 mx-auto mb-8 accent-bg"></div>
          <p className="text-lg muted-light max-w-2xl mx-auto">
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
                    <div className="accent">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm muted">{item.label}</p>
                      <a 
                        href={item.href}
                        className="font-medium transition-colors accent-hover"
                        style={{ color: 'hsl(var(--muted-accent))' }}
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
                    <div className="accent">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm muted">{link.label}</p>
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium transition-colors accent-hover"
                        style={{ color: 'hsl(var(--muted-accent))' }}
                      >
                        {link.username}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg accent-bg-subtle">
              <h4 className="font-semibold" style={{ color: 'hsl(var(--muted-accent))' }}>
                Let's Work Together!
              </h4>
              <p className="text-sm muted-light">
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
                <form method="POST" action="https://formspree.io/f/xpwydlgq" className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block muted">
                      Name
                    </label>
                    <Input name="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block muted">
                      Email
                    </label>
                    <Input name="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block muted">
                    Subject
                  </label>
                  <Input placeholder="What's this about?" name="subject" required/>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block muted">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    name="message" // Pastikan ada atribut 'name'
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--sidebar-primary)))', color: 'hsl(var(--primary-foreground))' }}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                </form>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}