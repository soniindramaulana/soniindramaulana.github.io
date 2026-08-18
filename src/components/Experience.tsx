import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Web Management Specialist",
      company: "Yayasan Rumah Bata Kreasi | Placement at Madura United FC",
      location: "Pamekasan, Indonesia (Remote)",
      period: "December 2025 – June 2026",
      type: "Internship",
      achievements: [
        "Selected for MagangHub Batch 3 (2025) and placed at Madura United FC as a Web Management Specialist.",
        "Contributed to the development and management of the club's digital web ecosystem, including the official club website, merchandise store, ticketing platform, and administrative dashboard/CMS.",
        "Developed and maintained frontend and backend web solutions, including data management features, page structures, API integrations, content management, and website maintenance based on the club's requirements.",
        "Contributed to the development of supporting systems, including e-commerce and ticketing workflows, payment gateway integration, user verification, and a face verification microservice for the ticketing ecosystem.",
        "Successfully developed the official club website and its supporting admin CMS, which is currently used as the club's main website."
      ],
      skills: ["Next.js", "React", "TypeScript", "Laravel", "Node.js", "REST API", "MySQL", "Tailwind CSS", "TensorFlow.js"]
    },
    {
      title: "Full Stack Web Developer Study Independent",
      company: "PT. Arkatama Multi Solusindo",
      location: "Malang, Indonesia (Remote)",
      period: "February 2024 – June 2024",
      type: "Internship",
      achievements: [
        "Mastered full-stack web development (HTML, CSS, JS, PHP, Laravel, REST API, MySQL) through intensive mentoring sessions and practical project applications.",
        "Led a collaborative project to develop a specialized website (pre-marital service), delegating tasks and implementing core features such as a couple registration system for religious court assessors.",
        "Developed a full-stack e-commerce website, focusing on implementing attractive product displays, an efficient ordering process, and payment transaction facilities.",
        "Managed collaborative project development using GitLab for version control, code management, and team coordination.",
        "Implemented jQuery to enhance front-end interactivity, integrating DataTables within the Laravel framework and displaying various types of data charts."
      ],
      skills: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS", "REST API", "jQuery", "GitLab"]
    },
    {
      title: "Information System Developer Intern",
      company: "PKP-RI Bangkalan",
      location: "Bangkalan, Indonesia (Onsite)",
      period: "December 2023 – January 2024",
      type: "Internship",
      achievements: [
        "Identified institutional business process problems and implemented web-based information system solutions.",
        "Optimized business processes and enhanced institutional credibility through efficient website integration.",
        "Provided guidance and training to internal staff on effective website management and operations."
      ],
      skills: ["Web Development", "System Analysis", "Team Leadership", "Client Consultation", "Business Process Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-2">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="self-start md:self-center">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}