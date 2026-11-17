import { memo, useState, useEffect, useRef } from "react";
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
import ScrollRevealText from "./ScrollRevealText";
import "../styles/Skills.css";

// Individual Card Component with independent scroll-triggered IntersectionObserver
const SkillCard = memo(function SkillCard({ cat, idx }) {
  const cardRef = useRef(null);
  const [cardAnimState, setCardAnimState] = useState("initial"); // "initial" | "animating" | "completed"

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion for accessibility
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCardAnimState("completed");
      return;
    }

    // Trigger animation independently when ~25% of this specific card enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardAnimState("animating");
            observer.disconnect();

            // Total duration: stagger delay + 1350ms gravity animation + buffer
            const baseCardDelay = (idx % 3) * 120;
            const totalDuration = baseCardDelay + (cat.skills.length * 140) + 1550;
            const timer = setTimeout(() => {
              setCardAnimState("completed");
            }, totalDuration);

            return () => clearTimeout(timer);
          }
        });
      },
      {
        threshold: 0.25, // 25% visibility of this individual card
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [cat.skills.length, idx]);

  const CatIcon = cat.icon;
  // Natural delay when multiple cards in the same row enter together
  const baseCardDelay = (idx % 3) * 120;

  return (
    <div
      ref={cardRef}
      className={`skill-column-card ${cardAnimState === "animating"
        ? "is-animating"
        : cardAnimState === "completed"
          ? "has-animated"
          : ""
        }`}
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

      {/* Skills Chips with Gravity Ball-Bouncing Animation */}
      <div className="card-chips-wrap">
        {cat.skills.map((skill, sIdx) => {
          const SkillIcon = skill.icon;
          return (
            <span
              key={sIdx}
              className="skill-chip"
              style={{
                "--skill-color": skill.color,
                "--badge-delay": `${baseCardDelay + sIdx * 140}ms`,
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
});

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

          <ScrollRevealText
            as="p"
            className="skills-subtitle"
            start="top 85%"
            end="bottom 55%"
          >
            A comprehensive overview of modern Full Stack frameworks, databases, core languages,
            and software engineering practices I use to build scalable products.
          </ScrollRevealText>
        </div>

        {/* Column-wise Skill Cards Grid (3 Columns) with Independent Per-Card Scroll Trigger */}
        <div className="skills-columns-grid">
          {categories.map((cat, idx) => (
            <SkillCard key={cat.title || idx} cat={cat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);
