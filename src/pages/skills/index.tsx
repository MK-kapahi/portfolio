import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import "./style.css";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimateProgress(true);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.3 }
    })
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 },
      ],
      color: "blue",
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
      color: "emerald",
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 80 },
      ],
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue";
      case "emerald":
        return "bg-emerald";
      case "purple":
        return "bg-purple";
      default:
        return "bg-gray";
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Heading */}
        <motion.div 
          ref={ref}
          className="skills-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: '8rem' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Here are the technologies and tools I work with to bring ideas to
            life
          </motion.p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div 
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
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: categoryIndex * 0.2 + 0.5 }}
              >
                {category.title}
              </motion.h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.7 }}
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
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate={animateProgress ? "visible" : "hidden"}
                      ></motion.div>
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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            Always learning and exploring new technologies to stay current with
            industry trends
          </motion.p>
          <motion.div className="tech-badges">
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
              "Figma",
            ].map((tech, index) => (
              <motion.span 
                key={index} 
                className="tech-badge"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
