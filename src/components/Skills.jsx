import { memo } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTerminal,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";
import "../styles/Skills.css";

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      description: "Interactive single-page apps, responsive UI, component state & modern styling.",
      icon: FaLaptopCode,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Context API"],
      color: "#6366f1",
      accentGradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    },
    {
      title: "Backend Architecture",
      description: "Scalable REST APIs, MVC services, secure JWT authentication & middleware.",
      icon: FaServer,
      skills: ["Node.js", "Express.js", "Spring", "Spring Boot", "REST API", "JWT"],
      color: "#06b6d4",
      accentGradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    },
    {
      title: "Database Systems",
      description: "NoSQL document stores, relational relational schemas, indexing & queries.",
      icon: FaDatabase,
      skills: ["MongoDB", "MySQL"],
      color: "#10b981",
      accentGradient: "linear-gradient(135deg, #10b981, #059669)",
    },
    {
      title: "Core Programming",
      description: "Strong foundation in object-oriented paradigms, algorithms & clean syntax.",
      icon: FaTerminal,
      skills: ["Java"],
      color: "#f59e0b",
      accentGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    },
    {
      title: "Developer Tools",
      description: "Version control, API testing, efficient code editing & collaboration workflows.",
      icon: FaTools,
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      color: "#ec4899",
      accentGradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    },
    {
      title: "Engineering Practices",
      description: "Software lifecycle principles, algorithmic thinking & iterative team delivery.",
      icon: FaLayerGroup,
      skills: ["Data Structures", "OOP", "SDLC", "Agile"],
      color: "#8b5cf6",
      accentGradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <div className="section-tag">
            <span className="tag-dot" />
            <span>TECHNICAL EXPERTISE</span>
          </div>

          <h2 className="skills-title">
            Technologies & Frameworks <br />
            <span className="skills-gradient">I Work With</span>
          </h2>

          <p className="skills-subtitle">
            A comprehensive overview of modern Full Stack frameworks, databases, core languages,
            and software engineering practices I use to build scalable products.
          </p>
        </div>

        {/* Column-wise Skill Cards Grid (3 Columns) */}
        <div className="skills-columns-grid">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="skill-column-card"
                style={{
                  "--card-color": cat.color,
                  "--card-gradient": cat.accentGradient,
                }}
              >
                {/* Top Header */}
                <div className="card-top">
                  <div className="cat-icon-box">
                    <Icon />
                  </div>
                  <span className="skills-count-badge">
                    {cat.skills.length} Skills
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="card-title">{cat.title}</h3>
                <p className="card-desc">{cat.description}</p>

                {/* Skills Chips */}
                <div className="card-chips-wrap">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);
