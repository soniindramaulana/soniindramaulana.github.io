import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

export default function Projects() {
  const { mode } = useMode();

  const projects = [
    {
      title: "Akmaloid Media",
      subtitle: "Subscription & Ordering System for Print Media",
      period: "April 2024 – June 2024",
      type: "Personal Project",
      description: "A comprehensive website designed to simplify the process of ordering and subscribing to print media, serving as a digital promotion platform to revive readers' interest in print media through easy access and relevant features.",
      features: [
        "Digital subscription management system",
        "Easy ordering process for print media",
        "Interactive and responsive design",
        "User-friendly interface for media enthusiasts"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
      category: "Web Development",
      liveLink: "https://akmaloid.creypoer.me/",
      repoLink: "https://github.com/CreyPoer/akmaloidmedia"
    },
    {
      title: "Hotel PKP-RI Bangkalan",
      subtitle: "Hotel Reservation & Management Information System",
      period: "December 2023 – January 2024",
      type: "Internship Project",
      description: "A comprehensive hotel management system developed to streamline room booking processes and enhance client experience through an interactive and responsive website design.",
      features: [
        "Real-time room availability checking",
        "Online booking and reservation system",
        "Client management dashboard",
        "Interactive booking interface"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
      category: "Web Development",
      liveLink: "https://hotelpkpri.creypoer.me/home",
      repoLink: "https://github.com/CreyPoer/HOTEL_PKPRI/tree/master"
    },
    {
      title: "Wine Quality Classification",
      subtitle: "Machine Learning Classification & Prediction System",
      period: "November 2023 – December 2023",
      type: "Personal Project",
      description: "A data science project implementing machine learning techniques to classify and predict wine quality using the CRISP-DM methodology and Random Forest algorithm with GridSearchCV optimization.",
      features: [
        "Wine quality classification using Random Forest",
        "Model optimization with GridSearchCV",
        "Data visualization with confusion matrix and ROC curves",
        "Separate prediction interface",
        "CRISP-DM methodology implementation"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      category: "Data Science",
      liveLink: "https://github.com/CreyPoer/Proyek_Sains_Data",
      repoLink: "https://creypoer.github.io/Proyek_Sains_Data/wine.html"
    },
    {
      title: "Jokotole Pencak Silat Information System",
      subtitle: "Martial Arts Organization Management System",
      period: "September 2023 – December 2023",
      type: "College Project",
      description: "Official martial arts organization website developed from scratch with custom CMS for news and articles, event management system, and seamless cross-device user experience.",
      features: [
        "Custom Content Management System (CMS)",
        "News and articles management",
        "Event management system",
        "Team collaboration features"
      ],
      technologies: ["PHP Native", "JavaScript", "Bootstrap", "MySQL", "HTML/CSS"],
      category: "Web Development",
      liveLink: "https://jokotole.creypoer.me/",
      repoLink: "https://github.com/akwoakwo/jokotole"
    }
  ];

  // Additional Data Scientist projects (to show only in datascientist mode)
  const dsProjects = [
    {
      title: 'Klasifikasi Kanker Kulit (Streamlit & MobileNetV2)',
      subtitle: 'Image classification for skin cancer using MobileNetV2 and a Streamlit demo',
      period: 'February 2025 – July 2025',
      type: 'Thesis Project',
      description: 'A skin cancer classification system trained with transfer learning on MobileNetV2 and served via a Streamlit app for interactive testing and visualization.',
      features: [
        'MobileNetV2 transfer learning for image classification',
        'Streamlit web interface for easy model inference',
        'Mobile-friendly demo workflow'
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'OpenCV'],
      category: 'Data Science',
      liveLink: 'https://prediksikankerkulit-mobilenetv2.streamlit.app/',
      repoLink: 'https://github.com/CreyPoer/Streamlit_Skripsi'
    },
    {
      title: 'Klasifikasi Emosi melalui Audio',
      subtitle: 'Audio emotion recognition using signal processing and ML models',
      period: 'October 2023 – November 2023',
      type: 'College Project',
      description: 'An emotion classification pipeline which extracts audio features and trains a model to classify emotional states; presented with a Streamlit demo.',
      features: [
        'Feature extraction (MFCC, chroma, spectral features)',
        'Model training and evaluation for emotion classification',
        'Streamlit demo for audio upload and prediction'
      ],
      technologies: ['Python', 'Librosa', 'Scikit-learn', 'TensorFlow', 'Streamlit'],
      category: 'Data Science',
      liveLink: 'https://audio-emotion-classification.streamlit.app/',
      repoLink: 'https://github.com/soniindramaulana/PSD_UTS_AUDIO'
    },
    {
      title: 'Wine Quality Classification',
      subtitle: 'Machine Learning Classification & Prediction System',
      period: 'November 2023 – December 2023',
      type: 'Personal Project',
      description: 'A data science project implementing machine learning techniques to classify and predict wine quality using the CRISP-DM methodology and Random Forest algorithm with GridSearchCV optimization.',
      features: [
        'Wine quality classification using Random Forest',
        'Model optimization with GridSearchCV',
        'Data visualization with confusion matrix and ROC curves',
        'Separate prediction interface'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      category: 'Data Science',
      liveLink: 'https://creypoer.github.io/Proyek_Sains_Data/wine.html',
      repoLink: 'https://github.com/CreyPoer/Proyek_Sains_Data'
    }
  ];

  const visibleProjects = mode === 'datascientist'
    ? dsProjects
    : projects.filter(p => p.category === 'Web Development');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Data Science":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900">
  <div id="project-container" className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--sidebar-primary)))' }}
          ></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work in web development and data science, demonstrating my ability to create innovative solutions and deliver high-quality results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white transition-colors" style={{ color: 'hsl(var(--primary))' }}>
                  {project.title}
                </CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {project.subtitle}
                </p>
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3 h-3" />
                  {project.period}
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  {/* 1. Tombol View Project (Live Link) */}
                  {project.liveLink && ( // Hanya tampilkan jika liveLink ada
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Project
                      </a>
                    </Button>
                  )}

                  {/* 2. Tombol GitHub (Repo Link) */}
                  {project.repoLink && ( // Hanya tampilkan jika repoLink ada
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}