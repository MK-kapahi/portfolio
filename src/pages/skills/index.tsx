import { motion } from "framer-motion";
import { skillCategories } from "../../shared/utils/constant";
import { colorFor, getColorClasses } from "../../shared/utils/function";
import "./style.css";

const Skills = () => {

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Heading */}
        <div className="skills-header">
          <h2>Skills & Technologies</h2>
          <div className="underline"></div>
          <p>
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        {/* Skill Cards */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-card">
              <h3>{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${getColorClasses(
                          category.color
                        )}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="tech-section">
          <p>
            Always learning and exploring new technologies to stay current with
            industry trends
          </p>
          <div className="tech-badges">
            <div className="skills-animate">
              {[
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "AWS",
              "Docker",
              "PostgreSQL",
              "MongoDB",
              "Git",
            ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: [0, -14, 0, 14, 0] }} // smooth float loop
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  style={{
                    display: "inline-block",
                    fontWeight: 800,
                    fontSize: "26px",
                    letterSpacing: "0.5px",
                    color: colorFor(skill),
                    textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
