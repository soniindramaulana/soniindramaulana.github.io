import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, BarChart3, Wrench, Users, Brain } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

export default function Skills() {
  const { mode } = useMode();

  const fullstackCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "Bootstrap", level: 88 },
        { name: "React", level: 50 },
        { name: "Tailwind CSS", level: 70 },
        { name: "jQuery", level: 70 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 88 },
        { name: "MySQL", level: 90 },
        { name: "REST API", level: 88 }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "GitLab", level: 82 },
        { name: "Figma", level: 60 },
        { name: "SQL", level: 88 },
        { name: "PhpMyAdmin", level: 80 }
      ]
    }
  ];

  const dsCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis & Manipulation",
      skills: [
        { name: "Pandas", level: 82 },
        { name: "NumPy", level: 80 },
        { name: "Librosa", level: 60 }
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning & Deep Learning",
      skills: [
        { name: "Scikit-learn", level: 78 },
        { name: "TensorFlow", level: 72 },
        { name: "Keras", level: 70 }
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Visualization",
      skills: [
        { name: "Matplotlib/Seaborn", level: 75 }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: [
        { name: "Streamlit", level: 80 },
        { name: "Kaggle", level: 70 },
        { name: "Git/GitHub", level: 85 }
      ]
    }
  ];

  const skillCategories = mode === 'datascientist' ? dsCategories : fullstackCategories;

  const softSkills = [
    "Teamwork", "Leadership", "Critical Thinking",
    "Problem Solving", "Time Management", "Adaptability"
  ];

  
    const fullstackCerts = [
      {
        title: "1st Place Team in National Competition (Web Design Category)",
        issuer: "HIMATIF UTM",
        year: "2021",
        type: "Award",
        link: "https://drive.google.com/file/d/1cm6zZI03_TWtKkITdNqkldyuuigX_OVX/view?usp=drive_link"
      },
      {
        title: "Certificate of Competence Junior Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi",
        year: "2024",
        type: "Certification",
        link: "https://drive.google.com/file/d/1OzFVBZ82Msm7U8sQdQo2_ILnSEtLj7Qg/view?usp=drive_link"
      },
      {
        title: "MSIB Batch 6 Full Stack Web Developer Program",
        issuer: "PT. Arkatama Multi Solusindo",
        year: "2024",
        type: "Program",
        link: "https://drive.google.com/file/d/1URPqaA6HJSTdstrp2ma920crq7CbkmsH/view?usp=sharing"
      },
      {
        title: "Basic JavaScript Programming",
        issuer: "Dicoding Academy",
        year: "2023",
        type: "Bootcamp",
        link: "https://www.dicoding.com/certificates/1OP81QK8QZQK"
      },
      {
        title: "Certified of Completion The Origins III: JavaScript",
        issuer: "Codédex",
        year: "2025",
        type: "Course",
        link: "https://www.credential.net/ed8eb2f3-a135-4549-8cc9-7cdb7d45e271#acc.NR7zusnm"
      },
      {
        title: "Certified of Completion Framework Valley: React",
        issuer: "Codédex",
        year: "2025",
        type: "Course",
        link: "https://www.credential.net/82289450-7f78-4118-a8f9-6ae96b6adaaa#acc.HtkThQRf"
      }
    ];

    const dsCerts = [
      {
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        issuer: "Oracle University",
        year: "2025",
        type: "Certification",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A6159EEEF753195997D49B33D3A51AA501DC632C1DDB815F73798EB35F65254D"
      },
      {
        title: "Oracle Data Platform 2025 Certified Foundations Associate",
        issuer: "Oracle University",
        year: "2025",
        type: "Certification",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A6159EEEF753195997D49B33D3A51AA5FD742712CFBF266ED7614D08B1028E6A"
      },
      {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        year: "2025",
        type: "Certification",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1E9A3A9DF28B580843CC3E93B65A484DAC667157866EFD2CBA560AFC8CCAAC4D"
      },
      {
        title: "Basic Data Science Bootcamp",
        issuer: "Dicoding Academy",
        year: "2025",
        type: "Bootcamp",
        link: "https://www.dicoding.com/certificates/0LZ0RMMD0P65"
      },
      {
        title: "Certificate of Completion Bootcamp: Basic AI",
        issuer: "Dicoding Academy",
        year: "2025",
        type: "Bootcamp",
        link: "https://www.dicoding.com/certificates/ERZR2W72QPYV"
      },
      {
        title: "Certified of Completion The Legend of Python",
        issuer: "Codédex",
        year: "2025",
        type: "Course",
        link: "https://www.credential.net/1972e771-8bdc-4400-b0c4-b44eb4c806d3#acc.yrxZfBho"
      }
    ];

    const certifications = mode === 'datascientist' ? dsCerts : fullstackCerts;

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--sidebar-primary)))' }}></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div style={{ color: 'hsl(var(--primary))' }}>
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
                <Users className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
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
                <Brain className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
                Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => {

                  // Tentukan elemen berdasarkan apakah ada link
                  const CertElement = cert.link ? 'a' : 'div';

                  // Tentukan kelas hover
                  const baseClasses = "p-4 border rounded-lg transition-colors cursor-pointer";
                  // remove hardcoded blue hover border; border color set inline to follow --primary
                  const clickableClasses = "hover:bg-slate-50 dark:hover:bg-slate-700";
                  const finalClasses = `${baseClasses} ${cert.link ? clickableClasses : 'pointer-events-none'}`;

                  return (
                    <CertElement
                      key={index}
                      className={finalClasses}
                      // Atribut hanya ditambahkan jika ada link
                      href={cert.link || undefined}
                      target={cert.link ? "_blank" : undefined}
                      rel={cert.link ? "noopener noreferrer" : undefined}
                      style={cert.link ? { borderColor: 'hsl(var(--primary) / 30%)' } : undefined}
                    >
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
                    </CertElement>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}