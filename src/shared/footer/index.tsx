import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './style.css';
import { user } from '../utils/constant';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const iconHover = { 
    scale: 1.3, 
    y: -3,
    transition: { type: "spring", stiffness: 400 }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-container">
        <motion.div className="footer-grid" variants={footerVariants}>
          {/* Brand */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <motion.h3 
              className="footer-title"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {user.name}
            </motion.h3>
            <motion.p 
              className="footer-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {user.footer_description}
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-links" variants={itemVariants}>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links-grid">
              {['Home', 'About', 'Skills', 'Projects', 'Contact', 'Resume'].map((link, index) => (
                <motion.a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 8, transition: { type: "spring", stiffness: 400 } }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="footer-contact" variants={itemVariants}>
            <h4 className="footer-heading">Get In Touch</h4>
            <motion.div 
              className="footer-contact-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>{user.email}</p>
              <p>{user.contact}</p>
              <p>{user.address}</p>
            </motion.div>
            <motion.div 
              className="footer-icons"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            © {currentYear} {user.name}. All rights reserved.
          </motion.p>
          <motion.div 
            className="footer-made"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span>Made with </span>
            <span className="heart-icon">❤️</span>
            <span> and lots of coffee</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
