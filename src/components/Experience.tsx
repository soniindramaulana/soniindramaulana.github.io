import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Web Developer Study Independent",
      company: "PT. Arkatama Multi Solusindo",
      location: "Malang, Indonesia (Remote)",
      period: "February 2024 – June 2024",
      type: "Internship",
      achievements: [
        "Participated in comprehensive program focusing on front-end and back-end website development",
        "Mastered HTML, CSS, JavaScript, PHP, MySQL, Laravel, Bootstrap, and REST API",
        "Led collaborative project for early marriage consultation website with religious court integration",
        "Developed e-commerce website with advanced features for institutional collaboration",
        "Achieved national-level professional certification in full-stack development",
        "Implemented jQuery and DataTables integration within Laravel framework",
        "Managed projects using GitLab for version control and team coordination"
      ],
      skills: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap", "REST API", "jQuery", "GitLab"]
    },
    {
      title: "Information System Developer Intern",
      company: "PKP-RI Bangkalan",
      location: "Bangkalan, Indonesia (Onsite)",
      period: "December 2023 – January 2024",
      type: "Internship",
      achievements: [
        "Identified institutional problems and implemented technology-based solutions",
        "Developed web-based information system to support business processes",
        "Enhanced client convenience through integrated ordering system features",
        "Promoted business efficiency through website integration and automation",
        "Provided comprehensive guidance on website management and operations",
        "Led team collaboration and organized task distribution effectively"
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