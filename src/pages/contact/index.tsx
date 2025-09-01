import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './style.css';  // Import the CSS file
import { user } from '../../shared/utils/constant';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-underline"></div>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities, interesting projects, and 
              meaningful collaborations. Whether you have a question or just want to say hi, 
              feel free to reach out!
            </p>

            <div className="contact-item">
              <div className="contact-item-icon" style={{ background: '#DBEAFE' }}>
                <Mail className="text-blue-600" size={20} />
              </div>
              <div className='contact-item-info'>
                <p>Email</p>
                <a href="mailto:alex@example.com">{user.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon" style={{ background: '#D1FAE5' }}>
                <Phone className="text-emerald-600" size={20} />
              </div>
              <div className='contact-item-info'>
                <p>Phone</p>
                <a href="tel:+1234567890">{user.contact}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon" style={{ background: '#EDE9FE' }}>
                <MapPin className="text-purple-600" size={20} />
              </div>
              <div className='contact-item-info'>
                <p>Location</p>
                <p>San Francisco, CA</p>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
              />

              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Tell me about your project or just say hello!"
              />

              <button type="submit">
                <Send size={20} /> <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
