import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, BarChart3, Users } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

export default function About() {
  const { mode } = useMode();

  // Mode-specific profile descriptions (inferred; replace with exact CV text if you provide it)
  const fullstackDescription = [
    'An Informatics Engineering graduate with a strong focus on Full Stack Web Development and a passion for building efficient, scalable, and user-focused digital solutions. I have practical experience developing web applications across both front-end and back-end environments.',
    'Experienced with modern technologies such as Next.js, React, TypeScript, Laravel, Node.js, REST APIs, and MySQL. My experience includes developing responsive web interfaces, integrating APIs, managing data, building content management systems, and implementing e-commerce and ticketing solutions.',
    'I am passionate about continuously improving my technical skills, solving real-world problems through technology, and contributing to the development of reliable and impactful digital products within a collaborative team.'
  ];

  const datascientistDescription = [
    'An Informatics Engineering graduate with a strong focus on Data Science and Machine Learning, with practical experience in data processing, analysis, model development, and evaluation. I have a solid understanding of the data science lifecycle and CRISP-DM methodology, supported by the Oracle Certified Data Science Professional certification.',
    'Skilled in Python, Pandas, NumPy, SQL, Scikit-learn, TensorFlow, and Keras, with experience applying machine learning and deep learning techniques to classification problems.',
    'My practical experience includes developing image classification and computer vision solutions, including a skin lesion classification project using MobileNetV2 and a face verification system using TensorFlow.js and face-api.js. I am interested in applying analytical and technical skills to solve real-world problems and develop data-driven solutions.'
  ];

  const highlights = mode === 'datascientist' ? [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Skilled in Python, Pandas, NumPy and data visualization"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Experience training classification models with Scikit-learn, TensorFlow, and Keras"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Developing image classification and face verification solutions using MobileNetV2 and face-api.js"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "CRISP-DM Methodology",
      description: "Applying structured approaches to solve real-world problems and develop data-driven solutions"
    }
  ] : [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Experienced in Next.js, React, TypeScript, Laravel, and Node.js"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "System Integration",
      description: "Proficient in developing REST APIs, content management systems, and managing MySQL databases"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "E-Commerce & Ticketing",
      description: "Implementing complex workflows including online payment gateway integrations and user verification"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Strong focus on teamwork, problem solving, and delivering impactful digital products"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--sidebar-primary)))' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Description */}
          <div className="space-y-6">
            {(mode === 'datascientist' ? datascientistDescription : fullstackDescription).map((paragraph, i) => (
              <p key={i} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge style={{ backgroundColor: 'hsl(var(--primary) / 12%)', color: 'hsl(var(--primary))' }}>Teamwork</Badge>
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
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4" style={{ borderLeftColor: 'hsl(var(--primary))' }}>
                <CardContent className="p-0 space-y-3">
                  <div style={{ color: 'hsl(var(--primary))' }}>
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