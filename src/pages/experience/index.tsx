import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useRef } from 'react';
import './style.css';
import { experience, education } from '../../shared/utils/constant';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { 
      scaleY: 1, 
      transition: { duration: 1.2, ease: "easeInOut" } 
    },
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Header */}
        <div className="experience-header">
          <h2 className="experience-title">Experience & Education</h2>
          <div className="experience-underline"></div>
          <p className="experience-subtitle">
            My professional journey and educational background
          </p>
        </div>

        <motion.div
          ref={ref}
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Experience Section */}
          <div className="experience-timeline">
            <motion.h3 
              className="section-subtitle"
              variants={itemVariants}
            >
              <Briefcase size={24} />
              Professional Experience
            </motion.h3>
            
            <motion.div 
              className="timeline-line"
              variants={timelineVariants}
            />
            
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="experience-item" 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="experience-card">
                  <div className="experience-header-card">
                    <h4 className="experience-position">{exp.title}</h4>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      <div className="experience-meta">
                        <div className="experience-location">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="experience-duration">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="experience-achievements">
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li 
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.5 + (index * 0.3) + (achIndex * 0.1) }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h3 className="section-subtitle">
              <Briefcase size={24} />
              Education
            </h3>
            
            <motion.div className="education-card" variants={itemVariants}>
              <div className="education-header">
                <h4 className="education-degree">{education.degree}</h4>
                <div className="education-institution">
                  <span className="institution-name">{education.institution}</span>
                  <div className="education-meta">
                    <div className="education-location">
                      <MapPin size={16} />
                      <span>{education.location}</span>
                    </div>
                    <div className="education-graduation">
                      <Calendar size={16} />
                      <span>{education.graduation} • {education.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
