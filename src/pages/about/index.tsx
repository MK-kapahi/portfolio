import { Code, Coffee, Zap } from 'lucide-react';
import './style.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-underline"></div>
        </div>

        <div className="about-grid">
          {/* Text Section */}
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with 2 years of experience specializing in React, TypeScript, Node.js, and modern web technologies. My focus is on building scalable, user-friendly applications that combine strong performance with clean, maintainable code.
            </p>
            <p>
           I enjoy turning complex problems into simple, elegant solutions while keeping the user experience at the center of everything I build. Along the way, I've developed a strong growth mindset and a constant curiosity for learning new tools, frameworks, and best practices.
            </p>
            <p>
              Beyond my technical skills, I bring a strong growth mindset and a genuine enthusiasm for continuous learning. Outside of coding, you'll often find me brainstorming new project ideas, reading about emerging technologies, or simply enjoying a good cup of coffee while mapping out my next challenge.
            </p>
            <p>
              I'm always open to exciting opportunities and collaborations that allow me to create impactful solutions and grow as a developer.
            </p>

            {/* Features */}
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon" style={{ background: '#dbeafe' }}>
                  <Code size={32} color="#2563eb" />
                </div>
                <h3>Clean Code</h3>
                <p>Writing maintainable and scalable solutions</p>
              </div>

              <div className="feature">
                <div
                  className="feature-icon"
                  style={{ background: '#d1fae5' }}
                >
                  <Zap size={32} color="#059669" />
                </div>
                <h3>Performance</h3>
                <p>Optimizing for speed and efficiency</p>
              </div>

              <div className="feature">
                <div
                  className="feature-icon"
                  style={{ background: '#ffedd5' }}
                >
                  <Coffee size={32} color="#ea580c" />
                </div>
                <h3>Dedication</h3>
                <p>Committed to continuous learning</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="about-image">
            <div className="about-image-container">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional headshot"
              />
            </div>
            <div className="experience-badge">
              <div className="years">2+</div>
              <div className="label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
