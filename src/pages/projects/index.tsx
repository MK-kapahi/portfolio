import { ExternalLink } from 'lucide-react';
import './style.css'; // Import CSS file
import { projects } from '../../shared/utils/constant';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-underline"></div>
          <p className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="relative overflow-hidden">
                <img
                  src={project.title}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div>
                  {project.technology.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more"
          >
            <FaGithub className="mr-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
