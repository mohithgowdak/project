import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Rocket, Users } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies and frameworks"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Experience with neural networks and data analysis"
    },
    {
      icon: Rocket,
      title: "Innovation Focused",
      description: "Passionate about creating solutions that make a difference"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication and leadership skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate computer science graduate ready to make an impact in the tech industry
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="public/Images/professional_headshot.jpg"
                alt="Professional headshot"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
            I’m a Computer Science Engineering student (Class of 2025) with hands-on experience across product support, software engineering, and applied tech projects. Currently at SAP Labs, I’m learning how large-scale enterprise systems operate and how to deliver reliable solutions that serve real users.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
            Previously at OpenText, I gained exposure to collaborative development and problem solving.
            I'm particularly interested in the intersection of AI and web development, and I'm actively seeking 
              opportunities to contribute to innovative projects while pursuing advanced studies in machine learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            Outside of work, I’ve enjoyed experimenting with projects that explore human-computer interaction and real-time systems — blending software, design, and intelligent tech to solve practical challenges. This includes working on gesture-based interfaces, exploring how facial micro-expressions can enhance user responsiveness, and building interactive prototypes that combine lightweight computer vision models with responsive front-end frameworks like React and Firebase. These projects have helped me understand the nuances of real-time data processing, media pipelines, and the design of intelligent systems that are both functional and user-centric.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <highlight.icon className="text-blue-600 mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-4 text-center">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;