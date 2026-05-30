import { motion } from 'motion/react';
import { Code, Palette, Lightbulb, Wrench} from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Wrench,
      title: 'Realiable Software',
      description: 'Building systems that are reliable, secure, and user-friendly.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Focusing on practical challenges that affect real people.',
    },
    {
      icon: Code,
      title: 'Purposeful Technology',
      description: 'Using AI and software engineering for better service delivery and system efficiency.',
    },
    {
      icon: Palette,
      title: 'Meaningful Impact',
      description: 'Creating tools that add measurable value to people\'s lives.',
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
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building technology that improves healthcare systems and patient outcomes
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl w-110 h-80 overflow-hidden shadow-xl">
              <img
                src="images/workplace.png"
                alt="Developer at work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl mb-6 text-gray-900">
              Bridging Healthcare and AI
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I am a pharmacy student and AI engineer focused on improving healthcare systems through technology. 
              </p>

              <p>
                I build practical solutions designed to improve healthcare delivery, support decision-making, 
                and create meaningful real-world impact.
              </p>
              <p>
                My goal is to contribute to a future where intelligent healthcare systems are more accessible, efficient, and patient-centered.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl text-center mb-12 text-gray-900"
          >
            What I Value
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="size-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
