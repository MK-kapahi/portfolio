import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './style.css';
import { user } from '../../shared/utils/constant';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconHover = { scale: 1.3, color: '#ffffff' };

  return (
    <section id="home" className="home-section">
      {/* Background blobs */}
      <div className="blob blob-blue"></div>
      <div className="blob blob-purple"></div>
      <div className="blob blob-green"></div>
      <div className="blob blob-orange"></div>

      {/* Content */}
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-lg text-blue-300" variants={itemVariants}>
           Hello, I'm
        </motion.p>
        <motion.h1 className="hero-title" variants={itemVariants}>
         {user.name}
        </motion.h1>
        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </motion.h2>
        <motion.p className="hero-description" variants={itemVariants}>
          I build modern, scalable web applications with React, Node.js, and cloud
          technologies. Passionate about clean code, UI/UX, and turning innovative
          ideas into impactful solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div className="hero-buttons" variants={itemVariants}>
          <button onClick={scrollToAbout} className="btn-primary">
            Learn More
          </button>
          <button className="btn-outline">Download Resume</button>
        </motion.div>

        {/* Social Links */}
        <motion.div className="social-links" variants={itemVariants}>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={iconHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={iconHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="mailto:alex@example.com"
            whileHover={iconHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll down */}
      <button onClick={scrollToAbout} className="scroll-down">
        <ChevronDown size={36} />
      </button>
    </section>
  );
};

export default Home;
