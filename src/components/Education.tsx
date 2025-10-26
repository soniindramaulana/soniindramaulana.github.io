import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, Users } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

export default function Education() {
  const education = [
    {
      degree: "Informatics Engineering",
      institution: "Trunojoyo Madura University",
      location: "Bangkalan, Indonesia",
      period: "2021 – 2025",
      status: "Completed",
      achievements: [
        "Committee Member of Festival Ajang Sinergitas Teknologi (FAST) UTM 2024 – Equipment Coordinator (August–November 2024)",
        "Participant of Informatics Competition & Festival 2024 – UI/UX Category (December 2024)"
      ]
    }
  ];

  const organizations = [
    {
      role: "Staff of Education Department",
      organization: "Himpunan Mahasiswa Teknik Informatika UTM",
      period: "February 2024 – December 2024",
      location: "Bangkalan, Indonesia",
      responsibilities: [
        "Encouraging students to participate in various IT competitions related to their field of study",
        "Providing support for students interested in IT competitions with administrative requirements",
        "Organizing training sessions with expert speakers who have won similar competitions"
      ]
    }
  ];

  const { mode } = useMode();

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education & Organizations
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--sidebar-primary)))' }}></div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2" style={{ color: 'hsl(var(--muted-accent))' }}>
            <GraduationCap className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
            <span style={{ color: 'hsl(var(--muted-accent))' }}>Education</span>
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">
                        {edu.degree}
                      </CardTitle>
                      <p className="font-medium mb-2" style={{ color: 'hsl(var(--primary))' }}>
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'hsl(var(--muted-accent))' }}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant={edu.status === "Current" ? "default" : "secondary"}
                      className="self-start md:self-center"
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div>
                    {mode === 'datascientist' ? (
                      <>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                            Thesis:
                          </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Implementation of Random Oversampling on Skin Cancer Classification in Dermoscopic Images Using the MobileNetV2 Method
                        </p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                          Activities:
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2" style={{ color: 'hsl(var(--muted-accent))' }}>
                              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--primary))', width: 8, height: 8 }}></div>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2" style={{ color: 'hsl(var(--muted-accent))' }}>
            <Users className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
            <span style={{ color: 'hsl(var(--muted-accent))' }}>Organizations & Leadership</span>
          </h3>
          
          <div className="space-y-6">
            {organizations.map((org, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">
                        {org.role}
                      </CardTitle>
                      <p className="font-medium mb-2" style={{ color: 'hsl(var(--primary))' }}>
                        {org.organization}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {org.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {org.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center">
                      Educational Role
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {org.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-2" style={{ color: 'hsl(var(--muted-accent))' }}>
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--primary))', width: 8, height: 8 }}></div>
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}