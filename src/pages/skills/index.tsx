import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "../../shared/utils/constant";
import { colorFor, getColorClasses } from "../../shared/utils/function";
import "./style.css";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Heading */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Technologies</h2>
          <div className="underline"></div>
          <p>
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div 
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="skill-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className={`progress-fill ${getColorClasses(
                          category.color
                        )}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 0.5 + (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Badges */}
        <motion.div 
          className="tech-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>
            Always learning and exploring new technologies to stay current with
            industry trends
          </p>
          <div className="tech-badges">
            <div className="skills-animate">
              {[
              "React.js",
              "TypeScript",
              "Node.js",
              "JavaScript",
              "AEM",
              "Angular",
              "MongoDB",
              "Firebase",
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
                  whileHover={{ scale: 1.2, y: -5 }}
                  style={{
                    display: "inline-block",
                    fontWeight: 800,
                    fontSize: "26px",
                    letterSpacing: "0.5px",
                    color: colorFor(skill),
                    textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                    cursor: "pointer",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
