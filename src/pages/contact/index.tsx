import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import './style.css';  // Import the CSS file
import { user } from '../../shared/utils/constant';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          ref={ref}
          className="contact-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="contact-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="contact-underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: '8rem' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Let's Connect
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              I'm always interested in new opportunities, interesting projects, and 
              meaningful collaborations. Whether you have a question or just want to say hi, 
              feel free to reach out!
            </motion.p>

            <motion.div 
              className="contact-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ x: 10, transition: { type: "spring", stiffness: 400 } }}
            >
              <div className="contact-item-icon" style={{ background: 'var(--primary-100)' }}>
                <Mail color="var(--primary-600)" size={20} />
              </div>
              <div className='contact-item-info'>
                <p>Email</p>
                <a href="mailto:alex@example.com">{user.email}</a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ x: 10, transition: { type: "spring", stiffness: 400 } }}
            >
              <div className="contact-item-icon" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                <Phone color="var(--accent-green)" size={20} />
              </div>
              <div className='contact-item-info'>
                <p>Phone</p>
                <a href="tel:+1234567890">{user.contact}</a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ x: 10, transition: { type: "spring", stiffness: 400 } }}
            >
              <div className="contact-item-icon" style={{ background: 'rgba(139, 92, 246, 0.1)' }}>
                <MapPin color="var(--accent-purple)" size={20} />
              </div>
              <div className='contact-item-info'>
                <p>Location</p>
                <p>{user.address}</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-socials"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href={user.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <label htmlFor="name">Your Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label htmlFor="email">Your Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <label htmlFor="message">Your Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </motion.div>

              <motion.button 
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} /> <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
