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
              I'm a proactive Full Stack Developer with 2 years of experience in web application development. I've engineered powerful web applications with React and Node.js, boosting client engagement by 30%, and advanced a flight platform's efficiency by 25% through effective module implementation.
            </p>
            <p>
              My expertise spans across React.js, Node.js, and AEM, where I craft high-performance digital solutions. I specialize in developing responsive web applications, creating static and dynamic AEM components, and building scalable backend services that support high-traffic RESTful APIs.
            </p>
            <p>
              I have a proven track record of improving user satisfaction by 20%, enhancing cross-platform compatibility, and reducing data retrieval times by 30% through efficient data management. My work focuses on mobile-first accessible layouts and seamless backend integration.
            </p>
            <p>
              I'm seeking a Full Stack Developer role where I can leverage my React.js, Node.js, and AEM skills to create impactful solutions and continue growing as a developer in the tech industry.
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
