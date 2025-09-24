import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, BarChart3, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Expert in HTML, CSS, JavaScript, PHP, Laravel, and MySQL"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management", 
      description: "Proficient in MySQL and Oracle database design and optimization"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Skilled in Python, Pandas, NumPy, and machine learning"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Experience in project coordination and team management"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Description */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              An Information Technology graduate with a strong focus on building efficient web solutions and performing data analysis. I possess solid skills in front-end technologies such as HTML, CSS, JavaScript, and Bootstrap to create intuitive and visually appealing user interfaces.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              For the back-end, I am well-versed in Laravel and MySQL to ensure robust and scalable functionality. I have practical experience in developing collaborative projects, and I am passionate about applying my expertise to build innovative and useful digital products.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am actively seeking opportunities where I can continuously develop my skills and make meaningful contributions to a team.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Teamwork</Badge>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Leadership</Badge>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Critical Thinking</Badge>
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">Problem Solving</Badge>
              <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Time Management</Badge>
              <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">Adaptability</Badge>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
                <CardContent className="p-0 space-y-3">
                  <div className="text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}