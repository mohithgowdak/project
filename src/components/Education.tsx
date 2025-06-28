import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation and achievements that shaped my technical expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
            >
              <div className="flex items-start gap-6">
                <div className="bg-blue-600 p-4 rounded-xl">
                  <GraduationCap className="text-white" size={32} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{edu.institution}</p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                      {edu.gpa && (
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Award className="text-yellow-500" size={20} />
                        Achievements & Honors
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700 font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Academic Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Academic Interests</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Currently exploring opportunities for graduate studies in Machine Learning and Artificial Intelligence, 
              with particular interest in natural language processing and computer vision applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Machine Learning", "Natural Language Processing", "Computer Vision", "Data Science", "Software Engineering"].map((interest) => (
                <span
                  key={interest}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;