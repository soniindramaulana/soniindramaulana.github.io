import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

export default function Projects() {
  const { mode } = useMode();

  const projects = [
    {
      title: "Madura United FC — Official Club Website",
      subtitle: "Responsive, SEO-Friendly & Multilingual Web Platform",
      period: "February 2026 – April 2026",
      type: "Internship Project",
      description: "Developed the official Madura United FC website featuring a responsive and SEO-friendly interface, integrating dynamic content through REST APIs and implementing multilingual support.",
      features: [
        "Dynamic content integration (match schedules, league standings, news, player rosters)",
        "Multilingual support (Indonesian & English)",
        "Interactive animations and responsive media components"
      ],
      technologies: ["Next.js", "React", "TypeScript", "REST APIs"],
      category: "Web Development",
      liveLink: "https://maduraunitedfc.id/",
      repoLink: "https://github.com/CreyPoer/MainWeb_MU"
    },
    {
      title: "Madura United FC — Admin Dashboard & Headless CMS",
      subtitle: "Laravel Backend, RESTful API & Content Management System",
      period: "January 2026 – May 2026",
      type: "Internship Project",
      description: "Developed and maintained a Headless CMS and RESTful API backend using Laravel 11 to manage dynamic content across the club's digital ecosystem.",
      features: [
        "Interactive admin dashboard using Filament",
        "API authentication using Laravel Passport",
        "Midtrans payment services integration",
        "Automated data retrieval for matches and standings"
      ],
      technologies: ["Laravel 11", "Filament", "RESTful API", "MySQL"],
      category: "Web Development",
      liveLink: "http://admin-mu.maduraunitedfc.id/",
      repoLink: ""
    },
    {
      title: "Madura United FC — Official Merchandise Store",
      subtitle: "Next.js, React, TypeScript & E-Commerce Integration",
      period: "April 2026 – May 2026",
      type: "Internship Project",
      description: "Developed a responsive e-commerce frontend for the official club merchandise store, building an end-to-end shopping experience.",
      features: [
        "Product catalog and details",
        "Shopping cart and checkout",
        "Delivery location selection using an interactive map",
        "Midtrans Snap payment integration"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Midtrans"],
      category: "Web Development",
      liveLink: "https://shop.maduraunitedfc.id/",
      repoLink: ""
    },
    {
      title: "Madura United FC — Official Ticketing Website",
      subtitle: "Next.js Ticketing Platform & Payment Integration",
      period: "April 2026 – May 2026",
      type: "Internship Project",
      description: "Developed the official ticketing website, implementing ticket purchasing flows and user verification based on browser geolocation.",
      features: [
        "Ticket purchasing flow and e-ticket access",
        "User verification and Geo-KTP priority system",
        "Zustand state management and Midtrans payment",
        "E-ticket dashboard with QR codes/barcodes"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Zustand"],
      category: "Web Development",
      liveLink: "https://tiket.maduraunitedfc.id/",
      repoLink: ""
    },
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
    }
  ];

  // Additional Data Scientist projects (to show only in datascientist mode)
  const dsProjects = [
    {
      title: "Madura United FC — Face Verification Microservice",
      subtitle: "AI-Powered Face Verification & Serverless API",
      period: "April 2026 – May 2026",
      type: "Internship Project",
      description: "Developed and implemented a serverless face verification microservice to support identity verification within the ticketing ecosystem.",
      features: [
        "Face detection using SSD MobileNetV1",
        "Facial landmark detection and descriptor extraction",
        "Image preprocessing workflows and OCR technology",
        "Secured communication via API key authentication",
        "Serverless deployment on Vercel"
      ],
      technologies: ["Node.js", "TensorFlow.js", "face-api.js"],
      category: "Data Science",
      liveLink: "https://drive.google.com/file/d/1EsI6lHwgFRvh-bOu3PAnmijpNKVyqIgT/view",
      repoLink: ""
    },
    {
      title: "Skin Cancer Classification and Prediction",
      subtitle: "Implementation of ROS & MobileNetV2 on Dermoscopic Images",
      period: "February 2025 – July 2025",
      type: "Thesis Project",
      description: "Developed a deep learning model using the MobileNetV2 architecture with fine-tuning, applying Random Oversampling to address class imbalance.",
      features: [
        "MobileNetV2 transfer learning with fine-tuning",
        "Random Oversampling (ROS) implementation",
        "Real-time data augmentation (ImageDataGenerator)",
        "5-fold cross-validation and performance evaluation"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas"],
      category: "Data Science",
      liveLink: "https://prediksikankerkulit-mobilenetv2.streamlit.app/",
      repoLink: "https://github.com/CreyPoer/Streamlit_Skripsi"
    },
    {
      title: "Audio Emotion Classification",
      subtitle: "Classifying Audio Emotions using KNN with PCA and Hyperparameter Tuning",
      period: "October 2023 – November 2023",
      type: "College Project",
      description: "Developed a KNeighborsClassifier model to classify emotions from audio samples, using custom statistical features and optimization techniques.",
      features: [
        "Engineered 21 statistical features (ZCR, RMS energy, etc.)",
        "KNeighborsClassifier (KNN) model development",
        "Hyperparameter optimization with GridSearchCV",
        "Principal Component Analysis (PCA) for dimensionality reduction"
      ],
      technologies: ["Python", "Scikit-learn", "Librosa", "Pandas"],
      category: "Data Science",
      liveLink: "https://audio-emotion-classification.streamlit.app/",
      repoLink: "https://github.com/soniindramaulana/PSD_UTS_AUDIO"
    },
    {
      title: 'Wine Quality Classification',
      subtitle: 'Applying Classification on The Wine Quality Dataset',
      period: 'November 2023 – December 2023',
      type: 'College Project',
      description: 'Applied the CRISP-DM methodology to analyze, prepare, and model the Kaggle red wine quality dataset using Random Forest.',
      features: [
        'CRISP-DM methodology implementation',
        'Trained and evaluated multiple classification models',
        'Hyperparameter optimization using GridSearchCV',
        'Final model assessment with Confusion Matrix and ROC Curve'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
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