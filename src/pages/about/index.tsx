import { Code, Coffee, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './style.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header */}
        <motion.div 
          ref={ref}
          className="about-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="about-title" variants={itemVariants}>About Me</motion.h2>
          <motion.div className="about-underline" variants={itemVariants}></motion.div>
        </motion.div>

        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Section */}
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              I'm a passionate Full Stack Developer with 2 years of experience specializing in React, TypeScript, Node.js, and modern web technologies. My focus is on building scalable, user-friendly applications that combine strong performance with clean, maintainable code.
            </motion.p>
            <motion.p variants={itemVariants}>
           I enjoy turning complex problems into simple, elegant solutions while keeping the user experience at the center of everything I build. Along the way, I've developed a strong growth mindset and a constant curiosity for learning new tools, frameworks, and best practices.
            </motion.p>
            <motion.p variants={itemVariants}>
              Beyond my technical skills, I bring a strong growth mindset and a genuine enthusiasm for continuous learning. Outside of coding, you'll often find me brainstorming new project ideas, reading about emerging technologies, or simply enjoying a good cup of coffee while mapping out my next challenge.
            </motion.p>
            <motion.p variants={itemVariants}>
              I'm always open to exciting opportunities and collaborations that allow me to create impactful solutions and grow as a developer.
            </motion.p>

            {/* Features */}
            <motion.div className="about-features" variants={itemVariants}>
              <motion.div 
                className="feature"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="feature-icon" style={{ background: 'var(--primary-100)' }}>
                  <Code size={32} color="var(--primary-600)" />
                </div>
                <h3>Clean Code</h3>
                <p>Writing maintainable and scalable solutions</p>
              </motion.div>

              <motion.div 
                className="feature"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="feature-icon"
                  style={{ background: 'rgba(16, 185, 129, 0.1)' }}
                >
                  <Zap size={32} color="var(--accent-green)" />
                </div>
                <h3>Performance</h3>
                <p>Optimizing for speed and efficiency</p>
              </motion.div>

              <motion.div 
                className="feature"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="feature-icon"
                  style={{ background: 'rgba(249, 115, 22, 0.1)' }}
                >
                  <Coffee size={32} color="var(--accent-orange)" />
                </div>
                <h3>Dedication</h3>
                <p>Committed to continuous learning</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="about-image" variants={imageVariants}>
            <motion.div 
              className="about-image-container"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional headshot"
              />
            </motion.div>
            <motion.div 
              className="experience-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="years">5+</div>
              <div className="label">Years Experience</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
