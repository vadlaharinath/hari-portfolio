import { memo } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTerminal,
  FaTools,
  FaLayerGroup,
  FaJava,
  FaCss3Alt,
  FaCube,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiSpringboot,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import {
  TbApi,
  TbBinaryTree,
  TbRepeat,
  TbInfinity,
  TbBrandVscode,
  TbHierarchy,
} from "react-icons/tb";
import "../styles/Skills.css";

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      description: "Interactive single-page apps, responsive UI, component state & modern styling.",
      icon: FaLaptopCode,
      color: "#6366f1",
      accentGradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Context API", icon: TbHierarchy, color: "#61DAFB" },
      ],
    },
    {
      title: "Backend Architecture",
      description: "Scalable REST APIs, MVC services, secure JWT authentication & middleware.",
      icon: FaServer,
      color: "#06b6d4",
      accentGradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#0284C7" },
        { name: "Spring", icon: SiSpring, color: "#6DB33F" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "REST API", icon: TbApi, color: "#0284C7" },
        { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
      ],
    },
    {
      title: "Database Systems",
      description: "NoSQL document stores, relational relational schemas, indexing & queries.",
      icon: FaDatabase,
      color: "#10b981",
      accentGradient: "linear-gradient(135deg, #10b981, #059669)",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#00758F" },
      ],
    },
    {
      title: "Core Programming",
      description: "Strong foundation in object-oriented paradigms, algorithms & clean syntax.",
      icon: FaTerminal,
      color: "#f59e0b",
      accentGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      skills: [
        { name: "Java", icon: FaJava, color: "#ED8B00" },
      ],
    },
    {
      title: "Developer Tools",
      description: "Version control, API testing, efficient code editing & collaboration workflows.",
      icon: FaTools,
      color: "#ec4899",
      accentGradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#8B5CF6" },
        { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
    },
    {
      title: "Engineering Practices",
      description: "Software lifecycle principles, algorithmic thinking & iterative team delivery.",
      icon: FaLayerGroup,
      color: "#8b5cf6",
      accentGradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      skills: [
        { name: "Data Structures", icon: TbBinaryTree, color: "#06B6D4" },
        { name: "OOP", icon: FaCube, color: "#A855F7" },
        { name: "SDLC", icon: TbRepeat, color: "#818CF8" },
        { name: "Agile", icon: TbInfinity, color: "#10B981" },
      ],
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
            Technologies &amp; Frameworks <br />
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
            const CatIcon = cat.icon;
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
                    <CatIcon />
                  </div>
                  <span className="skills-count-badge">
                    {cat.skills.length} Skills
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="card-title">{cat.title}</h3>
                <p className="card-desc">{cat.description}</p>

                {/* Skills Chips with Authentic Brand Logos */}
                <div className="card-chips-wrap">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={sIdx}
                        className="skill-chip"
                        style={{
                          "--skill-color": skill.color,
                        }}
                      >
                        <span className="skill-chip-icon">
                          <SkillIcon />
                        </span>
                        <span className="skill-chip-name">{skill.name}</span>
                      </span>
                    );
                  })}
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
