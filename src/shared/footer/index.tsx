import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './style.css';
import { user } from '../utils/constant';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const iconHover = { scale: 1.2, color: '#ffffff' };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-title">{user.name}</h3>
            <p className="footer-description">{user.footer_description}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links-grid">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="footer-contact-info">
              <p>{user.email}</p>
              <p>{user.contact}</p>
              <p>{user.address}</p>
            </div>
            <div className="footer-icons">
              <motion.a
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>© {currentYear} {user.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
