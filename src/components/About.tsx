import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, BarChart3, Users } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

export default function About() {
  const { mode } = useMode();

  // Mode-specific profile descriptions (inferred; replace with exact CV text if you provide it)
  const fullstackDescription = [
    'An Information Technology graduate with a strong focus on building efficient web solutions. I design and implement full-stack applications using modern tools and frameworks.',
    'Expert in front-end technologies (HTML, CSS, JavaScript, React) and back-end development with PHP and Laravel. Comfortable designing REST APIs and working with relational databases (MySQL).',
    'I collaborate effectively in teams, lead small projects, and deliver production-ready web applications with a focus on performance and maintainability.'
  ];

  const datascientistDescription = [
    'A data-focused practitioner skilled in data analysis, machine learning, and model deployment. Experienced with Python, Pandas, NumPy, and machine learning workflows.',
    'I build and evaluate predictive models, perform feature engineering, and create interactive demos using Streamlit to make models accessible to stakeholders.',
    'I am certified in cloud data/AI foundations and focus on reproducible pipelines, model monitoring, and scalable deployment.'
  ];

  const highlights = mode === 'datascientist' ? [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Skilled in Python, Pandas, NumPy and exploratory data analysis"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Machine Learning & AI",
      description: "Experience training models, transfer learning, and building inference pipelines"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Model Deployment",
      description: "Deploying models with Streamlit and cloud services for interactive demos and production" 
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Research & Evaluation",
      description: "Model evaluation, validation, and communicating results to stakeholders"
    }
  ] : [
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
      title: "Performance & Optimization",
      description: "Focus on web performance, optimized queries, and scalable architecture"
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