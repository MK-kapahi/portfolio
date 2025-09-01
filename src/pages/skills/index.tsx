import "./style.css";

const Skills = () => {
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
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
