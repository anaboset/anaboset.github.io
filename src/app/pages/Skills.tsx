import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'AI Engineering & Agentic Systems',
      skills: [
        { name: 'LangChain', level: 85 },
        { name: 'LangGraph', level: 75 },
        { name: 'LangSmith', level: 70 },
        { name: 'LlamaIndex', level: 50 },
        { name: 'RAGAS', level: 70 },
        { name: 'MCP', level: 75 },
        { name: 'ChromaDB', level: 75 },
        { name: 'n8n', level: 80 },
      ],
    },
    {
      category: 'Programming, Data Science, & ML',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Scikit-Learn', level: 70 },
        { name: 'Numpy', level: 75 },
        { name: 'Pandas', level: 60 },
        { name: 'Matplotlib', level: 55 },
        { name: 'spaCy', level: 45 },
      ],
    },
    {
      category: 'Web, UI & Developer Tools',
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 75 },
        { name: 'JavaScript', level: 60 },
        { name: 'Streamlit', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'VSCode', level: 80 },
        { name: 'Figma', level: 50 },
      ],
    },
  ];

  const certifications = [
    {
      title: 'Agentic AI Builder',
      provider: 'ReadyTensor',
      skills: [
        'Multi AI Agents',
        'Agentic Frameworks',
        'Model Context Protocol',
        'Evaluation & Monitoring Frameworks',
      ],
      link: 'certificates/ready2.png',
    },
    {
      title: 'RAG Systems Expert',
      provider: 'ReadyTensor',
      skills: [
        'Document Processing & Indexing',
        'Vector Databases',
        'Embeddings & Retrieval Techniques',
        'RAG System Evaluation & Deployment',
      ],
      link: 'certificates/ready.png',
    },
    {
      title: 'AI Agents Fundamentals',
      provider: 'Hugging Face',
      skills: [
        'Provider SDKs',
        'AI Agent Protocols',
        'AI Agent Libraries',
        'Agentic RAG',
      ],
      link: 'certificates/agents_fundamentals.webp',
    },
    {
      title: 'RAG & AI Systems Master',
      provider: 'NSK AI RAG Bootcamp 2025',
      skills: [
        'Advanced RAG Pipelines & Design',
        'Prompt Engineering',
        'Workflow Automation',
        'System Safety & Security',
      ],
      link: 'certificates/nsk.png',
    },
    {
      title: 'AI Fundamentals',
      provider: 'Udacity',
      skills: [
        'Artificial Intelligence Basics',
        'Machine Learning Concepts',
        'Ethical AI',
        'Python Programming for AI',
      ],
      link: 'certificates/AI_fundamentals.png',
    },
    {
      title: 'Programming Fundamentals',
      provider: 'Udacity',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Programming Logic',
      ],
      link: 'certificates/Programming_fundamentals.png',
    },
    {
      title: 'Leadership',
      provider: 'Haramaya University | EPSA Ethiopia',
      skills: [
        'Team Coordination & Project Management',
        'Community Engagement & Awareness Campaigns',
        'Student Club Leadership & Development',
        'Public Speaking & Communication',
      ],
      link: 'certificates/epsa.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Technologies, tools, and domains I use to build solutions
        </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-2xl mb-6 text-gray-900">{category.category}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl text-center mb-12 text-gray-900">
            Leadership & Community
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                title: 'President - EPSA Haramaya',
                description:
                  'Coordinated two Antimicrobial Resistance Awareness Week campaigns reaching 950+ patients, caregivers, and community members through hospital and community-based awareness initiatives. Also organized antimicrobial resistance training sessions for 50+ pharmacy students in collaboration with lecturers, professors, and university faculty members.',
              },
              {
                title: 'Head, Clubs & Societies',
                description:
                  'Led the restructuring and reactivation of student-led clubs including the Anti-Drug Club and HIV/AIDS Club, while also initiating and establishing a Mental Health & Counseling Club focused on student well-being, awareness, and peer support initiatives.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}                
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-blue-600"
              >
                <div className="absolute left-[-9px] top-1 w-4 h-4 bg-blue-600 rounded-full" />

                <div className="bg-white rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl mb-3 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Accomplishments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-center mb-12 text-gray-900">Certifications & Accomplishments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{cert.provider}</p>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
