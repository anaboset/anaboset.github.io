import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';


export function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Global Badges Ticker (Just below Navbar, above Hero) */}
      <div className="w-full border-b border-gray-100 backdrop-blur-sm py-2 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-left gap-6 md:gap-8">
          <div className="flex items-center gap-5">
            <a href="https://app.readytensor.ai/users/anawakeyo" target="_blank" rel="noopener noreferrer">
              <img 
                src="/certificates/badge4.avif" 
                alt="Badge 4" 
                className="h-auto w-auto" 
              />
            </a>
            <a href="https://app.readytensor.ai/users/anawakeyo" target="_blank" rel="noopener noreferrer">
              <img 
                src="/certificates/badge1.avif" 
                alt="Badge 1" 
                className="h-auto w-auto" 
              />
            </a>
            <a href="https://app.readytensor.ai/users/anawakeyo" target="_blank" rel="noopener noreferrer">
              <img 
                src="/certificates/badge2.avif" 
                alt="Badge 2" 
                className="h-auto w-auto" 
              />
            </a>
            <a href="https://app.readytensor.ai/users/anawakeyo" target="_blank" rel="noopener noreferrer">
              <img 
                src="/certificates/badge3.avif" 
                alt="Badge 3" 
                className="h-auto w-auto " 
              />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(screen-8rem)] flex items-center justify-center overflow-hidden pt-10 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl mb-6 text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Ana Boset</span>
                <br />
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                AI Engineer
              </p>
              <p className="text-lg text-gray-600 mb-8">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  I bridge Healthcare and AI engineering to build practical solutions that improve care delivery, eliminate inefficiencies, and drive better patient outcomes.
                </p>
              </p> 
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View My Projects
                  <ArrowRight className="size-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Let's Connect
                </Link>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/anaboset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
                >
                  <Github className="size-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anabw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="size-6" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=anawakeyo@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
                >
                  <Mail className="size-6" />
                </a>
                <a
                  href="https://app.readytensor.ai/users/anawakeyo" // Swap this with your actual profile link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-teal-600"
                >
                  <img 
                    src="/images/readytensor.png" 
                    alt="ReadyTensor" 
                    className="size-6 object-contain"
                  />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden w-110 h-110 shadow-2xl">
                <img
                  src="/images/ana1.jpg"
                  alt="Modern workspace"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1+', label: 'Years of Learning AI & Software Engineering' },
              { number: '10+', label: 'Personal & Academic Projects Built' },
              { number: '5th', label: 'Year Pharmacy Student' },
              { number: '1', label: 'Mission: Improve Healthcare with AI' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
