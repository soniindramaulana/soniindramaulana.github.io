import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, BarChart3, Wrench, Users, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Bootstrap", level: 88 },
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "REST API", level: 82 },
        { name: "Oracle", level: 70 }
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      skills: [
        { name: "Python", level: 85 },
        { name: "Pandas", level: 82 },
        { name: "NumPy", level: 80 },
        { name: "Scikit-learn", level: 78 },
        { name: "Matplotlib/Seaborn", level: 75 }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "GitLab", level: 82 },
        { name: "Figma", level: 75 },
        { name: "jQuery", level: 80 },
        { name: "SQL", level: 88 }
      ]
    }
  ];

  const softSkills = [
    "Teamwork", "Leadership", "Critical Thinking", 
    "Problem Solving", "Time Management", "Adaptability"
  ];

  const certifications = [
    {
      title: "1st Place Team in National Competition (Web Design Category)",
      issuer: "HIMATIF UTM",
      year: "2021",
      type: "Award"
    },
    {
      title: "Certificate of Competence Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi",
      year: "2024",
      type: "Certification"
    },
    {
      title: "MSIB Batch 6 Full Stack Web Developer Program",
      issuer: "PT. Arkatama Multi Solusindo",
      year: "2024",
      type: "Program"
    },
    {
      title: "Basic Data Science Bootcamp",
      issuer: "Dicoding Academy",
      year: "2025",
      type: "Bootcamp"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {cert.year}
                      </span>
                    </div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1 text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}