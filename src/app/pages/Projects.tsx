import { motion } from 'motion/react';
import { ExternalLink, Github, Youtube } from 'lucide-react';

export function Projects() {
  const projects = [{
      title: 'CardioSentinel MAS',
      description: 'Multi-agent AI system for cardiovascular care planning, risk assessment, and patient adherence using clinical tools.',
      image: '/images/cardiosentinel_mas.gif',
      tags: ['Python', 'Pydantic', 'LangSmith', 'LangGraph'],
      github: 'https://github.com/anaboset/cardiosentinel_mas',
    },
    {
      title: 'PharmaTriage',
      description: 'Automatic classification, clinical prioritization, and department routing of pharmacy support tickets.',
      image: '/images/pharm_triage.gif',
      tags: ['NLP', 'TF-IDF', 'Logistic Regression', 'Seaborn'],
      github: 'https://github.com/anaboset/PharmaTriage',
      live: 'https://pharmatriage.streamlit.app/',
    },
    {
      title: 'ResumeIQ',
      description: 'ML-powered resume screening that scores and ranks candidates using 3-signal ensemble (semantic similarity, skill matching, & experience).',
      image: '/images/resumeiq.gif',
      tags: ['NLTK', 'spaCy', 'Docker', 'NumPy'],
      github: 'https://github.com/anaboset/ResumeIQ',
      live: 'https://anaresumeiq.streamlit.app/',
    },
    {
      title: 'CardioSentinel RAG',
      description: 'AI System for Guideline-Aligned Cardiovascular Disease Management.',
      image: '/images/Cardiosentinel_rag.gif',
      tags: ['Python', 'LangChain', 'ChromaDB', 'Neo4j'],
      github: 'https://github.com/anaboset/CardioSentinel',
    },
    {
      title: 'AskEFDA',
      description: 'Interactive RAG application to query EFDA medical guidelines for medicine registration, import, and export regulations.',
      image: '/images/askefda1.gif',
      tags: ['LangChain', 'BM25', 'FAISS', 'Streamlit'],
      github: 'https://github.com/anaboset/AskEFDA',
      live: 'https://medical-rag-assistant-ana.streamlit.app/',
    },
    {
      title: 'PharmaCast',
      description: 'An ML forecasting project that predicts pharmaceutical demand from 6 years of daily sales data.',
      image: '/images/pharm_cast.gif',
      tags: ['Scikit-learn', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/anaboset/PharmaCast',
    },
    
  ];

  return (
    <div className="min-h-screen pt-34 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-600 rounded-md px-4 py-2 text-blue-700 hover:text-orange-900 transition-colors"
                  >
                    <Github className="size-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-600 rounded-md px-4 py-2 text-blue-700 hover:text-orange-900 transition-colors"
                  >
                    <ExternalLink className="size-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
