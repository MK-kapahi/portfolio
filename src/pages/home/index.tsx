import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './style.css';
import { user } from '../../shared/utils/constant';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a simple resume download functionality
    const resumeContent = `
Muskan Kapahi
Full Stack Developer

Contact Information:
Email: muskankapahi123@gmail.com
Phone: +91 9877762862
LinkedIn: https://www.linkedin.com/in/muskan-kapahi/
Location: Panchkula, Haryana

SUMMARY:
Proactive Full Stack Developer with 2 years of experience in web application development. 
Engineered a powerful web application with React and Node.js, boosting client engagement by 30%, 
and advanced a flight platform's efficiency by 25% through effective module implementation. 
Seeking a Full Stack Developer role at IT to leverage React.js, Node.js, and AEM skills in 
crafting high-performance digital solutions.

EDUCATION:
Bachelor of Technology in Computer Science & Engineering
Baba Farid College of Engineering & Technology, Bathinda, Punjab
2023 • 8.15 CGPA

SKILLS:
Programming Languages: JavaScript, TypeScript, SQL, Java
Frontend Technologies: React.js, HTML5, CSS, Angular
Backend Technologies: Node.js, Express.js, RESTful APIs
Database: SQL, MongoDB, Firebase
Version Control: Git, GitHub

EXPERIENCE:
Full Stack Developer - Grazittilnteractive (July 2023 - Present)
• Developed and maintained responsive web applications using React, Angular, and AEM
• Created static and dynamic AEM components, improving content reusability by 40%
• Crafted mobile-first accessible layouts, enhancing engagement by 25%

Angular Intern - Chicmic (January 2023 - June 2023)
• Implemented real-time chat system using WebSockets in Angular
• Engineered dynamic UI components, boosting user engagement by 30%
• Integrated secure messaging workflows using JWT-based authentication

PROJECTS:
• INDIGO: Led front-end revamp with modular, reusable components
• GMAC: Built dynamic email and landing page editor with drag-and-drop functionality
• Miniheart: Developed donation app managing 100+ stories, increasing engagement by 30%
• Spinnr: Dating web app with React.js and Redux Toolkit
• Cyient Website Revamp: Built 30+ responsive components, improved load speed by 25%
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muskan_Kapahi_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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
          Full Stack Developer | React & Node.js Expert | AEM Specialist
        </motion.h2>
        <motion.p className="hero-description" variants={itemVariants}>
          Proactive Full Stack Developer with 2 years of experience in web application development. 
          I engineer powerful web applications with React and Node.js, boosting client engagement by 30%, 
          and specialize in crafting high-performance digital solutions with AEM.
        </motion.p>

        {/* Buttons */}
        <motion.div className="hero-buttons" variants={itemVariants}>
          <button onClick={scrollToAbout} className="btn-primary">
            Learn More
          </button>
          <button onClick={downloadResume} className="btn-outline">Download Resume</button>
        </motion.div>

        {/* Social Links */}
        <motion.div className="social-links" variants={itemVariants}>
          <motion.a
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={iconHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href={user.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={iconHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href={user.email}
            whileHover={iconHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll down */}
      {/* <button onClick={scrollToAbout} className="scroll-down">
        <ChevronDown size={36} />
      </button> */}
    </section>
  );
};

export default Home;
